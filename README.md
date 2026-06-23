# 🌍 Asha Kiran — Herramienta de Aprendizaje de Español

Aplicación interactiva y responsive orientada al aprendizaje del idioma español para usuarios de la **Fundación Asha Kiran**, desarrollada bajo un enfoque prioritariamente móvil (**mobile-first**).

---

## 🛠 Tecnologías Utilizadas

- **Core**: React 19 + TypeScript.
- **Construcción (Bundler)**: Vite.
- **Estilos (CSS)**: Tailwind CSS v4 (configurado mediante el plugin nativo `@tailwindcss/vite`).
- **Animaciones**: Framer Motion (`motion`).
- **Reproducción de Voz**: Web Speech API (síntesis de voz nativa del navegador para reproducir la lectura en español con configuraciones de velocidad).
- **Enrutamiento**: React Router v7.

---

## 📂 Estructura del Repositorio

El proyecto mantiene una estructura limpia tras la reorganización del código:

```text
├── public/                 # Recursos públicos y estáticos servidos directamente
│   ├── audio/              # Audios MPEG en español para comprensión auditiva
│   ├── docs/               # Documentación gráfica y recursos visuales
│   └── images/             # Imágenes estáticas y de vocabulario
├── raw_material/           # Documentación origen y textos didácticos en markdown y PDF
├── scripts/                # Scripts auxiliares (Python, JS) usados para la migración de datos
├── src/                    # Código fuente del proyecto
│   ├── components/         # Componentes UI reutilizables (Quiz, MemoryGame, Flashcards...)
│   ├── contexts/           # Contextos globales (ej. LanguageContext para localización y voz)
│   ├── data/               # Bases de datos en TypeScript/JSON (Lecciones, Glosario, Recursos)
│   ├── pages/              # Páginas principales del sitio (AulaVirtual, Glosario, Recursos...)
│   ├── utils/              # Funciones auxiliares y formateadores
│   ├── App.tsx             # Componente raíz y definición de rutas
│   ├── index.css           # Estilos base y variables CSS globales
│   └── main.tsx            # Punto de entrada de la aplicación
├── tsconfig.json           # Configuración del compilador de TypeScript
└── vite.config.ts          # Configuración del empaquetador Vite y Tailwind CSS v4
```

---

## ⚙️ Configuración y Desarrollo Local

### Requisitos Previos
- Node.js (v18 o superior recomendado)
- npm (v9 o superior)

### Instalación de dependencias:
```bash
npm install
```

### Ejecutar el servidor de desarrollo:
```bash
npm run dev
```
La aplicación estará disponible localmente en `http://localhost:3000`.

### Validar tipos de TypeScript:
```bash
npm run lint
```

### Construir para producción:
```bash
npm run build
```
Los archivos de salida se generarán en la carpeta `dist/`.

---

## 📖 Guía de Desarrollo para Nuevos Programadores

Esta guía explica detalladamente cómo realizar las tareas más comunes de mantenimiento de datos en la plataforma.

### 1. Cómo Añadir o Modificar una Lección

Toda la base de datos de lecciones está centralizada en [content.ts](file:///c:/PracticaUcademy/PracticasDAM_AshaKiran/web-herramienta-español/src/data/content.ts). Las lecciones están tipadas bajo la interfaz `Lesson`.

#### Estructura de Interfaces (`src/data/content.ts`):
```typescript
export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type Category = 'Alfabetización' | 'Vocabulario' | 'Gramática' | 'Comprensión' | 'Multimedia';

export interface Exercise {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Índice base 0 de la opción correcta
}

export interface VocabularyItem {
  word: string;
  translations?: Record<string, string>; // Traducciones { en: string, ar: string, uk: string, fr: string }
  emoji: string;
  illustrationUrl?: string; // Ruta de la ilustración (opcional)
}

export interface Lesson {
  id: string;
  topic: string;
  title: string;
  level: Level;
  category: Category;
  description: string;
  content: string; // Explicación o lectura (soporta formato Markdown)
  imageUrl?: string;
  illustrationUrl?: string;
  emoji?: string;
  color?: string; // Color de fondo de la tarjeta en formato HEX
  vocabulary?: VocabularyItem[]; // Listado de vocabulario
  exercises?: Exercise[]; // Listado de exactamente 20 ejercicios
}
```

#### Instrucciones para añadir una lección:
1. Abre [content.ts](file:///c:/PracticaUcademy/PracticasDAM_AshaKiran/web-herramienta-español/src/data/content.ts).
2. Añade un objeto que cumpla con la interfaz `Lesson` dentro de la constante `lessons`.
3. **Regla de oro de contenido**: Cada lección en los niveles B1, B2, C1 y C2 debe tener **exactamente 20 ejercicios** y **al menos 30 palabras de vocabulario**.
4. **Preguntas**: Formula las preguntas y opciones completamente en español. **No utilices traducción inversa** (ej. ¿Cuál es la traducción de X?) para mantener la inmersión del alumno en el idioma.

---

### 2. Cómo Añadir un Audio a una Lección

Para las lecciones de comprensión auditiva, la lectura puede complementarse con un archivo de audio pregrabado.

1. Guarda el archivo de audio en formato `.mpeg` o `.mp3` en el directorio `public/audio/`.
2. Utiliza una nomenclatura descriptiva y unificada (ej. `audio-practica-XX.mpeg`).
3. En [lessonMetadataTranslations.ts](file:///c:/PracticaUcademy/PracticasDAM_AshaKiran/web-herramienta-español/src/data/lessonMetadataTranslations.ts), asocia los metadatos de audio a la lección. Busca la lección por su `id` y define las rutas correspondientes del audio. El reproductor del Aula Virtual buscará de forma automatizada estas configuraciones para renderizar los controles de reproducción de audio real.

---

### 3. Cómo Añadir Términos al Glosario

Los términos del Glosario se administran en [glossaryData.ts](file:///c:/PracticaUcademy/PracticasDAM_AshaKiran/web-herramienta-español/src/data/glossaryData.ts). El archivo exporta dos constantes principales: `glossaryVocabulary` (para palabras temáticas) y `glossaryVerbs` (para verbos conjugados).

#### A) Añadir una palabra temática:
Las palabras se agrupan por temas (`GlossaryTheme`) dentro de cada nivel:
```typescript
export interface GlossaryWord {
  word: string;
  translations: Record<string, string>; // { en: string, ar: string, uk: string, fr: string }
  emoji: string;
}
```
1. Busca el nivel y el tema en la constante `glossaryVocabulary` de [glossaryData.ts](file:///c:/PracticaUcademy/PracticasDAM_AshaKiran/web-herramienta-español/src/data/glossaryData.ts).
2. Añade el objeto a la lista `words`.

#### B) Añadir un verbo conjugado:
Los verbos se configuran en `glossaryVerbs` y requieren su traducción, emoji y una tabla de conjugación en presente de indicativo:
```typescript
export interface VerbEntry {
  infinitive: string;
  translations: Record<string, string>;
  emoji: string;
  conjugation: {
    yo: string;
    tú: string;
    él: string;
    nosotros: string;
    vosotros: string;
    ellos: string;
  };
  example: string;
  exampleTranslations: Record<string, string>;
}
```
1. Abre [glossaryData.ts](file:///c:/PracticaUcademy/PracticasDAM_AshaKiran/web-herramienta-español/src/data/glossaryData.ts).
2. Localiza la constante `glossaryVerbs` y añade el nuevo objeto `VerbEntry` en el grupo correspondiente del nivel.

---

## 🎙 Web Speech API (Text-to-Speech)

La lógica de síntesis de voz está manejada centralmente a través de [LanguageContext.tsx](file:///c:/PracticaUcademy/PracticasDAM_AshaKiran/web-herramienta-español/src/contexts/LanguageContext.tsx). 
- Permite seleccionar la velocidad de reproducción.
- Filtra las voces disponibles en el dispositivo del usuario buscando voces locales en español de España (`es-ES`) o variantes de habla hispana como fallback para garantizar una entonación natural.

---

# 👥 Colaboradores

- Jesús Hernández  
- Santiago Arena

---

# 👨‍💻 Contacto

- GitHub:  
  https://github.com/JesusHernandezP

- LinkedIn:  
  https://www.linkedin.com/in/jesushernandezp/

- Portfolio:  
  https://jesus-hernandez.es


