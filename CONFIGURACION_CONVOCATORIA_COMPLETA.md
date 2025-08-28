# 💼 Sistema de Convocatorias Laborales - Red Medicron IPS

## ✅ **¿Qué se ha implementado?**

### 🎯 **Sistema Completo de Postulaciones**
- **Formulario web moderno** con validación completa
- **Adjunto de CV en PDF** con validación de formato
- **Integración con Google Apps Script** para backend completo
- **Almacenamiento en Google Sheets y Google Drive**
- **Notificaciones automáticas por email**
- **Códigos de seguimiento únicos** para cada postulación

---

## 🏗️ **Características del Sistema**

### 📝 **Formulario de Postulación**
- ✅ **Información Personal**: Nombre, apellido, email, teléfono, documento
- ✅ **Información Profesional**: Cargo aspirado, nivel educativo, experiencia
- ✅ **Adjunto de CV**: Solo archivos PDF, máximo 10MB
- ✅ **Validación en tiempo real** con mensajes de error claros
- ✅ **Interfaz responsive** y moderna

### 🔧 **Backend con Google Apps Script**
- ✅ **Almacenamiento dual**: Google Sheets + Google Drive
- ✅ **Email automático** a gestión humana con toda la información
- ✅ **Email de confirmación** al candidato con código de seguimiento
- ✅ **Validación de datos** y manejo de errores
- ✅ **Códigos de seguimiento únicos** para cada postulación

---

## 🚀 **CONFIGURACIÓN PASO A PASO**

### **PASO 1: Crear la Hoja de Cálculo**

#### 1.1 Crear Nueva Hoja de Google Sheets
1. Ve a **[Google Sheets](https://sheets.google.com)**
2. Haz clic en **"+ Crear"** o **"Hoja de cálculo en blanco"**
3. Nombra tu hoja: **"Red Medicron IPS - Convocatorias"**

#### 1.2 Obtener el ID de la Hoja
1. Copia la URL de tu hoja de cálculo
2. Extrae el ID que está entre `/d/` y `/edit`:
   ```
   https://docs.google.com/spreadsheets/d/1abc123def456.../edit
                                      ↑ Este es tu SHEET_ID
   ```

#### 1.3 Crear Pestaña de Postulaciones
1. Renombra la primera pestaña a **"Postulaciones"**
2. El script creará automáticamente los encabezados

---

### **PASO 2: Crear Carpeta en Google Drive**

#### 2.1 Crear Carpeta para CVs
1. Ve a **[Google Drive](https://drive.google.com)**
2. Haz clic derecho → **"Nueva carpeta"**
3. Nombra la carpeta: **"Red Medicron IPS - CVs Postulaciones"**

#### 2.2 Obtener el ID de la Carpeta
1. Abre la carpeta que creaste
2. Copia la URL y extrae el ID:
   ```
   https://drive.google.com/drive/folders/1xyz789abc123...
                                          ↑ Este es tu FOLDER_ID
   ```

#### 2.3 Configurar Permisos
1. Haz clic derecho en la carpeta → **"Compartir"**
2. Añade al script como **"Editor"** (opcional, para mayor seguridad)

---

### **PASO 3: Configurar Google Apps Script**

#### 3.1 Crear Nuevo Proyecto
1. Ve a **[Google Apps Script](https://script.google.com)**
2. Haz clic en **"Nuevo proyecto"**
3. Nombra el proyecto: **"Red Medicron IPS - Convocatorias"**

#### 3.2 Agregar el Código
1. Elimina el código por defecto
2. Copia y pega todo el contenido del archivo `google-apps-script-convocatoria.js`

#### 3.3 Configurar las Constantes
En la sección `CONFIG` del código, actualiza estos valores:

```javascript
const CONFIG = {
  // ID de tu hoja de cálculo (del Paso 1.2)
  SHEET_ID: 'TU_SHEET_ID_AQUI',
  
  // Nombre de la pestaña (del Paso 1.3)
  SHEET_NAME: 'Postulaciones',
  
  // ID de tu carpeta de Drive (del Paso 2.2)
  DRIVE_FOLDER_ID: 'TU_FOLDER_ID_AQUI',
  
  // Email de gestión humana
  EMAIL_GESTION_HUMANA: 'gestionhumana@redmedicronips.com.co',
  
  // Email adicional para copia (opcional)
  EMAIL_COPIA: '', // Ej: 'director@redmedicronips.com.co'
  
  // Orígenes permitidos (ya configurado)
  ALLOWED_ORIGINS: [
    'https://redmedicronips.com.co',
    'https://www.redmedicronips.com.co',
    'http://localhost:5173',
    'http://localhost:3000'
  ]
};
```

#### 3.4 Configurar Permisos
1. Ve a **"Servicios"** en el menú izquierdo
2. Añade estos servicios si no están activos:
   - **Gmail API**
   - **Drive API**
   - **Sheets API**

#### 3.5 Desplegar como Aplicación Web
1. Haz clic en **"Desplegar"** → **"Nueva implementación"**
2. Configura:
   - **Tipo**: Aplicación web
   - **Ejecutar como**: Yo (tu email)
   - **Quién tiene acceso**: Cualquier usuario
3. Haz clic en **"Desplegar"**
4. **¡IMPORTANTE!** Copia la **URL de la aplicación web**

---

### **PASO 4: Actualizar el Frontend**

#### 4.1 Actualizar la URL en TalentoHumanoPage.tsx
1. Abre el archivo `src/TalentoHumano/TalentoHumanoPage.tsx`
2. Busca la línea ~285:
   ```typescript
   const SCRIPT_URL = 'https://script.google.com/macros/s/TU_DEPLOYMENT_ID_CONVOCATORIA/exec';
   ```
3. Reemplaza `TU_DEPLOYMENT_ID_CONVOCATORIA` con el ID de tu deployment (del Paso 3.5)

---

### **PASO 5: Probar el Sistema**

#### 5.1 Probar en Desarrollo
1. Ejecuta tu aplicación React:
   ```bash
   npm run dev
   ```
2. Ve a la página de Talento Humano
3. Haz clic en **"Enviar Postulación"**
4. Completa el formulario con datos de prueba
5. Adjunta un PDF pequeño
6. Envía la postulación

#### 5.2 Verificar Funcionamiento
1. **Google Sheets**: Verifica que se creó una nueva fila con los datos
2. **Google Drive**: Verifica que se guardó el CV en la carpeta
3. **Email Gestión**: Verifica que llegó el email con la información
4. **Email Candidato**: Verifica que llegó el email de confirmación

---

## 📧 **Formato de Emails**

### **Email a Gestión Humana**
- ✅ **Información completa del candidato**
- ✅ **Enlace directo al CV en Google Drive**
- ✅ **Código de seguimiento único**
- ✅ **Diseño profesional y responsivo**

### **Email de Confirmación al Candidato**
- ✅ **Código de seguimiento para consultas**
- ✅ **Información sobre próximos pasos**
- ✅ **Contacto de gestión humana**
- ✅ **Diseño profesional Red Medicron IPS**

---

## 🛡️ **Seguridad y Validaciones**

### **Frontend (React)**
- ✅ **Validación de formato de email**
- ✅ **Validación de campos obligatorios**
- ✅ **Validación de tipo de archivo (solo PDF)**
- ✅ **Validación de tamaño de archivo (máx 10MB)**
- ✅ **Manejo de errores con mensajes claros**

### **Backend (Google Apps Script)**
- ✅ **Validación de datos en servidor**
- ✅ **CORS configurado para dominios específicos**
- ✅ **Manejo de errores y logging**
- ✅ **Códigos de seguimiento únicos**
- ✅ **Nombres de archivo únicos para evitar duplicados**

---

## 📊 **Estructura de Datos en Google Sheets**

El sistema crea automáticamente estas columnas:

| Campo | Descripción |
|-------|-------------|
| **Código Seguimiento** | Código único para cada postulación |
| **Fecha Postulación** | Fecha y hora de la postulación |
| **Nombre** | Nombre del candidato |
| **Apellido** | Apellido del candidato |
| **Email** | Email de contacto |
| **Teléfono** | Número de teléfono |
| **Tipo Documento** | Tipo de documento de identidad |
| **Número Documento** | Número del documento |
| **Cargo Aspira** | Cargo al que aspira |
| **Nivel Educativo** | Nivel educativo del candidato |
| **Experiencia** | Experiencia laboral descriptiva |
| **CV Drive ID** | ID del archivo en Google Drive |
| **CV Drive URL** | URL directa al CV |
| **Estado** | Estado de la postulación (Pendiente, En Revisión, etc.) |
| **Observaciones** | Campo para notas del equipo de RRHH |

---

## 🔧 **Solución de Problemas**

### **Problema: El formulario no envía**
- ✅ Verifica que la URL del script esté correcta
- ✅ Verifica que el deployment esté activo
- ✅ Revisa la consola del navegador para errores

### **Problema: No llegan los emails**
- ✅ Verifica que Gmail API esté habilitado
- ✅ Verifica que los emails en CONFIG sean correctos
- ✅ Revisa la carpeta de spam

### **Problema: No se guarda en Drive**
- ✅ Verifica que Drive API esté habilitado
- ✅ Verifica que el FOLDER_ID sea correcto
- ✅ Verifica permisos de la carpeta

### **Problema: Error en Google Sheets**
- ✅ Verifica que Sheets API esté habilitado
- ✅ Verifica que el SHEET_ID sea correcto
- ✅ Verifica que la pestaña "Postulaciones" exista

---

## 🎯 **Próximos Pasos Sugeridos**

### **Mejoras Opcionales**
1. **Dashboard de gestión** para revisar postulaciones
2. **Estados de seguimiento** más detallados
3. **Filtros por cargo** en el formulario
4. **Notificaciones automáticas** de cambios de estado
5. **Integración con calendario** para entrevistas

### **Personalización**
1. **Logos en emails** agregando imágenes
2. **Campos adicionales** según necesidades específicas
3. **Automatización** de respuestas por tipo de cargo
4. **Reportes automáticos** semanales/mensuales

---

## ✅ **Checklist de Implementación**

- [ ] ✅ Hoja de Google Sheets creada y configurada
- [ ] ✅ Carpeta de Google Drive creada con permisos
- [ ] ✅ Google Apps Script configurado y deployado
- [ ] ✅ URL actualizada en TalentoHumanoPage.tsx
- [ ] ✅ Prueba completa realizada
- [ ] ✅ Emails de notificación funcionando
- [ ] ✅ Almacenamiento en Sheets y Drive verificado
- [ ] ✅ Validaciones de frontend funcionando
- [ ] ✅ Manejo de errores funcionando

---

**¡El sistema de convocatorias está listo para recibir postulaciones! 🎉**

Para cualquier duda sobre la configuración, contacta al equipo de desarrollo o consulta la documentación de Google Apps Script.
