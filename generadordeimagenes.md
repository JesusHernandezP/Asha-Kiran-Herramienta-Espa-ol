# 🎨 Flujo de Generación de Ilustraciones para Lecciones

Este documento sirve como especificación y lista de control (checklist) para que cualquier agente de IA continúe de forma automática con la creación e integración de ilustraciones personalizadas para las tarjetas de lección.

---

## 🛠️ Instrucciones para el Agente (Cómo Ejecutar)

Cuando el usuario pida continuar con las imágenes (por ejemplo: *"Lee el generadordeimagenes.md y sigue generando las ilustraciones"*):

1. **Revisar el Estado**: Lee este archivo para identificar qué lecciones están marcadas con `[ ]` (pendiente) en la tabla inferior.
2. **Generar la Imagen**: Utiliza la herramienta `generate_image` con el prompt sugerido para la primera lección pendiente de la lista.
3. **Copiar al Proyecto**: Copia la imagen generada (guardada en el directorio de la conversación) a su ubicación final: `public/images/lessons/[nombre_archivo].png`.
4. **Actualizar el Código**:
   - Para niveles **A1/A2**: Modifica `src/data/content.ts` para que la propiedad `illustrationUrl` y `imageUrl` de la lección apunte a `/images/lessons/[nombre_archivo].png`.
   - Para nivel **B1**: Modifica `src/data/lessonsB1.ts` de la misma manera.
5. **Marcar como Listo**: Actualiza este archivo cambiando el `[ ]` por `[x]` para la lección completada.
6. **Compilar y Validar**: Ejecuta `npm run build` para asegurar la integridad de la compilación.
7. **Comprometer en Git**: Realiza `git add`, `git commit` y `git push` con los cambios.
8. **Detenerse**: Genera **solo una o dos imágenes** por turno para respetar las cuotas diarias y mantener el control de calidad, e informa al usuario sobre el avance.

---

## 📋 Lista de Control de Lecciones

### Nivel A2 (Básico)

| Estado | ID de Lección | Archivo Destino | Prompt Sugerido |
| :---: | :--- | :--- | :--- |
| [x] | `a2-vocab-animales` | `animales.png` | *Completado* |
| [x] | `a2-vocab-mapas` | `mapas.png` | *Completado* |
| [x] | `a2-vocab-direcciones` | `direcciones.png` | *Completado* |
| [ ] | `a2-gram-necesidades` | `necesidades.png` | Flat vector illustration of a shopping cart and a hand choosing items in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-gram-tener-estados` | `tener_estados.png` | Flat vector illustration of a thermometer and hot/cold facial expressions in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-gram-me-duele` | `me_duele.png` | Flat vector illustration of band-aids, medicine, and health icons in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-vocab-restaurante` | `restaurante.png` | Flat vector illustration of a plate with food, glass, and utensils in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-vocab-clima` | `clima.png` | Flat vector illustration of a sun, clouds, wind, and trees in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-vocab-hospital` | `hospital.png` | Flat vector illustration of a doctor and hospital building in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-vocab-colegio` | `colegio.png` | Flat vector illustration of a school building, desk, and backpack in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-vocab-rutina` | `rutina.png` | Flat vector illustration of a clock, calendar, and daily activities timeline in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-vocab-familia-relaciones` | `familia.png` | Flat vector illustration of a happy diverse family group smiling together in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-vocab-trabajo` | `trabajo.png` | Flat vector illustration of a desk with computer and office supplies in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-repaso-a1` | `repaso_a1.png` | Flat vector illustration of a checklist board, stars, and check marks in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-repaso-a2` | `repaso_a2.png` | Flat vector illustration of a checklist board, trophies, and stars in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |

### Nivel B1 (Intermedio)

| Estado | ID de Lección | Archivo Destino | Prompt Sugerido |
| :---: | :--- | :--- | :--- |
| [ ] | `tema-b11` | `b1_pasado_simple.png` | Flat vector illustration of a calendar, clock, and past memory bubble in a cartoon 2D style, educational, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b12` | `b1_dia_importante.png` | Flat vector illustration of a birthday cake, calendar, and party balloons in a cartoon 2D style, educational, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b13` | `b1_comparar_pasado.png` | Flat vector illustration comparing an old vintage phone with a modern smartphone in a cartoon 2D style, educational, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b14` | `b1_experiencias.png` | Flat vector illustration of suitcases, passport, and globetrotting icons in a cartoon 2D style, educational, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b15` | `b1_problemas.png` | Flat vector illustration of puzzle pieces coming together and keys in a cartoon 2D style, educational, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b16` | `b1_historias.png` | Flat vector illustration of an open book with magic stars and stories rising from it in a cartoon 2D style, educational, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b17` | `b1_futuro.png` | Flat vector illustration of binoculars looking at mountains and stars in a cartoon 2D style, educational, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b18` | `b1_hobbies.png` | Flat vector illustration of hobbies (soccer ball, paint palette, book) in a cartoon 2D style, educational, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b19` | `b1_sentimientos.png` | Flat vector illustration of cartoon emojis expressing different feelings in a cartoon 2D style, educational, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b110` | `b1_gustos_comida.png` | Flat vector illustration of delicious food (pizza, fruit, soup) on a table in a cartoon 2D style, educational, minimal background, bright pastel colors, isolated design. |

*(Nota: Para los textos de comprensión B1, se puede utilizar opcionalmente la misma ilustración del tema correspondiente o generar una más simplificada).*
