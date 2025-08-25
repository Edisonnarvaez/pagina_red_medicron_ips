# 🔒 Configuración Completa del Sistema de Línea Ética - Red Medicron IPS

## 🎯 **¿Qué es la Línea Ética?**

La **Línea Ética** es un sistema confidencial y seguro que permite a empleados, usuarios y terceros reportar situaciones que atenten contra la integridad, ética y valores institucionales de Red Medicron IPS.

### 📋 **Tipos de Reportes que se pueden realizar:**
- **Corrupción, Fraude o Soborno**
- **Conflictos de Interés**
- **Acoso, Discriminación o Maltrato**
- **Incumplimiento de Normas o Políticas**
- **Otras situaciones éticas**

---

## 📊 **PASO 1: Crear la Hoja de Cálculo para Línea Ética**

### 1.1 Crear Nueva Hoja
1. Ve a **[Google Sheets](https://sheets.google.com)**
2. Haz clic en **"+ Crear"** o **"Hoja de cálculo en blanco"**
3. Nombra tu hoja: **"Red Medicron IPS - Línea Ética"**

### 1.2 Configurar Encabezados
En la **fila 1** agrega estos encabezados (exactamente como aparecen):

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Fecha de Reporte** | **Código de Seguimiento** | **Tipo de Reporte** | **Área Involucrada** | **Descripción** | **Fecha del Incidente** | **Testigos** | **Evidencias** | **Nombre Reportante** | **Email Reportante** | **Teléfono Reportante** | **Estado** | **Fecha Límite Respuesta** | **Responsable Asignado** | **Observaciones** | **Acciones Tomadas** |

### 1.3 Configurar Formato (Opcional pero Recomendado)
1. Selecciona la fila 1 completa
2. **Formato → Formato de celdas**
3. Cambia el color de fondo a **verde oscuro (#1B5E20)**
4. Cambia el color del texto a **blanco**
5. Marca **negrita**

### 1.4 Obtener el ID de la Hoja
1. Copia la URL de tu hoja de Google Sheets
2. Extrae el ID que está entre `/d/` y `/edit`:
   ```
   https://docs.google.com/spreadsheets/d/TU_SHEET_ID_AQUI/edit
   ```

---

## 🔧 **PASO 2: Configurar Google Apps Script**

### 2.1 Crear el Proyecto
1. Ve a **[Google Apps Script](https://script.google.com)**
2. Haz clic en **"+ Nuevo proyecto"**
3. Nombra el proyecto: **"Red Medicron IPS - Línea Ética"**

### 2.2 Configurar el Código
1. **Elimina** todo el código que aparece por defecto
2. **Copia y pega** el contenido completo del archivo `google-apps-script-linea-etica.js`
3. **Actualiza las siguientes variables** en la parte superior del código:

```javascript
// ===== CONFIGURACIÓN - ACTUALIZA ESTOS VALORES =====
const SHEET_ID = 'TU_SHEET_ID_LINEA_ETICA_AQUI'; // ← Pega aquí el ID de tu hoja

// Emails del comité de ética (IMPORTANTE: Usar emails seguros)
const COMITE_ETICA_EMAILS = [
    'direccion@redmedicron.com',        // ← Email del director
    'comite.etica@redmedicron.com',     // ← Email del comité ético
    'legal@redmedicron.com'             // ← Email del área legal
];

// Email para notificaciones de recepción
const EMAIL_NOTIFICACIONES = 'lineaetica@redmedicron.com'; // ← Email principal
```

### 2.3 Guardar el Proyecto
1. **Ctrl + S** para guardar
2. Si te pide un nombre, usa: **"Sistema Línea Ética"**

---

## 🚀 **PASO 3: Desplegar como Aplicación Web**

### 3.1 Configurar el Despliegue
1. En Google Apps Script, haz clic en **"Implementar"** → **"Nueva implementación"**
2. En **"Tipo"**, selecciona **"Aplicación web"**
3. **Configuración:**
   - **Descripción:** `Sistema de Línea Ética Red Medicron IPS`
   - **Ejecutar como:** `Yo (tu email)`
   - **Quién puede acceder:** `Cualquier usuario`

### 3.2 Autorizar Permisos
1. Haz clic en **"Implementar"**
2. Te pedirá autorizar permisos
3. Haz clic en **"Revisar permisos"**
4. Selecciona tu cuenta de Google
5. Haz clic en **"Avanzado"** → **"Ir a [nombre del proyecto] (no seguro)"**
6. Haz clic en **"Permitir"**

### 3.3 Obtener la URL de la Aplicación
1. **Copia la URL** que aparece después del despliegue
2. Se verá similar a:
   ```
   https://script.google.com/macros/s/ABC123.../exec
   ```

---

## 🔗 **PASO 4: Conectar con la Página Web**

### 4.1 Actualizar LineaEticaPage.tsx
1. Abre el archivo `src/LineaEtica/LineaEticaPage.tsx`
2. Busca la línea que dice:
   ```typescript
   const response = await fetch('GOOGLE_APPS_SCRIPT_URL_LINEA_ETICA', {
   ```
3. **Reemplaza** `GOOGLE_APPS_SCRIPT_URL_LINEA_ETICA` con la URL que copiaste:
   ```typescript
   const response = await fetch('https://script.google.com/macros/s/ABC123.../exec', {
   ```

### 4.2 Guardar y Probar
1. Guarda el archivo
2. Reinicia el servidor de desarrollo: `npm run dev`
3. Ve a la página de Línea Ética y prueba el formulario

---

## 🧪 **PASO 5: Pruebas del Sistema**

### 5.1 Probar desde Google Apps Script
1. En Google Apps Script, busca la función `probarLineaEtica()`
2. Selecciónala en el dropdown
3. Haz clic en **"Ejecutar"**
4. Verifica que:
   - Se cree una fila en Google Sheets
   - Se envíen emails al comité
   - No haya errores en los logs

### 5.2 Probar desde la Página Web
1. Ve a tu página web: `http://localhost:5173/linea-etica`
2. Llena el formulario con datos de prueba
3. Envía el reporte
4. Verifica que:
   - Aparezca mensaje de éxito
   - Se genere un código de seguimiento
   - Se guarden los datos en Google Sheets
   - Lleguen los emails al comité

---

## 🔒 **PASO 6: Configuración de Seguridad**

### 6.1 Proteger la Hoja de Cálculo
1. En Google Sheets, ve a **"Datos"** → **"Proteger hojas y rangos"**
2. Selecciona **"Hoja"** → **"ReportesEticos"**
3. En **"Permisos"**, selecciona **"Restringir quién puede editar este rango"**
4. Agrega solo los emails del comité de ética
5. Haz clic en **"Listo"**

### 6.2 Configurar Notificaciones
1. En Google Sheets, ve a **"Herramientas"** → **"Reglas de notificación"**
2. Configura notificaciones para:
   - **"Cualquier cambio se realice"**
   - **Frecuencia:** "De inmediato"
   - **Email:** Comité de ética

### 6.3 Establecer Permisos de Visualización
1. Haz clic en **"Compartir"** en Google Sheets
2. Agrega los emails del comité con permisos de **"Editor"**
3. Cambia el acceso general a **"Restringido"**

---

## 📊 **PASO 7: Gestión de Reportes**

### 7.1 Estados de Reportes
El sistema maneja los siguientes estados:
- **PENDIENTE** - Recién recibido
- **EN REVISIÓN** - Bajo investigación
- **EN PROCESO** - Acciones en curso
- **RESUELTO** - Caso cerrado
- **ARCHIVADO** - Sin acción requerida

### 7.2 Seguimiento de Reportes
1. **Código de Seguimiento:** Formato `LE-YYYYMMDD-XXXXXX`
2. **Tiempo de Respuesta:** 10 días hábiles
3. **Responsable:** Asignar miembro del comité
4. **Documentación:** Registrar todas las acciones

### 7.3 Reportes Anónimos
- Los datos personales se marcan como **"ANÓNIMO"**
- Se resaltan con fondo rojo claro en la hoja
- No se envía confirmación al reportante
- Se garantiza confidencialidad total

---

## 📧 **PASO 8: Configuración de Emails**

### 8.1 Personalizar Emails del Comité
En el script, puedes personalizar:
```javascript
const COMITE_ETICA_EMAILS = [
    'director.general@redmedicron.com',
    'coordinador.etica@redmedicron.com',
    'legal@redmedicron.com',
    'talento.humano@redmedicron.com'  // Agregar más emails si es necesario
];
```

### 8.2 Configurar Email de Respuesta
```javascript
const EMAIL_NOTIFICACIONES = 'lineaetica@redmedicron.com';
```

---

## 🚨 **PASO 9: Procedimientos de Emergencia**

### 9.1 Reportes Urgentes
Los reportes de **corrupción** y **acoso/discriminación** se marcan automáticamente como **PRIORIDAD ALTA** y:
- Se envían notificaciones inmediatas
- Se resaltan en rojo en los emails
- Requieren respuesta en 5 días hábiles

### 9.2 Escalamiento
Si un reporte no se atiende en el tiempo establecido:
1. El sistema puede configurarse para enviar recordatorios
2. Escalamiento automático a la dirección general
3. Registro en el sistema de calidad

---

## 📋 **PASO 10: Mantenimiento del Sistema**

### 10.1 Revisión Mensual
- Verificar que todos los reportes tengan seguimiento
- Revisar tiempos de respuesta
- Actualizar procedimientos si es necesario

### 10.2 Respaldos
- Google Sheets se respalda automáticamente
- Exportar mensualmente a Excel para archivo local
- Mantener registro de configuraciones

### 10.3 Auditorías
- Revisar accesos a la información
- Verificar cumplimiento de confidencialidad
- Evaluar efectividad del sistema

---

## ✅ **Checklist de Implementación**

- [ ] Hoja de Google Sheets creada y configurada
- [ ] Google Apps Script deployado correctamente
- [ ] URL actualizada en LineaEticaPage.tsx
- [ ] Emails del comité configurados
- [ ] Pruebas realizadas exitosamente
- [ ] Permisos de seguridad establecidos
- [ ] Notificaciones configuradas
- [ ] Procedimientos documentados
- [ ] Equipo capacitado en el uso del sistema

---

## 📞 **Soporte y Contacto**

Para configuración técnica:
- **Desarrollador:** Edison Narváez
- **Email:** edison@redmedicron.com

Para procedimientos éticos:
- **Comité de Ética:** comite.etica@redmedicron.com
- **Línea Ética:** lineaetica@redmedicron.com

---

**🛡️ Nota de Confidencialidad:** Este sistema maneja información altamente confidencial. Asegúrate de que solo personal autorizado tenga acceso a la configuración y datos de la Línea Ética.
