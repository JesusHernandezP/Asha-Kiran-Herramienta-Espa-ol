import { Language } from '../contexts/LanguageContext';

interface LandingTranslation {
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  heroCta: string;
  cardAulaTitle: string;
  cardAulaDesc: string;
  cardAulaCta: string;
  cardRecursosTitle: string;
  cardRecursosDesc: string;
  cardRecursosCta: string;
  cardBlogTitle: string;
  cardBlogDesc: string;
  cardBlogCta: string;
  missionBadge: string;
  missionTitle: string;
  missionText: string;
  activitiesTitle: string;
  activities: { title: string; desc: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  contactTitle: string;
  contactAddress: string;
  contactDelegate: string;
}

export const landingTranslations: Record<Language, LandingTranslation> = {
  es: {
    heroTitle: 'Proyecto Vínculos',
    heroTitleHighlight: 'Málaga',
    heroSubtitle: 'Acompañamos a personas migrantes, solicitantes de asilo y jóvenes extutelados hacia la inclusión social a través del aprendizaje del español y la creación de vínculos humanos.',
    heroCta: 'Empezar a aprender',
    cardAulaTitle: 'Aula Virtual',
    cardAulaDesc: 'Clases de español interactivas desde alfabetización hasta nivel avanzado.',
    cardAulaCta: 'Ir al Aula Virtual',
    cardRecursosTitle: 'Recursos Málaga',
    cardRecursosDesc: 'Guía de servicios básicos: comedores, ayuntamiento, empleo y orientación.',
    cardRecursosCta: 'Ver Recursos',
    cardBlogTitle: 'Blog Asha-Kiran',
    cardBlogDesc: 'Noticias, historias y actualizaciones del proyecto Vínculos.',
    cardBlogCta: 'Leer el Blog',
    missionBadge: 'Nuestra Misión',
    missionTitle: 'Compromiso con la inclusión social',
    missionText: 'El Proyecto Vínculos es una iniciativa social de la Fundación Asha-Kiran que acompaña a personas migrantes en situación de vulnerabilidad. Su propósito es favorecer la socialización, la creación de redes de apoyo y la generación de oportunidades reales de inclusión en Málaga.',
    activitiesTitle: 'Cómo lo hacemos',
    activities: [
      { title: 'Clases de español', desc: 'Desde alfabetización hasta niveles intermedios, presenciales y online.' },
      { title: 'Programa de Referentes', desc: 'Acompañamientos individuales entre voluntarios y participantes.' },
      { title: 'Bienestar emocional', desc: 'Talleres de cerámica, música, yoga y apoyo terapéutico.' },
      { title: 'Formación y empleo', desc: 'Acceso a cursos formativos y orientación laboral.' },
    ],
    ctaTitle: '¿Quieres participar?',
    ctaText: 'La integración social es un reto colectivo. Desde Vínculos, te invitamos a formar parte.',
    ctaButton: 'Ser voluntario/a',
    contactTitle: 'Contacto',
    contactAddress: '📍 Pasaje Eguiluz 2, Málaga (detrás de la estación María Zambrano)',
    contactDelegate: 'Delegada: Dayana – +34 677 20 01 63',
  },
  en: {
    heroTitle: 'Vínculos Project',
    heroTitleHighlight: 'Málaga',
    heroSubtitle: 'We accompany migrants, asylum seekers and former foster youth towards social inclusion through Spanish language learning and human connections.',
    heroCta: 'Start Learning',
    cardAulaTitle: 'Virtual Classroom',
    cardAulaDesc: 'Interactive Spanish classes from literacy to advanced level.',
    cardAulaCta: 'Go to Classroom',
    cardRecursosTitle: 'Málaga Resources',
    cardRecursosDesc: 'Guide to basic services: soup kitchens, city hall, employment and guidance.',
    cardRecursosCta: 'View Resources',
    cardBlogTitle: 'Asha-Kiran Blog',
    cardBlogDesc: 'News, stories and updates from the Vínculos project.',
    cardBlogCta: 'Read the Blog',
    missionBadge: 'Our Mission',
    missionTitle: 'Commitment to social inclusion',
    missionText: 'The Vínculos Project is a social initiative of the Asha-Kiran Foundation that accompanies migrants in vulnerable situations. Its purpose is to promote socialization, create support networks, and generate real inclusion opportunities in Málaga.',
    activitiesTitle: 'How We Do It',
    activities: [
      { title: 'Spanish classes', desc: 'From literacy to intermediate levels, in-person and online.' },
      { title: 'Mentorship program', desc: 'Individual accompaniment between volunteers and participants.' },
      { title: 'Emotional wellbeing', desc: 'Ceramics, music, yoga workshops and therapeutic support.' },
      { title: 'Training & employment', desc: 'Access to training courses and career guidance.' },
    ],
    ctaTitle: 'Want to participate?',
    ctaText: 'Social integration is a collective challenge. Vínculos invites you to be part of it.',
    ctaButton: 'Become a volunteer',
    contactTitle: 'Contact',
    contactAddress: '📍 Pasaje Eguiluz 2, Málaga (behind María Zambrano station)',
    contactDelegate: 'Delegate: Dayana – +34 677 20 01 63',
  },
  ar: {
    heroTitle: 'مشروع فينكولوس',
    heroTitleHighlight: 'مالقة',
    heroSubtitle: 'نرافق المهاجرين وطالبي اللجوء والشباب نحو الاندماج الاجتماعي من خلال تعلم الإسبانية وبناء الروابط الإنسانية.',
    heroCta: 'ابدأ التعلم',
    cardAulaTitle: 'الفصل الافتراضي',
    cardAulaDesc: 'دروس إسبانية تفاعلية من محو الأمية إلى المستوى المتقدم.',
    cardAulaCta: 'اذهب إلى الفصل',
    cardRecursosTitle: 'موارد مالقة',
    cardRecursosDesc: 'دليل الخدمات الأساسية: المطاعم الاجتماعية، البلدية، التوظيف.',
    cardRecursosCta: 'عرض الموارد',
    cardBlogTitle: 'مدونة أشا كيران',
    cardBlogDesc: 'أخبار وقصص وتحديثات من مشروع فينكولوس.',
    cardBlogCta: 'اقرأ المدونة',
    missionBadge: 'مهمتنا',
    missionTitle: 'الالتزام بالاندماج الاجتماعي',
    missionText: 'مشروع فينكولوس هو مبادرة اجتماعية لمؤسسة أشا كيران ترافق المهاجرين في أوضاع هشة. هدفه تعزيز التنشئة الاجتماعية وإنشاء شبكات دعم وتوليد فرص حقيقية للاندماج في مالقة.',
    activitiesTitle: 'كيف نعمل',
    activities: [
      { title: 'دروس الإسبانية', desc: 'من محو الأمية إلى المستويات المتوسطة، حضورياً وعبر الإنترنت.' },
      { title: 'برنامج المرافقة', desc: 'مرافقة فردية بين المتطوعين والمشاركين.' },
      { title: 'الرفاهية العاطفية', desc: 'ورش عمل الخزف والموسيقى واليوغا والدعم العلاجي.' },
      { title: 'التدريب والتوظيف', desc: 'الوصول إلى الدورات التدريبية والتوجيه المهني.' },
    ],
    ctaTitle: 'هل تريد المشاركة؟',
    ctaText: 'الاندماج الاجتماعي تحدٍ جماعي. فينكولوس يدعوك لتكون جزءاً منه.',
    ctaButton: 'كن متطوعاً',
    contactTitle: 'اتصل بنا',
    contactAddress: '📍 Pasaje Eguiluz 2, Málaga (خلف محطة ماريا ثامبرانو)',
    contactDelegate: 'المندوبة: دايانا – +34 677 20 01 63',
  },
  uk: {
    heroTitle: 'Проєкт Вінкулос',
    heroTitleHighlight: 'Малага',
    heroSubtitle: 'Ми супроводжуємо мігрантів, шукачів притулку та колишніх вихованців на шляху до соціальної інтеграції через вивчення іспанської мови.',
    heroCta: 'Почати навчання',
    cardAulaTitle: 'Віртуальний клас',
    cardAulaDesc: 'Інтерактивні уроки іспанської від грамотності до просунутого рівня.',
    cardAulaCta: 'Перейти до класу',
    cardRecursosTitle: 'Ресурси Малаги',
    cardRecursosDesc: 'Путівник по базових послугах: їдальні, мерія, працевлаштування.',
    cardRecursosCta: 'Переглянути ресурси',
    cardBlogTitle: 'Блог Аша-Кіран',
    cardBlogDesc: 'Новини, історії та оновлення проєкту Вінкулос.',
    cardBlogCta: 'Читати блог',
    missionBadge: 'Наша місія',
    missionTitle: 'Відданість соціальній інтеграції',
    missionText: 'Проєкт Вінкулос — це соціальна ініціатива Фонду Аша-Кіран, яка супроводжує мігрантів у вразливих ситуаціях. Його мета — сприяти соціалізації та створенню реальних можливостей для інтеграції в Малазі.',
    activitiesTitle: 'Як ми працюємо',
    activities: [
      { title: 'Уроки іспанської', desc: 'Від грамотності до середніх рівнів, очно та онлайн.' },
      { title: 'Програма наставництва', desc: 'Індивідуальний супровід між волонтерами та учасниками.' },
      { title: 'Емоційне благополуччя', desc: 'Майстер-класи з кераміки, музики, йоги та терапевтична підтримка.' },
      { title: 'Навчання та робота', desc: 'Доступ до навчальних курсів та кар\'єрного консультування.' },
    ],
    ctaTitle: 'Хочете взяти участь?',
    ctaText: 'Соціальна інтеграція — це колективний виклик. Вінкулос запрошує вас стати частиною.',
    ctaButton: 'Стати волонтером',
    contactTitle: 'Контакти',
    contactAddress: '📍 Pasaje Eguiluz 2, Málaga (за станцією Марія Замбрано)',
    contactDelegate: 'Делегат: Даяна – +34 677 20 01 63',
  },
  fr: {
    heroTitle: 'Projet Vínculos',
    heroTitleHighlight: 'Málaga',
    heroSubtitle: 'Nous accompagnons les migrants, demandeurs d\'asile et jeunes sortant de l\'aide sociale vers l\'inclusion à travers l\'apprentissage de l\'espagnol et les liens humains.',
    heroCta: 'Commencer à apprendre',
    cardAulaTitle: 'Classe Virtuelle',
    cardAulaDesc: 'Cours d\'espagnol interactifs de l\'alphabétisation au niveau avancé.',
    cardAulaCta: 'Aller à la classe',
    cardRecursosTitle: 'Ressources Málaga',
    cardRecursosDesc: 'Guide des services de base : restaurants sociaux, mairie, emploi et orientation.',
    cardRecursosCta: 'Voir les ressources',
    cardBlogTitle: 'Blog Asha-Kiran',
    cardBlogDesc: 'Actualités, histoires et mises à jour du projet Vínculos.',
    cardBlogCta: 'Lire le blog',
    missionBadge: 'Notre Mission',
    missionTitle: 'Engagement pour l\'inclusion sociale',
    missionText: 'Le Projet Vínculos est une initiative sociale de la Fondation Asha-Kiran qui accompagne les migrants en situation de vulnérabilité. Son objectif est de favoriser la socialisation et la génération d\'opportunités réelles d\'inclusion à Málaga.',
    activitiesTitle: 'Comment nous agissons',
    activities: [
      { title: 'Cours d\'espagnol', desc: 'De l\'alphabétisation aux niveaux intermédiaires, en présentiel et en ligne.' },
      { title: 'Programme de mentorat', desc: 'Accompagnements individuels entre bénévoles et participants.' },
      { title: 'Bien-être émotionnel', desc: 'Ateliers de céramique, musique, yoga et soutien thérapeutique.' },
      { title: 'Formation et emploi', desc: 'Accès à des cours de formation et orientation professionnelle.' },
    ],
    ctaTitle: 'Vous voulez participer ?',
    ctaText: 'L\'intégration sociale est un défi collectif. Vínculos vous invite à en faire partie.',
    ctaButton: 'Devenir bénévole',
    contactTitle: 'Contact',
    contactAddress: '📍 Pasaje Eguiluz 2, Málaga (derrière la gare María Zambrano)',
    contactDelegate: 'Déléguée : Dayana – +34 677 20 01 63',
  },
};
