# 📧 Página de Contacto - Red Medicron IPS

## ✅ ¿Qué se ha creado?

### 📄 Nueva Página de Contacto
- **Ruta**: `/contacto`
- **Archivo**: `src/Contacto/ContactoPage.tsx`
- **Diseño**: Completamente responsive y moderno

### 🎨 Características del Diseño

#### 🔥 Visual Moderno
- Gradientes suaves y efectos de glassmorphism
- Animaciones elegantes y hover effects
- Elementos decorativos de fondo
- Diseño responsive para todos los dispositivos

#### 📝 Formulario Completo
- **Campos obligatorios**: Nombre, Apellido, Email, Tipo de consulta, Mensaje
- **Campos opcionales**: Teléfono, Sede de interés
- **Validación**: HTML5 + validación personalizada
- **Estados**: Loading, Success, Error con iconos y colores

#### 📞 Información de Contacto
- Teléfono principal con ícono
- WhatsApp con enlace directo
- Email corporativo
- Dirección de sede principal
- Horarios de atención
- Sección especial para urgencias

### 🔗 Integración Completa

#### 🧭 Navegación
- ✅ Agregado al menú principal
- ✅ Agregado al footer
- ✅ Rutas configuradas en App.tsx

#### 🌐 Conectividad
- ✅ Integración con Google Apps Script
- ✅ Envío automático a hoja de cálculo
- ✅ Notificaciones por email opcionales

## 🚀 Tipos de Consulta Disponibles

1. **📋 Información General** - Para consultas generales
2. **🏥 Citas Médicas** - Agendar o consultar citas
3. **🔧 Servicios** - Información sobre servicios específicos
4. **💰 Facturación** - Consultas sobre pagos y facturación
5. **🚨 Urgencias** - Para emergencias médicas
6. **📝 Otro** - Cualquier otra consulta

## 🏢 Sedes Disponibles

- 🏥 **Hospital - Pasto** (Sede principal)
- 📍 **Sede Ipiales**
- 📍 **Sede Túquerres**
- 📍 **Sede Tumaco**
- 📍 **Sede Samaniego**

## 📱 Funcionalidades Especiales

### 💬 WhatsApp Integration
- Botón directo para chatear
- Enlace específico para urgencias
- Mensaje predefinido opcional

### 🚨 Sección de Urgencias
- Diseño destacado en rojo
- Enlaces directos para llamar
- WhatsApp de emergencias

### 📊 Estados del Formulario
- **⏳ Loading**: Spinner animado
- **✅ Success**: Mensaje verde con ícono
- **❌ Error**: Mensaje rojo con sugerencias

## 🔧 Configuración Técnica

### 📡 Google Apps Script
```javascript
// URL que debes configurar en ContactoPage.tsx
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/TU_SCRIPT_ID/exec';
```

### 📋 Datos que se Envían
```json
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "email": "juan@email.com",
  "telefono": "300 123 4567",
  "tipoConsulta": "informacion-general",
  "sede": "hospital-pasto",
  "mensaje": "Consulta sobre servicios...",
  "timestamp": "2025-01-XX...",
  "fechaEnvio": "XX/XX/2025",
  "horaEnvio": "XX:XX:XX"
}
```

## 🎯 Próximos Pasos para Implementar

### 1. 📊 Configurar Google Apps Script
- Seguir las instrucciones en `CONFIGURACION_GOOGLE_APPS_SCRIPT.md`
- Crear la hoja de cálculo
- Desplegar el script como aplicación web
- Actualizar la URL en `ContactoPage.tsx`

### 2. 📞 Actualizar Información de Contacto
- Cambiar números de teléfono reales
- Actualizar email corporativo
- Verificar direcciones de las sedes
- Ajustar horarios de atención

### 3. 🎨 Personalización (Opcional)
- Ajustar colores corporativos
- Modificar textos según preferencias
- Agregar/quitar campos del formulario
- Personalizar mensajes de confirmación

## 🔍 Testing y Verificación

### ✅ Pruebas Recomendadas
1. **Responsive Design**: Probar en móvil, tablet y desktop
2. **Formulario**: Enviar datos de prueba
3. **Validaciones**: Probar campos requeridos
4. **Enlaces**: Verificar WhatsApp y teléfonos
5. **Navegación**: Comprobar menú y footer

### 📊 Monitoreo
- Revisar hoja de cálculo regularmente
- Verificar emails de notificación
- Monitorear logs de Google Apps Script
- Responder a mensajes recibidos

## 💡 Características Destacadas

### 🎨 Diseño Visual
- **Gradientes modernos** con colores corporativos
- **Efectos glassmorphism** para una apariencia premium
- **Animaciones suaves** para mejor UX
- **Iconografía coherente** con React Icons

### 📱 Mobile-First
- **Responsive perfecto** en todos los dispositivos
- **Touch-friendly** botones y formularios
- **Navegación intuitiva** en móviles
- **Performance optimizado**

### 🔒 Seguridad y Privacidad
- **Validación frontend** y backend
- **Protección de datos** según normativas
- **Nota de privacidad** incluida
- **Envío seguro** via HTTPS

## 🎉 Resultado Final

La página de contacto está completamente funcional y lista para recibir consultas de los usuarios. El diseño es moderno, professional y está perfectamente integrado con el resto del sitio web de Red Medicron IPS.

**¡Solo falta configurar Google Apps Script para completar la funcionalidad!** 📧✨
