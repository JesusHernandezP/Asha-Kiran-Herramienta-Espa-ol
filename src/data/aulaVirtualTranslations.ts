import { Language } from '../contexts/LanguageContext';

interface LevelDetail {
  name: string;
  description: string;
  skills: string[];
}

interface AulaTranslation {
  pageTitle: string;
  pageSubtitle: string;
  startButton: string;
  lessonsAvailable: string;
  spanishOnly: string;
  levels: Record<string, LevelDetail>;
}

// A1 and A2 are fully translated. B1+ stays in Spanish only.
export const aulaVirtualTranslations: Record<Language, AulaTranslation> = {
  es: {
    pageTitle: 'Aula Virtual',
    pageSubtitle: 'Elige tu nivel y empieza a aprender español paso a paso.',
    startButton: 'Empezar',
    lessonsAvailable: 'lecciones disponibles',
    spanishOnly: 'Solo español',
    levels: {
      A1: {
        name: 'Inicial',
        description: 'Tus primeros pasos en español. Aprende lo esencial para comunicarte desde el primer día.',
        skills: ['El abecedario y los sonidos', 'Saludos y presentaciones', 'Números, colores y vocabulario básico', 'Pronombres y verbos ser, estar, tener'],
      },
      A2: {
        name: 'Básico',
        description: 'Amplía tu vocabulario y empieza a mantener conversaciones sencillas.',
        skills: ['Animales, naturaleza y direcciones', 'Lectura de textos cortos', 'Vocabulario del mundo y países', 'Vida cotidiana y expresiones útiles'],
      },
      B1: {
        name: 'Intermedio',
        description: 'Conversa con mayor fluidez y entiende textos más complejos.',
        skills: ['Expresiones idiomáticas', 'Tiempos verbales pasados', 'Opiniones y debates', 'Lectura de noticias'],
      },
      B2: {
        name: 'Intermedio Alto',
        description: 'Domina el subjuntivo, debate y comprende contenido complejo.',
        skills: ['Subjuntivo e indicativo', 'Textos académicos', 'Escritura formal', 'Comprensión auditiva avanzada'],
      },
      C1: {
        name: 'Avanzado',
        description: 'Comunícate con precisión en contextos profesionales y académicos.',
        skills: ['Lenguaje académico', 'Matices culturales', 'Expresión escrita avanzada', 'Análisis de textos literarios'],
      },
      C2: {
        name: 'Maestría',
        description: 'Dominio total del español. Nivel nativo.',
        skills: ['Literatura española', 'Expresión nativa', 'Registros formales e informales', 'Interpretación y traducción'],
      },
    },
  },
  en: {
    pageTitle: 'Virtual Classroom',
    pageSubtitle: 'Choose your level and start learning Spanish step by step.',
    startButton: 'Start',
    lessonsAvailable: 'lessons available',
    spanishOnly: 'Spanish only',
    levels: {
      A1: {
        name: 'Beginner',
        description: 'Your first steps in Spanish. Learn the essentials to communicate from day one.',
        skills: ['The alphabet and sounds', 'Greetings and introductions', 'Numbers, colors and basic vocabulary', 'Pronouns and verbs ser, estar, tener'],
      },
      A2: {
        name: 'Elementary',
        description: 'Expand your vocabulary and start having simple conversations.',
        skills: ['Animals, nature and directions', 'Reading short texts', 'World vocabulary and countries', 'Daily life and useful expressions'],
      },
      B1: {
        name: 'Intermedio',
        description: 'Conversa con mayor fluidez y entiende textos más complejos.',
        skills: ['Expresiones idiomáticas', 'Tiempos verbales pasados', 'Opiniones y debates', 'Lectura de noticias'],
      },
      B2: {
        name: 'Intermedio Alto',
        description: 'Domina el subjuntivo, debate y comprende contenido complejo.',
        skills: ['Subjuntivo e indicativo', 'Textos académicos', 'Escritura formal', 'Comprensión auditiva avanzada'],
      },
      C1: {
        name: 'Avanzado',
        description: 'Comunícate con precisión en contextos profesionales y académicos.',
        skills: ['Lenguaje académico', 'Matices culturales', 'Expresión escrita avanzada', 'Análisis de textos literarios'],
      },
      C2: {
        name: 'Maestría',
        description: 'Dominio total del español. Nivel nativo.',
        skills: ['Literatura española', 'Expresión nativa', 'Registros formales e informales', 'Interpretación y traducción'],
      },
    },
  },
  ar: {
    pageTitle: 'الفصل الافتراضي',
    pageSubtitle: 'اختر مستواك وابدأ تعلم الإسبانية خطوة بخطوة.',
    startButton: 'ابدأ',
    lessonsAvailable: 'دروس متاحة',
    spanishOnly: 'الإسبانية فقط',
    levels: {
      A1: {
        name: 'مبتدئ',
        description: 'خطواتك الأولى في الإسبانية. تعلم الأساسيات للتواصل من اليوم الأول.',
        skills: ['الأبجدية والأصوات', 'التحيات والتعريف بالنفس', 'الأرقام والألوان والمفردات الأساسية', 'الضمائر والأفعال ser، estar، tener'],
      },
      A2: {
        name: 'أساسي',
        description: 'وسّع مفرداتك وابدأ بإجراء محادثات بسيطة.',
        skills: ['الحيوانات والطبيعة والاتجاهات', 'قراءة نصوص قصيرة', 'مفردات العالم والبلدان', 'الحياة اليومية والتعبيرات المفيدة'],
      },
      B1: {
        name: 'Intermedio',
        description: 'Conversa con mayor fluidez y entiende textos más complejos.',
        skills: ['Expresiones idiomáticas', 'Tiempos verbales pasados', 'Opiniones y debates', 'Lectura de noticias'],
      },
      B2: {
        name: 'Intermedio Alto',
        description: 'Domina el subjuntivo, debate y comprende contenido complejo.',
        skills: ['Subjuntivo e indicativo', 'Textos académicos', 'Escritura formal', 'Comprensión auditiva avanzada'],
      },
      C1: {
        name: 'Avanzado',
        description: 'Comunícate con precisión en contextos profesionales y académicos.',
        skills: ['Lenguaje académico', 'Matices culturales', 'Expresión escrita avanzada', 'Análisis de textos literarios'],
      },
      C2: {
        name: 'Maestría',
        description: 'Dominio total del español. Nivel nativo.',
        skills: ['Literatura española', 'Expresión nativa', 'Registros formales e informales', 'Interpretación y traducción'],
      },
    },
  },
  uk: {
    pageTitle: 'Віртуальний клас',
    pageSubtitle: 'Оберіть свій рівень і почніть вивчати іспанську крок за кроком.',
    startButton: 'Почати',
    lessonsAvailable: 'уроків доступно',
    spanishOnly: 'Лише іспанська',
    levels: {
      A1: {
        name: 'Початковий',
        description: 'Ваші перші кроки в іспанській. Вивчіть основи для спілкування з першого дня.',
        skills: ['Алфавіт і звуки', 'Привітання та знайомство', 'Числа, кольори та базова лексика', 'Займенники та дієслова ser, estar, tener'],
      },
      A2: {
        name: 'Базовий',
        description: 'Розширте словниковий запас і почніть вести прості розмови.',
        skills: ['Тварини, природа та напрямки', 'Читання коротких текстів', 'Лексика світу та країн', 'Повсякденне життя та корисні вирази'],
      },
      B1: {
        name: 'Intermedio',
        description: 'Conversa con mayor fluidez y entiende textos más complejos.',
        skills: ['Expresiones idiomáticas', 'Tiempos verbales pasados', 'Opiniones y debates', 'Lectura de noticias'],
      },
      B2: {
        name: 'Intermedio Alto',
        description: 'Domina el subjuntivo, debate y comprende contenido complejo.',
        skills: ['Subjuntivo e indicativo', 'Textos académicos', 'Escritura formal', 'Comprensión auditiva avanzada'],
      },
      C1: {
        name: 'Avanzado',
        description: 'Comunícate con precisión en contextos profesionales y académicos.',
        skills: ['Lenguaje académico', 'Matices culturales', 'Expresión escrita avanzada', 'Análisis de textos literarios'],
      },
      C2: {
        name: 'Maestría',
        description: 'Dominio total del español. Nivel nativo.',
        skills: ['Literatura española', 'Expresión nativa', 'Registros formales e informales', 'Interpretación y traducción'],
      },
    },
  },
  fr: {
    pageTitle: 'Classe Virtuelle',
    pageSubtitle: 'Choisissez votre niveau et commencez à apprendre l\'espagnol pas à pas.',
    startButton: 'Commencer',
    lessonsAvailable: 'leçons disponibles',
    spanishOnly: 'Espagnol uniquement',
    levels: {
      A1: {
        name: 'Débutant',
        description: 'Vos premiers pas en espagnol. Apprenez l\'essentiel pour communiquer dès le premier jour.',
        skills: ['L\'alphabet et les sons', 'Salutations et présentations', 'Nombres, couleurs et vocabulaire de base', 'Pronoms et verbes ser, estar, tener'],
      },
      A2: {
        name: 'Élémentaire',
        description: 'Élargissez votre vocabulaire et commencez à avoir des conversations simples.',
        skills: ['Animaux, nature et directions', 'Lecture de textes courts', 'Vocabulaire du monde et pays', 'Vie quotidienne et expressions utiles'],
      },
      B1: {
        name: 'Intermedio',
        description: 'Conversa con mayor fluidez y entiende textos más complejos.',
        skills: ['Expresiones idiomáticas', 'Tiempos verbales pasados', 'Opiniones y debates', 'Lectura de noticias'],
      },
      B2: {
        name: 'Intermedio Alto',
        description: 'Domina el subjuntivo, debate y comprende contenido complejo.',
        skills: ['Subjuntivo e indicativo', 'Textos académicos', 'Escritura formal', 'Comprensión auditiva avanzada'],
      },
      C1: {
        name: 'Avanzado',
        description: 'Comunícate con precisión en contextos profesionales y académicos.',
        skills: ['Lenguaje académico', 'Matices culturales', 'Expresión escrita avanzada', 'Análisis de textos literarios'],
      },
      C2: {
        name: 'Maestría',
        description: 'Dominio total del español. Nivel nativo.',
        skills: ['Literatura española', 'Expresión nativa', 'Registros formales e informales', 'Interpretación y traducción'],
      },
    },
  },
};
