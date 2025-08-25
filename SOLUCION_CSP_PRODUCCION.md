# 🚀 Solución CSP para Producción - Red Medicron IPS

## 🎯 **Problema Identificado**
El error CSP solo aparece después de `npm run build` en el hosting, no en desarrollo local.

**Error:**
```
Refused to connect to 'https://script.googleusercontent.com/...' because it violates the following Content Security Policy directive: "connect-src 'self' https: wss:"
```

## 🔍 **Causa del Problema**
1. **En desarrollo**: Vite es más permisivo con las políticas de seguridad
2. **En producción**: Los hostings aplican CSP más estrictas
3. **Google Apps Script**: Usa dominios específicos que requieren autorización explícita

## ✅ **Soluciones Implementadas**

### 1. **CSP Mejorada para Producción**
Actualizada en `index.html` para incluir dominios específicos de Google Apps Script.

### 2. **Configuración de Vite para Producción**
Mejorada en `vite.config.ts` para manejar headers de seguridad.

### 3. **Fallback de Error Handling**
Mejorado en `ContactoPage.tsx` para manejar errores de CSP sin afectar funcionalidad.

---

## 🛠️ **Implementación Paso a Paso**

### **Paso 1: Actualizar CSP en index.html**
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://connect.facebook.net https://www.facebook.com https://fonts.googleapis.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https: blob:;
  connect-src 'self' https: wss: https://script.google.com https://script.googleusercontent.com;
  frame-src 'self' https://www.facebook.com https://www.youtube.com https://www.youtube-nocookie.com;
  media-src 'self' https:;
">
```

### **Paso 2: Configurar Vite para Producción**
```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'unsafe-none',
      'Cross-Origin-Opener-Policy': 'same-origin-allow-popups'
    }
  }
})
```

### **Paso 3: Headers para Hosting**
Crear `.htaccess` o `_headers` según tu hosting.

---

## 📋 **Verificación Post-Deploy**

### **✅ Checklist de Producción**
- [ ] CSP permite `script.googleusercontent.com`
- [ ] Formulario envía datos correctamente
- [ ] No hay errores en consola del navegador
- [ ] Email llega a Google Sheets
- [ ] Notificaciones por email funcionan

### **🧪 Pruebas Recomendadas**
1. **Llenar y enviar formulario** en producción
2. **Verificar consola** del navegador (F12)
3. **Confirmar datos** en Google Sheets
4. **Verificar email** de notificación

---

## 🎯 **Hostings Específicos**

### **Netlify**
Crear `public/_headers`:
```
/*
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://connect.facebook.net https://www.facebook.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; connect-src 'self' https: wss: https://script.google.com https://script.googleusercontent.com; img-src 'self' data: https: blob:; frame-src 'self' https://www.facebook.com https://www.youtube.com;
```

### **Vercel**
Crear `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://connect.facebook.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; connect-src 'self' https: wss: https://script.google.com https://script.googleusercontent.com; img-src 'self' data: https: blob:; frame-src 'self' https://www.facebook.com https://www.youtube.com;"
        }
      ]
    }
  ]
}
```

### **GitHub Pages**
Usar configuración en `index.html` (ya implementada).

---

## 🚨 **Si Persiste el Error**

### **Opción 1: CSP Más Permisiva**
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
  style-src 'self' 'unsafe-inline' https:;
  connect-src 'self' https: wss:;
  img-src 'self' data: https: blob:;
  frame-src 'self' https:;
">
```

### **Opción 2: Desactivar CSP Temporalmente**
Comentar la línea CSP en `index.html` para confirmar que es la causa.

### **Opción 3: Proxy Server**
Crear endpoint propio que redirija a Google Apps Script.

---

## 🎉 **Resultado Esperado**
- ✅ Formulario funciona en producción
- ✅ Sin errores de CSP en consola
- ✅ Datos llegan a Google Sheets
- ✅ Emails de notificación funcionan
- ✅ Experiencia de usuario fluida

---

## 📞 **Soporte**
Si necesitas ayuda adicional:
1. Comparte la URL de tu sitio en producción
2. Indica qué hosting estás usando
3. Copia el error exacto de la consola del navegador

**¡Tu formulario ya funciona, solo necesitamos que la consola quede limpia!** 🚀
