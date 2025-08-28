# 👥 Página de Talento Humano - Red Medicron IPS

## ✅ **¿Qué se ha implementado?**

### 🎯 **Carrusel de Estructura Organizacional**
- **14 funcionarios completos** con fotos reales desde `/funcionarios/`
- **Sistema de carrusel moderno** con 3 funcionarios por slide
- **Navegación intuitiva** con botones y indicadores
- **Organización por niveles**: Directivo, Gerencial y Coordinaciones

---

## 🏗️ **Estructura de Funcionarios**

### 📊 **Niveles Organizacionales:**

#### **🎯 Nivel Directivo (1 funcionario)**
- **Dr. Mauricio Enríquez V.** - Director Ejecutivo

#### **👥 Nivel Gerencial (6 funcionarios)**
- **Jefe Deisy Jojoa C.** - Gerente Hospital San José de Túquerres  
- **Dr. Álvaro Timaná R.** - Contralor Interno
- **Dr. Juan Manuel Fuertes M.** - Jefatura Administrativa y Financiera
- **Dra. Mary Ordóñez R.** - Jefatura de Gestión de Talento Humano
- **Jefe Dania Granda O.** - Jefatura de Gestión de Calidad
- **Dra. Sandra Moncayo B.** - Jefatura Servicios de Salud

#### **🏆 Coordinaciones (7 funcionarios)**
- **Dra. Carolina Cabrera C.** - Coordinación Administrativa
- **Ing. Orlando García P.** - Coordinación de Facturación y TI
- **Dra. Diana Hejeile R.** - Coordinación Gestión de Talento Humano
- **Dra. Mercedes Caicedo D.** - Coordinación Contable
- **Jefe Lizeth De La Cruz L.** - Coordinación Crónicos
- **Jefe Sandra Figueroa M.** - Coordinación de Calidad y Servicios de Apoyo HSJT
- **Dra. Patricia López B.** - Coordinación de Servicios Asistenciales HSJT

---

## 🎨 **Características del Diseño**

### **🖼️ Tarjetas de Funcionarios:**
- **Foto real** del funcionario (con fallback a iniciales)
- **Nombre completo** y cargo
- **Descripción personalizada** de sus funciones
- **Ícono de nivel** que identifica su posición organizacional
- **Colores diferenciados** por nivel jerárquico

### **🎠 Funcionalidades del Carrusel:**
- **Navegación fluida** con transiciones suaves
- **Botones de control** (anterior/siguiente)
- **Indicadores de posición** clickeables
- **Contador de funcionarios** mostrados
- **Responsive design** para todos los dispositivos

### **🎯 Código de Colores:**
- **🔵 Azul (Directivo)**: Dr. Mauricio Enríquez
- **🟢 Verde Lima (Gerencial)**: Jefaturas principales
- **🔷 Azul Claro (Coordinaciones)**: Coordinadores y apoyo

---

## 📱 **Responsive Design**

### **📊 Distribución por Pantalla:**
- **Móvil**: 1 funcionario por fila
- **Tablet**: 2 funcionarios por fila  
- **Desktop**: 3 funcionarios por fila

### **🔄 Navegación Optimizada:**
- **Touch-friendly**: Botones grandes para móviles
- **Keyboard accessible**: Navegación con teclado
- **Screen reader friendly**: Labels descriptivos

---

## 🌟 **Secciones Adicionales**

### **💡 Valores y Cultura Organizacional:**
- **4 valores clave**: Compromiso, Profesionalismo, Humanización, Innovación
- **Iconos representativos** y descripciones claras
- **Cards hover effect** para mejor interacción

### **🚀 Únete a Nuestro Equipo:**
- **Convocatorias abiertas** con enlace directo de email
- **Programas de bienestar** y desarrollo profesional
- **Call-to-action atractivo** para nuevos talentos

### **📞 Contacto:**
- **Email directo**: gestionhumana@redmedicronips.com.co
- **Integración fluida** con el sistema de contacto

---

## 🛠️ **Funcionalidades Técnicas**

### **🎯 Estado del Carrusel:**
```tsx
const [currentSlide, setCurrentSlide] = useState(0);
const funcionariosPerSlide = 3;
const totalSlides = Math.ceil(funcionarios.length / funcionariosPerSlide);
```

### **🔄 Navegación:**
```tsx
const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
const goToSlide = (index: number) => setCurrentSlide(index);
```

### **🖼️ Manejo de Imágenes:**
- **Carga automática** desde `/funcionarios/`
- **Fallback a iniciales** si la imagen falla
- **Optimización de carga** con lazy loading

---

## 📂 **Archivos de Imágenes Utilizados**

```
public/funcionarios/
├── Dr_Mauricio.png      (Director Ejecutivo)
├── Jefe_Deisy.png       (Gerente Hospital)
├── Doc_Alvaro.png       (Contralor Interno)
├── Dr_Juan.png          (Jefe Administrativo)
├── Dra_Mary.png         (Jefe Talento Humano)
├── Jefe_Dania.png       (Jefe Calidad)
├── Dra_Sandra.png       (Jefe Servicios Salud)
├── Dra_Carolina.png     (Coord. Administrativa)
├── Ing_Orlando.png      (Coord. Facturación TI)
├── Dra_Diana.png        (Coord. Talento Humano)
├── Dra_Mercedes.png     (Coord. Contable)
├── Jefe_Lizeth.png      (Coord. Crónicos)
├── Jefe_Sandra.png      (Coord. Calidad HSJT)
└── Dra_Patricia.png     (Coord. Asistencial HSJT)
```

---

## 🎉 **Resultado Final**

Una página de **Talento Humano profesional y moderna** que:

- ✅ **Presenta toda la estructura organizacional** de Red Medicron IPS
- ✅ **Facilita la navegación** entre funcionarios
- ✅ **Destaca los valores institucionales**
- ✅ **Invita a formar parte del equipo**
- ✅ **Es completamente responsive** y accesible
- ✅ **Integra fotos reales** de todos los funcionarios
- ✅ **Organiza jerárquicamente** la información

**¡Una página que realmente refleja el compromiso de Red Medicron IPS con su talento humano!** 👥🏥💚
