/**
 * GOOGLE APPS SCRIPT PARA FORMULARIO PQRSF - RED MEDICRON IPS
 * 
 * Instrucciones de configuración:
 * 1. Ve a https://script.google.com
 * 2. Crea un nuevo proyecto
 * 3. Nombra el proyecto: "Red Medicron IPS - PQRSF"
 * 4. Copia y pega este código
 * 5. Configura una hoja de cálculo de Google para almacenar los datos
 * 6. Despliega como aplicación web
 * 7. Actualiza la URL en PQRSFPage.tsx
 */

// ===== CONFIGURACIÓN - ACTUALIZA ESTOS VALORES =====
const SHEET_ID = 'TU_SHEET_ID_PQRSF_AQUI'; // ID de tu hoja de cálculo de Google para PQRSF
const SHEET_NAME = 'PQRSF'; // Nombre de la pestaña en la hoja

// Emails de notificaciones
const NOTIFICATION_EMAIL = 'pqrsf@redmedicronips.com'; // Email principal PQRSF
const CC_EMAILS = ['gerencia@redmedicronips.com', 'calidad@redmedicronips.com']; // Emails en copia

// Configuración de respuesta automática
const AUTO_REPLY_ENABLED = true;
const RESPONSE_TIME_DAYS = 15; // Días hábiles para respuesta

/**
 * Función principal que maneja las solicitudes POST
 */
function doPost(e) {
  try {
    // Obtener datos del formulario
    const data = JSON.parse(e.postData.contents);
    
    // Validar datos requeridos
    if (!data.tipoPQRSF || !data.mensaje) {
      return createResponse(false, 'Faltan campos requeridos: Tipo de PQRSF y Mensaje');
    }
    
    // Generar número de radicado único
    const radicado = generateRadicado();
    
    // Agregar datos adicionales
    data.radicado = radicado;
    data.fechaRegistro = new Date();
    data.estado = 'Recibida';
    data.fechaLimiteRespuesta = calculateResponseDate();
    
    // Guardar en hoja de cálculo
    const result = saveToSheet(data);
    
    if (result.success) {
      // Enviar notificaciones por email
      if (NOTIFICATION_EMAIL) {
        sendNotificationEmails(data);
      }
      
      // Enviar confirmación automática al usuario (si no es anónimo)
      if (AUTO_REPLY_ENABLED && !data.anonimo && data.email) {
        sendAutoReply(data);
      }
      
      return createResponse(true, `PQRSF registrada exitosamente. Número de radicado: ${radicado}`, { radicado });
    } else {
      return createResponse(false, 'Error al guardar en la base de datos: ' + result.error);
    }
    
  } catch (error) {
    console.error('Error en doPost:', error);
    return createResponse(false, 'Error interno del servidor: ' + error.toString());
  }
}

/**
 * Guarda los datos en la hoja de cálculo
 */
function saveToSheet(data) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // Si la hoja no existe, crearla con encabezados
    if (!sheet) {
      const newSheet = SpreadsheetApp.openById(SHEET_ID).insertSheet(SHEET_NAME);
      const headers = [
        'Radicado', 'Fecha Registro', 'Tipo PQRSF', 'Estado', 'Nombre', 'Apellido', 
        'Email', 'Teléfono', 'Tipo Documento', 'Número Documento', 'Sede', 
        'Mensaje', 'Anónimo', 'Fecha Límite Respuesta', 'Respuesta', 'Fecha Respuesta',
        'Responsable Respuesta', 'Observaciones'
      ];
      newSheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      newSheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
      newSheet.getRange(1, 1, 1, headers.length).setBackground('#4285f4');
      newSheet.getRange(1, 1, 1, headers.length).setFontColor('white');
    }
    
    // Preparar fila de datos
    const rowData = [
      data.radicado,
      data.fechaRegistro,
      data.tipoPQRSF,
      data.estado,
      data.anonimo ? 'ANÓNIMO' : data.nombre,
      data.anonimo ? '' : data.apellido,
      data.anonimo ? 'anonimo@redmedicronips.com' : data.email,
      data.anonimo ? '' : data.telefono,
      data.anonimo ? '' : data.tipoDocumento,
      data.anonimo ? '' : data.numeroDocumento,
      data.sede,
      data.mensaje,
      data.anonimo ? 'SÍ' : 'NO',
      data.fechaLimiteRespuesta,
      '', // Respuesta (vacía inicialmente)
      '', // Fecha Respuesta (vacía inicialmente)
      '', // Responsable Respuesta (vacía inicialmente)
      ''  // Observaciones (vacía inicialmente)
    ];
    
    // Agregar fila
    const targetSheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    targetSheet.appendRow(rowData);
    
    return { success: true };
    
  } catch (error) {
    console.error('Error guardando en sheet:', error);
    return { success: false, error: error.toString() };
  }
}

/**
 * Genera un número de radicado único
 */
function generateRadicado() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const time = String(now.getTime()).slice(-6); // Últimos 6 dígitos del timestamp
  
  return `RMIPS-${year}${month}${day}-${time}`;
}

/**
 * Calcula la fecha límite de respuesta (15 días hábiles)
 */
function calculateResponseDate() {
  const startDate = new Date();
  let businessDays = 0;
  let currentDate = new Date(startDate);
  
  while (businessDays < RESPONSE_TIME_DAYS) {
    currentDate.setDate(currentDate.getDate() + 1);
    const dayOfWeek = currentDate.getDay();
    
    // Si no es sábado (6) ni domingo (0), contar como día hábil
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      businessDays++;
    }
  }
  
  return currentDate;
}

/**
 * Envía emails de notificación al equipo
 */
function sendNotificationEmails(data) {
  try {
    const subject = `🏥 Nueva PQRSF - ${data.tipoPQRSF.toUpperCase()} - ${data.radicado}`;
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #155dfc, #00a63e); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Nueva PQRSF Recibida</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Red Medicron IPS</p>
        </div>
        
        <div style="padding: 20px; background: #f8f9fa;">
          <h2 style="color: #155dfc; margin-top: 0;">Información del Registro</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr>
              <td style="padding: 8px; background: #e9ecef; font-weight: bold; border: 1px solid #ddd;">Radicado:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${data.radicado}</td>
            </tr>
            <tr>
              <td style="padding: 8px; background: #e9ecef; font-weight: bold; border: 1px solid #ddd;">Tipo:</td>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>${data.tipoPQRSF.toUpperCase()}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; background: #e9ecef; font-weight: bold; border: 1px solid #ddd;">Fecha:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${data.fechaRegistro.toLocaleString('es-CO')}</td>
            </tr>
            <tr>
              <td style="padding: 8px; background: #e9ecef; font-weight: bold; border: 1px solid #ddd;">Fecha Límite:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${data.fechaLimiteRespuesta.toLocaleDateString('es-CO')}</td>
            </tr>
            <tr>
              <td style="padding: 8px; background: #e9ecef; font-weight: bold; border: 1px solid #ddd;">Sede:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${data.sede || 'No especificada'}</td>
            </tr>
          </table>
          
          <h3 style="color: #155dfc;">Información del Usuario</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr>
              <td style="padding: 8px; background: #e9ecef; font-weight: bold; border: 1px solid #ddd;">Nombre:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${data.anonimo ? 'ANÓNIMO' : `${data.nombre} ${data.apellido}`}</td>
            </tr>
            <tr>
              <td style="padding: 8px; background: #e9ecef; font-weight: bold; border: 1px solid #ddd;">Email:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${data.anonimo ? 'anonimo@redmedicronips.com' : data.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; background: #e9ecef; font-weight: bold; border: 1px solid #ddd;">Teléfono:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${data.anonimo ? 'No disponible' : (data.telefono || 'No proporcionado')}</td>
            </tr>
            <tr>
              <td style="padding: 8px; background: #e9ecef; font-weight: bold; border: 1px solid #ddd;">Documento:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${data.anonimo ? 'No disponible' : `${data.tipoDocumento || 'No especificado'} ${data.numeroDocumento || ''}`}</td>
            </tr>
          </table>
          
          <h3 style="color: #155dfc;">Mensaje</h3>
          <div style="background: white; padding: 15px; border-left: 4px solid #155dfc; margin: 15px 0;">
            ${data.mensaje.replace(/\n/g, '<br>')}
          </div>
          
          <div style="text-align: center; margin: 20px 0;">
            <a href="https://docs.google.com/spreadsheets/d/${SHEET_ID}" 
               style="background: #155dfc; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Ver en Google Sheets
            </a>
          </div>
        </div>
        
        <div style="background: #6c757d; color: white; padding: 15px; text-align: center; font-size: 12px;">
          <p style="margin: 0;">Este es un mensaje automático del sistema PQRSF de Red Medicron IPS</p>
        </div>
      </div>
    `;
    
    // Enviar email principal
    GmailApp.sendEmail(
      NOTIFICATION_EMAIL,
      subject,
      '', // texto plano vacío
      {
        htmlBody: htmlBody,
        cc: CC_EMAILS.join(',')
      }
    );
    
  } catch (error) {
    console.error('Error enviando notificación:', error);
  }
}

/**
 * Envía confirmación automática al usuario
 */
function sendAutoReply(data) {
  try {
    if (data.anonimo || !data.email) return;
    
    const subject = `✅ Confirmación PQRSF - Radicado: ${data.radicado}`;
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #155dfc, #00a63e); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">PQRSF Recibida</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Red Medicron IPS</p>
        </div>
        
        <div style="padding: 20px; background: #f8f9fa;">
          <h2 style="color: #155dfc;">¡Gracias por contactarnos!</h2>
          
          <p>Estimado/a <strong>${data.nombre}</strong>,</p>
          
          <p>Hemos recibido tu <strong>${data.tipoPQRSF}</strong> y ha sido registrada exitosamente en nuestro sistema.</p>
          
          <div style="background: white; padding: 15px; border: 2px solid #155dfc; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #155dfc;">Información de tu solicitud:</h3>
            <p><strong>Número de Radicado:</strong> ${data.radicado}</p>
            <p><strong>Fecha de registro:</strong> ${data.fechaRegistro.toLocaleDateString('es-CO')}</p>
            <p><strong>Tipo de solicitud:</strong> ${data.tipoPQRSF.toUpperCase()}</p>
            <p><strong>Fecha límite de respuesta:</strong> ${data.fechaLimiteRespuesta.toLocaleDateString('es-CO')}</p>
          </div>
          
          <h3 style="color: #155dfc;">¿Qué sigue ahora?</h3>
          <ul style="line-height: 1.6;">
            <li>Tu solicitud será revisada por nuestro equipo especializado</li>
            <li>Recibirás una respuesta en máximo <strong>15 días hábiles</strong></li>
            <li>Puedes hacer seguimiento usando el número de radicado: <strong>${data.radicado}</strong></li>
            <li>Te contactaremos al email: <strong>${data.email}</strong></li>
          </ul>
          
          <div style="background: #e7f3ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="margin-top: 0; color: #155dfc;">💡 Información importante:</h4>
            <p style="margin-bottom: 0;">Si necesitas hacer seguimiento o tienes preguntas adicionales, contáctanos a:</p>
            <p><strong>📧 Email:</strong> pqrsf@redmedicronips.com</p>
            <p><strong>📱 WhatsApp:</strong> 318 338 0107</p>
          </div>
        </div>
        
        <div style="background: #6c757d; color: white; padding: 15px; text-align: center; font-size: 12px;">
          <p style="margin: 0;">Red Medicron IPS - Comprometidos con tu salud y bienestar</p>
          <p style="margin: 5px 0 0 0;">Este es un mensaje automático, por favor no responder a este email</p>
        </div>
      </div>
    `;
    
    GmailApp.sendEmail(
      data.email,
      subject,
      '', // texto plano vacío
      {
        htmlBody: htmlBody
      }
    );
    
  } catch (error) {
    console.error('Error enviando auto-respuesta:', error);
  }
}

/**
 * Crea una respuesta JSON estandarizada
 */
function createResponse(success, message, data = null) {
  const response = {
    success: success,
    message: message,
    timestamp: new Date().toISOString()
  };
  
  if (data) {
    response.data = data;
  }
  
  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Función para testing (opcional)
 */
function testFunction() {
  const testData = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan@ejemplo.com',
    telefono: '3001234567',
    tipoDocumento: 'cedula',
    numeroDocumento: '12345678',
    tipoPQRSF: 'sugerencia',
    sede: 'pasto',
    mensaje: 'Esta es una sugerencia de prueba para mejorar los servicios.',
    anonimo: false
  };
  
  const mockRequest = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockRequest);
  console.log('Resultado del test:', result.getContent());
}
