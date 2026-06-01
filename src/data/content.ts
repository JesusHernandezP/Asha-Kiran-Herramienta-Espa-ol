import { lessonsB1 } from './lessonsB1';

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
  illustrationUrl?: string;
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
  illustrationUrl?: string;
  emoji?: string;
  color?: string;
  vocabulary?: VocabularyItem[];
  exercises?: Exercise[];
}

export const lessons: Lesson[] = [
  ...lessonsB1,
  {
    id: "a1-alfa-abecedario",
    topic: "El Abecedario",
    title: "Alfabetización: El Abecedario",
    level: "A1",
    category: "Alfabetización",
    description: "Aprende las 27 letras del abecedario español con palabras básicas y vocabulario esencial.",
    imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/abecedario.png",
    color: "#E2F3E7",
    vocabulary: [
      { word: "Avión", translations: { en: "Airplane", ar: "طائرة", uk: "Літак", fr: "Avion" }, imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=200&auto=format&fit=crop&q=60", emoji: "✈️", color: "#E2F3E7" },
      { word: "Barco", translations: { en: "Boat", ar: "قارب", uk: "Човен", fr: "Bateau" }, imageUrl: "https://images.unsplash.com/photo-1505244208262-19158ab91c13?w=200&auto=format&fit=crop&q=60", emoji: "🚢", color: "#E2F3E7" },
      { word: "Casa", translations: { en: "House", ar: "منزل", uk: "Будинок", fr: "Maison" }, imageUrl: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=200&auto=format&fit=crop&q=60", emoji: "🏠", color: "#E3EEF9" },
      { word: "Dedo", translations: { en: "Finger", ar: "إصبع", uk: "Палець", fr: "Doigt" }, imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=200&auto=format&fit=crop&q=60", emoji: "☝️", color: "#FCE8E8" },
      { word: "Elefante", translations: { en: "Elephant", ar: "فيل", uk: "Слон", fr: "Éléphant" }, imageUrl: "https://images.unsplash.com/photo-1581850518616-bcb8077fa212?w=200&auto=format&fit=crop&q=60", emoji: "🐘", color: "#E2F3E7" },
      { word: "Fuego", translations: { en: "Fire", ar: "نار", uk: "Вогонь", fr: "Feu" }, imageUrl: "https://images.unsplash.com/photo-1508873696983-2df519f0397e?w=200&auto=format&fit=crop&q=60", emoji: "🔥", color: "#FFF4E5" },
      { word: "Gato", translations: { en: "Cat", ar: "قطة", uk: "Кіт", fr: "Chat" }, imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&auto=format&fit=crop&q=60", emoji: "🐱", color: "#F3E8FF" },
      { word: "Helado", translations: { en: "Ice cream", ar: "مثلجات", uk: "Морозиво", fr: "Glace" }, imageUrl: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=200&auto=format&fit=crop&q=60", emoji: "🍦", color: "#FEFCBF" },
      { word: "Isla", translations: { en: "Island", ar: "جزيرة", uk: "Острів", fr: "Île" }, imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&auto=format&fit=crop&q=60", emoji: "🏝️", color: "#E2F3E7" },
      { word: "Jirafa", translations: { en: "Giraffe", ar: "زرافة", uk: "Жирафа", fr: "Girafe" }, imageUrl: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=200&auto=format&fit=crop&q=60", emoji: "🦒", color: "#FEFCBF" },
      { word: "Koala", translations: { en: "Koala", ar: "كوالا", uk: "Коала", fr: "Koala" }, imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=200&auto=format&fit=crop&q=60", emoji: "🐨", color: "#E3EEF9" },
      { word: "Luna", translations: { en: "Moon", ar: "قمر", uk: "Місяць", fr: "Lune" }, imageUrl: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=200&auto=format&fit=crop&q=60", emoji: "🌙", color: "#F3E8FF" },
      { word: "Manzana", translations: { en: "Apple", ar: "تفاحة", uk: "Яблуко", fr: "Pomme" }, imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&auto=format&fit=crop&q=60", emoji: "🍎", color: "#FCE8E8" },
      { word: "Nube", translations: { en: "Cloud", ar: "سحابة", uk: "Хмара", fr: "Nuage" }, imageUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=200&auto=format&fit=crop&q=60", emoji: "☁️", color: "#E3EEF9" },
      { word: "Ñandú", translations: { en: "Rhea / Ostrich", ar: "نعامة", uk: "Нанду", fr: "Nandou" }, imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=200&auto=format&fit=crop&q=60", emoji: "🐦", color: "#F3E8FF" },
      { word: "Oso", translations: { en: "Bear", ar: "دب", uk: "Ведмідь", fr: "Ours" }, imageUrl: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=200&auto=format&fit=crop&q=60", emoji: "🐻", color: "#E2F3E7" },
      { word: "Perro", translations: { en: "Dog", ar: "كلب", uk: "Собака", fr: "Chien" }, imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200&auto=format&fit=crop&q=60", emoji: "🐶", color: "#FEFCBF" },
      { word: "Queso", translations: { en: "Cheese", ar: "جبن", uk: "Сир", fr: "Fromage" }, imageUrl: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=200&auto=format&fit=crop&q=60", emoji: "🧀", color: "#FEFCBF" },
      { word: "Ratón", translations: { en: "Mouse", ar: "فأر", uk: "Миша", fr: "Souris" }, imageUrl: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=200&auto=format&fit=crop&q=60", emoji: "🐭", color: "#E3EEF9" },
      { word: "Sol", translations: { en: "Sun", ar: "شمس", uk: "Сонце", fr: "Soleil" }, imageUrl: "https://images.unsplash.com/photo-1581373449483-37449f962b6c?w=200&auto=format&fit=crop&q=60", emoji: "☀️", color: "#FEFCBF" },
      { word: "Tren", translations: { en: "Train", ar: "قطار", uk: "Потяг", fr: "Train" }, imageUrl: "https://images.unsplash.com/photo-1532103054090-334e6e60ab29?w=200&auto=format&fit=crop&q=60", emoji: "🚆", color: "#FCE8E8" },
      { word: "Uvas", translations: { en: "Grapes", ar: "عنب", uk: "Виноград", fr: "Raisins" }, imageUrl: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=200&auto=format&fit=crop&q=60", emoji: "🍇", color: "#F3E8FF" },
      { word: "Vaca", translations: { en: "Cow", ar: "بقرة", uk: "Корова", fr: "Vache" }, imageUrl: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=200&auto=format&fit=crop&q=60", emoji: "🐮", color: "#E2F3E7" },
      { word: "Kiwi", translations: { en: "Kiwi", ar: "كيوي", uk: "Ківі", fr: "Kiwi" }, imageUrl: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=200&auto=format&fit=crop&q=60", emoji: "🥝", color: "#E2F3E7" },
      { word: "Xilófono", translations: { en: "Xylophone", ar: "إكسيليفون", uk: "Ксилофон", fr: "Xylophone" }, imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&auto=format&fit=crop&q=60", emoji: "🎹", color: "#F3E8FF" },
      { word: "Yoyó", translations: { en: "Yoyo", ar: "يويو", uk: "Йо-йо", fr: "Yoyo" }, imageUrl: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=200&auto=format&fit=crop&q=60", emoji: "🪀", color: "#FCE8E8" },
      { word: "Zapato", translations: { en: "Shoe", ar: "حذاء", uk: "Взуття", fr: "Chaussure" }, imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&auto=format&fit=crop&q=60", emoji: "👞", color: "#FFF4E5" }
    ],
    content: `
## Vamos a aprender el abecedario de la A a la Z <trans en=\"(## Let's learn the alphabet from A to Z)\" ar=\"(## دعونا نتعلم الأبجدية من الألف إلى الياء)\" uk=\"(## Вивчаємо алфавіт від А до Я)\" fr=\"(## Apprenons l'alphabet de A à Z)\"/>

### Ejercicio de pronunciación: <trans en=\"(### Pronunciation exercise:)\" ar=\"(### تمرين النطق:)\" uk=\"(### Вправа на вимову:)\" fr=\"(### Exercice de prononciation :)\"/>
Usa el botón de abajo si estuviera disponible el audio (simulación). <trans en=\"(Use the button below if audio (simulation) is available.)\" ar=\"(استخدم الزر أدناه إذا كان الصوت (المحاكاة) متاحًا.)\" uk=\"(Використовуйте кнопку нижче, якщо доступний звук (моделювання).)\" fr=\"(Utilisez le bouton ci-dessous si l'audio (simulation) est disponible.)\"/>
<button class="audio-btn">🔊 Escuchar el abecedario</button>
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Con qué letra empieza la palabra 'Avión'? <trans en=\"(What letter does the word 'Airplane' begin with?)\" ar=\"(ما هو الحرف الذي تبدأ به كلمة 'طائرة'؟)\" uk=\"(З якої букви починається слово «Літак»?)\" fr=\"(Par quelle lettre commence le mot « avion » ?)\"/>",
        options: ["E", "O", "A"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "¿Qué imagen empieza con la letra 'B'? <trans en=\"(Which image starts with the letter 'B'?)\" ar=\"(ما هي الصورة التي تبدأ بحرف 'ب'؟)\" uk=\"(Яке зображення починається на літеру «Б»?)\" fr=\"(Quelle image commence par la lettre « B » ?)\"/>",
        options: ["Casa", "Barco", "Dedo"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "¿Con qué letra empieza la palabra 'Sol'? <trans en=\"(What letter does the word 'Sun' begin with?)\" ar=\"(ما هو الحرف الذي تبدأ به كلمة 'الشمس'؟)\" uk=\"(З якої букви починається слово «Сонечко»?)\" fr=\"(Par quelle lettre commence le mot « Soleil » ?)\"/>",
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
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/cuerpo.png",
    color: "#EBF8FF",
    vocabulary: [
      { word: "La cabeza", translations: { en: "Head", ar: "الرأس", uk: "Голова", fr: "Tête" }, emoji: "👧", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60", illustrationUrl: "/images/vocab/cabeza.png", color: "#EBF8FF" },
      { word: "La mano", translations: { en: "Hand", ar: "اليد", uk: "Рука", fr: "Main" }, emoji: "✋", imageUrl: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=200&auto=format&fit=crop&q=60", illustrationUrl: "/images/vocab/mano.png", color: "#EBF8FF" },
      { word: "El pie", translations: { en: "Foot", ar: "القدم", uk: "Нога", fr: "Pied" }, emoji: "🦶", imageUrl: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=200&auto=format&fit=crop&q=60", illustrationUrl: "/images/vocab/pie.png", color: "#EBF8FF" },
      { word: "Los ojos", translations: { en: "Eyes", ar: "العينان", uk: "Очі", fr: "Yeux" }, emoji: "👁️", imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&auto=format&fit=crop&q=60", illustrationUrl: "/images/vocab/ojos.png", color: "#EBF8FF" },
      { word: "Las piernas", translations: { en: "Legs", ar: "الساقين", uk: "Ноги", fr: "Jambes" }, emoji: "🦵", imageUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=200&auto=format&fit=crop&q=60", illustrationUrl: "/images/vocab/piernas.png", color: "#EBF8FF" },
      { word: "El brazo", translations: { en: "Arm", ar: "الذراع", uk: "Рука", fr: "Bras" }, emoji: "💪", imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=200&auto=format&fit=crop&q=60", illustrationUrl: "/images/vocab/brazo.png", color: "#EBF8FF" }
    ],
    content: `
## El Cuerpo Humano <trans en=\"(The human body)\" ar=\"(الجسم البشري)\" uk=\"(ЛЮДСЬКЕ ТІЛО)\" fr=\"(le corps humain)\"/>

Aprender las partes de nuestro cuerpo nos ayuda a comunicarnos mejor. <trans en=\"(Learning our body parts helps us communicate better.)\" ar=\"(يساعدنا تعلم أجزاء الجسم على التواصل بشكل أفضل.)\" uk=\"(Вивчення частин нашого тіла допомагає нам краще спілкуватися.)\" fr=\"(Apprendre les parties de notre corps nous aide à mieux communiquer.)\"/>
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
        question: "Usas estos para ver: <trans en=\"(You use these to see:)\" ar=\"(يمكنك استخدام هذه لرؤية:)\" uk=\"(Ви використовуєте їх, щоб побачити:)\" fr=\"(Vous les utilisez pour voir :)\"/>",
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
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/colores.png",
    color: "#FFF5F5",
    vocabulary: [
      { word: "Rojo", translations: { en: "Red", ar: "أحمر", uk: "Червоний", fr: "Rouge" }, imageUrl: "https://images.unsplash.com/photo-1508020963904-3fea35495547?w=200&auto=format&fit=crop&q=60", emoji: "🍎", color: "#E53E3E" },
      { word: "Azul", translations: { en: "Blue", ar: "أزرق", uk: "Синій", fr: "Bleu" }, imageUrl: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=200&auto=format&fit=crop&q=60", emoji: "💧", color: "#3182CE" },
      { word: "Verde", translations: { en: "Green", ar: "أخضر", uk: "Зелений", fr: "Vert" }, imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=200&auto=format&fit=crop&q=60", emoji: "🐸", color: "#38A169" },
      { word: "Amarillo", translations: { en: "Yellow", ar: "أصفر", uk: "Жовтий", fr: "Jaune" }, imageUrl: "https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?w=200&auto=format&fit=crop&q=60", emoji: "☀️", color: "#ECC94B" },
      { word: "Naranja", translations: { en: "Orange", ar: "برتقالي", uk: "Помаранчевий", fr: "Orange" }, imageUrl: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=200&auto=format&fit=crop&q=60", emoji: "🍊", color: "#DD6B20" },
      { word: "Negro", translations: { en: "Black", ar: "أسود", uk: "Чорний", fr: "Noir" }, imageUrl: "https://images.unsplash.com/photo-1507499739999-097706ad8914?w=200&auto=format&fit=crop&q=60", emoji: "🎩", color: "#1A202C" }
    ],
    content: `
## ¿De qué color es? <trans en=\"(What colour is it?)\" ar=\"()...)\" uk=\"(## Якого він кольору?)\" fr=\"(– Quelle couleur a-t-elle ?)\"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "El cielo es... <trans en=\"(Heaven is...)\" ar=\"(الجنة هي...)\" uk=\"(Небо - це...)\" fr=\"(Le paradis est...)\"/>",
        options: ["Rojo", "Azul", "Amarillo"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Una manzana normalmente es... <trans en=\"(An apple is usually...)\" ar=\"(التفاحة عادة...)\" uk=\"(Яблуко зазвичай...)\" fr=\"(Une pomme est généralement...)\"/>",
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
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/articulos.png",
    color: "#EBF8FF",
    vocabulary: [
      { word: "El niño", translations: { en: "The boy", ar: "الولد", uk: "Хлопчик", fr: "Le garçon" }, imageUrl: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=200&auto=format&fit=crop&q=60", emoji: "👦", color: "#EBF8FF" },
      { word: "La niña", translations: { en: "The girl", ar: "البنت", uk: "Дівчинка", fr: "La fille" }, imageUrl: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=200&auto=format&fit=crop&q=60", emoji: "👧", color: "#EBF8FF" },
      { word: "Los niños", translations: { en: "The boys / The children", ar: "الأولاد", uk: "Хлопчики", fr: "Les garçons" }, imageUrl: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=200&auto=format&fit=crop&q=60", emoji: "👦👦", color: "#EBF8FF" },
      { word: "Las niñas", translations: { en: "The girls", ar: "البنات", uk: "Дівчатка", fr: "Les filles" }, imageUrl: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=200&auto=format&fit=crop&q=60", emoji: "👧👧", color: "#EBF8FF" }
    ],
    content: `
## Los Artículos Definidos <trans en=\"(Definite articles?)\" ar=\"(## العناصر المحددة)\" uk=\"(## Визначені елементи)\" fr=\"(## Les Articles Définis)\"/>

En español, usamos diferentes artículos dependiendo de si la palabra es masculina o femenina, y si es singular (uno) o plural (más de uno). <trans en=\"(In Spanish, we use different articles depending on whether the word is masculine or feminine, and whether it is singular (one) or plural (more than one).)\" ar=\"(في اللغة الإسبانية، نستخدم مقالات مختلفة اعتمادًا على ما إذا كانت الكلمة ذكورية أو أنثوية، وما إذا كانت مفردة (واحدة) أو جمع (أكثر من واحدة).)\" uk=\"(В іспанській мові ми використовуємо різні статті залежно від того, чи є слово чоловічого чи жіночого роду, і чи є воно одниною (один) або множиною (більше одного).)\" fr=\"(En espagnol, nous utilisons différents articles selon que le mot est masculin ou féminin, et s'il est singulier (un) ou pluriel (plus d'un).)\"/>

### Singular <trans en="(Singular)" ar="(مفرد)" uk="(Однина)" fr="(Singulier)"/>
*   **El** <trans en="(The - Masculine)" ar="(ال - مذكر)" uk="(Чоловічий рід)" fr="(Le)"/>: El niño, El perro, El coche.
*   **La** <trans en="(The - Feminine)" ar="(ال - مؤنث)" uk="(Жіночий рід)" fr="(La)"/>: La niña, La casa, La mesa.

### Plural <trans en="(Plural)" ar="(جمع)" uk="(Множина)" fr="(Pluriel)"/>
Para formar el plural de las palabras que terminan en vocal (a, e, i, o, u), añadimos una **"S"** al final. <trans en=\"(To form the plural of the words ending in vowel (a, e, i, o, u), we add an **'S'** at the end.)\" ar=\"(لتشكيل جمع الكلمات التي تنتهي بحرف العلة (a، e، i، o، u)، نضيف **' S '** في النهاية.)\" uk=\"(Щоб сформувати множину слів, що закінчуються на голосний (a, e, i, o, u), в кінці додаємо * * 'S'**.)\" fr=\"(Pour former le pluriel des mots se terminant par une voyelle (a, e, i, o, u), on ajoute un **'S'** à la fin.)\"/>
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
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/pronombres.png",
    color: "#E2F3E7",
    vocabulary: [
      { word: "Yo", translations: { en: "I", ar: "أنا", uk: "Я", fr: "Je" }, imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=60", emoji: "🙋", color: "#E2F3E7" },
      { word: "Tú", translations: { en: "You (singular, informal)", ar: "أنت", uk: "Ти", fr: "Tu" }, imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60", emoji: "👉", color: "#E2F3E7" },
      { word: "Él / Ella", translations: { en: "He / She", ar: "هو / هي", uk: "Він / Вона", fr: "Il / Elle" }, imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60", emoji: "🧍", color: "#E2F3E7" },
      { word: "Nosotros", translations: { en: "We", ar: "نحن", uk: "Ми", fr: "Nous" }, imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=200&auto=format&fit=crop&q=60", emoji: "🫂", color: "#E2F3E7" },
      { word: "Vosotros", translations: { en: "You (plural, informal)", ar: "أنتم", uk: "Ви", fr: "Vous" }, imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&auto=format&fit=crop&q=60", emoji: "👋", color: "#E2F3E7" },
      { word: "Ellos / Ellas", translations: { en: "They", ar: "هم / هن", uk: "Вони", fr: "Ils / Elles" }, imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&auto=format&fit=crop&q=60", emoji: "👥", color: "#E2F3E7" }
    ],
    content: `
## Los Pronombres Personales <trans en=\"(Personal pronouns)\" ar=\"(ضمير)\" uk=\"(Особові займенники)\" fr=\"(Pronom)\"/>

Para hablar de quién hace la acción, usamos los pronombres personales. ¡Aprenderlos de memoria es súper importante! <trans en=\"(To talk about who is doing the action, we use personal pronouns. Learning them by heart is super important!)\" ar=\"(للحديث عن من يقوم بالعمل، نستخدم الضمائر الشخصية. إن تعلمها عن ظهر قلب أمر بالغ الأهمية!)\" uk=\"(Щоб розповісти про те, хто виконує дію, ми використовуємо особисті займенники. Вивчити їх напам 'ять дуже важливо!)\" fr=\"(Pour parler de qui fait l'action, nous utilisons les pronoms personnels. Les apprendre par cœur est super important !)\"/>

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
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/verbos.png",
    color: "#E2E8F0",
    vocabulary: [
      { word: "Yo soy", translations: { en: "I am (teacher)", ar: "أنا معلم", uk: "Я вчитель", fr: "Je suis (professeur)" }, imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&auto=format&fit=crop&q=60", emoji: "🧑‍🏫", color: "#E2E8F0" },
      { word: "Yo estoy", translations: { en: "I am (at home)", ar: "أنا في المنزل", uk: "Я вдома", fr: "Je suis (à la maison)" }, imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&auto=format&fit=crop&q=60", emoji: "🏠", color: "#E2E8F0" },
      { word: "Yo tengo", translations: { en: "I have (an apple)", ar: "لدي تفاحة", uk: "Я маю", fr: "J'ai (une pomme)" }, imageUrl: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=200&auto=format&fit=crop&q=60", emoji: "🍎", color: "#E2E8F0" }
    ],
    content: `
## Verbos muy importantes <trans en=\"(## Very important verbs)\" ar=\"(## أفعال مهمة جدًا)\" uk=\"(## Дуже важливі дієслова)\" fr=\"(## Verbes très importants)\"/>

Aprender la conjugación (la forma) es esencial para comunicarte. <trans en=\"(Learning the conjugation (the form) is essential to communicate.)\" ar=\"(يعد تعلم الاقتران (النموذج) أمرًا ضروريًا للتواصل.)\" uk=\"(Вивчення спряження (форми) має важливе значення для спілкування.)\" fr=\"(Apprendre la conjugaison (la forme) est essentiel pour communiquer.)\"/>

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
        question: "Completa: 'Yo _______ feliz hoy.' <trans en=\"(Complete: 'I _______ happy today.')\" ar=\"(أكمل: 'أنا _______ سعيد اليوم.')\" uk=\"(Заповніть: «Сьогодні я _______ щасливий».)\" fr=\"(Compléter : « Je _______ heureux aujourd'hui. »)\"/>",
        options: ["soy", "tengo", "estoy"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "Completa: 'Ella _______ de Senegal.' <trans en=\"(Complete: 'She _______ from Senegal.')\" ar=\"(أكمل: 'هي _______ من السنغال.')\" uk=\"(Заповніть: «Вона _______ із Сенегалу».)\" fr=\"(Compléter : « Elle _______ du Sénégal. »)\"/>",
        options: ["es", "tiene", "está"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Completa: 'Nosotros _______ 20 años.' <trans en=\"(Complete: 'We _______ 20 years.')\" ar=\"(أكمل: 'نحن _______ 20 عامًا.')\" uk=\"(Заповніть: «Нам _______ 20 років».)\" fr=\"(Compléter : « Nous _______ 20 ans. »)\"/>",
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
    imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/ropa.png",
    color: "#E2E8F0",
    vocabulary: [
      { word: "La camiseta", translations: { en: "T-Shirt", ar: "قميص", uk: "Футболка", fr: "T-shirt" }, imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=200&auto=format&fit=crop&q=60", emoji: "👕", color: "#EDF2F7" },
      { word: "El pantalón", translations: { en: "Pants", ar: "سروال", uk: "Штани", fr: "Pantalon" }, imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&auto=format&fit=crop&q=60", emoji: "👖", color: "#EDF2F7" },
      { word: "Los zapatos", translations: { en: "Shoes", ar: "حذاء", uk: "Взуття", fr: "Chaussures" }, imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&auto=format&fit=crop&q=60", emoji: "👟", color: "#EDF2F7" },
      { word: "La chaqueta", translations: { en: "Jacket", ar: "سترة", uk: "Куртка", fr: "Veste" }, imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&auto=format&fit=crop&q=60", emoji: "🧥", color: "#EDF2F7" }
    ],
    content: `
## Las prendas de vestir <trans en=\"(CLOTHING)\" ar=\"(الملابس)\" uk=\"(## Одяг)\" fr=\"(Habillement)\"/>
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
    imageUrl: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/genero.png",
    color: "#E2F3E7",
    vocabulary: [
      { word: "El niño", translations: { en: "The boy", ar: "الولد", uk: "Хлопчик", fr: "Le garçon" }, imageUrl: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=200&auto=format&fit=crop&q=60", emoji: "👦", color: "#E2F3E7" },
      { word: "El cielo", translations: { en: "The sky", ar: "السماء", uk: "Небо", fr: "Le ciel" }, imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&auto=format&fit=crop&q=60", emoji: "🌌", color: "#EBF8FF" },
      { word: "La niña", translations: { en: "The girl", ar: "البنت", uk: "Дівчинка", fr: "La fille" }, imageUrl: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=200&auto=format&fit=crop&q=60", emoji: "👧", color: "#FFF5F5" },
      { word: "La manzana", translations: { en: "The apple", ar: "التفاحة", uk: "Яблуко", fr: "La pomme" }, imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&auto=format&fit=crop&q=60", emoji: "🍎", color: "#FCE8E8" },
      { word: "La información", translations: { en: "The information", ar: "المعلومات", uk: "Інформація", fr: "L'information" }, imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=200&auto=format&fit=crop&q=60", emoji: "ℹ️", color: "#E3EEF9" },
      { word: "La concentración", translations: { en: "The concentration", ar: "التركيز", uk: "Концентрація", fr: "La concentration" }, imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=200&auto=format&fit=crop&q=60", emoji: "🧠", color: "#F3E8FF" }
    ],
    content: `
## Palabras Masculinas y Femeninas <trans en=\"(## Male and Female Words)\" ar=\"(## كلمات الذكور والإناث)\" uk=\"(## Чоловічі та жіночі слова)\" fr=\"(## Mots masculins et féminins)\"/>

Casi todas las cosas en español son masculinas o femeninas. <trans en=\"(Almost everything in Spanish is either masculine or feminine.)\" ar=\"(كل شيء تقريبًا باللغة الإسبانية إما ذكوري أو أنثوي.)\" uk=\"(Майже все в іспанській мові або чоловіче, або жіноче.)\" fr=\"(Presque toutes les choses en espagnol sont masculines ou féminines.)\"/>

### Masculino <trans en="(Masculine)" ar="(مذكر)" uk="(Чоловічий рід)" fr="(Masculin)"/>
Normalmente terminan en **-O**. Usamos **EL** o **UN**. <trans en=\"(They usually end in **-O**. We use **EL** or **UN**.)\" ar=\"(عادة ما تنتهي بـ **-O**. نحن نستخدم **EL** أو **UN**.)\" uk=\"(Вони зазвичай закінчуються на **-O**. Ми використовуємо **EL** або **UN**.)\" fr=\"(Ils se terminent généralement par **-O**. Nous utilisons **LE** ou **UN**.)\"/>
*   **El** niño
*   **El** cielo
*   **El** oro

### Femenino <trans en="(Feminine)" ar="(مؤنث)" uk="(Жіночий рід)" fr="(Féminin)"/>
Normalmente terminan en **-A**. Usamos **LA** o **UNA**. <trans en=\"(They usually end in **-A**. We use **LA** or **UNA**.)\" ar=\"(عادة ما تنتهي بـ **-A**. نستخدم **LA** أو **UNA**.)\" uk=\"(Вони зазвичай закінчуються на **-A**. Ми використовуємо **LA** або **UNA**.)\" fr=\"(Ils se terminent généralement par **-A**. Nous utilisons **LA** ou **UNA**.)\"/>
*   **La** niña
*   **La** tierra
*   **La** manzana

### Excepciones Importantes ⚠️ <trans en=\"(### Important Exceptions ⚠️)\" ar=\"(### استثناءات مهمة ⚠️)\" uk=\"(### Важливі винятки ⚠️)\" fr=\"(### Exceptions importantes ⚠️)\"/>
Las palabras que terminan en **-ción** siempre son **femeninas**, aunque no terminen en -a. <trans en=\"(Words ending in * * -action * * are always * * feminine **, even if they do not end in -a.)\" ar=\"(الكلمات التي تنتهي بـ **- action ** تكون دائمًا ** أنثوية**، حتى لو لم تنتهي بـ - a.)\" uk=\"(Слова, що закінчуються на ** -action * *, завжди * * жіночого роду**, навіть якщо вони не закінчуються на -a.)\" fr=\"(Les mots qui se terminent par **-tion** sont toujours * * féminins * *, même s'ils ne se terminent pas par -a.)\"/>
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
    imageUrl: "/images/lessons/posesivos.png",
    illustrationUrl: "/images/lessons/posesivos.png",
    emoji: "🎒",
    color: "#FCE8E8",
    vocabulary: [
      { word: "Mi", translations: { en: "My", ar: "لي", uk: "Мій", fr: "Mon/Ma" }, imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&q=60", emoji: "🙋", color: "#FCE8E8" },
      { word: "Tu", translations: { en: "Your", ar: "لك", uk: "Твій", fr: "Ton/Ta" }, imageUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&auto=format&fit=crop&q=60", emoji: "👉", color: "#FCE8E8" },
      { word: "Su", translations: { en: "His/Her/Their", ar: "له/لها/لهم", uk: "Його/Її/Їх", fr: "Son/Sa/Leur" }, imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=60", emoji: "🧍", color: "#FCE8E8" },
      { word: "Nuestro / Nuestra", translations: { en: "Our", ar: "لنا", uk: "Наш/Наша", fr: "Notre" }, imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=200&auto=format&fit=crop&q=60", emoji: "🫂", color: "#FCE8E8" },
      { word: "Vuestro / Vuestra", translations: { en: "Your (plural)", ar: "لكم", uk: "Ваш/Ваша", fr: "Votre" }, imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&auto=format&fit=crop&q=60", emoji: "👋", color: "#FCE8E8" }
    ],
    content: `
## ¿De quién es? <trans en=\"(Who was it?)\" ar=\"(- من أرسله؟)\" uk=\"(## Чиє воно?)\" fr=\"(À qui est-ce ?)\"/>

Para indicar que algo es de alguien, usamos posesivos. Van antes de las palabras. <trans en=\"(To indicate that something is someone's, we use possessive. They go before the words.)\" ar=\"(للإشارة إلى أن شيئًا ما يخص شخصًا ما، نستخدم التملك. يذهبون قبل الكلمات.)\" uk=\"(Щоб вказати, що щось є чиєсь, ми використовуємо власницьке. Вони йдуть перед словами.)\" fr=\"(Pour indiquer que quelque chose appartient à quelqu'un, nous utilisons des possessifs. Ils vont avant les mots.)\"/>

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
        question: "Yo tengo una bicicleta. Es ______ bicicleta. <trans en=\"(I have a bicycle.)\" ar=\"(لدي دراجة. إنها ______ دراجة.)\" uk=\"(У мене є велосипед. Це ______ велосипед.)\" fr=\"(J'ai un vélo. C'est ______ vélo.)\"/>",
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
    imageUrl: "/images/lessons/negacion.png",
    illustrationUrl: "/images/lessons/negacion.png",
    emoji: "👍",
    color: "#E3EEF9",
    vocabulary: [
      { word: "Sí", translations: { en: "Yes", ar: "نعم", uk: "Так", fr: "Oui" }, imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=200&auto=format&fit=crop&q=60", emoji: "✅", color: "#E2F3E7" },
      { word: "No", translations: { en: "No", ar: "لا", uk: "Ні", fr: "Non" }, imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=200&auto=format&fit=crop&q=60", emoji: "❌", color: "#FCE8E8" },
      { word: "Me gusta", translations: { en: "I like", ar: "يعجبني", uk: "Мені подобається", fr: "J'aime" }, imageUrl: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=200&auto=format&fit=crop&q=60", emoji: "👍", color: "#E3EEF9" },
      { word: "No me gusta", translations: { en: "I don't like", ar: "لا يعجبني", uk: "Мені не подобається", fr: "Je n'aime pas" }, imageUrl: "https://images.unsplash.com/photo-1584515901387-a7a1a63376B9?w=200&auto=format&fit=crop&q=60", emoji: "👎", color: "#FCE8E8" }
    ],
    content: `
## ¿Sí o No? <trans en=\"(Didn't we?)\" ar=\"(نعم أم لا؟)\" uk=\"(Так чи ні)\" fr=\"(OUI OU NON ?)\"/>

*   **Sí**, quiero pan.
*   **No**, no quiero pan.

*Para decir que algo no ocurre, ponemos "no" antes del verbo.*

## Los Gustos <trans en=\"(ALL TASTES)\" ar=\"(## Los Gustos)\" uk=\"(## Los Gustos)\" fr=\"(## Les Goûts)\"/>

Usamos **Me gusta** cuando algo nos parece bueno o bonito. <trans en=\"(We use **Like** when we think something is good or beautiful.)\" ar=\"(نستخدم **مثل** عندما نعتقد أن شيئًا ما جيد أو جميل.)\" uk=\"(Ми використовуємо **Like**, коли думаємо, що щось добре або красиво.)\" fr=\"(Nous utilisons **J'aime** quand quelque chose nous semble bon ou joli.)\"/>

*   **Me gusta** el fútbol. <trans en="(I like soccer)" ar="(أحب كرة القدم)" uk="(Мені подобається футбол)" fr="(J'aime le football)"/>
*   **No me gusta** el frío. <trans en="(I don't like the cold)" ar="(لا أحب البرد)" uk="(Мені не подобається холод)" fr="(Je n'aime pas le froid)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "___, me llamo Juan. <trans en=\"(___, my name is Juan.)\" ar=\"(___، اسمي خوان.)\" uk=\"(___, мене звати Хуан.)\" fr=\"(___, je m'appelle Juan.)\"/>",
        options: ["No", "Sí"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "A mí ___ me gusta el pescado. Prefiero la carne. <trans en=\"(I ___ like fish.)\" ar=\"(أنا ___ أحب السمك. أنا أفضل اللحوم.)\" uk=\"(Я ___ люблю рибу. Я віддаю перевагу м'ясу.)\" fr=\"(Je ___ aime le poisson. Je préfère la viande.)\"/>",
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
    imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/saludos.png",
    color: "#FFF5F5",
    vocabulary: [
      { word: "Hola", translations: { en: "Hello", ar: "مرحباً", uk: "Привіт", fr: "Bonjour" }, imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=200&auto=format&fit=crop&q=60", emoji: "👋", color: "#FFF5F5" },
      { word: "¿Cómo estás?", translations: { en: "How are you?", ar: "كيف حالك؟", uk: "Як справи?", fr: "Comment vas-tu ?" }, imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&auto=format&fit=crop&q=60", emoji: "🤔", color: "#EBF8FF" },
      { word: "Estoy bien", translations: { en: "I'm fine", ar: "أنا بخير", uk: "Я в порядку", fr: "Je vais bien" }, imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60", emoji: "😊", color: "#E2F3E7" },
      { word: "¿Cómo te llamas?", translations: { en: "What's your name?", ar: "ما اسمك؟", uk: "Як тебе звати?", fr: "Comment t'appelles-tu ?" }, imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=200&auto=format&fit=crop&q=60", emoji: "🏷️", color: "#EBF8FF" },
      { word: "¿De dónde eres?", translations: { en: "Where are you from?", ar: "من أين أنت؟", uk: "Звідки ти?", fr: "D'où viens-tu ?" }, imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=200&auto=format&fit=crop&q=60", emoji: "🌍", color: "#FEFCBF" }
    ],
    content: `
## Conversación Básica <trans en=\"(Spoken Interaction: Basic User)\" ar=\"(محادثة أساسية)\" uk=\"(## Базова розмова)\" fr=\"(## Conversation de base)\"/>

Aquí tienes preguntas muy importantes y cómo responderlas de forma natural: <trans en=\"(Here are some very important questions and how to answer them naturally:)\" ar=\"(فيما يلي بعض الأسئلة المهمة للغاية وكيفية الإجابة عليها بشكل طبيعي:)\" uk=\"(Ось кілька дуже важливих питань і як відповісти на них природним шляхом:)\" fr=\"(Voici des questions très importantes et comment y répondre naturellement :)\"/>

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
        question: "Responde a la pregunta: '¿Cómo te llamas?' <trans en=\"(Answers the question: 'What is your name?')\" ar=\"(يجيب على السؤال: ما اسمك؟)\" uk=\"(Відповідає на запитання: «Як тебе звати?»)\" fr=\"(Répond à la question : « Quel est votre nom ? »)\"/>",
        options: ["Tengo 20 años", "Me llamo Sara", "Soy de Málaga"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Responde a la pregunta: '¿De dónde eres?' <trans en=\"(Answers the question: 'Where are you from?')\" ar=\"(يجيب على السؤال: 'من أين أنت؟')\" uk=\"(Відповідає на запитання: «Звідки ти?»)\" fr=\"(Répond à la question : « D’où venez-vous ? »)\"/>",
        options: ["Soy de Senegal", "Estoy bien", "Llevo tres semanas"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Responde a la pregunta: '¿Cuántos años tienes?' <trans en=\"(Answers the question: 'How old are you?')\" ar=\"(يجيب على السؤال: 'كم عمرك؟')\" uk=\"(Відповідає на запитання: «Скільки тобі років?»)\" fr=\"(Répond à la question : « Quel âge as-tu ? »)\"/>",
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
    imageUrl: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "/images/lessons/numeros.png",
    color: "#EBF8FF",
    vocabulary: [
      { word: "Uno (1)", translations: { en: "One", ar: "واحد", uk: "Один", fr: "Un" }, imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&auto=format&fit=crop&q=60", emoji: "1️⃣", color: "#EBF8FF" },
      { word: "Dos (2)", translations: { en: "Two", ar: "إثنان", uk: "Два", fr: "Deux" }, imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&auto=format&fit=crop&q=60", emoji: "2️⃣", color: "#EBF8FF" },
      { word: "Tres (3)", translations: { en: "Three", ar: "ثلاثة", uk: "Три", fr: "Trois" }, imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&auto=format&fit=crop&q=60", emoji: "3️⃣", color: "#EBF8FF" },
      { word: "Cuatro (4)", translations: { en: "Four", ar: "أربعة", uk: "Чотири", fr: "Quatre" }, imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&auto=format&fit=crop&q=60", emoji: "4️⃣", color: "#EBF8FF" },
      { word: "Cinco (5)", translations: { en: "Five", ar: "خمسة", uk: "П'ять", fr: "Cinq" }, imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&auto=format&fit=crop&q=60", emoji: "5️⃣", color: "#EBF8FF" },
      { word: "Seis (6)", translations: { en: "Six", ar: "ستة", uk: "Шість", fr: "Six" }, imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&auto=format&fit=crop&q=60", emoji: "6️⃣", color: "#EBF8FF" },
      { word: "Siete (7)", translations: { en: "Seven", ar: "سبعة", uk: "Сім", fr: "Sept" }, imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&auto=format&fit=crop&q=60", emoji: "7️⃣", color: "#EBF8FF" },
      { word: "Ocho (8)", translations: { en: "Eight", ar: "ثمانية", uk: "Вісім", fr: "Huit" }, imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&auto=format&fit=crop&q=60", emoji: "8️⃣", color: "#EBF8FF" },
      { word: "Nueve (9)", translations: { en: "Nine", ar: "تسعة", uk: "Дев'ять", fr: "Neuf" }, imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&auto=format&fit=crop&q=60", emoji: "9️⃣", color: "#EBF8FF" },
      { word: "Diez (10)", translations: { en: "Ten", ar: "عشرة", uk: "Десять", fr: "Dix" }, imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&auto=format&fit=crop&q=60", emoji: "🔟", color: "#EBF8FF" }
    ],
    content: `
## A contar... <trans en=\"(a contar,)\" ar=\"(## أخبرنا...)\" uk=\"(## Розкажіть нам...)\" fr=\"(## À compter...)\"/>

Saber los números nos ayuda a decir nuestra edad, la hora o precios. <trans en=\"(Knowing the numbers helps us tell our age, time, or prices.)\" ar=\"(تساعدنا معرفة الأرقام في معرفة عمرنا أو وقتنا أو أسعارنا.)\" uk=\"(Знаючи цифри, ми можемо визначити свій вік, час або ціни.)\" fr=\"(Connaître les chiffres nous aide à dire notre âge, l'heure ou les prix.)\"/>
Los primeros 10 son: <trans en=\"(The top 10 are:)\" ar=\"(العشرة الأوائل هم:)\" uk=\"(У першій десятці:)\" fr=\"(Les 10 premiers sont :)\"/>

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
        question: "¿Qué número es el 'Cinco'? <trans en=\"(What number is 'Five'?)\" ar=\"(ما هو الرقم 'خمسة'؟)\" uk=\"(Яке число 'п'ять'?)\" fr=\"(Quel nombre est « Cinq » ?)\"/>",
        options: ["6", "5", "10"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "3 en español es... <trans en=\"(3 in Spanish is...)\" ar=\"(3 بالإسبانية...)\" uk=\"(3 іспанською - це...)\" fr=\"(3 en espagnol c'est...)\"/>",
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
    imageUrl: "/images/lessons/nacionalidades.png",
    illustrationUrl: "/images/lessons/nacionalidades.png",
    emoji: "🌐",
    color: "#FEFCBF",
    vocabulary: [
      { word: "España / español", translations: { en: "Spain / Spanish", ar: "إسبانيا / إسباني", uk: "Іспанія / іспанець", fr: "Espagne / espagnol" }, imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=200&auto=format&fit=crop&q=60", emoji: "🇪🇸", color: "#FFF5F5" },
      { word: "Inglaterra / inglés", translations: { en: "England / English", ar: "إنجلترا / إنجليزي", uk: "Англія / англієць", fr: "Angleterre / anglais" }, imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?w=200&auto=format&fit=crop&q=60", emoji: "🇬🇧", color: "#EBF8FF" },
      { word: "Marruecos / marroquí", translations: { en: "Morocco / Moroccan", ar: "المغرب / مغربي", uk: "Марокко / марокканець", fr: "Maroc / marocain" }, imageUrl: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=200&auto=format&fit=crop&q=60", emoji: "🇲🇦", color: "#FCE8E8" },
      { word: "Francia / francés", translations: { en: "France / French", ar: "فرنسا / فرنسي", uk: "Франція / француз", fr: "France / français" }, imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=200&auto=format&fit=crop&q=60", emoji: "🇫🇷", color: "#E3EEF9" },
      { word: "Senegal / senegalés", translations: { en: "Senegal / Senegalese", ar: "السنغال / سنغالي", uk: "Сенегал / сенегалець", fr: "Sénégal / sénégalais" }, imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=200&auto=format&fit=crop&q=60", emoji: "🇸🇳", color: "#E2F3E7" }
    ],
    content: `
## País y Nacionalidad <trans en=\"(## Country and Nationality)\" ar=\"(## البلد والجنسية)\" uk=\"(## Країна та громадянство)\" fr=\"(Pays, île et nationalité)\"/>

Del país (el lugar) viene la palabra sobre tu origen (la nacionalidad). <trans en=\"(From the country (the place) comes the word about your origin (nationality).)\" ar=\"(من البلد (المكان) تأتي كلمة عن أصلكم (الجنسية).)\" uk=\"(З країни (місця) йде слово про ваше походження (національність).)\" fr=\"(Du pays (le lieu) vient le mot sur votre origine (la nationalité).)\"/>

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
        question: "Una persona de Francia es... <trans en=\"(A person from France is...)\" ar=\"(شخص من فرنسا...)\" uk=\"(Людина з Франції - це...)\" fr=\"(Une personne de France est...)\"/>",
        options: ["francés", "franco", "francia"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Fátima es de Marruecos. Ella es... <trans en=\"(Fatima is from Morocco.)\" ar=\"(فاطمة من المغرب. هي...)\" uk=\"(Фатіма родом з Марокко. вона...)\" fr=\"(Fatima est originaire du Maroc. Elle est...)\"/>",
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
    imageUrl: "/images/lessons/animales.png",
    illustrationUrl: "/images/lessons/animales.png",
    emoji: "🐶",
    color: "#FEFCBF",
    vocabulary: [
      { word: "El perro", translations: { en: "Dog", ar: "كلب", uk: "Собака", fr: "Chien" }, imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200&auto=format&fit=crop&q=60", emoji: "🐶", color: "#FEFCBF" },
      { word: "El gato", translations: { en: "Cat", ar: "قطة", uk: "Кіт", fr: "Chat" }, imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&auto=format&fit=crop&q=60", emoji: "🐱", color: "#FEFCBF" },
      { word: "El pájaro", translations: { en: "Bird", ar: "طائر", uk: "Птах", fr: "Oiseau" }, imageUrl: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=200&auto=format&fit=crop&q=60", emoji: "🐦", color: "#FEFCBF" },
      { word: "El árbol", translations: { en: "Tree", ar: "شجرة", uk: "Дерево", fr: "Arbre" }, imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=200&auto=format&fit=crop&q=60", emoji: "🌳", color: "#F0FFF4" },
      { word: "La montaña", translations: { en: "Mountain", ar: "جبل", uk: "Гора", fr: "Montagne" }, imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&auto=format&fit=crop&q=60", emoji: "⛰️", color: "#F0FFF4" },
      { word: "El mar", translations: { en: "Sea", ar: "بحر", uk: "Море", fr: "Mer" }, imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=200&auto=format&fit=crop&q=60", emoji: "🌊", color: "#F0FFF4" }
    ],
    content: `
## Mascotas y animales salvajes <trans en=\"(## Pets and wildlife)\" ar=\"(## الحيوانات الأليفة والحياة البرية)\" uk=\"(## Домашні тварини та дика природа)\" fr=\"(## Animaux et animaux sauvages)\"/>

## La Naturaleza <trans en=\"(Nature)\" ar=\"(آه ،الطبيعة!)\" uk=\"(## Природа)\" fr=\"(avec la nature)\"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Cuál es una mascota común en casa? <trans en=\"(What is a common pet at home?)\" ar=\"(ما هو الحيوان الأليف الشائع في المنزل؟)\" uk=\"(Який звичайний домашній улюбленець?)\" fr=\"(Qu'est-ce qu'un animal de compagnie commun à la maison ?)\"/>",
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
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&auto=format&fit=crop&q=80",
    emoji: "📖",
    color: "#EBF8FF",
    content: `
## LECTURA: Hola, me llamo Ali <trans en=\"(## READING: Hi, my name is Ali)\" ar=\"(## READING: مرحبًا، اسمي علي)\" uk=\"(## READING: Привіт, мене звати Алі)\" fr=\"(## LECTURE : Bonjour, je m'appelle Ali)\"/>

> *"Hola, me llamo Ali. Tengo veinticinco (25) años. Yo soy de Marruecos, pero ahora estoy en Málaga, España. Yo tengo una hermana que se llama Fátima."* <trans en=\"(> *'Hello, my name is Ali. I am twenty-five (25) years old. I am from Morocco, but now I am in Malaga, Spain. I have a sister named Fátima.'*)\" ar=\"(> *'مرحبًا، اسمي علي. عمري خمسة وعشرون (25) عامًا. أنا من المغرب، لكني الآن في ملقة بإسبانيا. لدي أخت تدعى فاطمة.'*)\" uk=\"(> *'Привіт, мене звати Алі. Мені двадцять п'ять (25) років. Я з Марокко, але зараз я в Малазі, Іспанія. У мене є сестра на ім'я Фатіма.'*)\" fr=\"(> *'Bonjour, je m'appelle Ali. J'ai vingt-cinq (25) ans. Je viens du Maroc, mais maintenant je suis à Malaga, en Espagne. J'ai une sœur nommée Fátima.'*)\"/>

> *"Me gusta mucho el mar y quiero trabajar de cocinero. Yo hablo un poco de español, pero estudio todos los días en la escuela."* <trans en=\"(> *'I really like the sea and I want to work as a cook. I speak a little Spanish, but I study every day at school.'*)\" ar=\"(> *'أنا أحب البحر حقًا وأريد أن أعمل طباخًا. أتحدث القليل من الإسبانية، لكني أدرس كل يوم في المدرسة.'*)\" uk=\"(> *'Мені дуже подобається море і я хочу працювати кухарем. Я трохи розмовляю іспанською, але вчуся щодня в школі.'*)\" fr=\"(> *'J'aime beaucoup la mer et je veux travailler comme cuisinier. Je parle un peu espagnol, mais j'étudie tous les jours à l'école.'*)\"/>

### Lee la lectura con atención y responde al ejercicio. <trans en=\"(### Read the reading carefully and respond to the exercise.)\" ar=\"(### اقرأ القراءة بعناية وأجب عن التمرين.)\" uk=\"(### Уважно прочитайте текст і дайте відповідь на вправу.)\" fr=\"(### Lisez attentivement la lecture et répondez à l'exercice.)\"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿De dónde es Ali? <trans en=\"(Where is Ali from?)\" ar=\"(من أين علي؟)\" uk=\"(Звідки Алі?)\" fr=\"(D’où vient Ali ?)\"/>",
        options: ["Es de Málaga", "Es de Marruecos", "Es de Francia"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿De qué quiere trabajar Ali? <trans en=\"(What does Ali want to work on?)\" ar=\"(ما الذي يريد علي أن يعمل عليه؟)\" uk=\"(Над чим Алі хоче працювати?)\" fr=\"(Sur quoi Ali veut-il travailler ?)\"/>",
        options: ["De profesor", "De cocinero", "De conductor"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "¿Dónde está Ali ahora? <trans en=\"(Where is Ali now?)\" ar=\"(أين علي الآن؟)\" uk=\"(Де Алі зараз?)\" fr=\"(Où est Ali maintenant ?)\"/>",
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
    imageUrl: "/images/lessons/mapas.png",
    illustrationUrl: "/images/lessons/mapas.png",
    emoji: "🌍",
    color: "#E2E8F0",
    vocabulary: [
      { word: "Marruecos", translations: { en: "Morocco", ar: "المغرب", uk: "Марокко", fr: "Maroc" }, imageUrl: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=200&auto=format&fit=crop&q=60", emoji: "🇲🇦", color: "#FEFCBF" },
      { word: "España", translations: { en: "Spain", ar: "إسبانيا", uk: "Іспанія", fr: "Espagne" }, imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=200&auto=format&fit=crop&q=60", emoji: "🇪🇸", color: "#FFF5F5" },
      { word: "Senegal", translations: { en: "Senegal", ar: "السنغال", uk: "Сенегал", fr: "Sénégal" }, imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=200&auto=format&fit=crop&q=60", emoji: "🇸🇳", color: "#F0FFF4" }
    ],
    content: `
## Los Continentes <trans en=\"(## The Continents)\" ar=\"(## القارات)\" uk=\"(## Континенти)\" fr=\"(## Les continents)\"/>

Existen diferentes continentes en el mundo: <trans en=\"(There are different continents in the world:)\" ar=\"(هناك قارات مختلفة في العالم:)\" uk=\"(У світі є різні континенти:)\" fr=\"(Il existe différents continents dans le monde :)\"/>
- **África**
- **Europa**
- **América** (Norte y Sur)
- **Asia**
- **Oceanía**

## Países <trans en=\"(## Countries)\" ar=\"(## بلدان)\" uk=\"(## Країни)\" fr=\"(## Pays)\"/> 

Para decir de dónde eres puedes decir: *"Yo soy de..."* y tu país. <trans en=\"(To say where you are from you can say: *'I am from...'* and your country.)\" ar=\"(لتقول من أين أنت يمكنك أن تقول: *'أنا من...'* وبلدك.)\" uk=\"(Щоб сказати, звідки ви, ви можете сказати: *'Я з...'* і вашої країни.)\" fr=\"(Pour dire d'où vous venez vous pouvez dire : *'Je viens de...'* et votre pays.)\"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "España está en: <trans en=\"(Spain is in:)\" ar=\"(اسبانيا في:)\" uk=\"(Іспанія знаходиться в:)\" fr=\"(L'Espagne est dans :)\"/>",
        options: ["Asia", "África", "Europa"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "¿Cómo se llama el continente con muchos desiertos al sur de Europa? <trans en=\"(What is the name of the continent with many deserts south of Europe?)\" ar=\"(ما اسم القارة التي بها صحاري كثيرة جنوب أوروبا؟)\" uk=\"(Як називається материк з багатьма пустелями на південь від Європи?)\" fr=\"(Quel est le nom du continent qui compte de nombreux déserts au sud de l’Europe ?)\"/>",
        options: ["África", "América", "Oceanía"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a2-vocab-direcciones",
    topic: "Direcciones",
    title: "¿Dónde está...?",
    level: "A2",
    category: "Vocabulario",
    description: "Aprende a preguntar por lugares importantes como el lavabo, el autobús o la tienda.",
    imageUrl: "/images/lessons/direcciones.png",
    illustrationUrl: "/images/lessons/direcciones.png",
    emoji: "🗺️",
    color: "#EBF8FF",
    vocabulary: [
      { word: "El lavabo / baño", translations: { en: "Bathroom / Toilet", ar: "الحمام", uk: "Туалет / Ванна", fr: "Toilettes / Salle de bain" }, imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&auto=format&fit=crop&q=60", emoji: "🚽", color: "#EBF8FF" },
      { word: "El autobús", translations: { en: "Bus", ar: "حافلة", uk: "Автобус", fr: "Bus" }, imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=200&auto=format&fit=crop&q=60", emoji: "🚌", color: "#FFF5F5" },
      { word: "El metro", translations: { en: "Subway / Metro", ar: "مترو الأنفاق", uk: "Метро", fr: "Métro" }, imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=200&auto=format&fit=crop&q=60", emoji: "🚇", color: "#E2F3E7" },
      { word: "La tienda", translations: { en: "Store / Shop", ar: "متجر", uk: "Магазин", fr: "Magasin" }, imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=200&auto=format&fit=crop&q=60", emoji: "🏪", color: "#FEFCBF" },
      { word: "La farmacia", translations: { en: "Pharmacy", ar: "صيدلية", uk: "Аптека", fr: "Pharmacie" }, imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&auto=format&fit=crop&q=60", emoji: "💊", color: "#FCE8E8" },
      { word: "El hospital", translations: { en: "Hospital", ar: "مستشفى", uk: "Лікарня", fr: "Hôpital" }, imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=200&auto=format&fit=crop&q=60", emoji: "🏥", color: "#E3EEF9" }
    ],
    content: `
## Preguntar por lugares <trans en=\"(## Ask about places)\" ar=\"(## اسأل عن الأماكن)\" uk=\"(## Запитайте про місця)\" fr=\"(## Renseignez-vous sur les lieux)\"/>

Si estás perdido o necesitas algo urgente, puedes usar: **¿Dónde está...?** <trans en="(Where is...?)" ar="(أين...؟)" uk="(Де знаходиться...?)" fr="(Où est...?)"/>

*   ¿Dónde está **el lavabo**? <trans en="(Where is the bathroom?)" ar="(أين الحمام؟)" uk="(Де туалет?)" fr="(Où sont les toilettes ?)"/>
*   ¿Dónde está **el autobús**?
*   ¿Dónde está **la estación de metro**?
*   ¿Dónde está **la tienda** de comida?
    `,
    exercises: [
      {
        id: "ex1",
        question: "Necesitas lavarte las manos. Preguntas: ¿Dónde está...? <trans en=\"(You need to wash your hands.)\" ar=\"(تحتاج إلى غسل يديك. الأسئلة: أين...؟)\" uk=\"(Треба вимити руки. Запитання: Де...?)\" fr=\"(Vous devez vous laver les mains. Questions : Où est... ?)\"/>",
        options: ["el metro", "el lavabo", "el autobús"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Quieres comprar algo de comida. Preguntas: ¿Dónde está...? <trans en=\"(You want to buy some food.)\" ar=\"(تريد شراء بعض الطعام. الأسئلة: أين...؟)\" uk=\"(Ви хочете купити трохи їжі. Запитання: Де...?)\" fr=\"(Vous voulez acheter de la nourriture. Questions : Où est... ?)\"/>",
        options: ["la tienda", "el hospital", "el mar"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a2-gram-necesidades",
    topic: "Necesidades",
    title: "Quiero y Necesito",
    level: "A2",
    category: "Gramática",
    description: "Aprende a expresar tus deseos y necesidades: quiero comprar, necesito ayuda, quiero ir a...",
    imageUrl: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=600&auto=format&fit=crop&q=80",
    emoji: "🛒",
    color: "#F3E8FF",
    vocabulary: [
      { word: "Quiero", translations: { en: "I want", ar: "أريد", uk: "Я хочу", fr: "Je veux" }, imageUrl: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=200&auto=format&fit=crop&q=60", emoji: "🤲", color: "#F3E8FF" },
      { word: "Necesito", translations: { en: "I need", ar: "أحتاج", uk: "Мені потрібно", fr: "J'ai besoin" }, imageUrl: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=200&auto=format&fit=crop&q=60", emoji: "❗", color: "#FCE8E8" },
      { word: "Comprar", translations: { en: "To buy", ar: "أشتري", uk: "Купити", fr: "Acheter" }, imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&auto=format&fit=crop&q=60", emoji: "🛍️", color: "#E3EEF9" },
      { word: "Ir", translations: { en: "To go", ar: "أذهب", uk: "Іти", fr: "Aller" }, imageUrl: "https://images.unsplash.com/photo-15024661135-423995f22d0b?w=200&auto=format&fit=crop&q=60", emoji: "🚶", color: "#E2F3E7" },
      { word: "Ayuda", translations: { en: "Help", ar: "مساعدة", uk: "Допомога", fr: "Aide" }, imageUrl: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=200&auto=format&fit=crop&q=60", emoji: "🆘", color: "#FFF4E5" }
    ],
    content: `
## Expresar deseos y necesidades <trans en=\"(## Express wants and needs)\" ar=\"(## التعبير عن الرغبات والاحتياجات)\" uk=\"(## Виражайте бажання та потреби)\" fr=\"(## Exprimer les désirs et les besoins)\"/>

Para pedir cosas o decir adónde vas, usamos **Quiero** (deseo) o **Necesito** (obligación/necesidad). <trans en=\"(To ask for things or say where you are going, we use **I want** (desire) or **I need** (obligation/need).)\" ar=\"(لنطلب أشياء أو نقول إلى أين أنت ذاهب، نستخدم **أريد** (الرغبة) أو **أحتاج** (الالتزام/الحاجة).)\" uk=\"(Щоб попросити щось або сказати, куди ви йдете, ми використовуємо **Я хочу** (бажання) або **Мені потрібно** (обов’язок/потреба).)\" fr=\"(Pour demander des choses ou dire où l'on va, on utilise **Je veux** (désir) ou **J'ai besoin** (obligation/besoin).)\"/>

*   **Quiero comprar** agua. <trans en="(I want to buy water)" ar="(أريد شراء الماء)" uk="(Я хочу купити воду)" fr="(Je veux acheter de l'eau)"/>
*   **Quiero ir a** la estación. <trans en="(I want to go to the station)" ar="(أريد الذهاب إلى المحطة)" uk="(Я хочу піти на станцію)" fr="(Je veux aller à la station)"/>
*   **Necesito** ayuda, por favor. <trans en="(I need help, please)" ar="(أحتاج إلى مساعدة، من فضلك)" uk="(Мені потрібна допомога, будь ласка)" fr="(J'ai besoin d'aide, s'il vous plaît)"/>
*   **Necesito** trabajar. <trans en="(I need to work)" ar="(أحتاج إلى العمل)" uk="(Мені треба працювати)" fr="(J'ai besoin de travailler)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "No tienes agua y tienes mucha sed. Dices: '______ comprar agua'. <trans en=\"(You have no water and you are very thirsty.)\" ar=\"(ليس لديك ماء وأنت عطشان جداً. تقول: ______ شراء الماء.)\" uk=\"(У вас немає води, і ви відчуваєте сильну спрагу. Ви говорите: «______ купіть воду».)\" fr=\"(Vous n'avez pas d'eau et vous avez très soif. Vous dites : « ______ achète de l'eau ».)\"/>",
        options: ["Dónde", "Necesito", "Hola"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Cómo pides que alguien te asista? <trans en=\"(How do you ask someone to assist you?)\" ar=\"(كيف تطلب من شخص أن يساعدك؟)\" uk=\"(Як попросити когось допомогти вам?)\" fr=\"(Comment demander à quelqu’un de vous aider ?)\"/>",
        options: ["Necesito ayuda", "Quiero ir", "El lavabo"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a2-gram-tener-estados",
    topic: "Estados Físicos",
    title: "Tengo / No tengo",
    level: "A2",
    category: "Gramática",
    description: "Usa el verbo TENER para hablar de lo que posees y de tus sensaciones corporales.",
    imageUrl: "https://images.unsplash.com/photo-1511688868859-7650ade30331?w=600&auto=format&fit=crop&q=80",
    emoji: "🌡️",
    color: "#FFF4E5",
    vocabulary: [
      { word: "Tengo hambre", translations: { en: "I'm hungry", ar: "أشعر بالجوع", uk: "Я голодний", fr: "J'ai faim" }, imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&auto=format&fit=crop&q=60", emoji: "🤤", color: "#FFF4E5" },
      { word: "Tengo sed", translations: { en: "I'm thirsty", ar: "أشعر بالعطش", uk: "Я хочу пити", fr: "J'ai soif" }, imageUrl: "https://images.unsplash.com/photo-1548964856-ac520a4a9f30?w=200&auto=format&fit=crop&q=60", emoji: "🥛", color: "#E3EEF9" },
      { word: "Tengo frío", translations: { en: "I'm cold", ar: "أشعر بالبرد", uk: "Мені холодно", fr: "J'ai froid" }, imageUrl: "https://images.unsplash.com/photo-1511688868859-7650ade30331?w=200&auto=format&fit=crop&q=60", emoji: "🥶", color: "#EBF8FF" },
      { word: "Tengo calor", translations: { en: "I'm hot", ar: "أشعر بالحر", uk: "Мені жарко", fr: "J'ai chaud" }, imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&auto=format&fit=crop&q=60", emoji: "🥵", color: "#FCE8E8" },
      { word: "Tengo miedo", translations: { en: "I'm afraid", ar: "أشعر بالخوف", uk: "Мені страшно", fr: "J'ai peur" }, imageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=200&auto=format&fit=crop&q=60", emoji: "😨", color: "#F3E8FF" }
    ],
    content: `
## Posesión y Estados Físicos <trans en=\"(## Possession and Physical States)\" ar=\"(## الحيازة والحالات المادية)\" uk=\"(## Володіння та фізичні стани)\" fr=\"(## Possession et états physiques)\"/>

Usamos **Tengo** para decir las cosas que son nuestras, pero *también* para cómo nos sentimos físicamente. <trans en=\"(We use **I have** to say the things that are ours, but *also* for how we feel physically.)\" ar=\"(نحن نستخدم **لدي** لنقول الأشياء التي لنا، ولكن *أيضًا* لنقول ما نشعر به جسديًا.)\" uk=\"(Ми використовуємо **Я маю**, щоб сказати те, що належить нам, але *також* для того, як ми відчуваємо себе фізично.)\" fr=\"(Nous utilisons **J'ai** pour dire les choses qui nous appartiennent, mais *aussi* pour ce que nous ressentons physiquement.)\"/>

### Posesión <trans en=\"(### Possession)\" ar=\"(### تملُّك)\" uk=\"(### Володіння)\" fr=\"(### Possession)\"/>
*   **Tengo** dinero. <trans en="(I have money)" ar="(عندي مال)" uk="(У мене є гроші)" fr="(J'ai de l'argent)"/>
*   **No tengo** teléfono. <trans en="(I don't have a phone)" ar="(ليس عندي هاتف)" uk="(У мене немає телефону)" fr="(Je n'ai pas de téléphone)"/>

### Sensaciones <trans en=\"(### Sensations)\" ar=\"(### الأحاسيس)\" uk=\"(### Відчуття)\" fr=\"(### Sentiments)\"/>
*   **Tengo hambre** (quiero comer).
*   **Tengo sed** (quiero beber).
*   **Tengo frío** (necesito una chaqueta).
    `,
    exercises: [
      {
        id: "ex1",
        question: "Si quieres comer porque tu estómago está vacío, dices: <trans en=\"(If you want to eat because your stomach is empty, you say:)\" ar=\"(إذا أردت أن تأكل لأن معدتك فارغة فقل:)\" uk=\"(Якщо ви хочете їсти, тому що ваш шлунок порожній, ви говорите:)\" fr=\"(Si vous voulez manger parce que votre estomac est vide, vous dites :)\"/>",
        options: ["Tengo frío", "Tengo hambre", "Tengo dinero"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Para decir 'I don't have money', en español es: <trans en=\"(To say 'I don't have money', in Spanish it is:)\" ar=\"(لقول 'ليس لدي المال'، في الإسبانية هو:)\" uk=\"(Сказати «у мене немає грошей» іспанською:)\" fr=\"(Pour dire 'Je n'ai pas d'argent', en espagnol, c'est :)\"/>",
        options: ["No tengo dinero", "Necesito dinero", "Dónde está el dinero"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "a2-gram-me-duele",
    topic: "Expresiones",
    title: "Me duele, me gusta...",
    level: "A2",
    category: "Gramática",
    description: "Aprende a expresar dolor, molestias, gustos y preocupaciones usando 'Me'.",
    imageUrl: "https://images.unsplash.com/photo-1584515901387-a7a1a63376B9?w=600&auto=format&fit=crop&q=80",
    emoji: "🤕",
    color: "#FCE8E8",
    vocabulary: [
      { word: "Me duele", translations: { en: "It hurts", ar: "يؤلمني", uk: "Мені боляче", fr: "J'ai mal" }, imageUrl: "https://images.unsplash.com/photo-1584515901387-a7a1a63376B9?w=200&auto=format&fit=crop&q=60", emoji: "🤕", color: "#FCE8E8" },
      { word: "Me molesta", translations: { en: "It bothers me", ar: "يزعجني", uk: "Мене турбує", fr: "Ça me dérange" }, imageUrl: "https://images.unsplash.com/photo-1584515901387-a7a1a63376B9?w=200&auto=format&fit=crop&q=60", emoji: "😠", color: "#FFF4E5" },
      { word: "Me aburre", translations: { en: "It bores me", ar: "يصيبني بالملل", uk: "Мені нудно", fr: "Ça m'ennuie" }, imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&auto=format&fit=crop&q=60", emoji: "🥱", color: "#E3EEF9" },
      { word: "Me preocupa", translations: { en: "It worries me", ar: "يقلقني", uk: "Мене хвилює", fr: "Ça m'inquiète" }, imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=200&auto=format&fit=crop&q=60", emoji: "😟", color: "#F3E8FF" }
    ],
    content: `
## Expresando sentimientos y dolor <trans en=\"(## Expressing feelings and pain)\" ar=\"(##التعبير عن المشاعر والألم)\" uk=\"(## Вираження почуттів і болю)\" fr=\"(## Exprimer ses sentiments et sa douleur)\"/>

Algunos verbos en español necesitan un "pronombre" delante (como **me**, **te**, **le**) para saber a quién le afecta. <trans en=\"(Some verbs in Spanish need a 'pronoun' in front (like **me**, **te**, **le**) to know who it affects.)\" ar=\"(تحتاج بعض الأفعال في اللغة الإسبانية إلى 'ضمير' في المقدمة (مثل **me**، **te**، **le**) لمعرفة من يؤثر عليه.)\" uk=\"(Деякі дієслова в іспанській мові потребують «займенника» попереду (наприклад, **me**, **te**, **le**), щоб знати, на кого вони впливають.)\" fr=\"(Certains verbes en espagnol ont besoin d'un « pronom » devant (comme **me**, **te**, **le**) pour savoir qui cela affecte.)\"/>

*   **Me duele** la cabeza. <trans en="(My head hurts)" ar="(رأسي يؤلمني)" uk="(У мене болить голова)" fr="(J'ai mal à la tête)"/>
*   **Me duele** el estómago.
*   **Me gusta** España. <trans en="(I like Spain)" ar="(تعجبني إسبانيا)" uk="(Мені подобається Іспанія)" fr="(J'aime l'Espagne)"/>
*   **Me molesta** el ruido. <trans en="(The noise bothers me)" ar="(الضوضاء تزعجني)" uk="(Мене дратує шум)" fr="(Le bruit me dérange)"/>
*   **Me preocupa** mi familia. <trans en="(I am worried about my family)" ar="(أنا قلق على عائلتي)" uk="(Я хвилююся за свою сім'ю)" fr="(Je m'inquiète pour ma famille)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "Si tu cabeza no está bien y sientes dolor, dices: <trans en=\"(If your head is not right and you feel pain, you say:)\" ar=\"(إذا كان رأسك ليس في مكانه الصحيح وتشعر بالألم، فقل:)\" uk=\"(Якщо ваша голова не в порядку і ви відчуваєте біль, скажіть:)\" fr=\"(Si votre tête ne va pas bien et que vous ressentez de la douleur, vous dites :)\"/>",
        options: ["Me gusta la cabeza", "Tengo cabeza", "Me duele la cabeza"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "Si algo es muy ruidoso y no te deja dormir: <trans en=\"(If something is very noisy and doesn't let you sleep:)\" ar=\"(إذا كان هناك شيء صاخب جدًا ولا يسمح لك بالنوم:)\" uk=\"(Якщо щось дуже шумить і не дає вам спати:)\" fr=\"(Si quelque chose est très bruyant et ne vous permet pas de dormir :)\"/>",
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
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80",
    emoji: "🛒",
    color: "#E2F3E7",
    content: `
## LECTURA: La lista de la compra <trans en=\"(## READING: The shopping list)\" ar=\"(## القراءة: قائمة التسوق)\" uk=\"(## ЧИТАННЯ: список покупок)\" fr=\"(## LECTURE : La liste de courses)\"/>

> *"Hoy es sábado y Ana va al supermercado. Ana necesita muchas cosas para la semana. En su lista de la compra tiene: manzanas, leche, arroz y pan."* <trans en=\"(> *'Today is Saturday and Ana is going to the supermarket. Ana needs many things for the week. On her shopping list she has: apples, milk, rice and bread.'*)\" ar=\"(> *'اليوم هو السبت وآنا ذاهبة إلى السوبر ماركت. آنا تحتاج إلى أشياء كثيرة لهذا الأسبوع. في قائمة التسوق لديها: التفاح والحليب والأرز والخبز.'*)\" uk=\"(> *'Сьогодні субота, і Ана йде в супермаркет. Ані потрібно багато речей на тиждень. У її списку покупок у неї: яблука, молоко, рис і хліб.'*)\" fr=\"(> *'Aujourd'hui, c'est samedi et Ana va au supermarché. Ana a besoin de beaucoup de choses pour la semaine. Sur sa liste de courses, elle a : des pommes, du lait, du riz et du pain.'*)\"/>

> *"Primero, ella va a la sección de frutas. Después, compra la leche y el arroz. Al final, Ana paga en la caja con dinero en efectivo. El cajero dice: 'Gracias, ¡buen fin de semana!'."* <trans en=\"(> *'First, she goes to the fruit section. Then, she buys the milk and rice. At the end, Ana pays at the register with cash. The cashier says: 'Thank you, have a good weekend!'.'*)\" ar=\"(> *'أولاً، تذهب إلى قسم الفاكهة. ثم تشتري الحليب والأرز. وفي النهاية، تدفع آنا نقدًا في السجل. ويقول أمين الصندوق: 'شكرًا لك، أتمنى لك عطلة نهاية أسبوع سعيدة!'*)\" uk=\"(> *'Спочатку вона йде до відділу фруктів. Потім вона купує молоко та рис. Наприкінці Ана розраховується в касі готівкою. Касир каже: 'Дякую, гарних вихідних!''*)\" fr=\"(> *'D'abord, elle va au rayon fruits. Ensuite, elle achète le lait et le riz. À la fin, Ana paie en espèces à la caisse. La caissière dit : 'Merci, bon week-end !'.'*)\"/>

### Lee la lectura con atención y responde al ejercicio. <trans en=\"(### Read the reading carefully and respond to the exercise.)\" ar=\"(### اقرأ القراءة بعناية وأجب عن التمرين.)\" uk=\"(### Уважно прочитайте текст і дайте відповідь на вправу.)\" fr=\"(### Lisez attentivement la lecture et répondez à l'exercice.)\"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Qué día va Ana al supermercado? <trans en=\"(What day does Ana go to the supermarket?)\" ar=\"(في أي يوم تذهب آنا إلى السوبر ماركت؟)\" uk=\"(У який день Аня йде в супермаркет?)\" fr=\"(Quel jour Ana va-t-elle au supermarché ?)\"/>",
        options: ["El lunes", "El sábado", "El domingo"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Qué compra primero Ana? <trans en=\"(What does Ana buy first?)\" ar=\"(ماذا تشتري آنا أولاً؟)\" uk=\"(Що Аня купує в першу чергу?)\" fr=\"(Qu’est-ce qu’Ana achète en premier ?)\"/>",
        options: ["Frutas (manzanas)", "Leche", "Carne"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "¿Cómo paga Ana? <trans en=\"(How does Ana pay?)\" ar=\"(كيف تدفع آنا؟)\" uk=\"(Як Ана платить?)\" fr=\"(Comment Ana paie-t-elle ?)\"/>",
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
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop&q=80",
    emoji: "🏥",
    color: "#FFF5F5",
    content: `
## LECTURA: Necesito pastillas <trans en=\"(## READING: I need pills)\" ar=\"(## القراءة: أحتاج إلى حبوب)\" uk=\"(## ЧИТАННЯ: Мені потрібні таблетки)\" fr=\"(## LECTURE : J'ai besoin de pilules)\"/>

> *Carlos está en la farmacia porque está enfermo.* <trans en=\"(> *Carlos is at the pharmacy because he is sick.*)\" ar=\"(> *كارلوس في الصيدلية لأنه مريض.*)\" uk=\"(> *Карлос в аптеці, тому що він хворий.*)\" fr=\"(> *Carlos est à la pharmacie parce qu'il est malade.*)\"/>
> **Farmacéutico:** Hola, buenos días. ¿En qué puedo ayudarle? <trans en=\"(> **Pharmacist:** Hello, good morning.)\" ar=\"(> **الصيدلي:** أهلاً، صباح الخير. كيف يمكنني مساعدك؟)\" uk=\"(> **Фармацевт:** Привіт, доброго ранку. Чим я можу вам допомогти?)\" fr=\"(> **Pharmacien :** Bonjour, bonjour. Comment puis-je t'aider?)\"/>
> **Carlos:** Hola. Me duele la cabeza mucho y tengo fiebre. Necesito pastillas, por favor. <trans en=\"(> **Carlos:** Hello.)\" ar=\"(> ** كارلوس: ** مرحبًا. رأسي يؤلمني كثيراً وأعاني من الحمى. أحتاج إلى حبوب من فضلك.)\" uk=\"(> **Карлос:** Привіт. У мене сильно болить голова і температура. Мені потрібні таблетки, будь ласка.)\" fr=\"(> **Carlos :** Bonjour. J'ai très mal à la tête et j'ai de la fièvre. J'ai besoin de pilules, s'il vous plaît.)\"/>
> **Farmacéutico:** Sí, claro. Tome estas pastillas cada ocho (8) horas con un poco de agua. <trans en=\"(> **Pharmacist:** Yes, of course.)\" ar=\"(> **الصيدلاني:** نعم بالطبع. تناول هذه الحبوب كل ثماني (8) ساعات مع القليل من الماء.)\" uk=\"(> **Фармацевт:** Так, звичайно. Приймайте ці таблетки кожні вісім (8) годин, запиваючи невеликою кількістю води.)\" fr=\"(> **Pharmacien :** Oui, bien sûr. Prenez ces comprimés toutes les huit (8) heures avec un peu d'eau.)\"/>
> **Carlos:** ¿Cuánto cuesta? <trans en=\"(> **Carlos:** How much does it cost?)\" ar=\"(> **كارلوس:** كم التكلفة؟)\" uk=\"(> **Карлос:** Скільки це коштує?)\" fr=\"(> **Carlos :** Combien ça coûte ?)\"/>
> **Farmacéutico:** Son cinco euros. <trans en=\"(> **Pharmacist:** It's five euros.)\" ar=\"(> **الصيدلي:** ثمنها خمسة يورو.)\" uk=\"(> **Фармацевт:** Це п'ять євро.)\" fr=\"(> **Pharmacien :** C'est cinq euros.)\"/>
> **Carlos:** Aquí tiene. Muchas gracias. <trans en=\"(> **Carlos:** Here you go.)\" ar=\"(> **كارلوس:** تفضل. شكراً جزيلاً.)\" uk=\"(> **Карлос:** Ось. Дуже дякую.)\" fr=\"(> **Carlos :** Et voilà. Merci beaucoup.)\"/>

### Lee la conversación con atención y responde al ejercicio. <trans en=\"(### Read the conversation carefully and respond to the exercise.)\" ar=\"(### اقرأ المحادثة بعناية وأجب عن التمرين.)\" uk=\"(### Уважно прочитайте розмову та дайте відповідь на вправу.)\" fr=\"(### Lisez attentivement la conversation et répondez à l'exercice.)\"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Qué le pasa a Carlos? <trans en=\"(What's wrong with Carlos?)\" ar=\"(ما هو الخطأ في كارلوس؟)\" uk=\"(Що не так з Карлосом?)\" fr=\"(Qu'est-ce qui ne va pas avec Carlos ?)\"/>",
        options: ["Le duele la cabeza y tiene fiebre", "Le duele el estómago", "Tiene hambre y necesita comer"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "¿Cada cuántas horas tiene que tomar las pastillas? <trans en=\"(How often do you have to take the pills?)\" ar=\"(كم مرة عليك أن تأخذ الحبوب؟)\" uk=\"(Як часто потрібно приймати таблетки?)\" fr=\"(À quelle fréquence devez-vous prendre les pilules ?)\"/>",
        options: ["Cada 5 horas", "Cada 8 horas", "Cada 10 horas"],
        correctAnswer: 1
      },
      {
        id: "ex3",
        question: "¿Cuánto dinero paga Carlos? <trans en=\"(How much money does Carlos pay?)\" ar=\"(كم من المال يدفع كارلوس؟)\" uk=\"(Скільки грошей платить Карлос?)\" fr=\"(Combien d’argent Carlos paie-t-il ?)\"/>",
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
    imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&auto=format&fit=crop&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80",
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
    imageUrl: "/images/lessons/horas_fechas.png",
    illustrationUrl: "/images/lessons/horas_fechas.png",
    emoji: "📅",
    color: "#E3EEF9",
    vocabulary: [
      { word: "Lunes", translations: { en: "Monday", ar: "الاثنين", uk: "Понеділок", fr: "Lundi" }, imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=200&auto=format&fit=crop&q=60", emoji: "1️⃣", color: "#E3EEF9" },
      { word: "Martes", translations: { en: "Tuesday", ar: "الثلاثاء", uk: "Вівторок", fr: "Mardi" }, imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=200&auto=format&fit=crop&q=60", emoji: "2️⃣", color: "#E3EEF9" },
      { word: "Enero", translations: { en: "January", ar: "يناير", uk: "Січень", fr: "Janvier" }, imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=200&auto=format&fit=crop&q=60", emoji: "❄️", color: "#E3EEF9" },
      { word: "La hora", translations: { en: "The time / hour", ar: "الوقت", uk: "Час", fr: "L'heure" }, imageUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=200&auto=format&fit=crop&q=60", emoji: "⌚", color: "#E3EEF9" }
    ],
    content: `
## Los Días de la Semana <trans en=\"(## The Days of the Week)\" ar=\"(##أيام الأسبوع)\" uk=\"(## Дні тижня)\" fr=\"(## Les jours de la semaine)\"/>
Lunes, Martes, Miércoles, Jueves, Viernes, Sábado y Domingo. <trans en=\"(Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday.)\" ar=\"(الاثنين والثلاثاء والأربعاء والخميس والجمعة والسبت والأحد.)\" uk=\"(Понеділок, вівторок, середа, четвер, п'ятниця, субота та неділя.)\" fr=\"(Lundi, mardi, mercredi, jeudi, vendredi, samedi et dimanche.)\"/>

## La Hora <trans en=\"(## The Time)\" ar=\"(## الوقت)\" uk=\"(## Час)\" fr=\"(## L'heure)\"/>
Para preguntar la hora: **¿Qué hora es?** <trans en="(What time is it?)" ar="(كم الساعة؟)" uk="(Котра година?)" fr="(Quelle heure est-il ?)"/>
Para responder: **Son las dos.** (2:00) o **Es la una.** (1:00). <trans en=\"(To answer: **It's two o'clock.** (2:00) or **It's one o'clock.** (1:00).)\" ar=\"(للإجابة: **إنها الساعة الثانية.** (2:00) أو **إنها الساعة الواحدة.** (1:00).)\" uk=\"(Щоб відповісти: **Це друга година.** (2:00) або **Це одна година.** (1:00).)\" fr=\"(Pour répondre : **Il est deux heures.** (2h00) ou **Il est une heure.** (1h00).)\"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "¿Qué día va después del lunes? <trans en=\"(What day comes after Monday?)\" ar=\"(ما هو اليوم الذي يأتي بعد يوم الاثنين؟)\" uk=\"(Який день наступає після понеділка?)\" fr=\"(Quel jour vient après lundi ?)\"/>",
        options: ["Miércoles", "Martes", "Sábado"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "¿Cómo preguntas la hora? <trans en=\"(How do you ask the time?)\" ar=\"(كيف تسأل عن الوقت؟)\" uk=\"(Як ви питаєте час?)\" fr=\"(Comment demander l'heure ?)\"/>",
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
    imageUrl: "/images/lessons/profesiones.png",
    illustrationUrl: "/images/lessons/profesiones.png",
    emoji: "💼",
    color: "#FCE8E8",
    vocabulary: [
      { word: "El médico / La médica", translations: { en: "Doctor", ar: "طبيب", uk: "Лікар", fr: "Médecin" }, imageUrl: "https://images.unsplash.com/photo-1584515901387-a7a1a63376B9?w=200&auto=format&fit=crop&q=60", emoji: "🩺", color: "#FCE8E8" },
      { word: "El profesor / La profesora", translations: { en: "Teacher", ar: "معلم", uk: "Вчитель", fr: "Professeur" }, imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&auto=format&fit=crop&q=60", emoji: "👨‍🏫", color: "#FCE8E8" },
      { word: "El cocinero / La cocinera", translations: { en: "Cook / Chef", ar: "طباخ", uk: "Кухар", fr: "Cuisinier" }, imageUrl: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=200&auto=format&fit=crop&q=60", emoji: "🍳", color: "#FCE8E8" }
    ],
    content: `
## ¿A qué te dedicas? <trans en=\"(## What do you do for a living?)\" ar=\"(## ماذا تعمل لكسب عيشك؟)\" uk=\"(## Чим ви заробляєте на життя?)\" fr=\"(## Que fais-tu dans la vie?)\"/>
Para hablar de nuestra profesión usamos el verbo SER. <trans en=\"(To talk about our profession we use the verb SER.)\" ar=\"(للحديث عن مهنتنا نستخدم الفعل SER.)\" uk=\"(Щоб говорити про нашу професію, ми використовуємо дієслово SER.)\" fr=\"(Pour parler de notre métier nous utilisons le verbe SER.)\"/>
*   **Soy** profesor. <trans en="(I am a teacher)" ar="(أنا معلم)" uk="(Я вчитель)" fr="(Je suis professeur)"/>
*   Ella **es** médica. <trans en="(She is a doctor)" ar="(هي طبيبة)" uk="(Вона лікар)" fr="(Elle est médecin)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "La persona que hace la comida es el... <trans en=\"(The person who makes the food is the...)\" ar=\"(الشخص الذي يصنع الطعام هو...)\" uk=\"(Людина, яка готує їжу, є...)\" fr=\"(La personne qui prépare la nourriture est la...)\"/>",
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
    imageUrl: "/images/lessons/familia.png",
    illustrationUrl: "/images/lessons/familia.png",
    emoji: "👨‍👩‍👦",
    color: "#E2F3E7",
    vocabulary: [
      { word: "La madre", translations: { en: "Mother", ar: "أم", uk: "Мати", fr: "Mère" }, imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=200&auto=format&fit=crop&q=60", emoji: "👩", color: "#E2F3E7" },
      { word: "El padre", translations: { en: "Father", ar: "أب", uk: "Батько", fr: "Père" }, imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=200&auto=format&fit=crop&q=60", emoji: "👨", color: "#E2F3E7" },
      { word: "El hermano / La hermana", translations: { en: "Brother / Sister", ar: "أخ / أخت", uk: "Брат / Сестра", fr: "Frère / Sœur" }, imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=200&auto=format&fit=crop&q=60", emoji: "👦", color: "#E2F3E7" },
      { word: "Alto / Alta", translations: { en: "Tall", ar: "طويل", uk: "Високий", fr: "Grand" }, imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&auto=format&fit=crop&q=60", emoji: "📏", color: "#E2F3E7" }
    ],
    content: `
## Mi Familia <trans en=\"(## My family)\" ar=\"(## عائلتي)\" uk=\"(## Моя сім'я)\" fr=\"(## Ma famille)\"/>
*   Mi mamá es **la madre**.
*   Mi papá es **el padre**.
*   Los hijos son **los hermanos**.

## Descripciones Físicas <trans en=\"(## Physical Descriptions)\" ar=\"(## الأوصاف الجسدية)\" uk=\"(## Фізичні описи)\" fr=\"(## Descriptions physiques)\"/>
Usamos el verbo SER para describir: <trans en=\"(We use the verb BE to describe:)\" ar=\"(نستخدم الفعل BE لوصف:)\" uk=\"(Ми використовуємо дієслово BE для опису:)\" fr=\"(Nous utilisons le verbe BE pour décrire :)\"/>
*   Mi hermano **es alto**. (Masculino)
*   Mi hermana **es alta**. (Femenina)
    `,
    exercises: [
      {
        id: "ex1",
        question: "El papá en español se dice también... <trans en=\"(The dad in Spanish is also said...)\" ar=\"(ويقال الأب بالإسبانية أيضًا...)\" uk=\"(Тато іспанською мовою також кажуть...)\" fr=\"(Le papa en espagnol est aussi dit...)\"/>",
        options: ["El padre", "El hermano", "El abuelo"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Para decir que tu hermana tiene mucha altura dices: Mi hermana es... <trans en=\"(To say that your sister is very tall you say: My sister is...)\" ar=\"(لكي تقول أن أختك طويلة جداً تقول: أختي...)\" uk=\"(Щоб сказати, що твоя сестра дуже висока, ти скажеш: Моя сестра...)\" fr=\"(Pour dire que votre sœur est très grande, vous dites : Ma sœur est...)\"/>",
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
    imageUrl: "/images/lessons/preguntas.png",
    illustrationUrl: "/images/lessons/preguntas.png",
    emoji: "❓",
    color: "#FFF4E5",
    vocabulary: [
      { word: "¿Qué?", translations: { en: "What?", ar: "ماذا؟", uk: "Що?", fr: "Quoi ?" }, imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=200&auto=format&fit=crop&q=60", emoji: "❓", color: "#FFF4E5" },
      { word: "¿Quién?", translations: { en: "Who?", ar: "من؟", uk: "Хто?", fr: "Qui ?" }, imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=200&auto=format&fit=crop&q=60", emoji: "👤", color: "#FFF4E5" },
      { word: "¿Dónde?", translations: { en: "Where?", ar: "أين؟", uk: "Де?", fr: "Où ?" }, imageUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=200&auto=format&fit=crop&q=60", emoji: "📍", color: "#FFF4E5" },
      { word: "¿Cuándo?", translations: { en: "When?", ar: "متى؟", uk: "Коли?", fr: "Quand ?" }, imageUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=200&auto=format&fit=crop&q=60", emoji: "⏳", color: "#FFF4E5" }
    ],
    content: `
## Palabras para Preguntar <trans en=\"(## Words to Ask)\" ar=\"(## الكلمات التي يجب طرحها)\" uk=\"(## Слова для запитань)\" fr=\"(## Mots à demander)\"/>
Para hacer preguntas necesitas estas palabras. ¡Recuerda que llevan tilde (´) y se usa el signo (¿?)! <trans en=\"(To ask questions you need these words.)\" ar=\"(لطرح الأسئلة تحتاج إلى هذه الكلمات. تذكر أن لديهم لهجة (´) ويتم استخدام العلامة (؟)!)\" uk=\"(Щоб поставити запитання, потрібні ці слова. Пам’ятайте, що вони мають наголос (´) і використовується знак (?)!)\" fr=\"(Pour poser des questions, vous avez besoin de ces mots. N'oubliez pas qu'ils ont un accent (´) et que le signe (?) est utilisé !)\"/>

*   **¿Qué es esto?** <trans en="(What is this?)" ar="(ما هذا؟)" uk="(Що це?)" fr="(Qu'est-ce que c'est ?)"/>
*   **¿Quién eres tú?** <trans en="(Who are you?)" ar="(من أنت؟)" uk="(Хто ти?)" fr="(Qui es-tu ?)"/>
*   **¿Dónde está el baño?** <trans en="(Where is the bathroom?)" ar="(أين الحمام؟)" uk="(Де туалет?)" fr="(Où est la salle de bain ?)"/>
*   **¿Cuándo llegas?** <trans en="(When do you arrive?)" ar="(متى تصل؟)" uk="(Коли ти прибуваєш?)" fr="(Quand arrives-tu ?)"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "Si quieres saber el lugar, preguntas... <trans en=\"(If you want to know the place, ask...)\" ar=\"(إذا أردت أن تعرف المكان فاسأل..)\" uk=\"(Якщо ви хочете знати місце, запитайте...)\" fr=\"(Si vous voulez connaître l'endroit, demandez...)\"/>",
        options: ["¿Quién?", "¿Qué?", "¿Dónde?"],
        correctAnswer: 2
      },
      {
        id: "ex2",
        question: "Para preguntar por una persona usas: <trans en=\"(To ask for a person you use:)\" ar=\"(للاستفسار عن شخص تستخدمه:)\" uk=\"(Щоб запитати людину, яку ви використовуєте:)\" fr=\"(Pour demander une personne que vous utilisez :)\"/>",
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
    imageUrl: "/images/lessons/comida_casa.png",
    emoji: "🍞",
    color: "#EBF8FF",
    vocabulary: [
      { word: "El pan", translations: { en: "Bread", ar: "خبز", uk: "Хліб", fr: "Pain" }, imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&auto=format&fit=crop&q=60", emoji: "🍞", color: "#EBF8FF" },
      { word: "El agua", translations: { en: "Water", ar: "ماء", uk: "Вода", fr: "Eau" }, imageUrl: "https://images.unsplash.com/photo-1548964856-ac520a4a9f30?w=200&auto=format&fit=crop&q=60", emoji: "💧", color: "#EBF8FF" },
      { word: "El dormitorio", translations: { en: "Bedroom", ar: "غرفة نوم", uk: "Спальня", fr: "Chambre" }, imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=200&auto=format&fit=crop&q=60", emoji: "🛏️", color: "#EBF8FF" },
      { word: "La cocina", translations: { en: "Kitchen", ar: "مطبخ", uk: "Кухня", fr: "Cuisine" }, imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=200&auto=format&fit=crop&q=60", emoji: "🍳", color: "#EBF8FF" }
    ],
    content: `
## Comida Básica <trans en=\"(## Basic Food)\" ar=\"(## الأغذية الأساسية)\" uk=\"(## Основне харчування)\" fr=\"(## Aliments de base)\"/>
*   Quiero comer **pan**.
*   Necesito beber **agua**.

## La Casa <trans en=\"(## The House)\" ar=\"(##البيت)\" uk=\"(## Будинок)\" fr=\"(## La maison)\"/>
La casa tiene varias partes, como **el dormitorio** (para dormir) y **la cocina** (para cocinar). <trans en=\"(The house has several parts, such as **the bedroom** (for sleeping) and **the kitchen** (for cooking).)\" ar=\"(يتكون المنزل من عدة أجزاء مثل **غرفة النوم** (للنوم) و **المطبخ** (للطهي).)\" uk=\"(У будинку є кілька частин, наприклад **спальня** (для сну) і **кухня** (для приготування їжі).)\" fr=\"(La maison comprend plusieurs parties, comme **la chambre** (pour dormir) et **la cuisine** (pour cuisiner).)\"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "El lugar donde duermes se llama: <trans en=\"(The place where you sleep is called:)\" ar=\"(المكان الذي تنام فيه يسمى :)\" uk=\"(Місце, де ти спиш, називається:)\" fr=\"(L'endroit où vous dormez s'appelle :)\"/>",
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
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&auto=format&fit=crop&q=80",
    emoji: "📅",
    color: "#FEFCBF",
    content: `
## El Pretérito Perfecto (He comido...) <trans en=\"(## The Past Perfect (I have eaten...))\" ar=\"(## الماضي التام (لقد أكلت...))\" uk=\"(## The Past Perfect (Я їв...))\" fr=\"(## Le plus-que-parfait (j'ai mangé...))\"/>

Usamos este tiempo para hablar de acciones pasadas que se conectan con el presente ("hoy", "esta mañana", "alguna vez"). Se forma con el verbo **HABER** + el **Participio**. <trans en=\"(We use this tense to talk about past actions that connect to the present ('today,' 'this morning,' 'sometime').)\" ar=\"(نستخدم هذا الزمن للحديث عن أفعال سابقة مرتبطة بالحاضر ('اليوم'، 'هذا الصباح'، 'في وقتٍ ما'). ويتكون من الفعل **حبر** + **النعت**.)\" uk=\"(Ми використовуємо цей час, щоб говорити про минулі дії, пов’язані з теперішнім («сьогодні», «сьогодні вранці», «колись»). Він утворений за допомогою дієслова **HABER** + **частка**.)\" fr=\"(Nous utilisons ce temps pour parler d'actions passées qui sont liées au présent (« aujourd'hui », « ce matin », « parfois »). Il se forme avec le verbe **HABER** + le **Participe**.)\"/>

### Verbo Haber <trans en=\"(### Verb Haber)\" ar=\"(### فعل هابر)\" uk=\"(### Дієслово Haber)\" fr=\"(### Verbe Haber)\"/>
*   Yo **he**
*   Tú **has**
*   Él/Ella **ha**
*   Nosotros **hemos**
*   Ellos **han**

### Participios Regulares <trans en=\"(### Regular Participles)\" ar=\"(### المشاركات العادية)\" uk=\"(### Звичайні причастя)\" fr=\"(### Participes Réguliers)\"/>
*   **-AR** -> -ado (hablar -> hablado, trabajar -> trabajado)
*   **-ER / -IR** -> -ido (comer -> comido, vivir -> vivido)

**Ejemplos:**
*   **Hoy he comido** pollo.
*   ¿Alguna vez **has estado** en España?
    `,
    exercises: [
      {
        id: "ex1",
        question: "Hoy nosotros _______ (trabajar) mucho. <trans en=\"(Today we _______ (work) a lot.)\" ar=\"(اليوم _______ (نعمل) كثيرًا.)\" uk=\"(Сьогодні ми _______ (працюємо) багато.)\" fr=\"(Aujourd'hui, nous _______ (travaillons) beaucoup.)\"/>",
        options: ["hemos trabajado", "han trabajado", "ha trabajado"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "¿Tú _____ (estar) en Marruecos alguna vez? <trans en=\"(Have you ever _____ (be) in Morocco?)\" ar=\"(هل سبق لك _____ (أن تكون) في المغرب؟)\" uk=\"(Ви коли-небудь _____ (були) в Марокко?)\" fr=\"(Avez-vous déjà _____ (être) au Maroc ?)\"/>",
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
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    emoji: "🔮",
    color: "#E2F3E7",
    content: `
## Ir + a + Infinitivo <trans en=\"(## Go + to + Infinitive)\" ar=\"(## اذهب + إلى + صيغة المصدر)\" uk=\"(## Go + to + Infinitive)\" fr=\"(## Aller + à + Infinitif)\"/>

Para hablar de planes (este fin de semana, mañana, la próxima semana), en el nivel A2 usamos mucho el "Futuro Próximo". <trans en=\"(To talk about plans (this weekend, tomorrow, next week), at level A2 we use the 'Near Future' a lot.)\" ar=\"(للحديث عن الخطط (نهاية هذا الأسبوع، غدًا، الأسبوع المقبل)، في المستوى A2 نستخدم 'المستقبل القريب' كثيرًا.)\" uk=\"(Щоб говорити про плани (ці вихідні, завтра, наступний тиждень), на рівні A2 ми часто використовуємо «Недалеке майбутнє».)\" fr=\"(Pour parler de projets (ce week-end, demain, la semaine prochaine), au niveau A2 on utilise beaucoup le 'Near Future'.)\"/>

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
        question: "El fin de semana, yo _______ español. <trans en=\"(On the weekend, I _______ Spanish.)\" ar=\"(في عطلة نهاية الأسبوع، أنا _______ الإسبانية.)\" uk=\"(На вихідних я _______ іспанською.)\" fr=\"(Le week-end, je _______ espagnol.)\"/>",
        options: ["voy a estudio", "voy a estudiar", "voy estudiar"],
        correctAnswer: 1
      },
      {
        id: "ex2",
        question: "Mañana nosotros _____ ir al cine. <trans en=\"(Tomorrow we _____ go to the cinema.)\" ar=\"(غدًا _____ نذهب إلى السينما.)\" uk=\"(Завтра ми _____ йдемо в кіно.)\" fr=\"(Demain, nous _____ allons au cinéma.)\"/>",
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
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80",
    emoji: "⚖️",
    color: "#F3E8FF",
    content: `
## Comparar en Español <trans en=\"(## Compare in Spanish)\" ar=\"(## قارن باللغة الاسبانية)\" uk=\"(## Порівняйте іспанською)\" fr=\"(## Comparer en espagnol)\"/>

Para comparar dos cosas o personas, usamos estas estructuras: <trans en=\"(To compare two things or people, we use these structures:)\" ar=\"(للمقارنة بين شيئين أو شخصين، نستخدم هذه الهياكل:)\" uk=\"(Щоб порівняти дві речі або людей, ми використовуємо такі структури:)\" fr=\"(Pour comparer deux choses ou personnes, nous utilisons ces structures :)\"/>

### Más / Menos ... que <trans en=\"(### More/Less...than)\" ar=\"(### أكثر/أقل...من)\" uk=\"(### Більше/менше... ніж)\" fr=\"(### Plus/Moins... que)\"/>
*   Málaga es **más grande que** mi pueblo.
*   El autobús es **menos rápido que** el tren.

### Mejor / Peor (Irregulares) <trans en=\"(### Better / Worse (Irregular))\" ar=\"(### أفضل / أسوأ (غير منتظم))\" uk=\"(### Краще / Гірше (нерегулярно))\" fr=\"(### Mieux / Pire (irrégulier))\"/>
No decimos "más bueno". Decimos **mejor**. <trans en=\"(We don't say 'more good.')\" ar=\"(نحن لا نقول 'المزيد من الخير'. نقول **أفضل**.)\" uk=\"(Ми не говоримо «більше добра». Ми кажемо **краще**.)\" fr=\"(Nous ne disons pas « plus de bien ». Nous disons **mieux**.)\"/>
No decimos "más malo". Decimos **peor**. <trans en=\"(We don't say 'badder.')\" ar=\"(نحن لا نقول 'أسوأ'. نقول **أسوأ**.)\" uk=\"(Ми не говоримо «гірше». Ми говоримо **гірше**.)\" fr=\"(Nous ne disons pas « plus méchant ». Nous disons **pire**.)\"/>
*   Esta comida es **mejor que** la otra.

### Tan ... como (Igualdad) <trans en=\"(### As...as (Equality))\" ar=\"(### كما...كما (المساواة))\" uk=\"(### As...as (Рівність))\" fr=\"(### Comme...comme (Égalité))\"/>
*   Mi hermano es **tan alto como** tú. (Tienen la misma altura).
    `,
    exercises: [
      {
        id: "ex1",
        question: "Un avión es ______ rápido que un coche. <trans en=\"(A plane is ______ faster than a car.)\" ar=\"(الطائرة ______ أسرع من السيارة.)\" uk=\"(Літак на ______ швидший за автомобіль.)\" fr=\"(Un avion est ______ plus rapide qu’une voiture.)\"/>",
        options: ["más", "mucho", "menos"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Mi inglés es ______ que mi español. (Es 'más bueno') <trans en=\"(My English is ______ than my Spanish.)\" ar=\"(لغتي الإنجليزية هي ______ من لغتي الإسبانية. (إنها 'أكثر جيدة'))\" uk=\"(Моя англійська ______ ніж моя іспанська. (Це 'більш добре'))\" fr=\"(Mon anglais est ______ supérieur à mon espagnol. (C'est 'plus bien'))\"/>",
        options: ["más bueno", "mejor", "peor"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "a2-vocab-restaurante",
    topic: "Restaurante",
    title: "En el Restaurante",
    level: "A2",
    category: "Vocabulario",
    description: "Aprende a pedir comida y pagar en un bar o restaurante.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80",
    emoji: "🍽️",
    color: "#FFF5F5",
    vocabulary: [
      { word: "El menú / La carta", translations: { en: "Menu", ar: "قائمة الطعام", uk: "Меню", fr: "Menu" }, imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&auto=format&fit=crop&q=60", emoji: "🧾", color: "#FFF5F5" },
      { word: "La cuenta", translations: { en: "The bill", ar: "الفاتورة", uk: "Рахунок", fr: "L'addition" }, imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&auto=format&fit=crop&q=60", emoji: "💶", color: "#FFF5F5" },
      { word: "Para beber", translations: { en: "To drink", ar: "للشرب", uk: "Пити", fr: "À boire" }, imageUrl: "https://images.unsplash.com/photo-1548964856-ac520a4a9f30?w=200&auto=format&fit=crop&q=60", emoji: "🥤", color: "#FFF5F5" },
      { word: "Para comer", translations: { en: "To eat", ar: "للأكل", uk: "Їсти", fr: "À manger" }, imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&auto=format&fit=crop&q=60", emoji: "🍽️", color: "#FFF5F5" }
    ],
    content: `
## Pedir en un Restaurante <trans en=\"(## Order at a Restaurant)\" ar=\"(## اطلب في مطعم)\" uk=\"(## Замовляйте в ресторані)\" fr=\"(## Commander dans un restaurant)\"/>

Camarero: **¿Qué van a tomar?** <trans en=\"(Waiter: **What are you going to have?**)\" ar=\"(النادل: **ماذا ستتناولين؟**)\" uk=\"(Офіціант: **Що ти збираєшся?**)\" fr=\"(Serveur : **Qu'est-ce que tu vas avoir ?**)\"/>
Tú: **Para comer quiero** arroz con pollo, por favor. <trans en=\"(You: **To eat I want** rice with chicken, please.)\" ar=\"(أنت: **لآكل أريد** أرز بالدجاج من فضلك.)\" uk=\"(Ви: **Їсти я хочу** рис з куркою, будь ласка.)\" fr=\"(Vous : **Pour manger, je veux** du riz avec du poulet, s'il vous plaît.)\"/>
Camarero: **¿Y para beber?** <trans en=\"(Waiter: **And to drink?**)\" ar=\"(النادل: **والشرب؟**)\" uk=\"(Офіціант: **А пити?**)\" fr=\"(Serveur : **Et boire ?**)\"/>
Tú: **Para beber quiero** agua. <trans en=\"(You: **I want** water to drink.)\" ar=\"(أنت: **أريد** الماء للشرب.)\" uk=\"(Ви: **Я хочу** води пити.)\" fr=\"(Vous : **Je veux** de l'eau à boire.)\"/>

Al final de la comida: <trans en=\"(At the end of the meal:)\" ar=\"(في نهاية الوجبة:)\" uk=\"(В кінці трапези:)\" fr=\"(A la fin du repas :)\"/>
Tú: **La cuenta, por favor.** (Para poder pagar). <trans en=\"(You: **The bill, please.** (To be able to pay).)\" ar=\"(أنت: **الفاتورة من فضلك.** (لتتمكن من الدفع).)\" uk=\"(Ви: **Рахунок, будь ласка.** (Щоб мати можливість оплатити).)\" fr=\"(Vous : **La facture, s'il vous plaît.** (Pour pouvoir payer).)\"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "Cuando terminas de comer y quieres pagar, dices... <trans en=\"(When you finish eating and want to pay, you say...)\" ar=\"(عندما تنتهي من الأكل وتريد أن تدفع، تقول...)\" uk=\"(Коли ви закінчуєте їсти і хочете заплатити, ви говорите...)\" fr=\"(Quand vous avez fini de manger et que vous voulez payer, vous dites...)\"/>",
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
    id: "a2-repaso-a1",
    topic: "Repaso",
    title: "Repaso General del Nivel A1",
    level: "A2",
    category: "Gramática",
    description: "Consolida las bases del español y repasa los contenidos clave del nivel A1. <trans en=\"(Consolidate the bases of Spanish and review the key contents of level A1.)\" ar=\"(قم بتوحيد قواعد اللغة الإسبانية ومراجعة المحتويات الأساسية للمستوى A1.)\" uk=\"(Закріпіть основи іспанської мови та повторіть ключовий зміст рівня A1.)\" fr=\"(Consolider les bases d'espagnol et revoir les contenus clés du niveau A1.)\"/>",
    emoji: "📚",
    color: "#E2F3E7",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80",
    vocabulary: [],
    content: `
## Objetivo del repaso A1 <trans en=\"(Review objective A1)\" ar=\"(هدف المراجعة A1)\" uk=\"(Мета огляду A1)\" fr=\"(Objectif de révision A1)\"/>
Consolidar las bases del español, reforzar confianza comunicativa y preparar el paso al nivel A2. <trans en=\"(Consolidate the bases of Spanish, reinforce communicative confidence and prepare for the move to level A2.)\" ar=\"(تعزيز قواعد اللغة الإسبانية وتعزيز الثقة في التواصل والاستعداد للانتقال إلى المستوى A2.)\" uk=\"(Закріпити основи іспанської мови, зміцнити комунікативну впевненість і підготуватися до переходу на рівень А2.)\" fr=\"(Consolider les bases de l'espagnol, renforcer la confiance communicative et préparer le passage au niveau A2.)\"/>

## Contenidos A1 repasados <trans en=\"(A1 contents reviewed)\" ar=\"(تمت مراجعة محتويات A1)\" uk=\"(Вміст A1 переглянуто)\" fr=\"(Contenu A1 révisé)\"/>
- **Verbos**: ser, estar, tener, vivir, querer, ir, me duele. <trans en=\"(**Verbs**: be, be, have, live, want, go, it hurts.)\" ar=\"(**الأفعال**: يكون، يكون، يملك، يعيش، يريد، يذهب، إنه مؤلم.)\" uk=\"(**Дієслова**: be, be, have, live, want, go, it hurts.)\" fr=\"(**Verbes** : être, être, avoir, vivre, vouloir, partir, ça fait mal.)\"/>
- **Gramática**: pronombres personales, posesivos (mi, tu, su), masculino / femenino, singular / plural, preguntas simples (qué, dónde, cuánto). <trans en=\"(**Grammar**: personal pronouns, possessives (my, your, their), masculine/feminine, singular/plural, simple questions (what, where, how much).)\" ar=\"(**القواعد**: الضمائر الشخصية، الملكية (my، your، their)، المذكر/المؤنث، المفرد/الجمع، الأسئلة البسيطة (ماذا، أين، كم).)\" uk=\"(**Граматика**: особисті займенники, присвійні (my, your, their), чоловічий/жіночий рід, однина/множина, прості питання (що, де, скільки).)\" fr=\"(**Grammaire** : pronoms personnels, possessifs (mon, votre, leur), masculin/féminin, singulier/pluriel, questions simples (quoi, où, combien).)\"/>
- **Temas**: presentaciones, familia, casa, supermercado, médico, transporte, profesiones, horas y saludos, países y nacionalidades. <trans en=\"(**Topics**: presentations, family, home, supermarket, doctor, transportation, professions, hours and greetings, countries and nationalities.)\" ar=\"(**المواضيع**: العروض التقديمية، الأسرة، المنزل، السوبر ماركت، الطبيب، المواصلات، المهن، الساعات والتحيات، البلدان والجنسيات.)\" uk=\"(**Теми**: презентації, сім’я, дім, супермаркет, лікар, транспорт, професії, години роботи та привітання, країни та національності.)\" fr=\"(**Sujets** : présentations, famille, maison, supermarché, médecin, transports, professions, horaires et salutations, pays et nationalités.)\"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "Yo ___ Ana. <trans en=\"(I ___ Ana.)\" ar=\"(أنا ___ آنا.)\" uk=\"(Я ___ Ана.)\" fr=\"(Je ___ Ana.)\"/>",
        options: ["soy", "estoy", "tengo"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Nosotros ___ en casa. <trans en=\"(We ___ at home.)\" ar=\"(نحن ___ في المنزل.)\" uk=\"(Ми ___ вдома.)\" fr=\"(Nous ___ à la maison.)\"/>",
        options: ["estamos", "somos", "tenemos"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Nosotros ___ documentos. <trans en=\"(We ___ documents.)\" ar=\"(نحن ___ المستندات.)\" uk=\"(Ми ___ документів.)\" fr=\"(Nous ___ documents.)\"/>",
        options: ["tenemos", "tenéis", "tienen"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "___ nombre es Carlos. <trans en=\"(___ name is Carlos.)\" ar=\"(___ الاسم كارلوس.)\" uk=\"(___ ім'я Карлос.)\" fr=\"(___ je m'appelle Carlos.)\"/>",
        options: ["Mi", "Tu", "Su"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Yo ___ España. <trans en=\"(I ___ Spain.)\" ar=\"(أنا ___ إسبانيا.)\" uk=\"(Я ___ Іспанія.)\" fr=\"(Je ___ Espagne.)\"/>",
        options: ["vivo en", "vivo", "vives en"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Me duele ___ cabeza. <trans en=\"(My head hurts.)\" ar=\"(رأسي يؤلمني.)\" uk=\"(Голова болить.)\" fr=\"(J'ai mal à la tête.)\"/>",
        options: ["la", "el", "los"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "¿___ años tienes? <trans en=\"(Are you ___ years old?)\" ar=\"(هل عمرك ___ سنة؟)\" uk=\"(Тобі ___ років?)\" fr=\"(Avez-vous ___ ans ?)\"/>",
        options: ["Cuántos", "Cuánto", "Qué"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Voy ___ autobús. <trans en=\"(I'm going ___ bus.)\" ar=\"(سأذهب ___ الحافلة.)\" uk=\"(Я їду ___ автобусом.)\" fr=\"(Je vais ___ bus.)\"/>",
        options: ["en", "a", "por"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Ser se usa para la profesión. <trans en=\"(Ser is used for profession.)\" ar=\"(يستخدم Ser للمهنة.)\" uk=\"(Ser використовується для професії.)\" fr=\"(Ser est utilisé pour la profession.)\"/>",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "— ¿Cómo te llamas? — ___ llamo Ana. <trans en=\"(- What is your name? — ___ my name is Ana.)\" ar=\"(- ما اسمك؟ — ___ اسمي آنا.)\" uk=\"(- Як тебе звуть? — ___ мене звати Ана.)\" fr=\"(- Quel est ton nom? — ___ je m'appelle Ana.)\"/>",
        options: ["Me", "Te", "Se"],
        correctAnswer: 0
      },
    ]
  },
  {
    id: "a2-vocab-clima",
    topic: "Clima",
    title: "La Naturaleza y el Clima",
    level: "A2",
    category: "Vocabulario",
    description: "Aprende vocabulario sobre el tiempo, el clima, las estaciones y la naturaleza. <trans en=\"(Learn vocabulary about weather, climate, seasons and nature.)\" ar=\"(تعلم المفردات حول الطقس والمناخ والمواسم والطبيعة.)\" uk=\"(Вивчайте словниковий запас про погоду, клімат, пори року та природу.)\" fr=\"(Apprenez le vocabulaire sur la météo, le climat, les saisons et la nature.)\"/>",
    emoji: "☀️",
    color: "#FFF4E5",
    imageUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&auto=format&fit=crop&q=80",
    vocabulary: [
      { word: "Naturaleza", translations: { en: "Nature", ar: "طبيعة", uk: "природа", fr: "Nature" }, emoji: "🌳", color: "#E2F3E7" },
      { word: "Clima", translations: { en: "Climate", ar: "مناخ", uk: "Клімат", fr: "Climat" }, emoji: "🌤️", color: "#E3EEF9" },
      { word: "Tiempo", translations: { en: "Time", ar: "وقت", uk: "час", fr: "Temps" }, emoji: "⏰", color: "#FCE8E8" },
      { word: "Sol", translations: { en: "Sun", ar: "شمس", uk: "сонце", fr: "Soleil" }, emoji: "☀️", color: "#F3E8FF" },
      { word: "Lluvia", translations: { en: "Rain", ar: "مطر", uk: "Дощ", fr: "Pluie" }, emoji: "🌧️", color: "#FEFCBF" },
      { word: "Viento", translations: { en: "Wind", ar: "رياح", uk: "Вітер", fr: "Vent" }, emoji: "💨", color: "#FFF4E5" },
      { word: "Nubes", translations: { en: "Clouds", ar: "الغيوم", uk: "Хмари", fr: "Nuages" }, emoji: "☁️", color: "#E2F3E7" },
      { word: "Calor", translations: { en: "Heat", ar: "حرارة", uk: "Тепло", fr: "Chaleur" }, emoji: "🥵", color: "#E3EEF9" },
      { word: "Frío", translations: { en: "Cold", ar: "بارد", uk: "Холодний", fr: "Froid" }, emoji: "🥶", color: "#FCE8E8" },
      { word: "Temperatura", translations: { en: "Temperature", ar: "درجة حرارة", uk: "Температура", fr: "Température" }, emoji: "🌡️", color: "#F3E8FF" },
      { word: "Cielo", translations: { en: "Darling", ar: "محبوب", uk: "кохана", fr: "Chéri" }, emoji: "🌌", color: "#FEFCBF" },
      { word: "Tierra", translations: { en: "Land", ar: "أرض", uk: "Земля", fr: "Atterrir" }, emoji: "🌍", color: "#FFF4E5" },
      { word: "Río", translations: { en: "River", ar: "نهر", uk: "Річка", fr: "Rivière" }, emoji: "🏞️", color: "#E2F3E7" },
      { word: "Montaña", translations: { en: "Mountain", ar: "جبل", uk: "Гора", fr: "Montagne" }, emoji: "⛰️", color: "#E3EEF9" },
      { word: "Campo", translations: { en: "Field", ar: "مجال", uk: "Поле", fr: "Champ" }, emoji: "🌾", color: "#FCE8E8" },
      { word: "Árbol", translations: { en: "Tree", ar: "شجرة", uk: "дерево", fr: "Arbre" }, emoji: "🌳", color: "#F3E8FF" },
      { word: "Árboles", translations: { en: "Trees", ar: "الأشجار", uk: "дерева", fr: "Arbres" }, emoji: "🌲", color: "#FEFCBF" },
      { word: "Flor", translations: { en: "Flower", ar: "ورد", uk: "Квітка", fr: "Fleur" }, emoji: "🌸", color: "#FFF4E5" },
      { word: "Flores", translations: { en: "Flowers", ar: "زهور", uk: "квіти", fr: "Fleurs" }, emoji: "💐", color: "#E2F3E7" },
      { word: "Agua", translations: { en: "Water", ar: "ماء", uk: "вода", fr: "Eau" }, emoji: "💧", color: "#E3EEF9" },
      { word: "Día", translations: { en: "Day", ar: "يوم", uk: "День", fr: "Jour" }, emoji: "☀️", color: "#FCE8E8" },
      { word: "Noche", translations: { en: "Evening", ar: "مساء", uk: "вечір", fr: "Soirée" }, emoji: "🌙", color: "#F3E8FF" },
      { word: "Verano", translations: { en: "Summer", ar: "صيف", uk: "Літо", fr: "Été" }, emoji: "🏖️", color: "#FEFCBF" },
      { word: "Invierno", translations: { en: "Winter", ar: "شتاء", uk: "Зима", fr: "Hiver" }, emoji: "❄️", color: "#FFF4E5" },
      { word: "Primavera", translations: { en: "Spring", ar: "ربيع", uk: "Весна", fr: "Printemps" }, emoji: "🌱", color: "#E2F3E7" },
      { word: "Otoño", translations: { en: "Autumn", ar: "خريف", uk: "осінь", fr: "Automne" }, emoji: "🍂", color: "#E3EEF9" },
      { word: "Hoy", translations: { en: "Today", ar: "اليوم", uk: "Сьогодні", fr: "Aujourd'hui" }, emoji: "📅", color: "#FCE8E8" },
      { word: "Mañana", translations: { en: "Tomorrow", ar: "غداً", uk: "завтра", fr: "Demain" }, emoji: "🌅", color: "#F3E8FF" },
      { word: "Ahora", translations: { en: "Now", ar: "الآن", uk: "Зараз", fr: "Maintenant" }, emoji: "⏱️", color: "#FEFCBF" },
      { word: "Siempre", translations: { en: "Always", ar: "دائماً", uk: "Завжди", fr: "Toujours" }, emoji: "🔄", color: "#FFF4E5" },
      { word: "A veces", translations: { en: "Sometimes", ar: "أحيانا", uk: "іноді", fr: "Parfois" }, emoji: "⏱️", color: "#E2F3E7" },
      { word: "Nunca", translations: { en: "Never", ar: "أبداً", uk: "Ніколи", fr: "Jamais" }, emoji: "❌", color: "#E3EEF9" },
      { word: "Mucho", translations: { en: "A lot", ar: "كثيراً", uk: "багато", fr: "Beaucoup" }, emoji: "📈", color: "#FCE8E8" },
      { word: "Poco", translations: { en: "Bit", ar: "قليل", uk: "біт", fr: "Peu" }, emoji: "📉", color: "#F3E8FF" },
      { word: "Muy", translations: { en: "Very", ar: "جداً", uk: "дуже", fr: "Très" }, emoji: "🔥", color: "#FEFCBF" },
      { word: "Bastante", translations: { en: "Quite", ar: "تمامًا", uk: "цілком", fr: "Assez" }, emoji: "⚖️", color: "#FFF4E5" },
      { word: "Bien", translations: { en: "Good", ar: "جيد", uk: "добре", fr: "Bien" }, emoji: "✅", color: "#E2F3E7" },
      { word: "Mal", translations: { en: "Evil", ar: "شر", uk: "зло", fr: "Mal" }, emoji: "❌", color: "#E3EEF9" },
      { word: "Mejor", translations: { en: "Better", ar: "أحسن", uk: "краще", fr: "Mieux" }, emoji: "🏆", color: "#FCE8E8" },
    ],
    content: `
## Hablar del clima <trans en=\"(Talk about the weather)\" ar=\"(تحدث عن الطقس)\" uk=\"(Розмова про погоду)\" fr=\"(Parlons de la météo)\"/>
En español usamos el verbo **hacer** para hablar del tiempo: <trans en=\"(In Spanish we use the verb **do** to talk about time:)\" ar=\"(في اللغة الإسبانية نستخدم الفعل **do** للحديث عن الوقت:)\" uk=\"(В іспанській мові ми використовуємо дієслово **do**, щоб говорити про час:)\" fr=\"(En espagnol, nous utilisons le verbe **do** pour parler du temps :)\"/>
- **Hace calor** <trans en=\"(**It's hot**)\" ar=\"(**الطقس حار**)\" uk=\"(**Спекотно**)\" fr=\"(**C'est chaud**)\"/>
- **Hace frío** <trans en=\"(**It's cold**)\" ar=\"(**انها بارده**)\" uk=\"(**Холодно**)\" fr=\"(**Il fait froid**)\"/>
- **Hace viento** <trans en=\"(**It's windy**)\" ar=\"(**الطقس عاصف**)\" uk=\"(**Вітер**)\" fr=\"(**Il y a du vent**)\"/>
- **Hace sol** <trans en=\"(**It's sunny**)\" ar=\"(**الطقس مشمس**)\" uk=\"(**Сонячно**)\" fr=\"(**Il fait beau**)\"/>
- **Hace buen tiempo** / **Hace mal tiempo** <trans en=\"(**The weather is good** / **The weather is bad**)\" ar=\"(**الطقس جيد** / **الطقس سيء**)\" uk=\"(**Погода хороша** / **Погода погана**)\" fr=\"(**Il fait beau** / **Il fait mauvais**)\"/>

También usamos verbos específicos como **llover** (llueve) o **nevar** (nieva). <trans en=\"(We also use specific verbs like **llover** (it rains) or **nevar** (it snows).)\" ar=\"(نستخدم أيضًا أفعالًا محددة مثل **llover** (تمطر) أو **nevar** (تتساقط الثلوج).)\" uk=\"(Ми також використовуємо спеціальні дієслова, наприклад **llover** (іде дощ) або **nevar** (іде сніг).)\" fr=\"(Nous utilisons également des verbes spécifiques comme **llover** (il pleut) ou **nevar** (il neige).)\"/>

## Adjetivos de clima <trans en=\"(climate adjectives)\" ar=\"(الصفات المناخية)\" uk=\"(кліматичні прикметники)\" fr=\"(adjectifs climatiques)\"/>
- Un día **frío** / **caliente** <trans en=\"(A **cold** / **hot** day)\" ar=\"(يوم **بارد** / **حار**)\" uk=\"(**Холодний** / **спекотний** день)\" fr=\"(Une journée **froide** / **chaude**)\"/>
- El clima **bueno** / **malo** <trans en=\"(The weather **good** / **bad**)\" ar=\"(الطقس ** جيد ** / ** سيء **)\" uk=\"(Погода **хороша** / **погана**)\" fr=\"(Le temps **bon** / **mauvais**)\"/>
- La temperatura **alta** / **baja** <trans en=\"(**high** / **low** temperature)\" ar=\"(**درجة حرارة عالية** / **منخفضة**)\" uk=\"(**висока** / **низька** температура)\" fr=\"(Température **élevée** / **basse**)\"/>
- El cielo **nublado** / **despejado** <trans en=\"(The sky **cloudy** / **clear**)\" ar=\"(السماء ** غائمة ** / ** صافية **)\" uk=\"(Небо **хмарне** / **ясне**)\" fr=\"(Le ciel **nuageux** / **clair**)\"/>

## Adverbios de frecuencia <trans en=\"(Adverbs of frequency)\" ar=\"(ظروف التردد)\" uk=\"(Прислівники частоти)\" fr=\"(Adverbes de fréquence)\"/>
- **Siempre** hace calor en verano. <trans en=\"(It is **always** hot in summer.)\" ar=\"(الجو **دائما** حار في الصيف.)\" uk=\"(Влітку **завжди** жарко.)\" fr=\"(Il fait **toujours** chaud en été.)\"/>
- **A veces** llueve en primavera. <trans en=\"(**Sometimes** it rains in spring.)\" ar=\"(**أحيانًا** تمطر في الربيع.)\" uk=\"(**Іноді** весною йде дощ.)\" fr=\"(**Parfois** il pleut au printemps.)\"/>
- **Nunca** nieva aquí. <trans en=\"(It **never** snows here.)\" ar=\"(** لا تتساقط الثلوج هنا أبدًا.)\" uk=\"(Тут **ніколи** не випадає сніг.)\" fr=\"(Il ne neige **jamais** ici.)\"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "___ calor hoy. <trans en=\"(___ hot today.)\" ar=\"(___ حار اليوم.)\" uk=\"(___ сьогодні гаряче.)\" fr=\"(___ il fait chaud aujourd'hui.)\"/>",
        options: ["Hace", "Haces", "Hago"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "___ frío en invierno. <trans en=\"(___ cold in winter.)\" ar=\"(___ البرد في الشتاء.)\" uk=\"(___ холодно взимку.)\" fr=\"(___ froid en hiver.)\"/>",
        options: ["Hace", "Hacen", "Hacemos"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Hoy ___ mucho. <trans en=\"(Today ___ a lot.)\" ar=\"(اليوم ___ الكثير.)\" uk=\"(Сьогодні ___ багато.)\" fr=\"(Aujourd'hui ___ beaucoup.)\"/>",
        options: ["llueve", "llover", "llueven"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "En verano hace ___ en esta ciudad. <trans en=\"(In summer it is ___ in this city.)\" ar=\"(في الصيف يكون ___ في هذه المدينة.)\" uk=\"(Влітку в цьому місті ___.)\" fr=\"(En été, il fait ___ dans cette ville.)\"/>",
        options: ["calor", "lluvia", "viento"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "La noche es ___ en invierno. <trans en=\"(The night is ___ in winter.)\" ar=\"(الليل ___ في الشتاء.)\" uk=\"(Взимку ніч ___.)\" fr=\"(La nuit est ___ en hiver.)\"/>",
        options: ["fría", "frío", "caliente"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "En verano ___ hace calor. <trans en=\"(In summer ___ it is hot.)\" ar=\"(في الصيف ___ الجو حار.)\" uk=\"(Влітку ___ жарко.)\" fr=\"(En été ___ il fait chaud.)\"/>",
        options: ["siempre", "nunca", "a veces"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "El agua del río está ___ fría. <trans en=\"(The river water is ___ cold.)\" ar=\"(مياه النهر ___ باردة.)\" uk=\"(Вода в річці ___ холодна.)\" fr=\"(L'eau de la rivière est ___ froide.)\"/>",
        options: ["muy", "mucho", "poco"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "El clima ___ bueno hoy. <trans en=\"(The weather ___ good today.)\" ar=\"(الطقس ___ جيد اليوم.)\" uk=\"(Сьогодні хороша погода ___.)\" fr=\"(Le temps ___ est beau aujourd'hui.)\"/>",
        options: ["es", "está", "son"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "— ¿Qué tiempo hace hoy? — Hace buen ___ y hay sol. <trans en=\"(- How is the weather today? — It's nice ___ and there's sun.)\" ar=\"(- كيف حال  الطقس اليوم؟ — إنه لطيف ___ وهناك شمس.)\" uk=\"(- Яка сьогодні погода? — Гарно ___ і сонечко.)\" fr=\"(- Quel temps fait-il aujourd'hui? — Il fait beau ___ et il y a du soleil.)\"/>",
        options: ["tiempo", "clima", "día"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Una montaña es un lugar con temperatura ___ alta. <trans en=\"(A mountain is a place with a high ___ temperature.)\" ar=\"(الجبل هو مكان ذو درجة حرارة عالية ___.)\" uk=\"(Гора — це місце з високою ___ температурою.)\" fr=\"(Une montagne est un endroit où la température ___ est élevée.)\"/>",
        options: ["más", "menos", "mucho"],
        correctAnswer: 0
      },
    ]
  },
  {
    id: "a2-vocab-hospital",
    topic: "Hospital",
    title: "En el Hospital",
    level: "A2",
    category: "Vocabulario",
    description: "Vocabulario y expresiones útiles para describir síntomas y hablar en el médico u hospital. <trans en=\"(Useful vocabulary and expressions to describe symptoms and speak at the doctor or hospital.)\" ar=\"(مفردات وتعابير مفيدة لوصف الأعراض والتحدث عند الطبيب أو المستشفى.)\" uk=\"(Корисна лексика та вирази для опису симптомів і спілкування з лікарем або в лікарні.)\" fr=\"(Vocabulaire et expressions utiles pour décrire les symptômes et parler chez le médecin ou à l'hôpital.)\"/>",
    emoji: "🏥",
    color: "#EBF8FF",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80",
    vocabulary: [
      { word: "Hospital", translations: { en: "Hospital", ar: "مستشفى", uk: "Лікарня", fr: "Hôpital" }, emoji: "🏥", color: "#E2F3E7" },
      { word: "Centro de salud", translations: { en: "health center", ar: "مركز صحي", uk: "оздоровчий центр", fr: "centre de santé" }, emoji: "🩺", color: "#E3EEF9" },
      { word: "Médico", translations: { en: "Doctor", ar: "طبيب", uk: "лікар", fr: "Médecin" }, emoji: "👨‍⚕️", color: "#FCE8E8" },
      { word: "Médica", translations: { en: "Medical", ar: "طبي", uk: "Медичний", fr: "Médical" }, emoji: "👩‍⚕️", color: "#F3E8FF" },
      { word: "Enfermero", translations: { en: "Nurse", ar: "ممرضة", uk: "Медсестра", fr: "Infirmière" }, emoji: "🧑‍⚕️", color: "#FEFCBF" },
      { word: "Enfermera", translations: { en: "Nurse", ar: "ممرضة", uk: "Медсестра", fr: "Infirmière" }, emoji: "👩‍⚕️", color: "#FFF4E5" },
      { word: "Paciente", translations: { en: "Patient", ar: "مريض", uk: "пацієнт", fr: "Patient" }, emoji: "🧑‍🦽", color: "#E2F3E7" },
      { word: "Cita", translations: { en: "Appointment", ar: "ميعاد", uk: "Призначення", fr: "Rendez-vous" }, emoji: "📅", color: "#E3EEF9" },
      { word: "Urgencias", translations: { en: "Emergencies", ar: "حالات الطوارئ", uk: "Надзвичайні ситуації", fr: "Urgences" }, emoji: "🚨", color: "#FCE8E8" },
      { word: "Sala", translations: { en: "Hall", ar: "قاعة", uk: "Зал", fr: "Salle" }, emoji: "🛋️", color: "#F3E8FF" },
      { word: "Dolor", translations: { en: "Pain", ar: "ألم", uk: "Біль", fr: "Douleur" }, emoji: "🤕", color: "#FEFCBF" },
      { word: "Fiebre", translations: { en: "Fever", ar: "حمى", uk: "Лихоманка", fr: "Fièvre" }, emoji: "🌡️", color: "#FFF4E5" },
      { word: "Tos", translations: { en: "Cough", ar: "سعال", uk: "Кашель", fr: "Toux" }, emoji: "🗣️", color: "#E2F3E7" },
      { word: "Cansancio", translations: { en: "Fatigue", ar: "تعب", uk: "Втома", fr: "Fatigue" }, emoji: "🥱", color: "#E3EEF9" },
      { word: "Mareo", translations: { en: "Dizziness", ar: "دوخة", uk: "Запаморочення", fr: "Vertiges" }, emoji: "🤢", color: "#FCE8E8" },
      { word: "Herida", translations: { en: "Wound", ar: "جرح", uk: "рана", fr: "Blesser" }, emoji: "🩹", color: "#F3E8FF" },
      { word: "Infección", translations: { en: "Infection", ar: "عدوى", uk: "Інфекція", fr: "Infection" }, emoji: "🦠", color: "#FEFCBF" },
      { word: "Enfermedad", translations: { en: "Disease", ar: "مرض", uk: "Захворювання", fr: "Maladie" }, emoji: "🤢", color: "#FFF4E5" },
      { word: "Tratamiento", translations: { en: "Treatment", ar: "علاج", uk: "Лікування", fr: "Traitement" }, emoji: "💊", color: "#E2F3E7" },
      { word: "Medicamento", translations: { en: "Medicine", ar: "الدواء", uk: "Ліки", fr: "Médecine" }, emoji: "💊", color: "#E3EEF9" },
      { word: "Receta", translations: { en: "Recipe", ar: "وصفة", uk: "рецепт", fr: "Recette" }, emoji: "📝", color: "#FCE8E8" },
      { word: "Pastillas", translations: { en: "Tablets", ar: "أقراص", uk: "Таблетки", fr: "Comprimés" }, emoji: "💊", color: "#F3E8FF" },
      { word: "Jarabe", translations: { en: "Syrup", ar: "شراب", uk: "Сироп", fr: "Sirop" }, emoji: "🧪", color: "#FEFCBF" },
      { word: "Descanso", translations: { en: "Rest", ar: "استراحة", uk: "Відпочинок", fr: "Repos" }, emoji: "🛌", color: "#FFF4E5" },
      { word: "Agua", translations: { en: "Water", ar: "ماء", uk: "вода", fr: "Eau" }, emoji: "💧", color: "#E2F3E7" },
      { word: "Comer", translations: { en: "Eat", ar: "يأكل", uk: "Їсти", fr: "Manger" }, emoji: "🍽️", color: "#E3EEF9" },
      { word: "Dormir", translations: { en: "Sleep", ar: "ينام", uk: "сон", fr: "Dormir" }, emoji: "😴", color: "#FCE8E8" },
      { word: "Mejorar", translations: { en: "Improve", ar: "يحسن", uk: "Поліпшити", fr: "Améliorer" }, emoji: "📈", color: "#F3E8FF" },
      { word: "Empeorar", translations: { en: "Worsen", ar: "تفاقم", uk: "Погіршується", fr: "Empirer" }, emoji: "📉", color: "#FEFCBF" },
      { word: "Bien", translations: { en: "Good", ar: "جيد", uk: "добре", fr: "Bien" }, emoji: "✅", color: "#FFF4E5" },
      { word: "Mal", translations: { en: "Evil", ar: "شر", uk: "зло", fr: "Mal" }, emoji: "❌", color: "#E2F3E7" },
      { word: "Nada", translations: { en: "Nothing", ar: "لا شئ", uk: "нічого", fr: "Rien" }, emoji: "📝", color: "#E3EEF9" },
      { word: "Nunca", translations: { en: "Never", ar: "أبداً", uk: "Ніколи", fr: "Jamais" }, emoji: "❌", color: "#FCE8E8" },
      { word: "Siempre", translations: { en: "Always", ar: "دائماً", uk: "Завжди", fr: "Toujours" }, emoji: "🔄", color: "#F3E8FF" },
      { word: "A veces", translations: { en: "Sometimes", ar: "أحيانا", uk: "іноді", fr: "Parfois" }, emoji: "⏱️", color: "#FEFCBF" },
      { word: "Hoy", translations: { en: "Today", ar: "اليوم", uk: "Сьогодні", fr: "Aujourd'hui" }, emoji: "📅", color: "#FFF4E5" },
      { word: "Mañana", translations: { en: "Tomorrow", ar: "غداً", uk: "завтра", fr: "Demain" }, emoji: "🌅", color: "#E2F3E7" },
      { word: "Ahora", translations: { en: "Now", ar: "الآن", uk: "Зараз", fr: "Maintenant" }, emoji: "⏱️", color: "#E3EEF9" },
      { word: "Ayuda", translations: { en: "Aid", ar: "يساعد", uk: "Допомога", fr: "Aide" }, emoji: "🆘", color: "#FCE8E8" },
    ],
    content: `
## Hablar de salud <trans en=\"(Talk about health)\" ar=\"(الحديث عن الصحة)\" uk=\"(Розмова про здоров'я)\" fr=\"(Parlons de santé)\"/>
Para expresar problemas de salud, usamos principalmente dos estructuras: <trans en=\"(To express health problems, we mainly use two structures:)\" ar=\"(للتعبير عن المشاكل الصحية، نستخدم بشكل أساسي بنيتين:)\" uk=\"(Для вираження проблем зі здоров’ям ми в основному використовуємо дві структури:)\" fr=\"(Pour exprimer les problèmes de santé, nous utilisons principalement deux structures :)\"/>
1. **Tener + sustantivo**: <trans en=\"(1. **Have + noun**:)\" ar=\"(1. **لديك + اسم**:)\" uk=\"(1. **Є + іменник**:)\" fr=\"(1. **Avoir + nom** :)\"/>
- Tengo fiebre. <trans en=\"(I have a fever.)\" ar=\"(لدى حمى .)\" uk=\"(у мене гарячка.)\" fr=\"(J'ai de la fièvre.)\"/>
- Tengo tos. <trans en=\"(I have a cough.)\" ar=\"(لدي سعال.)\" uk=\"(у мене кашель.)\" fr=\"(Je tousse.)\"/>
- Tengo cansancio. <trans en=\"(I'm tired.)\" ar=\"(أنا متعب.)\" uk=\"(я втомився)\" fr=\"(Je suis fatigué.)\"/>
- Tengo una cita. <trans en=\"(I have an appointment.)\" ar=\"(لدي موعد.)\" uk=\"(у мене зустріч)\" fr=\"(J'ai un rendez-vous.)\"/>
- Tengo una infección. <trans en=\"(I have an infection.)\" ar=\"(لدي عدوى.)\" uk=\"(У мене інфекція.)\" fr=\"(J'ai une infection.)\"/>

2. **Doler + sustantivo**: <trans en=\"(2. **Hurt + noun**:)\" ar=\"(2. **الأذى + اسم**:)\" uk=\"(2. **Hurt + іменник**:)\" fr=\"(2. **Blessé + nom** :)\"/>
- Me duele la cabeza. <trans en=\"(My head hurts.)\" ar=\"(رأسي يؤلمني.)\" uk=\"(Голова болить.)\" fr=\"(J'ai mal à la tête.)\"/>
- Te duele la espalda. <trans en=\"(Your back hurts.)\" ar=\"(ظهرك يؤلمك.)\" uk=\"(Болить спина.)\" fr=\"(Vous avez mal au dos.)\"/>
- Le duele el estómago. <trans en=\"(His stomach hurts.)\" ar=\"(معدته تؤلمه.)\" uk=\"(У нього болить живіт.)\" fr=\"(Il a mal au ventre.)\"/>
- Nos duele el cuerpo. <trans en=\"(Our bodies hurt.)\" ar=\"(أجسادنا تؤلمنا.)\" uk=\"(Наші тіла болять.)\" fr=\"(Nos corps nous font mal.)\"/>

## Consejos médicos <trans en=\"(Medical advice)\" ar=\"(نصيحة طبية)\" uk=\"(Медична консультація)\" fr=\"(Conseil médical)\"/>
- Tiene que **descansar**. <trans en=\"(He has to **rest**.)\" ar=\"(عليه أن **يرتاح**.)\" uk=\"(Він повинен **відпочити**.)\" fr=\"(Il doit se **reposer**.)\"/>
- Tiene que **beber agua**. <trans en=\"(You have to **drink water**.)\" ar=\"(عليك **شرب الماء**.)\" uk=\"(Ви повинні **пити воду**.)\" fr=\"(Vous devez **boire de l'eau**.)\"/>
- No tiene que **trabajar hoy**. <trans en=\"(You don't have to **work today**.)\" ar=\"(ليس عليك **العمل اليوم**.)\" uk=\"(Вам не потрібно **працювати сьогодні**.)\" fr=\"(Vous n'êtes pas obligé de **travailler aujourd'hui**.)\"/>
- Tiene que tomar el **medicamento** con **receta**. <trans en=\"(You have to take the **medication** with a **prescription**.)\" ar=\"(عليك أن تتناول **الدواء** بوصفة طبية**.)\" uk=\"(Ви повинні приймати **ліки** за **рецептом**.)\" fr=\"(Vous devez prendre le **médicament** avec une **ordonnance**.)\"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "Yo ___ fiebre hoy. <trans en=\"(I ___ fever today.)\" ar=\"(أنا ___ حمى اليوم.)\" uk=\"(Я ___ лихоманка сьогодні.)\" fr=\"(J'ai ___ de la fièvre aujourd'hui.)\"/>",
        options: ["tengo", "tienes", "tiene"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "A mí me ___ la cabeza. <trans en=\"(I _____ my head.)\" ar=\"(أنا _____ رأسي.)\" uk=\"(Я _____ свою голову.)\" fr=\"(Je _____ ma tête.)\"/>",
        options: ["duele", "duelen", "doler"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Nosotros ___ cansancio hoy. <trans en=\"(We ___ tired today.)\" ar=\"(نحن ___ متعبون اليوم.)\" uk=\"(Ми ___ сьогодні втомилися.)\" fr=\"(Nous ___ fatigués aujourd'hui.)\"/>",
        options: ["tenemos", "tenéis", "tienen"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "No tengo ___ de fiebre. <trans en=\"(I don't have a fever.)\" ar=\"(ليس لدي حمى.)\" uk=\"(У мене немає температури.)\" fr=\"(Je n'ai pas de fièvre.)\"/>",
        options: ["nada", "nadie", "alguien"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Yo ___ tomo medicamento sin receta. <trans en=\"(I ___ take medication without a prescription.)\" ar=\"(أنا ___ أتناول الدواء بدون وصفة طبية.)\" uk=\"(Я ___ приймаю ліки без рецепта.)\" fr=\"(Je ___ prends des médicaments sans ordonnance.)\"/>",
        options: ["nunca", "siempre", "hoy"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Con el descanso y el jarabe, yo ___ rápido. <trans en=\"(With the rest and the syrup, I ___ quickly.)\" ar=\"(مع الباقي والشراب، ___ بسرعة.)\" uk=\"(З рештою та сиропом я ___ швидко.)\" fr=\"(Avec le reste et le sirop, je ___ vite.)\"/>",
        options: ["mejoro", "empeoro", "duermo"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "Un médico trabaja en el ___. <trans en=\"(A doctor works in the ___.)\" ar=\"(طبيب يعمل في ___.)\" uk=\"(В ___ працює лікар.)\" fr=\"(Un médecin travaille dans le ___.)\"/>",
        options: ["hospital", "colegio", "campo"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "— ¿Qué te pasa? — Me ___ la espalda. <trans en=\"(- What's the matter? — I ___ my back.)\" ar=\"(- ماذا جرى؟ - أنا ___ ظهري.)\" uk=\"(- Що сталося? — Я ___ спину.)\" fr=\"(- Quel est le problème? — Je ___ mon dos.)\"/>",
        options: ["duele", "tengo", "gusta"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "El médico dice que tiene que ___ y beber agua. <trans en=\"(The doctor says you have to ___ and drink water.)\" ar=\"(يقول الطبيب أنه عليك ___ وشرب الماء.)\" uk=\"(Лікар каже, що вам потрібно ___ і пити воду.)\" fr=\"(Le médecin dit que vous devez ___ et boire de l'eau.)\"/>",
        options: ["descansar", "trabajar", "correr"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Tengo una ___ con el médico hoy a las cinco. <trans en=\"(I have a ___ with the doctor today at five.)\" ar=\"(لدي ___ مع الطبيب اليوم في الخامسة.)\" uk=\"(У мене ___ з лікарем сьогодні о п'ятій.)\" fr=\"(J'ai un ___ avec le médecin aujourd'hui à cinq heures.)\"/>",
        options: ["cita", "receta", "sala"],
        correctAnswer: 0
      },
    ]
  },
  {
    id: "a2-vocab-colegio",
    topic: "Colegio",
    title: "En el Colegio",
    level: "A2",
    category: "Vocabulario",
    description: "Aprende vocabulario sobre el colegio, las asignaturas, el aula y los estudios. <trans en=\"(Learn vocabulary about school, subjects, the classroom and studies.)\" ar=\"(تعلم المفردات حول المدرسة، والموضوعات، والفصول الدراسية والدراسات.)\" uk=\"(Вивчайте словниковий запас про школу, предмети, клас і навчання.)\" fr=\"(Apprenez le vocabulaire sur l'école, les matières, la classe et les études.)\"/>",
    emoji: "🏫",
    color: "#FFF5F5",
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&auto=format&fit=crop&q=80",
    vocabulary: [
      { word: "Colegio", translations: { en: "School", ar: "مدرسة", uk: "Школа", fr: "École" }, emoji: "🏫", color: "#E2F3E7" },
      { word: "Escuela", translations: { en: "School", ar: "مدرسة", uk: "Школа", fr: "École" }, emoji: "🏫", color: "#E3EEF9" },
      { word: "Instituto", translations: { en: "Institute", ar: "معهد", uk: "Інститут", fr: "Institut" }, emoji: "🏫", color: "#FCE8E8" },
      { word: "Clase", translations: { en: "Class", ar: "فصل", uk: "Клас", fr: "Classe" }, emoji: "👩‍🏫", color: "#F3E8FF" },
      { word: "Aula", translations: { en: "Classroom", ar: "الفصل الدراسي", uk: "Класна кімната", fr: "Classe" }, emoji: "🏫", color: "#FEFCBF" },
      { word: "Profesor", translations: { en: "Teacher", ar: "مدرس", uk: "вчитель", fr: "Professeur" }, emoji: "👨‍🏫", color: "#FFF4E5" },
      { word: "Profesora", translations: { en: "Teacher", ar: "مدرس", uk: "вчитель", fr: "Professeur" }, emoji: "👩‍🏫", color: "#E2F3E7" },
      { word: "Estudiante", translations: { en: "Student", ar: "طالب", uk: "студент", fr: "Étudiant" }, emoji: "🧑‍🎓", color: "#E3EEF9" },
      { word: "Alumnos", translations: { en: "Students", ar: "طلاب", uk: "Студенти", fr: "Étudiants" }, emoji: "🧑‍🎓🧑‍🎓", color: "#FCE8E8" },
      { word: "Compañeros", translations: { en: "Companions", ar: "الصحابة", uk: "Компаньйони", fr: "Compagnons" }, emoji: "🧑‍🤝‍🧑", color: "#F3E8FF" },
      { word: "Director", translations: { en: "Director", ar: "مخرج", uk: "Директор", fr: "Directeur" }, emoji: "👨‍💼", color: "#FEFCBF" },
      { word: "Asignatura", translations: { en: "Subject", ar: "موضوع", uk: "Тема", fr: "Sujet" }, emoji: "📚", color: "#FFF4E5" },
      { word: "Examen", translations: { en: "Exam", ar: "امتحان", uk: "екзамен", fr: "Examen" }, emoji: "📝", color: "#E2F3E7" },
      { word: "Prueba", translations: { en: "Proof", ar: "دليل", uk: "доказ", fr: "Preuve" }, emoji: "📝", color: "#E3EEF9" },
      { word: "Nota", translations: { en: "Note", ar: "ملحوظة", uk: "Примітка", fr: "Note" }, emoji: "💯", color: "#FCE8E8" },
      { word: "Aprobado", translations: { en: "Approved", ar: "موافقة", uk: "Затверджено", fr: "Approuvé" }, emoji: "✅", color: "#F3E8FF" },
      { word: "Suspendido", translations: { en: "Suspended", ar: "معلق", uk: "Підвішено", fr: "Suspendu" }, emoji: "❌", color: "#FEFCBF" },
      { word: "Libro", translations: { en: "Book", ar: "كتاب", uk: "книга", fr: "Livre" }, emoji: "📖", color: "#FFF4E5" },
      { word: "Cuaderno", translations: { en: "Notebook", ar: "دفتر الملاحظات", uk: "Ноутбук", fr: "Carnet de notes" }, emoji: "📓", color: "#E2F3E7" },
      { word: "Lápiz", translations: { en: "Pencil", ar: "قلم رصاص", uk: "Олівець", fr: "Crayon" }, emoji: "✏️", color: "#E3EEF9" },
      { word: "Bolígrafo", translations: { en: "Pen", ar: "قلم", uk: "Перо", fr: "Stylo" }, emoji: "🖊️", color: "#FCE8E8" },
      { word: "Mochila", translations: { en: "Backpack", ar: "حقيبة الظهر", uk: "Рюкзак", fr: "Sac à dos" }, emoji: "🎒", color: "#F3E8FF" },
      { word: "Tarea", translations: { en: "Task", ar: "مهمة", uk: "завдання", fr: "Tâche" }, emoji: "✍️", color: "#FEFCBF" },
      { word: "Deberes", translations: { en: "Homework", ar: "العمل في المنزل", uk: "Домашнє завдання", fr: "Devoirs" }, emoji: "✍️", color: "#FFF4E5" },
      { word: "Estudiar", translations: { en: "Study", ar: "يذاكر", uk: "дослідження", fr: "Étude" }, emoji: "📚", color: "#E2F3E7" },
      { word: "Aprender", translations: { en: "Learn", ar: "يتعلم", uk: "вчитися", fr: "Apprendre" }, emoji: "🧠", color: "#E3EEF9" },
      { word: "Explicar", translations: { en: "Explain", ar: "يشرح", uk: "Поясніть", fr: "Expliquer" }, emoji: "🗣️", color: "#FCE8E8" },
      { word: "Preguntar", translations: { en: "Ask", ar: "بسأل", uk: "Запитуйте", fr: "Demander" }, emoji: "❓", color: "#F3E8FF" },
      { word: "Responder", translations: { en: "Reply", ar: "رد", uk: "Відповісти", fr: "Répondre" }, emoji: "💬", color: "#FEFCBF" },
      { word: "Escuchar", translations: { en: "Hear", ar: "يسمع", uk: "Почуйте", fr: "Entendre" }, emoji: "👂", color: "#FFF4E5" },
      { word: "Leer", translations: { en: "Read", ar: "يقرأ", uk: "Прочитайте", fr: "Lire" }, emoji: "📖", color: "#E2F3E7" },
      { word: "Escribir", translations: { en: "Write", ar: "يكتب", uk: "Напишіть", fr: "Écrire" }, emoji: "✍️", color: "#E3EEF9" },
      { word: "Repetir", translations: { en: "Repeat", ar: "يكرر", uk: "Повторіть", fr: "Répéter" }, emoji: "🔁", color: "#FCE8E8" },
      { word: "Empezar", translations: { en: "Begin", ar: "يبدأ", uk: "Почніть", fr: "Commencer" }, emoji: "🏁", color: "#F3E8FF" },
      { word: "Terminar", translations: { en: "Finish", ar: "ينهي", uk: "Закінчити", fr: "Finition" }, emoji: "🔚", color: "#FEFCBF" },
      { word: "Horario", translations: { en: "Schedule", ar: "جدول", uk: "розклад", fr: "Calendrier" }, emoji: "📅", color: "#FFF4E5" },
      { word: "Mañana", translations: { en: "Tomorrow", ar: "غداً", uk: "завтра", fr: "Demain" }, emoji: "🌅", color: "#E2F3E7" },
      { word: "Tarde", translations: { en: "Late", ar: "متأخر", uk: "Пізно", fr: "En retard" }, emoji: "📝", color: "#E3EEF9" },
      { word: "Ayuda", translations: { en: "Aid", ar: "يساعد", uk: "Допомога", fr: "Aide" }, emoji: "🆘", color: "#FCE8E8" },
    ],
    content: `
## La vida en el colegio <trans en=\"(Life at school)\" ar=\"(الحياة في المدرسة)\" uk=\"(Життя в школі)\" fr=\"(La vie à l'école)\"/>
En el colegio realizamos diferentes actividades de aprendizaje: <trans en=\"(At school we carry out different learning activities:)\" ar=\"(نقوم في المدرسة بتنفيذ أنشطة تعليمية مختلفة:)\" uk=\"(У школі ми проводимо різні навчальні заходи:)\" fr=\"(À l'école, nous réalisons différentes activités d'apprentissage :)\"/>
- Los **estudiantes** o **alumnos** escuchan en el **aula** o **clase**. <trans en=\"(The **students** or **pupils** listen in the **classroom** or **class**.)\" ar=\"(يستمع **الطلاب** أو **التلاميذ** في **الفصل الدراسي** أو **الفصل**.)\" uk=\"(**Студенти** або **учні** слухають у **класі** або **класі**.)\" fr=\"(Les **étudiants** ou **élèves** écoutent dans la **classe** ou la **classe**.)\"/>
- El **profesor** o la **profesora** explica la **asignatura**. <trans en=\"(The **teacher** explains the **subject**.)\" ar=\"(**المعلم** يشرح **الموضوع**.)\" uk=\"(**Вчитель** пояснює **предмет**.)\" fr=\"(Le **professeur** explique le **sujet**.)\"/>
- Los estudiantes hacen **deberes** o **tareas** en casa. <trans en=\"(Students do **homework** or **tasks** at home.)\" ar=\"(يقوم الطلاب بـ **الواجبات المنزلية** أو **المهام** في المنزل.)\" uk=\"(Учні виконують **домашнє завдання** або **завдання** вдома.)\" fr=\"(Les élèves font des **devoirs** ou des **tâches** à la maison.)\"/>
- Para pasar el curso, hay que hacer un **examen** o **prueba** y obtener un **aprobado**. <trans en=\"(To pass the course, you must take an **exam** or **test** and obtain a **pass**.)\" ar=\"(لاجتياز الدورة، يجب عليك إجراء **امتحان** أو **اختبار** والحصول على **النجاح**.)\" uk=\"(Щоб пройти курс, необхідно скласти **іспит** або **тест** і отримати **перепустку**.)\" fr=\"(Pour réussir le cours, vous devez passer un **examen** ou un **test** et obtenir un **réussite**.)\"/>

## Obligación y Necesidad <trans en=\"(Obligation and Necessity)\" ar=\"(الإلزام والضرورة)\" uk=\"(Обов'язок і необхідність)\" fr=\"(Obligation et nécessité)\"/>
Usamos la estructura **Tener que + infinitivo** para expresar obligación: <trans en=\"(We use the structure **Tener que + infinitive** to express obligation:)\" ar=\"(نستخدم البنية **Tener que + صيغة المصدر** للتعبير عن الالتزام:)\" uk=\"(Ми використовуємо структуру **Tener que + інфінітив** для вираження зобов’язання:)\" fr=\"(On utilise la structure **Tener que + infinitif** pour exprimer l'obligation :)\"/>
- Yo **tengo que** estudiar. <trans en=\"(I **have to** study.)\" ar=\"(أنا ** لا بد لي من ** الدراسة.)\" uk=\"(Я **повинен** вчитися.)\" fr=\"(Je **dois** étudier.)\"/>
- Tú **tienes que** hacer los deberes. <trans en=\"(You **have** to do your homework.)\" ar=\"(لديك ** لديك ** لأداء واجباتك المنزلية.)\" uk=\"(Ви **повинні** зробити домашнє завдання.)\" fr=\"(Vous **devez** faire vos devoirs.)\"/>
- Nosotros **tenemos que** ir al colegio. <trans en=\"(We **have** to go to school.)\" ar=\"(علينا **علينا** الذهاب إلى المدرسة.)\" uk=\"(Ми **повинні** йти до школи.)\" fr=\"(Nous **devons** aller à l'école.)\"/>

Para expresar falta de obligación, usamos **No tener que + infinitivo**: <trans en=\"(To express lack of obligation, we use **Not have to + infinitive**:)\" ar=\"(للتعبير عن عدم الالتزام، نستخدم **Not need to + صيغة المصدر**:)\" uk=\"(Щоб виразити відсутність зобов’язань, ми використовуємо **Not have to + інфінітив**:)\" fr=\"(Pour exprimer l'absence d'obligation, nous utilisons **Pas besoin de + infinitif** :)\"/>
- Hoy **no tengo que** ir al colegio. <trans en=\"(Today I **don't have** to go to school.)\" ar=\"(اليوم **ليس عليّ** الذهاب إلى المدرسة.)\" uk=\"(Сьогодні мені **нема** йти до школи.)\" fr=\"(Aujourd'hui, je **n'ai **pas** d'aller à l'école.)\"/>
- Ella **no tiene que** hacer examen hoy. <trans en=\"(She **doesn't have to** take a test today.)\" ar=\"(هي **ليست مضطرة** إلى إجراء اختبار اليوم.)\" uk=\"(Їй **не потрібно** складати тест сьогодні.)\" fr=\"(Elle **n'est pas obligé** de passer un test aujourd'hui.)\"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "Tú ___ hacer los deberes en casa. <trans en=\"(You ___ do your homework at home.)\" ar=\"(أنت ___ تقوم بأداء واجباتك المنزلية في المنزل.)\" uk=\"(Ви ___ виконуєте домашнє завдання вдома.)\" fr=\"(Vous ___ faites vos devoirs à la maison.)\"/>",
        options: ["tienes que", "tengo que", "tiene que"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Nosotros ___ aprender español. <trans en=\"(We ___ learn Spanish.)\" ar=\"(نحن ___ نتعلم اللغة الإسبانية.)\" uk=\"(Ми ___ вивчаємо іспанську мову.)\" fr=\"(Nous ___ apprenons l’espagnol.)\"/>",
        options: ["tenemos que", "tenéis que", "tienen que"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Yo ___ por la mañana en el aula. <trans en=\"(I ___ in the morning in the classroom.)\" ar=\"(أنا ___ في الصباح في الفصل الدراسي.)\" uk=\"(Я ___ вранці в класі.)\" fr=\"(Je ___ le matin en classe.)\"/>",
        options: ["estudio", "estudias", "estudia"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Yo ___ español muy rápido. <trans en=\"(I ___ Spanish very quickly.)\" ar=\"(أنا ___ الإسبانية بسرعة كبيرة.)\" uk=\"(Я ___ іспанську дуже швидко.)\" fr=\"(Je ___ espagnol très rapidement.)\"/>",
        options: ["aprendo", "aprendes", "aprende"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "El profesor ___ la asignatura en el aula. <trans en=\"(The teacher ___ the subject in the classroom.)\" ar=\"(المعلم ___ الموضوع في الفصل الدراسي.)\" uk=\"(Учитель ___ предмет на уроці.)\" fr=\"(L'enseignant ___ la matière en classe.)\"/>",
        options: ["explica", "aprende", "escucha"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "El estudiante ___ las explicaciones. <trans en=\"(The student ___ the explanations.)\" ar=\"(الطالب ___ الشروحات.)\" uk=\"(Учень ___ пояснення.)\" fr=\"(L'élève ___ les explications.)\"/>",
        options: ["escucha", "enseña", "explica"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "El cuaderno es para ___ notas. <trans en=\"(The notebook is for ___ notes.)\" ar=\"(دفتر الملاحظات مخصص لـ ___ الملاحظات.)\" uk=\"(Зошит для ___ записів.)\" fr=\"(Le cahier est destiné à ___ notes.)\"/>",
        options: ["escribir", "beber", "dormir"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Hoy es domingo, así que no ___ ir al colegio. <trans en=\"(Today is Sunday, so I don't ___ go to school.)\" ar=\"(اليوم هو الأحد، لذلك لا ___ أذهب إلى المدرسة.)\" uk=\"(Сьогодні неділя, тому я не ___ йду до школи.)\" fr=\"(Aujourd'hui, c'est dimanche, donc je ne vais pas ___ à l'école.)\"/>",
        options: ["tengo que", "tienes que", "tiene que"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Tengo que llevar mis libros en la ___. <trans en=\"(I have to carry my books in the ___.)\" ar=\"(لا بد لي من حمل كتبي في ___.)\" uk=\"(Я повинен нести свої книги в ___.)\" fr=\"(Je dois transporter mes livres dans le ___.)\"/>",
        options: ["mochila", "receta", "farmacia"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Saqué una nota excelente, he ___ el examen. <trans en=\"(I got an excellent grade, I ___ the exam.)\" ar=\"(لقد حصلت على درجة ممتازة، لقد ___ الامتحان.)\" uk=\"(Я отримав відмінну оцінку, я ___ іспит.)\" fr=\"(J'ai eu une excellente note, je ___ l'examen.)\"/>",
        options: ["aprobado", "suspendido", "abierto"],
        correctAnswer: 0
      },
    ]
  },
  {
    id: "a2-vocab-rutina",
    topic: "Rutina Diaria",
    title: "La Rutina Diaria",
    level: "A2",
    category: "Vocabulario",
    description: "Vocabulario y verbos reflexivos para describir tus actividades cotidianas y horarios. <trans en=\"(Vocabulary and reflective verbs to describe your daily activities and schedules.)\" ar=\"(المفردات والأفعال الانعكاسية لوصف أنشطتك اليومية وجداولك.)\" uk=\"(Словниковий запас і рефлексивні дієслова для опису вашої щоденної діяльності та розкладу.)\" fr=\"(Vocabulaire et verbes de réflexion pour décrire vos activités et horaires quotidiens.)\"/>",
    emoji: "⏰",
    color: "#F3E8FF",
    imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80",
    vocabulary: [
      { word: "Rutina", translations: { en: "Routine", ar: "روتين", uk: "Рутина", fr: "Routine" }, emoji: "🔄", color: "#E2F3E7" },
      { word: "Día", translations: { en: "Day", ar: "يوم", uk: "День", fr: "Jour" }, emoji: "☀️", color: "#E3EEF9" },
      { word: "Mañana", translations: { en: "Tomorrow", ar: "غداً", uk: "завтра", fr: "Demain" }, emoji: "🌅", color: "#FCE8E8" },
      { word: "Tarde", translations: { en: "Late", ar: "متأخر", uk: "Пізно", fr: "En retard" }, emoji: "📝", color: "#F3E8FF" },
      { word: "Noche", translations: { en: "Evening", ar: "مساء", uk: "вечір", fr: "Soirée" }, emoji: "🌙", color: "#FEFCBF" },
      { word: "Despertarse", translations: { en: "Wake up", ar: "استيقظ", uk: "Прокинься", fr: "Réveillez-vous" }, emoji: "👀", color: "#FFF4E5" },
      { word: "Levantarse", translations: { en: "Get up", ar: "استيقظ", uk: "Вставай", fr: "Se lever" }, emoji: "🛌", color: "#E2F3E7" },
      { word: "Ducharse", translations: { en: "Shower", ar: "دش", uk: "Душ", fr: "Douche" }, emoji: "🚿", color: "#E3EEF9" },
      { word: "Vestirse", translations: { en: "Get dressed", ar: "أرتدي ملابسي", uk: "Одягайся", fr: "S'habiller" }, emoji: "👕", color: "#FCE8E8" },
      { word: "Desayunar", translations: { en: "Have breakfast", ar: "تناول وجبة الإفطار", uk: "Снідати", fr: "Prendre le petit-déjeuner" }, emoji: "☕", color: "#F3E8FF" },
      { word: "Comer", translations: { en: "Eat", ar: "يأكل", uk: "Їсти", fr: "Manger" }, emoji: "🍽️", color: "#FEFCBF" },
      { word: "Cenar", translations: { en: "Have dinner", ar: "تناول العشاء", uk: "Вечеряйте", fr: "Dîner" }, emoji: "🍲", color: "#FFF4E5" },
      { word: "Trabajar", translations: { en: "Work", ar: "عمل", uk: "Робота", fr: "Travail" }, emoji: "📝", color: "#E2F3E7" },
      { word: "Estudiar", translations: { en: "Study", ar: "يذاكر", uk: "дослідження", fr: "Étude" }, emoji: "📚", color: "#E3EEF9" },
      { word: "Descansar", translations: { en: "Rest", ar: "استراحة", uk: "Відпочинок", fr: "Repos" }, emoji: "📝", color: "#FCE8E8" },
      { word: "Dormir", translations: { en: "Sleep", ar: "ينام", uk: "сон", fr: "Dormir" }, emoji: "😴", color: "#F3E8FF" },
      { word: "Casa", translations: { en: "Home", ar: "بيت", uk: "додому", fr: "Maison" }, emoji: "🏠", color: "#FEFCBF" },
      { word: "Colegio", translations: { en: "School", ar: "مدرسة", uk: "Школа", fr: "École" }, emoji: "🏫", color: "#FFF4E5" },
      { word: "Trabajo", translations: { en: "Job", ar: "وظيفة", uk: "Робота", fr: "Emploi" }, emoji: "💼", color: "#E2F3E7" },
      { word: "Calle", translations: { en: "Street", ar: "شارع", uk: "вул", fr: "Rue" }, emoji: "🛣️", color: "#E3EEF9" },
      { word: "Siempre", translations: { en: "Always", ar: "دائماً", uk: "Завжди", fr: "Toujours" }, emoji: "🔄", color: "#FCE8E8" },
      { word: "Casi siempre", translations: { en: "Almost always", ar: "دائما تقريبا", uk: "Майже завжди", fr: "Presque toujours" }, emoji: "🔄", color: "#F3E8FF" },
      { word: "A veces", translations: { en: "Sometimes", ar: "أحيانا", uk: "іноді", fr: "Parfois" }, emoji: "⏱️", color: "#FEFCBF" },
      { word: "Casi nunca", translations: { en: "Hardly ever", ar: "نادرا من أي وقت مضى", uk: "Навряд чи коли-небудь", fr: "Rarement" }, emoji: "⏱️", color: "#FFF4E5" },
      { word: "Nunca", translations: { en: "Never", ar: "أبداً", uk: "Ніколи", fr: "Jamais" }, emoji: "❌", color: "#E2F3E7" },
      { word: "Temprano", translations: { en: "Early", ar: "مبكر", uk: "Рано", fr: "Tôt" }, emoji: "🌅", color: "#E3EEF9" },
      { word: "Tarde", translations: { en: "Late", ar: "متأخر", uk: "Пізно", fr: "En retard" }, emoji: "📝", color: "#FCE8E8" },
      { word: "Primero", translations: { en: "First", ar: "أولاً", uk: "перше", fr: "D'abord" }, emoji: "1️⃣", color: "#F3E8FF" },
      { word: "Después", translations: { en: "After", ar: "بعد", uk: "після", fr: "Après" }, emoji: "➡️", color: "#FEFCBF" },
      { word: "Luego", translations: { en: "Then", ar: "ثم", uk: "Потім", fr: "Alors" }, emoji: "➡️", color: "#FFF4E5" },
      { word: "Antes", translations: { en: "Before", ar: "قبل", uk: "Раніше", fr: "Avant" }, emoji: "⬅️", color: "#E2F3E7" },
      { word: "Todos los días", translations: { en: "Every day", ar: "كل يوم", uk: "Кожен день", fr: "Tous les jours" }, emoji: "📅", color: "#E3EEF9" },
      { word: "Entre semana", translations: { en: "midweek", ar: "منتصف الاسبوع", uk: "середина тижня", fr: "milieu de la semaine" }, emoji: "📅", color: "#FCE8E8" },
      { word: "Fin de semana", translations: { en: "Weekend", ar: "عطلة نهاية الأسبوع", uk: "Вихідні", fr: "Fin de semaine" }, emoji: "🎉", color: "#F3E8FF" },
      { word: "Hora", translations: { en: "Hour", ar: "ساعة", uk: "годину", fr: "Heure" }, emoji: "🕒", color: "#FEFCBF" },
      { word: "Tiempo", translations: { en: "Time", ar: "وقت", uk: "час", fr: "Temps" }, emoji: "⏰", color: "#FFF4E5" },
      { word: "Actividad", translations: { en: "Activity", ar: "نشاط", uk: "діяльність", fr: "Activité" }, emoji: "🏃", color: "#E2F3E7" },
      { word: "Hábito", translations: { en: "Habit", ar: "عادة", uk: "звичка", fr: "Habitude" }, emoji: "🔄", color: "#E3EEF9" },
    ],
    content: `
## Los verbos reflexivos de la rutina <trans en=\"(The reflexive verbs of routine)\" ar=\"(الأفعال الانعكاسية الروتينية)\" uk=\"(Зворотні дієслова розпорядку)\" fr=\"(Les verbes réfléchis de routine)\"/>
Muchos verbos de la rutina diaria son **pronominales** (se conjugan con pronombres reflexivos: *me, te, se, nos, os, se*): <trans en=\"(Many daily routine verbs are **pronominal** (they are conjugated with reflexive pronouns: *me, te, se, nos, os, se*):)\" ar=\"(العديد من الأفعال الروتينية اليومية هي **ضمير** (وهي مترافقة مع الضمائر الانعكاسية: *me, te, se, nos, os, se*):)\" uk=\"(Багато щоденних дієслів є **займенниковими** (вони сполучаються з поворотними займенниками: *me, te, se, nos, os, se*):)\" fr=\"(De nombreux verbes de routine quotidienne sont **pronominaux** (ils sont conjugués avec des pronoms réfléchis : *me, te, se, nos, os, se*) :)\"/>
- **Despertarse** (e -> ie): yo me despierto, tú te despiertas... <trans en=\"(**Wake up** (e -> ie): I wake up, you wake up...)\" ar=\"(**استيقظ** (ه -> أي): أستيقظ، أستيقظ أنت...)\" uk=\"(**Прокидайся** (e -> ie): я прокидаюся, ти прокидаєшся...)\" fr=\"(**Réveillez-vous** (e -> ie) : je me réveille, tu te réveilles...)\"/>
- **Levantarse**: yo me levanto, tú te levantas, él se levanta, nosotros nos levantamos, vosotros os levantáis, ellos se levantan. <trans en=\"(**Get up**: I get up, you get up, he gets up, we get up, you get up, they get up.)\" ar=\"(**استيقظ**: أنا أستيقظ، أنت تنهض، هو ينهض، نحن ننهض، أنت تنهض، هم ينهضون.)\" uk=\"(**Вставай**: Я встаю, ти встаєш, він встає, ми встаємо, ти встаєш, вони встають.)\" fr=\"(**Lève-toi** : Je me lève, tu te lèves, il se lève, on se lève, tu te lèves, ils se lèvent.)\"/>
- **Ducharse**: yo me ducho, tú te duchas... <trans en=\"(**Shower**: I take a shower, you take a shower...)\" ar=\"(**الاستحمام**: أنا أستحم، وأنت تستحم...)\" uk=\"(**Душ**: Я приймаю душ, ти приймай душ...)\" fr=\"(**Douche** : je prends une douche, tu prends une douche...)\"/>
- **Vestirse** (e -> i): yo me visto, tú te vistes... <trans en=\"(**Get dressed** (e -> i): I get dressed, you get dressed...)\" ar=\"(**ارتدي ملابسي** (e -> i): أنا أرتدي ملابسي، وأنت ترتدي ملابسك...)\" uk=\"(**Одягайся** (e -> i): я одягаюся, ти одягайся...)\" fr=\"(**Habille-toi** (e -> i) : je m'habille, tu t'habilles...)\"/>
- **Acostarse** (o -> ue): yo me acuesto, tú te acuestas... <trans en=\"(**Go to bed** (o -> ue): I go to bed, you go to bed...)\" ar=\"(**اذهب إلى السرير** (o -> ue): أذهب إلى السرير، اذهب إلى السرير...)\" uk=\"(**Лігай спати** (o -> ue): я лягаю спати, ти лягаєш...)\" fr=\"(**Va te coucher** (o -> ue) : je me couche, tu te couches...)\"/>

## Organizar el tiempo y frecuencia <trans en=\"(Organize time and frequency)\" ar=\"(تنظيم الوقت والتكرار)\" uk=\"(Організуйте час і частоту)\" fr=\"(Organiser le temps et la fréquence)\"/>
Usamos adverbios de frecuencia para describir la regularidad de nuestros hábitos: <trans en=\"(We use adverbs of frequency to describe the regularity of our habits:)\" ar=\"(نستخدم ظروف التردد لوصف انتظام عاداتنا:)\" uk=\"(Ми використовуємо прислівники частоти, щоб описати регулярність наших звичок:)\" fr=\"(Nous utilisons des adverbes de fréquence pour décrire la régularité de nos habitudes :)\"/>
- **Siempre** / **Casi siempre** me levanto temprano. <trans en=\"(**Always** / **Almost always** I get up early.)\" ar=\"(**دائمًا** / **دائمًا تقريبًا** أستيقظ مبكرًا.)\" uk=\"(**Завжди** / **Майже завжди** Я встаю рано.)\" fr=\"(**Toujours** / **Presque toujours** Je me lève tôt.)\"/>
- **A veces** estudio por la tarde. <trans en=\"(**Sometimes** I study in the afternoon.)\" ar=\"(**أحيانًا** أدرس في فترة ما بعد الظهر.)\" uk=\"(**Іноді** я вчуся в другій половині дня.)\" fr=\"(**Parfois** J'étudie l'après-midi.)\"/>
- **Casi nunca** ceno tarde. <trans en=\"(I **almost never** have a late dinner.)\" ar=\"(أنا ** تقريبًا ** لا أتناول عشاءًا متأخرًا.)\" uk=\"(Я **майже ніколи** не вечеряю пізно.)\" fr=\"(Je ne dîne **presque jamais** tard.)\"/>
- **Nunca** duermo en el trabajo. <trans en=\"(I **NEVER** sleep at work.)\" ar=\"(أنا ** لا ** أنام في العمل.)\" uk=\"(Я **НІКОЛИ** не сплю на роботі.)\" fr=\"(Je ne dors **JAMAIS** au travail.)\"/>

Para ordenar las acciones usamos conectores temporales: <trans en=\"(To order the actions we use temporary connectors:)\" ar=\"(لترتيب الإجراءات نستخدم موصلات مؤقتة:)\" uk=\"(Для впорядкування дій ми використовуємо тимчасові конектори:)\" fr=\"(Pour ordonner les actions, nous utilisons des connecteurs temporaires :)\"/>
- **Primero** me ducho, **después** desayuno y **luego** voy al trabajo. <trans en=\"(**First** I shower, **then** I have breakfast and **then** I go to work.)\" ar=\"(**أولاً** أستحم، **ثم** أتناول الإفطار، و**ثم** أذهب إلى العمل.)\" uk=\"(**Спочатку** я приймаю душ, **потім** я снідаю, а **потім** я йду на роботу.)\" fr=\"(**D'abord** je me douche, **puis** je prends mon petit-déjeuner et **puis** je vais travailler.)\"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "Yo ___ temprano por la mañana. <trans en=\"(I ___ early in the morning.)\" ar=\"(أنا ___ في الصباح الباكر.)\" uk=\"(Я ___ рано вранці.)\" fr=\"(Je ___ tôt le matin.)\"/>",
        options: ["me levanto", "te levantas", "se levanta"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Tú ___ a las siete. <trans en=\"(You ___ at seven.)\" ar=\"(أنت ___ في السابعة.)\" uk=\"(Ти ___ о сьомій.)\" fr=\"(Vous ___ à sept heures.)\"/>",
        options: ["te levantas", "me levanto", "se levanta"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Nosotros ___ a las ocho de la tarde. <trans en=\"(We ___ at eight in the afternoon.)\" ar=\"(نحن ___ الساعة الثامنة مساءً.)\" uk=\"(Ми ___ о восьмій вечора.)\" fr=\"(Nous ___ à huit heures de l'après-midi.)\"/>",
        options: ["cenamos", "cenáis", "cenan"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Yo ___ de noche y duermo de día. <trans en=\"(I ___ at night and sleep during the day.)\" ar=\"(أنا ___ في الليل وأنام أثناء النهار.)\" uk=\"(Я ___ вночі і сплю вдень.)\" fr=\"(Je ___ la nuit et je dors pendant la journée.)\"/>",
        options: ["trabajo", "duermo", "como"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Siempre ___ antes de ir a trabajar. <trans en=\"(Always ___ before going to work.)\" ar=\"(دائمًا ___ قبل الذهاب إلى العمل.)\" uk=\"(Завжди ___ перед виходом на роботу.)\" fr=\"(Toujours ___ avant d'aller travailler.)\"/>",
        options: ["me ducho", "te duchas", "ducho"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Yo ___ por la mañana y estudio por la tarde. <trans en=\"(I ___ in the morning and study in the afternoon.)\" ar=\"(أنا ___ في الصباح وأدرس في فترة ما بعد الظهر.)\" uk=\"(Я ___ вранці і вчуся вдень.)\" fr=\"(Je ___ le matin et j'étudie l'après-midi.)\"/>",
        options: ["trabajo", "estudio", "duermo"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "En el fin de semana, yo ___ tarde. <trans en=\"(On the weekend, I ___ late.)\" ar=\"(في عطلة نهاية الأسبوع، ___ متأخرا.)\" uk=\"(На вихідних я ___ запізнився.)\" fr=\"(Le week-end, je ___ en retard.)\"/>",
        options: ["me despierto", "me despiertas", "despierto"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "— ¿A qué hora desayunas? — Desayuno ___ de salir de casa. <trans en=\"(—What time do you have breakfast? — Breakfast ___ after leaving home.)\" ar=\"(- في أي وقت تتناول الفطور؟ — الإفطار ___ بعد مغادرة المنزل.)\" uk=\"(— О котрій годині ти снідаєш? — Сніданок ___ після виходу з дому.)\" fr=\"(— À quelle heure prends-tu ton petit-déjeuner ? — Petit-déjeuner ___ après avoir quitté la maison.)\"/>",
        options: ["antes", "después", "luego"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Primero me visto y ___ desayuno. <trans en=\"(First I get dressed and eat breakfast.)\" ar=\"(أولاً أرتدي ملابسي وأتناول وجبة الإفطار.)\" uk=\"(Спочатку я одягаюся і снідаю.)\" fr=\"(Je m’habille d’abord et je prends mon petit-déjeuner.)\"/>",
        options: ["luego", "antes", "siempre"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "No trabajo los sábados ni domingos, descanso el ___ de semana. <trans en=\"(I don't work on Saturdays or Sundays, I rest on ___ of the week.)\" ar=\"(أنا لا أعمل أيام السبت أو الأحد، بل أرتاح في ___ من الأسبوع.)\" uk=\"(У суботу та неділю не працюю, відпочиваю ___ числа тижня.)\" fr=\"(Je ne travaille pas le samedi ni le dimanche, je me repose ___ de la semaine.)\"/>",
        options: ["fin", "día", "tiempo"],
        correctAnswer: 0
      },
    ]
  },
  {
    id: "a2-vocab-familia-relaciones",
    topic: "Familia",
    title: "La Familia y las Relaciones",
    level: "A2",
    category: "Vocabulario",
    description: "Amplía tu vocabulario sobre los miembros de la familia y las relaciones personales. <trans en=\"(Expand your vocabulary about family members and personal relationships.)\" ar=\"(قم بتوسيع مفرداتك حول أفراد الأسرة والعلاقات الشخصية.)\" uk=\"(Розширте свій словниковий запас про членів сім’ї та особисті стосунки.)\" fr=\"(Développez votre vocabulaire sur les membres de la famille et les relations personnelles.)\"/>",
    emoji: "👥",
    color: "#FEFCBF",
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop&q=80",
    vocabulary: [
      { word: "Familia", translations: { en: "Family", ar: "عائلة", uk: "Сім'я", fr: "Famille" }, emoji: "👨‍👩‍👧‍👦", color: "#E2F3E7" },
      { word: "Padres", translations: { en: "Parents", ar: "آباء", uk: "Батьки", fr: "Parents" }, emoji: "👨‍👩‍👦", color: "#E3EEF9" },
      { word: "Madre", translations: { en: "Mother", ar: "الأم", uk: "мати", fr: "Mère" }, emoji: "👩", color: "#FCE8E8" },
      { word: "Padre", translations: { en: "Father", ar: "أب", uk: "батько", fr: "Père" }, emoji: "👨", color: "#F3E8FF" },
      { word: "Hijos", translations: { en: "Children", ar: "أطفال", uk: "діти", fr: "Enfants" }, emoji: "👦👦", color: "#FEFCBF" },
      { word: "Hijas", translations: { en: "Daughters", ar: "بنات", uk: "Дочки", fr: "Filles" }, emoji: "👧👧", color: "#FFF4E5" },
      { word: "Hermano", translations: { en: "Brother", ar: "أخ", uk: "Брат", fr: "Frère" }, emoji: "👦", color: "#E2F3E7" },
      { word: "Hermana", translations: { en: "Sister", ar: "أخت", uk: "сестра", fr: "Sœur" }, emoji: "👧", color: "#E3EEF9" },
      { word: "Abuelos", translations: { en: "Grandparents", ar: "الأجداد", uk: "Дідусь і бабуся", fr: "Grands-parents" }, emoji: "👴👵", color: "#FCE8E8" },
      { word: "Abuelo", translations: { en: "Grandfather", ar: "الجد", uk: "Дідусь", fr: "Grand-père" }, emoji: "👴", color: "#F3E8FF" },
      { word: "Abuela", translations: { en: "Grandmother", ar: "جدة", uk: "Бабуся", fr: "Grand-mère" }, emoji: "👵", color: "#FEFCBF" },
      { word: "Tío", translations: { en: "Uncle", ar: "عم", uk: "дядько", fr: "Oncle" }, emoji: "👨", color: "#FFF4E5" },
      { word: "Tía", translations: { en: "Aunt", ar: "عمة", uk: "тітка", fr: "Tante" }, emoji: "👩", color: "#E2F3E7" },
      { word: "Primo", translations: { en: "Cousin", ar: "ابن عم", uk: "Двоюрідна сестра", fr: "Cousin" }, emoji: "👦", color: "#E3EEF9" },
      { word: "Prima", translations: { en: "Premium", ar: "غالي", uk: "Преміум", fr: "Prime" }, emoji: "👧", color: "#FCE8E8" },
      { word: "Pareja", translations: { en: "Couple", ar: "زوج", uk: "Пара", fr: "Couple" }, emoji: "💑", color: "#F3E8FF" },
      { word: "Amigo", translations: { en: "Friend", ar: "صديق", uk: "Друг", fr: "Ami" }, emoji: "🧑‍🤝‍🧑", color: "#FEFCBF" },
      { word: "Amiga", translations: { en: "Friend", ar: "صديق", uk: "Друг", fr: "Ami" }, emoji: "🧑‍🤝‍🧑", color: "#FFF4E5" },
      { word: "Personas", translations: { en: "People", ar: "الناس", uk: "люди", fr: "Personnes" }, emoji: "👥", color: "#E2F3E7" },
      { word: "Relación", translations: { en: "Relationship", ar: "علاقة", uk: "стосунки", fr: "Relation" }, emoji: "🤝", color: "#E3EEF9" },
      { word: "Vivir", translations: { en: "Live", ar: "يعيش", uk: "Жити", fr: "En direct" }, emoji: "🏠", color: "#FCE8E8" },
      { word: "Ayudar", translations: { en: "Help", ar: "يساعد", uk: "Довідка", fr: "Aide" }, emoji: "📝", color: "#F3E8FF" },
      { word: "Llamar", translations: { en: "Call", ar: "يتصل", uk: "Телефонуйте", fr: "Appel" }, emoji: "📝", color: "#FEFCBF" },
      { word: "Visitar", translations: { en: "Visit", ar: "يزور", uk: "Відвідайте", fr: "Visite" }, emoji: "🚗", color: "#FFF4E5" },
      { word: "Cuidar", translations: { en: "Care", ar: "رعاية", uk: "Догляд", fr: "Soins" }, emoji: "❤️", color: "#E2F3E7" },
      { word: "Hablar", translations: { en: "Talk", ar: "يتحدث", uk: "говорити", fr: "Parler" }, emoji: "🗣️", color: "#E3EEF9" },
      { word: "Escuchar", translations: { en: "Hear", ar: "يسمع", uk: "Почуйте", fr: "Entendre" }, emoji: "👂", color: "#FCE8E8" },
      { word: "Querer", translations: { en: "Want", ar: "يريد", uk: "хочу", fr: "Vouloir" }, emoji: "❤️", color: "#F3E8FF" },
      { word: "Conocer", translations: { en: "Know", ar: "يعرف", uk: "знати", fr: "Savoir" }, emoji: "🤝", color: "#FEFCBF" },
      { word: "Juntos", translations: { en: "Together", ar: "معاً", uk: "Разом", fr: "Ensemble" }, emoji: "🧑‍🤝‍🧑", color: "#FFF4E5" },
      { word: "Separados", translations: { en: "Separated", ar: "منفصل", uk: "Відокремлені", fr: "Séparé" }, emoji: "💔", color: "#E2F3E7" },
      { word: "Cerca", translations: { en: "Near", ar: "قريب", uk: "Поруч", fr: "Près" }, emoji: "📝", color: "#E3EEF9" },
      { word: "Lejos", translations: { en: "Far", ar: "بعيد", uk: "далеко", fr: "Loin" }, emoji: "📝", color: "#FCE8E8" },
      { word: "Casa", translations: { en: "Home", ar: "بيت", uk: "додому", fr: "Maison" }, emoji: "🏠", color: "#F3E8FF" },
      { word: "Ciudad", translations: { en: "City", ar: "مدينة", uk: "Місто", fr: "Ville" }, emoji: "📝", color: "#FEFCBF" },
      { word: "Apoyo", translations: { en: "Support", ar: "يدعم", uk: "Підтримка", fr: "Soutien" }, emoji: "🤝", color: "#FFF4E5" },
      { word: "Problema", translations: { en: "Problem", ar: "مشكلة", uk: "проблема", fr: "Problème" }, emoji: "❓", color: "#E2F3E7" },
      { word: "Tiempo", translations: { en: "Time", ar: "وقت", uk: "час", fr: "Temps" }, emoji: "⏰", color: "#E3EEF9" },
      { word: "Siempre", translations: { en: "Always", ar: "دائماً", uk: "Завжди", fr: "Toujours" }, emoji: "🔄", color: "#FCE8E8" },
      { word: "A veces", translations: { en: "Sometimes", ar: "أحيانا", uk: "іноді", fr: "Parfois" }, emoji: "⏱️", color: "#F3E8FF" },
    ],
    content: `
## La Familia <trans en=\"(The Family)\" ar=\"(العائلة)\" uk=\"(Сім'я)\" fr=\"(La famille)\"/>
Vocabulario para describir las relaciones familiares y afectivas: <trans en=\"(Vocabulary to describe family and emotional relationships:)\" ar=\"(مفردات لوصف العلاقات الأسرية والعاطفية:)\" uk=\"(Словник для опису сімейних та емоційних стосунків:)\" fr=\"(Vocabulaire pour décrire les relations familiales et affectives :)\"/>
- **Padres**: el padre y la madre. <trans en=\"(**Parents**: the father and the mother.)\" ar=\"(**الوالدان**: الأب والأم.)\" uk=\"(**Батьки**: батько і мати.)\" fr=\"(**Parents** : le père et la mère.)\"/>
- **Hijos**: el hijo y la hija. <trans en=\"(**Children**: the son and the daughter.)\" ar=\"(**الأبناء**: الابن والبنت.)\" uk=\"(**Діти**: син і дочка.)\" fr=\"(**Enfants** : le fils et la fille.)\"/>
- **Abuelos**: el abuelo y la abuela. <trans en=\"(**Grandparents**: grandfather and grandmother.)\" ar=\"(**الأجداد**: الجد والجدة.)\" uk=\"(**Дідусь і бабуся**: дідусь і бабуся.)\" fr=\"(**Grands-parents** : grand-père et grand-mère.)\"/>
- **Tíos**: el tío (hermano del padre/madre) y la tía. <trans en=\"(**Uncles**: the uncle (brother of the father/mother) and the aunt.)\" ar=\"(**الأعمام**: العم (أخ الأب/الأم) والخالة.)\" uk=\"(**Дядьки**: дядько (брат батька/матері) і тітка.)\" fr=\"(**Oncles** : l'oncle (frère du père/mère) et la tante.)\"/>
- **Primos**: el primo (hijo de los tíos) y la prima. <trans en=\"(**Cousins**: the cousin (uncle's son) and the cousin.)\" ar=\"(**أبناء العمومة**: ابن العم (ابن العم) وابن العم.)\" uk=\"(**Двоюрідні брати**: двоюрідний брат (дядьків син) і двоюрідний брат.)\" fr=\"(**Cousins** : le cousin (le fils de l'oncle) et le cousin.)\"/>
- **Pareja**: compañero/a sentimental. <trans en=\"(**Partner**: sentimental partner.)\" ar=\"(**الشريك**: الشريك العاطفي.)\" uk=\"(**Партнер**: сентиментальний партнер.)\" fr=\"(**Partenaire** : partenaire sentimental.)\"/>

## Pronombres de objeto indirecto <trans en=\"(indirect object pronouns)\" ar=\"(ضمائر المفعول به غير المباشرة)\" uk=\"(непрямі додатки)\" fr=\"(pronoms objets indirects)\"/>
Usamos los pronombres de objeto para indicar hacia quién va dirigida la acción (*me, te, le, nos, os, les*): <trans en=\"(We use object pronouns to indicate who the action is directed towards (*me, te, le, nos, os, les*):)\" ar=\"(نستخدم ضمائر المفعول للإشارة إلى الجهة التي يتجه إليها الفعل (*me, te, le, nos, os, les*):)\" uk=\"(Ми використовуємо об’єктні займенники, щоб вказати, на кого спрямована дія (*me, te, le, nos, os, les*):)\" fr=\"(Nous utilisons des pronoms objets pour indiquer vers qui l'action est dirigée (*me, te, le, nos, os, les*) :)\"/>
- Yo **le** llamo (a mi madre) por teléfono. <trans en=\"(I call (my mother) on the phone.)\" ar=\"(أتصل (بوالدتي) عبر الهاتف.)\" uk=\"(Дзвоню (моїй мамі) по телефону.)\" fr=\"(J'appelle (ma mère) au téléphone.)\"/>
- Nosotros **les** ayudamos (a nuestros abuelos) en casa. <trans en=\"(We **help** them (our grandparents) at home.)\" ar=\"(نحن **نساعد**هم (أجدادنا) في المنزل.)\" uk=\"(Ми **допомагаємо** їм (бабусям і дідусям) по дому.)\" fr=\"(Nous les **aidons** (nos grands-parents) à la maison.)\"/>
- Ella **nos** visita todos los fines de semana. <trans en=\"(She **visits** us every weekend.)\" ar=\"(إنها **تزورنا** في نهاية كل أسبوع.)\" uk=\"(Вона **відвідує** нас кожні вихідні.)\" fr=\"(Elle **nous rend** visite tous les week-ends.)\"/>
- Yo **te** escucho con atención. <trans en=\"(I listen to you carefully.)\" ar=\"(أستمع إليك بعناية.)\" uk=\"(Я вас уважно слухаю.)\" fr=\"(Je vous écoute attentivement.)\"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "Yo ___ a mi abuelo en el hospital. <trans en=\"(I ___ my grandfather in the hospital.)\" ar=\"(أنا ___ جدي في المستشفى.)\" uk=\"(Я ___ дідусь у лікарні.)\" fr=\"(Je ___ mon grand-père à l'hôpital.)\"/>",
        options: ["visito", "visitas", "visita"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Nosotros ___ a nuestros hijos. <trans en=\"(We ___ our children.)\" ar=\"(نحن ___ أطفالنا.)\" uk=\"(Ми ___ наші діти.)\" fr=\"(Nous ___ nos enfants.)\"/>",
        options: ["cuidamos", "cuidáis", "cuidan"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Yo ___ por teléfono a mi madre todos los días. <trans en=\"(I ___ on the phone to my mother every day.)\" ar=\"(أنا ___ على الهاتف مع والدتي كل يوم.)\" uk=\"(Я ___ щодня телефоную своїй мамі.)\" fr=\"(Je ___ au téléphone avec ma mère tous les jours.)\"/>",
        options: ["llamo", "llamas", "llama"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Yo ___ a mi pareja. <trans en=\"(I ___ my partner.)\" ar=\"(أنا ___ شريكي.)\" uk=\"(Я ___ мій партнер.)\" fr=\"(Je ___ mon partenaire.)\"/>",
        options: ["quiero", "quieres", "quiere"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Yo ___ a mis amigos en la escuela. <trans en=\"(I ___ my friends at school.)\" ar=\"(أنا ___ أصدقائي في المدرسة.)\" uk=\"(Я ___ моїх друзів у школі.)\" fr=\"(Je ___ mes amis à l'école.)\"/>",
        options: ["conozco", "conoces", "conoce"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "La madre de mi padre es mi ___. <trans en=\"(My father's mother is my ___.)\" ar=\"(والدة والدي هي ___.)\" uk=\"(Мама мого тата – моя ___.)\" fr=\"(La mère de mon père est ma ___.)\"/>",
        options: ["abuela", "tía", "hermana"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "El hermano de mi madre es mi ___. <trans en=\"(My mother's brother is my ___.)\" ar=\"(أخي أمي هو ___.)\" uk=\"(Мамин брат - мій ___.)\" fr=\"(Le frère de ma mère est mon ___.)\"/>",
        options: ["tío", "abuelo", "primo"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Yo ___ ayudo a mi hermano con la tarea. <trans en=\"(I ___ help my brother with his homework.)\" ar=\"(أنا ___ أساعد أخي في واجباته المدرسية.)\" uk=\"(Я ___ допомагаю братові робити уроки.)\" fr=\"(Je ___ aide mon frère à faire ses devoirs.)\"/>",
        options: ["le", "me", "nos"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Mis abuelos viven ___ de mí, en otra ciudad. <trans en=\"(My grandparents live ____ from me, in another city.)\" ar=\"(أجدادي يعيشون ____ مني، في مدينة أخرى.)\" uk=\"(Мої дідусь і бабуся живуть ____ від мене, в іншому місті.)\" fr=\"(Mes grands-parents habitent ____ chez moi, dans une autre ville.)\"/>",
        options: ["lejos", "cerca", "juntos"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "— ¿Viven tus padres juntos? — No, están ___. <trans en=\"(— Do your parents live together? — No, they are ___.)\" ar=\"(- هل يعيش والديك معًا؟ - لا، إنهم ___.)\" uk=\"(— Ваші батьки живуть разом? — Ні, вони ___.)\" fr=\"(— Vos parents vivent ensemble ? — Non, ils sont ___.)\"/>",
        options: ["separados", "cerca", "hermanos"],
        correctAnswer: 0
      },
    ]
  },
  {
    id: "a2-vocab-trabajo",
    topic: "Trabajo",
    title: "El Trabajo",
    level: "A2",
    category: "Vocabulario",
    description: "Vocabulario sobre profesiones, búsqueda de empleo y el entorno laboral. <trans en=\"(Vocabulary about professions, job search and the work environment.)\" ar=\"(مفردات حول المهن والبحث عن عمل وبيئة العمل.)\" uk=\"(Лексика про професії, пошук роботи та робоче середовище.)\" fr=\"(Vocabulaire sur les métiers, la recherche d'emploi et l'environnement de travail.)\"/>",
    emoji: "💼",
    color: "#FFF4E5",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
    vocabulary: [
      { word: "Trabajo", translations: { en: "Job", ar: "وظيفة", uk: "Робота", fr: "Emploi" }, emoji: "💼", color: "#E2F3E7" },
      { word: "Empleo", translations: { en: "Employment", ar: "توظيف", uk: "Працевлаштування", fr: "Emploi" }, emoji: "💼", color: "#E3EEF9" },
      { word: "Oficio", translations: { en: "Job", ar: "وظيفة", uk: "Робота", fr: "Emploi" }, emoji: "🛠️", color: "#FCE8E8" },
      { word: "Empresa", translations: { en: "Company", ar: "شركة", uk: "Компанія", fr: "Entreprise" }, emoji: "🏢", color: "#F3E8FF" },
      { word: "Jefe", translations: { en: "Boss", ar: "رئيس", uk: "Бос", fr: "Chef" }, emoji: "👨‍💼", color: "#FEFCBF" },
      { word: "Jefa", translations: { en: "Boss", ar: "رئيس", uk: "Бос", fr: "Chef" }, emoji: "👩‍💼", color: "#FFF4E5" },
      { word: "Compañero", translations: { en: "Buddy", ar: "صاحب", uk: "приятель", fr: "Copain" }, emoji: "🧑‍💼", color: "#E2F3E7" },
      { word: "Compañera", translations: { en: "Companion", ar: "رفيق", uk: "Компаньйон", fr: "Compagnon" }, emoji: "👩‍💼", color: "#E3EEF9" },
      { word: "Horario", translations: { en: "Schedule", ar: "جدول", uk: "розклад", fr: "Calendrier" }, emoji: "📅", color: "#FCE8E8" },
      { word: "Turno", translations: { en: "Shift", ar: "يحول", uk: "Shift", fr: "Changement" }, emoji: "🔄", color: "#F3E8FF" },
      { word: "Mañana", translations: { en: "Tomorrow", ar: "غداً", uk: "завтра", fr: "Demain" }, emoji: "🌅", color: "#FEFCBF" },
      { word: "Tarde", translations: { en: "Late", ar: "متأخر", uk: "Пізно", fr: "En retard" }, emoji: "📝", color: "#FFF4E5" },
      { word: "Noche", translations: { en: "Evening", ar: "مساء", uk: "вечір", fr: "Soirée" }, emoji: "🌙", color: "#E2F3E7" },
      { word: "Salario", translations: { en: "Salary", ar: "مرتب", uk: "Зарплата", fr: "Salaire" }, emoji: "💵", color: "#E3EEF9" },
      { word: "Dinero", translations: { en: "Money", ar: "مال", uk: "гроші", fr: "Argent" }, emoji: "💵", color: "#FCE8E8" },
      { word: "Contrato", translations: { en: "Contract", ar: "عقد", uk: "Договір", fr: "Contracter" }, emoji: "📄", color: "#F3E8FF" },
      { word: "Documento", translations: { en: "Document", ar: "وثيقة", uk: "документ", fr: "Document" }, emoji: "📄", color: "#FEFCBF" },
      { word: "Oficina", translations: { en: "Office", ar: "مكتب", uk: "Офіс", fr: "Bureau" }, emoji: "🏢", color: "#FFF4E5" },
      { word: "Fábrica", translations: { en: "Factory", ar: "مصنع", uk: "Фабрика", fr: "Usine" }, emoji: "🏭", color: "#E2F3E7" },
      { word: "Campo", translations: { en: "Field", ar: "مجال", uk: "Поле", fr: "Champ" }, emoji: "🌾", color: "#E3EEF9" },
      { word: "Tienda", translations: { en: "Store", ar: "محل", uk: "Магазин", fr: "Magasin" }, emoji: "📝", color: "#FCE8E8" },
      { word: "Limpieza", translations: { en: "Cleaning", ar: "تنظيف", uk: "прибирання", fr: "Nettoyage" }, emoji: "🧹", color: "#F3E8FF" },
      { word: "Construcción", translations: { en: "Construction", ar: "بناء", uk: "Будівництво", fr: "Construction" }, emoji: "🏗️", color: "#FEFCBF" },
      { word: "Transporte", translations: { en: "Transport", ar: "ينقل", uk: "Транспорт", fr: "Transport" }, emoji: "🚌", color: "#FFF4E5" },
      { word: "Cocinar", translations: { en: "Cook", ar: "يطبخ", uk: "Кухар", fr: "Cuisiner" }, emoji: "🍳", color: "#E2F3E7" },
      { word: "Cuidar", translations: { en: "Care", ar: "رعاية", uk: "Догляд", fr: "Soins" }, emoji: "❤️", color: "#E3EEF9" },
      { word: "Ayudar", translations: { en: "Help", ar: "يساعد", uk: "Довідка", fr: "Aide" }, emoji: "📝", color: "#FCE8E8" },
      { word: "Trabajar", translations: { en: "Work", ar: "عمل", uk: "Робота", fr: "Travail" }, emoji: "📝", color: "#F3E8FF" },
      { word: "Buscar", translations: { en: "Look for", ar: "بحث", uk: "Шукайте", fr: "Rechercher" }, emoji: "🔍", color: "#FEFCBF" },
      { word: "Empezar", translations: { en: "Begin", ar: "يبدأ", uk: "Почніть", fr: "Commencer" }, emoji: "🏁", color: "#FFF4E5" },
      { word: "Terminar", translations: { en: "Finish", ar: "ينهي", uk: "Закінчити", fr: "Finition" }, emoji: "🔚", color: "#E2F3E7" },
      { word: "Descansar", translations: { en: "Rest", ar: "استراحة", uk: "Відпочинок", fr: "Repos" }, emoji: "📝", color: "#E3EEF9" },
      { word: "Problema", translations: { en: "Problem", ar: "مشكلة", uk: "проблема", fr: "Problème" }, emoji: "❓", color: "#FCE8E8" },
      { word: "Ayuda", translations: { en: "Aid", ar: "يساعد", uk: "Допомога", fr: "Aide" }, emoji: "🆘", color: "#F3E8FF" },
      { word: "Bien", translations: { en: "Good", ar: "جيد", uk: "добре", fr: "Bien" }, emoji: "✅", color: "#FEFCBF" },
      { word: "Mal", translations: { en: "Evil", ar: "شر", uk: "зло", fr: "Mal" }, emoji: "❌", color: "#FFF4E5" },
      { word: "Mucho", translations: { en: "A lot", ar: "كثيراً", uk: "багато", fr: "Beaucoup" }, emoji: "📈", color: "#E2F3E7" },
      { word: "Poco", translations: { en: "Bit", ar: "قليل", uk: "біт", fr: "Peu" }, emoji: "📉", color: "#E3EEF9" },
      { word: "Siempre", translations: { en: "Always", ar: "دائماً", uk: "Завжди", fr: "Toujours" }, emoji: "🔄", color: "#FCE8E8" },
      { word: "A veces", translations: { en: "Sometimes", ar: "أحيانا", uk: "іноді", fr: "Parfois" }, emoji: "⏱️", color: "#F3E8FF" },
    ],
    content: `
## El Entorno Laboral <trans en=\"(The Work Environment)\" ar=\"(بيئة العمل)\" uk=\"(Робоче середовище)\" fr=\"(L'environnement de travail)\"/>
Vocabulario clave para desenvolverse en el ámbito del trabajo: <trans en=\"(Key vocabulary to function in the workplace:)\" ar=\"(المفردات الأساسية للعمل في مكان العمل:)\" uk=\"(Ключовий словниковий запас для роботи на робочому місці:)\" fr=\"(Vocabulaire clé pour fonctionner sur le lieu de travail :)\"/>
- **Empresa**: organización dedicada a actividades industriales o mercantiles. <trans en=\"(**Company**: organization dedicated to industrial or commercial activities.)\" ar=\"(**الشركة**: منظمة مخصصة للأنشطة الصناعية أو التجارية.)\" uk=\"(**Компанія**: організація, що займається промисловою чи комерційною діяльністю.)\" fr=\"(**Entreprise** : organisation dédiée aux activités industrielles ou commerciales.)\"/>
- **Jefe** / **Jefa**: persona que manda u dirige el trabajo. <trans en=\"(**Boss** / **Boss**: person who commands or directs the work.)\" ar=\"(**الرئيس** / **الرئيس**: الشخص الذي يأمر العمل أو يوجهه.)\" uk=\"(**Начальник** / **Начальник**: особа, яка командує або керує роботою.)\" fr=\"(**Patron** / **Boss** : personne qui commande ou dirige le travail.)\"/>
- **Salario** o **Sueldo**: dinero que se recibe por el trabajo. <trans en=\"(**Salary** or **Salary**: money received for work.)\" ar=\"(**الراتب** أو **الراتب**: الأموال المستلمة مقابل العمل.)\" uk=\"(**Зарплата** або **Зарплата**: гроші, отримані за роботу.)\" fr=\"(**Salaire** ou **Salaire** : argent reçu pour le travail.)\"/>
- **Contrato**: documento legal que firma el trabajador y la empresa. <trans en=\"(**Contract**: legal document signed by the worker and the company.)\" ar=\"(**العقد**: وثيقة قانونية موقعة من العامل والشركة.)\" uk=\"(**Контракт**: юридичний документ, підписаний працівником і компанією.)\" fr=\"(**Contrat** : document légal signé par le travailleur et l'entreprise.)\"/>
- **Compañero** / **Compañera**: persona que trabaja contigo. <trans en=\"(**Companion** / **Companion**: person who works with you.)\" ar=\"(**رفيق** / **رفيق**: الشخص الذي يعمل معك.)\" uk=\"(**Компаньйон** / **Компаньйон**: особа, яка працює з вами.)\" fr=\"(**Compagnon** / **Compagnon** : personne qui travaille avec vous.)\"/>

## Expresar necesidad y condiciones <trans en=\"(Express need and conditions)\" ar=\"(التعبير عن الحاجة والشروط)\" uk=\"(Висловіть потребу та умови)\" fr=\"(Exprimer le besoin et les conditions)\"/>
- **Tener que + infinitivo**: Tengo que empezar a las ocho. <trans en=\"(**Have to + infinitive**: I have to start at eight.)\" ar=\"(**Have to + صيغة المصدر**: يجب أن أبدأ عند الثامنة.)\" uk=\"(**Have to + інфінітив**: I have to start at восьма.)\" fr=\"(**Il faut + infinitif** : je dois commencer à huit heures.)\"/>
- **Buscar trabajo**: Estoy buscando un empleo en la ciudad. <trans en=\"(**Look for work**: I am looking for a job in the city.)\" ar=\"(**البحث عن عمل**: أبحث عن عمل في المدينة.)\" uk=\"(**Шукаю роботу**: Шукаю роботу в місті.)\" fr=\"(**Chercher du travail** : Je recherche un emploi en ville.)\"/>
- **Horario y turnos**: Trabajo en el turno de mañana. <trans en=\"(**Schedule and shifts**: I work the morning shift.)\" ar=\"(**الجدول الزمني والمناوبات**: أعمل في الوردية الصباحية.)\" uk=\"(**Графік і зміни**: Я працюю в ранкову зміну.)\" fr=\"(**Horaire et quarts de travail** : Je travaille le quart du matin.)\"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "Yo ___ por la mañana en la oficina. <trans en=\"(I ___ in the morning at the office.)\" ar=\"(أنا ___ في الصباح في المكتب.)\" uk=\"(Я ___ вранці в офісі.)\" fr=\"(Je ___ le matin au bureau.)\"/>",
        options: ["trabajo", "trabajas", "trabaja"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Nosotros ___ trabajo en la ciudad. <trans en=\"(We ___ work in the city.)\" ar=\"(نحن ___ نعمل في المدينة.)\" uk=\"(Ми ___ працюємо в місті.)\" fr=\"(Nous ___ travaillons en ville.)\"/>",
        options: ["buscamos", "buscáis", "buscan"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Ella ___ empleo en una empresa grande. <trans en=\"(She ___ a job in a large company.)\" ar=\"(هي ___ وظيفة في شركة كبيرة.)\" uk=\"(Вона ___ робота у великій компанії.)\" fr=\"(Elle ___ un emploi dans une grande entreprise.)\"/>",
        options: ["busca", "buscan", "buscas"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Tú ___ que estudiar mucho hoy. <trans en=\"(You ___ have to study hard today.)\" ar=\"(عليك ___ عليك أن تدرس بجد اليوم.)\" uk=\"(Ви ___ сьогодні повинні старанно вчитися.)\" fr=\"(Vous ___ devez étudier dur aujourd’hui.)\"/>",
        options: ["tienes", "tengo", "tiene"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "Ellos ___ trabajo aquí todos los días. <trans en=\"(They ___ work here every day.)\" ar=\"(إنهم ___ يعملون هنا كل يوم.)\" uk=\"(Вони ___ працюють тут щодня.)\" fr=\"(Ils ___ travaillent ici tous les jours.)\"/>",
        options: ["encuentran", "encuentras", "encuentro"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "La persona que dirige la empresa es mi ___. <trans en=\"(The person who runs the company is my ___.)\" ar=\"(الشخص الذي يدير الشركة هو ___.)\" uk=\"(Людина, яка керує компанією, це моя ___.)\" fr=\"(La personne qui dirige l’entreprise est mon ___.)\"/>",
        options: ["jefe", "compañero", "empleado"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "El dinero que gano al mes es mi ___. <trans en=\"(The money I earn each month is my ___.)\" ar=\"(المال الذي أكسبه كل شهر هو ___.)\" uk=\"(Гроші, які я заробляю щомісяця, це мої ___.)\" fr=\"(L’argent que je gagne chaque mois est mon ___.)\"/>",
        options: ["salario", "contrato", "turno"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Firmo un ___ para empezar en el trabajo. <trans en=\"(I sign a ___ to start work.)\" ar=\"(أوقع ___ لبدء العمل.)\" uk=\"(Підписую ___ на початок роботи.)\" fr=\"(Je signe un ___ pour commencer à travailler.)\"/>",
        options: ["contrato", "salario", "jefe"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "Trabajo en el turno de la ___ (de 22:00 a 06:00). <trans en=\"(I work the ___ shift (from 10:00 p.m. to 6:00 a.m.).)\" ar=\"(أعمل في وردية ___ (من الساعة 10:00 مساءً إلى الساعة 6:00 صباحًا).)\" uk=\"(Працюю в ___ зміну (з 22:00 до 06:00).)\" fr=\"(Je travaille le quart de ___ (de 22h00 à 6h00).)\"/>",
        options: ["noche", "tarde", "mañana"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Estudio español ___ quiero encontrar un trabajo mejor. <trans en=\"(I study Spanish ___ I want to find a better job.)\" ar=\"(أنا أدرس اللغة الإسبانية ___ أريد أن أجد وظيفة أفضل.)\" uk=\"(Я вивчаю іспанську ___ Я хочу знайти кращу роботу.)\" fr=\"(J'étudie l'espagnol ___ Je veux trouver un meilleur travail.)\"/>",
        options: ["porque", "pero", "y"],
        correctAnswer: 0
      },
    ]
  },
  {
    id: "a2-repaso-a2",
    topic: "Repaso",
    title: "Repaso General del Nivel A2",
    level: "A2",
    category: "Gramática",
    description: "Consolida tus conocimientos de nivel A2 con ejercicios interactivos de repaso. <trans en=\"(Consolidate your A2 level knowledge with interactive review exercises.)\" ar=\"(قم بتعزيز معرفتك بمستوى A2 من خلال تمارين المراجعة التفاعلية.)\" uk=\"(Закріпіть свої знання на рівні А2 за допомогою інтерактивних вправ.)\" fr=\"(Consolidez vos connaissances de niveau A2 avec des exercices de révision interactifs.)\"/>",
    emoji: "🎓",
    color: "#E2F3E7",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80",
    illustrationUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80",
    vocabulary: [],
    content: `
## Temas A2 Repasados <trans en=\"(A2 Topics Reviewed)\" ar=\"(تمت مراجعة موضوعات A2)\" uk=\"(Переглянуті теми A2)\" fr=\"(A2 Sujets examinés)\"/>
- **Ciudad**: preguntar por direcciones, farmacia, hospital, banco, parada, derecha, izquierda. <trans en=\"(**City**: ask for directions, pharmacy, hospital, bank, stop, right, left.)\" ar=\"(**المدينة**: اسأل عن الاتجاهات، الصيدلية، المستشفى، البنك، التوقف، اليمين، اليسار.)\" uk=\"(**Місто**: запитати дорогу, аптека, лікарня, банк, зупинка, праворуч, ліворуч.)\" fr=\"(**Ville** : demander son chemin, pharmacie, hôpital, banque, arrêt, droite, gauche.)\"/>
- **Naturaleza y clima**: el tiempo, hacer calor / frío, llover, estaciones, adverbios de frecuencia. <trans en=\"(**Nature and climate**: weather, hot/cold, rain, seasons, adverbs of frequency.)\" ar=\"(**الطبيعة والمناخ**: الطقس، حار/بارد، المطر، المواسم، أحوال التردد.)\" uk=\"(**Природа та клімат**: погода, жарко/холодно, дощ, пори року, прислівники частоти.)\" fr=\"(**Nature et climat** : météo, chaud/froid, pluie, saisons, adverbes de fréquence.)\"/>
- **Hospital**: síntomas, dolor de cabeza, doler, tener fiebre, consejos médicos. <trans en=\"(**Hospital**: symptoms, headache, pain, fever, medical advice.)\" ar=\"(**المستشفى**: الأعراض، الصداع، الألم، الحمى، المشورة الطبية.)\" uk=\"(**Лікарня**: симптоми, головний біль, біль, лихоманка, консультація лікаря.)\" fr=\"(**Hôpital** : symptômes, maux de tête, douleurs, fièvre, avis médical.)\"/>
- **Colegio**: asignaturas, deberes, exámenes, obligación (tener que). <trans en=\"(**School**: subjects, homework, exams, obligation (have to).)\" ar=\"(**المدرسة**: المواد الدراسية والواجبات المنزلية والامتحانات والالتزامات (يجب).)\" uk=\"(**Школа**: предмети, домашні завдання, іспити, обов'язки (повинен).)\" fr=\"(**École** : matières, devoirs, examens, obligation (devoir).)\"/>
- **Rutina diaria**: verbos reflexivos (levantarse, ducharse), orden de acciones. <trans en=\"(**Daily routine**: reflexive verbs (get up, shower), order of actions.)\" ar=\"(**الروتين اليومي**: الأفعال الانعكاسية (انهض، استحم)، ترتيب الأفعال.)\" uk=\"(**Розпорядок дня**: зворотні дієслова (встати, прийняти душ), порядок дій.)\" fr=\"(**Routine quotidienne** : verbes réfléchis (se lever, se doucher), ordre des actions.)\"/>
- **Familia**: parentescos, pronombres de objeto (le, nos, les). <trans en=\"(**Family**: relationships, object pronouns (le, nos, les).)\" ar=\"(**العائلة**: العلاقات، ضمائر المفعول (le، nos، les).)\" uk=\"(**Сім’я**: стосунки, об’єктні займенники (le, nos, les).)\" fr=\"(**Famille** : relations, pronoms objets (le, nos, les).)\"/>
- **Trabajo**: profesiones, salario, contrato, turnos. <trans en=\"(**Work**: professions, salary, contract, shifts.)\" ar=\"(**العمل**: المهن، الراتب، العقد، الورديات.)\" uk=\"(**Робота**: професії, з/п, контракт, позмінність.)\" fr=\"(**Travail** : professions, salaire, contrat, équipes.)\"/>
    `,
    exercises: [
      {
        id: "ex1",
        question: "Yo ___ por la mañana. <trans en=\"(I ___ in the morning.)\" ar=\"(أنا ___ في الصباح.)\" uk=\"(Я ___ ранку.)\" fr=\"(Je ___ le matin.)\"/>",
        options: ["trabajo", "trabajas", "trabaja"],
        correctAnswer: 0
      },
      {
        id: "ex2",
        question: "Nosotros ___ al centro de la ciudad. <trans en=\"(We ___ to the city center.)\" ar=\"(نحن ___ إلى وسط المدينة.)\" uk=\"(Ми ___ до центру міста.)\" fr=\"(Nous ___ au centre-ville.)\"/>",
        options: ["vamos", "vais", "van"],
        correctAnswer: 0
      },
      {
        id: "ex3",
        question: "Ella ___ trabajo en una oficina. <trans en=\"(She ___ work in an office.)\" ar=\"(هي ___ تعمل في مكتب.)\" uk=\"(Вона ___ працює в офісі.)\" fr=\"(Elle ___ travaille dans un bureau.)\"/>",
        options: ["busca", "buscan", "buscas"],
        correctAnswer: 0
      },
      {
        id: "ex4",
        question: "Estudio español ___ vivo aquí en España. <trans en=\"(I study Spanish ___ I live here in Spain.)\" ar=\"(أنا أدرس اللغة الإسبانية ___ أعيش هنا في إسبانيا.)\" uk=\"(Я вивчаю іспанську ___ Я живу тут, в Іспанії.)\" fr=\"(J'étudie l'espagnol ___ Je vis ici en Espagne.)\"/>",
        options: ["porque", "pero", "y"],
        correctAnswer: 0
      },
      {
        id: "ex5",
        question: "No trabajo hoy ___ es domingo. <trans en=\"(I don't work today ___ it's Sunday.)\" ar=\"(أنا لا أعمل اليوم ___ إنه الأحد.)\" uk=\"(Я сьогодні не працюю ___ сьогодні неділя.)\" fr=\"(Je ne travaille pas aujourd'hui ___ c'est dimanche.)\"/>",
        options: ["porque", "y", "pero"],
        correctAnswer: 0
      },
      {
        id: "ex6",
        question: "Voy al médico porque ___ duele el estómago. <trans en=\"(I go to the doctor because ___ my stomach hurts.)\" ar=\"(أذهب إلى الطبيب لأن ___ معدتي تؤلمني.)\" uk=\"(Я йду до лікаря, тому що ___ болить живіт.)\" fr=\"(Je vais chez le médecin parce que ___ j'ai mal au ventre.)\"/>",
        options: ["me", "te", "le"],
        correctAnswer: 0
      },
      {
        id: "ex7",
        question: "El clima de esta ciudad es muy ___. <trans en=\"(The climate of this city is very ___.)\" ar=\"(مناخ هذه المدينة ___ جدا.)\" uk=\"(Клімат цього міста дуже ___.)\" fr=\"(Le climat de cette ville est très ___.)\"/>",
        options: ["bueno", "bien", "mejor"],
        correctAnswer: 0
      },
      {
        id: "ex8",
        question: "Siempre me ___ temprano por la mañana. <trans en=\"(I always ___ early in the morning.)\" ar=\"(أنا دائمًا ___ في الصباح الباكر.)\" uk=\"(Я завжди ___ рано вранці.)\" fr=\"(Je ___ toujours tôt le matin.)\"/>",
        options: ["levanto", "levantas", "levanta"],
        correctAnswer: 0
      },
      {
        id: "ex9",
        question: "— Por favor, ¿me ___ la cuenta? — Sí, un momento. <trans en=\"(— Please, can I ___ the bill? — Yes, wait a moment.)\" ar=\"(— من فضلك، هل يمكنني ___ الفاتورة؟ - نعم، انتظر لحظة.)\" uk=\"(— Будь ласка, можна ___ рахунок? — Так, зачекайте.)\" fr=\"(— S'il vous plaît, puis-je ___ la facture ? — Oui, attends un instant.)\"/>",
        options: ["traiga", "trae", "tomar"],
        correctAnswer: 0
      },
      {
        id: "ex10",
        question: "Tengo que ___ para el examen del colegio. <trans en=\"(I have to ___ for the school exam.)\" ar=\"(لا بد لي من ___ لامتحان المدرسة.)\" uk=\"(Я маю ___ на шкільний іспит.)\" fr=\"(Je dois ___ pour l'examen scolaire.)\"/>",
        options: ["estudiar", "dormir", "cocinar"],
        correctAnswer: 0
      },
    ]
  },
{
    id: "b1-gram-futuro-condicional",
    topic: "Tiempos Verbales",
    title: "El Futuro y el Condicional",
    level: "B1",
    category: "Gramática",
    description: "Aprende a hacer predicciones y a hablar de situaciones hipotéticas o deseos.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&auto=format&fit=crop&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&auto=format&fit=crop&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop&q=80",
    emoji: "✈️",
    color: "#FFF4E5",
    vocabulary: [
      { word: "El viaje", translations: { en: "The trip / travel", ar: "الرحلة", uk: "Подорож", fr: "Le voyage" }, imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&auto=format&fit=crop&q=60", emoji: "🧳", color: "#FFF4E5" },
      { word: "El recuerdo", translations: { en: "The memory", ar: "الذكرى", uk: "Спогад", fr: "Le souvenir" }, imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=200&auto=format&fit=crop&q=60", emoji: "💭", color: "#FFF4E5" },
      { word: "Planificar", translations: { en: "To plan", ar: "التخطيط", uk: "Планувати", fr: "Planifier" }, imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=200&auto=format&fit=crop&q=60", emoji: "📅", color: "#FFF4E5" }
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
    imageUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=600&auto=format&fit=crop&q=80",
    emoji: "⏳",
    color: "#EBF8FF",
    vocabulary: [
      { word: "Cuando", translations: { en: "When", ar: "عندما", uk: "Коли", fr: "Quand" }, imageUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=200&auto=format&fit=crop&q=60", emoji: "⏰", color: "#EBF8FF" },
      { word: "Aunque", translations: { en: "Although", ar: "بالرغم من", uk: "Хоча", fr: "Bien que / Aunque" }, imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=200&auto=format&fit=crop&q=60", emoji: "⚖️", color: "#EBF8FF" },
      { word: "Tan pronto como", translations: { en: "As soon as", ar: "بمجرد أن", uk: "Як тільки", fr: "Dès que" }, imageUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=200&auto=format&fit=crop&q=60", emoji: "⚡", color: "#EBF8FF" }
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
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop&q=80",
    emoji: "📰",
    color: "#E2F3E7",
    vocabulary: [
      { word: "El desafío", translations: { en: "The challenge", ar: "التحدي", uk: "Виклик", fr: "Le défi" }, imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&auto=format&fit=crop&q=60", emoji: "⛰️", color: "#E2F3E7" },
      { word: "A largo plazo", translations: { en: "Long term", ar: "على المدى الطويل", uk: "على المدى البعيد", fr: "À long terme" }, imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&auto=format&fit=crop&q=60", emoji: "📈", color: "#E2F3E7" },
      { word: "El recurso", translations: { en: "The resource", ar: "المورد", uk: "Ресурс", fr: "La ressource" }, imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&auto=format&fit=crop&q=60", emoji: "💧", color: "#E2F3E7" }
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
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
    emoji: "⚙️",
    color: "#F3E8FF",
    vocabulary: [
      { word: "Soler", translations: { en: "To usually do", ar: "غالباً ما يفعل", uk: "Зазвичай робити", fr: "Avoir l'habitude de" }, imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=200&auto=format&fit=crop&q=60", emoji: "🔄", color: "#F3E8FF" },
      { word: "Llevar + gerundio", translations: { en: "To have been doing", ar: "يقوم به desde hace tiempo", uk: "Робити протягом часу", fr: "Faire depuis un moment" }, imageUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=200&auto=format&fit=crop&q=60", emoji: "⏳", color: "#F3E8FF" },
      { word: "Acabar de", translations: { en: "To have just done", ar: "انتهى للتو من", uk: "Щойно зробити", fr: "Venir de" }, imageUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=200&auto=format&fit=crop&q=60", emoji: "🏁", color: "#F3E8FF" }
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
    imageUrl: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&auto=format&fit=crop&q=80",
    emoji: "💬",
    color: "#FFF5F5",
    vocabulary: [
      { word: "Asegurar", translations: { en: "To assure / state", ar: "يؤكد", uk: "Запевняти", fr: "Assurer" }, imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=200&auto=format&fit=crop&q=60", emoji: "🗣️", color: "#FFF5F5" },
      { word: "Preguntar", translations: { en: "To ask", ar: "يسأل", uk: "Запитувати", fr: "Demander" }, imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=200&auto=format&fit=crop&q=60", emoji: "❓", color: "#FFF5F5" },
      { word: "Mencionar", translations: { en: "To mention", ar: "يذكر", uk: "Згадувати", fr: "Mentionner" }, imageUrl: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=200&auto=format&fit=crop&q=60", emoji: "📝", color: "#FFF5F5" }
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
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
    emoji: "🧠",
    color: "#FEFCBF",
    vocabulary: [
      { word: "No obstante", translations: { en: "Nevertheless", ar: "ومع ذلك", uk: "Проте", fr: "Néanmoins" }, imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=200&auto=format&fit=crop&q=60", emoji: "⚖️", color: "#FEFCBF" },
      { word: "Por consiguiente", translations: { en: "Therefore / Consequently", ar: "بناء على ذلك", uk: "Отже", fr: "Par conséquent" }, imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=200&auto=format&fit=crop&q=60", emoji: "👉", color: "#FEFCBF" },
      { word: "En resumen", translations: { en: "In summary", ar: "باختصار", uk: "Підсумовуючи", fr: "En résumé" }, imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=200&auto=format&fit=crop&q=60", emoji: "📌", color: "#FEFCBF" }
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