# Configuración de Google Apps Script para Formulario de Contacto

## Guía Paso a Paso

### 1. Crear una Hoja de Cálculo de Google

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Ponle un nombre como "Red Medicron IPS - Contactos"
4. Copia el ID de la hoja de cálculo desde la URL:
   ```
   https://docs.google.com/spreadsheets/d/[ESTE_ES_EL_ID]/edit
   ```

### 2. Configurar Google Apps Script

1. Ve a [Google Apps Script](https://script.google.com)
2. Haz clic en "Nuevo proyecto"
3. Elimina el código por defecto
4. Copia y pega el código del archivo `google-apps-script-config.js`
5. Actualiza estas variables en el código:
   ```javascript
   const SHEET_ID = 'TU_SHEET_ID_AQUI'; // El ID que copiaste antes
   const NOTIFICATION_EMAIL = 'contacto@redmedicronips.com'; // Tu email
   ```

### 3. Probar la Configuración

1. En el editor de Apps Script, selecciona la función `testConfiguration`
2. Haz clic en "Ejecutar"
3. Autoriza los permisos necesarios
4. Verifica que se cree una fila de prueba en tu hoja de cálculo

### 4. Desplegar como Aplicación Web

1. Haz clic en "Desplegar" → "Nueva implementación"
2. En "Tipo", selecciona "Aplicación web"
3. Configuración:
   - **Descripción**: "Formulario de contacto Red Medicron IPS"
   - **Ejecutar como**: "Yo"
   - **Quien tiene acceso**: "Cualquier persona"
4. Haz clic en "Desplegar"
5. Copia la URL que aparece (algo como):
   ```
   https://script.google.com/macros/s/ABC123.../exec
   ```

### 5. Actualizar el Código del Sitio Web

1. Abre el archivo `src/Contacto/ContactoPage.tsx`
2. Busca la línea:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```
3. Reemplaza `YOUR_SCRIPT_ID` con la URL completa que copiaste

### 6. Configurar Permisos de la Hoja de Cálculo

1. Ve a tu hoja de cálculo de Google
2. Haz clic en "Compartir"
3. Asegúrate de que el script tenga permisos de edición

## Estructura de Datos

El formulario enviará los siguientes campos a la hoja de cálculo:

| Campo | Descripción | Requerido |
|-------|-------------|-----------|
| Fecha/Hora | Timestamp automático | Sí |
| Nombre | Nombre del usuario | Sí |
| Apellido | Apellido del usuario | Sí |
| Email | Correo electrónico | Sí |
| Teléfono | Número de teléfono | No |
| Tipo de Consulta | Categoría de la consulta | Sí |
| Sede | Sede de interés | No |
| Mensaje | Mensaje del usuario | Sí |
| Fecha Envío | Fecha formateada | Sí |
| Hora Envío | Hora formateada | Sí |

## Tipos de Consulta Disponibles

- `informacion-general`: Información General
- `citas-medicas`: Citas Médicas
- `servicios`: Consulta sobre Servicios
- `facturacion`: Facturación
- `urgencias`: Urgencias/Emergencias
- `otro`: Otro

## Sedes Disponibles

- `hospital-pasto`: Hospital - Pasto
- `sede-ipiales`: Sede Ipiales
- `sede-tuquerres`: Sede Túquerres
- `sede-tumaco`: Sede Tumaco
- `sede-samaniego`: Sede Samaniego

## Notificaciones por Email

El script puede enviar automáticamente un email de notificación cuando se recibe un nuevo contacto. Para activar esta función:

1. Asegúrate de que la variable `NOTIFICATION_EMAIL` esté configurada
2. El script usará tu cuenta de Gmail para enviar el email
3. El formato del email incluirá todos los datos del formulario

## Solución de Problemas

### Error: "No se puede acceder a la hoja"
- Verifica que el `SHEET_ID` sea correcto
- Asegúrate de que el script tenga permisos para acceder a la hoja

### Error: "CORS"
- Esto es normal con Apps Script
- El formulario usa `mode: 'no-cors'` para evitar este problema
- Los datos se enviarán correctamente aunque aparezca este error en la consola

### Los emails no se envían
- Verifica que `NOTIFICATION_EMAIL` esté configurado
- Asegúrate de haber autorizado los permisos de Gmail
- Revisa la carpeta de spam

## Seguridad

- El script solo acepta datos del dominio configurado
- Los datos se almacenan en tu cuenta de Google
- Puedes agregar validaciones adicionales en el script según sea necesario

## Monitoreo

Para ver las estadísticas de contactos:

1. En Apps Script, ejecuta la función `getContactStats`
2. Verifica los logs para ver el número total de contactos
3. Revisa regularmente la hoja de cálculo para nuevos mensajes

## Mantenimiento

- Haz respaldos regulares de la hoja de cálculo
- Revisa y responde a los mensajes de contacto
- Actualiza los permisos según sea necesario
- Monitorea los logs de Apps Script para detectar errores
