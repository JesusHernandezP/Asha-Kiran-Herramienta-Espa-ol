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
    id: "a1-alfa-abecedario",
    topic: "El Abecedario",
    title: "Alfabetización: El Abecedario",
    level: "A1",
    category: "Alfabetización",
    description: "Aprende las 27 letras del abecedario español con palabras básicas y vocabulario esencial.",
    emoji: "🔤",
    color: "#E2F3E7",
    vocabulary: [
      { word: "Avión", translations: { en: "Airplane", ar: "طائرة", uk: "Літак", fr: "Avion" }, emoji: "✈️", color: "#E2F3E7" },
      { word: "Barco", translations: { en: "Boat", ar: "قارب", uk: "Човен", fr: "Bateau" }, emoji: "🚢", color: "#E2F3E7" },
      { word: "Casa", translations: { en: "House", ar: "منزل", uk: "Будинок", fr: "Maison" }, emoji: "🏠", color: "#E3EEF9" },
      { word: "Dedo", translations: { en: "Finger", ar: "إصبع", uk: "Палець", fr: "Doigt" }, emoji: "☝️", color: "#FCE8E8" },
      { word: "Elefante", translations: { en: "Elephant", ar: "فيل", uk: "Слон", fr: "Éléphant" }, emoji: "🐘", color: "#E2F3E7" },
      { word: "Fuego", translations: { en: "Fire", ar: "نار", uk: "Вогонь", fr: "Feu" }, emoji: "🔥", color: "#FFF4E5" },
      { word: "Gato", translations: { en: "Cat", ar: "قطة", uk: "Кіт", fr: "Chat" }, emoji: "🐱", color: "#F3E8FF" },
      { word: "Helado", translations: { en: "Ice cream", ar: "مثلجات", uk: "Морозиво", fr: "Glace" }, emoji: "🍦", color: "#FEFCBF" },
      { word: "Isla", translations: { en: "Island", ar: "جزيرة", uk: "Острів", fr: "Île" }, emoji: "🏝️", color: "#E2F3E7" },
      { word: "Jirafa", translations: { en: "Giraffe", ar: "زرافة", uk: "Жирафа", fr: "Girafe" }, emoji: "🦒", color: "#FEFCBF" },
      { word: "Koala", translations: { en: "Koala", ar: "كوالا", uk: "Коала", fr: "Koala" }, emoji: "🐨", color: "#E3EEF9" },
      { word: "Luna", translations: { en: "Moon", ar: "قمر", uk: "Місяць", fr: "Lune" }, emoji: "🌙", color: "#F3E8FF" },
      { word: "Manzana", translations: { en: "Apple", ar: "تفاحة", uk: "Яблуко", fr: "Pomme" }, emoji: "🍎", color: "#FCE8E8" },
      { word: "Nube", translations: { en: "Cloud", ar: "سحابة", uk: "Хмара", fr: "Nuage" }, emoji: "☁️", color: "#E3EEF9" },
      { word: "Ñandú", translations: { en: "Rhea / Ostrich", ar: "نعامة", uk: "Нанду", fr: "Nandou" }, emoji: "🐦", color: "#F3E8FF" },
      { word: "Oso", translations: { en: "Bear", ar: "دب", uk: "Ведмідь", fr: "Ours" }, emoji: "🐻", color: "#E2F3E7" },
      { word: "Perro", translations: { en: "Dog", ar: "كلب", uk: "Собака", fr: "Chien" }, emoji: "🐶", color: "#FEFCBF" },
      { word: "Queso", translations: { en: "Cheese", ar: "جبن", uk: "Сир", fr: "Fromage" }, emoji: "🧀", color: "#FEFCBF" },
      { word: "Ratón", translations: { en: "Mouse", ar: "فأر", uk: "Миша", fr: "Souris" }, emoji: "🐭", color: "#E3EEF9" },
      { word: "Sol", translations: { en: "Sun", ar: "شمس", uk: "Сонце", fr: "Soleil" }, emoji: "☀️", color: "#FEFCBF" },
      { word: "Tren", translations: { en: "Train", ar: "قطار", uk: "Потяг", fr: "Train" }, emoji: "🚆", color: "#FCE8E8" },
      { word: "Uvas", translations: { en: "Grapes", ar: "عنب", uk: "Виноград", fr: "Raisins" }, emoji: "🍇", color: "#F3E8FF" },
      { word: "Vaca", translations: { en: "Cow", ar: "بقرة", uk: "Корова", fr: "Vache" }, emoji: "🐮", color: "#E2F3E7" },
      { word: "Kiwi", translations: { en: "Kiwi", ar: "كيوي", uk: "Ківі", fr: "Kiwi" }, emoji: "🥝", color: "#E2F3E7" },
      { word: "Xilófono", translations: { en: "Xylophone", ar: "إكسيليفون", uk: "Ксилофон", fr: "Xylophone" }, emoji: "🎹", color: "#F3E8FF" },
      { word: "Yoyó", translations: { en: "Yoyo", ar: "يويو", uk: "Йо-йо", fr: "Yoyo" }, emoji: "🪀", color: "#FCE8E8" },
      { word: "Zapato", translations: { en: "Shoe", ar: "حذاء", uk: "Взуття", fr: "Chaussure" }, emoji: "👞", color: "#FFF4E5" }
    ],
    content: `
## Vamos a aprender el abecedario de la A a la Z

### Ejercicio de pronunciación:
Usa el botón de abajo si estuviera disponible el audio (simulación).
<button class="audio-btn">🔊 Escuchar el abecedario</button>
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
        question: "¿Qué imagen empieza con la letra 'B'?",
        options: ["Casa", "Barco", "Dedo"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "¿Con qué letra empieza la palabra 'Sol'?",
        options: ["S", "T", "R"],
        correctAnswer: 0
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
        question: `¿Cómo se dice <trans en="'Hand'" ar="'يد'" uk="'Рука'" fr="'Main'"/> en Español?`,
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
    id: "a1-gram-articulos",
    topic: "Gramática",
    title: "Artículos y Plurales",
    level: "A1",
    category: "Gramática",
    description: "Aprende a usar los artículos (el, la, los, las) y a formar el plural añadiendo 'S' o 'ES'.",
    emoji: "📚",
    color: "#EBF8FF",
    vocabulary: [
      { word: "El niño", translations: { en: "The boy", ar: "الولد", uk: "Хлопчик", fr: "Le garçon" }, emoji: "👦", color: "#EBF8FF" },
      { word: "La niña", translations: { en: "The girl", ar: "البنت", uk: "Дівчинка", fr: "La fille" }, emoji: "👧", color: "#EBF8FF" },
      { word: "Los niños", translations: { en: "The boys / The children", ar: "الأولاد", uk: "Хлопчики", fr: "Les garçons" }, emoji: "👦👦", color: "#EBF8FF" },
      { word: "Las niñas", translations: { en: "The girls", ar: "البنات", uk: "Дівчатка", fr: "Les filles" }, emoji: "👧👧", color: "#EBF8FF" }
    ],
    content: `
## Los Artículos Definidos

En español, usamos diferentes artículos dependiendo de si la palabra es masculina o femenina, y si es singular (uno) o plural (más de uno).

### Singular <trans en="(Singular)" ar="(مفرد)" uk="(Однина)" fr="(Singulier)"/>
*   **El** <trans en="(The - Masculine)" ar="(ال - مذكر)" uk="(Чоловічий рід)" fr="(Le)"/>: El niño, El perro, El coche.
*   **La** <trans en="(The - Feminine)" ar="(ال - مؤنث)" uk="(Жіночий рід)" fr="(La)"/>: La niña, La casa, La mesa.

### Plural <trans en="(Plural)" ar="(جمع)" uk="(Множина)" fr="(Pluriel)"/>
Para formar el plural de las palabras que terminan en vocal (a, e, i, o, u), añadimos una **"S"** al final.
*   **Los** <trans en="(The - Masculine plural)" ar="(ال - جمع مذكر)" uk="(Чоловічий рід множина)" fr="(Les - Masculin)"/>: *Los niño**s***.
*   **Las** <trans en="(The - Feminine plural)" ar="(ال - جمع مؤنث)" uk="(Жіночий рід множина)" fr="(Les - Féminin)"/>: *Las niña**s***.
    `,
    exercises: [
      {
        id: "ex1",
        question: "___ mesa <trans en='(table)' ar='(طاولة)' uk='(стіл)' fr='(table)'/>",
        options: ["El", "La", "Los", "Las"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Cuál es el plural de 'perro' <trans en='(dog)' ar='(كلب)' uk='(собака)' fr='(chien)'/>?",
        options: ["perros", "perroes", "perro"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "___ amigos <trans en='(friends)' ar='(أصدقاء)' uk='(друзі)' fr='(amis)'/>",
        options: ["La", "El", "Las", "Los"],
        correctAnswer: 3
      }
    ]
  },
  {
    id: "a1-gram-pronombres",
    topic: "Pronombres Personales",
    title: "Pronombres Personales",
    level: "A1",
    category: "Gramática",
    description: "Aprende los pronombres para referirte a personas: yo, tú, él, ella, nosotros, vosotros, ellos.",
    emoji: "🙋🏽‍♂️",
    color: "#E2F3E7",
    vocabulary: [
      { word: "Yo", translations: { en: "I", ar: "أنا", uk: "Я", fr: "Je" }, emoji: "🙋", color: "#E2F3E7" },
      { word: "Tú", translations: { en: "You (singular, informal)", ar: "أنت", uk: "Ти", fr: "Tu" }, emoji: "👉", color: "#E2F3E7" },
      { word: "Él / Ella", translations: { en: "He / She", ar: "هو / هي", uk: "Він / Вона", fr: "Il / Elle" }, emoji: "🧍", color: "#E2F3E7" },
      { word: "Nosotros", translations: { en: "We", ar: "نحن", uk: "Ми", fr: "Nous" }, emoji: "🫂", color: "#E2F3E7" },
      { word: "Vosotros", translations: { en: "You (plural, informal)", ar: "أنتم", uk: "Ви", fr: "Vous" }, emoji: "👋", color: "#E2F3E7" },
      { word: "Ellos / Ellas", translations: { en: "They", ar: "هم / هن", uk: "Вони", fr: "Ils / Elles" }, emoji: "👥", color: "#E2F3E7" }
    ],
    content: `
## Los Pronombres Personales

Para hablar de quién hace la acción, usamos los pronombres personales. ¡Aprenderlos de memoria es súper importante!

*   **Yo** <trans en="(I)" ar="(أنا)" uk="(Я)" fr="(Je)"/>
*   **Tú** <trans en="(You)" ar="(أنت)" uk="(Ти)" fr="(Tu)"/>
*   **Él / Ella** <trans en="(He / She)" ar="(هو / هي)" uk="(Він/Вона)" fr="(Il/Elle)"/>
*   **Nosotros / Nosotras** <trans en="(We)" ar="(نحن)" uk="(Ми)" fr="(Nous)"/>
*   **Vosotros / Vosotras** <trans en="(You all)" ar="(أنتم)" uk="(Ви)" fr="(Vous)"/>
*   **Ellos / Ellas** <trans en="(They)" ar="(هم)" uk="(Вони)" fr="(Ils/Elles)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "Cuando hablo de mí mismo <trans en='(When I talk about myself)' ar='(عندما أتحدث عن نفسي)' uk='(Коли я говорю про себе)' fr='(Quand je parle de moi-même)'/>, uso:",
        options: ["Tú", "Yo", "Él"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Ana y yo <trans en='(Ana and I)' ar='(آنا وأنا)' uk='(Ана і я)' fr='(Ana et moi)'/> somos...",
        options: ["Ellos", "Vosotros", "Nosotros"],
        correctAnswer: 2
      },
      {
        id: "ex3",
        question: "Cuando hablo con mi amigo <trans en='(When I talk to my friend)' ar='(عندما أتحدث مع صديقي)' uk='(Коли я говорю зі своїм другом)' fr='(Quand je parle à mon ami)'/>, le digo:",
        options: ["Nosotros", "Tú", "Él"],
        correctAnswer: 1
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

### Verbo SER <trans en="(Identity / To be)" ar="(الهوية / يكون)" uk="(Ідентичність / Бути)" fr="(Identité / Être)"/>
*   **Yo soy** Ana. <trans en="(I am Ana)" ar="(أنا آنا)" uk="(Я Ана)" fr="(Je suis Ana)"/>
*   **Él es** de África. <trans en="(He is from Africa)" ar="(هو من أفريقيا)" uk="(Він з Африки)" fr="(Il est d'Afrique)"/>

### Verbo ESTAR <trans en="(Location or Emotion / To be)" ar="(المكان أو العاطفة / يكون)" uk="(Місце або Емоція / Бути)" fr="(Lieu ou Émotion / Être)"/>
*   **Yo estoy** feliz. <trans en="(I am happy)" ar="(أنا سعيد)" uk="(Я щасливий)" fr="(Je suis heureux)"/>
*   **Tú estás** en España. <trans en="(You are in Spain)" ar="(أنت في إسبانيا)" uk="(Ти в Іспанії)" fr="(Tu es en Espagne)"/>

### Verbo TENER <trans en="(To have)" ar="(يملك)" uk="(Мати)" fr="(Avoir)"/>
*   **Yo tengo** 30 años. <trans en="(I am 30 years old)" ar="(عمري 30 سنة)" uk="(Мені 30 років)" fr="(J'ai 30 ans)"/>
*   **Tú tienes** hambre. <trans en="(You are hungry)" ar="(أنت جائع)" uk="(Ти голодний)" fr="(Tu as faim)"/>
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
        question: `Si hace frío <trans en="(cold)" ar="(بارد)" uk="(холодно)" fr="(froid)"/>, te pones:`,
        options: ["Una camiseta corta", "Una chaqueta", "Un pantalón corto"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a1-gram-genero",
    topic: "Gramática",
    title: "Género: Masculino y Femenino",
    level: "A1",
    category: "Gramática",
    description: "Aprende las reglas básicas para saber si una palabra es masculina (termina en 'o') o femenina (termina en 'a'), y algunas excepciones.",
    emoji: "🚹",
    color: "#E2F3E7",
    vocabulary: [
      { word: "El niño", translations: { en: "The boy", ar: "الولد", uk: "Хлопчик", fr: "Le garçon" }, emoji: "👦", color: "#E2F3E7" },
      { word: "El cielo", translations: { en: "The sky", ar: "السماء", uk: "Небо", fr: "Le ciel" }, emoji: "🌌", color: "#EBF8FF" },
      { word: "La niña", translations: { en: "The girl", ar: "البنت", uk: "Дівчинка", fr: "La fille" }, emoji: "👧", color: "#FFF5F5" },
      { word: "La manzana", translations: { en: "The apple", ar: "التفاحة", uk: "Яблуко", fr: "La pomme" }, emoji: "🍎", color: "#FCE8E8" },
      { word: "La información", translations: { en: "The information", ar: "المعلومات", uk: "Інформація", fr: "L'information" }, emoji: "ℹ️", color: "#E3EEF9" },
      { word: "La concentración", translations: { en: "The concentration", ar: "التركيز", uk: "Концентрація", fr: "La concentration" }, emoji: "🧠", color: "#F3E8FF" }
    ],
    content: `
## Palabras Masculinas y Femeninas

Casi todas las cosas en español son masculinas o femeninas.

### Masculino <trans en="(Masculine)" ar="(مذكر)" uk="(Чоловічий рід)" fr="(Masculin)"/>
Normalmente terminan en **-O**. Usamos **EL** o **UN**.
*   **El** niño
*   **El** cielo
*   **El** oro

### Femenino <trans en="(Feminine)" ar="(مؤنث)" uk="(Жіночий рід)" fr="(Féminin)"/>
Normalmente terminan en **-A**. Usamos **LA** o **UNA**.
*   **La** niña
*   **La** tierra
*   **La** manzana

### Excepciones Importantes ⚠️
Las palabras que terminan en **-ción** siempre son **femeninas**, aunque no terminen en -a.
*   **La** informa**ción**
*   **La** concentra**ción**
*   **La** emo**ción**
    `,
    exercises: [
      {
        id: "ex1",
        question: "___ teléfono <trans en='(phone - ends in o)' ar='(هاتف)' uk='(телефон)' fr='(téléphone)'/>",
        options: ["El", "La"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "___ canción <trans en='(song - ends in ción)' ar='(أغنية)' uk='(пісня)' fr='(chanson)'/>",
        options: ["El", "La"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "___ casa <trans en='(house - ends in a)' ar='(منزل)' uk='(будинок)' fr='(maison)'/>",
        options: ["El", "La"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a1-gram-posesivos",
    topic: "Gramática",
    title: "Posesivos",
    level: "A1",
    category: "Gramática",
    description: "Aprende a indicar posesión: mi, tu, nuestro, vuestro, su.",
    emoji: "🎒",
    color: "#FCE8E8",
    vocabulary: [
      { word: "Mi", translations: { en: "My", ar: "لي", uk: "Мій", fr: "Mon/Ma" }, emoji: "🙋", color: "#FCE8E8" },
      { word: "Tu", translations: { en: "Your", ar: "لك", uk: "Твій", fr: "Ton/Ta" }, emoji: "👉", color: "#FCE8E8" },
      { word: "Su", translations: { en: "His/Her/Their", ar: "له/لها/لهم", uk: "Його/Її/Їх", fr: "Son/Sa/Leur" }, emoji: "🧍", color: "#FCE8E8" },
      { word: "Nuestro / Nuestra", translations: { en: "Our", ar: "لنا", uk: "Наш/Наша", fr: "Notre" }, emoji: "🫂", color: "#FCE8E8" },
      { word: "Vuestro / Vuestra", translations: { en: "Your (plural)", ar: "لكم", uk: "Ваш/Ваша", fr: "Votre" }, emoji: "👋", color: "#FCE8E8" }
    ],
    content: `
## ¿De quién es?

Para indicar que algo es de alguien, usamos posesivos. Van antes de las palabras.

*   **Mi** casa <trans en="(My house)" ar="(منزلي)" uk="(Мій дім)" fr="(Ma maison)"/>
*   **Tu** mochila <trans en="(Your backpack)" ar="(حقيبتك)" uk="(Твій рюкзак)" fr="(Ton sac à dos)"/>
*   **Su** coche <trans en="(His/Her car)" ar="(سيارته/سيارتها)" uk="(Його/Її машина)" fr="(Sa voiture)"/>
*   **Nuestra** ciudad <trans en="(Our city)" ar="(مدينتنا)" uk="(Наше місто)" fr="(Notre ville)"/>
*   **Vuestra** clase <trans en="(Your class)" ar="(فصلكم)" uk="(Ваш клас)" fr="(Votre classe)"/>
*   **Su** dinero <trans en="(Their money)" ar="(أموالهم)" uk="(Їхні гроші)" fr="(Leur argent)"/>

*Nota: "Nuestro/a" y "Vuestro/a" cambian de género (o/a) según la palabra que sigue. "Mi, Tu, Su" no cambian de género.*
    `,
    exercises: [
      {
        id: "ex1",
        question: "______ nombre es Ali. <trans en='(His name)' ar='(اسمه)' uk='(Його ім\`я)' fr='(Son nom)'/>",
        options: ["Mi", "Tu", "Su"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "______ familia <trans en='(Our family)' ar='(عائلتنا)' uk='(Наша сім\`я)' fr='(Notre famille)'/>",
        options: ["Nuestro", "Nuestra", "Mi"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "Yo tengo una bicicleta. Es ______ bicicleta.",
        options: ["mi", "tu", "su"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a1-gram-negacion",
    topic: "Gramática",
    title: "Afirmación y Negación",
    level: "A1",
    category: "Gramática",
    description: "Aprende a decir sí o no, y a expresar lo que te gusta y no te gusta.",
    emoji: "👍",
    color: "#E3EEF9",
    vocabulary: [
      { word: "Sí", translations: { en: "Yes", ar: "نعم", uk: "Так", fr: "Oui" }, emoji: "✅", color: "#E2F3E7" },
      { word: "No", translations: { en: "No", ar: "لا", uk: "Ні", fr: "Non" }, emoji: "❌", color: "#FCE8E8" },
      { word: "Me gusta", translations: { en: "I like", ar: "يعجبني", uk: "Мені подобається", fr: "J'aime" }, emoji: "👍", color: "#E3EEF9" },
      { word: "No me gusta", translations: { en: "I don't like", ar: "لا يعجبني", uk: "Мені не подобається", fr: "Je n'aime pas" }, emoji: "👎", color: "#FCE8E8" }
    ],
    content: `
## ¿Sí o No?

*   **Sí**, quiero pan.
*   **No**, no quiero pan.

*Para decir que algo no ocurre, ponemos "no" antes del verbo.*

## Los Gustos

Usamos **Me gusta** cuando algo nos parece bueno o bonito.

*   **Me gusta** el fútbol. <trans en="(I like soccer)" ar="(أحب كرة القدم)" uk="(Мені подобається футбол)" fr="(J'aime le football)"/>
*   **No me gusta** el frío. <trans en="(I don't like the cold)" ar="(لا أحب البرد)" uk="(Мені не подобається холод)" fr="(Je n'aime pas le froid)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "___, me llamo Juan.",
        options: ["No", "Sí"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "A mí ___ me gusta el pescado. Prefiero la carne.",
        options: ["no", "sí", "también"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a1-vocab-saludos",
    topic: "Presentaciones",
    title: "Saludos y Presentaciones",
    level: "A1",
    category: "Vocabulario",
    description: "Hola, ¿cómo estás? Aprende las preguntas y respuestas más importantes para conocer a alguien.",
    emoji: "🤝",
    color: "#FFF5F5",
    vocabulary: [
      { word: "Hola", translations: { en: "Hello", ar: "مرحباً", uk: "Привіт", fr: "Bonjour" }, emoji: "👋", color: "#FFF5F5" },
      { word: "¿Cómo estás?", translations: { en: "How are you?", ar: "كيف حالك؟", uk: "Як справи?", fr: "Comment vas-tu ?" }, emoji: "🤔", color: "#EBF8FF" },
      { word: "Estoy bien", translations: { en: "I'm fine", ar: "أنا بخير", uk: "Я в порядку", fr: "Je vais bien" }, emoji: "😊", color: "#E2F3E7" },
      { word: "¿Cómo te llamas?", translations: { en: "What's your name?", ar: "ما اسمك؟", uk: "Як тебе звати?", fr: "Comment t'appelles-tu ?" }, emoji: "🏷️", color: "#EBF8FF" },
      { word: "¿De dónde eres?", translations: { en: "Where are you from?", ar: "من أين أنت؟", uk: "Звідки ти?", fr: "D'où viens-tu ?" }, emoji: "🌍", color: "#FEFCBF" }
    ],
    content: `
## Conversación Básica

Aquí tienes preguntas muy importantes y cómo responderlas de forma natural:

*   **Hola, ¿cómo estás?** <trans en="(Hello, how are you?)" ar="(مرحباً، كيف حالك؟)" uk="(Привіт, як справи?)" fr="(Bonjour, comment vas-tu ?)"/>
    *   **Estoy bien, gracias.** <trans en="(I'm fine, thank you)" ar="(أنا بخير، شكراً)" uk="(Я в порядку, дякую)" fr="(Je vais bien, merci)"/>
*   **¿Cómo te llamas?** <trans en="(What's your name?)" ar="(ما اسمك؟)" uk="(Як тебе звати?)" fr="(Comment t'appelles-tu ?)"/>
    *   **Me llamo Antonio.** <trans en="(My name is Antonio)" ar="(اسمي أنطونيو)" uk="(Мене звати Антоніо)" fr="(Je m'appelle Antonio)"/>
*   **¿De dónde eres?** <trans en="(Where are you from?)" ar="(من أين أنت؟)" uk="(Звідки ти?)" fr="(D'où viens-tu ?)"/>
    *   **Soy de Marruecos.** <trans en="(I am from Morocco)" ar="(أنا من المغرب)" uk="(Я з Марокко)" fr="(Je suis du Maroc)"/>
*   **¿Cuántos años tienes?** <trans en="(How old are you?)" ar="(كم عمرك؟)" uk="(Скільки тобі років?)" fr="(Quel âge as-tu ?)"/>
    *   **Tengo 30 años.** <trans en="(I am 30 years old)" ar="(عمري 30 سنة)" uk="(Мені 30 років)" fr="(J'ai 30 ans)"/>
*   **¿Cuánto tiempo llevas aquí?** <trans en="(How long have you been here?)" ar="(منذ متى وأنت هنا؟)" uk="(Як довго ти тут?)" fr="(Depuis combien de temps es-tu ici ?)"/>
    *   **Llevo dos meses.** <trans en="(I have been here for two months)" ar="(أنا هنا منذ شهرين)" uk="(Я тут два місяці)" fr="(Je suis ici depuis deux mois)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "Responde a la pregunta: '¿Cómo te llamas?'",
        options: ["Tengo 20 años", "Me llamo Sara", "Soy de Málaga"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Responde a la pregunta: '¿De dónde eres?'",
        options: ["Soy de Senegal", "Estoy bien", "Llevo tres semanas"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Responde a la pregunta: '¿Cuántos años tienes?'",
        options: ["Tengo mucho frío", "Tengo 25 años", "Me llamo Luis"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a1-vocab-numeros",
    topic: "Números",
    title: "Vocabulario: Los Números (1-10)",
    level: "A1",
    category: "Vocabulario",
    description: "Aprende a contar del uno al diez.",
    emoji: "🔢",
    color: "#EBF8FF",
    vocabulary: [
      { word: "Uno (1)", translations: { en: "One", ar: "واحد", uk: "Один", fr: "Un" }, emoji: "1️⃣", color: "#EBF8FF" },
      { word: "Dos (2)", translations: { en: "Two", ar: "إثنان", uk: "Два", fr: "Deux" }, emoji: "2️⃣", color: "#EBF8FF" },
      { word: "Tres (3)", translations: { en: "Three", ar: "ثلاثة", uk: "Три", fr: "Trois" }, emoji: "3️⃣", color: "#EBF8FF" },
      { word: "Cuatro (4)", translations: { en: "Four", ar: "أربعة", uk: "Чотири", fr: "Quatre" }, emoji: "4️⃣", color: "#EBF8FF" },
      { word: "Cinco (5)", translations: { en: "Five", ar: "خمسة", uk: "П'ять", fr: "Cinq" }, emoji: "5️⃣", color: "#EBF8FF" },
      { word: "Seis (6)", translations: { en: "Six", ar: "ستة", uk: "Шість", fr: "Six" }, emoji: "6️⃣", color: "#EBF8FF" },
      { word: "Siete (7)", translations: { en: "Seven", ar: "سبعة", uk: "Сім", fr: "Sept" }, emoji: "7️⃣", color: "#EBF8FF" },
      { word: "Ocho (8)", translations: { en: "Eight", ar: "ثمانية", uk: "Вісім", fr: "Huit" }, emoji: "8️⃣", color: "#EBF8FF" },
      { word: "Nueve (9)", translations: { en: "Nine", ar: "تسعة", uk: "Дев'ять", fr: "Neuf" }, emoji: "9️⃣", color: "#EBF8FF" },
      { word: "Diez (10)", translations: { en: "Ten", ar: "عشرة", uk: "Десять", fr: "Dix" }, emoji: "🔟", color: "#EBF8FF" }
    ],
    content: `
## A contar...

Saber los números nos ayuda a decir nuestra edad, la hora o precios.
Los primeros 10 son:

*   1 = **Uno**
*   2 = **Dos**
*   3 = **Tres**
*   4 = **Cuatro**
*   5 = **Cinco**
*   6 = **Seis**
*   7 = **Siete**
*   8 = **Ocho**
*   9 = **Nueve**
*   10 = **Diez**
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Qué número es el 'Cinco'?",
        options: ["6", "5", "10"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "3 en español es...",
        options: ["Tres", "Dos", "Uno"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a1-vocab-nacionalidades",
    topic: "Países",
    title: "Países y Nacionalidades",
    level: "A1",
    category: "Vocabulario",
    description: "España y español. Inglaterra y británico. Aprende cómo hablar de orígenes.",
    emoji: "🌐",
    color: "#FEFCBF",
    vocabulary: [
      { word: "España / español", translations: { en: "Spain / Spanish", ar: "إسبانيا / إسباني", uk: "Іспанія / іспанець", fr: "Espagne / espagnol" }, emoji: "🇪🇸", color: "#FFF5F5" },
      { word: "Inglaterra / inglés", translations: { en: "England / English", ar: "إنجلترا / إنجليزي", uk: "Англія / англієць", fr: "Angleterre / anglais" }, emoji: "🇬🇧", color: "#EBF8FF" },
      { word: "Marruecos / marroquí", translations: { en: "Morocco / Moroccan", ar: "المغرب / مغربي", uk: "Марокко / марокканець", fr: "Maroc / marocain" }, emoji: "🇲🇦", color: "#FCE8E8" },
      { word: "Francia / francés", translations: { en: "France / French", ar: "فرنسا / فرنسي", uk: "Франція / француз", fr: "France / français" }, emoji: "🇫🇷", color: "#E3EEF9" },
      { word: "Senegal / senegalés", translations: { en: "Senegal / Senegalese", ar: "السنغال / سنغالي", uk: "Сенегал / сенегалець", fr: "Sénégal / sénégalais" }, emoji: "🇸🇳", color: "#E2F3E7" }
    ],
    content: `
## País y Nacionalidad

Del país (el lugar) viene la palabra sobre tu origen (la nacionalidad).

*   País: **España**. "Yo soy de España".
*   Nacionalidad: **Español / Española**. "Yo soy español".

*   País: **Inglaterra**. "Vivo en Inglaterra".
*   Nacionalidad: **Inglés / Inglesa**.

*   País: **Marruecos**.
*   Nacionalidad: **Marroquí**. *(No cambia para masculino/femenino).*
    `,
    exercises: [
      {
        id: "ex1",
        question: "Una persona de Francia es...",
        options: ["francés", "franco", "francia"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Fátima es de Marruecos. Ella es...",
        options: ["marrueca", "marroquí", "marruecos"],
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
      { word: "Marruecos", translations: { en: "Morocco", ar: "المغرب", uk: "Марокко", fr: "Maroc" }, emoji: "🇲🇦", color: "#FEFCBF" },
      { word: "España", translations: { en: "Spain", ar: "إسبانيا", uk: "Іспанія", fr: "Espagne" }, emoji: "🇪🇸", color: "#FFF5F5" },
      { word: "Senegal", translations: { en: "Senegal", ar: "السنغال", uk: "Сенегал", fr: "Sénégal" }, emoji: "🇸🇳", color: "#F0FFF4" }
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
    id: "a2-vocab-direcciones",
    topic: "Direcciones",
    title: "Supervivencia: ¿Dónde está...?",
    level: "A2",
    category: "Vocabulario",
    description: "Aprende a preguntar por lugares importantes como el lavabo, el autobús o la tienda.",
    emoji: "🗺️",
    color: "#EBF8FF",
    vocabulary: [
      { word: "El lavabo / baño", translations: { en: "Bathroom / Toilet", ar: "الحمام", uk: "Туалет / Ванна", fr: "Toilettes / Salle de bain" }, emoji: "🚽", color: "#EBF8FF" },
      { word: "El autobús", translations: { en: "Bus", ar: "حافلة", uk: "Автобус", fr: "Bus" }, emoji: "🚌", color: "#FFF5F5" },
      { word: "El metro", translations: { en: "Subway / Metro", ar: "مترو الأنفاق", uk: "Метро", fr: "Métro" }, emoji: "🚇", color: "#E2F3E7" },
      { word: "La tienda", translations: { en: "Store / Shop", ar: "متجر", uk: "Магазин", fr: "Magasin" }, emoji: "🏪", color: "#FEFCBF" },
      { word: "La farmacia", translations: { en: "Pharmacy", ar: "صيدلية", uk: "Аптека", fr: "Pharmacie" }, emoji: "💊", color: "#FCE8E8" },
      { word: "El hospital", translations: { en: "Hospital", ar: "مستشفى", uk: "Лікарня", fr: "Hôpital" }, emoji: "🏥", color: "#E3EEF9" }
    ],
    content: `
## Preguntar por lugares

Si estás perdido o necesitas algo urgente, puedes usar: **¿Dónde está...?** <trans en="(Where is...?)" ar="(أين...؟)" uk="(Де знаходиться...?)" fr="(Où est...?)"/>

*   ¿Dónde está **el lavabo**? <trans en="(Where is the bathroom?)" ar="(أين الحمام؟)" uk="(Де туалет?)" fr="(Où sont les toilettes ?)"/>
*   ¿Dónde está **el autobús**?
*   ¿Dónde está **la estación de metro**?
*   ¿Dónde está **la tienda** de comida?
    `,
    exercises: [
      {
        id: "ex1",
        question: "Necesitas lavarte las manos. Preguntas: ¿Dónde está...?",
        options: ["el metro", "el lavabo", "el autobús"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Quieres comprar algo de comida. Preguntas: ¿Dónde está...?",
        options: ["la tienda", "el hospital", "el mar"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a2-gram-necesidades",
    topic: "Necesidades",
    title: "Supervivencia: Quiero y Necesito",
    level: "A2",
    category: "Gramática",
    description: "Aprende a expresar tus deseos y necesidades: quiero comprar, necesito ayuda, quiero ir a...",
    emoji: "🛒",
    color: "#F3E8FF",
    vocabulary: [
      { word: "Quiero", translations: { en: "I want", ar: "أريد", uk: "Я хочу", fr: "Je veux" }, emoji: "🤲", color: "#F3E8FF" },
      { word: "Necesito", translations: { en: "I need", ar: "أحتاج", uk: "Мені потрібно", fr: "J'ai besoin" }, emoji: "❗", color: "#FCE8E8" },
      { word: "Comprar", translations: { en: "To buy", ar: "أشتري", uk: "Купити", fr: "Acheter" }, emoji: "🛍️", color: "#E3EEF9" },
      { word: "Ir", translations: { en: "To go", ar: "أذهب", uk: "Іти", fr: "Aller" }, emoji: "🚶", color: "#E2F3E7" },
      { word: "Ayuda", translations: { en: "Help", ar: "مساعدة", uk: "Допомога", fr: "Aide" }, emoji: "🆘", color: "#FFF4E5" }
    ],
    content: `
## Expresar deseos y necesidades

Para pedir cosas o decir adónde vas, usamos **Quiero** (deseo) o **Necesito** (obligación/necesidad).

*   **Quiero comprar** agua. <trans en="(I want to buy water)" ar="(أريد شراء الماء)" uk="(Я хочу купити воду)" fr="(Je veux acheter de l'eau)"/>
*   **Quiero ir a** la estación. <trans en="(I want to go to the station)" ar="(أريد الذهاب إلى المحطة)" uk="(Я хочу піти на станцію)" fr="(Je veux aller à la station)"/>
*   **Necesito** ayuda, por favor. <trans en="(I need help, please)" ar="(أحتاج إلى مساعدة، من فضلك)" uk="(Мені потрібна допомога, будь ласка)" fr="(J'ai besoin d'aide, s'il vous plaît)"/>
*   **Necesito** trabajar. <trans en="(I need to work)" ar="(أحتاج إلى العمل)" uk="(Мені треба працювати)" fr="(J'ai besoin de travailler)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "No tienes agua y tienes mucha sed. Dices: '______ comprar agua'.",
        options: ["Dónde", "Necesito", "Hola"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Cómo pides que alguien te asista?",
        options: ["Necesito ayuda", "Quiero ir", "El lavabo"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a2-gram-tener-estados",
    topic: "Estados Físicos",
    title: "Supervivencia: Tengo / No tengo",
    level: "A2",
    category: "Gramática",
    description: "Usa el verbo TENER para hablar de lo que posees y de tus sensaciones corporales.",
    emoji: "🌡️",
    color: "#FFF4E5",
    vocabulary: [
      { word: "Tengo hambre", translations: { en: "I'm hungry", ar: "أشعر بالجوع", uk: "Я голодний", fr: "J'ai faim" }, emoji: "🤤", color: "#FFF4E5" },
      { word: "Tengo sed", translations: { en: "I'm thirsty", ar: "أشعر بالعطش", uk: "Я хочу пити", fr: "J'ai soif" }, emoji: "🥛", color: "#E3EEF9" },
      { word: "Tengo frío", translations: { en: "I'm cold", ar: "أشعر بالبرد", uk: "Мені холодно", fr: "J'ai froid" }, emoji: "🥶", color: "#EBF8FF" },
      { word: "Tengo calor", translations: { en: "I'm hot", ar: "أشعر بالحر", uk: "Мені жарко", fr: "J'ai chaud" }, emoji: "🥵", color: "#FCE8E8" },
      { word: "Tengo miedo", translations: { en: "I'm afraid", ar: "أشعر بالخوف", uk: "Мені страшно", fr: "J'ai peur" }, emoji: "😨", color: "#F3E8FF" }
    ],
    content: `
## Posesión y Estados Físicos

Usamos **Tengo** para decir las cosas que son nuestras, pero *también* para cómo nos sentimos físicamente.

### Posesión
*   **Tengo** dinero. <trans en="(I have money)" ar="(عندي مال)" uk="(У мене є гроші)" fr="(J'ai de l'argent)"/>
*   **No tengo** teléfono. <trans en="(I don't have a phone)" ar="(ليس عندي هاتف)" uk="(У мене немає телефону)" fr="(Je n'ai pas de téléphone)"/>

### Sensaciones
*   **Tengo hambre** (quiero comer).
*   **Tengo sed** (quiero beber).
*   **Tengo frío** (necesito una chaqueta).
    `,
    exercises: [
      {
        id: "ex1",
        question: "Si quieres comer porque tu estómago está vacío, dices:",
        options: ["Tengo frío", "Tengo hambre", "Tengo dinero"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Para decir 'I don't have money', en español es:",
        options: ["No tengo dinero", "Necesito dinero", "Dónde está el dinero"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a2-gram-me-duele",
    topic: "Expresiones",
    title: "Supervivencia: Me duele, me gusta...",
    level: "A2",
    category: "Gramática",
    description: "Aprende a expresar dolor, molestias, gustos y preocupaciones usando 'Me'.",
    emoji: "🤕",
    color: "#FCE8E8",
    vocabulary: [
      { word: "Me duele", translations: { en: "It hurts", ar: "يؤلمني", uk: "Мені боляче", fr: "J'ai mal" }, emoji: "🤕", color: "#FCE8E8" },
      { word: "Me molesta", translations: { en: "It bothers me", ar: "يزعجني", uk: "Мене турбує", fr: "Ça me dérange" }, emoji: "😠", color: "#FFF4E5" },
      { word: "Me aburre", translations: { en: "It bores me", ar: "يصيبني بالملل", uk: "Мені нудно", fr: "Ça m'ennuie" }, emoji: "🥱", color: "#E3EEF9" },
      { word: "Me preocupa", translations: { en: "It worries me", ar: "يقلقني", uk: "Мене хвилює", fr: "Ça m'inquiète" }, emoji: "😟", color: "#F3E8FF" }
    ],
    content: `
## Expresando sentimientos y dolor

Algunos verbos en español necesitan un "pronombre" delante (como **me**, **te**, **le**) para saber a quién le afecta.

*   **Me duele** la cabeza. <trans en="(My head hurts)" ar="(رأسي يؤلمني)" uk="(У мене болить голова)" fr="(J'ai mal à la tête)"/>
*   **Me duele** el estómago.
*   **Me gusta** España. <trans en="(I like Spain)" ar="(تعجبني إسبانيا)" uk="(Мені подобається Іспанія)" fr="(J'aime l'Espagne)"/>
*   **Me molesta** el ruido. <trans en="(The noise bothers me)" ar="(الضوضاء تزعجني)" uk="(Мене дратує шум)" fr="(Le bruit me dérange)"/>
*   **Me preocupa** mi familia. <trans en="(I am worried about my family)" ar="(أنا قلق على عائلتي)" uk="(Я хвилююся за свою сім'ю)" fr="(Je m'inquiète pour ma famille)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "Si tu cabeza no está bien y sientes dolor, dices:",
        options: ["Me gusta la cabeza", "Tengo cabeza", "Me duele la cabeza"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "Si algo es muy ruidoso y no te deja dormir:",
        options: ["Me molesta el ruido", "Me aburre el ruido", "Me gusta el ruido"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a2-comp-supermercado",
    topic: "Comprensión",
    title: "Lectura Fácil: En el supermercado",
    level: "A2",
    category: "Comprensión",
    description: "Lee sobre una visita al supermercado y practica el vocabulario de alimentos y compras.",
    emoji: "🛒",
    color: "#E2F3E7",
    content: `
## LECTURA: La lista de la compra

> *"Hoy es sábado y Ana va al supermercado. Ana necesita muchas cosas para la semana. En su lista de la compra tiene: manzanas, leche, arroz y pan."*

> *"Primero, ella va a la sección de frutas. Después, compra la leche y el arroz. Al final, Ana paga en la caja con dinero en efectivo. El cajero dice: 'Gracias, ¡buen fin de semana!'."*

### Lee la lectura con atención y responde al ejercicio.
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Qué día va Ana al supermercado?",
        options: ["El lunes", "El sábado", "El domingo"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Qué compra primero Ana?",
        options: ["Frutas (manzanas)", "Leche", "Carne"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "¿Cómo paga Ana?",
        options: ["Con tarjeta", "Con el teléfono", "Con dinero en efectivo"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "a2-comp-medico",
    topic: "Comprensión",
    title: "Lectura Fácil: En la farmacia",
    level: "A2",
    category: "Comprensión",
    description: "Una pequeña conversación en la farmacia para practicar cómo pedir medicamentos.",
    emoji: "🏥",
    color: "#FFF5F5",
    content: `
## LECTURA: Necesito pastillas

> *Carlos está en la farmacia porque está enfermo.*
> **Farmacéutico:** Hola, buenos días. ¿En qué puedo ayudarle?
> **Carlos:** Hola. Me duele la cabeza mucho y tengo fiebre. Necesito pastillas, por favor.
> **Farmacéutico:** Sí, claro. Tome estas pastillas cada ocho (8) horas con un poco de agua.
> **Carlos:** ¿Cuánto cuesta?
> **Farmacéutico:** Son cinco euros.
> **Carlos:** Aquí tiene. Muchas gracias.

### Lee la conversación con atención y responde al ejercicio.
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Qué le pasa a Carlos?",
        options: ["Le duele la cabeza y tiene fiebre", "Le duele el estómago", "Tiene hambre y necesita comer"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "¿Cada cuántas horas tiene que tomar las pastillas?",
        options: ["Cada 5 horas", "Cada 8 horas", "Cada 10 horas"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "¿Cuánto dinero paga Carlos?",
        options: ["Diez euros", "Ocho euros", "Cinco euros"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "b1-gram-pasado",
    topic: "Tiempos del Pasado",
    title: "El Pretérito Indefinido",
    level: "B1",
    category: "Gramática",
    description: "Aprende a hablar de acciones terminadas en un momento específico del pasado.",
    emoji: "⏳",
    color: "#FEFCBF",
    content: `
## El Pretérito Indefinido

Usamos este tiempo verbal para acciones que empezaron y terminaron en el pasado (ayer, la semana pasada, en 2010).

### Verbos Regulares (-AR)
*   Yo habl**é**
*   Tú habl**aste**
*   Él / Ella habl**ó**
*   Nosotros habl**amos**
*   Ellos habl**aron**

**Ejemplo:** *Ayer yo hablé con mi madre por teléfono.*

### Verbos Regulares (-ER / -IR)
*   Yo com**í** / viv**í**
*   Tú com**iste** / viv**iste**
*   Él / Ella com**ió** / viv**ió**

**Ejemplo:** *El año pasado viví en Madrid.*
    `,
    exercises: [
      {
        id: "ex1",
        question: "Ayer yo _____ (comer) una manzana.",
        options: ["comí", "comía", "como"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "La semana pasada ellos _____ (viajar) a Francia.",
        options: ["viajan", "viajaron", "viajaste"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "b2-gram-subjuntivo",
    topic: "El Subjuntivo",
    title: "Introducción al Subjuntivo",
    level: "B2",
    category: "Gramática",
    description: "Expresa deseos, dudas, emociones y probabilidades usando el presente de subjuntivo.",
    emoji: "💭",
    color: "#E3EEF9",
    content: `
## El Presente de Subjuntivo

El subjuntivo no es un tiempo verbal, es un *modo*. Lo usamos para expresar cosas que no son hechos seguros, sino ideas, deseos o sentimientos.

### Usos comunes:
1.  **Deseos:** Quiero que tú **vengas** a mi fiesta.
2.  **Emociones:** Me alegra que **estés** bien.
3.  **Duda / Probabilidad:** Es posible que mañana **llueva**.
4.  **Recomendaciones:** Te recomiendo que **estudies** más.

### Formación básica (Verbos Regulares)
*   **-AR** (hablar) -> que yo habl**e**, que tú habl**es**...
*   **-ER / -IR** (comer / vivir) -> que yo com**a**, que tú viv**as**...
    `,
    exercises: [
      {
        id: "ex1",
        question: "Espero que tú _____ (aprobar) el examen de español.",
        options: ["apruebas", "apruebes", "aprobar"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "No creo que Juan _____ (venir) hoy.",
        options: ["viene", "venga", "vino"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "c1-vocab-modismos",
    topic: "Expresiones Idiomáticas",
    title: "Modismos y Frases Hechas",
    level: "C1",
    category: "Vocabulario",
    description: "Aprende expresiones idiomáticas comunes para hablar con gran naturalidad y entender a los nativos.",
    emoji: "🗣️",
    color: "#F3E8FF",
    content: `
## Expresiones Idiomáticas

Para hablar como un nativo, es esencial conocer las frases hechas que se usan en el día a día.

*   **Tomar el pelo:** Engañar o bromear con alguien.
    *   *Ejemplo: ¿Cien euros por este café? ¡Me estás tomando el pelo!*
*   **Echar una mano:** Ayudar a alguien.
    *   *Ejemplo: ¿Me echas una mano con estas cajas? Pesan mucho.*
*   **Estar en las nubes:** Estar despistado o pensando en otras cosas.
    *   *Ejemplo: Juan nunca escucha en clase, siempre está en las nubes.*
*   **Costar un ojo de la cara:** Ser muy caro.
    *   *Ejemplo: Me encanta ese coche, pero debe costar un ojo de la cara.*
    `,
    exercises: [
      {
        id: "ex1",
        question: "Si alguien 'te toma el pelo', esa persona está...",
        options: ["Cortándote el cabello", "Bromeando contigo o engañándote", "Enojada contigo"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Si necesitas que tu amigo te ayude, le dices:",
        options: ["Échame una mano", "Estoy en las nubes", "Me cuesta un ojo"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "c2-comp-literatura",
    topic: "Literatura y Cultura",
    title: "Análisis Literario Breve",
    level: "C2",
    category: "Comprensión",
    description: "Lee textos literarios complejos, comprende dobles sentidos, ironía y vocabulario muy avanzado.",
    emoji: "📚",
    color: "#FFF4E5",
    content: `
## Lectura Avanzada

Analicemos un pequeño fragmento que utiliza un lenguaje rico en matices:

> *"La ciudad amaneció envuelta en un manto de niebla tan espeso que hasta los pensamientos parecían desvanecerse antes de tomar forma humana. Era un letargo colectivo, una pausa impuesta por la marea gris que disolvía contornos y certezas."*

### Análisis
Este texto no solo describe el clima (la niebla), sino que lo utiliza como metáfora del estado psicológico de los habitantes ("letargo colectivo", "disolvía certezas"). Hay una personificación sutil ("pausa impuesta") y un vocabulario abstracto ("contornos", "letargo").
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Qué sugiere la expresión 'los pensamientos parecían desvanecerse' en este contexto?",
        options: ["Que la gente sufría de amnesia.", "Una sensación de confusión, irrealidad y letargo mental.", "Que la niebla era tóxica."],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "La palabra 'letargo' se puede sustituir más adecuadamente por:",
        options: ["Alegría", "Adormecimiento o inactividad profunda", "Movimiento frenético"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a1-vocab-horas-fechas",
    topic: "Fechas y Horas",
    title: "Vocabulario: Días, Meses y la Hora",
    level: "A1",
    category: "Vocabulario",
    description: "Aprende los días de la semana, los meses y cómo decir la hora en español.",
    emoji: "📅",
    color: "#E3EEF9",
    vocabulary: [
      { word: "Lunes", translations: { en: "Monday", ar: "الاثنين", uk: "Понеділок", fr: "Lundi" }, emoji: "1️⃣", color: "#E3EEF9" },
      { word: "Martes", translations: { en: "Tuesday", ar: "الثلاثاء", uk: "Вівторок", fr: "Mardi" }, emoji: "2️⃣", color: "#E3EEF9" },
      { word: "Enero", translations: { en: "January", ar: "يناير", uk: "Січень", fr: "Janvier" }, emoji: "❄️", color: "#E3EEF9" },
      { word: "La hora", translations: { en: "The time / hour", ar: "الوقت", uk: "Час", fr: "L'heure" }, emoji: "⌚", color: "#E3EEF9" }
    ],
    content: `
## Los Días de la Semana
Lunes, Martes, Miércoles, Jueves, Viernes, Sábado y Domingo.

## La Hora
Para preguntar la hora: **¿Qué hora es?** <trans en="(What time is it?)" ar="(كم الساعة؟)" uk="(Котра година?)" fr="(Quelle heure est-il ?)"/>
Para responder: **Son las dos.** (2:00) o **Es la una.** (1:00).
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Qué día va después del lunes?",
        options: ["Miércoles", "Martes", "Sábado"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Cómo preguntas la hora?",
        options: ["¿Cómo te llamas?", "¿Dónde estás?", "¿Qué hora es?"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "a1-vocab-profesiones",
    topic: "Profesiones",
    title: "Vocabulario: Las Profesiones",
    level: "A1",
    category: "Vocabulario",
    description: "Aprende nombres de profesiones comunes como médico, profesor o cocinero.",
    emoji: "💼",
    color: "#FCE8E8",
    vocabulary: [
      { word: "El médico / La médica", translations: { en: "Doctor", ar: "طبيب", uk: "Лікар", fr: "Médecin" }, emoji: "🩺", color: "#FCE8E8" },
      { word: "El profesor / La profesora", translations: { en: "Teacher", ar: "معلم", uk: "Вчитель", fr: "Professeur" }, emoji: "👨‍🏫", color: "#FCE8E8" },
      { word: "El cocinero / La cocinera", translations: { en: "Cook / Chef", ar: "طباخ", uk: "Кухар", fr: "Cuisinier" }, emoji: "🍳", color: "#FCE8E8" }
    ],
    content: `
## ¿A qué te dedicas?
Para hablar de nuestra profesión usamos el verbo SER.
*   **Soy** profesor. <trans en="(I am a teacher)" ar="(أنا معلم)" uk="(Я вчитель)" fr="(Je suis professeur)"/>
*   Ella **es** médica. <trans en="(She is a doctor)" ar="(هي طبيبة)" uk="(Вона лікар)" fr="(Elle est médecin)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "La persona que hace la comida es el...",
        options: ["Médico", "Profesor", "Cocinero"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "a1-vocab-familia",
    topic: "Familia",
    title: "La Familia y Descripción Física",
    level: "A1",
    category: "Vocabulario",
    description: "Habla de tu familia (madre, padre) y describe cómo son (alto, bajo).",
    emoji: "👨‍👩‍👦",
    color: "#E2F3E7",
    vocabulary: [
      { word: "La madre", translations: { en: "Mother", ar: "أم", uk: "Мати", fr: "Mère" }, emoji: "👩", color: "#E2F3E7" },
      { word: "El padre", translations: { en: "Father", ar: "أب", uk: "Батько", fr: "Père" }, emoji: "👨", color: "#E2F3E7" },
      { word: "El hermano / La hermana", translations: { en: "Brother / Sister", ar: "أخ / أخت", uk: "Брат / Сестра", fr: "Frère / Sœur" }, emoji: "👦", color: "#E2F3E7" },
      { word: "Alto / Alta", translations: { en: "Tall", ar: "طويل", uk: "Високий", fr: "Grand" }, emoji: "📏", color: "#E2F3E7" }
    ],
    content: `
## Mi Familia
*   Mi mamá es **la madre**.
*   Mi papá es **el padre**.
*   Los hijos son **los hermanos**.

## Descripciones Físicas
Usamos el verbo SER para describir:
*   Mi hermano **es alto**. (Masculino)
*   Mi hermana **es alta**. (Femenina)
    `,
    exercises: [
      {
        id: "ex1",
        question: "El papá en español se dice también...",
        options: ["El padre", "El hermano", "El abuelo"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Para decir que tu hermana tiene mucha altura dices: Mi hermana es...",
        options: ["alta", "alto", "baja"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a1-gram-preguntas",
    topic: "Preguntas",
    title: "Preguntas Simples (Qué, Quién, Dónde)",
    level: "A1",
    category: "Gramática",
    description: "Aprende a formular preguntas básicas para pedir información.",
    emoji: "❓",
    color: "#FFF4E5",
    vocabulary: [
      { word: "¿Qué?", translations: { en: "What?", ar: "ماذا؟", uk: "Що?", fr: "Quoi ?" }, emoji: "❓", color: "#FFF4E5" },
      { word: "¿Quién?", translations: { en: "Who?", ar: "من؟", uk: "Хто?", fr: "Qui ?" }, emoji: "👤", color: "#FFF4E5" },
      { word: "¿Dónde?", translations: { en: "Where?", ar: "أين؟", uk: "Де?", fr: "Où ?" }, emoji: "📍", color: "#FFF4E5" },
      { word: "¿Cuándo?", translations: { en: "When?", ar: "متى؟", uk: "Коли?", fr: "Quand ?" }, emoji: "⏳", color: "#FFF4E5" }
    ],
    content: `
## Palabras para Preguntar
Para hacer preguntas necesitas estas palabras. ¡Recuerda que llevan tilde (´) y se usa el signo (¿?)!

*   **¿Qué es esto?** <trans en="(What is this?)" ar="(ما هذا؟)" uk="(Що це?)" fr="(Qu'est-ce que c'est ?)"/>
*   **¿Quién eres tú?** <trans en="(Who are you?)" ar="(من أنت؟)" uk="(Хто ти?)" fr="(Qui es-tu ?)"/>
*   **¿Dónde está el baño?** <trans en="(Where is the bathroom?)" ar="(أين الحمام؟)" uk="(Де туалет?)" fr="(Où est la salle de bain ?)"/>
*   **¿Cuándo llegas?** <trans en="(When do you arrive?)" ar="(متى تصل؟)" uk="(Коли ти прибуваєш?)" fr="(Quand arrives-tu ?)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "Si quieres saber el lugar, preguntas...",
        options: ["¿Quién?", "¿Qué?", "¿Dónde?"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "Para preguntar por una persona usas:",
        options: ["¿Qué?", "¿Quién?", "¿Cuándo?"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a1-vocab-comida-casa",
    topic: "Cotidianidad",
    title: "Vocabulario: La Casa y la Comida",
    level: "A1",
    category: "Vocabulario",
    description: "Aprende el nombre de algunas partes de la casa y alimentos muy comunes.",
    emoji: "🍞",
    color: "#EBF8FF",
    vocabulary: [
      { word: "El pan", translations: { en: "Bread", ar: "خبز", uk: "Хліб", fr: "Pain" }, emoji: "🍞", color: "#EBF8FF" },
      { word: "El agua", translations: { en: "Water", ar: "ماء", uk: "Вода", fr: "Eau" }, emoji: "💧", color: "#EBF8FF" },
      { word: "El dormitorio", translations: { en: "Bedroom", ar: "غرفة نوم", uk: "Спальня", fr: "Chambre" }, emoji: "🛏️", color: "#EBF8FF" },
      { word: "La cocina", translations: { en: "Kitchen", ar: "مطبخ", uk: "Кухня", fr: "Cuisine" }, emoji: "🍳", color: "#EBF8FF" }
    ],
    content: `
## Comida Básica
*   Quiero comer **pan**.
*   Necesito beber **agua**.

## La Casa
La casa tiene varias partes, como **el dormitorio** (para dormir) y **la cocina** (para cocinar).
    `,
    exercises: [
      {
        id: "ex1",
        question: "El lugar donde duermes se llama:",
        options: ["El dormitorio", "La cocina", "El pan"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a2-gram-preterito-perfecto",
    topic: "Tiempos del Pasado",
    title: "El Pretérito Perfecto",
    level: "A2",
    category: "Gramática",
    description: "Habla sobre cosas que has hecho hoy, esta semana o en tu vida en general.",
    emoji: "📅",
    color: "#FEFCBF",
    content: `
## El Pretérito Perfecto (He comido...)

Usamos este tiempo para hablar de acciones pasadas que se conectan con el presente ("hoy", "esta mañana", "alguna vez"). Se forma con el verbo **HABER** + el **Participio**.

### Verbo Haber
*   Yo **he**
*   Tú **has**
*   Él/Ella **ha**
*   Nosotros **hemos**
*   Ellos **han**

### Participios Regulares
*   **-AR** -> -ado (hablar -> hablado, trabajar -> trabajado)
*   **-ER / -IR** -> -ido (comer -> comido, vivir -> vivido)

**Ejemplos:**
*   **Hoy he comido** pollo.
*   ¿Alguna vez **has estado** en España?
    `,
    exercises: [
      {
        id: "ex1",
        question: "Hoy nosotros _______ (trabajar) mucho.",
        options: ["hemos trabajado", "han trabajado", "ha trabajado"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "¿Tú _____ (estar) en Marruecos alguna vez?",
        options: ["ha estado", "has estado", "he estado"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a2-gram-futuro-proximo",
    topic: "Planes Futuros",
    title: "El Futuro Próximo (Voy a...)",
    level: "A2",
    category: "Gramática",
    description: "Habla de tus planes y de cosas que van a pasar usando 'IR + a + infinitivo'.",
    emoji: "🔮",
    color: "#E2F3E7",
    content: `
## Ir + a + Infinitivo

Para hablar de planes (este fin de semana, mañana, la próxima semana), en el nivel A2 usamos mucho el "Futuro Próximo".

**Fórmula:** Verbo IR en presente + a + la acción (sin conjugar).

*   Yo **voy a viajar** a Francia.
*   Tú **vas a estudiar** español.
*   Él/Ella **va a trabajar** mañana.
*   Nosotros **vamos a comer** en un restaurante.
*   Ellos **van a dormir** temprano.
    `,
    exercises: [
      {
        id: "ex1",
        question: "El fin de semana, yo _______ español.",
        options: ["voy a estudio", "voy a estudiar", "voy estudiar"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Mañana nosotros _____ ir al cine.",
        options: ["vamos a", "vamos", "va a"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a2-gram-comparaciones",
    topic: "Comparaciones",
    title: "Hacer Comparaciones Simples",
    level: "A2",
    category: "Gramática",
    description: "Aprende a comparar cosas: más alto que, menos grande que, tan bueno como...",
    emoji: "⚖️",
    color: "#F3E8FF",
    content: `
## Comparar en Español

Para comparar dos cosas o personas, usamos estas estructuras:

### Más / Menos ... que
*   Málaga es **más grande que** mi pueblo.
*   El autobús es **menos rápido que** el tren.

### Mejor / Peor (Irregulares)
No decimos "más bueno". Decimos **mejor**.
No decimos "más malo". Decimos **peor**.
*   Esta comida es **mejor que** la otra.

### Tan ... como (Igualdad)
*   Mi hermano es **tan alto como** tú. (Tienen la misma altura).
    `,
    exercises: [
      {
        id: "ex1",
        question: "Un avión es ______ rápido que un coche.",
        options: ["más", "mucho", "menos"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Mi inglés es ______ que mi español. (Es 'más bueno')",
        options: ["más bueno", "mejor", "peor"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a2-vocab-restaurante",
    topic: "Restaurante",
    title: "Supervivencia: En el Restaurante",
    level: "A2",
    category: "Vocabulario",
    description: "Aprende a pedir comida y pagar en un bar o restaurante.",
    emoji: "🍽️",
    color: "#FFF5F5",
    vocabulary: [
      { word: "El menú / La carta", translations: { en: "Menu", ar: "قائمة الطعام", uk: "Меню", fr: "Menu" }, emoji: "🧾", color: "#FFF5F5" },
      { word: "La cuenta", translations: { en: "The bill", ar: "الفاتورة", uk: "Рахунок", fr: "L'addition" }, emoji: "💶", color: "#FFF5F5" },
      { word: "Para beber", translations: { en: "To drink", ar: "للشرب", uk: "Пити", fr: "À boire" }, emoji: "🥤", color: "#FFF5F5" },
      { word: "Para comer", translations: { en: "To eat", ar: "للأكل", uk: "Їсти", fr: "À manger" }, emoji: "🍽️", color: "#FFF5F5" }
    ],
    content: `
## Pedir en un Restaurante

Camarero: **¿Qué van a tomar?**
Tú: **Para comer quiero** arroz con pollo, por favor.
Camarero: **¿Y para beber?**
Tú: **Para beber quiero** agua.

Al final de la comida:
Tú: **La cuenta, por favor.** (Para poder pagar).
    `,
    exercises: [
      {
        id: "ex1",
        question: "Cuando terminas de comer y quieres pagar, dices...",
        options: ["La carta, por favor.", "La cuenta, por favor.", "El menú, por favor."],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "El camarero te pregunta \"¿Qué van a _______?\" y respondes que quieres agua.",
        options: ["beber", "comer", "cuenta"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "b1-gram-futuro-condicional",
    topic: "Tiempos Verbales",
    title: "El Futuro y el Condicional",
    level: "B1",
    category: "Gramática",
    description: "Aprende a hacer predicciones y a hablar de situaciones hipotéticas o deseos.",
    emoji: "🚀",
    color: "#E2F3E7",
    content: `
## El Futuro Simple

Para cosas que pasarán seguro o para hacer predicciones. Se añade la terminación al infinitivo (hablar -> hablaré).

*   Yo **viajaré** mañana.
*   Tú **vivirás** en España.
*   Nosotros **estudiaremos** mucho.

## El Condicional Simple

Para situaciones hipotéticas, deseos o dar consejos ("Si pudiera, lo haría").

*   Me **gustaría** tener un perro. (Deseo)
*   Yo en tu lugar **hablaría** con él. (Consejo)
    `,
    exercises: [
      {
        id: "ex1",
        question: "Para hablar de algo que pasará en el año 2050, uso:",
        options: ["Yo hablaría", "Yo hablé", "Yo hablaré"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "\"Me _______ viajar a Marruecos un día.\" (Es un deseo)",
        options: ["gustaré", "gustaría", "gustaba"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "b1-vocab-opiniones",
    topic: "Opiniones y Consejos",
    title: "Dar Consejos y Expresar Opiniones",
    level: "B1",
    category: "Vocabulario",
    description: "Expresa lo que piensas sobre diferentes temas y da recomendaciones a otros.",
    emoji: "💡",
    color: "#FFF4E5",
    content: `
## Expresar Opinión

Para decir lo que piensas de forma clara:
*   **En mi opinión**, el español es útil.
*   **Creo que** esta ciudad es hermosa.
*   **Me parece que** va a llover.

## Dar Consejos

Cuando alguien tiene un problema:
*   **Yo que tú,** estudiaría más. (Condicional)
*   **Deberías** descansar.
*   **Te aconsejo que** hables con él.
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Cuál de estas frases es para dar una opinión?",
        options: ["Deberías dormir.", "En mi opinión, es una buena idea.", "Me duele la cabeza."],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Un amigo está muy cansado. ¿Qué le dices?",
        options: ["Deberías trabajar más.", "Creo que es bueno.", "Yo que tú, descansaría."],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "b1-gram-conectores",
    topic: "Conectores",
    title: "Conectores del Discurso",
    level: "B1",
    category: "Gramática",
    description: "Conecta tus ideas usando 'porque', 'aunque', 'sin embargo' para hablar mejor.",
    emoji: "🔗",
    color: "#EBF8FF",
    content: `
## Unir nuestras frases

Los conectores son palabras que unen ideas y hacen que hables de forma más compleja.

*   **Porque** (Causa): Estudio español **porque** vivo aquí.
*   **Aunque** (Concesión / Obstáculo): Voy a ir a trabajar **aunque** estoy cansado.
*   **Sin embargo** (Contraste): Me gusta la ciudad. **Sin embargo**, es muy cara.
*   **Por eso** (Consecuencia): Está lloviendo mucho, **por eso** me quedo en casa.
    `,
    exercises: [
      {
        id: "ex1",
        question: "No tengo dinero, _______ no compro el teléfono.",
        options: ["porque", "por eso", "aunque"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Me encanta el pastel, _______ estoy a dieta.",
        options: ["sin embargo", "por eso", "porque"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "b2-gram-hipotesis",
    topic: "Hipótesis",
    title: "Expresión de Hipótesis y Probabilidad",
    level: "B2",
    category: "Gramática",
    description: "Aprende a formular suposiciones complejas usando el condicional y el subjuntivo.",
    emoji: "🎲",
    color: "#F3E8FF",
    content: `
## Expresando Probabilidad e Hipótesis

En el nivel B2, no afirmamos cosas directamente, sino que a menudo evaluamos su probabilidad.

### Probabilidad en Presente
Para indicar que algo es probable pero no seguro:
*   **Es probable que** + Subjuntivo (Es probable que *llueva* hoy).
*   **Quizás / Tal vez** + Subjuntivo (Quizás *venga* más tarde).
*   **A lo mejor** + Indicativo (A lo mejor *viene* más tarde).

### Hipótesis Irreales (Si + Imperfecto Subjuntivo + Condicional)
Situaciones que no son reales en el presente:
*   Si **tuviera** dinero, **compraría** una casa. (Pero no tengo).
*   Si **hablara** francés, **viviría** en París.
    `,
    exercises: [
      {
        id: "ex1",
        question: "\"A lo mejor\" va siempre seguido de...",
        options: ["Subjuntivo", "Indicativo", "Infinitivo"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Completa la hipótesis irreal: \"Si yo _______ el presidente, cambiaría la ley.\"",
        options: ["soy", "fuera", "sería"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "b2-comp-debates",
    topic: "Comprensión",
    title: "Debate: Texto Argumentativo",
    level: "B2",
    category: "Comprensión",
    description: "Comprende textos de nivel avanzado y practica cómo defender una postura sobre temas sociales.",
    emoji: "⚖️",
    color: "#FFF5F5",
    content: `
## LECTURA: El impacto de la tecnología

> *"Es innegable que la tecnología ha facilitado nuestras vidas en innumerables aspectos. Sin embargo, existe un debate creciente sobre si estamos perdiendo habilidades sociales esenciales. Por un lado, los defensores de la digitalización argumentan que nunca hemos estado tan conectados. Por otro lado, los críticos advierten sobre una epidemia de soledad disfrazada de hiperconexión, donde preferimos enviar un mensaje antes que entablar una conversación frente a frente."*

### Análisis del Debate
En B2 debes identificar las **dos posturas** en un debate y los conectores que estructuran el argumento ("Por un lado...", "Por otro lado...").
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Qué argumentan los críticos de la digitalización en el texto?",
        options: ["Que la tecnología es inútil.", "Que provoca una falsa conexión y aislamiento social.", "Que deberíamos prohibir los teléfonos."],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "La expresión 'epidemia de soledad disfrazada' es un ejemplo de...",
        options: ["Léxico abstracto y metafórico propio de nivel avanzado.", "Gramática incorrecta.", "Vocabulario básico de nivel A1."],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "b2-vocab-formal-informal",
    topic: "Registros",
    title: "Estilo Formal e Informal",
    level: "B2",
    category: "Vocabulario",
    description: "Adapta tu forma de hablar al contexto: escribir un email formal vs charlar con amigos.",
    emoji: "👔",
    color: "#E2E8F0",
    content: `
## Adaptar el Registro (Tú vs Usted)

En un nivel alto, debes saber cambiar de vocabulario dependiendo de con quién hablas.

### Estilo Informal (Amigos, familia, redes sociales)
*   Léxico relajado, uso del "Tú".
*   *¡Hola! ¿Qué tal todo? Escríbeme cuando puedas.*

### Estilo Formal (Trabajo, instituciones, solicitudes)
*   Uso de "Usted", saludos formales y condicional de cortesía.
*   *Estimado Sr. Pérez: Le escribo para solicitar información... Atentamente, Juan.*
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Cuál de estas opciones es adecuada para el inicio de un correo electrónico formal al director de una empresa?",
        options: ["¡Qué pasa jefe!", "Estimado Director:", "Hola, amigo:"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Si quieres pedir un favor de forma muy educada (formal), dices:",
        options: ["Hazme este favor.", "¿Podría usted ayudarme, por favor?", "¡Ayuda!"],
        correctAnswer: 1
      }
    ]
  }
,
  {
    id: "b1-comp-narracion",
    topic: "Narración",
    title: "Lectura: Un viaje inolvidable",
    level: "B1",
    category: "Comprensión",
    description: "Aprende a narrar sucesos del pasado y a seguir el hilo de una historia.",
    emoji: "✈️",
    color: "#FFF4E5",
    vocabulary: [
      { word: "El viaje", translations: { en: "The trip / travel", ar: "الرحلة", uk: "Подорож", fr: "Le voyage" }, emoji: "🧳", color: "#FFF4E5" },
      { word: "El recuerdo", translations: { en: "The memory", ar: "الذكرى", uk: "Спогад", fr: "Le souvenir" }, emoji: "💭", color: "#FFF4E5" },
      { word: "Planificar", translations: { en: "To plan", ar: "التخطيط", uk: "Планувати", fr: "Planifier" }, emoji: "📅", color: "#FFF4E5" }
    ],
    content: `
## LECTURA: Recuerdos de Andalucía

> *"El verano pasado, Lucía **planificó** un viaje muy especial a Málaga. Nunca antes **había visitado** el sur de España. Cuando **llegó** al aeropuerto, el sol brillaba con fuerza. Durante dos semanas, caminó por las calles históricas y probó los platos típicos. Al final del viaje, se dio cuenta de que ese sería un **recuerdo** imborrable."*

### Estructura de la narración en pasado:
Para contar historias, combinamos los pasados:
*   **Pretérito Indefinido** (acciones completas): *Llegó*, *caminó*.
*   **Pretérito Imperfecto** (descripción y circunstancias): *Brillaba*.
*   **Pretérito Pluscuamperfecto** (acción anterior a otra en el pasado): *Había visitado*.
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Qué tiempo verbal describe la circunstancia o el clima en el pasado?",
        options: ["Pretérito Indefinido", "Pretérito Imperfecto", "Presente de indicativo"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Había visitado Lucía el sur de España antes de este viaje?",
        options: ["Sí, muchas veces", "No, era su primera vez", "El texto no lo menciona"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "b2-gram-subjuntivo-avanzado",
    topic: "Subjuntivo",
    title: "Subjuntivo: Oraciones Temporales y Concesivas",
    level: "B2",
    category: "Gramática",
    description: "Usa el subjuntivo para hablar del futuro con 'cuando' y expresar contraste con 'aunque'.",
    emoji: "⏳",
    color: "#EBF8FF",
    vocabulary: [
      { word: "Cuando", translations: { en: "When", ar: "عندما", uk: "Коли", fr: "Quand" }, emoji: "⏰", color: "#EBF8FF" },
      { word: "Aunque", translations: { en: "Although", ar: "بالرغم من", uk: "Хоча", fr: "Bien que / Aunque" }, emoji: "⚖️", color: "#EBF8FF" },
      { word: "Tan pronto como", translations: { en: "As soon as", ar: "بمجرد أن", uk: "Як тільки", fr: "Dès que" }, emoji: "⚡", color: "#EBF8FF" }
    ],
    content: `
## Oraciones Temporales y Concesivas con Subjuntivo

En el nivel B2, aprendemos que ciertas conjunciones cambian de modo (indicativo o subjuntivo) según la intención.

### 1. Oraciones Temporales (Cuando, Tan pronto como)
*   **Indicativo** (Rutina o Pasado): *Cuando voy a Málaga, como espetos.* (Rutina)
*   **Subjuntivo** (Acción Futura): *Cuando **tenga** tiempo, te llamaré.* (Futuro)

### 2. Oraciones Concesivas (Aunque)
*   **Indicativo** (Hecho real conocido): *Aunque está lloviendo, voy a salir.* (Sé que llueve)
*   **Subjuntivo** (Hipótesis o indiferencia): *Aunque **llueva** mañana, iré al parque.* (No me importa si llueve o no)
    `,
    exercises: [
      {
        id: "ex1",
        question: "Completa: 'Te enviaré un mensaje cuando _______ a casa'. (Acción futura)",
        options: ["llegue", "llego", "llegará"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Completa: 'Aunque no _______ dinero mañana, seré feliz'. (Hipótesis futura)",
        options: ["tengo", "tenga", "tuviera"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "c1-comp-textos-complejos",
    topic: "Textos Complejos",
    title: "Comprensión: Editorial de Prensa",
    level: "C1",
    category: "Comprensión",
    description: "Analiza un texto formal sobre el cambio climático para comprender sutilezas y registros.",
    emoji: "📰",
    color: "#E2F3E7",
    vocabulary: [
      { word: "El desafío", translations: { en: "The challenge", ar: "التحدي", uk: "Виклик", fr: "Le défi" }, emoji: "⛰️", color: "#E2F3E7" },
      { word: "A largo plazo", translations: { en: "Long term", ar: "على المدى الطويل", uk: "على المدى البعيد", fr: "À long terme" }, emoji: "📈", color: "#E2F3E7" },
      { word: "El recurso", translations: { en: "The resource", ar: "المورد", uk: "Ресурс", fr: "La ressource" }, emoji: "💧", color: "#E2F3E7" }
    ],
    content: `
## LECTURA: El porvenir ecológico

> *"El calentamiento global representa, sin lugar a dudas, el mayor **desafío** al que se enfrenta la humanidad en el siglo XXI. La transición hacia fuentes de energía renovables no debe concebirse únicamente como una alternativa económica, sino como una obligación moral para salvaguardar nuestros **recursos** naturales. Las políticas adoptadas hoy determinarán el bienestar social **a largo plazo**, por lo que aplazar las reformas estructurales constituiría una negligencia imperdonable."*

### Comprensión en C1
En este nivel, debes comprender:
*   **El tono**: Formal, persuasivo y analítico.
*   **Las sutilezas**: Expresiones como *sin lugar a dudas* (absolutely) o *negligencia imperdonable* (unpardonable negligence).
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Cuál es el propósito primordial del texto?",
        options: ["Criticar el consumo de energía", "Defender la transición ecológica como deber moral y necesidad a largo plazo", "Promover la industria automotriz"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Qué connota la frase 'aplazar las reformas'?",
        options: ["Postergar los cambios necesarios", "Acelerar los procesos gubernamentales", "Disminuir los impuestos"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "c1-gram-perifrasis",
    topic: "Perífrasis Verbales",
    title: "Gramática: Perífrasis Verbales Avanzadas",
    level: "C1",
    category: "Gramática",
    description: "Aprende a usar construcciones verbales precisas como 'soler', 'acabar de' o 'llevar + gerundio'.",
    emoji: "⚙️",
    color: "#F3E8FF",
    vocabulary: [
      { word: "Soler", translations: { en: "To usually do", ar: "غالباً ما يفعل", uk: "Зазвичай робити", fr: "Avoir l'habitude de" }, emoji: "🔄", color: "#F3E8FF" },
      { word: "Llevar + gerundio", translations: { en: "To have been doing", ar: "يقوم به desde hace tiempo", uk: "Робити протягом часу", fr: "Faire depuis un moment" }, emoji: "⏳", color: "#F3E8FF" },
      { word: "Acabar de", translations: { en: "To have just done", ar: "انتهى للتو من", uk: "Щойно зробити", fr: "Venir de" }, emoji: "🏁", color: "#F3E8FF" }
    ],
    content: `
## Perífrasis Verbales Avanzadas

Las perífrasis son uniones de dos o más verbos que funcionan como una sola unidad para añadir matices precisos de tiempo, duración u obligación.

### 1. Perífrasis Durativas
*   **Llevar + Gerundio** (Acción que comenzó en el pasado y continúa):
    *   *Llevo tres años estudiando español.* <trans en="(I have been studying Spanish for three years)" ar="(أنا أدرس الإسبانية منذ ثلاث سنوات)" uk="(Я вивчаю іспанську вже три роки)" fr="(J'étudie l'espagnol depuis trois ans)"/>
*   **Ir + Gerundio** (Proceso gradual y lento):
    *   *Poco a poco voy entendiendo la gramática.*

### 2. Perífrasis Temporales
*   **Acabar de + Infinitivo** (Acción recién terminada):
    *   *Acabo de llegar a la oficina.* <trans en="(I have just arrived at the office)" ar="(لقد وصلت للتو إلى المكتب)" uk="(Я щойно прийшов в офіс)" fr="(Je viens d'arriver au bureau)"/>
*   **Soler + Infinitivo** (Frecuencia / Hábito):
    *   *Suelo desayunar café con leche.*
    `,
    exercises: [
      {
        id: "ex1",
        question: "Si empezaste a trabajar en 2020 y sigues allí, dices: '_______ trabajando aquí desde 2020'.",
        options: ["Suelo", "Llevo", "Acabo de"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Qué expresa la perífrasis 'acabar de + infinitivo'?",
        options: ["Una acción habitual", "Una acción que se completó recientemente", "Un plan futuro"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "c1-gram-estilo-indirecto",
    topic: "Estilo Indirecto",
    title: "Gramática: Estilo Indirecto en el Pasado",
    level: "C1",
    category: "Gramática",
    description: "Aprende a reportar lo que otros dijeron cambiando los tiempos verbales adecuadamente.",
    emoji: "💬",
    color: "#FFF5F5",
    vocabulary: [
      { word: "Asegurar", translations: { en: "To assure / state", ar: "يؤكد", uk: "Запевняти", fr: "Assurer" }, emoji: "🗣️", color: "#FFF5F5" },
      { word: "Preguntar", translations: { en: "To ask", ar: "يسأل", uk: "Запитувати", fr: "Demander" }, emoji: "❓", color: "#FFF5F5" },
      { word: "Mencionar", translations: { en: "To mention", ar: "يذكر", uk: "Згадувати", fr: "Mentionner" }, emoji: "📝", color: "#FFF5F5" }
    ],
    content: `
## El Estilo Indirecto (Reported Speech)

Cuando queremos contar a alguien lo que otra persona ha dicho, usamos verbos de transmisión (decir, asegurar, preguntar) en pasado. Esto provoca cambios en los tiempos verbales.

| Estilo Directo (Presente) | Estilo Indirecto (Pasado) |
|---|---|
| *"Tengo hambre."* | Dijo que **tenía** hambre (Imperfecto). |
| *"Fui al mercado."* (Indefinido) | Dijo que **había ido** al mercado (Pluscuamperfecto). |
| *"Compraré el coche."* (Futuro) | Dijo que **compraría** el coche (Condicional). |
| *"¡Hazlo!"* (Imperativo) | Dijo que lo **hiciera** (Imperfecto de Subjuntivo). |
    `,
    exercises: [
      {
        id: "ex1",
        question: "Si ayer tu hermano te dijo: 'No puedo ir', hoy dices: 'Él dijo que no _______ ir'.",
        options: ["pudo", "podía", "puede"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Si alguien dice: 'Llamaré mañana', el estilo indirecto correcto en pasado es: 'Dijo que _______ al día siguiente'.",
        options: ["llame", "llamará", "llamaría"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "c1-vocab-marcadores",
    topic: "Marcadores",
    title: "Vocabulario: Marcadores Discursivos",
    level: "C1",
    category: "Vocabulario",
    description: "Organiza tus ideas de forma fluida y profesional usando conectores de nivel avanzado.",
    emoji: "🧠",
    color: "#FEFCBF",
    vocabulary: [
      { word: "No obstante", translations: { en: "Nevertheless", ar: "ومع ذلك", uk: "Проте", fr: "Néanmoins" }, emoji: "⚖️", color: "#FEFCBF" },
      { word: "Por consiguiente", translations: { en: "Therefore / Consequently", ar: "بناء على ذلك", uk: "Отже", fr: "Par conséquent" }, emoji: "👉", color: "#FEFCBF" },
      { word: "En resumen", translations: { en: "In summary", ar: "باختصار", uk: "Підсумовуючи", fr: "En résumé" }, emoji: "📌", color: "#FEFCBF" }
    ],
    content: `
## Marcadores Discursivos Avanzados

Los marcadores discursivos sirven para estructurar un discurso formal, facilitando la cohesión y claridad de nuestras exposiciones orales y escritas.

### 1. Contraste u Oposición
*   **No obstante** (Formal para *sin embargo*): *El presupuesto es limitado. **No obstante**, completaremos el proyecto.*
*   **A pesar de (que)**: *A pesar de las dificultades, logramos el éxito.*

### 2. Causa y Consecuencia
*   **Por consiguiente** (Formal para *por eso*): *No se cumplieron los plazos, **por consiguiente** se suspende la entrega.*
*   **Puesto que** (Formal para *porque*): *Puesto que nadie asistió, cancelamos la reunión.*
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Cuál de estos conectores expresa consecuencia en un registro formal?",
        options: ["Puesto que", "Por consiguiente", "No obstante"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Completa: 'El candidato tiene experiencia. _______, no fue seleccionado para el cargo.'",
        options: ["En resumen", "No obstante", "Por consiguiente"],
        correctAnswer: 1
      }
    ]
  }];