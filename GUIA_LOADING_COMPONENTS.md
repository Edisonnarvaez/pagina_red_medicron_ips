# 🔄 Guía de Uso - Componentes de Loading

## 📦 **Componentes Disponibles**

### 1. **LoadingSpinner** - Spinner pequeño para botones y formularios
### 2. **FullPageLoading** - Loading de pantalla completa

---

## 🎯 **LoadingSpinner - Uso en Formularios**

### **Importar el componente:**
```tsx
import { LoadingSpinner } from '../components/Loading';
```

### **Variantes disponibles:**

#### 🔹 **Variante Default (Recomendada para Red Medicron IPS)**
```tsx
<LoadingSpinner 
    size="md" 
    variant="default" 
    message="Cargando..." 
    showLogo={true} 
/>
```

#### ⚕️ **Variante Medical (Para páginas médicas)**
```tsx
<LoadingSpinner 
    size="lg" 
    variant="medical" 
    message="Procesando información médica..." 
/>
```

#### ⚪ **Variante Minimal (Para botones)**
```tsx
<LoadingSpinner 
    size="sm" 
    variant="minimal" 
/>
```

#### 🔵 **Variante Dots (Para listas o cargas rápidas)**
```tsx
<LoadingSpinner 
    size="md" 
    variant="dots" 
    message="Cargando servicios..." 
/>
```

### **Tamaños disponibles:**
- `sm` - Pequeño (botones)
- `md` - Mediano (formularios)
- `lg` - Grande (secciones)
- `xl` - Extra grande (pantallas principales)

---

## 🖥️ **FullPageLoading - Pantalla Completa**

### **Uso básico:**
```tsx
import { FullPageLoading } from '../components/Loading';

// En tu componente
{isLoading && (
    <FullPageLoading 
        message="Cargando Red Medicron IPS..."
        subtitle="Preparando tu experiencia de salud"
    />
)}
```

### **Con barra de progreso:**
```tsx
<FullPageLoading 
    message="Cargando expediente médico..."
    subtitle="Accediendo a tu información de salud"
    progress={progressValue} // 0-100
    showProgress={true}
/>
```

---

## 💡 **Ejemplos Prácticos para Red Medicron IPS**

### **1. Formulario de Contacto**
```tsx
// En el botón de envío
{isSubmitting ? (
    <>
        <LoadingSpinner size="sm" variant="minimal" />
        <span className="ml-3">Enviando mensaje...</span>
    </>
) : (
    <>
        <FaPaperPlane className="mr-2" />
        Enviar Mensaje
    </>
)}
```

### **2. Carga de Servicios Médicos**
```tsx
{isLoadingServices ? (
    <LoadingSpinner 
        size="lg" 
        variant="medical" 
        message="Cargando servicios de salud..." 
    />
) : (
    <ServiciosList />
)}
```

### **3. Página de Citas (ejemplo futuro)**
```tsx
{isBookingAppointment && (
    <FullPageLoading 
        message="Programando tu cita médica..."
        subtitle="Conectando con nuestro sistema de citas"
        showProgress={true}
        progress={bookingProgress}
    />
)}
```

### **4. Login de Pacientes (ejemplo futuro)**
```tsx
{isAuthenticating && (
    <FullPageLoading 
        message="Verificando tu identidad..."
        subtitle="Accediendo a tu portal de paciente"
    />
)}
```

---

## 🎨 **Personalización de Colores**

Los componentes usan automáticamente la paleta de colores de Red Medicron IPS:

- **azul** - Color principal
- **verdeOscuro** - Color secundario
- **verdeLima** - Color de acento
- **acento** - Color de resaltado

### **Si necesitas colores personalizados:**
```tsx
// Modificar en el archivo LoadingSpinner.tsx
className="bg-gradient-to-r from-tu-color-1 to-tu-color-2"
```

---

## 🔧 **Integración Completa en una Página**

```tsx
import React, { useState } from 'react';
import { LoadingSpinner, FullPageLoading } from '../components/Loading';

const MiPagina: React.FC = () => {
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);

    // Simular carga inicial de página
    useEffect(() => {
        setTimeout(() => setIsPageLoading(false), 2000);
    }, []);

    const handleSubmit = async () => {
        setIsFormSubmitting(true);
        try {
            // Tu lógica aquí
            await enviarFormulario();
        } finally {
            setIsFormSubmitting(false);
        }
    };

    // Loading de página completa
    if (isPageLoading) {
        return (
            <FullPageLoading 
                message="Cargando información de salud..."
                subtitle="Preparando tu experiencia médica"
            />
        );
    }

    return (
        <div>
            {/* Tu contenido aquí */}
            
            <button 
                onClick={handleSubmit}
                disabled={isFormSubmitting}
            >
                {isFormSubmitting ? (
                    <>
                        <LoadingSpinner size="sm" variant="minimal" />
                        <span className="ml-2">Procesando...</span>
                    </>
                ) : (
                    "Enviar"
                )}
            </button>
        </div>
    );
};
```

---

## ✅ **Estados de Loading ya Implementados**

### **Páginas con Loading Mejorado:**
- ✅ **ContactoPage** - Loading en botón de envío
- ✅ **PQRSFPage** - Loading con estados success/error
- 🔄 **LineaEticaPage** - (Siguiente en implementar)

### **Próximas Implementaciones Sugeridas:**
- 📝 Formulario de citas online
- 🔐 Portal del paciente
- 📊 Dashboard administrativo
- 🏥 Sistema de servicios médicos

**¡Tus usuarios ahora tendrán una experiencia mucho más profesional! 🎉**
