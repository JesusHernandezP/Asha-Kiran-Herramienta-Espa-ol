import { Language } from '../contexts/LanguageContext';

interface ResourceItem {
  name: string;
  address?: string;
  phone?: string;
  info: string;
  extra?: string;
  linkText: string;
}

interface ResourceCategory {
  title: string;
  description: string;
  items: ResourceItem[];
}

interface RecursosTranslation {
  // Header
  headerTitle: string;
  headerTitleHighlight: string;
  headerSubtitle: string;

  // Categories
  categories: ResourceCategory[];

  // Advice section
  adviceBadge: string;
  adviceTitle: string;
  adviceText: string;
  adviceButton: string;
}

export const recursosMalagaTranslations: Record<Language, RecursosTranslation> = {
  es: {
    headerTitle: 'Recursos',
    headerTitleHighlight: 'Málaga',
    headerSubtitle: 'Guía de servicios básicos y ayuda para ciudadanos en Málaga.',
    categories: [
      {
        title: 'Comedores Sociales',
        description: 'Espacios donde se ofrece alimentación gratuita a personas en situación de vulnerabilidad.',
        items: [
          {
            name: 'Asociación Yo Soy Tú',
            address: 'Calle Moreno Nieto, 18, 29011 Málaga',
            phone: '951 814 171 / 692 889 050',
            info: 'Ofrecen menús (incluido Halal), desayunos y ropero solidario.',
            linkText: 'Visitar sitio web'
          },
          {
            name: 'Servicios Sociales Comunitarios',
            info: 'Se recomienda contactar con los Servicios Sociales de tu distrito para coordinación y derivación a largo plazo.',
            linkText: 'Visitar sitio web'
          }
        ]
      },
      {
        title: 'Ayuntamiento de Málaga',
        description: 'Gestión municipal y trámites ciudadanos básicos.',
        items: [
          {
            name: 'Sede Principal',
            address: 'Avenida de Cervantes, 4, 29016 Málaga',
            phone: '951 926 010',
            info: 'Atención general al ciudadano y registro principal.',
            linkText: 'Visitar sitio web'
          }
        ]
      },
      {
        title: 'Empleo y Trabajo',
        description: 'Lugares donde inscribirse para buscar trabajo y solicitar prestaciones.',
        items: [
          {
            name: 'SAE (Servicio Andaluz de Empleo)',
            info: 'Inscripción obligatoria como demandante de empleo.',
            phone: '955 625 695',
            extra: 'Puedes inscribirte online o pedir cita previa para atención presencial.',
            linkText: 'Visitar sitio web'
          },
          {
            name: 'SEPE (Servicio Público de Empleo Estatal)',
            info: 'Gestión de prestaciones por desempleo.',
            extra: 'Requiere estar inscrito previamente en el SAE.',
            linkText: 'Visitar sitio web'
          }
        ]
      }
    ],
    adviceBadge: 'Consejo',
    adviceTitle: '¿Necesitas ayuda adicional?',
    adviceText: 'Si te encuentras en una situación de emergencia o necesitas orientación personalizada, acude al centro de servicios sociales más cercano a tu vivienda. El Ayuntamiento de Málaga cuenta con una red de centros en cada distrito.',
    adviceButton: 'Listado de Centros Sociales'
  },

  en: {
    headerTitle: 'Resources',
    headerTitleHighlight: 'Málaga',
    headerSubtitle: 'Guide to basic services and help for citizens in Málaga.',
    categories: [
      {
        title: 'Soup Kitchens',
        description: 'Places that offer free meals to people in vulnerable situations.',
        items: [
          {
            name: 'Asociación Yo Soy Tú',
            address: 'Calle Moreno Nieto, 18, 29011 Málaga',
            phone: '951 814 171 / 692 889 050',
            info: 'They offer meals (including Halal), breakfasts and a solidarity wardrobe.',
            linkText: 'Visit website'
          },
          {
            name: 'Community Social Services',
            info: 'It is recommended to contact the Social Services in your district for long-term coordination and referral.',
            linkText: 'Visit website'
          }
        ]
      },
      {
        title: 'Málaga City Hall',
        description: 'Municipal management and basic citizen procedures.',
        items: [
          {
            name: 'Main Office',
            address: 'Avenida de Cervantes, 4, 29016 Málaga',
            phone: '951 926 010',
            info: 'General citizen assistance and main registry.',
            linkText: 'Visit website'
          }
        ]
      },
      {
        title: 'Employment & Work',
        description: 'Places to register for job searching and apply for benefits.',
        items: [
          {
            name: 'SAE (Andalusian Employment Service)',
            info: 'Mandatory registration as a job seeker.',
            phone: '955 625 695',
            extra: 'You can register online or request an appointment for in-person assistance.',
            linkText: 'Visit website'
          },
          {
            name: 'SEPE (National Public Employment Service)',
            info: 'Management of unemployment benefits.',
            extra: 'Requires prior registration with the SAE.',
            linkText: 'Visit website'
          }
        ]
      }
    ],
    adviceBadge: 'Advice',
    adviceTitle: 'Need additional help?',
    adviceText: 'If you are in an emergency situation or need personalized guidance, go to the nearest social services center to your home. The Málaga City Hall has a network of centers in each district.',
    adviceButton: 'List of Social Centers'
  },

  ar: {
    headerTitle: 'موارد',
    headerTitleHighlight: 'مالقة',
    headerSubtitle: 'دليل الخدمات الأساسية والمساعدة للمواطنين في مالقة.',
    categories: [
      {
        title: 'المطاعم الاجتماعية',
        description: 'أماكن تقدم وجبات مجانية للأشخاص في أوضاع هشة.',
        items: [
          {
            name: 'جمعية أنا أنت (Yo Soy Tú)',
            address: 'Calle Moreno Nieto, 18, 29011 Málaga',
            phone: '951 814 171 / 692 889 050',
            info: 'يقدمون وجبات (بما في ذلك حلال)، وإفطار، وخزانة ملابس تضامنية.',
            linkText: 'زيارة الموقع'
          },
          {
            name: 'الخدمات الاجتماعية المجتمعية',
            info: 'يُوصى بالتواصل مع الخدمات الاجتماعية في حيّك للتنسيق والإحالة على المدى الطويل.',
            linkText: 'زيارة الموقع'
          }
        ]
      },
      {
        title: 'بلدية مالقة',
        description: 'الإدارة البلدية والإجراءات المدنية الأساسية.',
        items: [
          {
            name: 'المقر الرئيسي',
            address: 'Avenida de Cervantes, 4, 29016 Málaga',
            phone: '951 926 010',
            info: 'خدمة المواطنين العامة والسجل الرئيسي.',
            linkText: 'زيارة الموقع'
          }
        ]
      },
      {
        title: 'التوظيف والعمل',
        description: 'أماكن للتسجيل للبحث عن عمل وطلب الإعانات.',
        items: [
          {
            name: 'SAE (خدمة التوظيف الأندلسية)',
            info: 'التسجيل إلزامي كباحث عن عمل.',
            phone: '955 625 695',
            extra: 'يمكنك التسجيل عبر الإنترنت أو طلب موعد للحضور شخصياً.',
            linkText: 'زيارة الموقع'
          },
          {
            name: 'SEPE (خدمة التوظيف العامة الوطنية)',
            info: 'إدارة إعانات البطالة.',
            extra: 'يتطلب التسجيل المسبق في SAE.',
            linkText: 'زيارة الموقع'
          }
        ]
      }
    ],
    adviceBadge: 'نصيحة',
    adviceTitle: 'هل تحتاج مساعدة إضافية؟',
    adviceText: 'إذا كنت في حالة طوارئ أو تحتاج إلى توجيه شخصي، توجّه إلى أقرب مركز خدمات اجتماعية لمنزلك. تمتلك بلدية مالقة شبكة من المراكز في كل حي.',
    adviceButton: 'قائمة المراكز الاجتماعية'
  },

  uk: {
    headerTitle: 'Ресурси',
    headerTitleHighlight: 'Малага',
    headerSubtitle: 'Довідник основних послуг та допомоги для громадян у Малазі.',
    categories: [
      {
        title: 'Соціальні їдальні',
        description: 'Місця, де безкоштовно годують людей у вразливих ситуаціях.',
        items: [
          {
            name: 'Асоціація Yo Soy Tú',
            address: 'Calle Moreno Nieto, 18, 29011 Málaga',
            phone: '951 814 171 / 692 889 050',
            info: 'Пропонують меню (включаючи Халяль), сніданки та солідарну гардеробну.',
            linkText: 'Відвідати сайт'
          },
          {
            name: 'Громадські соціальні служби',
            info: 'Рекомендується звернутися до соціальних служб вашого району для довгострокової координації та направлення.',
            linkText: 'Відвідати сайт'
          }
        ]
      },
      {
        title: 'Мерія Малаги',
        description: 'Муніципальне управління та основні громадянські процедури.',
        items: [
          {
            name: 'Головний офіс',
            address: 'Avenida de Cervantes, 4, 29016 Málaga',
            phone: '951 926 010',
            info: 'Загальне обслуговування громадян та головний реєстр.',
            linkText: 'Відвідати сайт'
          }
        ]
      },
      {
        title: 'Працевлаштування',
        description: 'Місця для реєстрації з пошуку роботи та подання заявок на допомогу.',
        items: [
          {
            name: 'SAE (Андалузька служба зайнятості)',
            info: 'Обов\'язкова реєстрація як шукача роботи.',
            phone: '955 625 695',
            extra: 'Можна зареєструватися онлайн або записатися на прийом для особистої консультації.',
            linkText: 'Відвідати сайт'
          },
          {
            name: 'SEPE (Національна державна служба зайнятості)',
            info: 'Управління допомогою з безробіття.',
            extra: 'Потрібна попередня реєстрація в SAE.',
            linkText: 'Відвідати сайт'
          }
        ]
      }
    ],
    adviceBadge: 'Порада',
    adviceTitle: 'Потрібна додаткова допомога?',
    adviceText: 'Якщо ви в надзвичайній ситуації або потребуєте персонального керівництва, зверніться до найближчого центру соціальних послуг. Мерія Малаги має мережу центрів у кожному районі.',
    adviceButton: 'Список соціальних центрів'
  },

  fr: {
    headerTitle: 'Ressources',
    headerTitleHighlight: 'Málaga',
    headerSubtitle: 'Guide des services de base et aide pour les citoyens à Málaga.',
    categories: [
      {
        title: 'Restaurants sociaux',
        description: 'Lieux offrant des repas gratuits aux personnes en situation de vulnérabilité.',
        items: [
          {
            name: 'Association Yo Soy Tú',
            address: 'Calle Moreno Nieto, 18, 29011 Málaga',
            phone: '951 814 171 / 692 889 050',
            info: 'Ils proposent des menus (y compris Halal), des petits-déjeuners et un vestiaire solidaire.',
            linkText: 'Visiter le site web'
          },
          {
            name: 'Services sociaux communautaires',
            info: 'Il est recommandé de contacter les services sociaux de votre quartier pour une coordination et une orientation à long terme.',
            linkText: 'Visiter le site web'
          }
        ]
      },
      {
        title: 'Mairie de Málaga',
        description: 'Gestion municipale et démarches citoyennes de base.',
        items: [
          {
            name: 'Siège principal',
            address: 'Avenida de Cervantes, 4, 29016 Málaga',
            phone: '951 926 010',
            info: 'Accueil général des citoyens et registre principal.',
            linkText: 'Visiter le site web'
          }
        ]
      },
      {
        title: 'Emploi et travail',
        description: 'Lieux pour s\'inscrire à la recherche d\'emploi et demander des prestations.',
        items: [
          {
            name: 'SAE (Service andalou de l\'emploi)',
            info: 'Inscription obligatoire en tant que demandeur d\'emploi.',
            phone: '955 625 695',
            extra: 'Vous pouvez vous inscrire en ligne ou prendre rendez-vous pour un accueil en personne.',
            linkText: 'Visiter le site web'
          },
          {
            name: 'SEPE (Service public national de l\'emploi)',
            info: 'Gestion des allocations chômage.',
            extra: 'Nécessite une inscription préalable au SAE.',
            linkText: 'Visiter le site web'
          }
        ]
      }
    ],
    adviceBadge: 'Conseil',
    adviceTitle: 'Besoin d\'aide supplémentaire ?',
    adviceText: 'Si vous êtes dans une situation d\'urgence ou avez besoin d\'un accompagnement personnalisé, rendez-vous au centre de services sociaux le plus proche de votre domicile. La mairie de Málaga dispose d\'un réseau de centres dans chaque quartier.',
    adviceButton: 'Liste des centres sociaux'
  }
};
