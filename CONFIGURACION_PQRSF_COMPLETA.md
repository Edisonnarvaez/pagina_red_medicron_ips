# 🏥 Configuración Completa del Sistema PQRSF - Red Medicron IPS

## 🎯 **¿Qué es PQRSF?**

**PQRSF** son las siglas de:
- **P**eticiones
- **Q**uejas  
- **R**eclamos
- **S**ugerencias
- **F**elicitaciones

Sistema obligatorio para instituciones de salud en Colombia para la atención y gestión de solicitudes de usuarios.

---

## 📋 **PASO 1: Crear la Hoja de Cálculo para PQRSF**

### 1.1 Crear Nueva Hoja
1. Ve a **[Google Sheets](https://sheets.google.com)**
2. Haz clic en **"+ Crear"** o **"Hoja de cálculo en blanco"**
3. Nombra tu hoja: **"Red Medicron IPS - PQRSF"**

### 1.2 Configurar Encabezados
En la **fila 1** agrega estos encabezados (exactamente como aparecen):

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Radicado** | **Fecha Registro** | **Tipo PQRSF** | **Estado** | **Nombre** | **Apellido** | **Email** | **Teléfono** | **Tipo Documento** | **Número Documento** | **Sede** | **Mensaje** | **Anónimo** | **Fecha Límite Respuesta** | **Respuesta** | **Fecha Respuesta** | **Responsable Respuesta** | **Observaciones** |

### 1.3 Obtener el ID de la Hoja
```
URL: https://docs.google.com/spreadsheets/d/1ABC123def456GHI789/edit#gid=0
ID:  1ABC123def456GHI789
```

---

## 🔧 **PASO 2: Configurar Google Apps Script**

### 2.1 Crear el Proyecto
1. Ve a **[Google Apps Script](https://script.google.com)**
2. Haz clic en **"Nuevo proyecto"**
3. Nombra el proyecto: **"Red Medicron IPS - PQRSF"**

### 2.2 Configurar el Código
1. Elimina el código por defecto
2. Copia y pega el contenido del archivo **`google-apps-script-pqrsf.js`**
3. **ACTUALIZA las variables de configuración:**

```javascript
// ===== CONFIGURACIÓN - ACTUALIZA ESTOS VALORES =====
const SHEET_ID = 'TU_ID_DE_HOJA_AQUI'; // ⚠️ CAMBIAR
const SHEET_NAME = 'PQRSF';

const NOTIFICATION_EMAIL = 'pqrsf@redmedicronips.com'; // ⚠️ CAMBIAR
const CC_EMAILS = ['gerencia@redmedicronips.com', 'calidad@redmedicronips.com']; // ⚠️ CAMBIAR
```

### 2.3 Configurar Permisos
1. Haz clic en **"Guardar"** (ícono de disquete)
2. Autoriza los permisos cuando aparezca el popup
3. Permite acceso a **Gmail** y **Google Sheets**

### 2.4 Desplegar como Aplicación Web
1. Haz clic en **"Implementar"** → **"Nueva implementación"**
2. Tipo: **"Aplicación web"**
3. Ejecutar como: **"Yo"**
4. Acceso: **"Cualquier usuario"**
5. Haz clic en **"Implementar"**
6. **Copia la URL** que aparece (será algo como: `https://script.google.com/macros/s/AKfyc...`)

---

## 🌐 **PASO 3: Actualizar el Frontend**

### 3.1 Actualizar URL en PQRSFPage.tsx
Abre el archivo `src/PQRSF/PQRSFPage.tsx` y actualiza:

```typescript
// ANTES:
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/TU_GOOGLE_APPS_SCRIPT_PQRSF_URL/exec';

// DESPUÉS (con tu URL real):
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwxt98vsnlh1KgAr...../exec';
```

---

## ✅ **PASO 4: Probar el Sistema**

### 4.1 Prueba Básica
1. Ve a tu sitio web: `/pqrsf`
2. Llena el formulario con datos de prueba
3. Envía el formulario
4. Verifica que aparezca el mensaje de éxito

### 4.2 Verificar Funcionamiento
1. **Google Sheets**: Revisa que se haya creado una nueva fila con los datos
2. **Email**: Verifica que llegaron los emails de notificación
3. **Auto-respuesta**: Si no fue anónimo, verifica que llegó la confirmación

---

## 🎨 **CARACTERÍSTICAS DEL FORMULARIO PQRSF**

### ✨ **Funcionalidades Principales**
- ✅ **Formulario anónimo** - Opción para enviar sin datos personales
- ✅ **5 tipos de PQRSF** - Petición, Queja, Reclamo, Sugerencia, Felicitación
- ✅ **Validación completa** - Campos requeridos y validación de email
- ✅ **Radicado automático** - Número único de seguimiento
- ✅ **Notificaciones email** - Al equipo y confirmación automática
- ✅ **Fecha límite** - Cálculo automático de 15 días hábiles
- ✅ **Responsive design** - Funciona en móviles y escritorio

### 📱 **Campos del Formulario**
- **Checkbox anónimo** (oculta campos personales si se activa)
- **Nombre y apellido** (requeridos si no es anónimo)
- **Email** (requerido si no es anónimo)
- **Teléfono** (opcional)
- **Tipo y número de documento** (opcional)
- **Tipo de PQRSF** (requerido) - 5 opciones con iconos
- **Sede relacionada** (opcional)
- **Mensaje** (requerido, mínimo 10 caracteres)

### 🎯 **Estados del Formulario**
- **Idle** - Estado inicial
- **Loading** - Enviando con ButtonSpinner
- **Success** - Éxito con ícono de check
- **Error** - Error con ícono de advertencia

---

## 📧 **CONFIGURACIÓN DE EMAILS**

### 📨 **Email de Notificación (Equipo)**
Se envía a:
- **Principal**: `pqrsf@redmedicronips.com`
- **Copia**: `gerencia@redmedicronips.com`, `calidad@redmedicronips.com`

**Contiene:**
- Número de radicado
- Tipo de PQRSF
- Datos del usuario (o "ANÓNIMO")
- Mensaje completo
- Fecha límite de respuesta
- Enlace directo a Google Sheets

### 📤 **Auto-respuesta (Usuario)**
Se envía solo si:
- No es anónimo
- Tiene email válido
- `AUTO_REPLY_ENABLED = true`

**Contiene:**
- Confirmación de recepción
- Número de radicado para seguimiento
- Tiempo de respuesta (15 días hábiles)
- Información de contacto adicional

---

## 🔄 **GESTIÓN DE RESPUESTAS**

### 📊 **Campos de Seguimiento en Google Sheets**
- **Estado**: Recibida → En Proceso → Respondida → Cerrada
- **Respuesta**: Texto de la respuesta oficial
- **Fecha Respuesta**: Cuando se responde
- **Responsable Respuesta**: Quien responde
- **Observaciones**: Notas internas

### ⏰ **Tiempos de Respuesta**
- **Peticiones**: 15 días hábiles
- **Quejas**: 15 días hábiles
- **Reclamos**: 15 días hábiles
- **Sugerencias**: 15 días hábiles
- **Felicitaciones**: Confirmación inmediata

---

## 🛡️ **SEGURIDAD Y PRIVACIDAD**

### 🔒 **Datos Anónimos**
Cuando se marca "anónimo":
- **Nombre**: Se guarda como "ANÓNIMO"
- **Email**: Se cambia a "anonimo@redmedicronips.com"
- **Teléfono**: Se elimina
- **Documento**: Se elimina
- **Mensaje**: Se mantiene

### 🏥 **Cumplimiento Normativo**
- ✅ **Ley 1581 de 2012** - Protección de datos personales
- ✅ **Resolución 3100 de 2019** - PQRSF en instituciones de salud
- ✅ **Ley 1753 de 2015** - Atención al usuario en salud

---

## 🚀 **PRÓXIMOS PASOS RECOMENDADOS**

### 1. **Portal de Seguimiento**
- Crear página para consultar estado por radicado
- Permitir al usuario ver el progreso de su PQRSF

### 2. **Dashboard Administrativo**
- Panel para gestionar todas las PQRSF
- Estadísticas y reportes
- Recordatorios de vencimiento

### 3. **Integraciones**
- WhatsApp Business API para notificaciones
- SMS para confirmaciones
- Sistema CRM institucional

---

## 📞 **CANALES ADICIONALES DE PQRSF**

El formulario web se complementa con:
- **📧 Email**: pqrsf@redmedicronips.com
- **📱 WhatsApp**: 318 338 0107
- **🏢 Presencial**: En las 7 sedes de Red Medicron IPS
- **☎️ Telefónico**: Línea de atención directa

---

## ✅ **CHECKLIST DE IMPLEMENTACIÓN**

- [ ] ✅ Hoja de Google Sheets creada y configurada
- [ ] ✅ Google Apps Script configurado y desplegado
- [ ] ✅ URL actualizada en PQRSFPage.tsx
- [ ] ✅ Emails de notificación configurados
- [ ] ✅ Prueba completa realizada
- [ ] ✅ Documentación del proceso interno
- [ ] ✅ Capacitación al equipo de atención
- [ ] ✅ Publicación y comunicación a usuarios

**¡Tu sistema PQRSF está listo para recibir y gestionar todas las solicitudes de los usuarios!** 🎉
