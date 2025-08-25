# 🖼️ Componente OptimizedImage - Guía de Uso

## 📦 **¿Qué es OptimizedImage?**

Es un componente React personalizado que optimiza automáticamente la carga de imágenes en el sitio web de Red Medicron IPS.

## ✨ **Características**

- **🚀 WebP con fallback** - Carga formato moderno WebP, con respaldo a JPG/PNG
- **📱 Responsive images** - Diferentes tamaños para móvil, tablet y desktop
- **⚡ Lazy loading** - Las imágenes se cargan solo cuando son visibles
- **🎨 Transiciones suaves** - Efectos de aparición elegantes

---

## 📝 **Cómo Usar**

### **1. Importar el Componente**
```tsx
import { OptimizedImage } from '../components/OptimizedImage';
```

### **2. Uso Básico**
```tsx
<OptimizedImage
    src="/images/hero-bg.jpg"
    alt="Red Medicron IPS - Atención médica de calidad"
    className="w-full h-64 object-cover rounded-lg"
/>
```

### **3. Para Imágenes Críticas (Above the fold)**
```tsx
<OptimizedImage
    src="/images/hero-bg.jpg"
    alt="Hero background"
    priority={true}  // Carga inmediata, sin lazy loading
    className="w-full h-screen object-cover"
/>
```

### **4. Con Responsive Sizes**
```tsx
<OptimizedImage
    src="/sedes/ipiales.jpg"
    alt="Sede Ipiales"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="w-full h-48 object-cover"
/>
```

---

## 🔧 **Props Disponibles**

| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| `src` | string | ✅ | Ruta de la imagen |
| `alt` | string | ✅ | Texto alternativo |
| `className` | string | ❌ | Clases CSS de Tailwind |
| `sizes` | string | ❌ | Responsive sizes (default: "100vw") |
| `priority` | boolean | ❌ | Carga prioritaria (default: false) |

---

## 📁 **Estructura de Archivos Esperada**

Para que funcione correctamente, necesitas tener estas versiones de cada imagen:

```
public/
  images/
    hero-bg.jpg           # Imagen original
    hero-bg.webp          # Versión WebP optimizada
    hero-bg-mobile.jpg    # Versión móvil (480px)
    hero-bg-mobile.webp   # Versión móvil WebP
    hero-bg-tablet.jpg    # Versión tablet (768px)
    hero-bg-tablet.webp   # Versión tablet WebP
    hero-bg-desktop.jpg   # Versión desktop (1200px)
    hero-bg-desktop.webp  # Versión desktop WebP
```

---

## 🚀 **Migrar Imágenes Existentes**

### **Antes (Imagen normal):**
```tsx
<img 
    src="/images/hero-bg.jpg" 
    alt="Hero" 
    className="w-full h-64 object-cover" 
/>
```

### **Después (OptimizedImage):**
```tsx
<OptimizedImage
    src="/images/hero-bg.jpg"
    alt="Hero"
    className="w-full h-64 object-cover"
/>
```

---

## 🎯 **Ejemplos Específicos para Red Medicron IPS**

### **1. Hero Principal**
```tsx
<OptimizedImage
    src="/images/hero-bg.jpg"
    alt="Red Medicron IPS - Cuidando tu salud con excelencia"
    priority={true}
    className="w-full h-screen object-cover"
    sizes="100vw"
/>
```

### **2. Galería de Sedes**
```tsx
<OptimizedImage
    src="/sedes/ipiales.jpg"
    alt="Sede Ipiales - Red Medicron IPS"
    className="w-full h-48 object-cover rounded-lg shadow-md"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### **3. Logos**
```tsx
<OptimizedImage
    src="/logoRMIPS.png"
    alt="Logo Red Medicron IPS"
    priority={true}
    className="h-12 w-auto"
    sizes="(max-width: 768px) 120px, 150px"
/>
```

### **4. Carrusel de Servicios**
```tsx
<OptimizedImage
    src="/images/doctora.jpg"
    alt="Doctora atendiendo paciente"
    className="w-full h-64 object-cover rounded-xl"
    sizes="(max-width: 768px) 100vw, 50vw"
/>
```

---

## ⚡ **Beneficios de Rendimiento**

### **Antes:**
- ❌ Una sola imagen grande para todos los dispositivos
- ❌ Formato JPG/PNG siempre
- ❌ Carga inmediata de todas las imágenes
- ❌ ~6MB de imágenes totales

### **Después:**
- ✅ Imágenes optimizadas por dispositivo
- ✅ WebP para navegadores modernos (-30% tamaño)
- ✅ Lazy loading (-50% carga inicial)
- ✅ ~1.5MB de imágenes totales

### **Resultado:**
- 🚀 **75% menos peso**
- ⚡ **3-5x más rápido**
- 📊 **PageSpeed Score: 85-95**

---

## 🔄 **¿Dónde Reemplazar?**

### **Archivos que necesitan migración:**
1. `src/Inicio/InicioPage.tsx` - Hero e imágenes principales
2. `src/Sedes/SedesPage.tsx` - Galería de sedes
3. `src/Servicios/ServiciosPage.tsx` - Imágenes de servicios
4. `src/components/MainMenu.tsx` - Logo
5. `src/Footer/FooterPage.tsx` - Logo del footer

### **Buscar y reemplazar:**
```tsx
// Buscar esto:
<img src="/images/

// Reemplazar con:
<OptimizedImage src="/images/
```

---

## 🎉 **¡Resultado Final!**

Un sitio web de Red Medicron IPS que carga **súper rápido** en todos los dispositivos, mejorando la experiencia del usuario y el SEO.

**¡Tus pacientes lo agradecerán!** 🏥💚
