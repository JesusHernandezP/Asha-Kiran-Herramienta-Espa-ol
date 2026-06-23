/**
 * Glossary data organized by level → theme (vocabulary) and level → verb groups.
 * Vocabulary is sourced from existing lessons and enriched with thematic grouping.
 * Verbs include full conjugation tables.
 */
import type { Level } from './content';

export interface GlossaryWord {
  word: string;
  translations: Record<string, string>;
  emoji: string;
  imageUrl?: string;
  color?: string;
}

export interface GlossaryTheme {
  id: string;
  name: string;
  emoji: string;
  translations: Record<string, string>;
  words: GlossaryWord[];
}

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

export interface VerbGroup {
  id: string;
  name: string;
  emoji: string;
  translations: Record<string, string>;
  verbs: VerbEntry[];
}

// ============================================================
// VOCABULARY BY LEVEL
// ============================================================

const a1Themes: GlossaryTheme[] = [
  {
    id: 'abecedario',
    name: 'El Abecedario',
    emoji: '🔤',
    translations: { en: 'The Alphabet', ar: 'الأبجدية', uk: 'Алфавіт', fr: "L'Alphabet" },
    words: [
      { word: 'Avión', translations: { en: 'Airplane', ar: 'طائرة', uk: 'Літак', fr: 'Avion' }, emoji: '✈️', color: '#E2F3E7' },
      { word: 'Barco', translations: { en: 'Boat', ar: 'قارب', uk: 'Човен', fr: 'Bateau' }, emoji: '🚢', color: '#E2F3E7' },
      { word: 'Casa', translations: { en: 'House', ar: 'منزل', uk: 'Будинок', fr: 'Maison' }, emoji: '🏠', color: '#E3EEF9' },
      { word: 'Dedo', translations: { en: 'Finger', ar: 'إصبع', uk: 'Палець', fr: 'Doigt' }, emoji: '☝️', color: '#FCE8E8' },
      { word: 'Elefante', translations: { en: 'Elephant', ar: 'فيل', uk: 'Слон', fr: 'Éléphant' }, emoji: '🐘', color: '#E2F3E7' },
      { word: 'Fuego', translations: { en: 'Fire', ar: 'نار', uk: 'Вогонь', fr: 'Feu' }, emoji: '🔥', color: '#FFF4E5' },
      { word: 'Gato', translations: { en: 'Cat', ar: 'قطة', uk: 'Кіт', fr: 'Chat' }, emoji: '🐱', color: '#F3E8FF' },
      { word: 'Helado', translations: { en: 'Ice cream', ar: 'مثلجات', uk: 'Морозиво', fr: 'Glace' }, emoji: '🍦', color: '#FEFCBF' },
      { word: 'Isla', translations: { en: 'Island', ar: 'جزيرة', uk: 'Острів', fr: 'Île' }, emoji: '🏝️', color: '#E2F3E7' },
      { word: 'Luna', translations: { en: 'Moon', ar: 'قمر', uk: 'Місяць', fr: 'Lune' }, emoji: '🌙', color: '#F3E8FF' },
      { word: 'Manzana', translations: { en: 'Apple', ar: 'تفاحة', uk: 'Яблуко', fr: 'Pomme' }, emoji: '🍎', color: '#FCE8E8' },
      { word: 'Nube', translations: { en: 'Cloud', ar: 'سحابة', uk: 'Хмара', fr: 'Nuage' }, emoji: '☁️', color: '#E3EEF9' },
      { word: 'Sol', translations: { en: 'Sun', ar: 'شمس', uk: 'Сонце', fr: 'Soleil' }, emoji: '☀️', color: '#FEFCBF' },
      { word: 'Zapato', translations: { en: 'Shoe', ar: 'حذاء', uk: 'Взуття', fr: 'Chaussure' }, emoji: '👞', color: '#FFF4E5' },
    ],
  },
  {
    id: 'colores',
    name: 'Los Colores',
    emoji: '🎨',
    translations: { en: 'Colors', ar: 'الألوان', uk: 'Кольори', fr: 'Les Couleurs' },
    words: [
      {
        word: 'Rojo',
        translations: {
          en: 'Red',
          ar: 'أحمر',
          uk: 'Червоний',
          fr: 'Rouge'
        },
        emoji: '🍎',
        color: '#E53E3E'
      },
      {
        word: 'Azul',
        translations: {
          en: 'Blue',
          ar: 'أزرق',
          uk: 'Синій',
          fr: 'Bleu'
        },
        emoji: '💧',
        color: '#3182CE'
      },
      {
        word: 'Verde',
        translations: {
          en: 'Green',
          ar: 'أخضر',
          uk: 'Зелений',
          fr: 'Vert'
        },
        emoji: '🐸',
        color: '#38A169'
      },
      {
        word: 'Amarillo',
        translations: {
          en: 'Yellow',
          ar: 'أصفر',
          uk: 'Жовтий',
          fr: 'Jaune'
        },
        emoji: '☀️',
        color: '#ECC94B'
      },
      {
        word: 'Naranja',
        translations: {
          en: 'Orange',
          ar: 'برتقالي',
          uk: 'Помаранчевий',
          fr: 'Orange'
        },
        emoji: '🍊',
        color: '#DD6B20'
      },
      {
        word: 'Negro',
        translations: {
          en: 'Black',
          ar: 'أسود',
          uk: 'Чорний',
          fr: 'Noir'
        },
        emoji: '🎩',
        color: '#1A202C'
      },
      {
        word: 'Blanco',
        translations: {
          en: 'White',
          ar: 'أبيض',
          uk: 'Білий',
          fr: 'Blanc'
        },
        emoji: '⬜',
        color: '#F7FAFC'
      },
      {
        word: 'Rosa',
        translations: {
          en: 'Pink',
          ar: 'وردي',
          uk: 'Рожевий',
          fr: 'Rose'
        },
        emoji: '🌸',
        color: '#FBB6CE'
      },
      {
        word: 'Marrón',
        translations: {
          en: 'Brown',
          ar: 'بني',
          uk: 'Коричневий',
          fr: 'Marron'
        },
        emoji: '🟫',
        color: '#975A16'
      },
      {
        word: 'Gris',
        translations: {
          en: 'Gray',
          ar: 'رمادي',
          uk: 'Сірий',
          fr: 'Gris'
        },
        emoji: '🩶',
        color: '#A0AEC0'
      },
      {
        word: 'Violeta',
        translations: {
          en: 'Violet',
          ar: 'بنفسجي',
          uk: 'Фіолетовий',
          fr: 'Violet'
        },
        emoji: '🔮',
        color: '#805AD5'
      },
      {
        word: 'Celeste',
        translations: {
          en: 'Light Blue',
          ar: 'أزرق سماوي',
          uk: 'Блакитний',
          fr: 'Bleu ciel'
        },
        emoji: '🌤️',
        color: '#63B3ED'
      },
      {
        word: 'Turquesa',
        translations: {
          en: 'Turquoise',
          ar: 'فيروزي',
          uk: 'Бірюзовий',
          fr: 'Turquoise'
        },
        emoji: '💎',
        color: '#4FD1C5'
      },
      {
        word: 'Rosa claro',
        translations: {
          en: 'Light Pink',
          ar: 'وردي فاتح',
          uk: 'Світло-рожевий',
          fr: 'Rose clair'
        },
        emoji: '🌸',
        color: '#FFF5F5'
      },
      {
        word: 'Verde oscuro',
        translations: {
          en: 'Dark Green',
          ar: 'أخضر غامق',
          uk: 'Темно-зелений',
          fr: 'Vert foncé'
        },
        emoji: '🌲',
        color: '#22543D'
      },
      {
        word: 'Azul marino',
        translations: {
          en: 'Navy Blue',
          ar: 'أزرق داكن',
          uk: 'Темно-синій',
          fr: 'Bleu marine'
        },
        emoji: '⚓',
        color: '#1A365D'
      },
      {
        word: 'Dorado',
        translations: {
          en: 'Golden',
          ar: 'ذهبي',
          uk: 'Золотий',
          fr: 'Doré'
        },
        emoji: '👑',
        color: '#D69E2E'
      },
      {
        word: 'Plateado',
        translations: {
          en: 'Silver',
          ar: 'فضي',
          uk: 'Срібний',
          fr: 'Argenté'
        },
        emoji: '🪙',
        color: '#E2E8F0'
      },
      {
        word: 'Beige',
        translations: {
          en: 'Beige',
          ar: 'بيج',
          uk: 'Бежевий',
          fr: 'Beige'
        },
        emoji: '🌾',
        color: '#EDF2F7'
      },
      {
        word: 'Lila',
        translations: {
          en: 'Lilac',
          ar: 'ليلكي',
          uk: 'Бузковий',
          fr: 'Lilas'
        },
        emoji: '🪻',
        color: '#E9D8FD'
      },
      {
        word: 'Ocre',
        translations: {
          en: 'Ochre',
          ar: 'مغرة',
          uk: 'Охра',
          fr: 'Ocre'
        },
        emoji: '🍁',
        color: '#C05621'
      },
      {
        word: 'Castaño',
        translations: {
          en: 'Chestnut',
          ar: 'كستنائي',
          uk: 'Каштановий',
          fr: 'Châtain'
        },
        emoji: '🌰',
        color: '#744210'
      },
      {
        word: 'Esmeralda',
        translations: {
          en: 'Emerald',
          ar: 'زمردي',
          uk: 'Смарагдовий',
          fr: 'Émeraude'
        },
        emoji: '❇️',
        color: '#276749'
      },
      {
        word: 'Fucsia',
        translations: {
          en: 'Fuchsia',
          ar: 'فوشيا',
          uk: 'Фуксія',
          fr: 'Fuchsia'
        },
        emoji: '🌺',
        color: '#D53F8C'
      },
      {
        word: 'Ceniza',
        translations: {
          en: 'Ash',
          ar: 'رمادي رمادي',
          uk: 'Попелястий',
          fr: 'Cendré'
        },
        emoji: '💨',
        color: '#CBD5E0'
      },
      {
        word: 'Amarillo limón',
        translations: {
          en: 'Lemon Yellow',
          ar: 'أصفر ليموني',
          uk: 'Лимонно-жовтий',
          fr: 'Jaune citron'
        },
        emoji: '🍋',
        color: '#FEFCBF'
      },
      {
        word: 'Verde lima',
        translations: {
          en: 'Lime Green',
          ar: 'أخضر ليموني',
          uk: 'Салатовий',
          fr: 'Vert lime'
        },
        emoji: '🍈',
        color: '#C6F6D5'
      },
      {
        word: 'Salmón',
        translations: {
          en: 'Salmon',
          ar: 'سلموني',
          uk: 'Лососевий',
          fr: 'Saumon'
        },
        emoji: '🍣',
        color: '#FEB2B2'
      },
      {
        word: 'Morado',
        translations: {
          en: 'Purple',
          ar: 'أرجواني',
          uk: 'Пурпуровий',
          fr: 'Pourpre'
        },
        emoji: '🍇',
        color: '#6B46C1'
      },
      {
        word: 'Bronce',
        translations: {
          en: 'Bronze',
          ar: 'برونزي',
          uk: 'Бронзовий',
          fr: 'Bronze'
        },
        emoji: '🥉',
        color: '#B7791F'
      }
    ],
  },
  {
    id: 'cuerpo',
    name: 'El Cuerpo Humano',
    emoji: '🧍',
    translations: { en: 'The Human Body', ar: 'الجسم البشري', uk: 'Людське тіло', fr: 'Le Corps Humain' },
    words: [
      {
        word: 'La cabeza',
        translations: {
          en: 'Head',
          ar: 'الرأس',
          uk: 'Голова',
          fr: 'Tête'
        },
        emoji: '👧',
        color: '#EBF8FF'
      },
      {
        word: 'La mano',
        translations: {
          en: 'Hand',
          ar: 'اليد',
          uk: 'Рука',
          fr: 'Main'
        },
        emoji: '✋',
        color: '#EBF8FF'
      },
      {
        word: 'El pie',
        translations: {
          en: 'Foot',
          ar: 'القدم',
          uk: 'Нога',
          fr: 'Pied'
        },
        emoji: '🦶',
        color: '#EBF8FF'
      },
      {
        word: 'Los ojos',
        translations: {
          en: 'Eyes',
          ar: 'العينان',
          uk: 'Очі',
          fr: 'Yeux'
        },
        emoji: '👁️',
        color: '#EBF8FF'
      },
      {
        word: 'Las piernas',
        translations: {
          en: 'Legs',
          ar: 'الساقين',
          uk: 'Ноги',
          fr: 'Jambes'
        },
        emoji: '🦵',
        color: '#EBF8FF'
      },
      {
        word: 'El brazo',
        translations: {
          en: 'Arm',
          ar: 'الذراع',
          uk: 'Рука',
          fr: 'Bras'
        },
        emoji: '💪',
        color: '#EBF8FF'
      },
      {
        word: 'La boca',
        translations: {
          en: 'Mouth',
          ar: 'الفم',
          uk: 'Рот',
          fr: 'Bouche'
        },
        emoji: '👄',
        color: '#EBF8FF'
      },
      {
        word: 'La nariz',
        translations: {
          en: 'Nose',
          ar: 'الأنف',
          uk: 'Ніс',
          fr: 'Nez'
        },
        emoji: '👃',
        color: '#EBF8FF'
      },
      {
        word: 'Las orejas',
        translations: {
          en: 'Ears',
          ar: 'الأذنان',
          uk: 'Вуха',
          fr: 'Oreilles'
        },
        emoji: '👂',
        color: '#EBF8FF'
      },
      {
        word: 'El dedo',
        translations: {
          en: 'Finger',
          ar: 'إصبع',
          uk: 'Палець',
          fr: 'Doigt'
        },
        emoji: '☝️',
        color: '#EBF8FF'
      },
      {
        word: 'El cuello',
        translations: {
          en: 'Neck',
          ar: 'الرقبة',
          uk: 'Шия',
          fr: 'Cou'
        },
        emoji: '🦒',
        color: '#EBF8FF'
      },
      {
        word: 'El hombro',
        translations: {
          en: 'Shoulder',
          ar: 'الكتف',
          uk: 'Плече',
          fr: 'Épaule'
        },
        emoji: '💪',
        color: '#EBF8FF'
      },
      {
        word: 'El codo',
        translations: {
          en: 'Elbow',
          ar: 'المرفق',
          uk: 'Лікоть',
          fr: 'Coude'
        },
        emoji: '💪',
        color: '#EBF8FF'
      },
      {
        word: 'La muñeca',
        translations: {
          en: 'Wrist',
          ar: 'المعصم',
          uk: 'Зап\'ястя',
          fr: 'Poignet'
        },
        emoji: '⌚',
        color: '#EBF8FF'
      },
      {
        word: 'El pecho',
        translations: {
          en: 'Chest',
          ar: 'الصدر',
          uk: 'Груди',
          fr: 'Poitrine'
        },
        emoji: '🧍',
        color: '#EBF8FF'
      },
      {
        word: 'La espalda',
        translations: {
          en: 'Back',
          ar: 'الظهر',
          uk: 'Спина',
          fr: 'Dos'
        },
        emoji: '🧍',
        color: '#EBF8FF'
      },
      {
        word: 'El estómago',
        translations: {
          en: 'Stomach',
          ar: 'المعدة',
          uk: 'Живіт',
          fr: 'Estomac'
        },
        emoji: '🤰',
        color: '#EBF8FF'
      },
      {
        word: 'La cintura',
        translations: {
          en: 'Waist',
          ar: 'الخصر',
          uk: 'Талія',
          fr: 'Taille'
        },
        emoji: '🧍',
        color: '#EBF8FF'
      },
      {
        word: 'La rodilla',
        translations: {
          en: 'Knee',
          ar: 'الركبة',
          uk: 'Коліно',
          fr: 'Genou'
        },
        emoji: '🦵',
        color: '#EBF8FF'
      },
      {
        word: 'El tobillo',
        translations: {
          en: 'Ankle',
          ar: 'الكاحل',
          uk: 'Кісточка',
          fr: 'Cheville'
        },
        emoji: '🦶',
        color: '#EBF8FF'
      },
      {
        word: 'El pelo',
        translations: {
          en: 'Hair',
          ar: 'الشعر',
          uk: 'Волосся',
          fr: 'Cheveux'
        },
        emoji: '💇',
        color: '#EBF8FF'
      },
      {
        word: 'La cara',
        translations: {
          en: 'Face',
          ar: 'الوجه',
          uk: 'Обличчя',
          fr: 'Visage'
        },
        emoji: '😊',
        color: '#EBF8FF'
      },
      {
        word: 'La frente',
        translations: {
          en: 'Forehead',
          ar: 'الجبهة',
          uk: 'Лоб',
          fr: 'Front'
        },
        emoji: '😊',
        color: '#EBF8FF'
      },
      {
        word: 'Las mejillas',
        translations: {
          en: 'Cheeks',
          ar: 'الخدود',
          uk: 'Щоки',
          fr: 'Joues'
        },
        emoji: '😊',
        color: '#EBF8FF'
      },
      {
        word: 'La barbilla',
        translations: {
          en: 'Chin',
          ar: 'الذقن',
          uk: 'Підборіддя',
          fr: 'Menton'
        },
        emoji: '😊',
        color: '#EBF8FF'
      },
      {
        word: 'Los dientes',
        translations: {
          en: 'Teeth',
          ar: 'الأسنان',
          uk: 'Зуби',
          fr: 'Dents'
        },
        emoji: '🦷',
        color: '#EBF8FF'
      },
      {
        word: 'La lengua',
        translations: {
          en: 'Tongue',
          ar: 'اللسان',
          uk: 'Язик',
          fr: 'Langue'
        },
        emoji: '👅',
        color: '#EBF8FF'
      },
      {
        word: 'Los labios',
        translations: {
          en: 'Lips',
          ar: 'الشفاه',
          uk: 'Губи',
          fr: 'Lèvres'
        },
        emoji: '👄',
        color: '#EBF8FF'
      },
      {
        word: 'El corazón',
        translations: {
          en: 'Heart',
          ar: 'القلب',
          uk: 'Серце',
          fr: 'Cœur'
        },
        emoji: '❤️',
        color: '#EBF8FF'
      },
      {
        word: 'La piel',
        translations: {
          en: 'Skin',
          ar: 'الجلد',
          uk: 'Шкіра',
          fr: 'Peau'
        },
        emoji: '🖐️',
        color: '#EBF8FF'
      }
    ],
  },
  {
    id: 'numeros',
    name: 'Los Números',
    emoji: '🔢',
    translations: { en: 'Numbers', ar: 'الأرقام', uk: 'Числа', fr: 'Les Nombres' },
    words: [
      {
        word: 'Uno (1)',
        translations: {
          en: 'One',
          ar: 'واحد',
          uk: 'Один',
          fr: 'Un'
        },
        emoji: '1️⃣',
        color: '#EBF8FF'
      },
      {
        word: 'Dos (2)',
        translations: {
          en: 'Two',
          ar: 'إثنان',
          uk: 'Два',
          fr: 'Deux'
        },
        emoji: '2️⃣',
        color: '#EBF8FF'
      },
      {
        word: 'Tres (3)',
        translations: {
          en: 'Three',
          ar: 'ثلاثة',
          uk: 'Три',
          fr: 'Trois'
        },
        emoji: '3️⃣',
        color: '#EBF8FF'
      },
      {
        word: 'Cuatro (4)',
        translations: {
          en: 'Four',
          ar: 'أربعة',
          uk: 'Чотири',
          fr: 'Quatre'
        },
        emoji: '4️⃣',
        color: '#EBF8FF'
      },
      {
        word: 'Cinco (5)',
        translations: {
          en: 'Five',
          ar: 'خمسة',
          uk: 'П\'ять',
          fr: 'Cinq'
        },
        emoji: '5️⃣',
        color: '#EBF8FF'
      },
      {
        word: 'Seis (6)',
        translations: {
          en: 'Six',
          ar: 'ستة',
          uk: 'Шість',
          fr: 'Six'
        },
        emoji: '6️⃣',
        color: '#EBF8FF'
      },
      {
        word: 'Siete (7)',
        translations: {
          en: 'Seven',
          ar: 'سبعة',
          uk: 'Сім',
          fr: 'Sept'
        },
        emoji: '7️⃣',
        color: '#EBF8FF'
      },
      {
        word: 'Ocho (8)',
        translations: {
          en: 'Eight',
          ar: 'ثمانية',
          uk: 'Вісім',
          fr: 'Huit'
        },
        emoji: '8️⃣',
        color: '#EBF8FF'
      },
      {
        word: 'Nueve (9)',
        translations: {
          en: 'Nine',
          ar: 'تسعة',
          uk: 'Дев\'ять',
          fr: 'Neuf'
        },
        emoji: '9️⃣',
        color: '#EBF8FF'
      },
      {
        word: 'Diez (10)',
        translations: {
          en: 'Ten',
          ar: 'عشرة',
          uk: 'Десять',
          fr: 'Dix'
        },
        emoji: '🔟',
        color: '#EBF8FF'
      },
      {
        word: 'Once (11)',
        translations: {
          en: 'Eleven',
          ar: 'أحد عشر',
          uk: 'Одинадцять',
          fr: 'Onze'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Doce (12)',
        translations: {
          en: 'Twelve',
          ar: 'اثنا عشر',
          uk: 'Дванадцять',
          fr: 'Douze'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Trece (13)',
        translations: {
          en: 'Thirteen',
          ar: 'ثلاثة عشر',
          uk: 'Тринадцять',
          fr: 'Treize'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Catorce (14)',
        translations: {
          en: 'Fourteen',
          ar: 'أربعة عشر',
          uk: 'Чотирнадцять',
          fr: 'Quatorze'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Quince (15)',
        translations: {
          en: 'Fifteen',
          ar: 'خمسة عشر',
          uk: 'П\'ятнадцять',
          fr: 'Quinze'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Dieciséis (16)',
        translations: {
          en: 'Sixteen',
          ar: 'ستة javaعشر',
          uk: 'Шістнадцять',
          fr: 'Seize'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Diecisiete (17)',
        translations: {
          en: 'Seventeen',
          ar: 'سبعة عشر',
          uk: 'Сімнадцять',
          fr: 'Dix-sept'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Dieciocho (18)',
        translations: {
          en: 'Eighteen',
          ar: 'ثمانية عشر',
          uk: 'Вісімнадцять',
          fr: 'Dix-huit'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Diecinueve (19)',
        translations: {
          en: 'Nineteen',
          ar: 'تسعة عشر',
          uk: 'Дев\'ятнадцять',
          fr: 'Dix-neuf'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Veinte (20)',
        translations: {
          en: 'Twenty',
          ar: 'عشرون',
          uk: 'Двадцять',
          fr: 'Vingt'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Veintiuno (21)',
        translations: {
          en: 'Twenty-one',
          ar: 'واحد وعشرون',
          uk: 'Двадцять один',
          fr: 'Vingt et un'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Veintidós (22)',
        translations: {
          en: 'Twenty-two',
          ar: 'اثنان وعشرون',
          uk: 'Двадцять два',
          fr: 'Vingt-deux'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Veintitrés (23)',
        translations: {
          en: 'Twenty-three',
          ar: 'ثلاثة وعشرون',
          uk: 'Двадцять три',
          fr: 'Vingt-trois'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Veinticuatro (24)',
        translations: {
          en: 'Twenty-four',
          ar: 'أربعة وعشرon',
          uk: 'Двадцять чотири',
          fr: 'Vingt-quatre'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Veinticinco (25)',
        translations: {
          en: 'Twenty-five',
          ar: 'خمسة وعشرون',
          uk: 'Двадцять п\'ять',
          fr: 'Vingt-cinq'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Veintiséis (26)',
        translations: {
          en: 'Twenty-six',
          ar: 'ستة وعشرون',
          uk: 'Двадцять шість',
          fr: 'Vingt-six'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Veintisiete (27)',
        translations: {
          en: 'Twenty-seven',
          ar: 'سبعة وعشرون',
          uk: 'Двадцять сім',
          fr: 'Vingt-sept'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Veintiocho (28)',
        translations: {
          en: 'Twenty-eight',
          ar: 'ثمانية وعشرون',
          uk: 'Двадцять вісім',
          fr: 'Vingt-huit'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Veintinueve (29)',
        translations: {
          en: 'Twenty-nine',
          ar: 'تسعة وعشرون',
          uk: 'Двадцять дев\'ять',
          fr: 'Vingt-neuf'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      },
      {
        word: 'Treinta (30)',
        translations: {
          en: 'Thirty',
          ar: 'ثلاثون',
          uk: 'Тридцять',
          fr: 'Trente'
        },
        emoji: '🔢',
        color: '#EBF8FF'
      }
    ],
  },
  {
    id: 'ropa',
    name: 'La Ropa',
    emoji: '👕',
    translations: { en: 'Clothing', ar: 'الملابس', uk: 'Одяг', fr: 'Les Vêtements' },
    words: [
      {
        word: 'La camiseta',
        translations: {
          en: 'T-Shirt',
          ar: 'قميص',
          uk: 'Футболка',
          fr: 'T-shirt'
        },
        emoji: '👕',
        color: '#EDF2F7'
      },
      {
        word: 'El pantalón',
        translations: {
          en: 'Pants',
          ar: 'سروال',
          uk: 'Штани',
          fr: 'Pantalon'
        },
        emoji: '👖',
        color: '#EDF2F7'
      },
      {
        word: 'Los zapatos',
        translations: {
          en: 'Shoes',
          ar: 'حذاء',
          uk: 'Взуття',
          fr: 'Chaussures'
        },
        emoji: '👟',
        color: '#EDF2F7'
      },
      {
        word: 'La chaqueta',
        translations: {
          en: 'Jacket',
          ar: 'سترة',
          uk: 'Куртка',
          fr: 'Veste'
        },
        emoji: '🧥',
        color: '#EDF2F7'
      },
      {
        word: 'La falda',
        translations: {
          en: 'Skirt',
          ar: 'تنورة',
          uk: 'Спідниця',
          fr: 'Jupe'
        },
        emoji: '👗',
        color: '#EDF2F7'
      },
      {
        word: 'El abrigo',
        translations: {
          en: 'Coat',
          ar: 'معطف',
          uk: 'Пальто',
          fr: 'Manteau'
        },
        emoji: '🧥',
        color: '#EDF2F7'
      },
      {
        word: 'El vestido',
        translations: {
          en: 'Dress',
          ar: 'فستان',
          uk: 'Сукня',
          fr: 'Robe'
        },
        emoji: '👗',
        color: '#EDF2F7'
      },
      {
        word: 'La camisa',
        translations: {
          en: 'Shirt',
          ar: 'قميص رجالي',
          uk: 'Сорочка',
          fr: 'Chemise'
        },
        emoji: '👔',
        color: '#EDF2F7'
      },
      {
        word: 'El calcetín',
        translations: {
          en: 'Sock',
          ar: 'جورب',
          uk: 'Шкарпетка',
          fr: 'Chaussette'
        },
        emoji: '🧦',
        color: '#EDF2F7'
      },
      {
        word: 'La bufanda',
        translations: {
          en: 'Scarf',
          ar: 'وشاح',
          uk: 'Шарф',
          fr: 'Écharpe'
        },
        emoji: '🧣',
        color: '#EDF2F7'
      },
      {
        word: 'El sombrero',
        translations: {
          en: 'Hat',
          ar: 'قبعة',
          uk: 'Капелюх',
          fr: 'Chapeau'
        },
        emoji: '🎩',
        color: '#EDF2F7'
      },
      {
        word: 'Los guantes',
        translations: {
          en: 'Gloves',
          ar: 'قفازات',
          uk: 'Рукавички',
          fr: 'Gants'
        },
        emoji: '🧤',
        color: '#EDF2F7'
      },
      {
        word: 'El cinturón',
        translations: {
          en: 'Belt',
          ar: 'حزام',
          uk: 'Ремінь',
          fr: 'Ceinture'
        },
        emoji: '🎿',
        color: '#EDF2F7'
      },
      {
        word: 'La corbata',
        translations: {
          en: 'Tie',
          ar: 'ربطة عنق',
          uk: 'Краватка',
          fr: 'Cravate'
        },
        emoji: '👔',
        color: '#EDF2F7'
      },
      {
        word: 'Las sandalias',
        translations: {
          en: 'Sandals',
          ar: 'صندل',
          uk: 'Сандалії',
          fr: 'Sandales'
        },
        emoji: '🩴',
        color: '#EDF2F7'
      },
      {
        word: 'Las botas',
        translations: {
          en: 'Boots',
          ar: 'أحذية طويلة',
          uk: 'Чоботи',
          fr: 'Bottes'
        },
        emoji: '🥾',
        color: '#EDF2F7'
      },
      {
        word: 'La gorra',
        translations: {
          en: 'Cap',
          ar: 'قبعة رياضية',
          uk: 'Кепка',
          fr: 'Casquette'
        },
        emoji: '🧢',
        color: '#EDF2F7'
      },
      {
        word: 'El pijama',
        translations: {
          en: 'Pajamas',
          ar: 'ملابس النوم',
          uk: 'Піжама',
          fr: 'Pyjama'
        },
        emoji: '🛌',
        color: '#EDF2F7'
      },
      {
        word: 'El bañador',
        translations: {
          en: 'Swimsuit',
          ar: 'ملابس السباحة',
          uk: 'Купальник',
          fr: 'Maillot de bain'
        },
        emoji: '🩱',
        color: '#EDF2F7'
      },
      {
        word: 'Las gafas',
        translations: {
          en: 'Glasses',
          ar: 'نظارات',
          uk: 'Окуляри',
          fr: 'Lunettes'
        },
        emoji: '👓',
        color: '#EDF2F7'
      },
      {
        word: 'El paraguas',
        translations: {
          en: 'Umbrella',
          ar: 'مظلة',
          uk: 'Парасолька',
          fr: 'Parapluie'
        },
        emoji: '☂️',
        color: '#EDF2F7'
      },
      {
        word: 'El bolso',
        translations: {
          en: 'Handbag',
          ar: 'حقيبة يد',
          uk: 'Сумка',
          fr: 'Sac à main'
        },
        emoji: '👜',
        color: '#EDF2F7'
      },
      {
        word: 'La sudadera',
        translations: {
          en: 'Hoodie / Sweatshirt',
          ar: 'سترة رياضية',
          uk: 'Толстовка',
          fr: 'Sweat à capuche'
        },
        emoji: '🧥',
        color: '#EDF2F7'
      },
      {
        word: 'El chaleco',
        translations: {
          en: 'Vest',
          ar: 'سترة بدون أكمام',
          uk: 'Жилет',
          fr: 'Gilet'
        },
        emoji: '🦺',
        color: '#EDF2F7'
      },
      {
        word: 'Los pantalones cortos',
        translations: {
          en: 'Shorts',
          ar: 'سروal قصير',
          uk: 'Шорти',
          fr: 'Short'
        },
        emoji: '🩳',
        color: '#EDF2F7'
      },
      {
        word: 'La ropa interior',
        translations: {
          en: 'Underwear',
          ar: 'ملابس داخلية',
          uk: 'Нижня білизна',
          fr: 'Sous-vêtements'
        },
        emoji: '🩲',
        color: '#EDF2F7'
      },
      {
        word: 'El traje',
        translations: {
          en: 'Suit',
          ar: 'بدلة',
          uk: 'Костім',
          fr: 'Costume'
        },
        emoji: '🕴️',
        color: '#EDF2F7'
      },
      {
        word: 'El impermeable',
        translations: {
          en: 'Raincoat',
          ar: 'معطف واق من المطر',
          uk: 'Дощовик',
          fr: 'Imperméable'
        },
        emoji: '🧥',
        color: '#EDF2F7'
      },
      {
        word: 'La bata',
        translations: {
          en: 'Robe',
          ar: 'رداء الحمام',
          uk: 'Халат',
          fr: 'Peignoir'
        },
        emoji: '🧥',
        color: '#EDF2F7'
      },
      {
        word: 'Los pendientes',
        translations: {
          en: 'Earrings',
          ar: 'أقراط',
          uk: 'Сережки',
          fr: 'Boucles d\'oreilles'
        },
        emoji: '💎',
        color: '#EDF2F7'
      }
    ],
  },
  {
    id: 'saludos',
    name: 'Saludos y Presentaciones',
    emoji: '👋',
    translations: { en: 'Greetings', ar: 'التحيات', uk: 'Привітання', fr: 'Salutations' },
    words: [
      {
        word: 'Hola',
        translations: {
          en: 'Hello',
          ar: 'مرحباً',
          uk: 'Привіт',
          fr: 'Bonjour'
        },
        emoji: '👋',
        color: '#FFF5F5'
      },
      {
        word: '¿Cómo estás?',
        translations: {
          en: 'How are you?',
          ar: 'كيف حالك؟',
          uk: 'Як справи?',
          fr: 'Comment vas-tu ?'
        },
        emoji: '🤔',
        color: '#EBF8FF'
      },
      {
        word: 'Estoy bien',
        translations: {
          en: 'I\'m fine',
          ar: 'أنا بخير',
          uk: 'Я в порядку',
          fr: 'Je vais bien'
        },
        emoji: '😊',
        color: '#E2F3E7'
      },
      {
        word: 'Buenos días',
        translations: {
          en: 'Good morning',
          ar: 'صباح الخير',
          uk: 'Доброго ранку',
          fr: 'Bonjour'
        },
        emoji: '🌅',
        color: '#FFF4E5'
      },
      {
        word: 'Buenas tardes',
        translations: {
          en: 'Good afternoon',
          ar: 'مساء الخير',
          uk: 'Доброго дня',
          fr: 'Bon après-midi'
        },
        emoji: '☀️',
        color: '#FFF4E5'
      },
      {
        word: 'Buenas noches',
        translations: {
          en: 'Good night',
          ar: 'تصبح على خير',
          uk: 'Доброї ночі',
          fr: 'Bonsoir'
        },
        emoji: '🌙',
        color: '#F3E8FF'
      },
      {
        word: 'Adiós',
        translations: {
          en: 'Goodbye',
          ar: 'وداعاً',
          uk: 'До побачення',
          fr: 'Au revoir'
        },
        emoji: '👋',
        color: '#FCE8E8'
      },
      {
        word: 'Por favor',
        translations: {
          en: 'Please',
          ar: 'من فضلك',
          uk: 'Будь ласка',
          fr: 'S\'il vous plaît'
        },
        emoji: '🙏',
        color: '#E2F3E7'
      },
      {
        word: 'Gracias',
        translations: {
          en: 'Thank you',
          ar: 'شكراً',
          uk: 'Дякую',
          fr: 'Merci'
        },
        emoji: '🙏',
        color: '#E2F3E7'
      },
      {
        word: '¿Qué tal?',
        translations: {
          en: 'What\'s up?',
          ar: 'ما الأخبار؟',
          uk: 'Як воно?',
          fr: 'Quoi de neuf ?'
        },
        emoji: '🙌',
        color: '#EBF8FF'
      },
      {
        word: 'Hasta luego',
        translations: {
          en: 'See you later',
          ar: 'أراك لاحقاً',
          uk: 'До зустрічі',
          fr: 'À plus tard'
        },
        emoji: '👋',
        color: '#FCE8E8'
      },
      {
        word: 'Hasta pronto',
        translations: {
          en: 'See you soon',
          ar: 'أراك قريباً',
          uk: 'До швидкого',
          fr: 'À bientôt'
        },
        emoji: '👋',
        color: '#FCE8E8'
      },
      {
        word: 'Hasta mañana',
        translations: {
          en: 'See you tomorrow',
          ar: 'أراك غداً',
          uk: 'До завтра',
          fr: 'À demain'
        },
        emoji: '👋',
        color: '#FCE8E8'
      },
      {
        word: 'Mucho gusto',
        translations: {
          en: 'Nice to meet you',
          ar: 'سررت بلقائك',
          uk: 'Приємно познайомитись',
          fr: 'Ravi de vous rencontrer'
        },
        emoji: '🤝',
        color: '#E2F3E7'
      },
      {
        word: 'Bienvenido / Bienvenida',
        translations: {
          en: 'Welcome',
          ar: 'مرحباً بك',
          uk: 'Ласкаво просимо',
          fr: 'Bienvenue'
        },
        emoji: '🤗',
        color: '#E2F3E7'
      },
      {
        word: 'De nada',
        translations: {
          en: 'You\'re welcome',
          ar: 'على الرحب والسعة',
          uk: 'Нема за що',
          fr: 'De rien'
        },
        emoji: '🤗',
        color: '#E2F3E7'
      },
      {
        word: 'Lo siento',
        translations: {
          en: 'I\'m sorry',
          ar: 'أنا آسف',
          uk: 'Вибачте',
          fr: 'Désolé'
        },
        emoji: '😢',
        color: '#FCE8E8'
      },
      {
        word: 'Disculpe / Perdón',
        translations: {
          en: 'Excuse me / Sorry',
          ar: 'المعذرة',
          uk: 'Перепрошую',
          fr: 'Excusez-moi'
        },
        emoji: '🙇',
        color: '#FCE8E8'
      },
      {
        word: '¿Cómo te llamas?',
        translations: {
          en: 'What\'s your name?',
          ar: 'ما اسمك؟',
          uk: 'Як тебе звати?',
          fr: 'Comment t\'appelles-tu ?'
        },
        emoji: '❓',
        color: '#EBF8FF'
      },
      {
        word: 'Me llamo...',
        translations: {
          en: 'My name is...',
          ar: 'اسمي...',
          uk: 'Мене звати...',
          fr: 'Je m\'appelle...'
        },
        emoji: '✍️',
        color: '#E3EEF9'
      },
      {
        word: '¿De dónde eres?',
        translations: {
          en: 'Where are you from?',
          ar: 'من أين أنت؟',
          uk: 'Звідки ти?',
          fr: 'D\'où viens-tu ?'
        },
        emoji: '❓',
        color: '#EBF8FF'
      },
      {
        word: 'Soy de...',
        translations: {
          en: 'I am from...',
          ar: 'أنا من...',
          uk: 'Я з...',
          fr: 'Je suis de...'
        },
        emoji: '🌍',
        color: '#E3EEF9'
      },
      {
        word: '¿Cuántos años tienes?',
        translations: {
          en: 'How old are you?',
          ar: 'كم عمرك؟',
          uk: 'Скільки тобі років?',
          fr: 'Quel âge as-tu ?'
        },
        emoji: '❓',
        color: '#EBF8FF'
      },
      {
        word: 'Tengo ... años',
        translations: {
          en: 'I am ... years old',
          ar: 'عمري ... سنة',
          uk: 'Мені ... років',
          fr: 'J\'ai ... ans'
        },
        emoji: '🔢',
        color: '#E3EEF9'
      },
      {
        word: '¿Dónde vives?',
        translations: {
          en: 'Where do you live?',
          ar: 'أين تعيش؟',
          uk: 'Де ти живеш?',
          fr: 'Où habites-tu ?'
        },
        emoji: '❓',
        color: '#EBF8FF'
      },
      {
        word: 'Vivo en...',
        translations: {
          en: 'I live in...',
          ar: 'أعيش في...',
          uk: 'Я живу в...',
          fr: 'J\'habite à...'
        },
        emoji: '🏠',
        color: '#E3EEF9'
      },
      {
        word: 'Mucho gusto / Encantado',
        translations: {
          en: 'Pleased to meet you',
          ar: 'تشرفنا',
          uk: 'Радий знайомству',
          fr: 'Enchanté'
        },
        emoji: '🤝',
        color: '#E2F3E7'
      },
      {
        word: 'Igualmente',
        translations: {
          en: 'Likewise',
          ar: 'والمثل',
          uk: 'Взаємно',
          fr: 'De même'
        },
        emoji: '🤝',
        color: '#E2F3E7'
      },
      {
        word: 'Cuídate',
        translations: {
          en: 'Take care',
          ar: 'اعتني بنفسك',
          uk: 'Бережи себе',
          fr: 'Prends soin de toi'
        },
        emoji: '🤗',
        color: '#E2F3E7'
      },
      {
        word: '¡Que tengas un buen día!',
        translations: {
          en: 'Have a nice day!',
          ar: 'أتمنى لك يوماً سعيداً!',
          uk: 'Гарного дня!',
          fr: 'Bonne journée !'
        },
        emoji: '☀️',
        color: '#FFF4E5'
      }
    ],
  },
  {
    id: 'nacionalidades',
    name: 'Países y Nacionalidades',
    emoji: '🌍',
    translations: { en: 'Countries & Nationalities', ar: 'البلدان والجنسيات', uk: 'Країни та національності', fr: 'Pays et Nationalités' },
    words: [
      {
        word: 'España / español',
        translations: {
          en: 'Spain / Spanish',
          ar: 'إسبانيا / إسباني',
          uk: 'Іспанія / іспанець',
          fr: 'Espagne / espagnol'
        },
        emoji: '🇪🇸',
        color: '#FFF5F5'
      },
      {
        word: 'Marruecos / marroquí',
        translations: {
          en: 'Morocco / Moroccan',
          ar: 'المغرب / مغربي',
          uk: 'Марокко / марокканець',
          fr: 'Maroc / marocain'
        },
        emoji: '🇲🇦',
        color: '#FCE8E8'
      },
      {
        word: 'Francia / francés',
        translations: {
          en: 'France / French',
          ar: 'فرنسا / فرنسي',
          uk: 'Франція / француз',
          fr: 'France / français'
        },
        emoji: '🇫🇷',
        color: '#E3EEF9'
      },
      {
        word: 'Senegal / senegalés',
        translations: {
          en: 'Senegal / Senegalese',
          ar: 'السنغال / سنغالي',
          uk: 'Сенегал / сенегалець',
          fr: 'Sénégal / sénégalais'
        },
        emoji: '🇸🇳',
        color: '#E2F3E7'
      },
      {
        word: 'Inglaterra / inglés',
        translations: {
          en: 'England / English',
          ar: 'إنجلترا / إنجليزي',
          uk: 'Англія / англієць',
          fr: 'Angleterre / anglais'
        },
        emoji: '🇬🇧',
        color: '#EBF8FF'
      },
      {
        word: 'Alemania / alemán',
        translations: {
          en: 'Germany / German',
          ar: 'ألمانيا / ألماني',
          uk: 'Німеччина / німець',
          fr: 'Allemagne / allemand'
        },
        emoji: '🇩🇪',
        color: '#FFF4E5'
      },
      {
        word: 'Italia / italiano',
        translations: {
          en: 'Italy / Italian',
          ar: 'إيطاليا / إيطالي',
          uk: 'Італія / італієць',
          fr: 'Italie / italien'
        },
        emoji: '🇮🇹',
        color: '#E2F3E7'
      },
      {
        word: 'Portugal / portugués',
        translations: {
          en: 'Portugal / Portuguese',
          ar: 'البرتغال / برتغالي',
          uk: 'Португалія / португалець',
          fr: 'Portugal / portugais'
        },
        emoji: '🇵🇹',
        color: '#EBF8FF'
      },
      {
        word: 'Rumanía / rumano',
        translations: {
          en: 'Romania / Romanian',
          ar: 'رومانيا / روماني',
          uk: 'Румунія / румун',
          fr: 'Roumanie / roumain'
        },
        emoji: '🇷🇴',
        color: '#FFF5F5'
      },
      {
        word: 'Ucrania / ucraniano',
        translations: {
          en: 'Ukraine / Ukrainian',
          ar: 'أوكرانيا / أوكراني',
          uk: 'Україна / українець',
          fr: 'Ukraine / ukrainien'
        },
        emoji: '🇺🇦',
        color: '#EBF8FF'
      },
      {
        word: 'China / chino',
        translations: {
          en: 'China / Chinese',
          ar: 'الصين / صيني',
          uk: 'Китай / китаєць',
          fr: 'Chine / chinois'
        },
        emoji: '🇨🇳',
        color: '#FFF5F5'
      },
      {
        word: 'Japón / japonés',
        translations: {
          en: 'Japan / Japanese',
          ar: 'اليابان / ياباني',
          uk: 'Японія / японець',
          fr: 'Japon / japonais'
        },
        emoji: '🇯🇵',
        color: '#FFF5F5'
      },
      {
        word: 'India / indio',
        translations: {
          en: 'India / Indian',
          ar: 'الهند / هندي',
          uk: 'Індія / індієць',
          fr: 'Inde / indien'
        },
        emoji: '🇮🇳',
        color: '#FEFCBF'
      },
      {
        word: 'Estados Unidos / estadounidense',
        translations: {
          en: 'USA / American',
          ar: 'الولايات المتحدة / أمريكي',
          uk: 'США / американець',
          fr: 'États-Unis / américain'
        },
        emoji: '🇺🇸',
        color: '#E3EEF9'
      },
      {
        word: 'México / mexicano',
        translations: {
          en: 'Mexico / Mexican',
          ar: 'المكسيك / مكسيكي',
          uk: 'Мексика / мексиканець',
          fr: 'Mexique / mexicain'
        },
        emoji: '🇲🇽',
        color: '#E2F3E7'
      },
      {
        word: 'Colombia / colombiano',
        translations: {
          en: 'Colombia / Colombian',
          ar: 'كولومبيا / كولومبي',
          uk: 'Колумбія / колумбієць',
          fr: 'Colombie / colombien'
        },
        emoji: '🇨🇴',
        color: '#FFF4E5'
      },
      {
        word: 'Argentina / argentino',
        translations: {
          en: 'Argentina / Argentine',
          ar: 'الأرجنتين / أرجنتيني',
          uk: 'Аргентина / аргентинець',
          fr: 'Argentine / argentin'
        },
        emoji: '🇦🇷',
        color: '#E3EEF9'
      },
      {
        word: 'Brasil / brasileño',
        translations: {
          en: 'Brazil / Brazilian',
          ar: 'البرازيل / برازيلي',
          uk: 'Бразилія / бразилець',
          fr: 'Brésil / brésilien'
        },
        emoji: '🇧🇷',
        color: '#E2F3E7'
      },
      {
        word: 'Nigeria / nigeriano',
        translations: {
          en: 'Nigeria / Nigerian',
          ar: 'نيجيريا / نيجيري',
          uk: 'Нігерія / нігерієць',
          fr: 'Nigeria / nigérian'
        },
        emoji: '🇳🇬',
        color: '#E2F3E7'
      },
      {
        word: 'Egipto / egipcio',
        translations: {
          en: 'Egypt / Egyptian',
          ar: 'مصر / مصري',
          uk: 'Єгипет / єгиптянин',
          fr: 'Égypte / égyptien'
        },
        emoji: '🇪🇬',
        color: '#FFF4E5'
      },
      {
        word: 'Rusia / ruso',
        translations: {
          en: 'Russia / Russian',
          ar: 'روسيا / روسي',
          uk: 'Росія / росіянин',
          fr: 'Russie / russe'
        },
        emoji: '🇷🇺',
        color: '#E3EEF9'
      },
      {
        word: 'Pakistán / pakistaní',
        translations: {
          en: 'Pakistan / Pakistani',
          ar: 'باكستان / باكستاني',
          uk: 'Пакистан / пакистанець',
          fr: 'Pakistan / pakistanais'
        },
        emoji: '🇵🇰',
        color: '#E2F3E7'
      },
      {
        word: 'Mali / maliense',
        translations: {
          en: 'Mali / Malian',
          ar: 'مالي / مالي',
          uk: 'Малі / малієць',
          fr: 'Mali / malien'
        },
        emoji: '🇲🇱',
        color: '#FFF4E5'
      },
      {
        word: 'Argelia / argelino',
        translations: {
          en: 'Algeria / Algerian',
          ar: 'الجزائر / جزائري',
          uk: 'Алжир / алжирець',
          fr: 'Algérie / algérien'
        },
        emoji: '🇩🇿',
        color: '#E2F3E7'
      },
      {
        word: 'Rumanía / rumano',
        translations: {
          en: 'Romania / Romanian',
          ar: 'رومانيا / روماني',
          uk: 'Румунія / румун',
          fr: 'Roumanie / roumain'
        },
        emoji: '🇷🇴',
        color: '#FFF5F5'
      },
      {
        word: 'Venezuela / venezolano',
        translations: {
          en: 'Venezuela / Venezuelan',
          ar: 'فنزويلا / فنزويلي',
          uk: 'Венесуела / венесуелець',
          fr: 'Venezuela / vénézuélien'
        },
        emoji: '🇻🇪',
        color: '#FFF4E5'
      },
      {
        word: 'Ecuador / ecuatoriano',
        translations: {
          en: 'Ecuador / Ecuadorian',
          ar: 'الإكوادور / إكوادوري',
          uk: 'Еквадор / еквадорець',
          fr: 'Équateur / équatorien'
        },
        emoji: '🇪🇨',
        color: '#FEFCBF'
      },
      {
        word: 'Perú / peruano',
        translations: {
          en: 'Peru / Peruvian',
          ar: 'بيرو / بيروفي',
          uk: 'Перу / перуанець',
          fr: 'Pérou / péruvien'
        },
        emoji: '🇵🇪',
        color: '#FFF4E5'
      },
      {
        word: 'Canadá / canadiense',
        translations: {
          en: 'Canada / Canadian',
          ar: 'كندا / كندي',
          uk: 'Канада / канадець',
          fr: 'Canada / canadien'
        },
        emoji: '🇨🇦',
        color: '#EBF8FF'
      },
      {
        word: 'Australia / australiano',
        translations: {
          en: 'Australia / Australian',
          ar: 'أستراليا / أسترالي',
          uk: 'Австралія / австралієць',
          fr: 'Australie / australien'
        },
        emoji: '🇦🇺',
        color: '#EBF8FF'
      }
    ],
  },
  {
    id: 'familia',
    name: 'La Familia',
    emoji: '👨‍👩‍👧‍👦',
    translations: { en: 'The Family', ar: 'العائلة', uk: "Сім'я", fr: 'La Famille' },
    words: [
      {
        word: 'El padre',
        translations: {
          en: 'Father',
          ar: 'أب',
          uk: 'Батько',
          fr: 'Père'
        },
        emoji: '👨',
        color: '#E2F3E7'
      },
      {
        word: 'La madre',
        translations: {
          en: 'Mother',
          ar: 'أم',
          uk: 'Мати',
          fr: 'Mère'
        },
        emoji: '👩',
        color: '#FFF5F5'
      },
      {
        word: 'El hermano',
        translations: {
          en: 'Brother',
          ar: 'أخ',
          uk: 'Брат',
          fr: 'Frère'
        },
        emoji: '👦',
        color: '#E3EEF9'
      },
      {
        word: 'La hermana',
        translations: {
          en: 'Sister',
          ar: 'أخت',
          uk: 'Сестра',
          fr: 'Sœur'
        },
        emoji: '👧',
        color: '#FCE8E8'
      },
      {
        word: 'El hijo',
        translations: {
          en: 'Son',
          ar: 'ابن',
          uk: 'Син',
          fr: 'Fils'
        },
        emoji: '👶',
        color: '#E2F3E7'
      },
      {
        word: 'La hija',
        translations: {
          en: 'Daughter',
          ar: 'ابنة',
          uk: 'Донька',
          fr: 'Fille'
        },
        emoji: '👶',
        color: '#FFF5F5'
      },
      {
        word: 'El abuelo',
        translations: {
          en: 'Grandfather',
          ar: 'جد',
          uk: 'Дідусь',
          fr: 'Grand-père'
        },
        emoji: '👴',
        color: '#FEFCBF'
      },
      {
        word: 'La abuela',
        translations: {
          en: 'Grandmother',
          ar: 'جدة',
          uk: 'Бабуся',
          fr: 'Grand-mère'
        },
        emoji: '👵',
        color: '#FEFCBF'
      },
      {
        word: 'El tío',
        translations: {
          en: 'Uncle',
          ar: 'عم / خال',
          uk: 'Дядько',
          fr: 'Oncle'
        },
        emoji: '👨',
        color: '#FFF4E5'
      },
      {
        word: 'La tía',
        translations: {
          en: 'Aunt',
          ar: 'عمة / خالة',
          uk: 'Тітка',
          fr: 'Tante'
        },
        emoji: '👩',
        color: '#FFF4E5'
      },
      {
        word: 'El primo',
        translations: {
          en: 'Cousin (male)',
          ar: 'ابن العم / الخال',
          uk: 'Двоюрідний брат',
          fr: 'Cousin'
        },
        emoji: '👦',
        color: '#FFF4E5'
      },
      {
        word: 'La prima',
        translations: {
          en: 'Cousin (female)',
          ar: 'ابنة العم / الخالة',
          uk: 'Двоюрідна сестра',
          fr: 'Cousine'
        },
        emoji: '👧',
        color: '#FFF4E5'
      },
      {
        word: 'El sobrino',
        translations: {
          en: 'Nephew',
          ar: 'ابن الأخ / الأخت',
          uk: 'Племінник',
          fr: 'Neveu'
        },
        emoji: '👦',
        color: '#F3E8FF'
      },
      {
        word: 'La sobrina',
        translations: {
          en: 'Niece',
          ar: 'ابنة الأخ / الأخت',
          uk: 'Племінниця',
          fr: 'Nièce'
        },
        emoji: '👧',
        color: '#F3E8FF'
      },
      {
        word: 'El nieto',
        translations: {
          en: 'Grandson',
          ar: 'حفيد',
          uk: 'Онук',
          fr: 'Petit-fils'
        },
        emoji: '👶',
        color: '#FEFCBF'
      },
      {
        word: 'La nieta',
        translations: {
          en: 'Granddaughter',
          ar: 'حفيدة',
          uk: 'Онука',
          fr: 'Petite-fille'
        },
        emoji: '👶',
        color: '#FEFCBF'
      },
      {
        word: 'El esposo / El marido',
        translations: {
          en: 'Husband',
          ar: 'زوج',
          uk: 'Чоловік (у шлюбі)',
          fr: 'Mari'
        },
        emoji: '👨',
        color: '#E2F3E7'
      },
      {
        word: 'La esposa / La mujer',
        translations: {
          en: 'Wife',
          ar: 'زوجة',
          uk: 'Дружина',
          fr: 'Épouse'
        },
        emoji: '👩',
        color: '#FFF5F5'
      },
      {
        word: 'El cuñado',
        translations: {
          en: 'Brother-in-law',
          ar: 'صهر / شقيق الزوجة',
          uk: 'Швагро / свояк',
          fr: 'Beau-frère'
        },
        emoji: '👨',
        color: '#EDF2F7'
      },
      {
        word: 'La cuñada',
        translations: {
          en: 'Sister-in-law',
          ar: 'شقيقة الزوجة',
          uk: 'Своячка / зовиця',
          fr: 'Belle-sœur'
        },
        emoji: '👩',
        color: '#EDF2F7'
      },
      {
        word: 'El suegro',
        translations: {
          en: 'Father-in-law',
          ar: 'حما',
          uk: 'Тесть / свекор',
          fr: 'Beau-père'
        },
        emoji: '👴',
        color: '#EDF2F7'
      },
      {
        word: 'La suegra',
        translations: {
          en: 'Mother-in-law',
          ar: 'حмаة',
          uk: 'Теща / свекруха',
          fr: 'Belle-mère'
        },
        emoji: '👵',
        color: '#EDF2F7'
      },
      {
        word: 'El yerno',
        translations: {
          en: 'Son-in-law',
          ar: 'صهر / زوج الابنة',
          uk: 'Зять',
          fr: 'Gendre'
        },
        emoji: '👨',
        color: '#EDF2F7'
      },
      {
        word: 'La nuera',
        translations: {
          en: 'Daughter-in-law',
          ar: 'كنة / زوجة الابن',
          uk: 'Невістка',
          fr: 'Belle-fille'
        },
        emoji: '👩',
        color: '#EDF2F7'
      },
      {
        word: 'El padrastro',
        translations: {
          en: 'Stepfather',
          ar: 'زوج الأم',
          uk: 'Вітчим',
          fr: 'Beau-père'
        },
        emoji: '👨',
        color: '#E3EEF9'
      },
      {
        word: 'La madrastra',
        translations: {
          en: 'Stepmother',
          ar: 'زوجة الأب',
          uk: 'Мачуха',
          fr: 'Belle-mère'
        },
        emoji: '👩',
        color: '#FFF5F5'
      },
      {
        word: 'El hermanastro',
        translations: {
          en: 'Stepbrother',
          ar: 'أخ غير شقيق',
          uk: 'Зведений брат',
          fr: 'Demi-frère'
        },
        emoji: '👦',
        color: '#E3EEF9'
      },
      {
        word: 'La hermanastra',
        translations: {
          en: 'Stepsister',
          ar: 'أخت غير شقيقة',
          uk: 'Зведена сестра',
          fr: 'Demi-sœur'
        },
        emoji: '👧',
        color: '#FCE8E8'
      },
      {
        word: 'Alto / Alta',
        translations: {
          en: 'Tall',
          ar: 'طويل',
          uk: 'Високий',
          fr: 'Grand'
        },
        emoji: '🧍',
        color: '#EBF8FF'
      },
      {
        word: 'Bajo / Baja',
        translations: {
          en: 'Short',
          ar: 'قصير',
          uk: 'Низький',
          fr: 'Petit'
        },
        emoji: '🧍',
        color: '#EBF8FF'
      }
    ],
  },
  {
    id: 'sentimientos',
    name: 'Sentimientos y Emociones',
    emoji: '😊',
    translations: { en: 'Feelings & Emotions', ar: 'المشاعر والعواطف', uk: 'Почуття та емоції', fr: 'Sentiments et Émotions' },
    words: [
      { word: 'Feliz / contento', translations: { en: 'Happy', ar: 'سعيد', uk: 'Щасливий', fr: 'Heureux' }, emoji: '😊', color: '#E2F3E7' },
      { word: 'Triste', translations: { en: 'Sad', ar: 'حزين', uk: 'Сумний', fr: 'Triste' }, emoji: '😢', color: '#E3EEF9' },
      { word: 'Enfadado', translations: { en: 'Angry', ar: 'غاضب', uk: 'Сердитий', fr: 'Fâché' }, emoji: '😠', color: '#FCE8E8' },
      { word: 'Cansado', translations: { en: 'Tired', ar: 'متعب', uk: 'Втомлений', fr: 'Fatigué' }, emoji: '😴', color: '#F3E8FF' },
      { word: 'Nervioso', translations: { en: 'Nervous', ar: 'متوتر', uk: 'Нервовий', fr: 'Nerveux' }, emoji: '😬', color: '#FFF4E5' },
      { word: 'Asustado', translations: { en: 'Scared', ar: 'خائف', uk: 'Наляканий', fr: 'Effrayé' }, emoji: '😨', color: '#FCE8E8' },
      { word: 'Sorprendido', translations: { en: 'Surprised', ar: 'متفاجئ', uk: 'Здивований', fr: 'Surpris' }, emoji: '😲', color: '#FEFCBF' },
    ],
  },
  {
    id: 'animales-a1',
    name: 'Los Animales',
    emoji: '🐾',
    translations: { en: 'Animals', ar: 'الحيوانات', uk: 'Тварини', fr: 'Les Animaux' },
    words: [
      { word: 'El perro', translations: { en: 'Dog', ar: 'كلب', uk: 'Собака', fr: 'Chien' }, emoji: '🐶', color: '#FEFCBF' },
      { word: 'El gato', translations: { en: 'Cat', ar: 'قطة', uk: 'Кіт', fr: 'Chat' }, emoji: '🐱', color: '#F3E8FF' },
      { word: 'El pájaro', translations: { en: 'Bird', ar: 'طائر', uk: 'Птах', fr: 'Oiseau' }, emoji: '🐦', color: '#E3EEF9' },
      { word: 'El pez', translations: { en: 'Fish', ar: 'سمكة', uk: 'Риба', fr: 'Poisson' }, emoji: '🐟', color: '#EBF8FF' },
      { word: 'El elefante', translations: { en: 'Elephant', ar: 'فيل', uk: 'Слон', fr: 'Éléphant' }, emoji: '🐘', color: '#E2F3E7' },
      { word: 'La jirafa', translations: { en: 'Giraffe', ar: 'زرافة', uk: 'Жирафа', fr: 'Girafe' }, emoji: '🦒', color: '#FEFCBF' },
      { word: 'El oso', translations: { en: 'Bear', ar: 'دب', uk: 'Ведмідь', fr: 'Ours' }, emoji: '🐻', color: '#FFF4E5' },
      { word: 'La vaca', translations: { en: 'Cow', ar: 'بقرة', uk: 'Корова', fr: 'Vache' }, emoji: '🐮', color: '#E2F3E7' },
    ],
  },
  {
    id: 'hobbies',
    name: 'Hobbies y Tiempo Libre',
    emoji: '⚽',
    translations: { en: 'Hobbies & Free Time', ar: 'الهوايات ووقت الفراغ', uk: 'Хобі та вільний час', fr: 'Loisirs et Temps Libre' },
    words: [
      { word: 'Jugar al fútbol', translations: { en: 'Play football', ar: 'لعب كرة القدم', uk: 'Грати у футбол', fr: 'Jouer au football' }, emoji: '⚽', color: '#E2F3E7' },
      { word: 'Leer', translations: { en: 'Read', ar: 'يقرأ', uk: 'Читати', fr: 'Lire' }, emoji: '📖', color: '#EBF8FF' },
      { word: 'Escuchar música', translations: { en: 'Listen to music', ar: 'استمع إلى الموسيقى', uk: 'Слухати музику', fr: 'Écouter de la musique' }, emoji: '🎵', color: '#F3E8FF' },
      { word: 'Cocinar', translations: { en: 'Cook', ar: 'يطبخ', uk: 'Готувати', fr: 'Cuisiner' }, emoji: '🍳', color: '#FFF4E5' },
      { word: 'Caminar', translations: { en: 'Walk', ar: 'يمشي', uk: 'Ходити', fr: 'Marcher' }, emoji: '🚶', color: '#E2F3E7' },
      { word: 'Ver la televisión', translations: { en: 'Watch TV', ar: 'مشاهدة التلفاز', uk: 'Дивитися телевізор', fr: 'Regarder la télévision' }, emoji: '📺', color: '#E3EEF9' },
      { word: 'Nadar', translations: { en: 'Swim', ar: 'يسبح', uk: 'Плавати', fr: 'Nager' }, emoji: '🏊', color: '#EBF8FF' },
      { word: 'Bailar', translations: { en: 'Dance', ar: 'يرقص', uk: 'Танцювати', fr: 'Danser' }, emoji: '💃', color: '#FCE8E8' },
      { word: 'Dibujar', translations: { en: 'Draw', ar: 'يرسم', uk: 'Малювати', fr: 'Dessiner' }, emoji: '🎨', color: '#FEFCBF' },
      { word: 'Correr', translations: { en: 'Run', ar: 'يجري', uk: 'Бігати', fr: 'Courir' }, emoji: '🏃', color: '#E2F3E7' },
    ],
  },
  {
    id: 'casa',
    name: 'La Casa',
    emoji: '🏠',
    translations: { en: 'The House', ar: 'المنزل', uk: 'Будинок', fr: 'La Maison' },
    words: [
      { word: 'La cocina', translations: { en: 'Kitchen', ar: 'المطبخ', uk: 'Кухня', fr: 'Cuisine' }, emoji: '🍳', color: '#FFF4E5' },
      { word: 'El salón', translations: { en: 'Living room', ar: 'غرفة المعيشة', uk: 'Вітальня', fr: 'Salon' }, emoji: '🛋️', color: '#E3EEF9' },
      { word: 'El dormitorio', translations: { en: 'Bedroom', ar: 'غرفة النوم', uk: 'Спальня', fr: 'Chambre' }, emoji: '🛏️', color: '#F3E8FF' },
      { word: 'El baño', translations: { en: 'Bathroom', ar: 'الحمام', uk: 'Ванна', fr: 'Salle de bain' }, emoji: '🚿', color: '#EBF8FF' },
      { word: 'La puerta', translations: { en: 'Door', ar: 'الباب', uk: 'Двері', fr: 'Porte' }, emoji: '🚪', color: '#FCE8E8' },
      { word: 'La ventana', translations: { en: 'Window', ar: 'النافذة', uk: 'Вікно', fr: 'Fenêtre' }, emoji: '🪟', color: '#FEFCBF' },
      { word: 'La mesa', translations: { en: 'Table', ar: 'الطاولة', uk: 'Стіл', fr: 'Table' }, emoji: '🪑', color: '#E2F3E7' },
      { word: 'La silla', translations: { en: 'Chair', ar: 'كرسي', uk: 'Стілець', fr: 'Chaise' }, emoji: '🪑', color: '#E3EEF9' },
      { word: 'El jardín', translations: { en: 'Garden', ar: 'الحديقة', uk: 'Сад', fr: 'Jardin' }, emoji: '🌿', color: '#E2F3E7' },
    ],
  },
  {
    id: 'profesiones',
    name: 'Los Oficios y Profesiones',
    emoji: '👷',
    translations: { en: 'Jobs & Professions', ar: 'المهن والوظائف', uk: 'Професії та ремесла', fr: 'Métiers et Professions' },
    words: [
      {
        word: 'El profesor / La profesora',
        translations: {
          en: 'Teacher',
          ar: 'المعلم / المعلمة',
          uk: 'Вчитель / вчителька',
          fr: 'Professeur'
        },
        emoji: '🧑‍🏫',
        color: '#E3EEF9'
      },
      {
        word: 'El médico / La médica',
        translations: {
          en: 'Doctor',
          ar: 'الطبيب / الطبيبة',
          uk: 'Лікар',
          fr: 'Médecin'
        },
        emoji: '👨‍⚕️',
        color: '#E2F3E7'
      },
      {
        word: 'El cocinero / La cocinera',
        translations: {
          en: 'Cook',
          ar: 'الطباخ / الطباخة',
          uk: 'Кухар',
          fr: 'Cuisinier'
        },
        emoji: '👨‍🍳',
        color: '#FFF4E5'
      },
      {
        word: 'El enfermero / La enfermera',
        translations: {
          en: 'Nurse',
          ar: 'الممرض / الممرضة',
          uk: 'Медбрат / медсестра',
          fr: 'Infirmier'
        },
        emoji: '🧑‍⚕️',
        color: '#E2F3E7'
      },
      {
        word: 'El ingeniero / La ingeniera',
        translations: {
          en: 'Engineer',
          ar: 'المهندس / المهندسة',
          uk: 'Інженер',
          fr: 'Ingénieur'
        },
        emoji: '👷',
        color: '#E3EEF9'
      },
      {
        word: 'El carpintero',
        translations: {
          en: 'Carpenter',
          ar: 'النجار',
          uk: 'Тесля',
          fr: 'Charpentier'
        },
        emoji: '🪚',
        color: '#FEFCBF'
      },
      {
        word: 'El electricista',
        translations: {
          en: 'Electrician',
          ar: 'كهربائي',
          uk: 'Електрик',
          fr: 'Électricien'
        },
        emoji: '⚡',
        color: '#FEFCBF'
      },
      {
        word: 'El fontanero / El plomero',
        translations: {
          en: 'Plumber',
          ar: 'سباك',
          uk: 'Сантехнік',
          fr: 'Plombier'
        },
        emoji: '🔧',
        color: '#FEFCBF'
      },
      {
        word: 'El pintor / La pintora',
        translations: {
          en: 'Painter',
          ar: 'الرسام / الرسامة',
          uk: 'Маляр / художник',
          fr: 'Peintre'
        },
        emoji: '🎨',
        color: '#FFF5F5'
      },
      {
        word: 'El policía / La mujer policía',
        translations: {
          en: 'Police officer',
          ar: 'الشرطي / الشرطية',
          uk: 'Поліцейський',
          fr: 'Policier'
        },
        emoji: '👮',
        color: '#E3EEF9'
      },
      {
        word: 'El bombero',
        translations: {
          en: 'Firefighter',
          ar: 'رجل الإطفاء',
          uk: 'Пожежник',
          fr: 'Pompier'
        },
        emoji: '👩‍🚒',
        color: '#FCE8E8'
      },
      {
        word: 'El camarero / La camarera',
        translations: {
          en: 'Waiter / Waitress',
          ar: 'النادل / النادلة',
          uk: 'Офіціант / офіціантка',
          fr: 'Serveur'
        },
        emoji: '🤵',
        color: '#EDF2F7'
      },
      {
        word: 'El peluquero / La peluquera',
        translations: {
          en: 'Hairdresser',
          ar: 'مصفف الشعر',
          uk: 'Перукар',
          fr: 'Coiffeur'
        },
        emoji: '💇',
        color: '#F3E8FF'
      },
      {
        word: 'El dentista / La dentista',
        translations: {
          en: 'Dentist',
          ar: 'طبيب الأسنان',
          uk: 'Стоматолог',
          fr: 'Dentiste'
        },
        emoji: '🦷',
        color: '#EBF8FF'
      },
      {
        word: 'El veterinario / La veterinaria',
        translations: {
          en: 'Veterinarian',
          ar: 'الطبيب البيطري',
          uk: 'Ветеринар',
          fr: 'Vétérinaire'
        },
        emoji: '🐶',
        color: '#E2F3E7'
      },
      {
        word: 'El mecánico / La mecánica',
        translations: {
          en: 'Mechanic',
          ar: 'ميكانيكي',
          uk: 'Механік',
          fr: 'Mécanicien'
        },
        emoji: '🚗',
        color: '#E2F3E7'
      },
      {
        word: 'El conductor / La conductora',
        translations: {
          en: 'Driver',
          ar: 'السائق / السائقة',
          uk: 'Водій',
          fr: 'Conducteur'
        },
        emoji: '🚗',
        color: '#FCE8E8'
      },
      {
        word: 'El agricultor / La agricultora',
        translations: {
          en: 'Farmer',
          ar: 'المزارع / المزارعة',
          uk: 'Фермер',
          fr: 'Agriculteur'
        },
        emoji: '🧑‍🌾',
        color: '#E2F3E7'
      },
      {
        word: 'El cartero',
        translations: {
          en: 'Mail carrier',
          ar: 'ساعي البريد',
          uk: 'Поштар',
          fr: 'Facteur'
        },
        emoji: '✉️',
        color: '#E3EEF9'
      },
      {
        word: 'El abogado / La abogada',
        translations: {
          en: 'Lawyer',
          ar: 'المحامي / المحامية',
          uk: 'Юрист / адвокат',
          fr: 'Avocat'
        },
        emoji: '💼',
        color: '#E3EEF9'
      },
      {
        word: 'El periodista / La periodista',
        translations: {
          en: 'Journalist',
          ar: 'صحفي / صحفية',
          uk: 'Журналіст',
          fr: 'Journaliste'
        },
        emoji: '🎤',
        color: '#EBF8FF'
      },
      {
        word: 'El escritor / La escritora',
        translations: {
          en: 'Writer',
          ar: 'الكاتب / الكاتبة',
          uk: 'Письменник',
          fr: 'Écrivain'
        },
        emoji: '✍️',
        color: '#E3EEF9'
      },
      {
        word: 'El actor / La actriz',
        translations: {
          en: 'Actor / Actress',
          ar: 'الممثل / الممثلة',
          uk: 'Актор / акторка',
          fr: 'Acteur'
        },
        emoji: '🎭',
        color: '#FFF5F5'
      },
      {
        word: 'El músico / La música',
        translations: {
          en: 'Musician',
          ar: 'الموسيقار / الموسيقارة',
          uk: 'Музикант',
          fr: 'Musicien'
        },
        emoji: '🎵',
        color: '#F3E8FF'
      },
      {
        word: 'El arquitecto / La arquitecta',
        translations: {
          en: 'Architect',
          ar: 'مهندس معماري',
          uk: 'Архітектор',
          fr: 'Architecte'
        },
        emoji: '📐',
        color: '#E3EEF9'
      },
      {
        word: 'El vendedor / La vendedora',
        translations: {
          en: 'Salesperson',
          ar: 'البائع / البائعة',
          uk: 'Продавець',
          fr: 'Vendeur'
        },
        emoji: '🛒',
        color: '#EBF8FF'
      },
      {
        word: 'El cajero / La cajera',
        translations: {
          en: 'Cashier',
          ar: 'أمين الصندوق',
          uk: 'Касир',
          fr: 'Caissier'
        },
        emoji: '🪙',
        color: '#EBF8FF'
      },
      {
        word: 'El científico / La científica',
        translations: {
          en: 'Scientist',
          ar: 'العالم / العالمة',
          uk: 'Вчений',
          fr: 'Scientifique'
        },
        emoji: '🔬',
        color: '#E2F3E7'
      },
      {
        word: 'El albañil',
        translations: {
          en: 'Bricklayer',
          ar: 'البناء',
          uk: 'Муляр',
          fr: 'Maçon'
        },
        emoji: '👷',
        color: '#FEFCBF'
      },
      {
        word: 'El electricista',
        translations: {
          en: 'Electrician',
          ar: 'كهربائي',
          uk: 'Електрик',
          fr: 'Électricien'
        },
        emoji: '⚡',
        color: '#FEFCBF'
      }
    ],
  },
];

const a2Themes: GlossaryTheme[] = [
  {
    id: 'clima',
    name: 'El Clima y la Naturaleza',
    emoji: '🌤️',
    translations: { en: 'Weather & Nature', ar: 'الطقس والطبيعة', uk: 'Погода і природа', fr: 'Climat et Nature' },
    words: [
      { word: 'Sol', translations: { en: 'Sun', ar: 'شمس', uk: 'Сонце', fr: 'Soleil' }, emoji: '☀️', color: '#FEFCBF' },
      { word: 'Lluvia', translations: { en: 'Rain', ar: 'مطر', uk: 'Дощ', fr: 'Pluie' }, emoji: '🌧️', color: '#E3EEF9' },
      { word: 'Viento', translations: { en: 'Wind', ar: 'رياح', uk: 'Вітер', fr: 'Vent' }, emoji: '💨', color: '#FFF4E5' },
      { word: 'Calor', translations: { en: 'Heat', ar: 'حرارة', uk: 'Тепло', fr: 'Chaleur' }, emoji: '🥵', color: '#FCE8E8' },
      { word: 'Frío', translations: { en: 'Cold', ar: 'بارد', uk: 'Холодний', fr: 'Froid' }, emoji: '🥶', color: '#EBF8FF' },
      { word: 'Verano', translations: { en: 'Summer', ar: 'صيف', uk: 'Літо', fr: 'Été' }, emoji: '🏖️', color: '#FEFCBF' },
      { word: 'Invierno', translations: { en: 'Winter', ar: 'شتاء', uk: 'Зима', fr: 'Hiver' }, emoji: '❄️', color: '#EBF8FF' },
      { word: 'Primavera', translations: { en: 'Spring', ar: 'ربيع', uk: 'Весна', fr: 'Printemps' }, emoji: '🌱', color: '#E2F3E7' },
      { word: 'Otoño', translations: { en: 'Autumn', ar: 'خريف', uk: 'Осінь', fr: 'Automne' }, emoji: '🍂', color: '#FFF4E5' },
      { word: 'Montaña', translations: { en: 'Mountain', ar: 'جبل', uk: 'Гора', fr: 'Montagne' }, emoji: '⛰️', color: '#E2F3E7' },
      { word: 'Río', translations: { en: 'River', ar: 'نهر', uk: 'Річка', fr: 'Rivière' }, emoji: '🏞️', color: '#E3EEF9' },
      { word: 'Flor', translations: { en: 'Flower', ar: 'ورد', uk: 'Квітка', fr: 'Fleur' }, emoji: '🌸', color: '#FFF5F5' },
      { word: 'Árbol', translations: { en: 'Tree', ar: 'شجرة', uk: 'Дерево', fr: 'Arbre' }, emoji: '🌳', color: '#E2F3E7' },
    ],
  },
  {
    id: 'hospital',
    name: 'En el Hospital',
    emoji: '🏥',
    translations: { en: 'At the Hospital', ar: 'في المستشفى', uk: 'В лікарні', fr: "À l'Hôpital" },
    words: [
      { word: 'Hospital', translations: { en: 'Hospital', ar: 'مستشفى', uk: 'Лікарня', fr: 'Hôpital' }, emoji: '🏥', color: '#E2F3E7' },
      { word: 'Médico', translations: { en: 'Doctor', ar: 'طبيب', uk: 'Лікар', fr: 'Médecin' }, emoji: '👨‍⚕️', color: '#E3EEF9' },
      { word: 'Dolor', translations: { en: 'Pain', ar: 'ألم', uk: 'Біль', fr: 'Douleur' }, emoji: '🤕', color: '#FCE8E8' },
      { word: 'Fiebre', translations: { en: 'Fever', ar: 'حمى', uk: 'Лихоманка', fr: 'Fièvre' }, emoji: '🌡️', color: '#FFF4E5' },
      { word: 'Medicamento', translations: { en: 'Medicine', ar: 'الدواء', uk: 'Ліки', fr: 'Médicament' }, emoji: '💊', color: '#E3EEF9' },
      { word: 'Cita', translations: { en: 'Appointment', ar: 'ميعاد', uk: 'Призначення', fr: 'Rendez-vous' }, emoji: '📅', color: '#FEFCBF' },
      { word: 'Urgencias', translations: { en: 'Emergencies', ar: 'حالات الطوارئ', uk: 'Невідкладна допомога', fr: 'Urgences' }, emoji: '🚨', color: '#FCE8E8' },
    ],
  },
  {
    id: 'colegio',
    name: 'En el Colegio',
    emoji: '🏫',
    translations: { en: 'At School', ar: 'في المدرسة', uk: 'В школі', fr: "À l'École" },
    words: [
      { word: 'El colegio', translations: { en: 'School', ar: 'المدرسة', uk: 'Школа', fr: 'École' }, emoji: '🏫', color: '#E2F3E7' },
      { word: 'El profesor', translations: { en: 'Teacher', ar: 'المعلم', uk: 'Вчитель', fr: 'Professeur' }, emoji: '🧑‍🏫', color: '#E3EEF9' },
      { word: 'El alumno', translations: { en: 'Student', ar: 'الطالب', uk: 'Учень', fr: 'Élève' }, emoji: '🧑‍🎓', color: '#FEFCBF' },
      { word: 'El libro', translations: { en: 'Book', ar: 'كتاب', uk: 'Книга', fr: 'Livre' }, emoji: '📖', color: '#EBF8FF' },
      { word: 'El lápiz', translations: { en: 'Pencil', ar: 'قلم رصاص', uk: 'Олівець', fr: 'Crayon' }, emoji: '✏️', color: '#FFF4E5' },
      { word: 'La clase', translations: { en: 'Class', ar: 'الفصل', uk: 'Клас', fr: 'Classe' }, emoji: '📝', color: '#F3E8FF' },
    ],
  },
  {
    id: 'direcciones',
    name: 'Direcciones y Lugares',
    emoji: '🗺️',
    translations: { en: 'Directions & Places', ar: 'الاتجاهات والأماكن', uk: 'Напрямки та місця', fr: 'Directions et Lieux' },
    words: [
      {
        word: 'El lavabo / baño',
        translations: {
          en: 'Bathroom',
          ar: 'الحمام',
          uk: 'Туалет',
          fr: 'Toilettes'
        },
        emoji: '🚽',
        color: '#EBF8FF'
      },
      {
        word: 'El autobús',
        translations: {
          en: 'Bus',
          ar: 'حافلة',
          uk: 'Автобус',
          fr: 'Bus'
        },
        emoji: '🚌',
        color: '#FFF5F5'
      },
      {
        word: 'El metro',
        translations: {
          en: 'Metro',
          ar: 'مترو الأنفاق',
          uk: 'Метро',
          fr: 'Métro'
        },
        emoji: '🚇',
        color: '#E2F3E7'
      },
      {
        word: 'La tienda',
        translations: {
          en: 'Shop',
          ar: 'متجر',
          uk: 'Магазин',
          fr: 'Magasin'
        },
        emoji: '🏪',
        color: '#FEFCBF'
      },
      {
        word: 'La farmacia',
        translations: {
          en: 'Pharmacy',
          ar: 'صيدلية',
          uk: 'Аптека',
          fr: 'Pharmacie'
        },
        emoji: '💊',
        color: '#FCE8E8'
      },
      {
        word: 'La calle',
        translations: {
          en: 'Street',
          ar: 'شارع',
          uk: 'Вулиця',
          fr: 'Rue'
        },
        emoji: '🛣️',
        color: '#EDF2F7'
      },
      {
        word: 'La avenida',
        translations: {
          en: 'Avenue',
          ar: 'شارع رئيسي',
          uk: 'Проспект',
          fr: 'Avenue'
        },
        emoji: '🛣️',
        color: '#EDF2F7'
      },
      {
        word: 'La plaza',
        translations: {
          en: 'Square',
          ar: 'ميدان',
          uk: 'Площа',
          fr: 'Place'
        },
        emoji: '🏛️',
        color: '#EDF2F7'
      },
      {
        word: 'La esquina',
        translations: {
          en: 'Corner',
          ar: 'زاوية',
          uk: 'Кут',
          fr: 'Coin'
        },
        emoji: '📐',
        color: '#EDF2F7'
      },
      {
        word: 'El cruce',
        translations: {
          en: 'Crossing / Intersection',
          ar: 'تقاطع',
          uk: 'Перехрестя',
          fr: 'Carrefour'
        },
        emoji: '🚸',
        color: '#EDF2F7'
      },
      {
        word: 'Derecha',
        translations: {
          en: 'Right',
          ar: 'يمين',
          uk: 'Праворуч',
          fr: 'Droite'
        },
        emoji: '➡️',
        color: '#EDF2F7'
      },
      {
        word: 'Izquierda',
        translations: {
          en: 'Left',
          ar: 'يسار',
          uk: 'Ліворуч',
          fr: 'Gauche'
        },
        emoji: '⬅️',
        color: '#EDF2F7'
      },
      {
        word: 'Todo recto / Derecho',
        translations: {
          en: 'Straight ahead',
          ar: 'مباشرة',
          uk: 'Прямо',
          fr: 'Tout droit'
        },
        emoji: '⬆️',
        color: '#EDF2F7'
      },
      {
        word: 'Girar / Doblar',
        translations: {
          en: 'To turn',
          ar: 'انعطاف',
          uk: 'Повертати',
          fr: 'Tourner'
        },
        emoji: '↩️',
        color: '#EDF2F7'
      },
      {
        word: 'Cerca',
        translations: {
          en: 'Near',
          ar: 'قريب',
          uk: 'Близько',
          fr: 'Près'
        },
        emoji: '📍',
        color: '#E2F3E7'
      },
      {
        word: 'Lejos',
        translations: {
          en: 'Far',
          ar: 'بعيد',
          uk: 'Далеко',
          fr: 'Loin'
        },
        emoji: '🌍',
        color: '#FCE8E8'
      },
      {
        word: 'Al lado de',
        translations: {
          en: 'Next to',
          ar: 'بجانب',
          uk: 'Поруч з',
          fr: 'À côté de'
        },
        emoji: '🧑‍🤝‍🧑',
        color: '#EDF2F7'
      },
      {
        word: 'Enfrente de',
        translations: {
          en: 'In front of',
          ar: 'أمام',
          uk: 'Навпроти',
          fr: 'En face de'
        },
        emoji: '↔️',
        color: '#EDF2F7'
      },
      {
        word: 'Detrás de',
        translations: {
          en: 'Behind',
          ar: 'خلف',
          uk: 'Позаду',
          fr: 'Derrière'
        },
        emoji: '⬅️',
        color: '#EDF2F7'
      },
      {
        word: 'El mapa',
        translations: {
          en: 'Map',
          ar: 'خريطة',
          uk: 'Карта',
          fr: 'Carte'
        },
        emoji: '🗺️',
        color: '#E3EEF9'
      },
      {
        word: 'La parada de autobús',
        translations: {
          en: 'Bus stop',
          ar: 'موقف حافلات',
          uk: 'Автобусна зупинка',
          fr: 'Arrêt de bus'
        },
        emoji: '🚏',
        color: '#FFF5F5'
      },
      {
        word: 'La estación de tren',
        translations: {
          en: 'Train station',
          ar: 'محطة قطار',
          uk: 'Залізничний вокзал',
          fr: 'Gare ferroviaire'
        },
        emoji: '🚉',
        color: '#FFF5F5'
      },
      {
        word: 'El supermercado',
        translations: {
          en: 'Supermarket',
          ar: 'سوبرماركت',
          uk: 'Супермаркет',
          fr: 'Supermarché'
        },
        emoji: '🛒',
        color: '#EBF8FF'
      },
      {
        word: 'El banco',
        translations: {
          en: 'Bank',
          ar: 'بنك',
          uk: 'Банк',
          fr: 'Banque'
        },
        emoji: '🏦',
        color: '#EBF8FF'
      },
      {
        word: 'El hospital',
        translations: {
          en: 'Hospital',
          ar: 'مستشفى',
          uk: 'Лікарня',
          fr: 'Hôpital'
        },
        emoji: '🏥',
        color: '#E2F3E7'
      },
      {
        word: 'La oficina de turismo',
        translations: {
          en: 'Tourist office',
          ar: 'مكتب السياحة',
          uk: 'Туристичний офіс',
          fr: 'Office de tourisme'
        },
        emoji: 'ℹ️',
        color: '#EBF8FF'
      },
      {
        word: 'El semáforo',
        translations: {
          en: 'Traffic light',
          ar: 'إشارة مرور',
          uk: 'Світлофор',
          fr: 'Feu de signalisation'
        },
        emoji: '🚦',
        color: '#EDF2F7'
      },
      {
        word: 'El paso de peatones',
        translations: {
          en: 'Pedestrian crossing',
          ar: 'مмер مشاة',
          uk: 'Пішохідний перехід',
          fr: 'Passage piéton'
        },
        emoji: '🚸',
        color: '#EDF2F7'
      },
      {
        word: 'El billete / boleto',
        translations: {
          en: 'Ticket',
          ar: 'تذكرة',
          uk: 'Квиток',
          fr: 'Ticket'
        },
        emoji: '🎫',
        color: '#EDF2F7'
      },
      {
        word: 'Perdido / Perdida',
        translations: {
          en: 'Lost',
          ar: 'مفقود / تائه',
          uk: 'Загублений',
          fr: 'Perdu'
        },
        emoji: '😰',
        color: '#FCE8E8'
      }
    ],
  },
  {
    id: 'comida',
    name: 'La Comida',
    emoji: '🍽️',
    translations: { en: 'Food', ar: 'الطعام', uk: 'Їжа', fr: 'La Nourriture' },
    words: [
      { word: 'El pan', translations: { en: 'Bread', ar: 'خبز', uk: 'Хліб', fr: 'Pain' }, emoji: '🍞', color: '#FEFCBF' },
      { word: 'El agua', translations: { en: 'Water', ar: 'ماء', uk: 'Вода', fr: 'Eau' }, emoji: '💧', color: '#E3EEF9' },
      { word: 'La leche', translations: { en: 'Milk', ar: 'حليب', uk: 'Молоко', fr: 'Lait' }, emoji: '🥛', color: '#F7FAFC' },
      { word: 'La fruta', translations: { en: 'Fruit', ar: 'فاكهة', uk: 'Фрукти', fr: 'Fruit' }, emoji: '🍎', color: '#FCE8E8' },
      { word: 'La carne', translations: { en: 'Meat', ar: 'لحم', uk: "М'ясо", fr: 'Viande' }, emoji: '🥩', color: '#FCE8E8' },
      { word: 'El pescado', translations: { en: 'Fish', ar: 'سمك', uk: 'Риба', fr: 'Poisson' }, emoji: '🐟', color: '#EBF8FF' },
      { word: 'La verdura', translations: { en: 'Vegetable', ar: 'خضروات', uk: 'Овочі', fr: 'Légume' }, emoji: '🥬', color: '#E2F3E7' },
      { word: 'El arroz', translations: { en: 'Rice', ar: 'أرز', uk: 'Рис', fr: 'Riz' }, emoji: '🍚', color: '#F7FAFC' },
      { word: 'El café', translations: { en: 'Coffee', ar: 'قهوة', uk: 'Кава', fr: 'Café' }, emoji: '☕', color: '#FFF4E5' },
    ],
  },
  {
    id: 'estados',
    name: 'Estados Físicos',
    emoji: '🌡️',
    translations: { en: 'Physical States', ar: 'الحالات الجسدية', uk: 'Фізичні стани', fr: 'États Physiques' },
    words: [
      { word: 'Tengo hambre', translations: { en: "I'm hungry", ar: 'أشعر بالجوع', uk: 'Я голодний', fr: "J'ai faim" }, emoji: '🤤', color: '#FFF4E5' },
      { word: 'Tengo sed', translations: { en: "I'm thirsty", ar: 'أشعر بالعطش', uk: 'Я хочу пити', fr: "J'ai soif" }, emoji: '🥛', color: '#E3EEF9' },
      { word: 'Tengo frío', translations: { en: "I'm cold", ar: 'أشعر بالبرد', uk: 'Мені холодно', fr: "J'ai froid" }, emoji: '🥶', color: '#EBF8FF' },
      { word: 'Tengo calor', translations: { en: "I'm hot", ar: 'أشعر بالحر', uk: 'Мені жарко', fr: "J'ai chaud" }, emoji: '🥵', color: '#FCE8E8' },
      { word: 'Tengo miedo', translations: { en: "I'm afraid", ar: 'أشعر بالخوف', uk: 'Мені страшно', fr: "J'ai peur" }, emoji: '😨', color: '#F3E8FF' },
    ],
  },
];

const b1Themes: GlossaryTheme[] = [
  {
    id: 'viajes',
    name: 'Viajes y Recuerdos',
    emoji: '✈️',
    translations: { en: 'Travel & Memories', ar: 'السفر والذكريات', uk: 'Подорожі та спогади', fr: 'Voyages et Souvenirs' },
    words: [
      {
        word: 'El viaje',
        translations: {
          en: 'Trip',
          ar: 'الرحلة',
          uk: 'Подорож',
          fr: 'Voyage'
        },
        emoji: '🧳',
        color: '#FFF4E5'
      },
      {
        word: 'El recuerdo',
        translations: {
          en: 'Memory',
          ar: 'الذكرى',
          uk: 'Спогад',
          fr: 'Souvenir'
        },
        emoji: '💭',
        color: '#F3E8FF'
      },
      {
        word: 'Planificar',
        translations: {
          en: 'To plan',
          ar: 'التخطيط',
          uk: 'Планувати',
          fr: 'Planifier'
        },
        emoji: '📅',
        color: '#E3EEF9'
      },
      {
        word: 'El aeropuerto',
        translations: {
          en: 'Airport',
          ar: 'المطار',
          uk: 'Аеропорт',
          fr: 'Aéroport'
        },
        emoji: '🛫',
        color: '#EBF8FF'
      },
      {
        word: 'El equipaje',
        translations: {
          en: 'Luggage',
          ar: 'الأمتعة',
          uk: 'Багаж',
          fr: 'Bagages'
        },
        emoji: '🧳',
        color: '#FEFCBF'
      },
      {
        word: 'El billete',
        translations: {
          en: 'Ticket',
          ar: 'تذكرة',
          uk: 'Квиток',
          fr: 'Billet'
        },
        emoji: '🎫',
        color: '#E2F3E7'
      },
      {
        word: 'El pasaporte',
        translations: {
          en: 'Passport',
          ar: 'جواز سفر',
          uk: 'Паспорт',
          fr: 'Passeport'
        },
        emoji: '📕',
        color: '#FCE8E8'
      },
      {
        word: 'El hotel',
        translations: {
          en: 'Hotel',
          ar: 'فندق',
          uk: 'Готель',
          fr: 'Hôtel'
        },
        emoji: '🏨',
        color: '#EDF2F7'
      },
      {
        word: 'El destino',
        translations: {
          en: 'Destination',
          ar: 'الوجهة',
          uk: 'Напрямок',
          fr: 'Destination'
        },
        emoji: '📍',
        color: '#FFF4E5'
      },
      {
        word: 'Hacer turismo',
        translations: {
          en: 'Sightseeing',
          ar: 'السياحة',
          uk: 'Огляд визначних пам\'яток',
          fr: 'Faire du tourisme'
        },
        emoji: '📸',
        color: '#F3E8FF'
      },
      {
        word: 'El mapa',
        translations: {
          en: 'Map',
          ar: 'خريطة',
          uk: 'Карта',
          fr: 'Carte'
        },
        emoji: '🗺️',
        color: '#E3EEF9'
      },
      {
        word: 'La maleta',
        translations: {
          en: 'Suitcase',
          ar: 'حقيبة سفر',
          uk: 'Валіза',
          fr: 'Valise'
        },
        emoji: '💼',
        color: '#FEFCBF'
      },
      {
        word: 'El crucero',
        translations: {
          en: 'Cruise',
          ar: 'رحلة بحرية',
          uk: 'Круїз',
          fr: 'Croisière'
        },
        emoji: '🚢',
        color: '#EBF8FF'
      },
      {
        word: 'El monumento',
        translations: {
          en: 'Monument',
          ar: 'نصب تذكاري',
          uk: 'Пам\'ятник',
          fr: 'Monument'
        },
        emoji: '🏛️',
        color: '#EDF2F7'
      },
      {
        word: 'El billete de ida y vuelta',
        translations: {
          en: 'Round-trip ticket',
          ar: 'تذكرة ذهاب وإياب',
          uk: 'Квиток туди й назад',
          fr: 'Billet aller-retour'
        },
        emoji: '🎫',
        color: '#E2F3E7'
      },
      {
        word: 'El guía turístico',
        translations: {
          en: 'Tour guide',
          ar: 'مرشد سياحي',
          uk: 'Гід',
          fr: 'Guide touristique'
        },
        emoji: '🤠',
        color: '#FEFCBF'
      },
      {
        word: 'El itinerario',
        translations: {
          en: 'Itinerary',
          ar: 'مسار الرحلة',
          uk: 'Маршрут',
          fr: 'Itinéraire'
        },
        emoji: '🗺️',
        color: '#E3EEF9'
      },
      {
        word: 'La reserva',
        translations: {
          en: 'Reservation',
          ar: 'حجز',
          uk: 'Бронювання',
          fr: 'Réservation'
        },
        emoji: '📅',
        color: '#FFF4E5'
      },
      {
        word: 'Viajar',
        translations: {
          en: 'To travel',
          ar: 'يسافر',
          uk: 'Подорожувати',
          fr: 'Voyager'
        },
        emoji: '✈️',
        color: '#FFF4E5'
      },
      {
        word: 'El alojamiento',
        translations: {
          en: 'Accommodation',
          ar: 'سكن / إقامة',
          uk: 'Житло',
          fr: 'Hébergement'
        },
        emoji: '🏨',
        color: '#EDF2F7'
      },
      {
        word: 'La aduana',
        translations: {
          en: 'Customs',
          ar: 'الجمارك',
          uk: 'Митниця',
          fr: 'Douane'
        },
        emoji: '🛂',
        color: '#FCE8E8'
      },
      {
        word: 'El visado',
        translations: {
          en: 'Visa',
          ar: 'تأشيرة دخول',
          uk: 'Віза',
          fr: 'Visa'
        },
        emoji: '🪪',
        color: '#FEFCBF'
      },
      {
        word: 'La excursión',
        translations: {
          en: 'Excursion',
          ar: 'رحلة قصيرة',
          uk: 'Екскурсія',
          fr: 'Excursion'
        },
        emoji: '⛰️',
        color: '#E2F3E7'
      },
      {
        word: 'Perder el tren',
        translations: {
          en: 'To miss the train',
          ar: 'فقدان القطار',
          uk: 'Запізнитися на потяг',
          fr: 'Rater le train'
        },
        emoji: '🚆',
        color: '#FCE8E8'
      },
      {
        word: 'El vuelo',
        translations: {
          en: 'Flight',
          ar: 'رحلة جوية',
          uk: 'Політ',
          fr: 'Vol'
        },
        emoji: '✈️',
        color: '#EBF8FF'
      },
      {
        word: 'La temporada alta',
        translations: {
          en: 'Peak season',
          ar: 'الموسم السياحي المزدحم',
          uk: 'Високий сезон',
          fr: 'Saison haute'
        },
        emoji: '☀️',
        color: '#FFF4E5'
      },
      {
        word: 'El souvenir',
        translations: {
          en: 'Souvenir',
          ar: 'هدية تذكارية',
          uk: 'Сувенір',
          fr: 'Souvenir'
        },
        emoji: '🎁',
        color: '#F3E8FF'
      },
      {
        word: 'El transbordo',
        translations: {
          en: 'Transfer / Connection',
          ar: 'تحويل الرحلة',
          uk: 'Пересадка',
          fr: 'Correspondance'
        },
        emoji: '🚊',
        color: '#EDF2F7'
      },
      {
        word: 'El tren de alta velocidad',
        translations: {
          en: 'High-speed train',
          ar: 'قطار سريع جداً',
          uk: 'Швидкісний потяг',
          fr: 'Train à grande vitesse'
        },
        emoji: '🚄',
        color: '#E2F3E7'
      },
      {
        word: 'La aventura',
        translations: {
          en: 'Adventure',
          ar: 'مغامرة',
          uk: 'Пригода',
          fr: 'Aventure'
        },
        emoji: '🧭',
        color: '#FFF4E5'
      }
    ],
  },
  {
    id: 'expresiones-idiomaticas',
    name: 'Expresiones Idiomáticas',
    emoji: '🗣️',
    translations: { en: 'Idiomatic Expressions', ar: 'التعابير الاصطلاحية', uk: 'Ідіоматичні вирази', fr: 'Expressions Idiomatiques' },
    words: [
      {
        word: 'Estar en las nubes',
        translations: {
          en: 'To be daydreaming',
          ar: 'يحلم أحلام اليقظة',
          uk: 'Бути в хмарах',
          fr: 'Être dans les nuages'
        },
        emoji: '☁️',
        color: '#E3EEF9'
      },
      {
        word: 'Ser pan comido',
        translations: {
          en: 'To be a piece of cake',
          ar: 'شيء سهل جدا',
          uk: 'Легка справа',
          fr: 'Être du gâteau'
        },
        emoji: '🍞',
        color: '#FEFCBF'
      },
      {
        word: 'Meter la pata',
        translations: {
          en: 'To put your foot in it',
          ar: 'ارتكاب خطأ',
          uk: 'Зробити помилку',
          fr: 'Mettre les pieds dans le plat'
        },
        emoji: '🦶',
        color: '#FCE8E8'
      },
      {
        word: 'Echar de menos',
        translations: {
          en: 'To miss someone',
          ar: 'يفتقد',
          uk: 'Сумувати за кимось',
          fr: 'Manquer à'
        },
        emoji: '🥺',
        color: '#FFF5F5'
      },
      {
        word: 'Dar la lata',
        translations: {
          en: 'To annoy',
          ar: 'يزعج',
          uk: 'Набридати',
          fr: 'Casser les pieds'
        },
        emoji: '🛢️',
        color: '#EDF2F7'
      },
      {
        word: 'Tomar el pelo',
        translations: {
          en: 'To pull someone\'s leg',
          ar: 'يمزح مع شخص',
          uk: 'Розв\'язувати язика',
          fr: 'Faire marcher'
        },
        emoji: '💇',
        color: '#F3E8FF'
      },
      {
        word: 'Echar una mano',
        translations: {
          en: 'To lend a hand',
          ar: 'يمد يد العون',
          uk: 'Допомогти',
          fr: 'Donner un coup de main'
        },
        emoji: '🤝',
        color: '#E2F3E7'
      },
      {
        word: 'Costar un ojo de la cara',
        translations: {
          en: 'To cost an arm and a leg',
          ar: 'يكلف الكثير',
          uk: 'Коштувати цілий статок',
          fr: 'Coûter les yeux de la tête'
        },
        emoji: '👁️',
        color: '#FCE8E8'
      },
      {
        word: 'Ir al grano',
        translations: {
          en: 'To get to the point',
          ar: 'الدخول في الموضوع',
          uk: 'Перейти до справи',
          fr: 'Aller droit au but'
        },
        emoji: '🌾',
        color: '#FFF4E5'
      },
      {
        word: 'Estar de mala leche',
        translations: {
          en: 'To be in a bad mood',
          ar: 'في مزاج سيئ',
          uk: 'Бути в поганому настрої',
          fr: 'Être de mauvaise humeur'
        },
        emoji: '🥛',
        color: '#EDF2F7'
      },
      {
        word: 'No pegar ojo',
        translations: {
          en: 'To not sleep a wink',
          ar: 'لم يغمض له جفن',
          uk: 'Не зімкнути очей',
          fr: 'Ne pas fermer l\'œil'
        },
        emoji: '😴',
        color: '#F3E8FF'
      },
      {
        word: 'Hacerse el sueco',
        translations: {
          en: 'To pretend to be deaf',
          ar: 'يتظاهر بالجهل',
          uk: 'Прикидатися дурнем',
          fr: 'Faire la sourde oreille'
        },
        emoji: '🇸🇪',
        color: '#FEFCBF'
      },
      {
        word: 'Tirar la toalla',
        translations: {
          en: 'To give up',
          ar: 'الاستسلام',
          uk: 'Здатися',
          fr: 'Jeter l\'éponge'
        },
        emoji: '🏳️',
        color: '#EDF2F7'
      },
      {
        word: 'Empezar de cero',
        translations: {
          en: 'To start from scratch',
          ar: 'البدء من الصفر',
          uk: 'Почати з нуля',
          fr: 'Partir de zéro'
        },
        emoji: '🔄',
        color: '#E2F3E7'
      },
      {
        word: 'Estar a dos velas',
        translations: {
          en: 'To be broke',
          ar: 'مفلس',
          uk: 'Бути без копійки',
          fr: 'Être fauché'
        },
        emoji: '🕯️',
        color: '#FFF4E5'
      },
      {
        word: 'Quedarse de piedra',
        translations: {
          en: 'To be stunned',
          ar: 'منبهر / مذهول',
          uk: 'Скам\'яніти',
          fr: 'Rester de marbre'
        },
        emoji: '🪨',
        color: '#EDF2F7'
      },
      {
        word: 'Hacer castillos en el aire',
        translations: {
          en: 'To build castles in the air',
          ar: 'بناء قلاع في الهواء',
          uk: 'Будувати повітряні замки',
          fr: 'Bâtir des châteaux en Espagne'
        },
        emoji: '🏰',
        color: '#E3EEF9'
      },
      {
        word: 'Estar con el agua al cuello',
        translations: {
          en: 'To be up to one\'s neck',
          ar: 'الماء يصل إلى عنقه (في ضائقة)',
          uk: 'Бути по шию в проблемах',
          fr: 'Avoir l\'eau au cou'
        },
        emoji: '💧',
        color: '#FCE8E8'
      },
      {
        word: 'Ver las orejas al lobo',
        translations: {
          en: 'To see the writing on the wall',
          ar: 'رؤية الخطر يلوح',
          uk: 'Відчути небезпеку',
          fr: 'Sentir le vent tourner'
        },
        emoji: '🐺',
        color: '#FCE8E8'
      },
      {
        word: 'Hablar por los codos',
        translations: {
          en: 'To talk too much',
          ar: 'يتحدث كثيراً',
          uk: 'Говорити без зупину',
          fr: 'Parler comme una bavarde'
        },
        emoji: '🗣️',
        color: '#E3EEF9'
      },
      {
        word: 'Llover a cántaros',
        translations: {
          en: 'To rain cats and dogs',
          ar: 'تمطر بغزارة',
          uk: 'Ллити як з відра',
          fr: 'Pleuvoir des cordes'
        },
        emoji: '🌧️',
        color: '#E3EEF9'
      },
      {
        word: 'Ser uña y carne',
        translations: {
          en: 'To be hand and glove',
          ar: 'مقربان جداً',
          uk: 'Бути як водою не розлити',
          fr: 'Être comme les deux doigts de la main'
        },
        emoji: '💅',
        color: '#FFF5F5'
      },
      {
        word: 'Ponerse las pilas',
        translations: {
          en: 'To get one\'s act together',
          ar: 'يشحذ همته',
          uk: 'Зібратися з силами',
          fr: 'Se secouer'
        },
        emoji: '🔋',
        color: '#E2F3E7'
      },
      {
        word: 'Tener la cabeza amueblada',
        translations: {
          en: 'To have a good head on one\'s shoulders',
          ar: 'لديه عقل راجح',
          uk: 'Мати голову на плечах',
          fr: 'Avoir la tête bien sur les épaules'
        },
        emoji: '🧠',
        color: '#FFF4E5'
      },
      {
        word: 'No tener pelos en la lengua',
        translations: {
          en: 'To speak plain truths / outspoken',
          ar: 'صريح لا يخشى لومة لائم',
          uk: 'Говорити відверто',
          fr: 'Ne pas avoir la langue dans sa poche'
        },
        emoji: '👅',
        color: '#EDF2F7'
      },
      {
        word: 'Dar gato por liebre',
        translations: {
          en: 'To cheat / rip off',
          ar: 'يغش في البيع',
          uk: 'Обдурити',
          fr: 'Arnaquer'
        },
        emoji: '🐱',
        color: '#FEFCBF'
      },
      {
        word: 'Estar hecho un flan',
        translations: {
          en: 'To be a nervous wreck',
          ar: 'يرتعد من الخوف',
          uk: 'Трястися як осиковий лист',
          fr: 'Trembler comme una feuille'
        },
        emoji: '🍮',
        color: '#FEFCBF'
      },
      {
        word: 'Hacer la vista gorda',
        translations: {
          en: 'To turn a blind eye',
          ar: 'يغض الطرف',
          uk: 'Дивитися крізь пальці',
          fr: 'Fermer les yeux sur'
        },
        emoji: '👁️',
        color: '#EDF2F7'
      },
      {
        word: 'Ser un trozo de pan',
        translations: {
          en: 'To be a good soul',
          ar: 'شخص طيب جداً',
          uk: 'Мати золоте серце',
          fr: 'Être une bonne pâte'
        },
        emoji: '🍞',
        color: '#FEFCBF'
      },
      {
        word: 'Buscar tres pies al gato',
        translations: {
          en: 'To look for trouble',
          ar: 'يبحث عن مشاكل دون داعي',
          uk: 'Ускладнювати прості речі',
          fr: 'Chercher la petite bête'
        },
        emoji: '🐱',
        color: '#EDF2F7'
      }
    ],
  },
  {
    id: 'medio-ambiente',
    name: 'El Medio Ambiente',
    emoji: '🌱',
    translations: { en: 'The Environment', ar: 'البيئة', uk: 'Довкілля', fr: "L'Environnement" },
    words: [
      {
        word: 'Reciclar',
        translations: {
          en: 'To recycle',
          ar: 'إعادة التدوir',
          uk: 'Переробляти',
          fr: 'Recycler'
        },
        emoji: '♻️',
        color: '#E2F3E7'
      },
      {
        word: 'La contaminación',
        translations: {
          en: 'Pollution',
          ar: 'التلوث',
          uk: 'Забруднення',
          fr: 'La pollution'
        },
        emoji: '🌫️',
        color: '#FFF4E5'
      },
      {
        word: 'El cambio climático',
        translations: {
          en: 'Climate change',
          ar: 'تغير المناخ',
          uk: 'Зміна клімату',
          fr: 'Le changement climatique'
        },
        emoji: '🌍',
        color: '#FFF5F5'
      },
      {
        word: 'Las energías renovables',
        translations: {
          en: 'Renewable energy',
          ar: 'الطاقة المتجددة',
          uk: 'Відновлювані джерела енергії',
          fr: 'Les energías renovables'
        },
        emoji: '☀️',
        color: '#FEFCBF'
      },
      {
        word: 'Proteger',
        translations: {
          en: 'To protect',
          ar: 'يحمي',
          uk: 'Захищати',
          fr: 'Protéger'
        },
        emoji: '🛡️',
        color: '#E2F3E7'
      },
      {
        word: 'La naturaleza',
        translations: {
          en: 'Nature',
          ar: 'الطبيعة',
          uk: 'Природа',
          fr: 'La nature'
        },
        emoji: '🌿',
        color: '#E2F3E7'
      },
      {
        word: 'El calentamiento global',
        translations: {
          en: 'Global warming',
          ar: 'الاحتباس الحراري',
          uk: 'Глобальне потепління',
          fr: 'Le réchauffement climatique'
        },
        emoji: '🥵',
        color: '#FCE8E8'
      },
      {
        word: 'Biodegradable',
        translations: {
          en: 'Biodegradable',
          ar: 'قابل للتحلل',
          uk: 'Біорозкладний',
          fr: 'Biodégradable'
        },
        emoji: '🍂',
        color: '#FEFCBF'
      },
      {
        word: 'El planeta',
        translations: {
          en: 'Planet',
          ar: 'كوكب',
          uk: 'Планета',
          fr: 'La planète'
        },
        emoji: '🪐',
        color: '#E3EEF9'
      },
      {
        word: 'La sequía',
        translations: {
          en: 'Drought',
          ar: 'الجفاف',
          uk: 'Посуха',
          fr: 'La sécheresse'
        },
        emoji: '🌵',
        color: '#FFF4E5'
      },
      {
        word: 'El bosque',
        translations: {
          en: 'Forest',
          ar: 'غابة',
          uk: 'Ліс',
          fr: 'La forêt'
        },
        emoji: '🌲',
        color: '#E2F3E7'
      },
      {
        word: 'Conservar',
        translations: {
          en: 'To conserve',
          ar: 'يحافظ على',
          uk: 'Зберігати',
          fr: 'Conserver'
        },
        emoji: '🏺',
        color: '#FEFCBF'
      },
      {
        word: 'La deforestación',
        translations: {
          en: 'Deforestation',
          ar: 'إزالة الغابات',
          uk: 'Вирубка лісів',
          fr: 'La déforestation'
        },
        emoji: '🪓',
        color: '#FCE8E8'
      },
      {
        word: 'El ecosistema',
        translations: {
          en: 'Ecosystem',
          ar: 'النظام البيئي',
          uk: 'Екосистема',
          fr: 'L\'écosystème'
        },
        emoji: '🌐',
        color: '#E3EEF9'
      },
      {
        word: 'El efecto invernadero',
        translations: {
          en: 'Greenhouse effect',
          ar: 'الاحتباس الحراري (الصوبة)',
          uk: 'Парниковий ефект',
          fr: 'L\'effet de serre'
        },
        emoji: '🏭',
        color: '#EDF2F7'
      },
      {
        word: 'La capa de ozono',
        translations: {
          en: 'Ozone layer',
          ar: 'طبقة الأوزون',
          uk: 'Озоновий шар',
          fr: 'La couche d\'ozone'
        },
        emoji: '🛡️',
        color: '#E3EEF9'
      },
      {
        word: 'Los residuos',
        translations: {
          en: 'Waste / Garbage',
          ar: 'النفايات',
          uk: 'Відходи',
          fr: 'Les déchets'
        },
        emoji: '🗑️',
        color: '#EDF2F7'
      },
      {
        word: 'La biodiversidad',
        translations: {
          en: 'Biodiversity',
          ar: 'التنوع البيولوجي',
          uk: 'Біорізноманіття',
          fr: 'La biodiversité'
        },
        emoji: '🦋',
        color: '#E2F3E7'
      },
      {
        word: 'La especie en peligro de extinción',
        translations: {
          en: 'Endangered species',
          ar: 'الأنواع المهددة بالانقراض',
          uk: 'Вид під загрозою зникнення',
          fr: 'Espèce en danger d\'extinction'
        },
        emoji: '🐼',
        color: '#FCE8E8'
      },
      {
        word: 'El vertedero',
        translations: {
          en: 'Landfill / Dump',
          ar: 'مكب النفايات',
          uk: 'Звалище',
          fr: 'La décharge'
        },
        emoji: '🗑️',
        color: '#EDF2F7'
      },
      {
        word: 'El panel solar',
        translations: {
          en: 'Solar panel',
          ar: 'لوحة شمسية',
          uk: 'Сонячна панель',
          fr: 'Le panneau solaire'
        },
        emoji: '☀️',
        color: '#FEFCBF'
      },
      {
        word: 'La energía eólica',
        translations: {
          en: 'Wind energy',
          ar: 'طاقة الرياح',
          uk: 'Вітрова енергія',
          fr: 'L\'énergie éolienne'
        },
        emoji: '🌬️',
        color: '#EBF8FF'
      },
      {
        word: 'El desastre natural',
        translations: {
          en: 'Natural disaster',
          ar: 'كارثة طبيعية',
          uk: 'Стихійне лихо',
          fr: 'La catastrophe naturelle'
        },
        emoji: '🌪️',
        color: '#FCE8E8'
      },
      {
        word: 'La inundación',
        translations: {
          en: 'Flood',
          ar: 'الفيضان',
          uk: 'Повінь',
          fr: 'L\'inondation'
        },
        emoji: '🌊',
        color: '#E3EEF9'
      },
      {
        word: 'Sostenible',
        translations: {
          en: 'Sustainable',
          ar: 'مستدام',
          uk: 'Сталий',
          fr: 'Durable'
        },
        emoji: '♻️',
        color: '#E2F3E7'
      },
      {
        word: 'La ecología',
        translations: {
          en: 'Ecology',
          ar: 'علم البيئة',
          uk: 'Екологія',
          fr: 'L\'écologie'
        },
        emoji: '🌿',
        color: '#E2F3E7'
      },
      {
        word: 'El recurso natural',
        translations: {
          en: 'Natural resource',
          ar: 'المورد الطبيعي',
          uk: 'Природний ресурс',
          fr: 'Ressource naturelle'
        },
        emoji: '🏔️',
        color: '#E2F3E7'
      },
      {
        word: 'Ahorrar agua',
        translations: {
          en: 'To save water',
          ar: 'توفير المياه',
          uk: 'Економити воду',
          fr: 'Économiser l\'eau'
        },
        emoji: '💧',
        color: '#E3EEF9'
      },
      {
        word: 'El abono orgánico',
        translations: {
          en: 'Organic compost',
          ar: 'السماد العضوي',
          uk: 'Органічне добриво',
          fr: 'Compost'
        },
        emoji: '🍂',
        color: '#FEFCBF'
      },
      {
        word: 'La huella de carbono',
        translations: {
          en: 'Carbon footprint',
          ar: 'البصمة الكربونية',
          uk: 'Вуглецевий слід',
          fr: 'L\'empreinte carbone'
        },
        emoji: '👣',
        color: '#EDF2F7'
      }
    ],
  },
  {
    id: 'trabajo-b1',
    name: 'El Mundo del Trabajo',
    emoji: '💼',
    translations: { en: 'World of Work', ar: 'عالم العمل', uk: 'Світ праці', fr: 'Le Monde du Travail' },
    words: [
      {
        word: 'El currículum',
        translations: {
          en: 'Resume / CV',
          ar: 'السيرة الذاتية',
          uk: 'Резюме',
          fr: 'Le CV'
        },
        emoji: '📄',
        color: '#E3EEF9'
      },
      {
        word: 'La entrevista de trabajo',
        translations: {
          en: 'Job interview',
          ar: 'مقابلة عمل',
          uk: 'Співбесіда',
          fr: 'L\'entretien d\'embauche'
        },
        emoji: '🤝',
        color: '#EDF2F7'
      },
      {
        word: 'El salario',
        translations: {
          en: 'Salary',
          ar: 'الراتب',
          uk: 'Зарплата',
          fr: 'Le salaire'
        },
        emoji: '💵',
        color: '#FFF4E5'
      },
      {
        word: 'El jefe / La jefa',
        translations: {
          en: 'Boss',
          ar: 'المدير / المديرية',
          uk: 'Бос / начальник',
          fr: 'Le chef / la chef'
        },
        emoji: '💼',
        color: '#EBF8FF'
      },
      {
        word: 'El desempleo',
        translations: {
          en: 'Unemployment',
          ar: 'البطالة',
          uk: 'Безробіття',
          fr: 'Le chômage'
        },
        emoji: '📉',
        color: '#FCE8E8'
      },
      {
        word: 'El colega',
        translations: {
          en: 'Colleague',
          ar: 'زميل العمل',
          uk: 'Колега',
          fr: 'Le collègue'
        },
        emoji: '🧑‍💼',
        color: '#EDF2F7'
      },
      {
        word: 'El contrato',
        translations: {
          en: 'Contract',
          ar: 'العقد',
          uk: 'Контракт',
          fr: 'Le contrat'
        },
        emoji: '📝',
        color: '#FEFCBF'
      },
      {
        word: 'La empresa',
        translations: {
          en: 'Company',
          ar: 'الشركة',
          uk: 'Компанія',
          fr: 'L\'entreprise'
        },
        emoji: '🏢',
        color: '#EBF8FF'
      },
      {
        word: 'La jubilación',
        translations: {
          en: 'Retirement',
          ar: 'التقاعد',
          uk: 'Пенсія',
          fr: 'La retraite'
        },
        emoji: '👴',
        color: '#FEFCBF'
      },
      {
        word: 'El horario',
        translations: {
          en: 'Schedule',
          ar: 'جدول مواعيد',
          uk: 'Розклад',
          fr: 'L\'horaire'
        },
        emoji: '⏰',
        color: '#E3EEF9'
      },
      {
        word: 'El empleado',
        translations: {
          en: 'Employee',
          ar: 'موظف',
          uk: 'Працівник',
          fr: 'L\'employé'
        },
        emoji: '🧑‍🔧',
        color: '#E2F3E7'
      },
      {
        word: 'Contratar',
        translations: {
          en: 'To hire',
          ar: 'توظيف',
          uk: 'Наймати',
          fr: 'Recruter'
        },
        emoji: '✍️',
        color: '#E2F3E7'
      },
      {
        word: 'Despedir',
        translations: {
          en: 'To fire / dismiss',
          ar: 'فصل من العمل',
          uk: 'Звільняти',
          fr: 'Licencier'
        },
        emoji: '🚪',
        color: '#FCE8E8'
      },
      {
        word: 'El puesto de trabajo',
        translations: {
          en: 'Job position',
          ar: 'وظيفة شاغرة',
          uk: 'Посада',
          fr: 'Poste de travail'
        },
        emoji: '🪑',
        color: '#EDF2F7'
      },
      {
        word: 'La jornada laboral',
        translations: {
          en: 'Workday',
          ar: 'يوم العمل',
          uk: 'Робочий день',
          fr: 'Journée de travail'
        },
        emoji: '📅',
        color: '#EDF2F7'
      },
      {
        word: 'El ascenso',
        translations: {
          en: 'Promotion',
          ar: 'ترقية',
          uk: 'Підвищення',
          fr: 'Promotion'
        },
        emoji: '📈',
        color: '#E2F3E7'
      },
      {
        word: 'La experiencia laboral',
        translations: {
          en: 'Work experience',
          ar: 'الخبرة المهنية',
          uk: 'Досвід роботи',
          fr: 'Expérience professionnelle'
        },
        emoji: '💼',
        color: '#E3EEF9'
      },
      {
        word: 'El sueldo mínimo',
        translations: {
          en: 'Minimum wage',
          ar: 'الحد الأدنى للأجور',
          uk: 'Мінімальна зарплата',
          fr: 'Salaire minimum'
        },
        emoji: '🪙',
        color: '#FFF4E5'
      },
      {
        word: 'La huelga',
        translations: {
          en: 'Strike',
          ar: 'إضراب',
          uk: 'Страйк',
          fr: 'Grève'
        },
        emoji: '🪧',
        color: '#FCE8E8'
      },
      {
        word: 'El sindicato',
        translations: {
          en: 'Union',
          ar: 'نقابة العمال',
          uk: 'Профспілка',
          fr: 'Syndicat'
        },
        emoji: '🤝',
        color: '#EDF2F7'
      },
      {
        word: 'Trabajar por cuenta propia',
        translations: {
          en: 'To be self-employed',
          ar: 'العمل الحر',
          uk: 'Працювати на себе',
          fr: 'Travailler à son compte'
        },
        emoji: '🧑‍💻',
        color: '#EBF8FF'
      },
      {
        word: 'Las horas extraordinarias',
        translations: {
          en: 'Overtime hours',
          ar: 'ساعات عمل إضافية',
          uk: 'Понаднормові години',
          fr: 'Heures supplémentaires'
        },
        emoji: '⏰',
        color: '#E3EEF9'
      },
      {
        word: 'La baja laboral',
        translations: {
          en: 'Sick leave',
          ar: 'إجازة مرضية',
          uk: 'Лікарняний',
          fr: 'Congé maladie'
        },
        emoji: '🩺',
        color: '#FCE8E8'
      },
      {
        word: 'La carta de presentación',
        translations: {
          en: 'Cover letter',
          ar: 'رسالة تغطية',
          uk: 'Супровідний лист',
          fr: 'Lettre de motivation'
        },
        emoji: '✉️',
        color: '#E3EEF9'
      },
      {
        word: 'El departamento de Recursos Humanos',
        translations: {
          en: 'HR Department',
          ar: 'قسم الموارد البشرية',
          uk: 'Відділ кадрів',
          fr: 'Ressources Humaines'
        },
        emoji: '🧑‍🤝‍🧑',
        color: '#EDF2F7'
      },
      {
        word: 'Hacer prácticas',
        translations: {
          en: 'To do an internship',
          ar: 'يقوم بفترة تدريب',
          uk: 'Проходити практику',
          fr: 'Faire un stage'
        },
        emoji: '🎓',
        color: '#F3E8FF'
      },
      {
        word: 'El mercado laboral',
        translations: {
          en: 'Labor market',
          ar: 'سوق العمل',
          uk: 'Ринок праці',
          fr: 'Marché du travail'
        },
        emoji: '📈',
        color: '#EDF2F7'
      },
      {
        word: 'El ambiente de trabajo',
        translations: {
          en: 'Work environment',
          ar: 'بيئة العمل',
          uk: 'Робоча атмосфера',
          fr: 'Ambiance de travail'
        },
        emoji: '🏢',
        color: '#E2F3E7'
      },
      {
        word: 'La formación',
        translations: {
          en: 'Training / Education',
          ar: 'التدريب والتعليم',
          uk: 'Навчання / тренінг',
          fr: 'Formation'
        },
        emoji: '📚',
        color: '#F3E8FF'
      },
      {
        word: 'La oficina',
        translations: {
          en: 'Office',
          ar: 'مكتب',
          uk: 'Офіс',
          fr: 'Bureau'
        },
        emoji: '🏢',
        color: '#EBF8FF'
      }
    ],
  },
  {
    id: 'tecnologia',
    name: 'Tecnología y Redes Sociales',
    emoji: '💻',
    translations: { en: 'Technology & Social Media', ar: 'التكنولوجيا ووسائل التواصل الاجتماعي', uk: 'Технології та соціальні мережі', fr: 'Tecnologie et Réseaux Sociaux' },
    words: [
      {
        word: 'Descargar',
        translations: {
          en: 'To download',
          ar: 'تحميل',
          uk: 'Завантажити',
          fr: 'Télécharger'
        },
        emoji: '📥',
        color: '#EBF8FF'
      },
      {
        word: 'Compartir',
        translations: {
          en: 'To share',
          ar: 'مشاركة',
          uk: 'Поділитися',
          fr: 'Partager'
        },
        emoji: '📤',
        color: '#E2F3E7'
      },
      {
        word: 'Las redes sociales',
        translations: {
          en: 'Social media',
          ar: 'وسائل التواصل الاجتماعي',
          uk: 'Соціальні мережі',
          fr: 'Les réseaux sociaux'
        },
        emoji: '📱',
        color: '#F3E8FF'
      },
      {
        word: 'La contraseña',
        translations: {
          en: 'Password',
          ar: 'كلمة المرور',
          uk: 'Пароль',
          fr: 'Le mot de passe'
        },
        emoji: '🔑',
        color: '#FEFCBF'
      },
      {
        word: 'La conexión',
        translations: {
          en: 'Connection',
          ar: 'الاتصال',
          uk: 'Зв\'язок',
          fr: 'La connexion'
        },
        emoji: '📶',
        color: '#E3EEF9'
      },
      {
        word: 'El ordenador',
        translations: {
          en: 'Computer',
          ar: 'حاسوب',
          uk: 'Комп\'ютер',
          fr: 'L\'ordinateur'
        },
        emoji: '💻',
        color: '#EBF8FF'
      },
      {
        word: 'El archivo',
        translations: {
          en: 'File',
          ar: 'ملف',
          uk: 'Файл',
          fr: 'Le fichier'
        },
        emoji: '📁',
        color: '#FEFCBF'
      },
      {
        word: 'La página web',
        translations: {
          en: 'Webpage',
          ar: 'صفحة ويب',
          uk: 'Веб-сторінка',
          fr: 'La page web'
        },
        emoji: '🌐',
        color: '#EBF8FF'
      },
      {
        word: 'El enlace',
        translations: {
          en: 'Link',
          ar: 'رابط',
          uk: 'Посилання',
          fr: 'Le lien'
        },
        emoji: '🔗',
        color: '#E3EEF9'
      },
      {
        word: 'El virus',
        translations: {
          en: 'Virus',
          ar: 'فيروس',
          uk: 'Вірус',
          fr: 'Le virus'
        },
        emoji: '🦠',
        color: '#FCE8E8'
      },
      {
        word: 'Subir',
        translations: {
          en: 'To upload',
          ar: 'رفع',
          uk: 'Завантажувати на сервер',
          fr: 'Téléverser'
        },
        emoji: '📤',
        color: '#E2F3E7'
      },
      {
        word: 'Chatear',
        translations: {
          en: 'To chat',
          ar: 'دردشة',
          uk: 'Спілкуватися в чаті',
          fr: 'Clavarder'
        },
        emoji: '💬',
        color: '#F3E8FF'
      },
      {
        word: 'El correo electrónico',
        translations: {
          en: 'Email',
          ar: 'البريد الإلكتروني',
          uk: 'Електронна пошта',
          fr: 'Courriel'
        },
        emoji: '✉️',
        color: '#E3EEF9'
      },
      {
        word: 'El navegador',
        translations: {
          en: 'Browser',
          ar: 'متصفح الإنترنت',
          uk: 'Браузер',
          fr: 'Navigateur'
        },
        emoji: '🧭',
        color: '#FEFCBF'
      },
      {
        word: 'La base de datos',
        translations: {
          en: 'Database',
          ar: 'قاعدة بيانات',
          uk: 'База даних',
          fr: 'Base de données'
        },
        emoji: '🗄️',
        color: '#EDF2F7'
      },
      {
        word: 'El dispositivo',
        translations: {
          en: 'Device',
          ar: 'جهاز',
          uk: 'Пристрій',
          fr: 'Dispositif'
        },
        emoji: '📱',
        color: '#EBF8FF'
      },
      {
        word: 'La pantalla',
        translations: {
          en: 'Screen',
          ar: 'شاشة',
          uk: 'Екран',
          fr: 'Écran'
        },
        emoji: '📺',
        color: '#EDF2F7'
      },
      {
        word: 'El teclado',
        translations: {
          en: 'Keyboard',
          ar: 'لوحة المفاتيح',
          uk: 'Клавіатура',
          fr: 'Clavier'
        },
        emoji: '⌨️',
        color: '#EDF2F7'
      },
      {
        word: 'El ratón de ordenador',
        translations: {
          en: 'Computer mouse',
          ar: 'فأرة الحاسوب',
          uk: 'Мишка',
          fr: 'Souris d\'ordinateur'
        },
        emoji: '🖱️',
        color: '#EDF2F7'
      },
      {
        word: 'La nube',
        translations: {
          en: 'Cloud storage',
          ar: 'التخزين السحابي',
          uk: 'Хмара (сховище)',
          fr: 'Le cloud'
        },
        emoji: '☁️',
        color: '#E3EEF9'
      },
      {
        word: 'La aplicación',
        translations: {
          en: 'App',
          ar: 'تطبيق',
          uk: 'Додаток',
          fr: 'Application'
        },
        emoji: '📱',
        color: '#EBF8FF'
      },
      {
        word: 'Instalar',
        translations: {
          en: 'To install',
          ar: 'تثبيت',
          uk: 'Встановити',
          fr: 'Installer'
        },
        emoji: '⚙️',
        color: '#E2F3E7'
      },
      {
        word: 'Actualizar',
        translations: {
          en: 'To update',
          ar: 'تحديث',
          uk: 'Оновити',
          fr: 'Mettre à jour'
        },
        emoji: '🔄',
        color: '#E2F3E7'
      },
      {
        word: 'Borrar / Eliminar',
        translations: {
          en: 'To delete',
          ar: 'حذف',
          uk: 'Видалити',
          fr: 'Supprimer'
        },
        emoji: '🗑️',
        color: '#FCE8E8'
      },
      {
        word: 'El programador',
        translations: {
          en: 'Programmer',
          ar: 'مبرمج',
          uk: 'Програміст',
          fr: 'Programmeur'
        },
        emoji: '🧑‍💻',
        color: '#EBF8FF'
      },
      {
        word: 'La inteligencia artificial',
        translations: {
          en: 'Artificial intelligence',
          ar: 'الذكاء الاصطناعي',
          uk: 'Штучний інтелект',
          fr: 'Intelligence artificielle'
        },
        emoji: '🤖',
        color: '#F3E8FF'
      },
      {
        word: 'El software',
        translations: {
          en: 'Software',
          ar: 'برمجيات',
          uk: 'Програмне забезпечення',
          fr: 'Logiciel'
        },
        emoji: '💿',
        color: '#EDF2F7'
      },
      {
        word: 'La red wifi',
        translations: {
          en: 'Wi-Fi network',
          ar: 'شبكة واي فاي',
          uk: 'Мережа Wi-Fi',
          fr: 'Réseau Wi-Fi'
        },
        emoji: '📶',
        color: '#E3EEF9'
      },
      {
        word: 'El almacenamiento',
        translations: {
          en: 'Storage',
          ar: 'سعة التخزين',
          uk: 'Пам\'ять / сховище',
          fr: 'Stockage'
        },
        emoji: '💾',
        color: '#EDF2F7'
      },
      {
        word: 'Hacer una copia de seguridad',
        translations: {
          en: 'To back up',
          ar: 'نسخ احتياطي',
          uk: 'Зробити резервну копію',
          fr: 'Sauvegarder'
        },
        emoji: '💾',
        color: '#E2F3E7'
      }
    ],
  },
  {
    id: 'salud-bienestar',
    name: 'Salud y Bienestar',
    emoji: '🧘',
    translations: { en: 'Health & Wellness', ar: 'الصحة والعافية', uk: "Здоров'я та благополуччя", fr: 'Santé et Bien-être' },
    words: [
      {
        word: 'El síntoma',
        translations: {
          en: 'Symptom',
          ar: 'عرض مرض',
          uk: 'Симптом',
          fr: 'Le symptôme'
        },
        emoji: '🤒',
        color: '#FFF4E5'
      },
      {
        word: 'La receta',
        translations: {
          en: 'Prescription',
          ar: 'وصفة طبية',
          uk: 'Рецепт',
          fr: 'L\'ordonnance'
        },
        emoji: '📝',
        color: '#FEFCBF'
      },
      {
        word: 'El tratamiento',
        translations: {
          en: 'Treatment',
          ar: 'العلاج',
          uk: 'Лікування',
          fr: 'Le traitement'
        },
        emoji: '🩺',
        color: '#E2F3E7'
      },
      {
        word: 'La alimentación',
        translations: {
          en: 'Diet / Nutrition',
          ar: 'التغذية',
          uk: 'Харчування',
          fr: 'L\'alimentation'
        },
        emoji: '🍏',
        color: '#E2F3E7'
      },
      {
        word: 'El estrés',
        translations: {
          en: 'Stress',
          ar: 'الضغط العصبي',
          uk: 'Стрес',
          fr: 'Le stress'
        },
        emoji: '🤯',
        color: '#FCE8E8'
      },
      {
        word: 'El ejercicio',
        translations: {
          en: 'Exercise',
          ar: 'تمرین',
          uk: 'Вправа',
          fr: 'L\'exercice'
        },
        emoji: '🏃',
        color: '#EBF8FF'
      },
      {
        word: 'Prevenir',
        translations: {
          en: 'To prevent',
          ar: 'يمنع',
          uk: 'Запобігати',
          fr: 'Prévenir'
        },
        emoji: '🛡️',
        color: '#E2F3E7'
      },
      {
        word: 'La salud',
        translations: {
          en: 'Health',
          ar: 'الصحة',
          uk: 'Здоров\'я',
          fr: 'La santé'
        },
        emoji: '🩺',
        color: '#E2F3E7'
      },
      {
        word: 'El bienestar',
        translations: {
          en: 'Wellness',
          ar: 'العافية',
          uk: 'Благополуччя',
          fr: 'Le bien-être'
        },
        emoji: '🧘',
        color: '#E2F3E7'
      },
      {
        word: 'El descanso',
        translations: {
          en: 'Rest',
          ar: 'الراحة',
          uk: 'Відпочинок',
          fr: 'Le repos'
        },
        emoji: '🛌',
        color: '#E3EEF9'
      },
      {
        word: 'La enfermedad',
        translations: {
          en: 'Illness',
          ar: 'المرض',
          uk: 'Хвороба',
          fr: 'La maladie'
        },
        emoji: '🦠',
        color: '#FCE8E8'
      },
      {
        word: 'Curar',
        translations: {
          en: 'To cure',
          ar: 'يعالج / يشفي',
          uk: 'Лікувати',
          fr: 'Guérir'
        },
        emoji: '❤️',
        color: '#E2F3E7'
      },
      {
        word: 'El dolor de cabeza',
        translations: {
          en: 'Headache',
          ar: 'صداع',
          uk: 'Головний біль',
          fr: 'Mal de tête'
        },
        emoji: '🤕',
        color: '#FFF4E5'
      },
      {
        word: 'La fiebre',
        translations: {
          en: 'Fever',
          ar: 'حمى',
          uk: 'Лихоманка',
          fr: 'Fièvre'
        },
        emoji: '🌡️',
        color: '#FFF4E5'
      },
      {
        word: 'El resfriado',
        translations: {
          en: 'Cold',
          ar: 'زكام',
          uk: 'Застуда',
          fr: 'Rhume'
        },
        emoji: '🤧',
        color: '#FFF4E5'
      },
      {
        word: 'La herida',
        translations: {
          en: 'Wound / Injury',
          ar: 'جرح',
          uk: 'Рана',
          fr: 'Blessure'
        },
        emoji: '🩹',
        color: '#FCE8E8'
      },
      {
        word: 'El jarabe',
        translations: {
          en: 'Syrup',
          ar: 'شراب دواء',
          uk: 'Сироп',
          fr: 'Sirop'
        },
        emoji: '🧪',
        color: '#FEFCBF'
      },
      {
        word: 'Las pastillas',
        translations: {
          en: 'Pills',
          ar: 'حبوب دواء',
          uk: 'Таблетки',
          fr: 'Comprimés'
        },
        emoji: '💊',
        color: '#FCE8E8'
      },
      {
        word: 'La consulta médica',
        translations: {
          en: 'Doctor\'s appointment',
          ar: 'عيادة الطبيب',
          uk: 'Медична консультація',
          fr: 'Consultation médicale'
        },
        emoji: '🏥',
        color: '#EBF8FF'
      },
      {
        word: 'La salud mental',
        translations: {
          en: 'Mental health',
          ar: 'الصحة النفسية',
          uk: 'Психічне здоров\'я',
          fr: 'Santé mentale'
        },
        emoji: '🧠',
        color: '#FFF5F5'
      },
      {
        word: 'La relajación',
        translations: {
          en: 'Relaxation',
          ar: 'الاسترخاء',
          uk: 'Розслаблення',
          fr: 'Relaxation'
        },
        emoji: '🧘',
        color: '#F3E8FF'
      },
      {
        word: 'El peso corporal',
        translations: {
          en: 'Body weight',
          ar: 'وزن الجسم',
          uk: 'Вага тіла',
          fr: 'Poids corporel'
        },
        emoji: '⚖️',
        color: '#EDF2F7'
      },
      {
        word: 'El análisis de sangre',
        translations: {
          en: 'Blood test',
          ar: 'تحليل دم',
          uk: 'Аналіз крові',
          fr: 'Analyse de sang'
        },
        emoji: '🩸',
        color: '#FCE8E8'
      },
      {
        word: 'La alergia',
        translations: {
          en: 'Allergy',
          ar: 'حساسية',
          uk: 'Алергія',
          fr: 'Allergie'
        },
        emoji: '🤧',
        color: '#FFF4E5'
      },
      {
        word: 'El cirujano',
        translations: {
          en: 'Surgeon',
          ar: 'جراح',
          uk: 'Хірург',
          fr: 'Chirurgien'
        },
        emoji: '🧑‍⚕️',
        color: '#E2F3E7'
      },
      {
        word: 'La vacuna',
        translations: {
          en: 'Vaccine',
          ar: 'لقاح',
          uk: 'Вакцина',
          fr: 'Vaccin'
        },
        emoji: '💉',
        color: '#EBF8FF'
      },
      {
        word: 'La ambulancia',
        translations: {
          en: 'Ambulance',
          ar: 'سيارة إسعاف',
          uk: 'Швидка допомога',
          fr: 'Ambulance'
        },
        emoji: '🚑',
        color: '#FCE8E8'
      },
      {
        word: 'Los primeros auxilios',
        translations: {
          en: 'First aid',
          ar: 'الإسعافات الأولية',
          uk: 'Перша допомога',
          fr: 'Premiers secours'
        },
        emoji: '🩹',
        color: '#E2F3E7'
      },
      {
        word: 'El estilo de vida',
        translations: {
          en: 'Lifestyle',
          ar: 'نمط الحياة',
          uk: 'Спосіб життя',
          fr: 'Mode de vie'
        },
        emoji: '🌱',
        color: '#E2F3E7'
      },
      {
        word: 'La terapia',
        translations: {
          en: 'Therapy',
          ar: 'العلاج النفسي',
          uk: 'Терапія',
          fr: 'Thérapie'
        },
        emoji: '🗣️',
        color: '#F3E8FF'
      }
    ],
  },
  {
    id: 'ciudad-servicios',
    name: 'La Ciudad y Servicios',
    emoji: '🏙️',
    translations: { en: 'The City & Services', ar: 'المدينة والخدمات', uk: 'Місто та послуги', fr: 'La Ville et les Services' },
    words: [
      {
        word: 'El ayuntamiento',
        translations: {
          en: 'City hall',
          ar: 'البلدية',
          uk: 'Мерія',
          fr: 'La mairie'
        },
        emoji: '🏢',
        color: '#EDF2F7'
      },
      {
        word: 'La biblioteca',
        translations: {
          en: 'Library',
          ar: 'المكتبة',
          uk: 'Бібліотека',
          fr: 'La bibliothèque'
        },
        emoji: '📚',
        color: '#F3E8FF'
      },
      {
        word: 'El transporte público',
        translations: {
          en: 'Public transport',
          ar: 'وسائل النقل العام',
          uk: 'Громадський транспорт',
          fr: 'Le transport public'
        },
        emoji: '🚌',
        color: '#FFF5F5'
      },
      {
        word: 'El barrio',
        translations: {
          en: 'Neighborhood',
          ar: 'الحي',
          uk: 'Район',
          fr: 'Le quartier'
        },
        emoji: '🏡',
        color: '#E2F3E7'
      },
      {
        word: 'La comisaría',
        translations: {
          en: 'Police station',
          ar: 'مركز الشرطة',
          uk: 'Поліцейська дільниця',
          fr: 'Le commissariat'
        },
        emoji: '👮',
        color: '#E3EEF9'
      },
      {
        word: 'El ciudadano',
        translations: {
          en: 'Citizen',
          ar: 'المواطن',
          uk: 'Громадянин',
          fr: 'Le citoyen'
        },
        emoji: '🧑',
        color: '#EDF2F7'
      },
      {
        word: 'El servicio',
        translations: {
          en: 'Service',
          ar: 'الخدمة',
          uk: 'Послуга / сервіс',
          fr: 'Le service'
        },
        emoji: '⚙️',
        color: '#EDF2F7'
      },
      {
        word: 'La calle',
        translations: {
          en: 'Street',
          ar: 'الشارع',
          uk: 'Вулиця',
          fr: 'La rue'
        },
        emoji: '🛣️',
        color: '#EDF2F7'
      },
      {
        word: 'El parque',
        translations: {
          en: 'Park',
          ar: 'الحديقة العامة',
          uk: 'Парк',
          fr: 'Le parc'
        },
        emoji: '🌳',
        color: '#E2F3E7'
      },
      {
        word: 'El hospital',
        translations: {
          en: 'Hospital',
          ar: 'المستشفى',
          uk: 'Лікарня',
          fr: 'L\'hôpital'
        },
        emoji: '🏥',
        color: '#E2F3E7'
      },
      {
        word: 'La oficina de correos',
        translations: {
          en: 'Post office',
          ar: 'مكتب البريد',
          uk: 'Пошта',
          fr: 'La poste'
        },
        emoji: '✉️',
        color: '#E3EEF9'
      },
      {
        word: 'El semáforo',
        translations: {
          en: 'Traffic light',
          ar: 'إشارة المرور',
          uk: 'Світлофор',
          fr: 'Le semaphore'
        },
        emoji: '🚦',
        color: '#EDF2F7'
      },
      {
        word: 'El centro comercial',
        translations: {
          en: 'Shopping mall',
          ar: 'المركز التجاري',
          uk: 'Торговий центр',
          fr: 'Centre commercial'
        },
        emoji: '🛍️',
        color: '#EBF8FF'
      },
      {
        word: 'La estación de bomberos',
        translations: {
          en: 'Fire station',
          ar: 'محطة الإطفاء',
          uk: 'Пожежна частина',
          fr: 'Caserne de pompiers'
        },
        emoji: '🚒',
        color: '#FCE8E8'
      },
      {
        word: 'La acera',
        translations: {
          en: 'Sidewalk',
          ar: 'الرصيف',
          uk: 'Тротуар',
          fr: 'Le trottoir'
        },
        emoji: '🚶',
        color: '#EDF2F7'
      },
      {
        word: 'El contenedor de basura',
        translations: {
          en: 'Garbage bin',
          ar: 'حاوية القمامة',
          uk: 'Сміттєвий бак',
          fr: 'Poubelle publique'
        },
        emoji: '🗑️',
        color: '#EDF2F7'
      },
      {
        word: 'La oficina de empleo',
        translations: {
          en: 'Employment office',
          ar: 'مكتب العمل',
          uk: 'Центр зайнятості',
          fr: 'Pôle emploi'
        },
        emoji: '💼',
        color: '#EBF8FF'
      },
      {
        word: 'El centro de salud',
        translations: {
          en: 'Health center',
          ar: 'المركز الصحي',
          uk: 'Поліклініка',
          fr: 'Centre de santé'
        },
        emoji: '🩺',
        color: '#E2F3E7'
      },
      {
        word: 'El alumbrado público',
        translations: {
          en: 'Street lighting',
          ar: 'إضاءة الشوارع',
          uk: 'Вуличне освітлення',
          fr: 'Éclairage public'
        },
        emoji: '💡',
        color: '#FEFCBF'
      },
      {
        word: 'Los servicios de limpieza',
        translations: {
          en: 'Cleaning services',
          ar: 'خدمات النظافة',
          uk: 'Комунальні служби прибирання',
          fr: 'Services de nettoyage'
        },
        emoji: '🧹',
        color: '#EDF2F7'
      },
      {
        word: 'La parada de metro',
        translations: {
          en: 'Metro station',
          ar: 'محطة المترو',
          uk: 'Станція метро',
          fr: 'Station de métro'
        },
        emoji: '🚇',
        color: '#E2F3E7'
      },
      {
        word: 'La zona peatonal',
        translations: {
          en: 'Pedestrian zone',
          ar: 'منطقة للمشاة',
          uk: 'Пішохідна зона',
          fr: 'Zone piétonne'
        },
        emoji: '🚸',
        color: '#EDF2F7'
      },
      {
        word: 'El aparcamiento',
        translations: {
          en: 'Parking',
          ar: 'موقف سيارات',
          uk: 'Парковка',
          fr: 'Parking'
        },
        emoji: '🅿️',
        color: '#E3EEF9'
      },
      {
        word: 'La oficina de empadronamiento',
        translations: {
          en: 'Registry office',
          ar: 'مكتب السجل المدني',
          uk: 'Офіс реєстрації мешканців',
          fr: 'Bureau d\'enregistrement'
        },
        emoji: '📝',
        color: '#E3EEF9'
      },
      {
        word: 'La seguridad ciudadana',
        translations: {
          en: 'Public security',
          ar: 'الأمن العام للمواطنين',
          uk: 'Громадська безпека',
          fr: 'Sécurité publique'
        },
        emoji: '👮',
        color: '#E3EEF9'
      },
      {
        word: 'El carril bici',
        translations: {
          en: 'Bike lane',
          ar: 'مسار الدراجات',
          uk: 'Велодоріжка',
          fr: 'Piste cyclable'
        },
        emoji: '🚲',
        color: '#E2F3E7'
      },
      {
        word: 'El alcantarillado',
        translations: {
          en: 'Sewer system',
          ar: 'شبكة الصرف الصحي',
          uk: 'Каналізація',
          fr: 'Égouts'
        },
        emoji: '🫗',
        color: '#EDF2F7'
      },
      {
        word: 'El polideportivo',
        translations: {
          en: 'Sports center',
          ar: 'المركز الرياضي',
          uk: 'Спортивний комплекс',
          fr: 'Complexe sportif'
        },
        emoji: '🏃',
        color: '#EBF8FF'
      },
      {
        word: 'El centro cívico',
        translations: {
          en: 'Community center',
          ar: 'المركز الثقافي والاجتماعي',
          uk: 'Громадський центр',
          fr: 'Centre civique'
        },
        emoji: '🏛️',
        color: '#EDF2F7'
      },
      {
        word: 'La administración pública',
        translations: {
          en: 'Public administration',
          ar: 'الإدارة العامة',
          uk: 'Державне управління',
          fr: 'Administration publique'
        },
        emoji: '🏛️',
        color: '#E3EEF9'
      }
    ],
  },
  {
    id: 'arte-cultura',
    name: 'Arte y Cultura',
    emoji: '🖼️',
    translations: { en: 'Art & Culture', ar: 'الفن والثقافة', uk: 'Мистецтво та культура', fr: 'Art et Culture' },
    words: [
      {
        word: 'El museo',
        translations: {
          en: 'Museum',
          ar: 'المتحف',
          uk: 'Музей',
          fr: 'Le musée'
        },
        emoji: '🏛️',
        color: '#E3EEF9'
      },
      {
        word: 'La obra de arte',
        translations: {
          en: 'Artwork',
          ar: 'عمل فني',
          uk: 'Вибір мистецтва',
          fr: 'L\'œuvre d\'art'
        },
        emoji: '🎨',
        color: '#FFF5F5'
      },
      {
        word: 'El concierto',
        translations: {
          en: 'Concert',
          ar: 'حفل موسيقي',
          uk: 'Концерт',
          fr: 'Le concert'
        },
        emoji: '🎵',
        color: '#F3E8FF'
      },
      {
        word: 'El teatro',
        translations: {
          en: 'Theater',
          ar: 'المسرح',
          uk: 'Театр',
          fr: 'Le théâtre'
        },
        emoji: '🎭',
        color: '#FFF5F5'
      },
      {
        word: 'La literatura',
        translations: {
          en: 'Literature',
          ar: 'الأدب',
          uk: 'Література',
          fr: 'La littérature'
        },
        emoji: '📚',
        color: '#FEFCBF'
      },
      {
        word: 'El artista',
        translations: {
          en: 'Artist',
          ar: 'الفنان',
          uk: 'Художник / митець',
          fr: 'L\'artiste'
        },
        emoji: '🧑‍🎨',
        color: '#FFF5F5'
      },
      {
        word: 'La cultura',
        translations: {
          en: 'Culture',
          ar: 'الثقافة',
          uk: 'Культура',
          fr: 'La culture'
        },
        emoji: '🌍',
        color: '#E2F3E7'
      },
      {
        word: 'La música',
        translations: {
          en: 'Music',
          ar: 'الموسيقى',
          uk: 'Музика',
          fr: 'La musique'
        },
        emoji: '🎶',
        color: '#F3E8FF'
      },
      {
        word: 'El cine',
        translations: {
          en: 'Cinema',
          ar: 'السينما',
          uk: 'Кіно',
          fr: 'Le cinéma'
        },
        emoji: '🎬',
        color: '#EDF2F7'
      },
      {
        word: 'El cuadro',
        translations: {
          en: 'Painting',
          ar: 'اللوحة',
          uk: 'Картина',
          fr: 'Le tableau'
        },
        emoji: '🖼️',
        color: '#FFF5F5'
      },
      {
        word: 'La escultura',
        translations: {
          en: 'Sculpture',
          ar: 'التمثال / النحت',
          uk: 'Скульптура',
          fr: 'La sculpture'
        },
        emoji: '🗿',
        color: '#EDF2F7'
      },
      {
        word: 'El festival',
        translations: {
          en: 'Festival',
          ar: 'المهرجان',
          uk: 'Фестиваль',
          fr: 'Le festival'
        },
        emoji: '🎉',
        color: '#F3E8FF'
      },
      {
        word: 'La poesía',
        translations: {
          en: 'Poetry',
          ar: 'الشعر (الأدبي)',
          uk: 'Поезія',
          fr: 'La poésie'
        },
        emoji: '📜',
        color: '#FEFCBF'
      },
      {
        word: 'El actor / La actriz',
        translations: {
          en: 'Actor / Actress',
          ar: 'الممثل / الممثلة',
          uk: 'Актор / акторка',
          fr: 'L\'acteur / l\'actrice'
        },
        emoji: '🎭',
        color: '#FFF5F5'
      },
      {
        word: 'El director de cine',
        translations: {
          en: 'Director',
          ar: 'مخرج الأفلام',
          uk: 'Кінорежисер',
          fr: 'Le réalisateur'
        },
        emoji: '🎬',
        color: '#EDF2F7'
      },
      {
        word: 'La exposición',
        translations: {
          en: 'Exhibition',
          ar: 'المعرض',
          uk: 'Виставка',
          fr: 'L\'exposition'
        },
        emoji: '🖼️',
        color: '#FFF5F5'
      },
      {
        word: 'El patrimonio cultural',
        translations: {
          en: 'Cultural heritage',
          ar: 'التراث الثقافي',
          uk: 'Культурна спадщина',
          fr: 'Patrimoine culturel'
        },
        emoji: '🏛️',
        color: '#E2F3E7'
      },
      {
        word: 'La arquitectura',
        translations: {
          en: 'Architecture',
          ar: 'العمارة',
          uk: 'Архітектура',
          fr: 'L\'architecture'
        },
        emoji: '📐',
        color: '#E3EEF9'
      },
      {
        word: 'La danza / El baile',
        translations: {
          en: 'Dance',
          ar: 'الرقص',
          uk: 'Танець',
          fr: 'La danse'
        },
        emoji: '💃',
        color: '#FFF5F5'
      },
      {
        word: 'La novela',
        translations: {
          en: 'Novel',
          ar: 'الرواية',
          uk: 'Роман',
          fr: 'Le roman'
        },
        emoji: '📖',
        color: '#FEFCBF'
      },
      {
        word: 'El pintor',
        translations: {
          en: 'Painter',
          ar: 'الرسام',
          uk: 'Художник',
          fr: 'Le peintre'
        },
        emoji: '🎨',
        color: '#FFF5F5'
      },
      {
        word: 'El público',
        translations: {
          en: 'Audience / Public',
          ar: 'الجمهور',
          uk: 'Публіка / глядачі',
          fr: 'Le public'
        },
        emoji: '🧑‍🤝‍🧑',
        color: '#EDF2F7'
      },
      {
        word: 'El escenario',
        translations: {
          en: 'Stage',
          ar: 'المسرح / الخشبة',
          uk: 'Сцена',
          fr: 'La scène'
        },
        emoji: '🎭',
        color: '#FFF5F5'
      },
      {
        word: 'La galería de arte',
        translations: {
          en: 'Art gallery',
          ar: 'معرض الفنون',
          uk: 'Галерея мистецтв',
          fr: 'Galerie d\'art'
        },
        emoji: '🏛️',
        color: '#FFF5F5'
      },
      {
        word: 'El estilo artístico',
        translations: {
          en: 'Artistic style',
          ar: 'الأسلوب الفني',
          uk: 'Художній стиль',
          fr: 'Style artistique'
        },
        emoji: '🎨',
        color: '#FFF5F5'
      },
      {
        word: 'La obra maestra',
        translations: {
          en: 'Masterpiece',
          ar: 'التحفة الفنية',
          uk: 'Шедевр',
          fr: 'Le chef-d\'œuvre'
        },
        emoji: '🏆',
        color: '#FEFCBF'
      },
      {
        word: 'El folclore',
        translations: {
          en: 'Folklore',
          ar: 'الفلكلور الشعبى',
          uk: 'Фольклор',
          fr: 'Le folklore'
        },
        emoji: '🪗',
        color: '#E2F3E7'
      },
      {
        word: 'La ópera',
        translations: {
          en: 'Opera',
          ar: 'الأوبرا',
          uk: 'Опера',
          fr: 'L\'opéra'
        },
        emoji: '🎭',
        color: '#FFF5F5'
      },
      {
        word: 'El guion',
        translations: {
          en: 'Script / Screenplay',
          ar: 'السيناريو',
          uk: 'Сценарій',
          fr: 'Le scénario'
        },
        emoji: '📄',
        color: '#EDF2F7'
      },
      {
        word: 'Inspirar',
        translations: {
          en: 'To inspire',
          ar: 'يلهم',
          uk: 'Надихати',
          fr: 'Inspirer'
        },
        emoji: '💭',
        color: '#FFF5F5'
      }
    ],
  },
  {
    id: 'comida-b1',
    name: 'Gastronomía y Cocina',
    emoji: '🍳',
    translations: { en: 'Gastronomy & Cooking', ar: 'الطهي والمأكولات', uk: 'Гастрономія та кулінарія', fr: 'Gastronomie et Cuisine' },
    words: [
      {
        word: 'La receta',
        translations: {
          en: 'Recipe',
          ar: 'وصفة الطبخ',
          uk: 'Рецепт',
          fr: 'La recette'
        },
        emoji: '📜',
        color: '#FEFCBF'
      },
      {
        word: 'Los ingredientes',
        translations: {
          en: 'Ingredients',
          ar: 'المكونات',
          uk: 'Інгредієнти',
          fr: 'Les ingrédients'
        },
        emoji: '🥦',
        color: '#E2F3E7'
      },
      {
        word: 'El sabor',
        translations: {
          en: 'Flavor',
          ar: 'النكهة',
          uk: 'Смак',
          fr: 'Le goût'
        },
        emoji: '👅',
        color: '#FFF4E5'
      },
      {
        word: 'Cocinar',
        translations: {
          en: 'To cook',
          ar: 'يطبخ',
          uk: 'Готувати їжу',
          fr: 'Cuisiner'
        },
        emoji: '🍳',
        color: '#FFF4E5'
      },
      {
        word: 'El plato',
        translations: {
          en: 'Dish / Plate',
          ar: 'الطبق',
          uk: 'Страва / тарілка',
          fr: 'Le plat'
        },
        emoji: '🍽️',
        color: '#EDF2F7'
      },
      {
        word: 'Dulce',
        translations: {
          en: 'Sweet',
          ar: 'حلو',
          uk: 'Солодкий',
          fr: 'Doux / Sucré'
        },
        emoji: '🍰',
        color: '#F3E8FF'
      },
      {
        word: 'Salado',
        translations: {
          en: 'Salty',
          ar: 'مالح',
          uk: 'Солоний',
          fr: 'Salé'
        },
        emoji: '🧂',
        color: '#EDF2F7'
      },
      {
        word: 'Picante',
        translations: {
          en: 'Spicy',
          ar: 'حار',
          uk: 'Гострий',
          fr: 'Épicé'
        },
        emoji: '🌶️',
        color: '#FCE8E8'
      },
      {
        word: 'Ácido',
        translations: {
          en: 'Sour',
          ar: 'حامض',
          uk: 'Кислий',
          fr: 'Acide'
        },
        emoji: '🍋',
        color: '#FEFCBF'
      },
      {
        word: 'La cocina',
        translations: {
          en: 'Kitchen / Cuisine',
          ar: 'المطبخ',
          uk: 'Кухня',
          fr: 'La cuisine'
        },
        emoji: '🍳',
        color: '#FFF4E5'
      },
      {
        word: 'El postre',
        translations: {
          en: 'Dessert',
          ar: 'الحلوى',
          uk: 'Десерт',
          fr: 'Le dessert'
        },
        emoji: '🍰',
        color: '#F3E8FF'
      },
      {
        word: 'Probar',
        translations: {
          en: 'To taste / try',
          ar: 'يتذوق',
          uk: 'Куштувати',
          fr: 'Goûter'
        },
        emoji: '👅',
        color: '#FFF4E5'
      },
      {
        word: 'La especia',
        translations: {
          en: 'Spice',
          ar: 'التوابل / البهارات',
          uk: 'Спеція',
          fr: 'L\'épice'
        },
        emoji: '🫙',
        color: '#FFF4E5'
      },
      {
        word: 'Freír',
        translations: {
          en: 'To fry',
          ar: 'يقلي',
          uk: 'Смажити',
          fr: 'Frire'
        },
        emoji: '🍳',
        color: '#FFF4E5'
      },
      {
        word: 'Hervir',
        translations: {
          en: 'To boil',
          ar: 'يغلي',
          uk: 'Кип\'ятити',
          fr: 'Bouillir'
        },
        emoji: '🫧',
        color: '#E3EEF9'
      },
      {
        word: 'Hornear',
        translations: {
          en: 'To bake',
          ar: 'يخبز',
          uk: 'Пекти в духовці',
          fr: 'Cuire au four'
        },
        emoji: '🍞',
        color: '#FFF4E5'
      },
      {
        word: 'La sartén',
        translations: {
          en: 'Frying pan',
          ar: 'المقلاة',
          uk: 'Пательня',
          fr: 'La poêle'
        },
        emoji: '🍳',
        color: '#EDF2F7'
      },
      {
        word: 'La olla',
        translations: {
          en: 'Pot',
          ar: 'قدر الطبخ',
          uk: 'Каструля',
          fr: 'La marmite'
        },
        emoji: '🍲',
        color: '#EDF2F7'
      },
      {
        word: 'La gastronomía',
        translations: {
          en: 'Gastronomy',
          ar: 'فن الطبخ',
          uk: 'Гастрономія',
          fr: 'La gastronomie'
        },
        emoji: '🍽️',
        color: '#E2F3E7'
      },
      {
        word: 'Los cubiertos',
        translations: {
          en: 'Cutlery',
          ar: 'أدوات المائدة',
          uk: 'Столові прибори',
          fr: 'Les couverts'
        },
        emoji: '🍴',
        color: '#EDF2F7'
      },
      {
        word: 'El vegetariano',
        translations: {
          en: 'Vegetarian',
          ar: 'نباتي',
          uk: 'Вегетаріанець',
          fr: 'Végétarien'
        },
        emoji: '🥦',
        color: '#E2F3E7'
      },
      {
        word: 'El vegano',
        translations: {
          en: 'Vegan',
          ar: 'نباتي صرف',
          uk: 'Веган',
          fr: 'Végane'
        },
        emoji: '🌱',
        color: '#E2F3E7'
      },
      {
        word: 'La dieta equilibrada',
        translations: {
          en: 'Balanced diet',
          ar: 'نظام غذائي متوازن',
          uk: 'Збалансована дієта',
          fr: 'Régime équilibré'
        },
        emoji: '🍏',
        color: '#E2F3E7'
      },
      {
        word: 'El alimento',
        translations: {
          en: 'Food item',
          ar: 'الغذاء',
          uk: 'Продукт харчування',
          fr: 'L\'aliment'
        },
        emoji: '🍎',
        color: '#FFF5F5'
      },
      {
        word: 'La ración',
        translations: {
          en: 'Portion / Serving',
          ar: 'حصة الطعام',
          uk: 'Порція',
          fr: 'La portion'
        },
        emoji: '🍽️',
        color: '#EDF2F7'
      },
      {
        word: 'El menú diario',
        translations: {
          en: 'Daily menu',
          ar: 'قائمة الطعام اليومية',
          uk: 'Денне меню',
          fr: 'Menu du jour'
        },
        emoji: '📜',
        color: '#FEFCBF'
      },
      {
        word: 'El sabor agridulce',
        translations: {
          en: 'Sweet and sour',
          ar: 'حلو وحامض',
          uk: 'Кисло-солодкий',
          fr: 'Aigre-doux'
        },
        emoji: '🍍',
        color: '#FEFCBF'
      },
      {
        word: 'La intolerancia alimentaria',
        translations: {
          en: 'Food intolerance',
          ar: 'عدم تحمل الطعام',
          uk: 'Харчова непереносимість',
          fr: 'Intolérance alimentaire'
        },
        emoji: '⚠️',
        color: '#FCE8E8'
      },
      {
        word: 'El valor nutricional',
        translations: {
          en: 'Nutritional value',
          ar: 'القيمة الغذائية',
          uk: 'Харчова цінність',
          fr: 'Valeur nutritionnelle'
        },
        emoji: '📊',
        color: '#EDF2F7'
      },
      {
        word: 'Casero / Casera',
        translations: {
          en: 'Homemade',
          ar: 'منزلي الصنع',
          uk: 'Домашній (про їжу)',
          fr: 'Fait maison'
        },
        emoji: '🏡',
        color: '#FFF4E5'
      }
    ],
  },
  {
    id: 'relaciones-sociales',
    name: 'Relaciones y Carácter',
    emoji: '👥',
    translations: { en: 'Relationships & Character', ar: 'العلاقات والطباع', uk: 'Відносини та характер', fr: 'Relations et Caractère' },
    words: [
      {
        word: 'La amistad',
        translations: {
          en: 'Friendship',
          ar: 'الصداقة',
          uk: 'Дружба',
          fr: 'L\'amitié'
        },
        emoji: '🤝',
        color: '#E2F3E7'
      },
      {
        word: 'El carácter',
        translations: {
          en: 'Character',
          ar: 'الشخصية / الطابع',
          uk: 'Характер',
          fr: 'Le caractère'
        },
        emoji: '👤',
        color: '#EDF2F7'
      },
      {
        word: 'Generoso',
        translations: {
          en: 'Generous',
          ar: 'كريم',
          uk: 'Щедрий',
          fr: 'Généreux'
        },
        emoji: '🎁',
        color: '#FEFCBF'
      },
      {
        word: 'Paciente',
        translations: {
          en: 'Patient',
          ar: 'صبور',
          uk: 'Терплячий',
          fr: 'Patient'
        },
        emoji: '⏳',
        color: '#FEFCBF'
      },
      {
        word: 'Sincero',
        translations: {
          en: 'Sincere',
          ar: 'صادق',
          uk: 'Щирий',
          fr: 'Sincère'
        },
        emoji: '💬',
        color: '#EBF8FF'
      },
      {
        word: 'Tímido',
        translations: {
          en: 'Shy',
          ar: 'خجول',
          uk: 'Сором\'язливий',
          fr: 'Timide'
        },
        emoji: '🫣',
        color: '#CBD5E0'
      },
      {
        word: 'Optimista',
        translations: {
          en: 'Optimistic',
          ar: 'متفائل',
          uk: 'Оптиміст',
          fr: 'Optimiste'
        },
        emoji: '☀️',
        color: '#FEFCBF'
      },
      {
        word: 'La confianza',
        translations: {
          en: 'Trust / Confidence',
          ar: 'الثقة',
          uk: 'Довіра',
          fr: 'La confiance'
        },
        emoji: '🤝',
        color: '#E2F3E7'
      },
      {
        word: 'Apoyar',
        translations: {
          en: 'To support',
          ar: 'يدعم',
          uk: 'Підтримувати',
          fr: 'Soutenir'
        },
        emoji: '🤝',
        color: '#E2F3E7'
      },
      {
        word: 'La discusión',
        translations: {
          en: 'Argument',
          ar: 'النقاش / الجدال',
          uk: 'Дискусія / суперечка',
          fr: 'La discussion / dispute'
        },
        emoji: '🗣️',
        color: '#FCE8E8'
      },
      {
        word: 'Discutir',
        translations: {
          en: 'To argue / discuss',
          ar: 'يجادل / يناقش',
          uk: 'Сперечатися',
          fr: 'Discuter / Se disputer'
        },
        emoji: '🗣️',
        color: '#FCE8E8'
      },
      {
        word: 'Llevarse bien',
        translations: {
          en: 'To get along well',
          ar: 'يتفاهم جيداً مع',
          uk: 'Ладнати з кимось',
          fr: 'Bien s\'entendre'
        },
        emoji: '😊',
        color: '#E2F3E7'
      },
      {
        word: 'Enamorarse',
        translations: {
          en: 'To fall in love',
          ar: 'يقع في الحب',
          uk: 'Закохатися',
          fr: 'Tomber amoureux'
        },
        emoji: '💖',
        color: '#FFF5F5'
      },
      {
        word: 'El lazo familiar',
        translations: {
          en: 'Family bond',
          ar: 'الروابط الأسرية',
          uk: 'Сімейні зв\'язки',
          fr: 'Lien familial'
        },
        emoji: '🧑‍🤝‍🧑',
        color: '#FFF5F5'
      },
      {
        word: 'El compañero de clase',
        translations: {
          en: 'Classmate',
          ar: 'زميل الدراسة',
          uk: 'Однокласник',
          fr: 'Camarade de classe'
        },
        emoji: '🧑‍🎓',
        color: '#F3E8FF'
      },
      {
        word: 'Respetar',
        translations: {
          en: 'To respect',
          ar: 'يحترم',
          uk: 'Поважати',
          fr: 'Respecter'
        },
        emoji: '🙇',
        color: '#E2F3E7'
      },
      {
        word: 'Egoísta',
        translations: {
          en: 'Selfish',
          ar: 'أناني',
          uk: 'Егоїстичний',
          fr: 'Égoïste'
        },
        emoji: '👤',
        color: '#FCE8E8'
      },
      {
        word: 'Peculiar',
        translations: {
          en: 'Peculiar / Quirky',
          ar: 'غريب الأطوار',
          uk: 'Своєрідний',
          fr: 'Peculier'
        },
        emoji: '🌀',
        color: '#EDF2F7'
      },
      {
        word: 'La empatía',
        translations: {
          en: 'Empathetic',
          ar: 'التعاطف',
          uk: 'Емпатія',
          fr: 'L\'empathie'
        },
        emoji: '🫂',
        color: '#E2F3E7'
      },
      {
        word: 'Caer bien / mal',
        translations: {
          en: 'To make a good / bad impression',
          ar: 'يرتاح له / لا يرتاح له',
          uk: 'Подобатися / не подобатися (про людей)',
          fr: 'Inspirer de la sympathie / de l\'antipathie'
        },
        emoji: '🤝',
        color: '#EDF2F7'
      },
      {
        word: 'La relación',
        translations: {
          en: 'Relationship',
          ar: 'العلاقة',
          uk: 'Відносини / стосунки',
          fr: 'La relation'
        },
        emoji: '🫂',
        color: '#EDF2F7'
      },
      {
        word: 'Hacer amigos',
        translations: {
          en: 'To make friends',
          ar: 'يكوّن صداقات',
          uk: 'Заводити друзів',
          fr: 'Se faire des amis'
        },
        emoji: '🤝',
        color: '#E2F3E7'
      },
      {
        word: 'El vecino / La vecina',
        translations: {
          en: 'Neighbor',
          ar: 'الجار / الجارة',
          uk: 'Сусід / сусідка',
          fr: 'Le voisin / la voisine'
        },
        emoji: '🏡',
        color: '#E2F3E7'
      },
      {
        word: 'Fiel',
        translations: {
          en: 'Faithful / Loyal',
          ar: 'وفى',
          uk: 'Вірний',
          fr: 'Fidèle'
        },
        emoji: '🐕',
        color: '#E2F3E7'
      },
      {
        word: 'La envidia',
        translations: {
          en: 'Envy',
          ar: 'الحسد',
          uk: 'Заздрість',
          fr: 'L\'envie'
        },
        emoji: '😒',
        color: '#FCE8E8'
      },
      {
        word: 'Perdonar',
        translations: {
          en: 'To forgive',
          ar: 'يسامح',
          uk: 'Прощати',
          fr: 'Pardonner'
        },
        emoji: '🙏',
        color: '#E2F3E7'
      },
      {
        word: 'La mentira',
        translations: {
          en: 'Lie',
          ar: 'الكذبة',
          uk: 'Брехня',
          fr: 'Le mensonge'
        },
        emoji: '🤥',
        color: '#FCE8E8'
      },
      {
        word: 'El consejo',
        translations: {
          en: 'Advice',
          ar: 'نصيحة',
          uk: 'Порада',
          fr: 'Le conseil'
        },
        emoji: '🗣️',
        color: '#EBF8FF'
      },
      {
        word: 'Ayudar',
        translations: {
          en: 'To help',
          ar: 'يساعد',
          uk: 'Допомагати',
          fr: 'Aider'
        },
        emoji: '🤝',
        color: '#E2F3E7'
      },
      {
        word: 'El apoyo',
        translations: {
          en: 'Support',
          ar: 'الدعم / السند',
          uk: 'Підтримка',
          fr: 'Le soutien'
        },
        emoji: '🫂',
        color: '#E2F3E7'
      }
    ],
  }
];

const b2Themes: GlossaryTheme[] = [
  {
    id: 'registros',
    name: 'Registros Formal e Informal',
    emoji: '👔',
    translations: { en: 'Formal & Informal Registers', ar: 'السجلات الرسمية وغير الرسمية', uk: 'Формальні та неформальні регістри', fr: 'Registres Formel et Informel' },
    words: [
      {
        word: 'Estimado / Estimada',
        translations: {
          en: 'Dear (formal)',
          ar: 'عزيزي / عزيزتي (رسمي)',
          uk: 'Шановний / Шановна',
          fr: 'Cher / Chère'
        },
        emoji: '✉️',
        color: '#E3EEF9'
      },
      {
        word: 'Atentamente',
        translations: {
          en: 'Sincerely',
          ar: 'تفضلوا بقبول فائق الاحترام',
          uk: 'З повагою',
          fr: 'Cordialement'
        },
        emoji: '✍️',
        color: '#E2F3E7'
      },
      {
        word: 'Usted',
        translations: {
          en: 'You (formal)',
          ar: 'حضرتك / أنتم (للاحترام)',
          uk: 'Ви (ввічливо)',
          fr: 'Vous (vouvoiement)'
        },
        emoji: '👔',
        color: '#EDF2F7'
      },
      {
        word: 'Un cordial saludo',
        translations: {
          en: 'Best regards',
          ar: 'مع أطيب التحيات',
          uk: 'З найкращими побажаннями',
          fr: 'Salutations distinguées'
        },
        emoji: '✉️',
        color: '#E2F3E7'
      },
      {
        word: 'Quedar a su disposición',
        translations: {
          en: 'To remain at your disposal',
          ar: 'البقاء تحت تصرفكم',
          uk: 'Залишатися у вашому розпорядженні',
          fr: 'Rester à votre disposition'
        },
        emoji: '👔',
        color: '#EBF8FF'
      },
      {
        word: 'Le escribo para...',
        translations: {
          en: 'I am writing to you to...',
          ar: 'أكتب إليكم لـ...',
          uk: 'Я пишу вам, щоб...',
          fr: 'Je vous écris pour...'
        },
        emoji: '✍️',
        color: '#E3EEF9'
      },
      {
        word: 'Disculpe las molestias',
        translations: {
          en: 'Excuse the inconvenience',
          ar: 'المعذرة على الإزعاج',
          uk: 'Вибачте за незручності',
          fr: 'Veuillez excuser le dérangement'
        },
        emoji: '🙇',
        color: '#FCE8E8'
      },
      {
        word: 'Agradecer su atención',
        translations: {
          en: 'To thank for your attention',
          ar: 'نشكر حسن انتباهكم',
          uk: 'Дякувати за увагу',
          fr: 'Merci de votre attention'
        },
        emoji: '🙏',
        color: '#E2F3E7'
      },
      {
        word: 'El remitente',
        translations: {
          en: 'Sender',
          ar: 'المرسل',
          uk: 'Відправник',
          fr: 'L\'expéditeur'
        },
        emoji: '✉️',
        color: '#EDF2F7'
      },
      {
        word: 'El destinatario',
        translations: {
          en: 'Recipient',
          ar: 'المرسل إليه',
          uk: 'Отримувач',
          fr: 'Le destinataire'
        },
        emoji: '✉️',
        color: '#EDF2F7'
      },
      {
        word: 'Solicitar información',
        translations: {
          en: 'To request information',
          ar: 'طلب معلومات',
          uk: 'Запитувати інформацію',
          fr: 'Demander des informations'
        },
        emoji: '❓',
        color: '#EBF8FF'
      },
      {
        word: 'La presente carta',
        translations: {
          en: 'This letter',
          ar: 'هذه الرسالة',
          uk: 'Цей лист',
          fr: 'La présente lettre'
        },
        emoji: '📄',
        color: '#EDF2F7'
      },
      {
        word: 'Adjuntar un documento',
        translations: {
          en: 'To attach a document',
          ar: 'إرفاق مستند',
          uk: 'Додати документ',
          fr: 'Joindre un document'
        },
        emoji: '📎',
        color: '#EDF2F7'
      },
      {
        word: 'Sin otro particular',
        translations: {
          en: 'With nothing else to add',
          ar: 'دون تفاصيل أخرى',
          uk: 'Без інших питань',
          fr: 'Sans autre objet'
        },
        emoji: '✉️',
        color: '#EDF2F7'
      },
      {
        word: 'Reciba un saludo',
        translations: {
          en: 'Receive greetings',
          ar: 'تقبلوا تحياتنا',
          uk: 'Прийміть вітання',
          fr: 'Veuillez agréer mes salutations'
        },
        emoji: '✉️',
        color: '#E2F3E7'
      },
      {
        word: '¿Qué tal?',
        translations: {
          en: 'What\'s up? (informal)',
          ar: 'كيف الحال؟ (غير رسمي)',
          uk: 'Як справи? (неформально)',
          fr: 'Quoi de neuf ?'
        },
        emoji: '👋',
        color: '#EBF8FF'
      },
      {
        word: 'El curro',
        translations: {
          en: 'Job / Work (colloquial)',
          ar: 'الشغل (عامي)',
          uk: 'Робота / халява (розмовно)',
          fr: 'Le boulot'
        },
        emoji: '🛠️',
        color: '#FEFCBF'
      },
      {
        word: 'La pasta',
        translations: {
          en: 'Money (colloquial)',
          ar: 'الفلوس (عامي)',
          uk: 'Бабки (гроші розмовно)',
          fr: 'Le fric'
        },
        emoji: '💵',
        color: '#FFF4E5'
      },
      {
        word: 'El chaval',
        translations: {
          en: 'Kid / Guy (colloquial)',
          ar: 'الولد / الشاب (عامي)',
          uk: 'Хлопець (розмовно)',
          fr: 'Le gamin'
        },
        emoji: '👦',
        color: '#F3E8FF'
      },
      {
        word: 'Guay',
        translations: {
          en: 'Cool (colloquial)',
          ar: 'رائع (عامي)',
          uk: 'Круто / класно (розмовно)',
          fr: 'Cool'
        },
        emoji: '😎',
        color: '#FEFCBF'
      },
      {
        word: 'Majo / Maja',
        translations: {
          en: 'Nice / Friendly (colloquial)',
          ar: 'لطيف (عامي)',
          uk: 'Симпатичний / милий',
          fr: 'Sympa'
        },
        emoji: '😊',
        color: '#E2F3E7'
      },
      {
        word: 'Un abrazo',
        translations: {
          en: 'A hug (informal end)',
          ar: 'حضن (وداع غير رسمي)',
          uk: 'Обіймаю',
          fr: 'Je t\'embrasse'
        },
        emoji: '🫂',
        color: '#FFF5F5'
      },
      {
        word: '¡Oye!',
        translations: {
          en: 'Hey! (informal)',
          ar: 'اسمع! / يا هذا!',
          uk: 'Гей! / Послухай!',
          fr: 'Hé !'
        },
        emoji: '📣',
        color: '#FFF4E5'
      },
      {
        word: 'Estar chulo',
        translations: {
          en: 'To be nice / pretty',
          ar: 'جميل / أنيق (عامي)',
          uk: 'Бути гарним / крутим',
          fr: 'Être joli / chouette'
        },
        emoji: '✨',
        color: '#FEFCBF'
      },
      {
        word: 'La jerga',
        translations: {
          en: 'Slang',
          ar: 'لغة الشارع / العامية',
          uk: 'Жаргон',
          fr: 'L\'argot'
        },
        emoji: '🗣️',
        color: '#EDF2F7'
      },
      {
        word: 'El tuit',
        translations: {
          en: 'Tweet',
          ar: 'تغريدة',
          uk: 'Твіт',
          fr: 'Le tweet'
        },
        emoji: '📱',
        color: '#EBF8FF'
      },
      {
        word: 'Venga, adiós',
        translations: {
          en: 'Alright, bye',
          ar: 'حسناً، وداعاً',
          uk: 'Давай, бувай',
          fr: 'Allez, salut'
        },
        emoji: '👋',
        color: '#FCE8E8'
      },
      {
        word: 'Estimado Señor',
        translations: {
          en: 'Dear Sir',
          ar: 'سيدي العزيز',
          uk: 'Шановний Пане',
          fr: 'Cher Monsieur'
        },
        emoji: '👔',
        color: '#E3EEF9'
      },
      {
        word: 'Por la presente',
        translations: {
          en: 'Hereby',
          ar: 'بموجب هذا',
          uk: 'Цим документом',
          fr: 'Par la présente'
        },
        emoji: '📄',
        color: '#EDF2F7'
      },
      {
        word: 'Escríbeme pronto',
        translations: {
          en: 'Write to me soon',
          ar: 'اكتب لي قريباً',
          uk: 'Напиши мені незабаром',
          fr: 'Écris-moi vite'
        },
        emoji: '✍️',
        color: '#E3EEF9'
      }
    ],
  },
  {
    id: 'subjuntivo-vocab',
    name: 'Conectores Temporales',
    emoji: '⏳',
    translations: { en: 'Temporal Connectors', ar: 'الروابط الزمنية', uk: 'Часові сполучники', fr: 'Connecteurs Temporels' },
    words: [
      {
        word: 'Cuando',
        translations: {
          en: 'When',
          ar: 'عندما',
          uk: 'Коли',
          fr: 'Quand'
        },
        emoji: '⏰',
        color: '#EBF8FF'
      },
      {
        word: 'Aunque',
        translations: {
          en: 'Although',
          ar: 'بالرغم من',
          uk: 'Хоча',
          fr: 'Bien que / Aunque'
        },
        emoji: '⚖️',
        color: '#EBF8FF'
      },
      {
        word: 'Tan pronto como',
        translations: {
          en: 'As soon as',
          ar: 'بمجرد أن',
          uk: 'Як тільки',
          fr: 'Dès que'
        },
        emoji: '⚡',
        color: '#EBF8FF'
      },
      {
        word: 'Antes de que',
        translations: {
          en: 'Before (subj.)',
          ar: 'قبل أن',
          uk: 'Перед тим як',
          fr: 'Avant que'
        },
        emoji: '⏰',
        color: '#EBF8FF'
      },
      {
        word: 'Después de que',
        translations: {
          en: 'After (subj.)',
          ar: 'بعد أن',
          uk: 'Після того як',
          fr: 'Après que'
        },
        emoji: '⏰',
        color: '#EBF8FF'
      },
      {
        word: 'Para que',
        translations: {
          en: 'So that / In order to',
          ar: 'لكي / من أجل أن',
          uk: 'Для того щоб',
          fr: 'Pour que'
        },
        emoji: '🎯',
        color: '#E2F3E7'
      },
      {
        word: 'A menos que',
        translations: {
          en: 'Unless',
          ar: 'ما لم / إلا إذا',
          uk: 'Якщо тільки не',
          fr: 'À moins que'
        },
        emoji: '⚠️',
        color: '#FCE8E8'
      },
      {
        word: 'En caso de que',
        translations: {
          en: 'In case',
          ar: 'في حال أن',
          uk: 'У випадку якщо',
          fr: 'Au caso où'
        },
        emoji: '💼',
        color: '#EDF2F7'
      },
      {
        word: 'Con tal de que',
        translations: {
          en: 'Provided that',
          ar: 'شريطة أن',
          uk: 'За умови якщо',
          fr: 'À condition que'
        },
        emoji: '🤝',
        color: '#E2F3E7'
      },
      {
        word: 'Siempre que',
        translations: {
          en: 'Whenever / Provided that',
          ar: 'طالما أن / كلما',
          uk: 'Кожного разу коли',
          fr: 'Chaque fois que'
        },
        emoji: '🔄',
        color: '#EDF2F7'
      },
      {
        word: 'Hasta que',
        translations: {
          en: 'Until',
          ar: 'حتى أن',
          uk: 'До тих пір поки',
          fr: 'Jusqu\'à ce que'
        },
        emoji: '⏳',
        color: '#FEFCBF'
      },
      {
        word: 'Sin que',
        translations: {
          en: 'Without',
          ar: 'دون أن',
          uk: 'Без того щоб',
          fr: 'Sans que'
        },
        emoji: '❌',
        color: '#FCE8E8'
      },
      {
        word: 'Ojalá',
        translations: {
          en: 'Hopefully / If only',
          ar: 'يا ليت / إن شاء الله',
          uk: 'Дай Бог / Хоч би',
          fr: 'Pourvu que'
        },
        emoji: '🙏',
        color: '#E2F3E7'
      },
      {
        word: 'Tal vez',
        translations: {
          en: 'Maybe',
          ar: 'ربما / قد',
          uk: 'Можливо',
          fr: 'Peut-être'
        },
        emoji: '❓',
        color: '#EBF8FF'
      },
      {
        word: 'Quizás',
        translations: {
          en: 'Perhaps',
          ar: 'لعل / ربما',
          uk: 'Мабуть',
          fr: 'Probablement'
        },
        emoji: '❓',
        color: '#EBF8FF'
      },
      {
        word: 'A fin de que',
        translations: {
          en: 'So that',
          ar: 'بغية أن',
          uk: 'З метою щоб',
          fr: 'Afin que'
        },
        emoji: '🎯',
        color: '#E2F3E7'
      },
      {
        word: 'A condición de que',
        translations: {
          en: 'On condition that',
          ar: 'على شرط أن',
          uk: 'За умови що',
          fr: 'À condition que'
        },
        emoji: '🤝',
        color: '#E2F3E7'
      },
      {
        word: 'Como si',
        translations: {
          en: 'As if',
          ar: 'كما لو أن',
          uk: 'Ніби / наче',
          fr: 'Comme si'
        },
        emoji: '🎭',
        color: '#EDF2F7'
      },
      {
        word: 'Mientras que',
        translations: {
          en: 'While / Whereas',
          ar: 'بينما',
          uk: 'Тоді як / поки',
          fr: 'Tandis que'
        },
        emoji: '⏰',
        color: '#EDF2F7'
      },
      {
        word: 'De ahí que',
        translations: {
          en: 'Hence / That\'s why',
          ar: 'ومن هنا فإن',
          uk: 'Звідси й',
          fr: 'D\'où le fait que'
        },
        emoji: '➡️',
        color: '#EDF2F7'
      },
      {
        word: 'Por más que',
        translations: {
          en: 'No matter how much',
          ar: 'مهما كان / بالرغم من كل شيء',
          uk: 'Скільки б не',
          fr: 'Avoir beau'
        },
        emoji: '⚖️',
        color: '#EDF2F7'
      },
      {
        word: 'Por mucho que',
        translations: {
          en: 'No matter how much',
          ar: 'بقدر ما...',
          uk: 'Скільки б не',
          fr: 'Avoir beau'
        },
        emoji: '⚖️',
        color: '#EDF2F7'
      },
      {
        word: 'Aunque llueva',
        translations: {
          en: 'Even if it rains',
          ar: 'حتى لو أمطرت',
          uk: 'Навіть якщо піде дощ',
          fr: 'Même s\'il pleut'
        },
        emoji: '🌧️',
        color: '#E3EEF9'
      },
      {
        word: 'Cuando vuelva',
        translations: {
          en: 'When I return',
          ar: 'عندما أعود',
          uk: 'Коли я повернуся',
          fr: 'À mon retour'
        },
        emoji: '🏡',
        color: '#FFF4E5'
      },
      {
        word: 'Tan pronto como pueda',
        translations: {
          en: 'As soon as I can',
          ar: 'بمجرد أن أستطيع',
          uk: 'Як тільки зможу',
          fr: 'Dès que possible'
        },
        emoji: '⚡',
        color: '#E2F3E7'
      },
      {
        word: 'Para que sepas',
        translations: {
          en: 'Just so you know',
          ar: 'لكي تعرف فقط',
          uk: 'Щоб ти знав',
          fr: 'Pour que tu saches'
        },
        emoji: '🗣️',
        color: '#EBF8FF'
      },
      {
        word: 'Antes de que sea tarde',
        translations: {
          en: 'Before it\'s too late',
          ar: 'قبل أن يفوت الأوان',
          uk: 'Поки не пізно',
          fr: 'Avant qu\'il ne soit trop tard'
        },
        emoji: '⏰',
        color: '#FCE8E8'
      },
      {
        word: 'A menos que digas algo',
        translations: {
          en: 'Unless you say something',
          ar: 'ما لم تقل شيئاً',
          uk: 'Якщо тільки ти щось не скажеш',
          fr: 'À moins que tu ne dises quelque chose'
        },
        emoji: '🗣️',
        color: '#EDF2F7'
      },
      {
        word: 'Ojalá haga sol',
        translations: {
          en: 'Hopefully it will be sunny',
          ar: 'يا ليت الجو يكون مشمساً',
          uk: 'Хоч би було сонячно',
          fr: 'Pourvu qu\'il fasse beau'
        },
        emoji: '☀️',
        color: '#FEFCBF'
      },
      {
        word: 'Con tal de que estudies',
        translations: {
          en: 'Provided you study',
          ar: 'شريطة أن تدرس',
          uk: 'За умови що ти вчитимешся',
          fr: 'À condition que tu étudies'
        },
        emoji: '📚',
        color: '#F3E8FF'
      }
    ],
  },
  {
    id: 'medio-ambiente-b2',
    name: 'El Medio Ambiente',
    emoji: '🌱',
    translations: { en: 'The Environment', ar: 'البيئة', uk: 'Довкілля', fr: "L'Environnement" },
    words: [
      { word: 'Calentamiento global', translations: { en: 'Global warming', ar: 'الاحتباس الحراري', uk: 'Глобальне потепління', fr: 'Réchauffement climatique' }, emoji: '🥵', color: '#FFF4E5' },
      { word: 'Reciclaje', translations: { en: 'Recycling', ar: 'إعادة التدوير', uk: 'Переробка', fr: 'Recyclage' }, emoji: '♻️', color: '#E2F3E7' },
      { word: 'Sostenible', translations: { en: 'Sustainable', ar: 'مستدام', uk: 'Сталий', fr: 'Durable' }, emoji: '🔋', color: '#E2F3E7' },
      { word: 'Energías renovables', translations: { en: 'Renewable energy', ar: 'الطاقة المتجددة', uk: 'Відновлювана енергія', fr: 'Énergies renouvelables' }, emoji: '☀️', color: '#FEFCBF' },
      { word: 'Biodiversidad', translations: { en: 'Biodiversity', ar: 'التنوع البيولوجي', uk: 'Біорізноманіття', fr: 'Biodiversité' }, emoji: '🦋', color: '#E2F3E7' },
      { word: 'Efecto invernadero', translations: { en: 'Greenhouse effect', ar: 'تأثير الصوبة الزجاجية', uk: 'Тепличний ефект', fr: 'Effet de serre' }, emoji: '🏭', color: '#EDF2F7' },
      { word: 'Contaminación', translations: { en: 'Pollution', ar: 'تلوث', uk: 'Забруднення', fr: 'Pollution' }, emoji: '🌫️', color: '#EDF2F7' },
      { word: 'Deforestación', translations: { en: 'Deforestation', ar: 'إزالة الغابات', uk: 'Вирубка лісів', fr: 'Déforestation' }, emoji: '🪓', color: '#FFF4E5' },
      { word: 'Conservar', translations: { en: 'To conserve', ar: 'يحافظ على', uk: 'Зберігати', fr: 'Conserver' }, emoji: '🌲', color: '#E2F3E7' },
      { word: 'Desperdicio', translations: { en: 'Waste', ar: 'نفايات / هدر', uk: 'Відходи', fr: 'Gaspillage' }, emoji: '🗑️', color: '#EDF2F7' }
    ]
  },
  {
    id: 'trabajo-empleo-b2',
    name: 'Trabajo y Empleo',
    emoji: '💼',
    translations: { en: 'Work & Employment', ar: 'العمل والتوظيف', uk: 'Робота та зайнятість', fr: 'Travail et Emploi' },
    words: [
      { word: 'Currículum vitae', translations: { en: 'Résumé / CV', ar: 'السيرة الذاتية', uk: 'Резюме', fr: 'Curriculum vitae' }, emoji: '📄', color: '#E3EEF9' },
      { word: 'Puesto de trabajo', translations: { en: 'Job position', ar: 'وظيفة / منصب', uk: 'Посада', fr: 'Poste de trabajo' }, emoji: '🏢', color: '#E3EEF9' },
      { word: 'Contrato indefinido', translations: { en: 'Permanent contract', ar: 'عقد غير محدد المدة', uk: 'Безстроковий контракт', fr: 'Contrat à durée indéterminée' }, emoji: '🖋️', color: '#E2F3E7' },
      { word: 'Emprendedor', translations: { en: 'Entrepreneur', ar: 'رائد أعمال', uk: 'Підприємець', fr: 'Entrepreneur' }, emoji: '🚀', color: '#FFF4E5' },
      { word: 'Salario mínimo', translations: { en: 'Minimum wage', ar: 'الحد الأدنى للأجور', uk: 'Мінімальна зарплата', fr: 'Salaire minimum' }, emoji: '💵', color: '#E2F3E7' },
      { word: 'Despido', translations: { en: 'Dismissal / firing', ar: 'إقالة / فصل', uk: 'Звільнення', fr: 'Licenciement' }, emoji: '🚪', color: '#FCE8E8' },
      { word: 'Jubilación', translations: { en: 'Retirement', ar: 'التقاعد', uk: 'Пенсія', fr: 'Retraite' }, emoji: '👴', color: '#FFF4E5' },
      { word: 'Entrevista de trabajo', translations: { en: 'Job interview', ar: 'مقابلة عمل', uk: 'Співбесіда', fr: "Entretien d'embauche" }, emoji: '🤝', color: '#EBF8FF' },
      { word: 'Ascenso', translations: { en: 'Promotion', ar: 'ترقية', uk: 'Підвищення', fr: 'Promotion' }, emoji: '📈', color: '#E2F3E7' },
      { word: 'Jornada laboral', translations: { en: 'Working day / shift', ar: 'يوم العمل / الدوام', uk: 'Робочий день', fr: 'Journée de trabajo' }, emoji: '📅', color: '#EDF2F7' }
    ]
  },
  {
    id: 'viajes-turismo-b2',
    name: 'Viajes y Turismo',
    emoji: '✈️',
    translations: { en: 'Travel & Tourism', ar: 'السفر والسياحة', uk: 'Подорожі та туризм', fr: 'Voyages et Tourisme' },
    words: [
      { word: 'Alojamiento', translations: { en: 'Accommodation', ar: 'الإقامة', uk: 'Житло / розміщення', fr: 'Hébergement' }, emoji: '🏨', color: '#EBF8FF' },
      { word: 'Itinerario', translations: { en: 'Itinerary', ar: 'مسار الرحلة', uk: 'Маршрут', fr: 'Itinéraire' }, emoji: '🗺️', color: '#E3EEF9' },
      { word: 'Pasaporte', translations: { en: 'Passport', ar: 'جواز سفر', uk: 'Паспорт', fr: 'Passeport' }, emoji: '🛂', color: '#E2F3E7' },
      { word: 'Destino turístico', translations: { en: 'Tourist destination', ar: 'وجهة سياحية', uk: 'Туристичний напрямок', fr: 'Destination touristique' }, emoji: '🏖️', color: '#FEFCBF' },
      { word: 'Equipaje de mano', translations: { en: 'Hand luggage', ar: 'حقيبة يد', uk: 'Ручна поклажа', fr: 'Bagage de cabine' }, emoji: '🧳', color: '#EDF2F7' }
    ]
  }
];

const c1Themes: GlossaryTheme[] = [
  {
    id: 'marcadores',
    name: 'Marcadores Discursivos',
    emoji: '🧠',
    translations: { en: 'Discourse Markers', ar: 'العلامات الخطابية', uk: 'Дискурсивні маркери', fr: 'Marqueurs Discursifs' },
    words: [
      { word: 'No obstante', translations: { en: 'Nevertheless', ar: 'ومع ذلك', uk: 'Проте', fr: 'Néanmoins' }, emoji: '⚖️', color: '#FEFCBF' },
      { word: 'Por consiguiente', translations: { en: 'Therefore', ar: 'بناء على ذلك', uk: 'Отже', fr: 'Par conséquent' }, emoji: '👉', color: '#FEFCBF' },
      { word: 'En resumen', translations: { en: 'In summary', ar: 'باختصار', uk: 'Підсумовуючи', fr: 'En résumé' }, emoji: '📌', color: '#FEFCBF' },
      { word: 'Puesto que', translations: { en: 'Since', ar: 'بма أن', uk: 'Оскільки', fr: 'Puisque' }, emoji: '📎', color: '#FEFCBF' },
      { word: 'A pesar de', translations: { en: 'Despite', ar: 'بالرغم من', uk: 'Незважаючи на', fr: 'Malgré' }, emoji: '💪', color: '#FEFCBF' },
    ],
  },
  {
    id: 'sociedad-politica-c1',
    name: 'Sociedad y Política',
    emoji: '⚖️',
    translations: { en: 'Society and Politics', ar: 'المجتمع والسياسة', uk: 'Суспільство та політика', fr: 'Société et Politique' },
    words: [
      { word: 'Democracia', translations: { en: 'Democracy', ar: 'الديمقراطية', uk: 'Демократія', fr: 'Démocratie' }, emoji: '🗳️', color: '#E3EEF9' },
      { word: 'Ciudadanía', translations: { en: 'Citizenship', ar: 'المواطنة', uk: 'Громадянство', fr: 'Citoyenneté' }, emoji: '🪪', color: '#E3EEF9' },
      { word: 'Derechos humanos', translations: { en: 'Human rights', ar: 'حقوق الإنسان', uk: 'Права людини', fr: 'Derechos de l\'homme' }, emoji: '🌍', color: '#E2F3E7' },
      { word: 'Globalización', translations: { en: 'Globalization', ar: 'العولمة', uk: 'Глобалізація', fr: 'Mondialisation' }, emoji: '🌐', color: '#EBF8FF' },
      { word: 'Diversidad cultural', translations: { en: 'Cultural diversity', ar: 'التنوع الثقافي', uk: 'Культурне різноманіття', fr: 'Diversité culturelle' }, emoji: '🎭', color: '#F3E8FF' },
      { word: 'Bienestar social', translations: { en: 'Social welfare', ar: 'الرعاية الاجتماعية', uk: 'Соціальне благополуччя', fr: 'Bien-être social' }, emoji: '🏥', color: '#E2F3E7' },
      { word: 'Polémica', translations: { en: 'Controversy', ar: 'جدل', uk: 'Полеміка / суперечка', fr: 'Polémique' }, emoji: '🗣️', color: '#FCE8E8' },
      { word: 'Inmigración', translations: { en: 'Immigration', ar: 'الهجرة', uk: 'Імміграція', fr: 'Immigration' }, emoji: '🧳', color: '#FFF4E5' },
      { word: 'Manifestación', translations: { en: 'Protest / demonstration', ar: 'مظاهرة', uk: 'Демонстрація / протест', fr: 'Manifestation' }, emoji: '📢', color: '#FFF4E5' },
      { word: 'Legislación', translations: { en: 'Legislation', ar: 'تشريع', uk: 'Законодавство', fr: 'Législation' }, emoji: '📜', color: '#EDF2F7' }
    ]
  },
  {
    id: 'ciencia-tecnologia-c1',
    name: 'Ciencia y Tecnología',
    emoji: '🔬',
    translations: { en: 'Science and Technology', ar: 'العلوم والتكنولوجيا', uk: 'Наука і технології', fr: 'Science et Technologie' },
    words: [
      { word: 'Inteligencia artificial', translations: { en: 'Artificial intelligence', ar: 'الذكاء الاصطناعي', uk: 'Штучний інтелект', fr: 'Intelligence artificielle' }, emoji: '🤖', color: '#F3E8FF' },
      { word: 'Algoritmo', translations: { en: 'Algorithm', ar: 'خوارزمية', uk: 'Алгоритм', fr: 'Algorithme' }, emoji: '💻', color: '#EDF2F7' },
      { word: 'Dispositivo', translations: { en: 'Device', ar: 'جهاز', uk: 'Пристрій', fr: 'Dispositif' }, emoji: '📱', color: '#EBF8FF' },
      { word: 'Investigación', translations: { en: 'Research', ar: 'بحث علمي', uk: 'Дослідження', fr: 'Recherche' }, emoji: '🔍', color: '#E3EEF9' },
      { word: 'Desarrollo tecnológico', translations: { en: 'Technological development', ar: 'التطور التكنولوجي', uk: 'Технологічний розвиток', fr: 'Développement technologique' }, emoji: '🚀', color: '#FFF4E5' },
      { word: 'Ciberseguridad', translations: { en: 'Cybersecurity', ar: 'الأمن السيبراني', uk: 'Кібербезпека', fr: 'Cybersécurité' }, emoji: '🛡️', color: '#E2F3E7' },
      { word: 'Biotecnología', translations: { en: 'Biotechnology', ar: 'التكنولوجيا الحيوية', uk: 'Біотехноロジー', fr: 'Biotechnologie' }, emoji: '🧬', color: '#E2F3E7' },
      { word: 'Innovación', translations: { en: 'Innovation', ar: 'ابتكار', uk: 'Інновація', fr: 'Innovation' }, emoji: '💡', color: '#FEFCBF' },
      { word: 'Navegador', translations: { en: 'Browser', ar: 'متصفح', uk: 'Браузер', fr: 'Navigateur' }, emoji: '🌐', color: '#EBF8FF' },
      { word: 'Almacenamiento en la nube', translations: { en: 'Cloud storage', ar: 'التخزين السحابий', uk: 'Хмарне сховище', fr: 'Stockage en nuage' }, emoji: '☁️', color: '#E3EEF9' }
    ]
  },
  {
    id: 'economia-finanzas-c1',
    name: 'Economía y Finanzas',
    emoji: '📈',
    translations: { en: 'Economy & Finance', ar: 'الاقتصاد والتمويل', uk: 'Економіка та фінанси', fr: 'Économie et Finance' },
    words: [
      { word: 'Inflación', translations: { en: 'Inflation', ar: 'التضخم', uk: 'Інфляція', fr: 'Inflation' }, emoji: '💸', color: '#FFF4E5' },
      { word: 'Presupuesto', translations: { en: 'Budget', ar: 'الميزانية', uk: 'Бюджет', fr: 'Budget' }, emoji: '📊', color: '#E3EEF9' },
      { word: 'Inversión', translations: { en: 'Investment', ar: 'الاستثمار', uk: 'Інвестиція', fr: 'Investissement' }, emoji: '💰', color: '#E2F3E7' },
      { word: 'Tasa de interés', translations: { en: 'Interest rate', ar: 'سعر الفائدة', uk: 'Відсоткова ставка', fr: "Taux d'intérêt" }, emoji: '📉', color: '#EDF2F7' },
      { word: 'Mercado financiero', translations: { en: 'Financial market', ar: 'السوق المالي', uk: 'Фінансовий ринок', fr: 'Marché financier' }, emoji: '🏛️', color: '#EBF8FF' }
    ]
  }
];

const c2Themes: GlossaryTheme[] = [
  {
    id: 'expresiones-idiomaticas-c2',
    name: 'Expresiones Idiomáticas y Modismos',
    emoji: '🎭',
    translations: { en: 'Idioms and Colloquialisms', ar: 'التعبيرات الاصطلاحية', uk: 'Ідіоми та фразеологізми', fr: 'Expressions Idiomatiques' },
    words: [
      { word: 'Meter la pata', translations: { en: 'To screw up / make a mistake', ar: 'يرتكب خطأً فادحاً', uk: 'Зробити дурницю / схибити', fr: 'Mettre les pieds dans le plat' }, emoji: '👣', color: '#FCE8E8' },
      { word: 'Tomar el pelo', translations: { en: 'To pull someone\'s leg', ar: 'يمزح مع شخص / يسخر من', uk: 'Морочити голову / жартувати', fr: 'Faire marcher quelqu\'un' }, emoji: '💇', color: '#FFF4E5' },
      { word: 'Echar de menos', translations: { en: 'To miss', ar: 'يشتاق إلى', uk: 'Сумувати за', fr: 'Manquer à' }, emoji: '💔', color: '#FCE8E8' },
      { word: 'Costar un ojo de la cara', translations: { en: 'To cost an arm and a leg', ar: 'يكلف الكثير جداً', uk: 'Коштувати шалених грошей', fr: 'Coûter les yeux de la tête' }, emoji: '👁️', color: '#FEFCBF' },
      { word: 'Estar en las nubes', translations: { en: 'To be daydreaming', ar: 'شارد الذهن', uk: 'Літати в хмарах', fr: 'Être dans les nuages' }, emoji: '☁️', color: '#E3EEF9' },
      { word: 'Ponerse las pilas', translations: { en: 'To get one\'s act together', ar: 'يستجمع طاقته / يجد في العمل', uk: 'Взятися за розум / підбадьоритися', fr: 'Se secouer' }, emoji: '🔋', color: '#E2F3E7' },
      { word: 'Dar en el clavo', translations: { en: 'To hit the nail on the head', ar: 'يصيب عين الحقيقة', uk: 'Влучити в ціль', fr: 'Frapper dans le mille' }, emoji: '🎯', color: '#E2F3E7' },
      { word: 'Tirar la toalla', translations: { en: 'To give up', ar: 'يستسلم / يرمي المنديل', uk: 'Здатися', fr: 'Jeter l\'éponge' }, emoji: '🏳️', color: '#EDF2F7' },
      { word: 'Irse por las ramas', translations: { en: 'To beat around the bush', ar: 'يتفرع في الحديث / يلف ويدور', uk: 'Ходити манівцями', fr: 'Tourner autour du pot' }, emoji: '🌿', color: '#FFF4E5' },
      { word: 'Hacer la vista gorda', translations: { en: 'To turn a blind eye', ar: 'يتغاضى عن', uk: 'Закривати очі на щось', fr: 'Fermer les yeux sur quelque chose' } }
    ]
  },
  {
    id: 'literatura-filosofia-c2',
    name: 'Literatura y Filosofía',
    emoji: '📚',
    translations: { en: 'Literature & Philosophy', ar: 'الأدب والفلسفة', uk: 'Література та філософія', fr: 'Littérature et Philosophie' },
    words: [
      { word: 'Metáfora', translations: { en: 'Metaphor', ar: 'استعارة', uk: 'Метафора', fr: 'Métaphore' }, emoji: '🗣️', color: '#F3E8FF' },
      { word: 'Ensayo', translations: { en: 'Essay', ar: 'مقال / أطروحة', uk: 'Есе', fr: 'Essai' }, emoji: '📝', color: '#E3EEF9' },
      { word: 'Existencialismo', translations: { en: 'Existentialism', ar: 'الوجودية', uk: 'الوجودية', fr: 'Existentialisme' }, emoji: '🧠', color: '#EDF2F7' },
      { word: 'Paradoja', translations: { en: 'Paradox', ar: 'مفارقة', uk: 'Парадокс', fr: 'Paradoxe' }, emoji: '🌀', color: '#F3E8FF' },
      { word: 'Epifanía', translations: { en: 'Epiphany', ar: 'تجلي', uk: 'Прозріння', fr: 'Épiphanie' }, emoji: '⚡', color: '#FEFCBF' },
      { word: 'Cosmovisión', translations: { en: 'Worldview', ar: 'رؤية العالم', uk: 'Світогляд', fr: 'Vision du monde' }, emoji: '🌌', color: '#EBF8FF' },
      { word: 'Retórica', translations: { en: 'Rhetoric', ar: 'البلاغة', uk: 'Риторика', fr: 'Rhétorique' }, emoji: '🗣️', color: '#F3E8FF' },
      { word: 'Escepticismo', translations: { en: 'Skepticism', ar: 'الشكوكية', uk: 'Скептицизм', fr: 'Scepticisme' }, emoji: '🤨', color: '#EDF2F7' },
      { word: 'Estética', translations: { en: 'Aesthetics', ar: 'علم الجمال', uk: 'Естетика', fr: 'Esthétique' }, emoji: '🎨', color: '#E2F3E7' },
      { word: 'Trascendencia', translations: { en: 'Transcendence', ar: 'السمو / التسامي', uk: 'Трансцендентність', fr: 'Transcendance' } }
    ]
  },
  {
    id: 'mente-psicologia-c2',
    name: 'Mente y Psicología',
    emoji: '🧠',
    translations: { en: 'Mind & Psychology', ar: 'العقل وعلم النفس', uk: 'Розум і психологія', fr: 'Esprit et Psychologie' },
    words: [
      { word: 'Subconsciente', translations: { en: 'Subconscious', ar: 'اللاشعور / العقل الباطن', uk: 'Підсвідомість', fr: 'Subconscient' }, emoji: '💭', color: '#EDF2F7' },
      { word: 'Introspección', translations: { en: 'Introspection', ar: 'التأمل الذاتي', uk: 'Самоаналіз', fr: 'Introspection' }, emoji: '🧘', color: '#E2F3E7' },
      { word: 'Resiliencia', translations: { en: 'Resilience', ar: 'المرونة النفسية', uk: 'Стійкість', fr: 'Résilience' }, emoji: '🌱', color: '#E2F3E7' },
      { word: 'Cognitivo', translations: { en: 'Cognitive', ar: 'معرفي', uk: 'Когнітивний', fr: 'Cognitif' }, emoji: '⚙️', color: '#FFF4E5' },
      { word: 'Empatía', translations: { en: 'Empathy', ar: 'التعاطف', uk: 'Емпатія', fr: 'Empatía' }, emoji: '❤️', color: '#FCE8E8' }
    ]
  }
];
export const glossaryByLevel: Record<Level, GlossaryTheme[]> = {
  A1: a1Themes,
  A2: a2Themes,
  B1: b1Themes,
  B2: b2Themes,
  C1: c1Themes,
  C2: c2Themes,
};

// ============================================================
// VERBS BY LEVEL
// ============================================================

const a1Verbs: VerbGroup[] = [
  {
    id: 'basicos',
    name: 'Verbos Básicos',
    emoji: '📗',
    translations: { en: 'Basic Verbs', ar: 'الأفعال الأساسية', uk: 'Основні дієслова', fr: 'Verbes de Base' },
    verbs: [
      {
        infinitive: 'Ser', emoji: '🪪',
        translations: { en: 'To be (identity)', ar: 'يكون (الهوية)', uk: 'Бути (ідентичність)', fr: 'Être (identité)' },
        conjugation: { yo: 'soy', tú: 'eres', él: 'es', nosotros: 'somos', vosotros: 'sois', ellos: 'son' },
        example: 'Yo soy Ana.',
        exampleTranslations: { en: 'I am Ana.', ar: 'أنا آنا.', uk: 'Я Ана.', fr: 'Je suis Ana.' },
      },
      {
        infinitive: 'Estar', emoji: '📍',
        translations: { en: 'To be (location/state)', ar: 'يكون (مكان/حالة)', uk: 'Бути (місце/стан)', fr: 'Être (lieu/état)' },
        conjugation: { yo: 'estoy', tú: 'estás', él: 'está', nosotros: 'estamos', vosotros: 'estáis', ellos: 'están' },
        example: 'Yo estoy en Málaga.',
        exampleTranslations: { en: 'I am in Málaga.', ar: 'أنا في ملقة.', uk: 'Я в Малазі.', fr: 'Je suis à Málaga.' },
      },
      {
        infinitive: 'Tener', emoji: '🤲',
        translations: { en: 'To have', ar: 'يملك', uk: 'Мати', fr: 'Avoir' },
        conjugation: { yo: 'tengo', tú: 'tienes', él: 'tiene', nosotros: 'tenemos', vosotros: 'tenéis', ellos: 'tienen' },
        example: 'Yo tengo 30 años.',
        exampleTranslations: { en: 'I am 30 years old.', ar: 'عمري 30 سنة.', uk: 'Мені 30 років.', fr: "J'ai 30 ans." },
      },
      {
        infinitive: 'Llamarse', emoji: '🏷️',
        translations: { en: 'To be called', ar: 'يُسمى', uk: 'Називатися', fr: "S'appeler" },
        conjugation: { yo: 'me llamo', tú: 'te llamas', él: 'se llama', nosotros: 'nos llamamos', vosotros: 'os llamáis', ellos: 'se llaman' },
        example: 'Yo me llamo Carlos.',
        exampleTranslations: { en: 'My name is Carlos.', ar: 'اسمي كارلوس.', uk: 'Мене звати Карлос.', fr: "Je m'appelle Carlos." },
      },
      {
        infinitive: 'Vivir', emoji: '🏠',
        translations: { en: 'To live', ar: 'يعيش', uk: 'Жити', fr: 'Vivre' },
        conjugation: { yo: 'vivo', tú: 'vives', él: 'vive', nosotros: 'vivimos', vosotros: 'vivís', ellos: 'viven' },
        example: 'Yo vivo en España.',
        exampleTranslations: { en: 'I live in Spain.', ar: 'أعيش في إسبانيا.', uk: 'Я живу в Іспанії.', fr: "Je vis en Espagne." },
      },
      {
        infinitive: 'Ir', emoji: '🚶',
        translations: { en: 'To go', ar: 'يذهب', uk: 'Іти', fr: 'Aller' },
        conjugation: { yo: 'voy', tú: 'vas', él: 'va', nosotros: 'vamos', vosotros: 'vais', ellos: 'van' },
        example: 'Yo voy a la escuela.',
        exampleTranslations: { en: 'I go to school.', ar: 'أذهب إلى المدرسة.', uk: 'Я йду в школу.', fr: "Je vais à l'école." },
      },
      {
        infinitive: 'Querer', emoji: '❤️',
        translations: { en: 'To want', ar: 'يريد', uk: 'Хотіти', fr: 'Vouloir' },
        conjugation: { yo: 'quiero', tú: 'quieres', él: 'quiere', nosotros: 'queremos', vosotros: 'queréis', ellos: 'quieren' },
        example: 'Yo quiero agua.',
        exampleTranslations: { en: 'I want water.', ar: 'أريد ماء.', uk: 'Я хочу воду.', fr: "Je veux de l'eau." },
      },
    ],
  },
];

const a2Verbs: VerbGroup[] = [
  {
    id: 'cotidianos',
    name: 'Verbos de la Rutina Diaria',
    emoji: '📘',
    translations: { en: 'Daily Routine Verbs', ar: 'أفعال الروتين اليومي', uk: 'Дієслова щоденної рутини', fr: 'Verbes du Quotidien' },
    verbs: [
      {
        infinitive: 'Despertarse', emoji: '⏰',
        translations: { en: 'To wake up', ar: 'يستيقظ', uk: 'Прокидатися', fr: 'Se réveiller' },
        conjugation: { yo: 'me despierto', tú: 'te despiertas', él: 'se despierta', nosotros: 'nos despertamos', vosotros: 'os despertáis', ellos: 'se despiertan' },
        example: 'Me despierto a las siete.',
        exampleTranslations: { en: 'I wake up at seven.', ar: 'أستيقظ في السابعة.', uk: 'Я прокидаюся о сьомій.', fr: 'Je me réveille à sept heures.' },
      },
      {
        infinitive: 'Comer', emoji: '🍽️',
        translations: { en: 'To eat', ar: 'يأكل', uk: 'Їсти', fr: 'Manger' },
        conjugation: { yo: 'como', tú: 'comes', él: 'come', nosotros: 'comemos', vosotros: 'coméis', ellos: 'comen' },
        example: 'Nosotros comemos a las dos.',
        exampleTranslations: { en: 'We eat at two.', ar: 'نأكل في الثانية.', uk: 'Ми їмо о другій.', fr: 'Nous mangeons à deux heures.' },
      },
      {
        infinitive: 'Dormir', emoji: '😴',
        translations: { en: 'To sleep', ar: 'ينام', uk: 'Спати', fr: 'Dormir' },
        conjugation: { yo: 'duermo', tú: 'duermes', él: 'duerme', nosotros: 'dormimos', vosotros: 'dormís', ellos: 'duermen' },
        example: 'Yo duermo ocho horas.',
        exampleTranslations: { en: 'I sleep eight hours.', ar: 'أنام ثماني ساعات.', uk: 'Я сплю вісім годин.', fr: 'Je dors huit heures.' },
      },
      {
        infinitive: 'Trabajar', emoji: '💼',
        translations: { en: 'To work', ar: 'يعمل', uk: 'Працювати', fr: 'Travailler' },
        conjugation: { yo: 'trabajo', tú: 'trabajas', él: 'trabaja', nosotros: 'trabajamos', vosotros: 'trabajáis', ellos: 'trabajan' },
        example: 'Ella trabaja en un hospital.',
        exampleTranslations: { en: 'She works in a hospital.', ar: 'تعمل في مستشفى.', uk: 'Вона працює в лікарні.', fr: 'Elle travaille dans un hôpital.' },
      },
      {
        infinitive: 'Estudiar', emoji: '📖',
        translations: { en: 'To study', ar: 'يدرس', uk: 'Вчитися', fr: 'Étudier' },
        conjugation: { yo: 'estudio', tú: 'estudias', él: 'estudia', nosotros: 'estudiamos', vosotros: 'estudiáis', ellos: 'estudian' },
        example: 'Yo estudio español.',
        exampleTranslations: { en: 'I study Spanish.', ar: 'أدرس الإسبانية.', uk: 'Я вивчаю іспанську.', fr: "J'étudie l'espagnol." },
      },
      {
        infinitive: 'Comprar', emoji: '🛍️',
        translations: { en: 'To buy', ar: 'يشتري', uk: 'Купити', fr: 'Acheter' },
        conjugation: { yo: 'compro', tú: 'compras', él: 'compra', nosotros: 'compramos', vosotros: 'compráis', ellos: 'compran' },
        example: 'Necesito comprar pan.',
        exampleTranslations: { en: 'I need to buy bread.', ar: 'أحتاج إلى شراء خبز.', uk: 'Мені потрібно купити хліб.', fr: "J'ai besoin d'acheter du pain." },
      },
    ],
  },
  {
    id: 'pasado',
    name: 'Verbos en Pasado (Indefinido)',
    emoji: '📙',
    translations: { en: 'Past Tense Verbs', ar: 'أفعال الماضي', uk: 'Дієслова минулого часу', fr: 'Verbes au Passé' },
    verbs: [
      {
        infinitive: 'Hablar', emoji: '🗣️',
        translations: { en: 'To speak', ar: 'يتكلم', uk: 'Говорити', fr: 'Parler' },
        conjugation: { yo: 'hablé', tú: 'hablaste', él: 'habló', nosotros: 'hablamos', vosotros: 'hablasteis', ellos: 'hablaron' },
        example: 'Ayer hablé con mi madre.',
        exampleTranslations: { en: 'Yesterday I spoke with my mother.', ar: 'تحدثت مع أمي بالأمس.', uk: 'Вчора я говорив з мамою.', fr: "Hier j'ai parlé avec ma mère." },
      },
      {
        infinitive: 'Comer', emoji: '🍽️',
        translations: { en: 'To eat (past)', ar: 'أكل (ماضي)', uk: 'Їсти (минулий час)', fr: 'Manger (passé)' },
        conjugation: { yo: 'comí', tú: 'comiste', él: 'comió', nosotros: 'comimos', vosotros: 'comisteis', ellos: 'comieron' },
        example: 'Comimos paella en Málaga.',
        exampleTranslations: { en: 'We ate paella in Málaga.', ar: 'أكلنا باييلا في ملقة.', uk: 'Ми їли паелью в Малазі.', fr: 'Nous avons mangé de la paella à Málaga.' },
      },
      {
        infinitive: 'Ir', emoji: '🚶',
        translations: { en: 'To go (past)', ar: 'ذهب (ماضي)', uk: 'Ходити (минулий час)', fr: 'Aller (passé)' },
        conjugation: { yo: 'fui', tú: 'fuiste', él: 'fue', nosotros: 'fuimos', vosotros: 'fuisteis', ellos: 'fueron' },
        example: 'Fui al supermercado.',
        exampleTranslations: { en: 'I went to the supermarket.', ar: 'ذهبت إلى السوبرماركت.', uk: 'Я пішов у супермаркет.', fr: 'Je suis allé au supermarché.' },
      },
    ],
  },
];

const b1Verbs: VerbGroup[] = [
  {
    id: 'subjuntivo-presente',
    name: 'Subjuntivo Presente',
    emoji: '📕',
    translations: { en: 'Present Subjunctive', ar: 'المضارع الشرطي', uk: 'Теперішній умовний спосіб', fr: 'Subjonctif Présent' },
    verbs: [
      {
        infinitive: 'Hablar', emoji: '🗣️',
        translations: { en: 'To speak (subj.)', ar: 'يتكلم (شرطي)', uk: 'Говорити (умовний)', fr: 'Parler (subj.)' },
        conjugation: { yo: 'hable', tú: 'hables', él: 'hable', nosotros: 'hablemos', vosotros: 'habléis', ellos: 'hablen' },
        example: 'Quiero que hables español.',
        exampleTranslations: { en: 'I want you to speak Spanish.', ar: 'أريدك أن تتكلم الإسبانية.', uk: 'Я хочу, щоб ти говорив іспанською.', fr: 'Je veux que tu parles espagnol.' },
      },
      {
        infinitive: 'Tener', emoji: '🤲',
        translations: { en: 'To have (subj.)', ar: 'يملك (شرطي)', uk: 'Мати (умовний)', fr: 'Avoir (subj.)' },
        conjugation: { yo: 'tenga', tú: 'tengas', él: 'tenga', nosotros: 'tengamos', vosotros: 'tengáis', ellos: 'tengan' },
        example: 'Espero que tengas suerte.',
        exampleTranslations: { en: 'I hope you have luck.', ar: 'أتمنى أن يحالفك الحظ.', uk: 'Сподіваюся, тобі пощастить.', fr: "J'espère que tu as de la chance." },
      },
      {
        infinitive: 'Hacer', emoji: '🛠️',
        translations: { en: 'To do / make (subj.)', ar: 'يفعل (شرطي)', uk: 'Робити (умовний)', fr: 'Faire (subj.)' },
        conjugation: { yo: 'haga', tú: 'hagas', él: 'haga', nosotros: 'hagamos', vosotros: 'hagáis', ellos: 'hagan' },
        example: 'Es importante que hagas la tarea.',
        exampleTranslations: { en: 'It is important that you do the homework.', ar: 'من المهم أن تفعل الواجب المنزلي.', uk: 'Важливо, щоб ти зробив домашнє завдання.', fr: 'Il est important que tu fasses tes devoirs.' },
      },
      {
        infinitive: 'Querer', emoji: '❤️',
        translations: { en: 'To want (subj.)', ar: 'يريد (شرطي)', uk: 'Хотіти (умовний)', fr: 'Vouloir (subj.)' },
        conjugation: { yo: 'quiera', tú: 'quieras', él: 'quiera', nosotros: 'queramos', vosotros: 'queráis', ellos: 'quieran' },
        example: 'No creo que ella quiera venir.',
        exampleTranslations: { en: "I don't think she wants to come.", ar: 'لا أعتقد أنها تريد المجيء.', uk: 'Я не думаю, що вона хоче прийти.', fr: "Je ne pense pas qu'elle veuille venir." },
      },
      {
        infinitive: 'Ir', emoji: '🚶',
        translations: { en: 'To go (subj.)', ar: 'يذهب (شرطي)', uk: 'Йти (умовний)', fr: 'Aller (subj.)' },
        conjugation: { yo: 'vaya', tú: 'vayas', él: 'vaya', nosotros: 'vayamos', vosotros: 'vayáis', ellos: 'vayan' },
        example: 'Espero que te vaya bien.',
        exampleTranslations: { en: 'I hope it goes well for you.', ar: 'أتمنى لك التوفيق.', uk: 'Сподіваюся, у тебе все буде добре.', fr: "J'espère que tout va bien pour toi." },
      },
      {
        infinitive: 'Ser', emoji: '🪪',
        translations: { en: 'To be (identity, subj.)', ar: 'يكون (شرطي)', uk: 'Бути (умовний)', fr: 'Être (subj.)' },
        conjugation: { yo: 'sea', tú: 'seas', él: 'sea', nosotros: 'seamos', vosotros: 'seáis', ellos: 'sean' },
        example: 'Quiero que seas feliz.',
        exampleTranslations: { en: 'I want you to be happy.', ar: 'أريدك أن تكون سعيداً.', uk: 'Я хочу, щоб ти був щасливим.', fr: 'Je veux que tu sois heureux.' },
      },
      {
        infinitive: 'Venir', emoji: '🚪',
        translations: { en: 'To come (subj.)', ar: 'يأتي (شرطي)', uk: 'Приходити (умовний)', fr: 'Venir (subj.)' },
        conjugation: { yo: 'venga', tú: 'vengas', él: 'venga', nosotros: 'vengamos', vosotros: 'vengáis', ellos: 'vengan' },
        example: 'Me alegra que vengas.',
        exampleTranslations: { en: 'I am glad you are coming.', ar: 'يسعدني مجيئك.', uk: 'Я радий, що ти прийдеш.', fr: 'Je suis ravi que tu viennes.' },
      },
      {
        infinitive: 'Decir', emoji: '🗣️',
        translations: { en: 'To say / tell (subj.)', ar: 'يقول (شرطي)', uk: 'Говорити (умовний)', fr: 'Dire (subj.)' },
        conjugation: { yo: 'diga', tú: 'digas', él: 'diga', nosotros: 'digamos', vosotros: 'digáis', ellos: 'digan' },
        example: 'Te pido que digas la verdad.',
        exampleTranslations: { en: 'I ask you to tell the truth.', ar: 'أطلب منك أن تقول الحقيقة.', uk: 'Я прошу тебе говорити правду.', fr: 'Je te demande de dire la vérité.' },
      }
    ],
  },
  {
    id: 'pret-perfecto',
    name: 'Pretérito Perfecto',
    emoji: '⏱️',
    translations: { en: 'Present Perfect', ar: 'الماضي القريب', uk: 'Теперішній доконаний час', fr: 'Passé Composé' },
    verbs: [
      {
        infinitive: 'Comer', emoji: '🍽️',
        translations: { en: 'To eat (perf.)', ar: 'يأكل (تام)', uk: 'Їсти (доконаний)', fr: 'Manger (perf.)' },
        conjugation: { yo: 'he comido', tú: 'has comido', él: 'ha comido', nosotros: 'hemos comido', vosotros: 'habéis comido', ellos: 'han comido' },
        example: 'Hoy he comido paella.',
        exampleTranslations: { en: 'Today I have eaten paella.', ar: 'اليوم أكلت باييلا.', uk: 'Сьогодні я їв паелью.', fr: "Aujourd'hui j'ai mangé de la paella." },
      },
      {
        infinitive: 'Escribir', emoji: '✍️',
        translations: { en: 'To write (perf.)', ar: 'يكتب (تام)', uk: 'Писати (доконаний)', fr: 'Écrire (perf.)' },
        conjugation: { yo: 'he escrito', tú: 'has escrito', él: 'ha escrito', nosotros: 'hemos escrito', vosotros: 'habéis escrito', ellos: 'han escrito' },
        example: 'He escrito una carta.',
        exampleTranslations: { en: 'I have written a letter.', ar: 'لقد كتبت رسالة.', uk: 'Я написав листа.', fr: "J'ai écrit une lettre." },
      },
      {
        infinitive: 'Hacer', emoji: '🛠️',
        translations: { en: 'To do / make (perf.)', ar: 'يفعل (تام)', uk: 'Робити (доконаний)', fr: 'Faire (perf.)' },
        conjugation: { yo: 'he hecho', tú: 'has hecho', él: 'ha hecho', nosotros: 'hemos hecho', vosotros: 'habéis hecho', ellos: 'han hecho' },
        example: '¿Qué has hecho hoy?',
        exampleTranslations: { en: 'What have you done today?', ar: 'ماذا فعلت اليوم؟', uk: 'Що ти робив сьогодні?', fr: "Qu'as-tu fait aujourd'hui ?" },
      },
      {
        infinitive: 'Ver', emoji: '👁️',
        translations: { en: 'To see / watch (perf.)', ar: 'يرى (تام)', uk: 'Бачити (доконаний)', fr: 'Voir (perf.)' },
        conjugation: { yo: 'he visto', tú: 'has visto', él: 'ha visto', nosotros: 'hemos visto', vosotros: 'habéis visto', ellos: 'han visto' },
        example: 'He visto esa película.',
        exampleTranslations: { en: 'I have seen that movie.', ar: 'لقد شاهدت هذا الفيلم.', uk: 'Я бачив цей фільм.', fr: "J'ai vu ce film." },
      }
    ],
  },
  {
    id: 'verbos-cambio',
    name: 'Cambio y Sentimiento',
    emoji: '🎭',
    translations: { en: 'Change & Feeling', ar: 'أفعال التغيير والمشاعر', uk: 'Дієслова зміни та почуттів', fr: 'Verbes de Changement et Sentiments' },
    verbs: [
      {
        infinitive: 'Ponerse', emoji: '🩺',
        translations: { en: 'To become / get (state change)', ar: 'يصبح / يتغير حاله', uk: 'Ставати (зміна стану)', fr: "Devenir (changement d'état)" },
        conjugation: { yo: 'me pongo', tú: 'te pones', él: 'se pone', nosotros: 'nos ponemos', vosotros: 'os ponéis', ellos: 'se ponen' },
        example: 'Me pongo nervioso en los exámenes.',
        exampleTranslations: { en: 'I get nervous during exams.', ar: 'أشعر بالتوتر أثناء الامتحانات.', uk: 'Я нервуюся під час іспитів.', fr: 'Je deviens nerveux pendant les examens.' },
      },
      {
        infinitive: 'Sentirse', emoji: '😊',
        translations: { en: 'To feel', ar: 'يشعر', uk: 'Почуватися', fr: 'Se sentir' },
        conjugation: { yo: 'me siento', tú: 'te sientes', él: 'se siente', nosotros: 'nos sentimos', vosotros: 'os sentís', ellos: 'se sienten' },
        example: 'Hoy me siento muy feliz.',
        exampleTranslations: { en: 'Today I feel very happy.', ar: 'أشعر بالسعادة البالغة اليوم.', uk: 'Сьогодні я почуваюся дуже щасливим.', fr: "Aujourd'hui je me sens très heureux." },
      },
      {
        infinitive: 'Alegrarse', emoji: '🎉',
        translations: { en: 'To be glad', ar: 'يفرح', uk: 'Радіти', fr: 'Se réjouir' },
        conjugation: { yo: 'me alegro', tú: 'te alegras', él: 'se alegra', nosotros: 'nos alegramos', vosotros: 'os alegráis', ellos: 'se alegran' },
        example: 'Me alegro de verte.',
        exampleTranslations: { en: 'I am glad to see you.', ar: 'سعيد برؤيتك.', uk: 'Радий тебе бачити.', fr: 'Je suis ravi de te voir.' },
      },
      {
        infinitive: 'Preocuparse', emoji: '😟',
        translations: { en: 'To worry', ar: 'يقلق', uk: 'Хвилюватися', fr: "Se faire du souci" },
        conjugation: { yo: 'me preocupo', tú: 'te preocupas', él: 'se preocupa', nosotros: 'nos preocupamos', vosotros: 'os preocupáis', ellos: 'se preocupan' },
        example: 'No te preocupes por eso.',
        exampleTranslations: { en: "Don't worry about that.", ar: 'لا تقلق بشأن ذلك.', uk: 'Не хвилюйся про це.', fr: "Ne t'inquiète pas pour ça." },
      }
    ],
  },
];

const b2Verbs: VerbGroup[] = [
  {
    id: 'condicional',
    name: 'Condicional Simple',
    emoji: '📓',
    translations: { en: 'Simple Conditional', ar: 'الشرطي البسيط', uk: 'Простий умовний', fr: 'Conditionnel Simple' },
    verbs: [
      {
        infinitive: 'Poder', emoji: '💪',
        translations: { en: 'Could / would be able', ar: 'يمكن (شرطي)', uk: 'Міг би', fr: 'Pouvoir (cond.)' },
        conjugation: { yo: 'podría', tú: 'podrías', él: 'podría', nosotros: 'podríamos', vosotros: 'podríais', ellos: 'podrían' },
        example: '¿Podría usted ayudarme?',
        exampleTranslations: { en: 'Could you help me?', ar: 'هل يمكنك مساعدتي؟', uk: 'Чи могли б ви мені допомогти?', fr: 'Pourriez-vous m\'aider ?' },
      },
      {
        infinitive: 'Gustar', emoji: '❤️',
        translations: { en: 'Would like', ar: 'يود', uk: 'Хотілося б', fr: 'Aimer (cond.)' },
        conjugation: { yo: 'gustaría', tú: 'gustaría', él: 'gustaría', nosotros: 'gustaría', vosotros: 'gustaría', ellos: 'gustaría' },
        example: 'Me gustaría viajar a Japón.',
        exampleTranslations: { en: 'I would like to travel to Japan.', ar: 'أود أن أسافر إلى اليابان.', uk: 'Я хотів би поїхати в Японію.', fr: "J'aimerais voyager au Japon." },
      },
      {
        infinitive: 'Hacer', emoji: '🛠️',
        translations: { en: 'Would do / make', ar: 'يفعل (شرطي)', uk: 'Робив би', fr: 'Faire (cond.)' },
        conjugation: { yo: 'haría', tú: 'harías', él: 'haría', nosotros: 'haríamos', vosotros: 'haríais', ellos: 'harían' },
        example: 'Yo haría el trabajo, pero no tengo tiempo.',
        exampleTranslations: { en: 'I would do the job, but I don\'t have time.', ar: 'كنت سأفعل العمل، لكني لا أملك الوقت.', uk: 'Я б зробив цю роботу, але в мене немає часу.', fr: 'Je ferais le travail, mais je n\'ai pas le temps.' },
      },
      {
        infinitive: 'Tener', emoji: '🤲',
        translations: { en: 'Would have', ar: 'يملك (شرطي)', uk: 'Мав би', fr: 'Avoir (cond.)' },
        conjugation: { yo: 'tendría', tú: 'tendrías', él: 'tendría', nosotros: 'tendríamos', vosotros: 'tendríais', ellos: 'tendrían' },
        example: 'Si estudiaras más, tendrías mejores notas.',
        exampleTranslations: { en: 'If you studied more, you would have better grades.', ar: 'لو درست أكثر، لكانت درجاتك أفضل.', uk: 'Якби ти вчився більше, ти мав би кращі оцінки.', fr: 'Si tu étudiais plus, tu aurais de meilleures notes.' },
      },
      {
        infinitive: 'Decir', emoji: '🗣️',
        translations: { en: 'Would say', ar: 'يقول (شرطي)', uk: 'Сказав би', fr: 'Dire (cond.)' },
        conjugation: { yo: 'diría', tú: 'dirías', él: 'diría', nosotros: 'diríamos', vosotros: 'diríais', ellos: 'dirían' },
        example: 'Yo diría que es una buena idea.',
        exampleTranslations: { en: 'I would say that it is a good idea.', ar: 'أود أن أقول إنها فكرة جيدة.', uk: 'Я б сказав, що це хороша ідея.', fr: 'Je dirais que c\'est une bonne idée.' },
      }
    ],
  },
  {
    id: 'subjuntivo-imperfecto',
    name: 'Subjuntivo Imperfecto',
    emoji: '📕',
    translations: { en: 'Imperfect Subjunctive', ar: 'الماضي الشرطي', uk: 'Минулий умовний спосіб', fr: 'Subjonctif Imparfait' },
    verbs: [
      {
        infinitive: 'Hablar', emoji: '🗣️',
        translations: { en: 'To speak (imp. subj.)', ar: 'يتكلم (ماضي شرطي)', uk: 'Говорити (минулий умовний)', fr: 'Parler (imp. subj.)' },
        conjugation: { yo: 'hablara / hablase', tú: 'hablaras / hablases', él: 'hablara / hablase', nosotros: 'habláramos / hablásemos', vosotros: 'hablarais / hablaseis', ellos: 'hablaran / hablasen' },
        example: 'Si yo hablara más español, viajaría.',
        exampleTranslations: { en: 'If I spoke more Spanish, I would travel.', ar: 'لو كنت أتحدث الإسبانية أكثر، لسافرت.', uk: 'Якби я більше говорив іспанською, я б подорожував.', fr: 'Si je parlais plus espagnol, je voyagerais.' },
      },
      {
        infinitive: 'Comer', emoji: '🍽️',
        translations: { en: 'To eat (imp. subj.)', ar: 'يأكل (ماضي شرطي)', uk: 'Їсти (минулий умовний)', fr: 'Manger (imp. subj.)' },
        conjugation: { yo: 'comiera / comiese', tú: 'comieras / comieses', él: 'comiera / comiese', nosotros: 'comiéramos / comiésemos', vosotros: 'comierais / comieseis', ellos: 'comieran / comiesen' },
        example: 'Me gustó que comieras con nosotros.',
        exampleTranslations: { en: 'I liked that you ate with us.', ar: 'أعجبني أنك أكلت معنا.', uk: 'Мені сподобалося, що ти поїв з нами.', fr: 'J\'ai aimé que tu manges avec nous.' },
      },
      {
        infinitive: 'Vivir', emoji: '🏠',
        translations: { en: 'To live (imp. subj.)', ar: 'يعيش (ماضي شرطي)', uk: 'Жити (минулий умовний)', fr: 'Vivre (imp. subj.)' },
        conjugation: { yo: 'viviera / viviese', tú: 'vivieras / vivieses', él: 'viviera / viviese', nosotros: 'viviéramos / viviésemos', vosotros: 'vivierais / vivieseis', ellos: 'vivieran / viviesen' },
        example: 'Ojalá viviéramos en una casa más grande.',
        exampleTranslations: { en: 'I wish we lived in a bigger house.', ar: 'يا ليتنا نعيش في منزل أكبر.', uk: 'Хоч би ми жили у більшому будинку.', fr: 'Si seulement nous vivions dans une maison plus grande.' },
      }
    ]
  }
];

const c1Verbs: VerbGroup[] = [
  {
    id: 'perifrasis',
    name: 'Perífrasis Verbales',
    emoji: '⚙️',
    translations: { en: 'Verbal Periphrases', ar: 'التراكيب اللفظية', uk: 'Дієслівні перифрази', fr: 'Périphrases Verbales' },
    verbs: [
      {
        infinitive: 'Soler + infinitivo', emoji: '🔄',
        translations: { en: 'To usually do', ar: 'غالباً ما يفعل', uk: 'Зазвичай робити', fr: "Avoir l'habitude de" },
        conjugation: { yo: 'suelo', tú: 'sueles', él: 'suele', nosotros: 'solemos', vosotros: 'soléis', ellos: 'suelen' },
        example: 'Suelo desayunar café con leche.',
        exampleTranslations: { en: 'I usually have coffee with milk for breakfast.', ar: 'عادة أتناول القهوة بالحليب على الإفطار.', uk: 'Я зазвичай снідаю кавою з молоком.', fr: 'Je prends habituellement un café au lait au petit-déjeuner.' },
      },
      {
        infinitive: 'Acabar de + infinitivo', emoji: '🏁',
        translations: { en: 'To have just done', ar: 'انتهى للتو من', uk: 'Щойно зробити', fr: 'Venir de' },
        conjugation: { yo: 'acabo de', tú: 'acabas de', él: 'acaba de', nosotros: 'acabamos de', vosotros: 'acabáis de', ellos: 'acaban de' },
        example: 'Acabo de llegar a la oficina.',
        exampleTranslations: { en: 'I have just arrived at the office.', ar: 'لقد وصلت للتو إلى المكتب.', uk: 'Я щойно прийшов в офіс.', fr: "Je viens d'arriver au bureau." },
      },
      {
        infinitive: 'Dejar de + infinitivo', emoji: '🛑',
        translations: { en: 'To stop doing', ar: 'يتوقف عن فعل شيء', uk: 'Перестати робити', fr: 'Arrêter de' },
        conjugation: { yo: 'dejo de', tú: 'dejas de', él: 'deja de', nosotros: 'dejamos de', vosotros: 'dejáis de', ellos: 'dejan de' },
        example: 'Debes dejar de fumar.',
        exampleTranslations: { en: 'You must stop smoking.', ar: 'يجب أن تتوقف عن التدخين.', uk: 'Тобі слід кинути курити.', fr: 'Tu dois arrêter de fumer.' },
      },
      {
        infinitive: 'Ponerse a + infinitivo', emoji: '🎬',
        translations: { en: 'To start doing / set to', ar: 'يبدأ في فعل شيء', uk: 'Почати робити', fr: 'Se mettre à' },
        conjugation: { yo: 'me pongo a', tú: 'te pones a', él: 'se pone a', nosotros: 'nos ponemos a', vosotros: 'os ponéis a', ellos: 'se ponen a' },
        example: 'Se puso a llover de repente.',
        exampleTranslations: { en: 'It suddenly started to rain.', ar: 'بدأت تمطر فجأة.', uk: 'Раптом пішов дощ.', fr: 'Il s\'est mis à pleuvoir soudainement.' },
      },
      {
        infinitive: 'Volver a + infinitivo', emoji: '🔄',
        translations: { en: 'To do again', ar: 'يعود لفعل شيء / يكرر', uk: 'Знову робити', fr: 'Refaire / recommencer à' },
        conjugation: { yo: 'vuelvo a', tú: 'vuelves a', él: 'vuelve a', nosotros: 'volvemos a', vosotros: 'volvéis a', ellos: 'vuelven a' },
        example: 'No vuelvas a hacer eso.',
        exampleTranslations: { en: 'Don\'t do that again.', ar: 'لا تفعل ذلك مرة أخرى.', uk: 'Не роби цього знову.', fr: 'Ne refais plus ça.' },
      }
    ],
  },
  {
    id: 'condicional-compuesto',
    name: 'Condicional Compuesto',
    emoji: '⏰',
    translations: { en: 'Compound Conditional', ar: 'الشرطي المركب', uk: 'Складний умовний час', fr: 'Conditionnel Passé' },
    verbs: [
      {
        infinitive: 'Hablar', emoji: '🗣️',
        translations: { en: 'Would have spoken', ar: 'كان سيتكلم', uk: 'Поговорив би (минуле)', fr: 'Aurait parlé' },
        conjugation: { yo: 'habría hablado', tú: 'habrías hablado', él: 'habría hablado', nosotros: 'habríamos hablado', vosotros: 'habríais hablado', ellos: 'habrían hablado' },
        example: 'Habría hablado con él si hubiera venido.',
        exampleTranslations: { en: 'I would have spoken with him if he had come.', ar: 'كنت سأتحدث معه لو جاء.', uk: 'Я б поговорив з ним, якби він прийшов.', fr: 'J\'aurais parlé avec lui s\'il était venu.' },
      },
      {
        infinitive: 'Comer', emoji: '🍽️',
        translations: { en: 'Would have eaten', ar: 'كان سيأكل', uk: 'З\'їв би (минуле)', fr: 'Aurait mangé' },
        conjugation: { yo: 'habría comido', tú: 'habrías comido', él: 'habría comido', nosotros: 'habríamos comido', vosotros: 'habríais comido', ellos: 'habrían comido' },
        example: '¿Habrías comido eso?',
        exampleTranslations: { en: 'Would you have eaten that?', ar: 'هل كنت ستأكل ذلك؟', uk: 'Чи з\'їв би ти це?', fr: 'Aurais-tu mangé ça ?' },
      },
      {
        infinitive: 'Ir', emoji: '🚶',
        translations: { en: 'Would have gone', ar: 'كان سيذهب', uk: 'Пішов би (минуле)', fr: 'Serait allé' },
        conjugation: { yo: 'habría ido', tú: 'habrías ido', él: 'habría ido', nosotros: 'habríamos ido', vosotros: 'habríais ido', ellos: 'habrían ido' },
        example: 'Nosotros habríamos ido a la fiesta.',
        exampleTranslations: { en: 'We would have gone to the party.', ar: 'كна سنذهب إلى الحفلة.', uk: 'Ми б пішли на вечірку.', fr: 'Nous serions allés à la fête.' },
      }
    ]
  }
];

const c2Verbs: VerbGroup[] = [
  {
    id: 'subjuntivo-pluscuamperfecto',
    name: 'Subjuntivo Pluscuamperfecto',
    emoji: '🕰️',
    translations: { en: 'Pluperfect Subjunctive', ar: 'الماضي التام الشرطي', uk: 'Минулий доконаний умовний', fr: 'Subjonctif Plus-que-parfait' },
    verbs: [
      {
        infinitive: 'Hablar', emoji: '🗣️',
        translations: { en: 'Had spoken (subj.)', ar: 'تحدث (شرطي تام)', uk: 'Поговорив би (раніше)', fr: 'Eût parlé' },
        conjugation: { yo: 'hubiera / hubiese hablado', tú: 'hubieras / hubieses hablado', él: 'hubiera / hubiese hablado', nosotros: 'hubiéramos / hubiésemos hablado', vosotros: 'hubierais / hubieseis hablado', ellos: 'hubieran / hubiesen hablado' },
        example: 'Si yo hubiera hablado antes, no habría este problema.',
        exampleTranslations: { en: 'If I had spoken before, there wouldn\'t be this problem.', ar: 'لو كنت تحدثت من قبل، لما كانت هناك هذه المشكلة.', uk: 'Якби я заговорив раніше, цієї проблеми не було б.', fr: 'Si j\'avais parlé plus tôt, il n\'y aurait pas ce problème.' },
      },
      {
        infinitive: 'Comer', emoji: '🍽️',
        translations: { en: 'Had eaten (subj.)', ar: 'أكل (شرطي تام)', uk: 'З\'їв би (раніше)', fr: 'Eût mangé' },
        conjugation: { yo: 'hubiera / hubiese comido', tú: 'hubieras / hubieses comido', él: 'hubiera / hubiese comido', nosotros: 'hubiéramos / hubiésemos comido', vosotros: 'hubierais / hubieseis comido', ellos: 'hubieran / hubiesen comido' },
        example: 'Ojalá hubieras comido algo más.',
        exampleTranslations: { en: 'I wish you had eaten something else.', ar: 'या ليتك أكلت شيئاً آخر.', uk: 'Хоч би ти з\'їв щось інше.', fr: 'Si seulement tu avais mangé autre chose.' },
      },
      {
        infinitive: 'Ir', emoji: '🚶',
        translations: { en: 'Had gone (subj.)', ar: 'ذهب (شرطي تام)', uk: 'Пішов би (раніше)', fr: 'Eût allé' },
        conjugation: { yo: 'hubiera / hubiese ido', tú: 'hubieras / hubieses ido', él: 'hubiera / hubiese ido', nosotros: 'hubiéramos / hubiésemos ido', vosotros: 'hubierais / hubieseis ido', ellos: 'hubieran / hubiesen ido' },
        example: 'Si ellos hubiesen ido, se habrían divertido.',
        exampleTranslations: { en: 'If they had gone, they would have had fun.', ar: 'لو ذهبوا، لكانوا قد استمتعوا.', uk: 'Якби вони пішли, вони б добре провели час.', fr: 'S\'ils étaient allés, ils se seraient amusés.' },
      }
    ]
  }
];

export const verbsByLevel: Record<Level, VerbGroup[]> = {
  A1: a1Verbs,
  A2: a2Verbs,
  B1: b1Verbs,
  B2: b2Verbs,
  C1: c1Verbs,
  C2: c2Verbs,
};
