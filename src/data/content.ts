import { lessonsA2 } from './lessonsA2';
import { lessonsA1 } from './lessonsA1';
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
  ...lessonsA1,
  ...lessonsA2,
  
  {
    "id": "b2-gram-subjuntivo",
    "topic": "El Subjuntivo",
    "title": "Introducción al Subjuntivo",
    "level": "B2",
    "category": "Gramática",
    "description": "Expresa deseos, dudas, emociones y probabilidades usando el presente de subjuntivo.",
    "imageUrl": "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&auto=format&fit=crop&q=80",
    "emoji": "💭",
    "color": "#E3EEF9",
    "content": "\n## El Presente de Subjuntivo\n\nEl subjuntivo no es un tiempo verbal, es un *modo*. Lo usamos para expresar cosas que no son hechos seguros, sino ideas, deseos o sentimientos.\n\n### Usos comunes:\n1.  **Deseos:** Quiero que tú **vengas** a mi fiesta.\n2.  **Emociones:** Me alegra que **estés** bien.\n3.  **Duda / Probabilidad:** Es posible que mañana **llueva**.\n4.  **Recomendaciones:** Te recomiendo que **estudies** más.\n\n### Formación básica (Verbos Regulares)\n*   **-AR** (hablar) -> que yo habl**e**, que tú habl**es**...\n*   **-ER / -IR** (comer / vivir) -> que yo com**a**, que tú viv**as**...\n    ",
    "exercises": [
      {
        "id": "ex1",
        "question": "Espero que tú _____ (aprobar) el examen de español.",
        "options": [
          "apruebas",
          "apruebes",
          "aprobar"
        ],
        "correctAnswer": 1
      },
      {
        "id": "ex2",
        "question": "No creo que Juan _____ (venir) hoy.",
        "options": [
          "viene",
          "venga",
          "vino"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": "c1-vocab-modismos",
    "topic": "Expresiones Idiomáticas",
    "title": "Modismos y Frases Hechas",
    "level": "C1",
    "category": "Vocabulario",
    "description": "Aprende expresiones idiomáticas comunes para hablar con gran naturalidad y entender a los nativos.",
    "imageUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
    "emoji": "🗣️",
    "color": "#F3E8FF",
    "content": "\n## Expresiones Idiomáticas\n\nPara hablar como un nativo, es esencial conocer las frases hechas que se usan en el día a día.\n\n*   **Tomar el pelo:** Engañar o bromear con alguien.\n    *   *Ejemplo: ¿Cien euros por este café? ¡Me estás tomando el pelo!*\n*   **Echar una mano:** Ayudar a alguien.\n    *   *Ejemplo: ¿Me echas una mano con estas cajas? Pesan mucho.*\n*   **Estar en las nubes:** Estar despistado o pensando en otras cosas.\n    *   *Ejemplo: Juan nunca escucha en clase, siempre está en las nubes.*\n*   **Costar un ojo de la cara:** Ser muy caro.\n    *   *Ejemplo: Me encanta ese coche, pero debe costar un ojo de la cara.*\n    ",
    "exercises": [
      {
        "id": "ex1",
        "question": "Si alguien 'te toma el pelo', esa persona está...",
        "options": [
          "Cortándote el cabello",
          "Bromeando contigo o engañándote",
          "Enojada contigo"
        ],
        "correctAnswer": 1
      },
      {
        "id": "ex2",
        "question": "Si necesitas que tu amigo te ayude, le dices:",
        "options": [
          "Échame una mano",
          "Estoy en las nubes",
          "Me cuesta un ojo"
        ],
        "correctAnswer": 0
      }
    ]
  },
  {
    "id": "c2-comp-literatura",
    "topic": "Literatura y Cultura",
    "title": "Análisis Literario Breve",
    "level": "C2",
    "category": "Comprensión",
    "description": "Lee textos literarios complejos, comprende dobles sentidos, ironía y vocabulario muy avanzado.",
    "imageUrl": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80",
    "color": "#FFF4E5",
    "content": "\n## Lectura Avanzada\n\nAnalicemos un pequeño fragmento que utiliza un lenguaje rico en matices:\n\n> *\"La ciudad amaneció envuelta en un manto de niebla tan espeso que hasta los pensamientos parecían desvanecerse antes de tomar forma humana. Era un letargo colectivo, una pausa impuesta por la marea gris que disolvía contornos y certezas.\"*\n\n### Análisis\nEste texto no solo describe el clima (la niebla), sino que lo utiliza como metáfora del estado psicológico de los habitantes (\"letargo colectivo\", \"disolvía certezas\"). Hay una personificación sutil (\"pausa impuesta\") y un vocabulario abstracto (\"contornos\", \"letargo\").\n    ",
    "exercises": [
      {
        "id": "ex1",
        "question": "¿Qué sugiere la expresión 'los pensamientos parecían desvanecerse' en este contexto?",
        "options": [
          "Que la gente sufría de amnesia.",
          "Una sensación de confusión, irrealidad y letargo mental.",
          "Que la niebla era tóxica."
        ],
        "correctAnswer": 1
      },
      {
        "id": "ex2",
        "question": "La palabra 'letargo' se puede sustituir más adecuadamente por:",
        "options": [
          "Alegría",
          "Adormecimiento o inactividad profunda",
          "Movimiento frenético"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": "b2-gram-hipotesis",
    "topic": "Hipótesis",
    "title": "Expresión de Hipótesis y Probabilidad",
    "level": "B2",
    "category": "Gramática",
    "description": "Aprende a formular suposiciones complejas usando el condicional y el subjuntivo.",
    "imageUrl": "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&auto=format&fit=crop&q=80",
    "emoji": "🎲",
    "color": "#F3E8FF",
    "content": "\n## Expresando Probabilidad e Hipótesis\n\nEn el nivel B2, no afirmamos cosas directamente, sino que a menudo evaluamos su probabilidad.\n\n### Probabilidad en Presente\nPara indicar que algo es probable pero no seguro:\n*   **Es probable que** + Subjuntivo (Es probable que *llueva* hoy).\n*   **Quizás / Tal vez** + Subjuntivo (Quizás *venga* más tarde).\n*   **A lo mejor** + Indicativo (A lo mejor *viene* más tarde).\n\n### Hipótesis Irreales (Si + Imperfecto Subjuntivo + Condicional)\nSituaciones que no son reales en el presente:\n*   Si **tuviera** dinero, **compraría** una casa. (Pero no tengo).\n*   Si **hablara** francés, **viviría** en París.\n    ",
    "exercises": [
      {
        "id": "ex1",
        "question": "\"A lo mejor\" va siempre seguido de...",
        "options": [
          "Subjuntivo",
          "Indicativo",
          "Infinitivo"
        ],
        "correctAnswer": 1
      },
      {
        "id": "ex2",
        "question": "Completa la hipótesis irreal: \"Si yo _______ el presidente, cambiaría la ley.\"",
        "options": [
          "soy",
          "fuera",
          "sería"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": "b2-comp-debates",
    "topic": "Comprensión",
    "title": "Debate: Texto Argumentativo",
    "level": "B2",
    "category": "Comprensión",
    "description": "Comprende textos de nivel avanzado y practica cómo defender una postura sobre temas sociales.",
    "imageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80",
    "emoji": "⚖️",
    "color": "#FFF5F5",
    "content": "\n## LECTURA: El impacto de la tecnología\n\n> *\"Es innegable que la tecnología ha facilitado nuestras vidas en innumerables aspectos. Sin embargo, existe un debate creciente sobre si estamos perdiendo habilidades sociales esenciales. Por un lado, los defensores de la digitalización argumentan que nunca hemos estado tan conectados. Por otro lado, los críticos advierten sobre una epidemia de soledad disfrazada de hiperconexión, donde preferimos enviar un mensaje antes que entablar una conversación frente a frente.\"*\n\n### Análisis del Debate\nEn B2 debes identificar las **dos posturas** en un debate y los conectores que estructuran el argumento (\"Por un lado...\", \"Por otro lado...\").\n    ",
    "exercises": [
      {
        "id": "ex1",
        "question": "¿Qué argumentan los críticos de la digitalización en el texto?",
        "options": [
          "Que la tecnología es inútil.",
          "Que provoca una falsa conexión y aislamiento social.",
          "Que deberíamos prohibir los teléfonos."
        ],
        "correctAnswer": 1
      },
      {
        "id": "ex2",
        "question": "La expresión 'epidemia de soledad disfrazada' es un ejemplo de...",
        "options": [
          "Léxico abstracto y metafórico propio de nivel avanzado.",
          "Gramática incorrecta.",
          "Vocabulario básico de nivel A1."
        ],
        "correctAnswer": 0
      }
    ]
  },
  {
    "id": "b2-vocab-formal-informal",
    "topic": "Registros",
    "title": "Estilo Formal e Informal",
    "level": "B2",
    "category": "Vocabulario",
    "description": "Adapta tu forma de hablar al contexto: escribir un email formal vs charlar con amigos.",
    "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80",
    "emoji": "👔",
    "color": "#E2E8F0",
    "content": "\n## Adaptar el Registro (Tú vs Usted)\n\nEn un nivel alto, debes saber cambiar de vocabulario dependiendo de con quién hablas.\n\n### Estilo Informal (Amigos, familia, redes sociales)\n*   Léxico relajado, uso del \"Tú\".\n*   *¡Hola! ¿Qué tal todo? Escríbeme cuando puedas.*\n\n### Estilo Formal (Trabajo, instituciones, solicitudes)\n*   Uso de \"Usted\", saludos formales y condicional de cortesía.\n*   *Estimado Sr. Pérez: Le escribo para solicitar información... Atentamente, Juan.*\n    ",
    "exercises": [
      {
        "id": "ex1",
        "question": "¿Cuál de estas opciones es adecuada para el inicio de un correo electrónico formal al director de una empresa?",
        "options": [
          "¡Qué pasa jefe!",
          "Estimado Director:",
          "Hola, amigo:"
        ],
        "correctAnswer": 1
      },
      {
        "id": "ex2",
        "question": "Si quieres pedir un favor de forma muy educada (formal), dices:",
        "options": [
          "Hazme este favor.",
          "¿Podría usted ayudarme, por favor?",
          "¡Ayuda!"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": "b2-gram-subjuntivo-avanzado",
    "topic": "Subjuntivo",
    "title": "Subjuntivo: Oraciones Temporales y Concesivas",
    "level": "B2",
    "category": "Gramática",
    "description": "Usa el subjuntivo para hablar del futuro con 'cuando' y expresar contraste con 'aunque'.",
    "imageUrl": "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=600&auto=format&fit=crop&q=80",
    "emoji": "⏳",
    "color": "#EBF8FF",
    "vocabulary": [
      {
        "word": "Cuando",
        "translations": {
          "en": "When",
          "ar": "عندما",
          "uk": "Коли",
          "fr": "Quand"
        },
        "imageUrl": "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=200&auto=format&fit=crop&q=60",
        "emoji": "⏰",
        "color": "#EBF8FF"
      },
      {
        "word": "Aunque",
        "translations": {
          "en": "Although",
          "ar": "بالرغم من",
          "uk": "Хоча",
          "fr": "Bien que / Aunque"
        },
        "imageUrl": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=200&auto=format&fit=crop&q=60",
        "emoji": "⚖️",
        "color": "#EBF8FF"
      },
      {
        "word": "Tan pronto como",
        "translations": {
          "en": "As soon as",
          "ar": "بمجرد أن",
          "uk": "Як тільки",
          "fr": "Dès que"
        },
        "imageUrl": "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=200&auto=format&fit=crop&q=60",
        "emoji": "⚡",
        "color": "#EBF8FF"
      }
    ],
    "content": "\n## Oraciones Temporales y Concesivas con Subjuntivo\n\nEn el nivel B2, aprendemos que ciertas conjunciones cambian de modo (indicativo o subjuntivo) según la intención.\n\n### 1. Oraciones Temporales (Cuando, Tan pronto como)\n*   **Indicativo** (Rutina o Pasado): *Cuando voy a Málaga, como espetos.* (Rutina)\n*   **Subjuntivo** (Acción Futura): *Cuando **tenga** tiempo, te llamaré.* (Futuro)\n\n### 2. Oraciones Concesivas (Aunque)\n*   **Indicativo** (Hecho real conocido): *Aunque está lloviendo, voy a salir.* (Sé que llueve)\n*   **Subjuntivo** (Hipótesis o indiferencia): *Aunque **llueva** mañana, iré al parque.* (No me importa si llueve o no)\n    ",
    "exercises": [
      {
        "id": "ex1",
        "question": "Completa: 'Te enviaré un mensaje cuando _______ a casa'. (Acción futura)",
        "options": [
          "llegue",
          "llego",
          "llegará"
        ],
        "correctAnswer": 0
      },
      {
        "id": "ex2",
        "question": "Completa: 'Aunque no _______ dinero mañana, seré feliz'. (Hipótesis futura)",
        "options": [
          "tengo",
          "tenga",
          "tuviera"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": "c1-comp-textos-complejos",
    "topic": "Textos Complejos",
    "title": "Comprensión: Editorial de Prensa",
    "level": "C1",
    "category": "Comprensión",
    "description": "Analiza un texto formal sobre el cambio climático para comprender sutilezas y registros.",
    "imageUrl": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop&q=80",
    "emoji": "📰",
    "color": "#E2F3E7",
    "vocabulary": [
      {
        "word": "El desafío",
        "translations": {
          "en": "The challenge",
          "ar": "التحدي",
          "uk": "Виклик",
          "fr": "Le défi"
        },
        "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&auto=format&fit=crop&q=60",
        "emoji": "⛰️",
        "color": "#E2F3E7"
      },
      {
        "word": "A largo plazo",
        "translations": {
          "en": "Long term",
          "ar": "على المدى الطويل",
          "uk": "على المدى البعيد",
          "fr": "À long terme"
        },
        "imageUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&auto=format&fit=crop&q=60",
        "emoji": "📈",
        "color": "#E2F3E7"
      },
      {
        "word": "El recurso",
        "translations": {
          "en": "The resource",
          "ar": "المورد",
          "uk": "Ресурс",
          "fr": "La ressource"
        },
        "imageUrl": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&auto=format&fit=crop&q=60",
        "emoji": "💧",
        "color": "#E2F3E7"
      }
    ],
    "content": "\n## LECTURA: El porvenir ecológico\n\n> *\"El calentamiento global representa, sin lugar a dudas, el mayor **desafío** al que se enfrenta la humanidad en el siglo XXI. La transición hacia fuentes de energía renovables no debe concebirse únicamente como una alternativa económica, sino como una obligación moral para salvaguardar nuestros **recursos** naturales. Las políticas adoptadas hoy determinarán el bienestar social **a largo plazo**, por lo que aplazar las reformas estructurales constituiría una negligencia imperdonable.\"*\n\n### Comprensión en C1\nEn este nivel, debes comprender:\n*   **El tono**: Formal, persuasivo y analítico.\n*   **Las sutilezas**: Expresiones como *sin lugar a dudas* (absolutely) o *negligencia imperdonable* (unpardonable negligence).\n    ",
    "exercises": [
      {
        "id": "ex1",
        "question": "¿Cuál es el propósito primordial del texto?",
        "options": [
          "Criticar el consumo de energía",
          "Defender la transición ecológica como deber moral y necesidad a largo plazo",
          "Promover la industria automotriz"
        ],
        "correctAnswer": 1
      },
      {
        "id": "ex2",
        "question": "¿Qué connota la frase 'aplazar las reformas'?",
        "options": [
          "Postergar los cambios necesarios",
          "Acelerar los procesos gubernamentales",
          "Disminuir los impuestos"
        ],
        "correctAnswer": 0
      }
    ]
  },
  {
    "id": "c1-gram-perifrasis",
    "topic": "Perífrasis Verbales",
    "title": "Gramática: Perífrasis Verbales Avanzadas",
    "level": "C1",
    "category": "Gramática",
    "description": "Aprende a usar construcciones verbales precisas como 'soler', 'acabar de' o 'llevar + gerundio'.",
    "imageUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
    "emoji": "⚙️",
    "color": "#F3E8FF",
    "vocabulary": [
      {
        "word": "Soler",
        "translations": {
          "en": "To usually do",
          "ar": "غالباً ما يفعل",
          "uk": "Зазвичай робити",
          "fr": "Avoir l'habitude de"
        },
        "imageUrl": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=200&auto=format&fit=crop&q=60",
        "emoji": "🔄",
        "color": "#F3E8FF"
      },
      {
        "word": "Llevar + gerundio",
        "translations": {
          "en": "To have been doing",
          "ar": "يقوم به desde hace tiempo",
          "uk": "Робити протягом часу",
          "fr": "Faire depuis un moment"
        },
        "imageUrl": "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=200&auto=format&fit=crop&q=60",
        "emoji": "⏳",
        "color": "#F3E8FF"
      },
      {
        "word": "Acabar de",
        "translations": {
          "en": "To have just done",
          "ar": "انتهى للتو من",
          "uk": "Щойно зробити",
          "fr": "Venir de"
        },
        "imageUrl": "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=200&auto=format&fit=crop&q=60",
        "emoji": "🏁",
        "color": "#F3E8FF"
      }
    ],
    "content": "\n## Perífrasis Verbales Avanzadas\n\nLas perífrasis son uniones de dos o más verbos que funcionan como una sola unidad para añadir matices precisos de tiempo, duración u obligación.\n\n### 1. Perífrasis Durativas\n*   **Llevar + Gerundio** (Acción que comenzó en el pasado y continúa):\n    *   *Llevo tres años estudiando español.* <trans en=\"(I have been studying Spanish for three years)\" ar=\"(أنا أدرس الإسبانية منذ ثلاث سنوات)\" uk=\"(Я вивчаю іспанську вже три роки)\" fr=\"(J'étudie l'espagnol depuis trois ans)\"/>\n*   **Ir + Gerundio** (Proceso gradual y lento):\n    *   *Poco a poco voy entendiendo la gramática.*\n\n### 2. Perífrasis Temporales\n*   **Acabar de + Infinitivo** (Acción recién terminada):\n    *   *Acabo de llegar a la oficina.* <trans en=\"(I have just arrived at the office)\" ar=\"(لقد وصلت للتو إلى المكتب)\" uk=\"(Я щойно прийшов в офіс)\" fr=\"(Je viens d'arriver au bureau)\"/>\n*   **Soler + Infinitivo** (Frecuencia / Hábito):\n    *   *Suelo desayunar café con leche.*\n    ",
    "exercises": [
      {
        "id": "ex1",
        "question": "Si empezaste a trabajar en 2020 y sigues allí, dices: '_______ trabajando aquí desde 2020'.",
        "options": [
          "Suelo",
          "Llevo",
          "Acabo de"
        ],
        "correctAnswer": 1
      },
      {
        "id": "ex2",
        "question": "¿Qué expresa la perífrasis 'acabar de + infinitivo'?",
        "options": [
          "Una acción habitual",
          "Una acción que se completó recientemente",
          "Un plan futuro"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": "c1-gram-estilo-indirecto",
    "topic": "Estilo Indirecto",
    "title": "Gramática: Estilo Indirecto en el Pasado",
    "level": "C1",
    "category": "Gramática",
    "description": "Aprende a reportar lo que otros dijeron cambiando los tiempos verbales adecuadamente.",
    "imageUrl": "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&auto=format&fit=crop&q=80",
    "emoji": "💬",
    "color": "#FFF5F5",
    "vocabulary": [
      {
        "word": "Asegurar",
        "translations": {
          "en": "To assure / state",
          "ar": "يؤكد",
          "uk": "Запевняти",
          "fr": "Assurer"
        },
        "imageUrl": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=200&auto=format&fit=crop&q=60",
        "emoji": "🗣️",
        "color": "#FFF5F5"
      },
      {
        "word": "Preguntar",
        "translations": {
          "en": "To ask",
          "ar": "يسأل",
          "uk": "Запитувати",
          "fr": "Demander"
        },
        "imageUrl": "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=200&auto=format&fit=crop&q=60",
        "emoji": "❓",
        "color": "#FFF5F5"
      },
      {
        "word": "Mencionar",
        "translations": {
          "en": "To mention",
          "ar": "يذكر",
          "uk": "Згадувати",
          "fr": "Mentionner"
        },
        "imageUrl": "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=200&auto=format&fit=crop&q=60",
        "emoji": "📝",
        "color": "#FFF5F5"
      }
    ],
    "content": "\n## El Estilo Indirecto (Reported Speech)\n\nCuando queremos contar a alguien lo que otra persona ha dicho, usamos verbos de transmisión (decir, asegurar, preguntar) en pasado. Esto provoca cambios en los tiempos verbales.\n\n| Estilo Directo (Presente) | Estilo Indirecto (Pasado) |\n|---|---|\n| *\"Tengo hambre.\"* | Dijo que **tenía** hambre (Imperfecto). |\n| *\"Fui al mercado.\"* (Indefinido) | Dijo que **había ido** al mercado (Pluscuamperfecto). |\n| *\"Compraré el coche.\"* (Futuro) | Dijo que **compraría** el coche (Condicional). |\n| *\"¡Hazlo!\"* (Imperativo) | Dijo que lo **hiciera** (Imperfecto de Subjuntivo). |\n    ",
    "exercises": [
      {
        "id": "ex1",
        "question": "Si ayer tu hermano te dijo: 'No puedo ir', hoy dices: 'Él dijo que no _______ ir'.",
        "options": [
          "pudo",
          "podía",
          "puede"
        ],
        "correctAnswer": 1
      },
      {
        "id": "ex2",
        "question": "Si alguien dice: 'Llamaré mañana', el estilo indirecto correcto en pasado es: 'Dijo que _______ al día siguiente'.",
        "options": [
          "llame",
          "llamará",
          "llamaría"
        ],
        "correctAnswer": 2
      }
    ]
  },
  {
    "id": "c1-vocab-marcadores",
    "topic": "Marcadores",
    "title": "Vocabulario: Marcadores Discursivos",
    "level": "C1",
    "category": "Vocabulario",
    "description": "Organiza tus ideas de forma fluida y profesional usando conectores de nivel avanzado.",
    "imageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
    "emoji": "🧠",
    "color": "#FEFCBF",
    "vocabulary": [
      {
        "word": "No obstante",
        "translations": {
          "en": "Nevertheless",
          "ar": "ومع ذلك",
          "uk": "Проте",
          "fr": "Néanmoins"
        },
        "imageUrl": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=200&auto=format&fit=crop&q=60",
        "emoji": "⚖️",
        "color": "#FEFCBF"
      },
      {
        "word": "Por consiguiente",
        "translations": {
          "en": "Therefore / Consequently",
          "ar": "بناء على ذلك",
          "uk": "Отже",
          "fr": "Par conséquent"
        },
        "imageUrl": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=200&auto=format&fit=crop&q=60",
        "emoji": "👉",
        "color": "#FEFCBF"
      },
      {
        "word": "En resumen",
        "translations": {
          "en": "In summary",
          "ar": "باختصار",
          "uk": "Підсумовуючи",
          "fr": "En résumé"
        },
        "imageUrl": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=200&auto=format&fit=crop&q=60",
        "emoji": "📌",
        "color": "#FEFCBF"
      }
    ],
    "content": "\n## Marcadores Discursivos Avanzados\n\nLos marcadores discursivos sirven para estructurar un discurso formal, facilitando la cohesión y claridad de nuestras exposiciones orales y escritas.\n\n### 1. Contraste u Oposición\n*   **No obstante** (Formal para *sin embargo*): *El presupuesto es limitado. **No obstante**, completaremos el proyecto.*\n*   **A pesar de (que)**: *A pesar de las dificultades, logramos el éxito.*\n\n### 2. Causa y Consecuencia\n*   **Por consiguiente** (Formal para *por eso*): *No se cumplieron los plazos, **por consiguiente** se suspende la entrega.*\n*   **Puesto que** (Formal para *porque*): *Puesto que nadie asistió, cancelamos la reunión.*\n    ",
    "exercises": [
      {
        "id": "ex1",
        "question": "¿Cuál de estos conectores expresa consecuencia en un registro formal?",
        "options": [
          "Puesto que",
          "Por consiguiente",
          "No obstante"
        ],
        "correctAnswer": 1
      },
      {
        "id": "ex2",
        "question": "Completa: 'El candidato tiene experiencia. _______, no fue seleccionado para el cargo.'",
        "options": [
          "En resumen",
          "No obstante",
          "Por consiguiente"
        ],
        "correctAnswer": 1
      }
    ]
  }

];
