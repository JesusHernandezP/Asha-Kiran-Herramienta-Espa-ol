export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type Category = 'Alfabetización' | 'Vocabulario' | 'Gramática' | 'Comprensión' | 'Multimedia';

export interface Exercise {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
}

export interface VocabularyItem {
  word: string;
  translations?: Record<string, string>;
  translation?: string; // fallback
  emoji: string;
  imageUrl?: string;
  color?: string;
}

export interface Lesson {
  id: string;
  topic: string; // Thematic identifier (e.g., 'Saludos')
  title: string;
  level: Level;
  category: Category;
  description: string;
  content: string; // Markdown content, heavily visual
  imageUrl?: string;
  emoji?: string;
  color?: string;
  vocabulary?: VocabularyItem[];
  exercises?: Exercise[];
}

export const lessons: Lesson[] = [
  {
    id: "a1-alfa-vocales",
    topic: "Las Vocales",
    title: "Alfabetización: Las Vocales",
    level: "A1",
    category: "Alfabetización",
    description: "Aprende las 5 vocales del español. Sonidos, palabras básicas como Avión, Elefante, Isla, Oso y Uva.",
    emoji: "🅰️",
    color: "#E2F3E7",
    vocabulary: [
      { word: "Avión", translations: { en: "Airplane", ar: "طائرة", uk: "Літак", fr: "Avion" }, emoji: "✈️", color: "#E2F3E7" },
      { word: "Elefante", translations: { en: "Elephant", ar: "فيل", uk: "Слон", fr: "Éléphant" }, emoji: "🐘", color: "#E2F3E7" },
      { word: "Isla", translations: { en: "Island", ar: "جزيرة", uk: "Острів", fr: "Île" }, emoji: "🏝️", color: "#E2F3E7" },
      { word: "Oso", translations: { en: "Bear", ar: "دب", uk: "Ведмідь", fr: "Ours" }, emoji: "🐻", color: "#E2F3E7" },
      { word: "Uvas", translations: { en: "Grapes", ar: "عنب", uk: "Виноград", fr: "Raisins" }, emoji: "🍇", color: "#E2F3E7" }
    ],
    content: `
## Vamos a aprender las vocales (a, e, i, o, u)

### Ejercicio de pronunciación:
Usa el botón de abajo si estuviera disponible el audio (simulación).
<button class="audio-btn">🔊 Escuchar vocales</button>
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Con qué letra empieza la palabra 'Avión'?",
        options: ["E", "O", "A"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "¿Qué imagen empieza con 'O'?",
        options: ["Elefante", "Oso", "Isla"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a1-vocab-cuerpo",
    topic: "Cuerpo Humano",
    title: "Partes del Cuerpo Humano",
    level: "A1",
    category: "Vocabulario",
    description: "Imágenes y vocabulario básico sobre las partes principales de nuestro cuerpo.",
    emoji: "👤",
    color: "#EBF8FF",
    vocabulary: [
      { word: "La cabeza", translations: { en: "Head", ar: "الرأس", uk: "Голова", fr: "Tête" }, emoji: "👧", color: "#EBF8FF" },
      { word: "La mano", translations: { en: "Hand", ar: "اليد", uk: "Рука", fr: "Main" }, emoji: "✋", color: "#EBF8FF" },
      { word: "El pie", translations: { en: "Foot", ar: "القدم", uk: "Нога", fr: "Pied" }, emoji: "🦶", color: "#EBF8FF" },
      { word: "Los ojos", translations: { en: "Eyes", ar: "العينان", uk: "Очі", fr: "Yeux" }, emoji: "👁️", color: "#EBF8FF" },
      { word: "Las piernas", translations: { en: "Legs", ar: "الساقين", uk: "Ноги", fr: "Jambes" }, emoji: "🦵", color: "#EBF8FF" },
      { word: "El brazo", translations: { en: "Arm", ar: "الذراع", uk: "Рука", fr: "Bras" }, emoji: "💪", color: "#EBF8FF" }
    ],
    content: `
## El Cuerpo Humano

Aprender las partes de nuestro cuerpo nos ayuda a comunicarnos mejor.
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Cómo se dice 'Hand' en Español?",
        options: ["La pierna", "La mano", "El pie"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Usas estos para ver:",
        options: ["Los ojos", "El brazo", "La cabeza"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a1-vocab-colores",
    topic: "Los Colores",
    title: "Vocabulario: Los Colores",
    level: "A1",
    category: "Vocabulario",
    description: "Vocabulario con tonos de colores. Rojo, azul, verde, amarillo, naranja.",
    emoji: "🎨",
    color: "#FFF5F5",
    vocabulary: [
      { word: "Rojo", translations: { en: "Red", ar: "أحمر", uk: "Червоний", fr: "Rouge" }, emoji: "🍎", color: "#E53E3E" },
      { word: "Azul", translations: { en: "Blue", ar: "أزرق", uk: "Синій", fr: "Bleu" }, emoji: "💧", color: "#3182CE" },
      { word: "Verde", translations: { en: "Green", ar: "أخضر", uk: "Зелений", fr: "Vert" }, emoji: "🐸", color: "#38A169" },
      { word: "Amarillo", translations: { en: "Yellow", ar: "أصفر", uk: "Жовтий", fr: "Jaune" }, emoji: "☀️", color: "#ECC94B" },
      { word: "Naranja", translations: { en: "Orange", ar: "برتقالي", uk: "Помаранчевий", fr: "Orange" }, emoji: "🍊", color: "#DD6B20" },
      { word: "Negro", translations: { en: "Black", ar: "أسود", uk: "Чорний", fr: "Noir" }, emoji: "🎩", color: "#1A202C" }
    ],
    content: `
## ¿De qué color es?
    `,
    exercises: [
      {
        id: "ex1",
        question: "El cielo es...",
        options: ["Rojo", "Azul", "Amarillo"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Una manzana normalmente es...",
        options: ["Verde o Roja", "Azul o Negra", "Naranja"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a1-gram-verbos",
    topic: "Verbos",
    title: "Verbos Básicos (Ser, Estar, Tener)",
    level: "A1",
    category: "Gramática",
    description: "Aprende los tres verbos más importantes en español para poder presentarte.",
    emoji: "🏃🏻",
    color: "#E2E8F0",
    vocabulary: [
      { word: "Yo soy", translations: { en: "I am (teacher)", ar: "أنا معلم", uk: "Я вчитель", fr: "Je suis (professeur)" }, emoji: "🧑‍🏫", color: "#E2E8F0" },
      { word: "Yo estoy", translations: { en: "I am (at home)", ar: "أنا في المنزل", uk: "Я вдома", fr: "Je suis (à la maison)" }, emoji: "🏠", color: "#E2E8F0" },
      { word: "Yo tengo", translations: { en: "I have (an apple)", ar: "لدي تفاحة", uk: "Я маю", fr: "J'ai (une pomme)" }, emoji: "🍎", color: "#E2E8F0" }
    ],
    content: `
## Verbos muy importantes

Aprender la conjugación (la forma) es esencial para comunicarte.

### Verbo SER (Identidad / To be)
*   **Yo soy** Ana. *(I am Ana)*
*   **Él es** de África. *(He is from Africa)*

### Verbo ESTAR (Lugar o Emoción)
*   **Yo estoy** feliz. *(I am happy)*
*   **Tú estás** en España. *(You are in Spain)*

### Verbo TENER (To have)
*   **Yo tengo** 30 años. *(I am 30 years old)*
*   **Tú tienes** hambre. *(You are hungry)*
    `,
    exercises: [
      {
        id: "ex1",
        question: "Completa: 'Yo _______ feliz hoy.'",
        options: ["soy", "tengo", "estoy"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "Completa: 'Ella _______ de Senegal.'",
        options: ["es", "tiene", "está"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Completa: 'Nosotros _______ 20 años.'",
        options: ["somos", "estamos", "tenemos"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "a1-vocab-ropa",
    topic: "Ropa",
    title: "Vocabulario: La Ropa",
    level: "A1",
    category: "Vocabulario",
    description: "¿Qué te pones cada día? Aprende palabras como camisa, pantalones y zapatos.",
    emoji: "👕",
    color: "#E2E8F0",
    vocabulary: [
      { word: "La camiseta", translations: { en: "T-Shirt", ar: "قميص", uk: "Футболка", fr: "T-shirt" }, emoji: "👕", color: "#EDF2F7" },
      { word: "El pantalón", translations: { en: "Pants", ar: "سروال", uk: "Штани", fr: "Pantalon" }, emoji: "👖", color: "#EDF2F7" },
      { word: "Los zapatos", translations: { en: "Shoes", ar: "حذاء", uk: "Взуття", fr: "Chaussures" }, emoji: "👟", color: "#EDF2F7" },
      { word: "La chaqueta", translations: { en: "Jacket", ar: "سترة", uk: "Куртка", fr: "Veste" }, emoji: "🧥", color: "#EDF2F7" }
    ],
    content: `
## Las prendas de vestir
    `,
    exercises: [
      {
        id: "ex1",
        question: "Si hace frío (cold), te pones:",
        options: ["Una camiseta corta", "Una chaqueta", "Un pantalón corto"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a2-vocab-animales",
    topic: "Animales",
    title: "Animales y Naturaleza",
    level: "A2",
    category: "Vocabulario",
    description: "Vocabulario sobre árboles, montañas, y animales comunes (perro, gato, pájaro).",
    emoji: "🐶",
    color: "#FEFCBF",
    vocabulary: [
      { word: "El perro", translations: { en: "Dog", ar: "كلب", uk: "Собака", fr: "Chien" }, emoji: "🐶", color: "#FEFCBF" },
      { word: "El gato", translations: { en: "Cat", ar: "قطة", uk: "Кіт", fr: "Chat" }, emoji: "🐱", color: "#FEFCBF" },
      { word: "El pájaro", translations: { en: "Bird", ar: "طائر", uk: "Птах", fr: "Oiseau" }, emoji: "🐦", color: "#FEFCBF" },
      { word: "El árbol", translations: { en: "Tree", ar: "شجرة", uk: "Дерево", fr: "Arbre" }, emoji: "🌳", color: "#F0FFF4" },
      { word: "La montaña", translations: { en: "Mountain", ar: "جبل", uk: "Гора", fr: "Montagne" }, emoji: "⛰️", color: "#F0FFF4" },
      { word: "El mar", translations: { en: "Sea", ar: "بحر", uk: "Море", fr: "Mer" }, emoji: "🌊", color: "#F0FFF4" }
    ],
    content: `
## Mascotas y animales salvajes

## La Naturaleza
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Cuál es una mascota común en casa?",
        options: ["La montaña", "El perro", "El árbol"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a2-comp-lectura",
    topic: "Comprensión",
    title: "Lectura Fácil: Mi Primer Día",
    level: "A2",
    category: "Comprensión",
    description: "Una lectura corta para entender frases simples y practicar preguntas.",
    emoji: "📖",
    color: "#EBF8FF",
    content: `
## LECTURA: Hola, me llamo Ali

> *"Hola, me llamo Ali. Tengo veinticinco (25) años. Yo soy de Marruecos, pero ahora estoy en Málaga, España. Yo tengo una hermana que se llama Fátima."*

> *"Me gusta mucho el mar y quiero trabajar de cocinero. Yo hablo un poco de español, pero estudio todos los días en la escuela."*

### Lee la lectura con atención y responde al ejercicio.
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿De dónde es Ali?",
        options: ["Es de Málaga", "Es de Marruecos", "Es de Francia"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿De qué quiere trabajar Ali?",
        options: ["De profesor", "De cocinero", "De conductor"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "¿Dónde está Ali ahora?",
        options: ["En Marruecos", "En Málaga", "En Madrid"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a2-vocab-mapas",
    topic: "Paises",
    title: "Vocabulario: El Mapa del Mundo",
    level: "A2",
    category: "Vocabulario",
    description: "Continentes, países comunes, y vocabulario geográfico.",
    emoji: "🌍",
    color: "#E2E8F0",
    vocabulary: [
      { word: "Marruecos", translations: { en: "Morocco", ar: "المغرب", uk: "Марокко", fr: "Maroc" }, emoji: "🇲🇦", imageUrl: "https://flagcdn.com/w160/ma.png", color: "#FEFCBF" },
      { word: "España", translations: { en: "Spain", ar: "إسبانيا", uk: "Іспанія", fr: "Espagne" }, emoji: "🇪🇸", imageUrl: "https://flagcdn.com/w160/es.png", color: "#FFF5F5" },
      { word: "Senegal", translations: { en: "Senegal", ar: "السنغال", uk: "Сенегал", fr: "Sénégal" }, emoji: "🇸🇳", imageUrl: "https://flagcdn.com/w160/sn.png", color: "#F0FFF4" }
    ],
    content: `
## Los Continentes

Existen diferentes continentes en el mundo:
- **África**
- **Europa**
- **América** (Norte y Sur)
- **Asia**
- **Oceanía**

## Países 

Para decir de dónde eres puedes decir: *"Yo soy de..."* y tu país.
    `,
    exercises: [
      {
        id: "ex1",
        question: "España está en:",
        options: ["Asia", "África", "Europa"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "¿Cómo se llama el continente con muchos desiertos al sur de Europa?",
        options: ["África", "América", "Oceanía"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a1-gram-articulos-genero",
    topic: "Artículos y Género",
    title: "Artículos y Género",
    level: "A1",
    category: "Gramática",
    description: "Aprende a usar el, la, los, las y cómo formar el plural y femenino/masculino.",
    emoji: "📚",
    color: "#EBF8FF",
    content: `
## Artículos Definidos
*   **Singular:** el (masculino), la (femenino)
*   **Plural:** los (masculino), las (femenino)
*   El plural se forma añadiendo **-s** al final de las palabras (ejemplo: la casa -> las casas).

## Género (Masculino y Femenino)
*   Las palabras en **femenino** suelen ir con **-a**: la niña, la tierra, la manzana.
*   Las palabras en **masculino** suelen ir con **-o**: el niño, el cielo, el oro.

**¡Excepciones importantes!**
Las palabras que terminan en **-ción** son femeninas: la información, la concentración.
    `,
    vocabulary: [
      { word: "El niño", translations: { en: "The boy", fr: "Le garçon", ar: "الولد" }, emoji: "👦", color: "#EBF8FF" },
      { word: "La niña", translations: { en: "The girl", fr: "La fille", ar: "البنت" }, emoji: "👧", color: "#FFF5F5" },
      { word: "La información", translations: { en: "The information", fr: "L'information", ar: "المعلومات" }, emoji: "ℹ️", color: "#F0FFF4" }
    ],
    exercises: [
      {
        id: "ex1",
        question: "¿Cuál es el plural de 'la casa'?",
        options: ["las casas", "los casas", "la casas"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "¿Qué artículo se usa con 'niño'?",
        options: ["La", "El", "Los"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a1-gram-pronombres",
    topic: "Pronombres",
    title: "Pronombres y Posesivos",
    level: "A1",
    category: "Gramática",
    description: "Aprende los pronombres personales (yo, tú, él) y los posesivos (mi, tu, su).",
    emoji: "👉",
    color: "#FEFCBF",
    content: `
## Pronombres Personales
*   **Yo**
*   **Tú**
*   **Él / Ella**
*   **Nosotros / Nosotras**
*   **Vosotros / Vosotras**
*   **Ellos / Ellas**

## Posesivos
Sirven para indicar de quién es algo:
*   **Mi** (mi casa)
*   **Tu** (tu mochila)
*   **Su** (su libro - de él/ella/ellos)
*   **Nuestro / Nuestra** (nuestra ciudad)
*   **Vuestro / Vuestra** (vuestra escuela)
    `,
    vocabulary: [
      { word: "Mi casa", translations: { en: "My house", ar: "منزلي" }, emoji: "🏠", color: "#FEFCBF" },
      { word: "Tu mochila", translations: { en: "Your backpack", ar: "حقيبتك" }, emoji: "🎒", color: "#FEFCBF" },
      { word: "Nosotros", translations: { en: "We", ar: "نحن" }, emoji: "👥", color: "#FEFCBF" }
    ],
    exercises: [
      {
        id: "ex1",
        question: "¿Cómo se dice 'I' en español?",
        options: ["Él", "Tú", "Yo"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "Completa: 'Esta es ___ casa' (My house).",
        options: ["mi", "tu", "su"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a1-vocab-presentacion",
    topic: "Presentación",
    title: "Presentación Básica",
    level: "A1",
    category: "Vocabulario",
    description: "Saludos y preguntas básicas para conocer a alguien.",
    emoji: "👋",
    color: "#F0FFF4",
    content: `
## Saludos y Respuestas
*   **Hola, ¿cómo estás?** -> *Estoy bien, gracias.*
*   **¿Cómo te llamas?** -> *Me llamo...*
*   **¿De dónde eres?** -> *Soy de...*
*   **¿Cuántos años tienes?** -> *Tengo [número] años.*
*   **¿Cuánto tiempo llevas aquí?** -> *Llevo [tiempo] aquí.*
    `,
    vocabulary: [
      { word: "Hola", translations: { en: "Hello", ar: "مرحباً" }, emoji: "👋", color: "#F0FFF4" },
      { word: "Bien", translations: { en: "Good / Well", ar: "جيد" }, emoji: "👍", color: "#F0FFF4" },
      { word: "Años", translations: { en: "Years", ar: "سنوات" }, emoji: "🎂", color: "#F0FFF4" }
    ],
    exercises: [
      {
        id: "ex1",
        question: "¿Qué respondes a '¿Cómo estás?'",
        options: ["Me llamo Ali", "Estoy bien", "Tengo 20 años"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Para preguntar la edad, dices:",
        options: ["¿Cuántos años tienes?", "¿De dónde eres?", "¿Cómo te llamas?"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a1-gram-afirmacion-negacion",
    topic: "Afirmación y Negación",
    title: "Sí, No y Gustos",
    level: "A1",
    category: "Gramática",
    description: "Aprende a decir sí, no, y a expresar lo que te gusta y no te gusta.",
    emoji: "👍",
    color: "#FFF5F5",
    content: `
## Afirmación y Negación
*   **Sí** (Afirmación)
*   **No** (Negación)

## Expresar gustos
*   **Me gusta** (Me gusta el chocolate)
*   **No me gusta** (No me gusta el frío)
    `,
    vocabulary: [
      { word: "Sí", translations: { en: "Yes", ar: "نعم" }, emoji: "✅", color: "#FFF5F5" },
      { word: "No", translations: { en: "No", ar: "لا" }, emoji: "❌", color: "#FFF5F5" },
      { word: "Me gusta", translations: { en: "I like it", ar: "يعجبني" }, emoji: "❤️", color: "#FFF5F5" }
    ],
    exercises: [
      {
        id: "ex1",
        question: "Si adoras el chocolate, dices:",
        options: ["No me gusta el chocolate", "Me gusta el chocolate", "Sí"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a1-vocab-numeros",
    topic: "Números",
    title: "Los Números",
    level: "A1",
    category: "Vocabulario",
    description: "Aprende los números básicos en español.",
    emoji: "🔢",
    color: "#E2E8F0",
    content: `
## Números Básicos
*   0 - Cero
*   1 - Uno
*   2 - Dos
*   3 - Tres
*   4 - Cuatro
*   5 - Cinco
*   6 - Seis
*   7 - Siete
*   8 - Ocho
*   9 - Nueve
*   10 - Diez
    `,
    vocabulary: [
      { word: "Uno", translations: { en: "One", ar: "واحد" }, emoji: "1️⃣", color: "#E2E8F0" },
      { word: "Dos", translations: { en: "Two", ar: "اثنان" }, emoji: "2️⃣", color: "#E2E8F0" },
      { word: "Tres", translations: { en: "Three", ar: "ثلاثة" }, emoji: "3️⃣", color: "#E2E8F0" }
    ],
    exercises: [
      {
        id: "ex1",
        question: "¿Qué número va después del cinco?",
        options: ["Siete", "Cuatro", "Seis"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "¿Cómo se escribe el número 10?",
        options: ["Nueve", "Diez", "Cero"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a1-vocab-nacionalidades",
    topic: "Nacionalidades",
    title: "Nacionalidades",
    level: "A1",
    category: "Vocabulario",
    description: "Países y sus nacionalidades.",
    emoji: "🌍",
    color: "#EBF8FF",
    content: `
## Nacionalidades comunes
*   **España:** español / española
*   **Inglaterra:** inglés / inglesa
*   **Marruecos:** marroquí
*   **Francia:** francés / francesa
    `,
    vocabulary: [
      { word: "Español", translations: { en: "Spanish", ar: "إسباني" }, emoji: "🇪🇸", imageUrl: "https://flagcdn.com/w160/es.png", color: "#EBF8FF" },
      { word: "Inglés", translations: { en: "English", ar: "إنجليزي" }, emoji: "🇬🇧", imageUrl: "https://flagcdn.com/w160/gb.png", color: "#EBF8FF" },
      { word: "Marroquí", translations: { en: "Moroccan", ar: "مغربي" }, emoji: "🇲🇦", imageUrl: "https://flagcdn.com/w160/ma.png", color: "#EBF8FF" }
    ],
    exercises: [
      {
        id: "ex1",
        question: "Una persona de Inglaterra es...",
        options: ["Español", "Inglés", "Francés"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a2-vocab-supervivencia-direcciones",
    topic: "Supervivencia",
    title: "Vocabulario de Supervivencia: Direcciones",
    level: "A2",
    category: "Vocabulario",
    description: "Preguntas útiles para orientarse y encontrar lugares.",
    emoji: "🗺️",
    color: "#FEFCBF",
    content: `
## Preguntar por lugares
*   **¿Dónde está el lavabo?** (¿Dónde está el baño?)
*   **¿Dónde está el autobús?**
*   **¿Dónde está el metro?**
*   **¿Dónde está la tienda?**
    `,
    vocabulary: [
      { word: "El lavabo", translations: { en: "Restroom/Toilet", ar: "الحمام" }, emoji: "🚽", color: "#FEFCBF" },
      { word: "El autobús", translations: { en: "Bus", ar: "الحافلة" }, emoji: "🚌", color: "#FEFCBF" },
      { word: "La tienda", translations: { en: "Shop", ar: "المتجر" }, emoji: "🏪", color: "#FEFCBF" }
    ],
    exercises: [
      {
        id: "ex1",
        question: "¿Qué preguntas si necesitas ir al baño?",
        options: ["¿Dónde está la tienda?", "¿Dónde está el lavabo?", "¿Dónde está el metro?"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a2-vocab-supervivencia-necesidades",
    topic: "Supervivencia",
    title: "Vocabulario de Supervivencia: Necesidades",
    level: "A2",
    category: "Vocabulario",
    description: "Expresar lo que necesitas, quieres o tienes.",
    emoji: "🛍️",
    color: "#F0FFF4",
    content: `
## Expresar necesidades
*   **Quiero comprar...** (ejemplo: quiero comprar agua)
*   **Quiero ir a...** (ejemplo: quiero ir al hospital)
*   **Necesito...** (ejemplo: necesito ayuda)
*   **Tengo...** / **No tengo...** (ejemplo: tengo dinero / no tengo tiempo)
    `,
    vocabulary: [
      { word: "Comprar", translations: { en: "To buy", ar: "يشتري" }, emoji: "🛒", color: "#F0FFF4" },
      { word: "Ayuda", translations: { en: "Help", ar: "مساعدة" }, emoji: "🆘", color: "#F0FFF4" },
      { word: "Dinero", translations: { en: "Money", ar: "نقود" }, emoji: "💶", color: "#F0FFF4" }
    ],
    exercises: [
      {
        id: "ex1",
        question: "Si no tienes agua, dices:",
        options: ["Quiero ir al hospital", "Quiero comprar agua", "No tengo tiempo"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Si estás perdido (lost), necesitas:",
        options: ["Comprar comida", "Ayuda", "Dinero"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a2-vocab-supervivencia-sensaciones",
    topic: "Sensaciones",
    title: "Vocabulario de Supervivencia: Sensaciones",
    level: "A2",
    category: "Vocabulario",
    description: "Expresar cómo te sientes o qué te pasa.",
    emoji: "🤕",
    color: "#FFF5F5",
    content: `
## Sensaciones y estados
*   **Me duele...** (ejemplo: me duele la cabeza)
*   **Me molesta...** (ejemplo: me molesta el ruido)
*   **Me gusta...** (ejemplo: me gusta esta ciudad)
*   **Me aburre...** (ejemplo: me aburre esperar)
*   **Me preocupa...** (ejemplo: me preocupa el trabajo)
    `,
    vocabulary: [
      { word: "Me duele", translations: { en: "It hurts", ar: "يؤلمني" }, emoji: "🤕", color: "#FFF5F5" },
      { word: "Me aburre", translations: { en: "It bores me", ar: "يملني" }, emoji: "🥱", color: "#FFF5F5" },
      { word: "El trabajo", translations: { en: "Work", ar: "العمل" }, emoji: "💼", color: "#FFF5F5" }
    ],
    exercises: [
      {
        id: "ex1",
        question: "Si tienes un dolor de cabeza, dices:",
        options: ["Me duele la cabeza", "Me aburre la cabeza", "Me molesta la cabeza"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a1-vocab-fechas-horas",
    topic: "Fechas y Horas",
    title: "Fechas y Horas",
    level: "A1",
    category: "Vocabulario",
    description: "Días de la semana, meses y cómo decir la hora.",
    emoji: "⏰",
    color: "#EBF8FF",
    content: `
## Días de la semana
Lunes, martes, miércoles, jueves, viernes, sábado, domingo.

## Meses del año
Enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre.

## La hora
*   **¿Qué hora es?**
*   **Es la una.** (1:00)
*   **Son las dos.** (2:00)
    `,
    vocabulary: [
      { word: "Lunes", translations: { en: "Monday", ar: "الاثنين" }, emoji: "📅", color: "#EBF8FF" },
      { word: "Reloj", translations: { en: "Clock", ar: "ساعة" }, emoji: "⏰", color: "#EBF8FF" },
      { word: "Día", translations: { en: "Day", ar: "يوم" }, emoji: "🌞", color: "#EBF8FF" }
    ],
    exercises: [
      { id: "ex1", question: "¿Qué día va después del martes?", options: ["Lunes", "Jueves", "Miércoles"], correctAnswer: 2 }
    ]
  },
  {
    id: "a1-vocab-profesiones",
    topic: "Profesiones",
    title: "Las Profesiones",
    level: "A1",
    category: "Vocabulario",
    description: "Vocabulario básico sobre trabajos y profesiones.",
    emoji: "👷",
    color: "#FFF5F5",
    content: `
## Profesiones comunes
*   El médico / La médica
*   El profesor / La profesora
*   El cocinero / La cocinera
*   El conductor / La conductora
    `,
    vocabulary: [
      { word: "Médico", translations: { en: "Doctor", ar: "طبيب" }, emoji: "👨‍⚕️", color: "#FFF5F5" },
      { word: "Profesor", translations: { en: "Teacher", ar: "معلم" }, emoji: "👨‍🏫", color: "#FFF5F5" },
      { word: "Cocinero", translations: { en: "Cook", ar: "طباخ" }, emoji: "👨‍🍳", color: "#FFF5F5" }
    ],
    exercises: [
      { id: "ex1", question: "¿Quién trabaja en un hospital?", options: ["El profesor", "El médico", "El conductor"], correctAnswer: 1 }
    ]
  },
  {
    id: "a1-vocab-familia",
    topic: "Familia",
    title: "Familia y Descripción",
    level: "A1",
    category: "Vocabulario",
    description: "Miembros de la familia y adjetivos para describir el físico.",
    emoji: "👨‍👩‍👦",
    color: "#F0FFF4",
    content: `
## La Familia
*   Madre / Padre
*   Hermano / Hermana
*   Hijo / Hija

## Descripción Física
*   Alto / Bajo
*   Rubio / Moreno
*   Gordo / Delgado
    `,
    vocabulary: [
      { word: "Madre", translations: { en: "Mother", ar: "أم" }, emoji: "👩", color: "#F0FFF4" },
      { word: "Padre", translations: { en: "Father", ar: "أب" }, emoji: "👨", color: "#F0FFF4" },
      { word: "Alto", translations: { en: "Tall", ar: "طويل" }, emoji: "📏", color: "#F0FFF4" }
    ],
    exercises: [
      { id: "ex1", question: "El hermano de tu madre es tu...", options: ["Tío", "Primo", "Abuelo"], correctAnswer: 0 }
    ]
  },
  {
    id: "a1-gram-preguntas",
    topic: "Preguntas",
    title: "Preguntas Simples",
    level: "A1",
    category: "Gramática",
    description: "Palabras para hacer preguntas: qué, quién, cuándo, dónde.",
    emoji: "❓",
    color: "#FEFCBF",
    content: `
## Palabras interrogativas
*   **¿Qué?** (What)
*   **¿Quién?** (Who)
*   **¿Cuándo?** (When)
*   **¿Dónde?** (Where)
*   **¿Por qué?** (Why)
*   **¿Cuánto?** (How much)
    `,
    vocabulary: [
      { word: "¿Qué?", translations: { en: "What?", ar: "ماذا؟" }, emoji: "❓", color: "#FEFCBF" },
      { word: "¿Dónde?", translations: { en: "Where?", ar: "أين؟" }, emoji: "📍", color: "#FEFCBF" },
      { word: "¿Cuándo?", translations: { en: "When?", ar: "متى؟" }, emoji: "⏱️", color: "#FEFCBF" }
    ],
    exercises: [
      { id: "ex1", question: "Para preguntar por un lugar usas:", options: ["¿Cuándo?", "¿Dónde?", "¿Quién?"], correctAnswer: 1 }
    ]
  },
  {
    id: "a1-vocab-cotidiano",
    topic: "Cotidiano",
    title: "Comida, Casa y Ciudad",
    level: "A1",
    category: "Vocabulario",
    description: "Palabras del día a día en casa, en la calle y al comer.",
    emoji: "🏠",
    color: "#E2E8F0",
    content: `
## La Casa
La cama, la mesa, el baño, la cocina.

## La Comida
El agua, el pan, la carne, la fruta.

## La Ciudad
La calle, el parque, la plaza, el mercado.
    `,
    vocabulary: [
      { word: "Pan", translations: { en: "Bread", ar: "خبز" }, emoji: "🥖", color: "#E2E8F0" },
      { word: "Agua", translations: { en: "Water", ar: "ماء" }, emoji: "💧", color: "#E2E8F0" },
      { word: "Casa", translations: { en: "House", ar: "منزل" }, emoji: "🏠", color: "#E2E8F0" }
    ],
    exercises: [
      { id: "ex1", question: "¿Qué puedes beber?", options: ["El pan", "El agua", "La calle"], correctAnswer: 1 }
    ]
  },
  {
    id: "a2-gram-pasado",
    topic: "Pasado",
    title: "El Pasado Básico",
    level: "A2",
    category: "Gramática",
    description: "Habla sobre cosas que ya pasaron (pretérito perfecto e indefinido).",
    emoji: "⏪",
    color: "#EBF8FF",
    content: `
## Pretérito Perfecto (Experiencias recientes)
*   **Hoy he comido** pollo.
*   **Esta semana hemos trabajado** mucho.

## Pretérito Indefinido (Acciones terminadas)
*   **Ayer fui** al supermercado.
*   **El año pasado viví** en Francia.
    `,
    vocabulary: [
      { word: "Ayer", translations: { en: "Yesterday", ar: "أمس" }, emoji: "📅", color: "#EBF8FF" },
      { word: "Hoy", translations: { en: "Today", ar: "اليوم" }, emoji: "☀️", color: "#EBF8FF" },
      { word: "Fui", translations: { en: "I went", ar: "ذهبت" }, emoji: "🚶", color: "#EBF8FF" }
    ],
    exercises: [
      { id: "ex1", question: "Completa: Ayer yo ___ al médico.", options: ["voy", "fui", "he ido"], correctAnswer: 1 }
    ]
  },
  {
    id: "a2-gram-futuro",
    topic: "Futuro",
    title: "Futuro Próximo",
    level: "A2",
    category: "Gramática",
    description: "Cómo decir 'Voy a...' para hablar de planes futuros.",
    emoji: "🔮",
    color: "#FFF5F5",
    content: `
## Estructura: Ir + a + Verbo Infinitivo
Para hablar del futuro usamos el verbo ir:
*   (Yo) **Voy a trabajar** mañana.
*   (Tú) **Vas a estudiar** español.
*   (Nosotros) **Vamos a viajar**.
    `,
    vocabulary: [
      { word: "Mañana", translations: { en: "Tomorrow", ar: "غداً" }, emoji: "🌅", color: "#FFF5F5" },
      { word: "Voy a", translations: { en: "I am going to", ar: "سأذهب إلى" }, emoji: "➡️", color: "#FFF5F5" },
      { word: "Viajar", translations: { en: "To travel", ar: "السفر" }, emoji: "✈️", color: "#FFF5F5" }
    ],
    exercises: [
      { id: "ex1", question: "Para hablar de un plan futuro dices:", options: ["Ayer trabajé", "Voy a trabajar", "Estoy trabajando"], correctAnswer: 1 }
    ]
  },
  {
    id: "a2-vocab-describir",
    topic: "Descripción",
    title: "Describir Lugares y Personas",
    level: "A2",
    category: "Vocabulario",
    description: "Adjetivos y expresiones para dar más detalles sobre tu entorno.",
    emoji: "🏞️",
    color: "#F0FFF4",
    content: `
## Describir personas (Carácter)
Simpático, amable, trabajador, tímido.

## Describir lugares
*   **Una ciudad:** grande, ruidosa, bonita, tranquila.
*   **El clima:** hace frío, hace calor, llueve.
    `,
    vocabulary: [
      { word: "Simpático", translations: { en: "Nice", ar: "لطيف" }, emoji: "😊", color: "#F0FFF4" },
      { word: "Tranquilo", translations: { en: "Quiet/Calm", ar: "هادئ" }, emoji: "🤫", color: "#F0FFF4" },
      { word: "Ciudad", translations: { en: "City", ar: "مدينة" }, emoji: "🏙️", color: "#F0FFF4" }
    ],
    exercises: [
      { id: "ex1", question: "¿Qué adjetivo describe mejor una biblioteca?", options: ["Ruidosa", "Tranquila", "Gorda"], correctAnswer: 1 }
    ]
  },
  {
    id: "a2-vocab-gustos-planes",
    topic: "Planes",
    title: "Gustos y Planes",
    level: "A2",
    category: "Comunicación",
    description: "Expresar lo que te gusta hacer en tu tiempo libre.",
    emoji: "🎸",
    color: "#FEFCBF",
    content: `
## Aficiones
Me encanta escuchar música, me gusta jugar al fútbol, no me gusta limpiar.

## Proponer planes
*   **¿Quieres ir al cine?**
*   **¿Quedamos mañana?**
    `,
    vocabulary: [
      { word: "Música", translations: { en: "Music", ar: "موسيقى" }, emoji: "🎵", color: "#FEFCBF" },
      { word: "Fútbol", translations: { en: "Soccer", ar: "كرة القدم" }, emoji: "⚽", color: "#FEFCBF" },
      { word: "Cine", translations: { en: "Cinema", ar: "سينما" }, emoji: "🎬", color: "#FEFCBF" }
    ],
    exercises: [
      { id: "ex1", question: "¿Cómo invitas a alguien a salir?", options: ["¿Cómo te llamas?", "¿Quieres ir al cine?", "¿Qué hora es?"], correctAnswer: 1 }
    ]
  },
  {
    id: "a2-vocab-compras-viajes",
    topic: "Situaciones",
    title: "Compras, Viajes y Restaurantes",
    level: "A2",
    category: "Vocabulario",
    description: "Comunicación para situaciones cotidianas de consumo.",
    emoji: "🍽️",
    color: "#E2E8F0",
    content: `
## En la tienda
*   **¿Cuánto cuesta?**
*   Me lo llevo. (I'll take it).
*   ¿Puedo pagar con tarjeta?

## En el restaurante
*   La cuenta, por favor.
*   De primero quiero sopa.
    `,
    vocabulary: [
      { word: "Restaurante", translations: { en: "Restaurant", ar: "مطعم" }, emoji: "🍽️", color: "#E2E8F0" },
      { word: "Dinero", translations: { en: "Money", ar: "مال" }, emoji: "💶", color: "#E2E8F0" },
      { word: "Billete", translations: { en: "Ticket", ar: "تذكرة" }, emoji: "🎟️", color: "#E2E8F0" }
    ],
    exercises: [
      { id: "ex1", question: "¿Qué pides al final de comer en un restaurante?", options: ["El menú", "La sopa", "La cuenta"], correctAnswer: 2 }
    ]
  },
  {
    id: "a2-gram-comparaciones",
    topic: "Comparaciones",
    title: "Comparaciones Sencillas",
    level: "A2",
    category: "Gramática",
    description: "Comparar cosas usando más que, menos que, tan como.",
    emoji: "⚖️",
    color: "#EBF8FF",
    content: `
## Estructuras
*   **Más + adjetivo + que:** Mi casa es más grande que tu casa.
*   **Menos + adjetivo + que:** El metro es menos caro que el taxi.
*   **Tan + adjetivo + como:** Juan es tan alto como Pedro.
    `,
    vocabulary: [
      { word: "Más", translations: { en: "More", ar: "أكثر" }, emoji: "➕", color: "#EBF8FF" },
      { word: "Menos", translations: { en: "Less", ar: "أقل" }, emoji: "➖", color: "#EBF8FF" },
      { word: "Igual", translations: { en: "Equal", ar: "يساوي" }, emoji: "🟰", color: "#EBF8FF" }
    ],
    exercises: [
      { id: "ex1", question: "Si un tren va a 200km/h y un coche a 100km/h, el tren es ___ rápido que el coche.", options: ["menos", "más", "tan"], correctAnswer: 1 }
    ]
  }
];
