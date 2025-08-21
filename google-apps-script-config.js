/**
 * GOOGLE APPS SCRIPT PARA FORMULARIO DE CONTACTO RED MEDICRON IPS
 * 
 * Instrucciones de configuración:
 * 1. Ve a https://script.google.com
 * 2. Crea un nuevo proyecto
 * 3. Copia y pega este código
 * 4. Configura una hoja de cálculo de Google para almacenar los datos
 * 5. Despliega como aplicación web
 * 6. Actualiza la URL en ContactoPage.tsx
 */

// Configuración - ACTUALIZA ESTOS VALORES
const SHEET_ID = 'TU_SHEET_ID_AQUI'; // ID de tu hoja de cálculo de Google
const SHEET_NAME = 'ContactoFormulario'; // Nombre de la pestaña en la hoja

// Email de notificaciones (opcional)
const NOTIFICATION_EMAIL = 'contacto@redmedicronips.com';

/**
 * Función principal que recibe los datos del formulario
 */
function doPost(e) {
  try {
    // Obtener los datos del formulario
    const data = JSON.parse(e.postData.contents);
    
    // Registrar en la hoja de cálculo
    saveToSheet(data);
    
    // Enviar notificación por email (opcional)
    sendNotificationEmail(data);
    
    // Respuesta exitosa
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Formulario enviado correctamente'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error procesando formulario:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Error al procesar el formulario'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Función para GET requests (necesaria para Apps Script)
 */
function doGet() {
  return ContentService
    .createTextOutput('Servicio de formulario Red Medicron IPS activo')
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Guardar datos en la hoja de cálculo
 */
function saveToSheet(data) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // Si la hoja no existe, crearla
    if (!sheet) {
      createSheet();
      return saveToSheet(data); // Reintentar después de crear la hoja
    }
    
    // Preparar los datos para insertar
    const rowData = [
      new Date(), // Timestamp
      data.nombre || '',
      data.apellido || '',
      data.email || '',
      data.telefono || '',
      data.tipoConsulta || '',
      data.sede || '',
      data.mensaje || '',
      data.fechaEnvio || '',
      data.horaEnvio || ''
    ];
    
    // Insertar la fila
    sheet.appendRow(rowData);
    
    console.log('Datos guardados correctamente en la hoja');
    
  } catch (error) {
    console.error('Error guardando en la hoja:', error);
    throw error;
  }
}

/**
 * Crear la hoja de cálculo con headers
 */
function createSheet() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.insertSheet(SHEET_NAME);
    
    // Headers
    const headers = [
      'Fecha/Hora',
      'Nombre',
      'Apellido',
      'Email',
      'Teléfono',
      'Tipo de Consulta',
      'Sede',
      'Mensaje',
      'Fecha Envío',
      'Hora Envío'
    ];
    
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Formatear headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4285f4');
    headerRange.setFontColor('white');
    
    // Ajustar ancho de columnas
    sheet.autoResizeColumns(1, headers.length);
    
    console.log('Hoja creada correctamente');
    
  } catch (error) {
    console.error('Error creando la hoja:', error);
    throw error;
  }
}

/**
 * Enviar notificación por email (opcional)
 */
function sendNotificationEmail(data) {
  try {
    const subject = `Nuevo contacto de ${data.nombre} ${data.apellido} - Red Medicron IPS`;
    
    const htmlBody = `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-CO')}</p>
      <hr>
      <p><strong>Nombre:</strong> ${data.nombre} ${data.apellido}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Teléfono:</strong> ${data.telefono || 'No proporcionado'}</p>
      <p><strong>Tipo de consulta:</strong> ${data.tipoConsulta}</p>
      <p><strong>Sede de interés:</strong> ${data.sede || 'No especificada'}</p>
      <hr>
      <p><strong>Mensaje:</strong></p>
      <p>${data.mensaje}</p>
      <hr>
      <p><small>Este mensaje fue enviado desde el formulario de contacto del sitio web de Red Medicron IPS.</small></p>
    `;
    
    GmailApp.sendEmail(
      NOTIFICATION_EMAIL,
      subject,
      '', // texto plano (vacío porque usamos HTML)
      {
        htmlBody: htmlBody,
        name: 'Red Medicron IPS - Formulario de Contacto'
      }
    );
    
    console.log('Email de notificación enviado');
    
  } catch (error) {
    console.error('Error enviando email:', error);
    // No lanzar error aquí para que no afecte el guardado en la hoja
  }
}

/**
 * Función de prueba para verificar la configuración
 */
function testConfiguration() {
  const testData = {
    nombre: 'Prueba',
    apellido: 'Test',
    email: 'test@example.com',
    telefono: '300 123 4567',
    tipoConsulta: 'informacion-general',
    sede: 'hospital-pasto',
    mensaje: 'Este es un mensaje de prueba para verificar la configuración.',
    timestamp: new Date().toISOString(),
    fechaEnvio: new Date().toLocaleDateString('es-CO'),
    horaEnvio: new Date().toLocaleTimeString('es-CO')
  };
  
  try {
    saveToSheet(testData);
    console.log('✅ Configuración correcta - Datos de prueba guardados');
    return true;
  } catch (error) {
    console.error('❌ Error en la configuración:', error);
    return false;
  }
}

/**
 * Función para obtener estadísticas básicas
 */
function getContactStats() {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) return { error: 'Hoja no encontrada' };
    
    const lastRow = sheet.getLastRow();
    const totalContacts = lastRow - 1; // Restar header
    
    return {
      totalContacts: totalContacts,
      lastUpdate: new Date().toLocaleString('es-CO')
    };
    
  } catch (error) {
    console.error('Error obteniendo estadísticas:', error);
    return { error: error.toString() };
  }
}
