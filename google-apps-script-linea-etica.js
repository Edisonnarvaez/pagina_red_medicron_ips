/**
 * GOOGLE APPS SCRIPT PARA LÍNEA ÉTICA - RED MEDICRON IPS
 * 
 * Sistema confidencial para reportes éticos y de integridad
 * 
 * Instrucciones de configuración:
 * 1. Ve a https://script.google.com
 * 2. Crea un nuevo proyecto
 * 3. Nombra el proyecto: "Red Medicron IPS - Línea Ética"
 * 4. Copia y pega este código
 * 5. Configura una hoja de cálculo de Google para almacenar los reportes
 * 6. Despliega como aplicación web
 * 7. Actualiza la URL en LineaEticaPage.tsx
 */

// ===== CONFIGURACIÓN - ACTUALIZA ESTOS VALORES =====
const SHEET_ID = 'TU_SHEET_ID_LINEA_ETICA_AQUI'; // ID de tu hoja de cálculo de Google para Línea Ética
const SHEET_NAME = 'ReportesEticos'; // Nombre de la pestaña en la hoja

// Emails del comité de ética (IMPORTANTE: Usar emails seguros)
const COMITE_ETICA_EMAILS = [
    'direccion@redmedicron.com',
    'comite.etica@redmedicron.com',
    'legal@redmedicron.com'
];

// Email para notificaciones de recepción
const EMAIL_NOTIFICACIONES = 'lineaetica@redmedicron.com';

// ===== CONFIGURACIÓN AVANZADA =====
const CONFIG = {
    // Zona horaria de Colombia
    timeZone: 'America/Bogota',
    
    // Tiempo de respuesta objetivo (días hábiles)
    tiempoRespuesta: 10,
    
    // Configuración de seguridad
    cifrarDatosPersonales: true,
    
    // Configuración de seguimiento
    generarCodigoSeguimiento: true
};

/**
 * Función principal que maneja las solicitudes POST
 */
function doPost(e) {
    try {
        console.log('🔒 Recibiendo reporte de Línea Ética...');
        
        // Parsear los datos del formulario
        const data = JSON.parse(e.postData.contents);
        console.log('📋 Datos recibidos:', data);
        
        // Validaciones básicas
        if (!data.tipoReporte || !data.descripcion) {
            throw new Error('Faltan datos obligatorios: tipo de reporte y descripción');
        }
        
        // Generar código de seguimiento si no existe
        const codigoSeguimiento = data.reportId || generarCodigoEtico();
        
        // Guardar en la hoja de cálculo
        const resultado = guardarReporteEtico({
            ...data,
            reportId: codigoSeguimiento
        });
        
        // Enviar notificaciones
        enviarNotificacionesEticas(data, codigoSeguimiento);
        
        // Enviar confirmación al reportante (si no es anónimo)
        if (!data.anonimo && data.email) {
            enviarConfirmacionReportante(data.email, codigoSeguimiento);
        }
        
        console.log('✅ Reporte ético procesado exitosamente:', codigoSeguimiento);
        
        return ContentService
            .createTextOutput(JSON.stringify({
                success: true,
                message: 'Reporte ético recibido y procesado',
                reportId: codigoSeguimiento,
                fechaLimiteRespuesta: calcularFechaLimiteRespuesta()
            }))
            .setMimeType(ContentService.MimeType.JSON);
            
    } catch (error) {
        console.error('❌ Error procesando reporte ético:', error);
        
        return ContentService
            .createTextOutput(JSON.stringify({
                success: false,
                message: 'Error procesando el reporte: ' + error.message
            }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

/**
 * Generar código único para reportes éticos
 */
function generarCodigoEtico() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
    
    return `LE-${year}${month}${day}-${random}`;
}

/**
 * Guardar reporte ético en Google Sheets
 */
function guardarReporteEtico(data) {
    try {
        const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
        
        // Si la hoja no existe, crearla con encabezados
        if (!sheet) {
            crearHojaReportesEticos();
            return guardarReporteEtico(data);
        }
        
        // Preparar datos para la fila
        const fila = [
            data.fecha || new Date().toLocaleString('es-CO', { timeZone: CONFIG.timeZone }),
            data.reportId,
            data.tipoReporte,
            data.areaInvolucrada || 'No especificada',
            data.descripcion,
            data.fechaIncidente || 'No especificada',
            data.testigos || 'No especificados',
            data.evidencias || 'No especificadas',
            data.anonimo === true ? 'ANÓNIMO' : (data.nombre || 'No proporcionado'),
            data.anonimo === true ? 'ANÓNIMO' : (data.email || 'No proporcionado'),
            data.anonimo === true ? 'ANÓNIMO' : (data.telefono || 'No proporcionado'),
            'PENDIENTE', // Estado inicial
            calcularFechaLimiteRespuesta(),
            '', // Responsable asignado
            '', // Observaciones
            '' // Acciones tomadas
        ];
        
        // Agregar la fila
        sheet.appendRow(fila);
        
        // Aplicar formato condicional para reportes anónimos
        if (data.anonimo === true) {
            const lastRow = sheet.getLastRow();
            const range = sheet.getRange(lastRow, 9, 1, 3); // Columnas de datos personales
            range.setBackground('#FFE6E6'); // Fondo rojo claro para datos anónimos
        }
        
        console.log('✅ Reporte ético guardado en Google Sheets');
        return { success: true, reportId: data.reportId };
        
    } catch (error) {
        console.error('❌ Error guardando reporte ético:', error);
        throw new Error('Error al guardar el reporte: ' + error.message);
    }
}

/**
 * Crear hoja de reportes éticos con encabezados
 */
function crearHojaReportesEticos() {
    try {
        const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
        const sheet = spreadsheet.insertSheet(SHEET_NAME);
        
        // Encabezados
        const headers = [
            'Fecha de Reporte',
            'Código de Seguimiento',
            'Tipo de Reporte',
            'Área Involucrada',
            'Descripción',
            'Fecha del Incidente',
            'Testigos',
            'Evidencias',
            'Nombre Reportante',
            'Email Reportante',
            'Teléfono Reportante',
            'Estado',
            'Fecha Límite Respuesta',
            'Responsable Asignado',
            'Observaciones',
            'Acciones Tomadas'
        ];
        
        // Insertar encabezados
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
        
        // Formato de encabezados
        const headerRange = sheet.getRange(1, 1, 1, headers.length);
        headerRange.setBackground('#1B5E20'); // Verde oscuro
        headerRange.setFontColor('#FFFFFF');
        headerRange.setFontWeight('bold');
        headerRange.setWrap(true);
        
        // Ajustar ancho de columnas
        sheet.setColumnWidth(1, 150); // Fecha
        sheet.setColumnWidth(2, 150); // Código
        sheet.setColumnWidth(3, 200); // Tipo
        sheet.setColumnWidth(4, 150); // Área
        sheet.setColumnWidth(5, 300); // Descripción
        sheet.setColumnWidth(6, 120); // Fecha incidente
        sheet.setColumnWidth(7, 200); // Testigos
        sheet.setColumnWidth(8, 200); // Evidencias
        sheet.setColumnWidth(9, 150); // Nombre
        sheet.setColumnWidth(10, 200); // Email
        sheet.setColumnWidth(11, 120); // Teléfono
        sheet.setColumnWidth(12, 100); // Estado
        sheet.setColumnWidth(13, 150); // Fecha límite
        sheet.setColumnWidth(14, 150); // Responsable
        sheet.setColumnWidth(15, 250); // Observaciones
        sheet.setColumnWidth(16, 250); // Acciones
        
        // Congelar primera fila
        sheet.setFrozenRows(1);
        
        console.log('✅ Hoja de reportes éticos creada exitosamente');
        
    } catch (error) {
        console.error('❌ Error creando hoja de reportes éticos:', error);
        throw new Error('Error al crear la hoja: ' + error.message);
    }
}

/**
 * Calcular fecha límite de respuesta (días hábiles)
 */
function calcularFechaLimiteRespuesta() {
    const fechaInicio = new Date();
    let diasAgregados = 0;
    let fechaLimite = new Date(fechaInicio);
    
    while (diasAgregados < CONFIG.tiempoRespuesta) {
        fechaLimite.setDate(fechaLimite.getDate() + 1);
        
        // Excluir sábados (6) y domingos (0)
        if (fechaLimite.getDay() !== 0 && fechaLimite.getDay() !== 6) {
            diasAgregados++;
        }
    }
    
    return fechaLimite.toLocaleDateString('es-CO');
}

/**
 * Enviar notificaciones al comité de ética
 */
function enviarNotificacionesEticas(data, codigoSeguimiento) {
    try {
        const fechaLimite = calcularFechaLimiteRespuesta();
        
        // Determinar nivel de urgencia
        const esUrgente = ['corrupcion', 'acoso_discriminacion'].includes(data.tipoReporte);
        const prioridad = esUrgente ? 'ALTA' : 'NORMAL';
        
        const asunto = `🔒 [LÍNEA ÉTICA - ${prioridad}] Nuevo Reporte: ${codigoSeguimiento}`;
        
        const cuerpoEmail = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #1B5E20, #4CAF50); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .info-box { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #4CAF50; }
        .urgent { border-left-color: #F44336; background-color: #FFEBEE; }
        .footer { background: #E0E0E0; padding: 15px; text-align: center; font-size: 12px; }
        .confidential { background: #FFF3E0; padding: 10px; border: 2px solid #FF9800; margin: 15px 0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🔒 LÍNEA ÉTICA - RED MEDICRON IPS</h1>
        <h2>Nuevo Reporte Recibido</h2>
    </div>
    
    <div class="content">
        <div class="confidential">
            <strong>⚠️ INFORMACIÓN CONFIDENCIAL:</strong> Este mensaje contiene información sensible del sistema de Línea Ética. 
            Maneje con estricta confidencialidad según las políticas institucionales.
        </div>
        
        <div class="info-box ${esUrgente ? 'urgent' : ''}">
            <h3>📋 Información del Reporte</h3>
            <p><strong>Código de Seguimiento:</strong> ${codigoSeguimiento}</p>
            <p><strong>Fecha de Reporte:</strong> ${data.fecha}</p>
            <p><strong>Tipo de Reporte:</strong> ${data.tipoReporte}</p>
            <p><strong>Prioridad:</strong> <span style="color: ${esUrgente ? '#F44336' : '#4CAF50'};">${prioridad}</span></p>
            <p><strong>Área Involucrada:</strong> ${data.areaInvolucrada || 'No especificada'}</p>
            <p><strong>Reporte Anónimo:</strong> ${data.anonimo === true ? 'SÍ' : 'NO'}</p>
        </div>
        
        <div class="info-box">
            <h3>📝 Descripción</h3>
            <p>${data.descripcion}</p>
        </div>
        
        ${data.fechaIncidente ? `
        <div class="info-box">
            <h3>📅 Fecha del Incidente</h3>
            <p>${data.fechaIncidente}</p>
        </div>
        ` : ''}
        
        ${data.testigos ? `
        <div class="info-box">
            <h3>👥 Testigos</h3>
            <p>${data.testigos}</p>
        </div>
        ` : ''}
        
        ${data.evidencias ? `
        <div class="info-box">
            <h3>📄 Evidencias Disponibles</h3>
            <p>${data.evidencias}</p>
        </div>
        ` : ''}
        
        ${!data.anonimo && data.nombre ? `
        <div class="info-box">
            <h3>👤 Datos del Reportante</h3>
            <p><strong>Nombre:</strong> ${data.nombre}</p>
            ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ''}
            ${data.telefono ? `<p><strong>Teléfono:</strong> ${data.telefono}</p>` : ''}
        </div>
        ` : ''}
        
        <div class="info-box">
            <h3>⏰ Cronograma</h3>
            <p><strong>Fecha Límite de Respuesta:</strong> ${fechaLimite}</p>
            <p><strong>Días Hábiles para Respuesta:</strong> ${CONFIG.tiempoRespuesta} días</p>
        </div>
        
        <div class="info-box">
            <h3>📊 Próximos Pasos</h3>
            <ol>
                <li>Asignar responsable del caso</li>
                <li>Revisar y validar la información</li>
                <li>Iniciar investigación según protocolo</li>
                <li>Documentar avances en el sistema</li>
                <li>Responder antes de la fecha límite</li>
            </ol>
        </div>
    </div>
    
    <div class="footer">
        <p>Este reporte fue generado automáticamente por el Sistema de Línea Ética de Red Medicron IPS</p>
        <p>Para acceder al sistema de seguimiento, ingresa a: <a href="https://docs.google.com/spreadsheets/d/${SHEET_ID}">Panel de Control</a></p>
        <p><strong>Confidencial:</strong> Este mensaje es estrictamente confidencial y está dirigido únicamente al comité de ética.</p>
    </div>
</body>
</html>
        `;
        
        // Enviar email a cada miembro del comité
        COMITE_ETICA_EMAILS.forEach(email => {
            GmailApp.sendEmail(
                email,
                asunto,
                '', // Texto plano vacío
                {
                    htmlBody: cuerpoEmail,
                    attachments: [],
                    replyTo: EMAIL_NOTIFICACIONES
                }
            );
        });
        
        console.log(`✅ Notificaciones enviadas al comité de ética (${COMITE_ETICA_EMAILS.length} emails)`);
        
    } catch (error) {
        console.error('❌ Error enviando notificaciones al comité:', error);
        // No lanzar error para no afectar el proceso principal
    }
}

/**
 * Enviar confirmación al reportante (si no es anónimo)
 */
function enviarConfirmacionReportante(email, codigoSeguimiento) {
    try {
        const asunto = `✅ Confirmación de Reporte Ético - ${codigoSeguimiento}`;
        
        const cuerpoEmail = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #1B5E20, #4CAF50); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .info-box { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #4CAF50; }
        .footer { background: #E0E0E0; padding: 15px; text-align: center; font-size: 12px; }
        .security-notice { background: #E8F5E8; padding: 15px; border: 1px solid #4CAF50; margin: 15px 0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🔒 Red Medicron IPS</h1>
        <h2>Confirmación de Reporte Ético</h2>
    </div>
    
    <div class="content">
        <div class="security-notice">
            <h3>✅ Tu reporte ha sido recibido exitosamente</h3>
            <p>Gracias por contribuir a mantener los altos estándares éticos de Red Medicron IPS.</p>
        </div>
        
        <div class="info-box">
            <h3>📋 Información de tu Reporte</h3>
            <p><strong>Código de Seguimiento:</strong> ${codigoSeguimiento}</p>
            <p><strong>Fecha de Recepción:</strong> ${new Date().toLocaleString('es-CO', { timeZone: CONFIG.timeZone })}</p>
            <p><strong>Estado:</strong> RECIBIDO Y EN PROCESO</p>
        </div>
        
        <div class="info-box">
            <h3>📅 Cronograma de Respuesta</h3>
            <p><strong>Fecha Límite de Respuesta:</strong> ${calcularFechaLimiteRespuesta()}</p>
            <p>Recibirás una respuesta oficial dentro de ${CONFIG.tiempoRespuesta} días hábiles.</p>
        </div>
        
        <div class="info-box">
            <h3>🔒 Confidencialidad Garantizada</h3>
            <ul>
                <li>Tu información será tratada con estricta confidencialidad</li>
                <li>El reporte será revisado únicamente por el comité de ética autorizado</li>
                <li>Se garantiza la protección contra represalias</li>
                <li>El proceso se realizará conforme a las políticas institucionales</li>
            </ul>
        </div>
        
        <div class="info-box">
            <h3>📞 Contacto Adicional</h3>
            <p>Si necesitas proporcionar información adicional o tienes preguntas:</p>
            <p><strong>Email:</strong> ${EMAIL_NOTIFICACIONES}</p>
            <p><strong>Teléfono:</strong> 01 8000 123 456 opción 4</p>
            <p><strong>Código de Referencia:</strong> ${codigoSeguimiento}</p>
        </div>
    </div>
    
    <div class="footer">
        <p>Red Medicron IPS - Compromiso con la Ética y la Transparencia</p>
        <p>Este mensaje es confidencial. Si lo recibiste por error, elimínalo inmediatamente.</p>
    </div>
</body>
</html>
        `;
        
        GmailApp.sendEmail(
            email,
            asunto,
            '', // Texto plano vacío
            {
                htmlBody: cuerpoEmail,
                replyTo: EMAIL_NOTIFICACIONES
            }
        );
        
        console.log(`✅ Confirmación enviada al reportante: ${email}`);
        
    } catch (error) {
        console.error('❌ Error enviando confirmación al reportante:', error);
        // No lanzar error para no afectar el proceso principal
    }
}

/**
 * Función para probar el sistema
 */
function probarLineaEtica() {
    const datosTest = {
        reportId: generarCodigoEtico(),
        fecha: new Date().toLocaleString('es-CO', { timeZone: CONFIG.timeZone }),
        tipoReporte: 'corrupcion',
        areaInvolucrada: 'Facturación',
        descripcion: 'Reporte de prueba del sistema de Línea Ética',
        fechaIncidente: '2024-01-15',
        testigos: 'Testigo de prueba',
        evidencias: 'Documentos de prueba',
        nombre: 'Usuario de Prueba',
        email: 'test@redmedicron.com',
        telefono: '123456789',
        anonimo: false
    };
    
    try {
        console.log('🧪 Iniciando prueba del sistema de Línea Ética...');
        
        // Probar guardado
        const resultado = guardarReporteEtico(datosTest);
        console.log('✅ Prueba de guardado exitosa:', resultado);
        
        // Probar notificaciones
        enviarNotificacionesEticas(datosTest, datosTest.reportId);
        enviarConfirmacionReportante(datosTest.email, datosTest.reportId);
        
        console.log('✅ Prueba completa del sistema de Línea Ética exitosa');
        
    } catch (error) {
        console.error('❌ Error en la prueba del sistema:', error);
    }
}
