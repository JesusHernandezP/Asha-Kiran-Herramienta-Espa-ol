import { Language } from '../contexts/LanguageContext';

export interface Resource {
  name: string;
  description: string;
  address?: string;
  hours?: string;
  free?: string;
  requirements?: string;
  contact?: string;
  web?: string;
  phone?: string;
  email?: string;
  social?: string;
  target?: string;
  activities?: string;
  status?: string;
  category: 'alimentacion' | 'alojamiento' | 'apoyo_social' | 'empleo_formacion' | 'tramites_legal' | 'salud_finanzas' | 'otros';
}

import cleanResources from './clean_resources.json';

const orangeNames = [
  'Red de Atención a Personas sin Hogar',
  'Vialia',
  'Anfremar',
  'Santander Málaga',
  'CEAR CF',
  'CBLINGUA',
  'Alojamiento de Jóvenes (La Merced Migraciones)',
  'Embajada de España en Dakar (Senegal)'
];

export const malagaResourcesList: Resource[] = (cleanResources as any).filter(
  (r: any) => !orangeNames.includes(r.name)
);

export const recursosMalagaLabels = {
  es: {
    headerTitle: 'Recursos',
    headerTitleHighlight: 'Málaga',
    headerSubtitle: 'Guía de servicios básicos, apoyo social y formación en Málaga para alumnos del Proyecto Vínculos.',
    searchPlaceholder: 'Buscar recursos (ej. Comedor, Empleo, Cruz Roja)...',
    categoryAll: 'Todos',
    categoryFood: 'Alimentación',
    categoryShelter: 'Alojamiento',
    categorySocial: 'Apoyo Social',
    categoryJob: 'Empleo y Formación',
    categoryLegal: 'Trámites y Legal',
    categoryFinance: 'Finanzas y Salud',
    categoryOther: 'Otros',
    addressLabel: 'Dirección',
    phoneLabel: 'Teléfono',
    emailLabel: 'Correo Electrónico',
    contactLabel: 'Persona de Contacto',
    hoursLabel: 'Horario',
    freeLabel: 'Gratuito',
    reqsLabel: 'Requisitos de Acceso',
    targetLabel: 'Dirigido a',
    activitiesLabel: 'Actividades y Servicios',
    statusLabel: 'Estado / Relación',
    visitWeb: 'Visitar sitio web',
    adviceBadge: 'Consejo',
    adviceTitle: '¿Necesitas ayuda adicional?',
    adviceText: 'Si te encuentras en una situación de de emergencia o necesitas orientación personalizada, acude al centro de servicios sociales más cercano a tu vivienda. El Ayuntamiento de Málaga cuenta con una red de centros en cada distrito.',
    adviceButton: 'Listado de Centros Sociales',
    noResults: 'No se encontraron recursos que coincidan con tu búsqueda.'
  },
  en: {
    headerTitle: 'Resources',
    headerTitleHighlight: 'Málaga',
    headerSubtitle: 'Guide to basic services, social support, and training in Málaga for students of the Vínculos Project.',
    searchPlaceholder: 'Search resources (e.g., Soup kitchen, Employment, Red Cross)...',
    categoryAll: 'All',
    categoryFood: 'Food & Dining',
    categoryShelter: 'Shelter & Housing',
    categorySocial: 'Social Support',
    categoryJob: 'Employment & Training',
    categoryLegal: 'Legal & Procedures',
    categoryFinance: 'Finance & Health',
    categoryOther: 'Other',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    contactLabel: 'Contact Person',
    hoursLabel: 'Hours',
    freeLabel: 'Free',
    reqsLabel: 'Access Requirements',
    targetLabel: 'Target Group',
    activitiesLabel: 'Activities & Services',
    statusLabel: 'Status / Connection',
    visitWeb: 'Visit website',
    adviceBadge: 'Advice',
    adviceTitle: 'Need additional help?',
    adviceText: 'If you are in an emergency situation or need personalized guidance, go to the nearest social services center to your home. Málaga City Hall has a network of centers in each district.',
    adviceButton: 'List of Social Centers',
    noResults: 'No resources found matching your search.'
  },
  ar: {
    headerTitle: 'موارد',
    headerTitleHighlight: 'مالقة',
    headerSubtitle: 'دليل الخدمات الأساسية والدعم الاجتماعي والتدريب في مالقة لطلاب مشروع Vínculos.',
    searchPlaceholder: 'البحث عن الموارد (مثل: مطعم اجتماعي، توظيف، الهلال الأحمر)...',
    categoryAll: 'الكل',
    categoryFood: 'التغذية والمطاعم',
    categoryShelter: 'الإيواء والسكن',
    categorySocial: 'الدعم الاجتماعي',
    categoryJob: 'التوظيف والتدريب',
    categoryLegal: 'المعاملات القانونية',
    categoryFinance: 'المالية والصحة',
    categoryOther: 'خدمات أخرى',
    addressLabel: 'العنوان',
    phoneLabel: 'الهاتف',
    emailLabel: 'البريد الإلكتروني',
    contactLabel: 'شخص الاتصال',
    hoursLabel: 'أوقات العمل',
    freeLabel: 'مجاني',
    reqsLabel: 'شروط الوصول',
    targetLabel: 'موجه إلى',
    activitiesLabel: 'الأنشطة والخدمات',
    statusLabel: 'الحالة / العلاقة',
    visitWeb: 'زيارة الموقع الإلكتروني',
    adviceBadge: 'نصيحة',
    adviceTitle: 'هل تحتاج إلى مساعدة إضافية؟',
    adviceText: 'إذا كنت في حالة طوارئ أو تحتاج إلى توجيه شخصي، فتوجه إلى أقرب مركز خدمات اجتماعية لمنزلك. تمتلك بلدية مالقة شبكة من المراكز في كل حي.',
    adviceButton: 'قائمة المراكز الاجتماعية',
    noResults: 'لم يتم العثور على موارد تطابق بحثك.'
  },
  uk: {
    headerTitle: 'Ресурси',
    headerTitleHighlight: 'Малага',
    headerSubtitle: 'Довідник основних послуг, соціальної підтримки та навчання в Малазі для студентів проекту Vínculos.',
    searchPlaceholder: 'Пошук ресурсів (напр. їдальня, працевлаштування, Червоний Хрест)...',
    categoryAll: 'Всі',
    categoryFood: 'Харчування та їдальні',
    categoryShelter: 'Притулок та житло',
    categorySocial: 'Соціальна підтримка',
    categoryJob: 'Працевлаштування та навчання',
    categoryLegal: 'Юридичні послуги',
    categoryFinance: 'Фінанси та здоров\'я',
    categoryOther: 'Інші',
    addressLabel: 'Адреса',
    phoneLabel: 'Телефон',
    emailLabel: 'Електронна пошта',
    contactLabel: 'Контактна особа',
    hoursLabel: 'Графік роботи',
    freeLabel: 'Безкоштовно',
    reqsLabel: 'Вимоги для доступу',
    targetLabel: 'Цільова група',
    activitiesLabel: 'Заходи та послуги',
    statusLabel: 'Статус / Зв\'язок',
    visitWeb: 'Відвідати сайт',
    adviceBadge: 'Порада',
    adviceTitle: 'Потрібна додаткова допомога?',
    adviceText: 'Якщо ви перебуваєте в надзвичайній ситуації або потребуєте індивідуальної консультації, зверніться до найближчого центру соціальних послуг. Мерія Малаги має мережу центрів у кожному районі.',
    adviceButton: 'Список соціальних центрів',
    noResults: 'Не знайдено ресурсів, що відповідають вашому запиту.'
  },
  fr: {
    headerTitle: 'Ressources',
    headerTitleHighlight: 'Málaga',
    headerSubtitle: 'Guide des services de base, du soutien social et de la formation à Málaga pour les étudiants du projet Vínculos.',
    searchPlaceholder: 'Rechercher des ressources (ex. soupe populaire, emploi, Croix-Rouge)...',
    categoryAll: 'Tout',
    categoryFood: 'Alimentation',
    categoryShelter: 'Hébergement',
    categorySocial: 'Soutien Social',
    categoryJob: 'Emploi & Formation',
    categoryLegal: 'Procédures & Legal',
    categoryFinance: 'Finances & Santé',
    categoryOther: 'Autres',
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone',
    emailLabel: 'Email',
    contactLabel: 'Personne de Contact',
    hoursLabel: 'Horaires',
    freeLabel: 'Gratuit',
    reqsLabel: 'Conditions d\'Accès',
    targetLabel: 'Destiné à',
    activitiesLabel: 'Activités & Services',
    statusLabel: 'Statut / Relation',
    visitWeb: 'Visiter le site web',
    adviceBadge: 'Conseil',
    adviceTitle: 'Besoin d\'aide supplémentaire ?',
    adviceText: 'Si vous êtes dans une situation d\'urgence ou avez besoin d\'un accompagnement personnalisé, rendez-vous au centre de services sociaux le plus proche de votre domicile. La mairie de Málaga dispose d\'un réseau de centres dans chaque quartier.',
    adviceButton: 'Liste des centres sociaux',
    noResults: 'Aucune ressource ne correspond à votre recherche.'
  }
};
