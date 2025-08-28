/**
 * GOOGLE APPS SCRIPT PARA CONVOCATORIAS LABORALES - RED MEDICRON IPS
 * 
 * Sistema completo para gestión de postulaciones laborales que incluye:
 * - Almacenamiento en Google Sheets
 * - Guardado de CVs en Google Drive
 * - Notificación automática por email
 * - CORS configurado correctamente para desarrollo y producción
 * 
 * Instrucciones de configuración:
 * 1. Ve a https://script.google.com
 * 2. Crea un nuevo proyecto
 * 3. Nombra el proyecto: "Red Medicron IPS - Convocatorias"
 * 4. Copia y pega este código
 * 5. Configura las constantes de configuración abajo
 * 6. Despliega como aplicación web con acceso "Cualquier usuario"
 * 7. Actualiza la URL en TalentoHumanoPage.tsx
 */

// ===== CONFIGURACIÓN - ACTUALIZA ESTOS VALORES =====
const CONFIG = {
  // ID de la hoja de cálculo donde se guardarán las postulaciones
  SHEET_ID: 'TU_SHEET_ID_CONVOCATORIA_AQUI',
  
  // Nombre de la pestaña en la hoja de cálculo
  SHEET_NAME: 'Postulaciones',
  
  // ID de la carpeta de Google Drive donde se guardarán los CVs
  DRIVE_FOLDER_ID: 'TU_FOLDER_ID_DRIVE_AQUI',
  
  // Email de gestión humana para notificaciones
  EMAIL_GESTION_HUMANA: 'gestionhumana@redmedicronips.com.co',
  
  // Email adicional para copia (opcional)
  EMAIL_COPIA: '', // Dejar vacío si no se necesita
  
  // Configuración de CORS
  ALLOWED_ORIGINS: [
    'https://redmedicronips.com.co',
    'https://www.redmedicronips.com.co',
    'http://localhost:5173', // Para desarrollo local
    'http://localhost:3000'  // Para desarrollo local
  ]
};

/**
 * Función para manejar solicitudes GET (necesario para CORS)
 */
function doGet(e) {
  return createCorsResponse({
    success: true,
    message: 'API de Convocatorias Red Medicron IPS funcionando',
    timestamp: new Date().toISOString()
  });
}

/**
 * Función principal que maneja las solicitudes POST
 */
function doPost(e) {
  try {
    // Parsear los datos del formulario
    const requestData = JSON.parse(e.postData.contents);
    
    // Log para debugging
    console.log('Datos recibidos:', requestData);
    
    // Validar datos requeridos
    if (!validateFormData(requestData)) {
      return createCorsResponse({
        success: false,
        message: 'Datos del formulario incompletos'
      }, 400);
    }
    
    // Procesar la postulación
    const result = processPostulacion(requestData);
    
    if (result.success) {
      return createCorsResponse({
        success: true,
        message: 'Postulación procesada exitosamente',
        codigoSeguimiento: result.codigoSeguimiento
      });
    } else {
      return createCorsResponse({
        success: false,
        message: result.message
      }, 500);
    }
    
  } catch (error) {
    console.error('Error en doPost:', error);
    return createCorsResponse({
      success: false,
      message: 'Error interno del servidor: ' + error.toString()
    }, 500);
  }
}

/**
 * Crea una respuesta con headers CORS configurados
 */
function createCorsResponse(data, statusCode = 200) {
  const jsonResponse = JSON.stringify(data);
  const output = ContentService.createTextOutput(jsonResponse);
  output.setMimeType(ContentService.MimeType.JSON);
  
  // Configurar headers CORS para permitir todas las solicitudes
  output.setHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '3600'
  });
  
  return output;
}

/**
 * Valida los datos del formulario
 */
function validateFormData(data) {
  const requiredFields = [
    'nombre', 'apellido', 'email', 'telefono', 
    'numeroDocumento', 'cargoAspira', 'archivoBase64', 'archivoNombre'
  ];
  
  return requiredFields.every(field => data[field] && data[field].toString().trim() !== '');
}

/**
 * Procesa una postulación completa
 */
function processPostulacion(data) {
  try {
    // Generar código de seguimiento único
    const codigoSeguimiento = generateTrackingCode();
    
    // 1. Guardar el CV en Google Drive
    const driveFileId = saveCVToDrive(data.archivoBase64, data.archivoNombre, data.nombre, data.apellido);
    
    // 2. Guardar datos en Google Sheets
    const sheetResult = saveToSheet(data, codigoSeguimiento, driveFileId);
    
    // 3. Enviar notificación por email
    sendNotificationEmail(data, codigoSeguimiento, driveFileId);
    
    return {
      success: true,
      codigoSeguimiento: codigoSeguimiento,
      driveFileId: driveFileId
    };
    
  } catch (error) {
    console.error('Error procesando postulación:', error);
    return {
      success: false,
      message: 'Error al procesar la postulación: ' + error.toString()
    };
  }
}

/**
 * Guarda el CV en Google Drive
 */
function saveCVToDrive(base64Data, fileName, nombre, apellido) {
  try {
    // Obtener la carpeta de destino
    const folder = DriveApp.getFolderById(CONFIG.DRIVE_FOLDER_ID);
    
    // Decodificar el archivo base64
    const blob = Utilities.newBlob(
      Utilities.base64Decode(base64Data),
      'application/pdf'
    );
    
    // Crear nombre único para el archivo
    const timestamp = new Date().toISOString().slice(0, 10);
    const cleanFileName = `CV_${apellido}_${nombre}_${timestamp}.pdf`;
    
    // Guardar el archivo
    const file = folder.createFile(blob.setName(cleanFileName));
    
    // Hacer el archivo accesible para lectores
    file.setSharing(DriveApp.Access.DOMAIN_WITH_LINK, DriveApp.Permission.VIEW);
    
    console.log('CV guardado en Drive:', file.getId());
    return file.getId();
    
  } catch (error) {
    console.error('Error guardando CV en Drive:', error);
    throw new Error('No se pudo guardar el CV en Google Drive');
  }
}

/**
 * Guarda los datos en Google Sheets
 */
function saveToSheet(data, codigoSeguimiento, driveFileId) {
  try {
    const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.SHEET_NAME);
    
    // Crear encabezados si es la primera vez
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Código Seguimiento', 'Fecha Postulación', 'Nombre', 'Apellido', 'Email', 'Teléfono',
        'Tipo Documento', 'Número Documento', 'Cargo Aspira', 'Nivel Educativo', 'Experiencia',
        'CV Drive ID', 'CV Drive URL', 'Estado', 'Observaciones'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Formatear encabezados
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#4a90e2');
      headerRange.setFontColor('white');
      headerRange.setFontWeight('bold');
    }
    
    // Preparar los datos para insertar
    const driveUrl = `https://drive.google.com/file/d/${driveFileId}/view`;
    const rowData = [
      codigoSeguimiento,
      data.fechaPostulacion || new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' }),
      data.nombre,
      data.apellido,
      data.email,
      data.telefono,
      data.tipoDocumento,
      data.numeroDocumento,
      data.cargoAspira,
      data.nivelEducativo || 'No especificado',
      data.experiencia || 'No especificada',
      driveFileId,
      driveUrl,
      'Pendiente Revisión',
      ''
    ];
    
    // Insertar la nueva fila
    sheet.appendRow(rowData);
    
    console.log('Datos guardados en Sheets');
    return true;
    
  } catch (error) {
    console.error('Error guardando en Sheets:', error);
    throw new Error('No se pudieron guardar los datos en Google Sheets');
  }
}

/**
 * Envía notificación por email
 */
function sendNotificationEmail(data, codigoSeguimiento, driveFileId) {
  try {
    const driveUrl = `https://drive.google.com/file/d/${driveFileId}/view`;
    
    // Email para gestión humana
    const subject = `Nueva Postulación Laboral - ${data.cargoAspira} - Red Medicron IPS`;
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #4a90e2, #2c5530); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Nueva Postulación Laboral</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Red Medicron IPS - Gestión Humana</p>
        </div>
        
        <!-- Información del candidato -->
        <div style="padding: 20px; background-color: #f8f9fa;">
          <h2 style="color: #2c5530; margin-top: 0;">Información del Candidato</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 40%;">Código de Seguimiento:</td><td style="padding: 8px 0;">${codigoSeguimiento}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Nombre Completo:</td><td style="padding: 8px 0;">${data.nombre} ${data.apellido}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td style="padding: 8px 0;">${data.email}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Teléfono:</td><td style="padding: 8px 0;">${data.telefono}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Documento:</td><td style="padding: 8px 0;">${data.tipoDocumento} - ${data.numeroDocumento}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Cargo que Aspira:</td><td style="padding: 8px 0; color: #4a90e2; font-weight: bold;">${data.cargoAspira}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Nivel Educativo:</td><td style="padding: 8px 0;">${data.nivelEducativo || 'No especificado'}</td></tr>
          </table>
        </div>
        
        <!-- Experiencia -->
        ${data.experiencia ? `
        <div style="padding: 20px; border-top: 1px solid #eee;">
          <h3 style="color: #2c5530; margin-top: 0;">Experiencia Laboral</h3>
          <p style="background-color: #f1f3f4; padding: 15px; border-radius: 5px; margin: 0;">${data.experiencia}</p>
        </div>
        ` : ''}
        
        <!-- Acciones -->
        <div style="padding: 20px; background-color: #f8f9fa; text-align: center; border-top: 1px solid #eee;">
          <h3 style="color: #2c5530; margin-top: 0;">Acciones Requeridas</h3>
          <a href="${driveUrl}" 
             style="display: inline-block; background-color: #4a90e2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 5px; font-weight: bold;">
            📄 Ver Hoja de Vida
          </a>
          <br>
          <p style="font-size: 14px; color: #666; margin-top: 15px;">
            Fecha de postulación: ${data.fechaPostulacion || new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })}
          </p>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #2c5530; color: white; padding: 15px; text-align: center; font-size: 14px;">
          <p style="margin: 0;">Red Medicron IPS - Sistema de Gestión de Talento Humano</p>
          <p style="margin: 5px 0 0 0; opacity: 0.8;">Este es un email automático, no responder.</p>
        </div>
      </div>
    `;
    
    // Enviar email principal
    GmailApp.sendEmail(
      CONFIG.EMAIL_GESTION_HUMANA,
      subject,
      '', // Texto plano vacío
      {
        htmlBody: htmlBody,
        name: 'Red Medicron IPS - Sistema de Convocatorias'
      }
    );
    
    // Enviar copia si está configurada
    if (CONFIG.EMAIL_COPIA && CONFIG.EMAIL_COPIA.trim() !== '') {
      GmailApp.sendEmail(
        CONFIG.EMAIL_COPIA,
        subject,
        '', 
        {
          htmlBody: htmlBody,
          name: 'Red Medicron IPS - Sistema de Convocatorias'
        }
      );
    }
    
    // Email de confirmación al candidato
    const confirmationSubject = `Confirmación de Postulación - Red Medicron IPS - Código: ${codigoSeguimiento}`;
    const confirmationBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #4a90e2, #2c5530); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">¡Postulación Recibida!</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Red Medicron IPS</p>
        </div>
        
        <!-- Contenido -->
        <div style="padding: 30px;">
          <h2 style="color: #2c5530;">Hola ${data.nombre},</h2>
          <p>Hemos recibido tu postulación para el cargo de <strong>${data.cargoAspira}</strong>.</p>
          
          <div style="background-color: #e3f2fd; border-left: 4px solid #4a90e2; padding: 15px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">Tu código de seguimiento es: <span style="color: #4a90e2; font-size: 18px;">${codigoSeguimiento}</span></p>
          </div>
          
          <p>Nuestro equipo de Gestión Humana revisará tu aplicación y nos pondremos en contacto contigo en caso de que tu perfil sea seleccionado para continuar en el proceso.</p>
          
          <div style="background-color: #f1f8e9; border-left: 4px solid #4caf50; padding: 15px; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; color: #2e7d32;">Próximos Pasos:</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Revisión inicial de tu hoja de vida</li>
              <li>Evaluación de cumplimiento de requisitos</li>
              <li>Contacto telefónico o por email si eres preseleccionado</li>
            </ul>
          </div>
          
          <p style="color: #666;">Si tienes alguna pregunta, puedes contactarnos en <a href="mailto:gestionhumana@redmedicronips.com.co" style="color: #4a90e2;">gestionhumana@redmedicronips.com.co</a></p>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #eee;">
          <p style="margin: 0; color: #666; font-size: 14px;">¡Gracias por tu interés en formar parte de Red Medicron IPS!</p>
          <p style="margin: 5px 0 0 0; color: #999; font-size: 12px;">Este es un email automático, no responder.</p>
        </div>
      </div>
    `;
    
    GmailApp.sendEmail(
      data.email,
      confirmationSubject,
      '',
      {
        htmlBody: confirmationBody,
        name: 'Red Medicron IPS - Gestión Humana'
      }
    );
    
    console.log('Emails enviados exitosamente');
    
  } catch (error) {
    console.error('Error enviando emails:', error);
    // No lanzar error aquí para no fallar todo el proceso
  }
}

/**
 * Genera un código de seguimiento único
 */
function generateTrackingCode() {
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.random().toString(36).substr(2, 6).toUpperCase();
  return `RMIPS-${timestamp}-${random}`;
}

/**
 * Función para testing (opcional)
 */
function testFunction() {
  const testData = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan.perez@email.com',
    telefono: '3001234567',
    tipoDocumento: 'cedula',
    numeroDocumento: '12345678',
    cargoAspira: 'Médico General',
    nivelEducativo: 'universitario',
    experiencia: 'Experiencia de 3 años en medicina general',
    archivoBase64: 'JVBERi0xLjQK...', // Base64 de ejemplo
    archivoNombre: 'CV_Juan_Perez.pdf',
    fechaPostulacion: new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })
  };
  
  const result = processPostulacion(testData);
  console.log('Resultado del test:', result);
  
  return result;
}
