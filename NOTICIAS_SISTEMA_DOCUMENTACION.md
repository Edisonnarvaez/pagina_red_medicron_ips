# 📰 Sistema de Noticias - Red Medicron IPS

## ✅ **¿Qué se ha implementado?**

### 🎯 **Página de Noticias Moderna**
- **Diseño responsive**: Se adapta a móvil, tablet y desktop
- **Sistema de categorías**: 6 categorías organizadas por colores
- **Búsqueda en tiempo real**: Filtrado por título, descripción y tags
- **Modal de lectura completa**: Vista detallada de cada noticia
- **Noticias destacadas**: Sección especial para noticias importantes

### 📊 **Estructura JSON Completa**
Ubicación: `src/data/noticias.json`

---

## 🛠️ **Cómo agregar una nueva noticia**

### **1. Abrir el archivo JSON**
```
src/data/noticias.json
```

### **2. Agregar nueva noticia al array**
```json
{
  "id": 7,
  "titulo": "Tu título aquí",
  "descripcion": "Descripción corta de la noticia",
  "fecha": "2025-09-04",
  "categoria": "eventos",
  "imagen": "/images/noticias/tu-imagen.jpg",
  "enlaceExterno": null,
  "video": null,
  "resumenCorto": "Resumen muy breve",
  "autor": "Área responsable",
  "destacada": false,
  "contenidoCompleto": "Aquí va el contenido completo de la noticia...",
  "tags": ["tag1", "tag2", "tag3"],
  "galeria": [
    "/images/noticias/imagen1.jpg",
    "/images/noticias/imagen2.jpg"
  ]
}
```

---

## 📋 **Campos del JSON explicados**

### **📝 Campos Obligatorios**
| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| `id` | number | Identificador único | `7` |
| `titulo` | string | Título de la noticia | `"Nueva sede en Samaniego"` |
| `descripcion` | string | Descripción corta (150-200 caracteres) | `"Red Medicron IPS inaugura..."` |
| `fecha` | string | Fecha en formato YYYY-MM-DD | `"2025-09-04"` |
| `categoria` | string | ID de categoría válida | `"eventos"` |
| `imagen` | string | Ruta de la imagen principal | `"/images/noticias/imagen.jpg"` |
| `autor` | string | Quien publica la noticia | `"Área de Comunicaciones"` |
| `destacada` | boolean | Si aparece en sección destacada | `true` o `false` |
| `contenidoCompleto` | string | Texto completo de la noticia | `"Contenido extenso..."` |

### **🎯 Campos Opcionales**
| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| `enlaceExterno` | string/null | URL externa relacionada | `"https://ejemplo.com"` |
| `video` | string/null | URL de YouTube | `"https://youtube.com/watch?v=..."` |
| `resumenCorto` | string | Resumen breve alternativo | `"Resumen de 50 caracteres"` |
| `tags` | array | Etiquetas para búsqueda | `["salud", "eventos"]` |
| `galeria` | array | URLs de imágenes adicionales | `["/img1.jpg", "/img2.jpg"]` |

---

## 🎨 **Categorías Disponibles**

| ID | Nombre | Color | Descripción |
|----|--------|-------|-------------|
| `expansion` | Expansión | Verde | Nuevas sedes y crecimiento |
| `eventos` | Eventos | Azul | Jornadas y actividades |
| `reconocimientos` | Reconocimientos | Amarillo | Premios y distinciones |
| `capacitacion` | Capacitación | Morado | Formación del personal |
| `tecnologia` | Tecnología | Cian | Innovaciones tecnológicas |
| `salud-publica` | Salud Pública | Rojo | Programas de salud pública |

---

## 📸 **Manejo de Imágenes**

### **Ubicación recomendada**
```
public/images/noticias/
├── nueva-sede-samaniego.jpg
├── jornada-salud-renal.jpg
├── reconocimiento-excelencia.jpg
└── ...
```

### **Especificaciones**
- **Formato**: JPG, PNG, WebP
- **Tamaño recomendado**: 1200x800px (ratio 3:2)
- **Peso máximo**: 500KB
- **Nombre**: Sin espacios, usar guiones

### **Fallback automático**
Si una imagen no carga, se muestra automáticamente un placeholder.

---

## 🎬 **Videos de YouTube**

### **Formato correcto**
```json
"video": "https://www.youtube.com/watch?v=ID_DEL_VIDEO"
```

### **Conversión automática**
El sistema convierte automáticamente:
- `watch?v=` → `embed/` para mostrar en iframe

---

## 🔗 **Enlaces Externos**

### **Cuándo usar**
- Referencias a ministerios o entidades
- Documentos oficiales
- Páginas de información complementaria

### **Ejemplo**
```json
"enlaceExterno": "https://www.minsalud.gov.co/documento-oficial"
```

---

## 🏷️ **Sistema de Tags**

### **Mejores prácticas**
- Usar entre 3-5 tags por noticia
- Palabras clave relevantes
- Sin tildes ni caracteres especiales
- En minúsculas

### **Ejemplos**
```json
"tags": ["salud renal", "prevencion", "pasto", "jornada"]
```

---

## ⭐ **Noticias Destacadas**

### **Cuándo destacar**
- Inauguraciones importantes
- Reconocimientos oficiales
- Lanzamiento de servicios nuevos
- Eventos de gran impacto

### **Límite recomendado**
Máximo 3-4 noticias destacadas simultáneamente para mejor impacto visual.

---

## 🔍 **Función de Búsqueda**

### **Busca en**
- Título de la noticia
- Descripción
- Tags

### **Filtros**
- Por categoría
- Combinable con búsqueda de texto

---

## 📱 **Características Responsive**

### **Móvil** (< 768px)
- Cards apiladas verticalmente
- Navegación simplificada
- Modal a pantalla completa

### **Tablet** (768px - 1024px)
- Grid de 2 columnas
- Header compacto

### **Desktop** (> 1024px)
- Grid de 3 columnas para noticias regulares
- 2 columnas para destacadas
- Modal centrado

---

## 🎨 **Personalización de Colores**

### **Modificar categorías**
En `noticias.json` → sección `categorias`:
```json
{
  "id": "nueva-categoria",
  "nombre": "Nueva Categoría",
  "descripcion": "Descripción",
  "color": "#FF5733",
  "icono": "IconName"
}
```

---

## 🚀 **Ejemplo Completo de Noticia**

```json
{
  "id": 8,
  "titulo": "Implementación de Telemedicina en Zonas Rurales",
  "descripcion": "Red Medicron IPS amplía su cobertura con tecnología de telemedicina para brindar atención especializada en zonas rurales de difícil acceso.",
  "fecha": "2025-09-04",
  "categoria": "tecnologia",
  "imagen": "/images/noticias/telemedicina-rural.jpg",
  "enlaceExterno": "https://www.minsalud.gov.co/telemedicina-rural",
  "video": "https://www.youtube.com/watch?v=ejemplo123",
  "resumenCorto": "Nueva tecnología de telemedicina para zonas rurales.",
  "autor": "Área de Innovación Tecnológica",
  "destacada": true,
  "contenidoCompleto": "Red Medicron IPS se complace en anunciar la implementación exitosa de un innovador sistema de telemedicina que permitirá brindar atención médica especializada a comunidades en zonas rurales y de difícil acceso en el departamento de Nariño.\n\nEsta iniciativa representa un paso significativo en nuestro compromiso de democratizar el acceso a servicios de salud de calidad, eliminando las barreras geográficas que tradicionalmente han limitado la atención médica en estas áreas.\n\nEl sistema incluye equipos de última tecnología, capacitación especializada para el personal médico y protocolos de atención adaptados a las necesidades específicas de cada comunidad.",
  "tags": ["telemedicina", "tecnologia", "rural", "innovacion", "acceso"],
  "galeria": [
    "/images/noticias/telemedicina-equipo.jpg",
    "/images/noticias/telemedicina-consulta.jpg",
    "/images/noticias/telemedicina-rural-paciente.jpg"
  ]
}
```

---

## 💡 **Tips para Contenido de Calidad**

### **Títulos efectivos**
- Máximo 60 caracteres
- Descriptivos y llamativos
- Sin abreviaciones poco claras

### **Descripciones**
- Entre 120-180 caracteres
- Resume la noticia completa
- Incluye el beneficio o impacto

### **Contenido completo**
- Párrafos cortos (3-4 líneas)
- Información verificada
- Lenguaje claro y profesional

---

## 🔧 **Mantenimiento**

### **Revisión periódica**
- Verificar enlaces externos (mensual)
- Actualizar imágenes obsoletas
- Limpiar noticias muy antiguas (opcional)

### **Respaldo**
- Guardar copia del JSON antes de modificaciones importantes
- Documentar cambios significativos

---

## 📞 **Soporte**

Para consultas sobre el sistema de noticias:
- **Email**: comunicaciones@redmedicronips.com.co
- **Documentación técnica**: Este archivo README
