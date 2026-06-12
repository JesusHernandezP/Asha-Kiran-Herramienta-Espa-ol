/**
 * UI translations for Glossary, Resources Hub, and Posts pages.
 */
import type { Language } from '../contexts/LanguageContext';

interface GlossaryTranslation {
  pageTitle: string;
  pageSubtitle: string;
  tabVocabulary: string;
  tabVerbs: string;
  searchPlaceholder: string;
  selectLevel: string;
  noContent: string;
  wordColumn: string;
  translationColumn: string;
  exampleColumn: string;
  conjugationTitle: string;
  pronouns: { yo: string; tú: string; él: string; nosotros: string; vosotros: string; ellos: string };
  viewAll: string;
  // Resources Hub
  recursosTitle: string;
  recursosSubtitle: string;
  lecturas: string;
  videos: string;
  audios: string;
  imagenes: string;
  lecturasDesc: string;
  videosDesc: string;
  audiosDesc: string;
  imagenesDesc: string;
  recentPosts: string;
  createPost: string;
  allResources: string;
  noPostsYet: string;
  // Post creator
  postTitle: string;
  postAuthor: string;
  postCategory: string;
  postLevel: string;
  postContent: string;
  postVideoUrl: string;
  postAudioUrl: string;
  postImageUrl: string;
  postTags: string;
  postPreview: string;
  postSave: string;
  postSaved: string;
  postDelete: string;
  backToResources: string;
  filterByLevel: string;
  allLevels: string;
}

export const glossaryTranslations: Record<Language, GlossaryTranslation> = {
  es: {
    pageTitle: 'Glosario',
    pageSubtitle: 'Vocabulario y verbos organizados por nivel y tema',
    tabVocabulary: 'Vocabulario',
    tabVerbs: 'Verbos',
    searchPlaceholder: 'Buscar palabra...',
    selectLevel: 'Seleccionar nivel',
    noContent: 'No hay contenido disponible para este nivel todavía.',
    wordColumn: 'Palabra',
    translationColumn: 'Traducción',
    exampleColumn: 'Ejemplo',
    conjugationTitle: 'Conjugación',
    pronouns: { yo: 'Yo', tú: 'Tú', él: 'Él/Ella', nosotros: 'Nosotros', vosotros: 'Vosotros', ellos: 'Ellos' },
    viewAll: 'Ver todo',
    recursosTitle: 'Recursos de Aprendizaje',
    recursosSubtitle: 'Material adicional para reforzar tu español',
    lecturas: 'Lecturas',
    videos: 'Videos',
    audios: 'Audios',
    imagenes: 'Imágenes',
    lecturasDesc: 'Textos y lecturas para practicar la comprensión lectora',
    videosDesc: 'Videos educativos para aprender de forma visual',
    audiosDesc: 'Material de audio para mejorar tu comprensión auditiva',
    imagenesDesc: 'Recursos visuales y vocabulario con imágenes',
    recentPosts: 'Publicaciones Recientes',
    createPost: 'Crear Publicación',
    allResources: 'Todos los Recursos',
    noPostsYet: 'Aún no hay publicaciones. ¡Sé el primero en crear una!',
    postTitle: 'Título',
    postAuthor: 'Autor',
    postCategory: 'Categoría',
    postLevel: 'Nivel',
    postContent: 'Contenido',
    postVideoUrl: 'URL del video (YouTube)',
    postAudioUrl: 'URL del audio',
    postImageUrl: 'URL de la imagen',
    postTags: 'Etiquetas (separadas por coma)',
    postPreview: 'Vista previa',
    postSave: 'Guardar publicación',
    postSaved: '¡Publicación guardada!',
    postDelete: 'Eliminar',
    backToResources: 'Volver a Recursos',
    filterByLevel: 'Filtrar por nivel',
    allLevels: 'Todos',
  },
  en: {
    pageTitle: 'Glossary',
    pageSubtitle: 'Vocabulary and verbs organized by level and topic',
    tabVocabulary: 'Vocabulary',
    tabVerbs: 'Verbs',
    searchPlaceholder: 'Search word...',
    selectLevel: 'Select level',
    noContent: 'No content available for this level yet.',
    wordColumn: 'Word',
    translationColumn: 'Translation',
    exampleColumn: 'Example',
    conjugationTitle: 'Conjugation',
    pronouns: { yo: 'I', tú: 'You', él: 'He/She', nosotros: 'We', vosotros: 'You all', ellos: 'They' },
    viewAll: 'View all',
    recursosTitle: 'Learning Resources',
    recursosSubtitle: 'Additional materials to strengthen your Spanish',
    lecturas: 'Readings',
    videos: 'Videos',
    audios: 'Audio',
    imagenes: 'Images',
    lecturasDesc: 'Texts and readings to practice reading comprehension',
    videosDesc: 'Educational videos to learn visually',
    audiosDesc: 'Audio materials to improve listening comprehension',
    imagenesDesc: 'Visual resources and vocabulary with images',
    recentPosts: 'Recent Posts',
    createPost: 'Create Post',
    allResources: 'All Resources',
    noPostsYet: 'No posts yet. Be the first to create one!',
    postTitle: 'Title',
    postAuthor: 'Author',
    postCategory: 'Category',
    postLevel: 'Level',
    postContent: 'Content',
    postVideoUrl: 'Video URL (YouTube)',
    postAudioUrl: 'Audio URL',
    postImageUrl: 'Image URL',
    postTags: 'Tags (comma separated)',
    postPreview: 'Preview',
    postSave: 'Save post',
    postSaved: 'Post saved!',
    postDelete: 'Delete',
    backToResources: 'Back to Resources',
    filterByLevel: 'Filter by level',
    allLevels: 'All',
  },
  ar: {
    pageTitle: 'المسرد',
    pageSubtitle: 'المفردات والأفعال حسب المستوى والموضوع',
    tabVocabulary: 'المفردات',
    tabVerbs: 'الأفعال',
    searchPlaceholder: '...ابحث عن كلمة',
    selectLevel: 'اختر المستوى',
    noContent: 'لا يوجد محتوى متاح لهذا المستوى بعد.',
    wordColumn: 'كلمة',
    translationColumn: 'ترجمة',
    exampleColumn: 'مثال',
    conjugationTitle: 'التصريف',
    pronouns: { yo: 'أنا', tú: 'أنت', él: 'هو/هي', nosotros: 'نحن', vosotros: 'أنتم', ellos: 'هم' },
    viewAll: 'عرض الكل',
    recursosTitle: 'موارد التعلم',
    recursosSubtitle: 'مواد إضافية لتعزيز لغتك الإسبانية',
    lecturas: 'قراءات',
    videos: 'فيديوهات',
    audios: 'صوتيات',
    imagenes: 'صور',
    lecturasDesc: 'نصوص وقراءات لممارسة الفهم القرائي',
    videosDesc: 'فيديوهات تعليمية للتعلم بصريا',
    audiosDesc: 'مواد صوتية لتحسين الفهم السمعي',
    imagenesDesc: 'موارد بصرية ومفردات مع صور',
    recentPosts: 'المنشورات الأخيرة',
    createPost: 'إنشاء منشور',
    allResources: 'جميع الموارد',
    noPostsYet: 'لا توجد منشورات بعد. كن أول من يكتب!',
    postTitle: 'العنوان',
    postAuthor: 'الكاتب',
    postCategory: 'الفئة',
    postLevel: 'المستوى',
    postContent: 'المحتوى',
    postVideoUrl: 'رابط الفيديو (يوتيوب)',
    postAudioUrl: 'رابط الصوت',
    postImageUrl: 'رابط الصورة',
    postTags: 'الوسوم (مفصولة بفاصلة)',
    postPreview: 'معاينة',
    postSave: 'حفظ المنشور',
    postSaved: 'تم حفظ المنشور!',
    postDelete: 'حذف',
    backToResources: 'العودة إلى الموارد',
    filterByLevel: 'تصفية حسب المستوى',
    allLevels: 'الكل',
  },
  uk: {
    pageTitle: 'Глосарій',
    pageSubtitle: 'Словниковий запас і дієслова за рівнями та темами',
    tabVocabulary: 'Словник',
    tabVerbs: 'Дієслова',
    searchPlaceholder: 'Шукати слово...',
    selectLevel: 'Обрати рівень',
    noContent: 'Ще немає вмісту для цього рівня.',
    wordColumn: 'Слово',
    translationColumn: 'Переклад',
    exampleColumn: 'Приклад',
    conjugationTitle: 'Відмінювання',
    pronouns: { yo: 'Я', tú: 'Ти', él: 'Він/Вона', nosotros: 'Ми', vosotros: 'Ви', ellos: 'Вони' },
    viewAll: 'Переглянути все',
    recursosTitle: 'Навчальні ресурси',
    recursosSubtitle: 'Додаткові матеріали для зміцнення іспанської',
    lecturas: 'Читання',
    videos: 'Відео',
    audios: 'Аудіо',
    imagenes: 'Зображення',
    lecturasDesc: 'Тексти та читання для практики розуміння прочитаного',
    videosDesc: 'Навчальні відео для візуального навчання',
    audiosDesc: 'Аудіоматеріали для покращення сприйняття на слух',
    imagenesDesc: 'Візуальні ресурси та словниковий запас з зображеннями',
    recentPosts: 'Останні публікації',
    createPost: 'Створити публікацію',
    allResources: 'Всі ресурси',
    noPostsYet: 'Поки немає публікацій. Будьте першим!',
    postTitle: 'Заголовок',
    postAuthor: 'Автор',
    postCategory: 'Категорія',
    postLevel: 'Рівень',
    postContent: 'Зміст',
    postVideoUrl: 'URL відео (YouTube)',
    postAudioUrl: 'URL аудіо',
    postImageUrl: 'URL зображення',
    postTags: 'Теги (через кому)',
    postPreview: 'Попередній перегляд',
    postSave: 'Зберегти публікацію',
    postSaved: 'Публікацію збережено!',
    postDelete: 'Видалити',
    backToResources: 'Назад до ресурсів',
    filterByLevel: 'Фільтрувати за рівнем',
    allLevels: 'Усі',
  },
  fr: {
    pageTitle: 'Glossaire',
    pageSubtitle: 'Vocabulaire et verbes organisés par niveau et thème',
    tabVocabulary: 'Vocabulaire',
    tabVerbs: 'Verbes',
    searchPlaceholder: 'Rechercher un mot...',
    selectLevel: 'Sélectionner le niveau',
    noContent: "Pas de contenu disponible pour ce niveau pour l'instant.",
    wordColumn: 'Mot',
    translationColumn: 'Traduction',
    exampleColumn: 'Exemple',
    conjugationTitle: 'Conjugaison',
    pronouns: { yo: 'Je', tú: 'Tu', él: 'Il/Elle', nosotros: 'Nous', vosotros: 'Vous', ellos: 'Ils/Elles' },
    viewAll: 'Voir tout',
    recursosTitle: "Ressources d'Apprentissage",
    recursosSubtitle: 'Matériaux supplémentaires pour renforcer votre espagnol',
    lecturas: 'Lectures',
    videos: 'Vidéos',
    audios: 'Audio',
    imagenes: 'Images',
    lecturasDesc: 'Textes et lectures pour pratiquer la compréhension écrite',
    videosDesc: 'Vidéos éducatives pour apprendre visuellement',
    audiosDesc: "Matériaux audio pour améliorer la compréhension orale",
    imagenesDesc: 'Ressources visuelles et vocabulaire avec images',
    recentPosts: 'Publications Récentes',
    createPost: 'Créer une Publication',
    allResources: 'Toutes les Ressources',
    noPostsYet: 'Pas encore de publications. Soyez le premier !',
    postTitle: 'Titre',
    postAuthor: 'Auteur',
    postCategory: 'Catégorie',
    postLevel: 'Niveau',
    postContent: 'Contenu',
    postVideoUrl: 'URL vidéo (YouTube)',
    postAudioUrl: 'URL audio',
    postImageUrl: "URL de l'image",
    postTags: 'Tags (séparés par des virgules)',
    postPreview: 'Aperçu',
    postSave: 'Sauvegarder',
    postSaved: 'Publication sauvegardée !',
    postDelete: 'Supprimer',
    backToResources: 'Retour aux Ressources',
    filterByLevel: 'Filtrer par niveau',
    allLevels: 'Tous',
  },
};
