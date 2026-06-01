# 🎨 Flujo de Generación de Ilustraciones para Lecciones

Este documento sirve como especificación y lista de control (checklist) para que cualquier agente de IA continúe de forma automática con la creación e integración de ilustraciones personalizadas para las tarjetas de lección.

---

## 🛠️ Instrucciones para el Agente (Cómo Ejecutar)

Cuando el usuario pida continuar con las imágenes (por ejemplo: *"Lee el generadordeimagenes.md y sigue generando las ilustraciones"*):

1. **Revisar el Estado**: Lee este archivo para identificar la primera lección que esté marcada con `[ ]` (pendiente) en las tablas de abajo (comenzando por A1, luego A2, B1, B2, C1, etc.).
2. **Generar la Imagen**: Utiliza la herramienta `generate_image` con el prompt sugerido para esa lección. El estilo debe ser consistente: *Flat vector illustration in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design*.
3. **Copiar al Proyecto**: Guarda o copia la imagen en: `public/images/lessons/[nombre_archivo].png`.
4. **Actualizar el Código**:
   - Si la lección está en `src/data/lessonsB1.ts`, actualiza allí la propiedad `illustrationUrl` y `imageUrl` para que apunten a `/images/lessons/[nombre_archivo].png`.
   - De lo contrario, actualízalo en `src/data/content.ts`.
5. **Marcar como Listo**: Cambia el `[ ]` por `[x]` en este archivo para la lección completada.
6. **Compilar y Validar**: Ejecuta `npm run build` para asegurar la integridad de la compilación.
7. **Comprometer en Git**: Realiza `git add`, `git commit` y `git push` con los cambios.
8. **Ejecución Automática**: Procesa **exactamente una o dos lecciones pendientes** por turno de ejecución, de forma que el proceso sea completamente incremental, no requiera preguntar al usuario cuál sigue, y respete las cuotas de generación de imágenes.

---

## 📋 Lista de Control de Lecciones por Nivel

### Nivel A1

| Estado | ID de Lección | Título | Archivo Destino | Prompt Sugerido |
| :---: | :--- | :--- | :--- | :--- |
| [x] | `a1-alfa-abecedario` | Alfabetización: El Abecedario | `abecedario.png` | *Completado* |
| [x] | `a1-vocab-cuerpo` | Partes del Cuerpo Humano | `cuerpo.png` | *Completado* |
| [x] | `a1-vocab-colores` | Vocabulario: Los Colores | `colores.png` | *Completado* |
| [x] | `a1-gram-articulos` | Artículos y Plurales | `articulos.png` | *Completado* |
| [x] | `a1-gram-pronombres` | Pronombres Personales | `pronombres.png` | *Completado* |
| [x] | `a1-gram-verbos` | Verbos Básicos (Ser, Estar, Tener) | `verbos.png` | *Completado* |
| [x] | `a1-vocab-ropa` | Vocabulario: La Ropa | `ropa.png` | *Completado* |
| [x] | `a1-gram-genero` | Género: Masculino y Femenino | `genero.png` | *Completado* |
| [x] | `a1-gram-posesivos` | Posesivos | `posesivos.png` | *Completado* |
| [x] | `a1-gram-negacion` | Afirmación y Negación | `negacion.png` | *Completado* |
| [x] | `a1-vocab-saludos` | Saludos y Presentaciones | `saludos.png` | *Completado* |
| [x] | `a1-vocab-numeros` | Vocabulario: Los Números (1-10) | `numeros.png` | *Completado* |
| [ ] | `a1-vocab-nacionalidades` | Países y Nacionalidades | `nacionalidades.png` | Flat vector illustration of a globe with different country flags sticking out in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a1-vocab-horas-fechas` | Vocabulario: Días, Meses y la Hora | `horas_fechas.png` | Flat vector illustration of a large analog clock and a desk calendar page in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a1-vocab-profesiones` | Vocabulario: Las Profesiones | `profesiones.png` | Flat vector illustration representing 'Vocabulario: Las Profesiones' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a1-vocab-familia` | La Familia y Descripción Física | `familia.png` | Flat vector illustration of a happy diverse family group smiling together in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a1-gram-preguntas` | Preguntas Simples (Qué, Quién, Dónde) | `preguntas.png` | Flat vector illustration of a giant colorful question mark with cartoon lightbulbs in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a1-vocab-comida-casa` | Vocabulario: La Casa y la Comida | `comida_casa.png` | Flat vector illustration of a cozy little house and a plate of fresh healthy food in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |

### Nivel A2

| Estado | ID de Lección | Título | Archivo Destino | Prompt Sugerido |
| :---: | :--- | :--- | :--- | :--- |
| [x] | `a2-vocab-animales` | Animales y Naturaleza | `animales.png` | *Completado* |
| [ ] | `a2-comp-lectura` | Lectura Fácil: Mi Primer Día | `lectura.png` | Flat vector illustration of a cozy reading corner with a book open and a warm lamp in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [x] | `a2-vocab-mapas` | Vocabulario: El Mapa del Mundo | `mapas.png` | *Completado* |
| [x] | `a2-vocab-direcciones` | ¿Dónde está...? | `direcciones.png` | *Completado* |
| [ ] | `a2-gram-necesidades` | Quiero y Necesito | `necesidades.png` | Flat vector illustration of a shopping cart and a hand choosing items in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-gram-tener-estados` | Tengo / No tengo | `tener_estados.png` | Flat vector illustration representing 'Tengo / No tengo' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-gram-me-duele` | Me duele, me gusta... | `me_duele.png` | Flat vector illustration of band-aids, medicine, and health icons in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-comp-supermercado` | Lectura Fácil: En el supermercado | `supermercado.png` | Flat vector illustration of a cozy reading corner with a book open and a warm lamp in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-comp-medico` | Lectura Fácil: En la farmacia | `medico.png` | Flat vector illustration of a cozy reading corner with a book open and a warm lamp in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-gram-preterito-perfecto` | El Pretérito Perfecto | `preterito_perfecto.png` | Flat vector illustration of a timeline with a flag marking a recently completed action in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-gram-futuro-proximo` | El Futuro Próximo (Voy a...) | `futuro_proximo.png` | Flat vector illustration of a person packing a bag with a roadmap showing future destinations in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-gram-comparaciones` | Hacer Comparaciones Simples | `comparaciones.png` | Flat vector illustration representing 'Hacer Comparaciones Simples' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-vocab-restaurante` | En el Restaurante | `restaurante.png` | Flat vector illustration of a plate with food, glass, and utensils in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-repaso-a1` | Repaso General del Nivel A1 | `a1.png` | Flat vector illustration of a checklist board, trophies, and stars in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-vocab-clima` | La Naturaleza y el Clima | `clima.png` | Flat vector illustration of a sun, clouds, wind, and trees in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-vocab-hospital` | En el Hospital | `hospital.png` | Flat vector illustration of a doctor and hospital building in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-vocab-colegio` | En el Colegio | `colegio.png` | Flat vector illustration of a school building, desk, and backpack in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-vocab-rutina` | La Rutina Diaria | `rutina.png` | Flat vector illustration of a clock, calendar, and daily activities timeline in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-vocab-familia-relaciones` | La Familia y las Relaciones | `familia_relaciones.png` | Flat vector illustration of a happy diverse family group smiling together in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-vocab-trabajo` | El Trabajo | `trabajo.png` | Flat vector illustration of a desk with computer and office supplies in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `a2-repaso-a2` | Repaso General del Nivel A2 | `a2.png` | Flat vector illustration of a checklist board, trophies, and stars in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |

### Nivel B1

| Estado | ID de Lección | Título | Archivo Destino | Prompt Sugerido |
| :---: | :--- | :--- | :--- | :--- |
| [ ] | `b1-gram-pasado` | El Pretérito Indefinido | `pasado.png` | Flat vector illustration representing 'El Pretérito Indefinido' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b1-gram-futuro-condicional` | El Futuro y el Condicional | `futuro_condicional.png` | Flat vector illustration representing 'El Futuro y el Condicional' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b1-vocab-opiniones` | Dar Consejos y Expresar Opiniones | `opiniones.png` | Flat vector illustration representing 'Dar Consejos y Expresar Opiniones' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b1-gram-conectores` | Conectores del Discurso | `conectores.png` | Flat vector illustration representing 'Conectores del Discurso' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b1-comp-narracion` | Lectura: Un viaje inolvidable | `narracion.png` | Flat vector illustration of a cozy reading corner with a book open and a warm lamp in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b11` | B1: HABLAR DE UN DÍA DEL PASADO | `b11.png` | Flat vector illustration representing 'B1: HABLAR DE UN DÍA DEL PASADO' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b12` | B1: UN DÍA IMPORTANTE DEL PASADO | `b12.png` | Flat vector illustration representing 'B1: UN DÍA IMPORTANTE DEL PASADO' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b13` | B1: COMPARAR PASADO Y PRESENTE | `b13.png` | Flat vector illustration representing 'B1: COMPARAR PASADO Y PRESENTE' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b14` | B1: EXPERIENCIAS DE VIDA | `b14.png` | Flat vector illustration representing 'B1: EXPERIENCIAS DE VIDA' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b15` | B1: PROBLEMAS Y SOLUCIONES | `b15.png` | Flat vector illustration representing 'B1: PROBLEMAS Y SOLUCIONES' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b16` | B1: HISTORIAS PERSONALES | `b16.png` | Flat vector illustration representing 'B1: HISTORIAS PERSONALES' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b17` | B1: EL FUTURO | `b17.png` | Flat vector illustration representing 'B1: EL FUTURO' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b18` | B1: HOBBIES Y TIEMPO LIBRE | `b18.png` | Flat vector illustration representing 'B1: HOBBIES Y TIEMPO LIBRE' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b19` | B1: SENTIMIENTOS Y OPINIONES | `b19.png` | Flat vector illustration representing 'B1: SENTIMIENTOS Y OPINIONES' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `tema-b110` | B1: GUSTOS Y PREFERENCIAS EN LA COMIDA | `b110.png` | Flat vector illustration of a cozy little house and a plate of fresh healthy food in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b1-comp-texto-1` | Comprensión: EL PRIMER DÍA EN LA COCINA | `texto_1.png` | Flat vector illustration representing 'Comprensión: EL PRIMER DÍA EN LA COCINA' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b1-comp-texto-2` | Comprensión: UN SÁBADO DIFERENTE | `texto_2.png` | Flat vector illustration representing 'Comprensión: UN SÁBADO DIFERENTE' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b1-comp-texto-3` | Comprensión: LOS GUSTOS DE ANA | `texto_3.png` | Flat vector illustration representing 'Comprensión: LOS GUSTOS DE ANA' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b1-comp-texto-4` | Comprensión: UNA TARDE DE CINE | `texto_4.png` | Flat vector illustration representing 'Comprensión: UNA TARDE DE CINE' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b1-comp-texto-5` | Comprensión: APRENDER A ELEGIR | `texto_5.png` | Flat vector illustration representing 'Comprensión: APRENDER A ELEGIR' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b1-comp-texto-6` | Comprensión: UN CUMPLEAÑOS ESPECIAL | `texto_6.png` | Flat vector illustration representing 'Comprensión: UN CUMPLEAÑOS ESPECIAL' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b1-comp-texto-7` | Comprensión: PROBAR ALGO NUEVO | `texto_7.png` | Flat vector illustration representing 'Comprensión: PROBAR ALGO NUEVO' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b1-comp-texto-8` | Comprensión: UNA MAÑANA TRANQUILA | `texto_8.png` | Flat vector illustration representing 'Comprensión: UNA MAÑANA TRANQUILA' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b1-comp-texto-9` | Comprensión: UNA ELECCIÓN SENCILLA | `texto_9.png` | Flat vector illustration representing 'Comprensión: UNA ELECCIÓN SENCILLA' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b1-comp-texto-10` | Comprensión: UNA DECISIÓN PARA EL FUTURO | `texto_10.png` | Flat vector illustration representing 'Comprensión: UNA DECISIÓN PARA EL FUTURO' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |

### Nivel B2

| Estado | ID de Lección | Título | Archivo Destino | Prompt Sugerido |
| :---: | :--- | :--- | :--- | :--- |
| [ ] | `b2-gram-subjuntivo` | Introducción al Subjuntivo | `subjuntivo.png` | Flat vector illustration representing 'Introducción al Subjuntivo' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b2-gram-hipotesis` | Expresión de Hipótesis y Probabilidad | `hipotesis.png` | Flat vector illustration representing 'Expresión de Hipótesis y Probabilidad' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b2-comp-debates` | Debate: Texto Argumentativo | `debates.png` | Flat vector illustration representing 'Debate: Texto Argumentativo' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b2-vocab-formal-informal` | Estilo Formal e Informal | `formal_informal.png` | Flat vector illustration representing 'Estilo Formal e Informal' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `b2-gram-subjuntivo-avanzado` | Subjuntivo: Oraciones Temporales y Concesivas | `subjuntivo_avanzado.png` | Flat vector illustration representing 'Subjuntivo: Oraciones Temporales y Concesivas' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |

### Nivel C1

| Estado | ID de Lección | Título | Archivo Destino | Prompt Sugerido |
| :---: | :--- | :--- | :--- | :--- |
| [ ] | `c1-vocab-modismos` | Modismos y Frases Hechas | `modismos.png` | Flat vector illustration representing 'Modismos y Frases Hechas' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `c1-comp-textos-complejos` | Comprensión: Editorial de Prensa | `textos_complejos.png` | Flat vector illustration representing 'Comprensión: Editorial de Prensa' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `c1-gram-perifrasis` | Gramática: Perífrasis Verbales Avanzadas | `perifrasis.png` | Flat vector illustration representing 'Gramática: Perífrasis Verbales Avanzadas' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `c1-gram-estilo-indirecto` | Gramática: Estilo Indirecto en el Pasado | `estilo_indirecto.png` | Flat vector illustration representing 'Gramática: Estilo Indirecto en el Pasado' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
| [ ] | `c1-vocab-marcadores` | Vocabulario: Marcadores Discursivos | `marcadores.png` | Flat vector illustration representing 'Vocabulario: Marcadores Discursivos' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |

### Nivel C2

| Estado | ID de Lección | Título | Archivo Destino | Prompt Sugerido |
| :---: | :--- | :--- | :--- | :--- |
| [ ] | `c2-comp-literatura` | Análisis Literario Breve | `literatura.png` | Flat vector illustration representing 'Análisis Literario Breve' in a cartoon 2D style, educational for language learning, minimal background, bright pastel colors, isolated design. |
