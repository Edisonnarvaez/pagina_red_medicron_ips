# 📊 Página de Organigrama - Red Medicron IPS

## ✅ **¿Qué se ha implementado?**

### 🎯 **Organización Profesional de Organigramas**
- **Organigrama Principal**: Estructura general de la institución prominentemente destacada
- **Organigramas por Áreas**: 7 áreas específicas organizadas en tarjetas interactivas
- **Modal de Ampliación**: Sistema para ver las imágenes en tamaño completo
- **SEO Optimizado**: Meta tags específicos para posicionamiento

---

## 📁 **Imágenes Organizadas**

### 🏢 **Organigrama Principal:**
- `Organigrama.png` - Estructura organizacional completa

### 🏗️ **Organigramas por Áreas (7 departamentos):**

1. **🎯 Dirección Ejecutiva**
   - Archivo: `DireccionEjectiva.jpeg`
   - Descripción: Estructura y organización de la Dirección Ejecutiva

2. **💰 Jefatura Financiera y Administrativa**
   - Archivo: `JefaturaFinancieraAdministrativa.png`
   - Descripción: Organización del área financiera y administrativa

3. **✅ Jefatura de Gestión de Calidad**
   - Archivo: `JefaturaGestionCalidad.png`
   - Descripción: Estructura del departamento de gestión y aseguramiento de la calidad

4. **👥 Jefatura de Gestión de Talento Humano**
   - Archivo: `jefaturaGestionTalenteoHumano.png`
   - Descripción: Organización del área de recursos humanos y gestión del talento

5. **🏥 Jefatura de Servicios de Salud**
   - Archivo: `JefaturaServiciosSalud.png`
   - Descripción: Estructura del área médica y servicios asistenciales

6. **🩺 Coordinación de Servicios Asistenciales**
   - Archivo: `CoordinacionServiciosAsistenciales.jpeg`
   - Descripción: Organización de la coordinación de servicios médicos asistenciales

7. **🌟 Coordinación de Calidad - Servicios Apoto**
   - Archivo: `CoordinacionCalidadServiciosApoto.jpeg`
   - Descripción: Estructura específica de calidad para los servicios de la sede Apoto

---

## 🎨 **Características de Diseño**

### 📱 **Layout Responsivo:**
- **Desktop**: Grid de 3 columnas para organigramas por área
- **Tablet**: Grid de 2 columnas adaptativo
- **Móvil**: Columna única con tarjetas optimizadas

### 🖼️ **Sistema de Imágenes:**
- **Organigrama Principal**: Destacado en sección dedicada con fondo blanco
- **Tarjetas por Área**: Imagen thumbnail + información + etiqueta de área
- **Modal de Ampliación**: Vista completa con fondo oscuro semi-transparente

### 🎯 **Interactividad:**
- **Hover Effects**: Animaciones suaves en tarjetas y botones
- **Click para Ampliar**: Modal para ver organigramas en tamaño completo
- **Navegación Intuitiva**: Cierre de modal con click fuera o botón X

---

## 🏷️ **Categorización por Áreas**

### 📊 **Etiquetas de Identificación:**
- 🎯 **Dirección** - Dirección Ejecutiva
- 💼 **Administración** - Jefatura Financiera y Administrativa  
- ✅ **Calidad** - Jefatura de Gestión de Calidad
- 👥 **Talento Humano** - Jefatura de Gestión de Talento Humano
- 🏥 **Servicios de Salud** - Jefatura de Servicios de Salud
- 🩺 **Servicios Asistenciales** - Coordinación de Servicios Asistenciales
- 🌟 **Calidad Regional** - Coordinación de Calidad Servicios Apoto

---

## 🔍 **SEO y Accesibilidad**

### 📈 **Optimización SEO:**
```html
<title>Organigrama Institucional - Red Medicron IPS</title>
<meta name="description" content="Conoce la estructura organizacional de Red Medicron IPS en Nariño...">
<meta name="keywords" content="organigrama red medicron ips, estructura organizacional ips nariño...">
```

### ♿ **Accesibilidad:**
- **Alt tags** descriptivos en todas las imágenes
- **Loading lazy** para optimización de rendimiento  
- **Contraste adecuado** en textos y fondos
- **Navegación por teclado** funcional en modal

---

## 🛠️ **Funcionalidades Técnicas**

### ⚡ **Funciones JavaScript:**
```tsx
// Estado para modal
const [selectedOrganigrama, setSelectedOrganigrama] = useState<string | null>(null);
const [isModalOpen, setIsModalOpen] = useState(false);

// Funciones de modal
const openModal = (image: string) => { ... }
const closeModal = () => { ... }
```

### 🎯 **Características del Modal:**
- **Apertura**: Click en cualquier organigrama (principal o por área)
- **Cierre**: Click fuera del modal, botón X, o tecla Escape
- **Responsive**: Se adapta al tamaño de pantalla
- **Performance**: Carga solo cuando se abre

---

## 📊 **Sección Informativa**

### 🏢 **"Gestión Organizacional Transparente":**
- **Equipo Multidisciplinario**: Profesionales especializados en cada área
- **Gestión de Calidad**: Procesos certificados y mejora continua  
- **Eficiencia Operativa**: Procesos optimizados para mejor servicio

### 🔗 **Enlaces de Navegación:**
- Link a **Transparencia** para más información institucional
- Link a **Contacto** para consultas específicas

---

## 🎯 **Rutas de Imágenes**

### 📁 **Ubicación de Archivos:**
```
/public/organigramas/
├── Organigrama.png (Principal)
├── DireccionEjectiva.jpeg
├── JefaturaFinancieraAdministrativa.png
├── JefaturaGestionCalidad.png
├── jefaturaGestionTalenteoHumano.png
├── JefaturaServiciosSalud.png
├── CoordinacionServiciosAsistenciales.jpeg
└── CoordinacionCalidadServiciosApoto.jpeg
```

### 🌐 **URLs de Acceso:**
```
/organigramas/Organigrama.png
/organigramas/DireccionEjectiva.jpeg
/organigramas/JefaturaFinancieraAdministrativa.png
...
```

---

## 🚀 **Resultado Final**

### ✅ **Página Completamente Funcional:**
- ✅ **8 organigramas** organizados profesionalmente
- ✅ **Modal interactivo** para visualización ampliada
- ✅ **Diseño responsivo** optimizado para todos los dispositivos
- ✅ **SEO implementado** para mejor posicionamiento
- ✅ **Navegación intuitiva** con categorización por áreas
- ✅ **Performance optimizada** con lazy loading
- ✅ **Accesibilidad completa** con alt tags y navegación por teclado

### 🎯 **URL de Acceso:**
`http://localhost:5174/organigrama`

**📊 La página de Organigrama de Red Medicron IPS ahora presenta de manera profesional y organizada toda la estructura institucional, con fácil acceso a los organigramas específicos de cada área departamental.**
