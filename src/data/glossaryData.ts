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
      { word: 'Rojo', translations: { en: 'Red', ar: 'أحمر', uk: 'Червоний', fr: 'Rouge' }, emoji: '🍎', color: '#E53E3E' },
      { word: 'Azul', translations: { en: 'Blue', ar: 'أزرق', uk: 'Синій', fr: 'Bleu' }, emoji: '💧', color: '#3182CE' },
      { word: 'Verde', translations: { en: 'Green', ar: 'أخضر', uk: 'Зелений', fr: 'Vert' }, emoji: '🐸', color: '#38A169' },
      { word: 'Amarillo', translations: { en: 'Yellow', ar: 'أصفر', uk: 'Жовтий', fr: 'Jaune' }, emoji: '☀️', color: '#ECC94B' },
      { word: 'Naranja', translations: { en: 'Orange', ar: 'برتقالي', uk: 'Помаранчевий', fr: 'Orange' }, emoji: '🍊', color: '#DD6B20' },
      { word: 'Negro', translations: { en: 'Black', ar: 'أسود', uk: 'Чорний', fr: 'Noir' }, emoji: '🎩', color: '#1A202C' },
      { word: 'Blanco', translations: { en: 'White', ar: 'أبيض', uk: 'Білий', fr: 'Blanc' }, emoji: '⬜', color: '#F7FAFC' },
      { word: 'Rosa', translations: { en: 'Pink', ar: 'وردي', uk: 'Рожевий', fr: 'Rose' }, emoji: '🌸', color: '#FBB6CE' },
      { word: 'Marrón', translations: { en: 'Brown', ar: 'بني', uk: 'Коричневий', fr: 'Marron' }, emoji: '🟫', color: '#975A16' },
      { word: 'Gris', translations: { en: 'Gray', ar: 'رمادي', uk: 'Сірий', fr: 'Gris' }, emoji: '🩶', color: '#A0AEC0' },
    ],
  },
  {
    id: 'cuerpo',
    name: 'El Cuerpo Humano',
    emoji: '🧍',
    translations: { en: 'The Human Body', ar: 'الجسم البشري', uk: 'Людське тіло', fr: 'Le Corps Humain' },
    words: [
      { word: 'La cabeza', translations: { en: 'Head', ar: 'الرأس', uk: 'Голова', fr: 'Tête' }, emoji: '👧', color: '#EBF8FF' },
      { word: 'La mano', translations: { en: 'Hand', ar: 'اليد', uk: 'Рука', fr: 'Main' }, emoji: '✋', color: '#EBF8FF' },
      { word: 'El pie', translations: { en: 'Foot', ar: 'القدم', uk: 'Нога', fr: 'Pied' }, emoji: '🦶', color: '#EBF8FF' },
      { word: 'Los ojos', translations: { en: 'Eyes', ar: 'العينان', uk: 'Очі', fr: 'Yeux' }, emoji: '👁️', color: '#EBF8FF' },
      { word: 'Las piernas', translations: { en: 'Legs', ar: 'الساقين', uk: 'Ноги', fr: 'Jambes' }, emoji: '🦵', color: '#EBF8FF' },
      { word: 'El brazo', translations: { en: 'Arm', ar: 'الذراع', uk: 'Рука', fr: 'Bras' }, emoji: '💪', color: '#EBF8FF' },
      { word: 'La boca', translations: { en: 'Mouth', ar: 'الفم', uk: 'Рот', fr: 'Bouche' }, emoji: '👄', color: '#EBF8FF' },
      { word: 'La nariz', translations: { en: 'Nose', ar: 'الأنف', uk: 'Ніс', fr: 'Nez' }, emoji: '👃', color: '#EBF8FF' },
      { word: 'Las orejas', translations: { en: 'Ears', ar: 'الأذنان', uk: 'Вуха', fr: 'Oreilles' }, emoji: '👂', color: '#EBF8FF' },
      { word: 'El dedo', translations: { en: 'Finger', ar: 'إصبع', uk: 'Палець', fr: 'Doigt' }, emoji: '☝️', color: '#EBF8FF' },
    ],
  },
  {
    id: 'numeros',
    name: 'Los Números',
    emoji: '🔢',
    translations: { en: 'Numbers', ar: 'الأرقام', uk: 'Числа', fr: 'Les Nombres' },
    words: [
      { word: 'Uno (1)', translations: { en: 'One', ar: 'واحد', uk: 'Один', fr: 'Un' }, emoji: '1️⃣', color: '#EBF8FF' },
      { word: 'Dos (2)', translations: { en: 'Two', ar: 'إثنان', uk: 'Два', fr: 'Deux' }, emoji: '2️⃣', color: '#EBF8FF' },
      { word: 'Tres (3)', translations: { en: 'Three', ar: 'ثلاثة', uk: 'Три', fr: 'Trois' }, emoji: '3️⃣', color: '#EBF8FF' },
      { word: 'Cuatro (4)', translations: { en: 'Four', ar: 'أربعة', uk: 'Чотири', fr: 'Quatre' }, emoji: '4️⃣', color: '#EBF8FF' },
      { word: 'Cinco (5)', translations: { en: 'Five', ar: 'خمسة', uk: "П'ять", fr: 'Cinq' }, emoji: '5️⃣', color: '#EBF8FF' },
      { word: 'Seis (6)', translations: { en: 'Six', ar: 'ستة', uk: 'Шість', fr: 'Six' }, emoji: '6️⃣', color: '#EBF8FF' },
      { word: 'Siete (7)', translations: { en: 'Seven', ar: 'سبعة', uk: 'Сім', fr: 'Sept' }, emoji: '7️⃣', color: '#EBF8FF' },
      { word: 'Ocho (8)', translations: { en: 'Eight', ar: 'ثمانية', uk: 'Вісім', fr: 'Huit' }, emoji: '8️⃣', color: '#EBF8FF' },
      { word: 'Nueve (9)', translations: { en: 'Nine', ar: 'تسعة', uk: "Дев'ять", fr: 'Neuf' }, emoji: '9️⃣', color: '#EBF8FF' },
      { word: 'Diez (10)', translations: { en: 'Ten', ar: 'عشرة', uk: 'Десять', fr: 'Dix' }, emoji: '🔟', color: '#EBF8FF' },
    ],
  },
  {
    id: 'ropa',
    name: 'La Ropa',
    emoji: '👕',
    translations: { en: 'Clothing', ar: 'الملابس', uk: 'Одяг', fr: 'Les Vêtements' },
    words: [
      { word: 'La camiseta', translations: { en: 'T-Shirt', ar: 'قميص', uk: 'Футболка', fr: 'T-shirt' }, emoji: '👕', color: '#EDF2F7' },
      { word: 'El pantalón', translations: { en: 'Pants', ar: 'سروال', uk: 'Штани', fr: 'Pantalon' }, emoji: '👖', color: '#EDF2F7' },
      { word: 'Los zapatos', translations: { en: 'Shoes', ar: 'حذاء', uk: 'Взуття', fr: 'Chaussures' }, emoji: '👟', color: '#EDF2F7' },
      { word: 'La chaqueta', translations: { en: 'Jacket', ar: 'سترة', uk: 'Куртка', fr: 'Veste' }, emoji: '🧥', color: '#EDF2F7' },
      { word: 'La falda', translations: { en: 'Skirt', ar: 'تنورة', uk: 'Спідниця', fr: 'Jupe' }, emoji: '👗', color: '#EDF2F7' },
      { word: 'El abrigo', translations: { en: 'Coat', ar: 'معطف', uk: 'Пальто', fr: 'Manteau' }, emoji: '🧥', color: '#EDF2F7' },
    ],
  },
  {
    id: 'saludos',
    name: 'Saludos y Presentaciones',
    emoji: '👋',
    translations: { en: 'Greetings', ar: 'التحيات', uk: 'Привітання', fr: 'Salutations' },
    words: [
      { word: 'Hola', translations: { en: 'Hello', ar: 'مرحباً', uk: 'Привіт', fr: 'Bonjour' }, emoji: '👋', color: '#FFF5F5' },
      { word: '¿Cómo estás?', translations: { en: 'How are you?', ar: 'كيف حالك؟', uk: 'Як справи?', fr: 'Comment vas-tu ?' }, emoji: '🤔', color: '#EBF8FF' },
      { word: 'Estoy bien', translations: { en: "I'm fine", ar: 'أنا بخير', uk: 'Я в порядку', fr: 'Je vais bien' }, emoji: '😊', color: '#E2F3E7' },
      { word: 'Buenos días', translations: { en: 'Good morning', ar: 'صباح الخير', uk: 'Доброго ранку', fr: 'Bonjour' }, emoji: '🌅', color: '#FFF4E5' },
      { word: 'Buenas tardes', translations: { en: 'Good afternoon', ar: 'مساء الخير', uk: 'Доброго дня', fr: 'Bon après-midi' }, emoji: '☀️', color: '#FFF4E5' },
      { word: 'Buenas noches', translations: { en: 'Good night', ar: 'تصبح على خير', uk: 'Доброї ночі', fr: 'Bonsoir' }, emoji: '🌙', color: '#F3E8FF' },
      { word: 'Adiós', translations: { en: 'Goodbye', ar: 'وداعاً', uk: 'До побачення', fr: 'Au revoir' }, emoji: '👋', color: '#FCE8E8' },
      { word: 'Por favor', translations: { en: 'Please', ar: 'من فضلك', uk: 'Будь ласка', fr: "S'il vous plaît" }, emoji: '🙏', color: '#E2F3E7' },
      { word: 'Gracias', translations: { en: 'Thank you', ar: 'شكراً', uk: 'Дякую', fr: 'Merci' }, emoji: '🙏', color: '#E2F3E7' },
    ],
  },
  {
    id: 'nacionalidades',
    name: 'Países y Nacionalidades',
    emoji: '🌍',
    translations: { en: 'Countries & Nationalities', ar: 'البلدان والجنسيات', uk: 'Країни та національності', fr: 'Pays et Nationalités' },
    words: [
      { word: 'España / español', translations: { en: 'Spain / Spanish', ar: 'إسبانيا / إسباني', uk: 'Іспанія / іспанець', fr: 'Espagne / espagnol' }, emoji: '🇪🇸', color: '#FFF5F5' },
      { word: 'Marruecos / marroquí', translations: { en: 'Morocco / Moroccan', ar: 'المغرب / مغربي', uk: 'Марокко / марокканець', fr: 'Maroc / marocain' }, emoji: '🇲🇦', color: '#FCE8E8' },
      { word: 'Francia / francés', translations: { en: 'France / French', ar: 'فرنسا / فرنسي', uk: 'Франція / француз', fr: 'France / français' }, emoji: '🇫🇷', color: '#E3EEF9' },
      { word: 'Senegal / senegalés', translations: { en: 'Senegal / Senegalese', ar: 'السنغال / سنغالي', uk: 'Сенегал / сенегалець', fr: 'Sénégal / sénégalais' }, emoji: '🇸🇳', color: '#E2F3E7' },
      { word: 'Inglaterra / inglés', translations: { en: 'England / English', ar: 'إنجلترا / إنجليزي', uk: 'Англія / англієць', fr: 'Angleterre / anglais' }, emoji: '🇬🇧', color: '#EBF8FF' },
    ],
  },
  {
    id: 'familia',
    name: 'La Familia',
    emoji: '👨‍👩‍👧‍👦',
    translations: { en: 'The Family', ar: 'العائلة', uk: "Сім'я", fr: 'La Famille' },
    words: [
      { word: 'Padre / papá', translations: { en: 'Father / dad', ar: 'أب / بابا', uk: 'Батько / тато', fr: 'Père / papa' }, emoji: '👨', color: '#E2F3E7' },
      { word: 'Madre / mamá', translations: { en: 'Mother / mom', ar: 'أم / ماما', uk: 'Мати / мама', fr: 'Mère / maman' }, emoji: '👩', color: '#FFF5F5' },
      { word: 'Hermano', translations: { en: 'Brother', ar: 'أخ', uk: 'Брат', fr: 'Frère' }, emoji: '👦', color: '#E3EEF9' },
      { word: 'Hermana', translations: { en: 'Sister', ar: 'أخت', uk: 'Сестра', fr: 'Sœur' }, emoji: '👧', color: '#FCE8E8' },
      { word: 'Hijo', translations: { en: 'Son', ar: 'ابن', uk: 'Син', fr: 'Fils' }, emoji: '👶', color: '#E2F3E7' },
      { word: 'Hija', translations: { en: 'Daughter', ar: 'ابنة', uk: 'Донька', fr: 'Fille' }, emoji: '👶', color: '#FFF5F5' },
      { word: 'Abuelo', translations: { en: 'Grandfather', ar: 'جد', uk: 'Дідусь', fr: 'Grand-père' }, emoji: '👴', color: '#FEFCBF' },
      { word: 'Abuela', translations: { en: 'Grandmother', ar: 'جدة', uk: 'Бабуся', fr: 'Grand-mère' }, emoji: '👵', color: '#FEFCBF' },
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
      { word: 'El profesor / la profesora', translations: { en: 'Teacher', ar: 'المعلم / المعلمة', uk: 'Вчитель / вчителька', fr: 'Professeur' }, emoji: '🧑‍🏫', color: '#E3EEF9' },
      { word: 'El médico / la médica', translations: { en: 'Doctor', ar: 'الطبيب / الطبيبة', uk: 'Лікар', fr: 'Médecin' }, emoji: '👨‍⚕️', color: '#E2F3E7' },
      { word: 'El cocinero / la cocinera', translations: { en: 'Cook', ar: 'الطباخ / الطباخة', uk: 'Кухар', fr: 'Cuisinier' }, emoji: '👨‍🍳', color: '#FFF4E5' },
      { word: 'El albañil', translations: { en: 'Bricklayer', ar: 'البناء', uk: 'Муляр', fr: 'Maçon' }, emoji: '👷', color: '#FEFCBF' },
      { word: 'El conductor / la conductora', translations: { en: 'Driver', ar: 'السائق / السائقة', uk: 'Водій', fr: 'Conducteur' }, emoji: '🚗', color: '#FCE8E8' },
      { word: 'El peluquero / la peluquera', translations: { en: 'Hairdresser', ar: 'مصفف الشعر', uk: 'Перукар', fr: 'Coiffeur' }, emoji: '💇', color: '#F3E8FF' },
      { word: 'El vendedor / la vendedora', translations: { en: 'Salesperson', ar: 'البائع / البائعة', uk: 'Продавець', fr: 'Vendeur' }, emoji: '🛒', color: '#EBF8FF' },
      { word: 'El agricultor', translations: { en: 'Farmer', ar: 'المزارع', uk: 'Фермер', fr: 'Agriculteur' }, emoji: '🧑‍🌾', color: '#E2F3E7' },
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
      { word: 'El lavabo / baño', translations: { en: 'Bathroom', ar: 'الحمام', uk: 'Туалет', fr: 'Toilettes' }, emoji: '🚽', color: '#EBF8FF' },
      { word: 'El autobús', translations: { en: 'Bus', ar: 'حافلة', uk: 'Автобус', fr: 'Bus' }, emoji: '🚌', color: '#FFF5F5' },
      { word: 'El metro', translations: { en: 'Metro', ar: 'مترو الأنفاق', uk: 'Метро', fr: 'Métro' }, emoji: '🚇', color: '#E2F3E7' },
      { word: 'La tienda', translations: { en: 'Shop', ar: 'متجر', uk: 'Магазин', fr: 'Magasin' }, emoji: '🏪', color: '#FEFCBF' },
      { word: 'La farmacia', translations: { en: 'Pharmacy', ar: 'صيدلية', uk: 'Аптека', fr: 'Pharmacie' }, emoji: '💊', color: '#FCE8E8' },
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
      { word: 'El viaje', translations: { en: 'Trip', ar: 'الرحلة', uk: 'Подорож', fr: 'Voyage' }, emoji: '🧳', color: '#FFF4E5' },
      { word: 'El recuerdo', translations: { en: 'Memory', ar: 'الذكرى', uk: 'Спогад', fr: 'Souvenir' }, emoji: '💭', color: '#F3E8FF' },
      { word: 'Planificar', translations: { en: 'To plan', ar: 'التخطيط', uk: 'Планувати', fr: 'Planifier' }, emoji: '📅', color: '#E3EEF9' },
      { word: 'El aeropuerto', translations: { en: 'Airport', ar: 'المطار', uk: 'Аеропорт', fr: 'Aéroport' }, emoji: '🛫', color: '#EBF8FF' },
      { word: 'El equipaje', translations: { en: 'Luggage', ar: 'الأمتعة', uk: 'Багаж', fr: 'Bagages' }, emoji: '🧳', color: '#FEFCBF' },
    ],
  },
  {
    id: 'expresiones-idiomaticas',
    name: 'Expresiones Idiomáticas',
    emoji: '🗣️',
    translations: { en: 'Idiomatic Expressions', ar: 'التعابير الاصطلاحية', uk: 'Ідіоматичні вирази', fr: 'Expressions Idiomatiques' },
    words: [
      { word: 'Estar en las nubes', translations: { en: 'To be daydreaming', ar: 'يحلم أحلام اليقظة', uk: 'Бути в хмарах', fr: 'Être dans les nuages' }, emoji: '☁️', color: '#E3EEF9' },
      { word: 'Ser pan comido', translations: { en: "To be a piece of cake", ar: 'شيء سهل جدا', uk: 'Легка справа', fr: 'Être du gâteau' }, emoji: '🍞', color: '#FEFCBF' },
      { word: 'Meter la pata', translations: { en: 'To put your foot in it', ar: 'ارتكاب خطأ', uk: 'Зробити помилку', fr: 'Mettre les pieds dans le plat' }, emoji: '🦶', color: '#FCE8E8' },
    ],
  },
];

const b2Themes: GlossaryTheme[] = [
  {
    id: 'registros',
    name: 'Registros Formal e Informal',
    emoji: '👔',
    translations: { en: 'Formal & Informal Registers', ar: 'السجلات الرسمية وغير الرسمية', uk: 'Формальні та неформальні регістри', fr: 'Registres Formel et Informel' },
    words: [
      { word: 'Estimado', translations: { en: 'Dear (formal)', ar: 'عزيزي (رسمي)', uk: 'Шановний (формальний)', fr: 'Cher (formel)' }, emoji: '📧', color: '#E2E8F0' },
      { word: 'Atentamente', translations: { en: 'Sincerely', ar: 'تفضلوا بقبول', uk: 'З повагою', fr: 'Cordialement' }, emoji: '✍️', color: '#E2E8F0' },
      { word: 'Usted', translations: { en: 'You (formal)', ar: 'أنت (رسمي)', uk: 'Ви (формальне)', fr: 'Vous (formel)' }, emoji: '🤝', color: '#E2E8F0' },
    ],
  },
  {
    id: 'subjuntivo-vocab',
    name: 'Conectores Temporales',
    emoji: '⏳',
    translations: { en: 'Temporal Connectors', ar: 'الروابط الزمنية', uk: 'Часові сполучники', fr: 'Connecteurs Temporels' },
    words: [
      { word: 'Cuando', translations: { en: 'When', ar: 'عندما', uk: 'Коли', fr: 'Quand' }, emoji: '⏰', color: '#EBF8FF' },
      { word: 'Aunque', translations: { en: 'Although', ar: 'بالرغم من', uk: 'Хоча', fr: 'Bien que' }, emoji: '⚖️', color: '#EBF8FF' },
      { word: 'Tan pronto como', translations: { en: 'As soon as', ar: 'بمجرد أن', uk: 'Як тільки', fr: 'Dès que' }, emoji: '⚡', color: '#EBF8FF' },
    ],
  },
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
      { word: 'Puesto que', translations: { en: 'Since', ar: 'بما أن', uk: 'Оскільки', fr: 'Puisque' }, emoji: '📎', color: '#FEFCBF' },
      { word: 'A pesar de', translations: { en: 'Despite', ar: 'بالرغم من', uk: 'Незважаючи на', fr: 'Malgré' }, emoji: '💪', color: '#FEFCBF' },
    ],
  },
];

const c2Themes: GlossaryTheme[] = [];

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
    id: 'subjuntivo-basico',
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
    ],
  },
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
    ],
  },
];

const c2Verbs: VerbGroup[] = [];

export const verbsByLevel: Record<Level, VerbGroup[]> = {
  A1: a1Verbs,
  A2: a2Verbs,
  B1: b1Verbs,
  B2: b2Verbs,
  C1: c1Verbs,
  C2: c2Verbs,
};
