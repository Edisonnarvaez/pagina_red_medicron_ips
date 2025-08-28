# 🔧 Solución Error CORS - Sistema de Convocatorias Red Medicron IPS

## ❌ **Error Identificado**

```
Access to fetch at 'https://script.google.com/macros/s/...' from origin 'http://localhost:5173' 
has been blocked by CORS policy: Response to preflight request doesn't pass access control check: 
No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

## 🎯 **Causa del Problema**

Google Apps Script requiere configuración específica para manejar solicitudes CORS (Cross-Origin Resource Sharing) desde aplicaciones web.

---

## ✅ **Solución Paso a Paso**

### **PASO 1: Usar el Google Apps Script Corregido**

1. **Elimina el código anterior** de tu proyecto en Google Apps Script
2. **Copia y pega** todo el contenido del archivo `google-apps-script-convocatoria-cors-fixed.js`
3. **Configura las constantes** en la sección CONFIG

### **PASO 2: Configuración Específica en Google Apps Script**

#### 2.1 Configurar las Constantes
```javascript
const CONFIG = {
  SHEET_ID: 'TU_ID_DE_GOOGLE_SHEETS_AQUI',
  SHEET_NAME: 'Postulaciones',
  DRIVE_FOLDER_ID: 'TU_ID_DE_CARPETA_DRIVE_AQUI',
  EMAIL_GESTION_HUMANA: 'gestionhumana@redmedicronips.com.co',
  EMAIL_COPIA: '', // Opcional
  ALLOWED_ORIGINS: [
    'https://redmedicronips.com.co',
    'https://www.redmedicronips.com.co',
    'http://localhost:5173', // Para desarrollo
    'http://localhost:3000'  // Para desarrollo
  ]
};
```

#### 2.2 Deployment Crítico
1. Ve a **"Desplegar"** → **"Nueva implementación"**
2. **MUY IMPORTANTE**: Configura:
   - **Tipo**: Aplicación web
   - **Ejecutar como**: Yo (tu email)
   - **Quién tiene acceso**: **Cualquier usuario** ← ¡CLAVE!
3. Haz clic en **"Desplegar"**
4. Copia la URL generada

### **PASO 3: Actualizar Frontend**

#### 3.1 Actualizar URL en TalentoHumanoPage.tsx
Busca la línea ~261 y reemplaza con tu URL:
```typescript
const SCRIPT_URL = 'TU_URL_DE_DEPLOYMENT_AQUI';
```

#### 3.2 El Frontend ya está Configurado
✅ Manejo mejorado de errores CORS
✅ Logging detallado para debugging
✅ Mensajes específicos para errores de conexión

---

## 🔍 **Verificación de la Solución**

### **Checklist de Debugging**

1. **✅ Google Apps Script**
   - [ ] Código del archivo `google-apps-script-convocatoria-cors-fixed.js` copiado
   - [ ] CONFIG configurado con IDs reales
   - [ ] Deployment con acceso "Cualquier usuario"
   - [ ] URL de deployment copiada

2. **✅ Frontend**
   - [ ] URL actualizada en TalentoHumanoPage.tsx
   - [ ] Abrir DevTools del navegador (F12)
   - [ ] Ir a la pestaña "Console"
   - [ ] Enviar una postulación de prueba
   - [ ] Verificar logs detallados

3. **✅ Google Sheets y Drive**
   - [ ] Hoja de cálculo creada
   - [ ] Carpeta de Drive creada
   - [ ] IDs correctos en CONFIG

---

## 🛠️ **Debugging Avanzado**

### **Si el Error Persiste**

#### Método 1: Verificar la URL
```javascript
// En la consola del navegador (F12), ejecuta:
fetch('TU_URL_DE_DEPLOYMENT_AQUI', {
  method: 'GET'
}).then(response => response.json())
  .then(data => console.log('Respuesta:', data))
  .catch(error => console.error('Error:', error));
```

#### Método 2: Verificar Permisos
1. Ve a Google Apps Script
2. Ejecuta la función `testFunction` manualmente
3. Autoriza todos los permisos solicitados

#### Método 3: Recrear Deployment
1. En Google Apps Script, ve a **"Gestionar implementaciones"**
2. **Elimina** la implementación actual
3. Crea una **nueva implementación** con los mismos ajustes

---

## 📋 **Configuraciones Específicas**

### **Para Google Sheets**
```javascript
// Verificar que la hoja existe
function verificarHoja() {
  try {
    const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID);
    console.log('Hoja encontrada:', sheet.getName());
    return true;
  } catch (error) {
    console.error('Error accediendo a la hoja:', error);
    return false;
  }
}
```

### **Para Google Drive**
```javascript
// Verificar que la carpeta existe
function verificarCarpeta() {
  try {
    const folder = DriveApp.getFolderById(CONFIG.DRIVE_FOLDER_ID);
    console.log('Carpeta encontrada:', folder.getName());
    return true;
  } catch (error) {
    console.error('Error accediendo a la carpeta:', error);
    return false;
  }
}
```

---

## 🚨 **Errores Comunes y Soluciones**

### **Error 1: "Script function not found"**
**Solución**: Verifica que hayas guardado el script en Google Apps Script

### **Error 2: "Permission denied"**
**Solución**: 
1. Ejecuta `testFunction` manualmente
2. Autoriza todos los permisos
3. Vuelve a hacer deployment

### **Error 3: "Invalid credentials"**
**Solución**: Verifica que el deployment esté configurado como "Cualquier usuario"

### **Error 4: Still CORS Error**
**Solución**: 
1. Elimina la implementación actual
2. Crea una nueva con acceso "Cualquier usuario"
3. Espera 5-10 minutos para propagación

---

## ✅ **Verificación Final**

### **Test de Funcionamiento**
1. Abre el formulario de convocatoria
2. Completa todos los campos
3. Adjunta un PDF pequeño (menos de 5MB)
4. Abre DevTools (F12) → Console
5. Envía el formulario
6. Verifica en la consola:
   ```
   Enviando datos a: https://script.google.com/...
   Datos a enviar: {nombre: "...", apellido: "..."}
   Respuesta recibida: 200 OK
   Datos de respuesta: {success: true, message: "...", codigoSeguimiento: "..."}
   ```

### **Verificación en Google Sheets**
- Nueva fila con datos del candidato
- Código de seguimiento generado
- URL de Drive con el CV

### **Verificación en Gmail**
- Email a gestionhumana@redmedicronips.com.co
- Email de confirmación al candidato

---

## 🎯 **Próximos Pasos**

Una vez resuelto el error de CORS:

1. **✅ Hacer pruebas completas** con datos reales
2. **✅ Verificar emails** en bandeja de entrada y spam
3. **✅ Probar desde diferentes navegadores**
4. **✅ Documentar el proceso** para futuras implementaciones

---

**💡 Tip**: El error de CORS es normal en desarrollo y se resuelve con la configuración correcta del Google Apps Script. El código del frontend ya está optimizado para manejar estos errores.

**🔧 Si necesitas ayuda adicional**: Revisa los logs de la consola del navegador para obtener información detallada sobre cualquier error que persista.
