# 📧 Configuración Completa de Google Apps Script para Red Medicron IPS

## 🎯 **PASO 1: Crear la Hoja de Cálculo**

### 1.1 Crear Nueva Hoja
1. Ve a **[Google Sheets](https://sheets.google.com)**
2. Haz clic en **"+ Crear"** o **"Hoja de cálculo en blanco"**
3. Nombra tu hoja: **"Red Medicron IPS - Formulario Contacto"**

### 1.2 Configurar Encabezados
En la **fila 1** agrega estos encabezados (exactamente como aparecen):

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| **Fecha** | **Nombre** | **Apellido** | **Email** | **Teléfono** | **Tipo Consulta** | **Sede** | **Mensaje** | **Estado** |

### 1.3 Obtener el ID de la Hoja
1. En la URL de tu hoja, copia el ID:
   ```
   https://docs.google.com/spreadsheets/d/[COPIA_ESTE_ID]/edit
   ```
2. **Guarda este ID**, lo necesitarás después

---

## 🚀 **PASO 2: Crear el Google Apps Script**

### 2.1 Crear Nuevo Proyecto
1. Ve a **[Google Apps Script](https://script.google.com)**
2. Haz clic en **"+ Nuevo proyecto"**
3. Nombra tu proyecto: **"Red Medicron IPS - Contacto API"**

### 2.2 Reemplazar el Código
1. **Borra todo el código** que aparece por defecto
2. **Copia y pega** el código de abajo:

```javascript
/**
 * 📧 GOOGLE APPS SCRIPT PARA RED MEDICRON IPS
 * Configuración de formulario de contacto
 * Fecha: Agosto 2025
 */

// ⚠️ CONFIGURA ESTOS VALORES ANTES DE DESPLEGAR
const CONFIG = {
  // Pega aquí el ID de tu hoja de cálculo
  SHEET_ID: 'PEGA_AQUI_TU_SHEET_ID',
  
  // Nombre de la pestaña en la hoja
  SHEET_NAME: 'Hoja 1',
  
  // Email para notificaciones (opcional)
  NOTIFICATION_EMAIL: 'contacto@redmedicronips.com',
  
  // Configurar si quieres recibir emails
  SEND_EMAIL_NOTIFICATIONS: true
};

/**
 * 🎯 Función principal que recibe los datos del formulario
 */
function doPost(e) {
  try {
    // Obtener datos del formulario
    const data = JSON.parse(e.postData.contents);
    
    // Validar datos requeridos
    if (!data.nombre || !data.email || !data.mensaje) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          message: 'Faltan campos obligatorios'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Guardar en hoja de cálculo
    const resultado = guardarEnHoja(data);
    
    if (resultado.success) {
      // Enviar email de notificación (opcional)
      if (CONFIG.SEND_EMAIL_NOTIFICATIONS) {
        enviarNotificacionEmail(data);
      }
      
      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          message: 'Mensaje enviado exitosamente',
          timestamp: new Date().toISOString()
        }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      throw new Error(resultado.error);
    }
    
  } catch (error) {
    Logger.log('Error en doPost: ' + error.toString());
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error interno del servidor: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * 📝 Guardar datos en la hoja de cálculo
 */
function guardarEnHoja(data) {
  try {
    const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.SHEET_NAME);
    
    if (!sheet) {
      throw new Error('No se encontró la hoja: ' + CONFIG.SHEET_NAME);
    }
    
    // Preparar fila de datos
    const fecha = new Date();
    const fila = [
      fecha,                    // A: Fecha
      data.nombre || '',        // B: Nombre
      data.apellido || '',      // C: Apellido
      data.email || '',         // D: Email
      data.telefono || '',      // E: Teléfono
      data.tipoConsulta || '',  // F: Tipo Consulta
      data.sede || '',          // G: Sede
      data.mensaje || '',       // H: Mensaje
      'Nuevo'                   // I: Estado
    ];
    
    // Agregar fila a la hoja
    sheet.appendRow(fila);
    
    return { success: true };
    
  } catch (error) {
    Logger.log('Error guardando en hoja: ' + error.toString());
    return { success: false, error: error.toString() };
  }
}

/**
 * 📬 Enviar email de notificación
 */
function enviarNotificacionEmail(data) {
  try {
    if (!CONFIG.NOTIFICATION_EMAIL) return;
    
    const asunto = '🏥 Nuevo mensaje desde Red Medicron IPS - ' + (data.tipoConsulta || 'Consulta General');
    
    const cuerpo = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background: linear-gradient(135deg, #155dfc, #15803d); color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .info-box { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #155dfc; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🏥 Red Medicron IPS</h1>
            <p>Nuevo mensaje desde el sitio web</p>
          </div>
          
          <div class="content">
            <div class="info-box">
              <h3>📝 Información del Contacto</h3>
              <p><strong>Nombre:</strong> ${data.nombre} ${data.apellido || ''}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Teléfono:</strong> ${data.telefono || 'No proporcionado'}</p>
              <p><strong>Tipo de Consulta:</strong> ${data.tipoConsulta || 'General'}</p>
              <p><strong>Sede de Interés:</strong> ${data.sede || 'No especificada'}</p>
            </div>
            
            <div class="info-box">
              <h3>💬 Mensaje</h3>
              <p>${data.mensaje}</p>
            </div>
            
            <div class="info-box">
              <h3>⏰ Información Adicional</h3>
              <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-CO')}</p>
              <p><strong>Origen:</strong> Sitio web Red Medicron IPS</p>
            </div>
          </div>
          
          <div class="footer">
            <p>Este mensaje fue enviado automáticamente desde el formulario de contacto del sitio web.</p>
            <p>Red Medicron IPS - Tu salud es nuestra prioridad</p>
          </div>
        </body>
      </html>
    `;
    
    MailApp.sendEmail({
      to: CONFIG.NOTIFICATION_EMAIL,
      subject: asunto,
      htmlBody: cuerpo
    });
    
    Logger.log('Email enviado exitosamente a: ' + CONFIG.NOTIFICATION_EMAIL);
    
  } catch (error) {
    Logger.log('Error enviando email: ' + error.toString());
  }
}

/**
 * 🔍 Función GET para verificar que el script funciona
 */
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'API de Red Medicron IPS funcionando correctamente',
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * 🧪 Función de prueba para verificar configuración
 */
function testConfiguration() {
  try {
    // Datos de prueba
    const datosTest = {
      nombre: 'Prueba',
      apellido: 'Sistema',
      email: 'prueba@redmedicronips.com',
      telefono: '123456789',
      tipoConsulta: 'Consulta de prueba',
      sede: 'Pasto',
      mensaje: 'Este es un mensaje de prueba para verificar la configuración del sistema.'
    };
    
    // Intentar guardar
    const resultado = guardarEnHoja(datosTest);
    
    if (resultado.success) {
      Logger.log('✅ Configuración exitosa - Datos guardados correctamente');
      
      // Probar email si está configurado
      if (CONFIG.SEND_EMAIL_NOTIFICATIONS && CONFIG.NOTIFICATION_EMAIL) {
        enviarNotificacionEmail(datosTest);
        Logger.log('✅ Email de prueba enviado');
      }
      
      return '✅ Configuración completada exitosamente';
    } else {
      Logger.log('❌ Error en configuración: ' + resultado.error);
      return '❌ Error: ' + resultado.error;
    }
    
  } catch (error) {
    Logger.log('❌ Error en testConfiguration: ' + error.toString());
    return '❌ Error: ' + error.toString();
  }
}
```

### 2.3 Configurar Variables
1. En el código que acabas de pegar, busca esta línea:
   ```javascript
   SHEET_ID: 'PEGA_AQUI_TU_SHEET_ID',
   ```
2. **Reemplaza** `PEGA_AQUI_TU_SHEET_ID` con el ID que copiaste en el PASO 1.3
3. **Cambia** el email si quieres:
   ```javascript
   NOTIFICATION_EMAIL: 'tuEmail@redmedicronips.com',
   ```

---

## 🧪 **PASO 3: Probar la Configuración**

### 3.1 Ejecutar Prueba
1. En el editor de Apps Script, **selecciona** la función `testConfiguration`
2. Haz clic en **"▶ Ejecutar"**
3. **Autoriza los permisos** cuando te lo pida:
   - Acceso a Google Sheets
   - Envío de emails
4. Verifica en **"Ejecución"** que aparezca: **"✅ Configuración completada exitosamente"**

### 3.2 Verificar Resultados
1. Ve a tu **hoja de cálculo**
2. Deberías ver una **nueva fila** con datos de prueba
3. Si configuraste email, revisa tu **bandeja de entrada**

---

## 🌐 **PASO 4: Desplegar como API Web**

### 4.1 Crear Implementación
1. Haz clic en **"Desplegar"** → **"Nueva implementación"**
2. En **"Tipo"**, haz clic en el ícono de configuración ⚙️
3. Selecciona **"Aplicación web"**

### 4.2 Configurar Implementación
- **Descripción**: `Formulario de contacto Red Medicron IPS`
- **Ejecutar como**: `Yo (tuEmail@gmail.com)`
- **Quien tiene acceso**: `Cualquier persona`

### 4.3 Finalizar
1. Haz clic en **"Desplegar"**
2. **Copia la URL** que aparece (importante!):
   ```
   https://script.google.com/macros/s/ABC123DEF456.../exec
   ```

---

## 🔗 **PASO 5: Conectar con el Sitio Web**

### 5.1 Actualizar ContactoPage.tsx
1. Abre el archivo: `src/Contacto/ContactoPage.tsx`
2. Busca esta línea (alrededor de la línea 40):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```
3. **Reemplaza** la URL con la que copiaste en el PASO 4.3

### 5.2 Probar el Formulario
1. Ejecuta tu sitio web: `npm run dev`
2. Ve a la página de **Contacto**
3. **Llena y envía** el formulario
4. Verifica que aparezca en tu **hoja de cálculo**

---

## ✅ **Verificación Final**

### Lista de Chequeo:
- [ ] ✅ Hoja de cálculo creada con encabezados correctos
- [ ] ✅ Apps Script configurado con tu SHEET_ID
- [ ] ✅ Prueba exitosa ejecutada
- [ ] ✅ API desplegada y URL copiada
- [ ] ✅ ContactoPage.tsx actualizada con nueva URL
- [ ] ✅ Formulario probado desde el sitio web

---

## 🚨 **Solución de Problemas**

### Error: "No se puede acceder a la hoja"
- Verifica que el **SHEET_ID** esté correcto
- Asegúrate de que la **pestaña se llame "Hoja 1"**

### Error: "Forbidden"
- Verifica que la implementación esté configurada como **"Cualquier persona"**
- Ejecuta `testConfiguration` primero para autorizar permisos

### No llegan los emails
- Revisa la carpeta de **spam**
- Verifica que `SEND_EMAIL_NOTIFICATIONS` esté en `true`
- Confirma que el email en `NOTIFICATION_EMAIL` sea correcto

---

## 📞 **¿Necesitas Ayuda?**

Si tienes problemas con algún paso, revisa el **registro de ejecución** en Apps Script:
1. Ve a **"Ejecuciones"** en el menú izquierdo
2. Busca errores en rojo
3. Haz clic en el error para ver más detalles

**¡Tu sistema de contacto estará listo! 🎉**
