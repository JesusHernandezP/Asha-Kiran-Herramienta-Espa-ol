# Checklist Completa para la Entrega Final del Proyecto

Este documento reúne las tareas previstas y recomendadas para la última semana de prácticas. Está diseñado para garantizar una entrega profesional, pulida y lista para ser continuada por futuros estudiantes.

---

## 📚 1. Contenido y Calidad Educativa
- [x] **Mínimo de 20 preguntas por lección**: Ampliar el banco de preguntas en los archivos de datos (`lessonsA1.ts`, `lessonsA2.ts`, `lessonsB1.ts`) para que cada lección sea completa y retadora.
- [ ] **Revisión individual de imágenes**: Verificar cada una de las ilustraciones asociadas a las lecciones para asegurar coherencia visual y evitar estilos discordantes.
- [ ] **Placeholders temporales**: Colocar emojis o imágenes genéricas unificadas en aquellos ejercicios que aún no tengan ilustración final.
- [x] **Recursos Málaga (Google Drive)**: Enlazar correctamente las carpetas y documentos de apoyo provenientes de Google Drive en la sección de Recursos Málaga.

---

## ⚙️ 2. Optimización Técnica y de Rendimiento
- [x] **Limpieza de archivos huérfanos**: Eliminar del repositorio los recursos, audios o imágenes que se importaron provisionalmente y ya no se utilizan en la plataforma.
- [x] **Verificación de build de producción**: Ejecutar localmente `npm run build` para asegurar que el compilador de TypeScript no reporte ningún error y el paquete se genere correctamente.

---

## 🌐 3. Configuración para el Despliegue (Netlify) y SEO
- [x] **Redirecciones SPA (`_redirects`)**: Crear un archivo llamado `_redirects` en la carpeta `public/` con el contenido `/* /index.html 200` para evitar errores 404 al recargar páginas internas en Netlify.
- [x] **Favicon personalizado**: Reemplazar el favicon por defecto de Vite con el logo de la organización (Asha Kiran) o la plataforma.
- [x] **SEO básico**: Personalizar la etiqueta `<title>` y los metadatos de descripción en `index.html` para dar una buena presentación en los motores de búsqueda y al compartir el enlace por redes sociales (WhatsApp, etc.).

---

## 📱 4. Usabilidad y Experiencia de Usuario (UX)
- [ ] **Pruebas en dispositivos móviles**: Testear la navegación del Aula Virtual, el reproductor de audio y el funcionamiento de los juegos interactivos (Flashcards, Memory) en teléfonos reales.
- [ ] **Control de fallos de carga**: Asegurar que si un recurso externo (como un video de YouTube) no carga o no hay internet, la aplicación muestre un mensaje aclaratorio en lugar de bloquearse.
- [ ] **Accesibilidad (a11y)**: Añadir textos descriptivos (`alt`) en todas las imágenes clave y verificar que los botones tengan etiquetas claras para lectores de pantalla.

---

## 📝 5. Documentación y Relevo Técnico
- [ ] **Comentarios en el código**: Documentar las funciones principales (como el sistema de reproducción de audio, preselección de voz y lógica de traducción).
- [ ] **Creación del documento del proyecto (`README.md` o `PROYECTO.md`)**: Redactar un archivo con:
  - Tecnologías utilizadas e instalación.
  - Estructura de las carpetas.
  - **Guía paso a paso para futuros practicantes**: explicando cómo añadir nuevas lecciones (estructura JSON requerida), nuevos audios o nuevos términos en el glosario.
