import { Language } from '../contexts/LanguageContext';

export interface LessonMetadata {
  title: string;
  description: string;
}

export const lessonMetadataTranslations: Record<string, Record<Language, LessonMetadata>> = {
  "a1-alfa-abecedario": {
    es: { title: "El Abecedario", description: "Aprende las letras del abecedario en español y sus sonidos." },
    en: { title: "The Alphabet", description: "Learn the letters of the Spanish alphabet and their sounds." },
    ar: { title: "الأبجدية", description: "تعلم حروف الأبجدية الإسبانية وأصواتها." },
    uk: { title: "Алфавіт", description: "Вивчіть літери іспанського алфавіту та їхні звуки." },
    fr: { title: "L'Alphabet", description: "Apprenez les lettres de l'alphabet espagnol et leurs sons." }
  },
  "a1-gram-articulos": {
    es: { title: "Artículos y Plurales", description: "Aprende a usar los artículos (el, la, los, las) y a formar el plural añadiendo 'S' o 'ES'." },
    en: { title: "Articles and Plurals", description: "Learn how to use articles (el, la, los, las) and form plurals by adding 'S' or 'ES'." },
    ar: { title: "أدوات التعريف والجمع", description: "تعلم كيفية استخدام أدوات التعريف (el, la, los, las) وصياغة الجمع بإضافة 'S' أو 'ES'." },
    uk: { title: "Артиклі та множина", description: "Дізнайтеся, як використовувати артиклі (el, la, los, las) та утворювати множину, додаючи 'S' або 'ES'." },
    fr: { title: "Articles et pluriels", description: "Apprenez à utiliser les articles (el, la, los, las) et à former le pluriel en ajoutant 'S' ou 'ES'." }
  },
  "a1-gram-pronombres": {
    es: { title: "Pronombres Personales", description: "Aprende los pronombres para referirte a personas: yo, tú, él, ella, nosotros, vosotros, ellos." },
    en: { title: "Personal Pronouns", description: "Learn the pronouns used to refer to people: yo, tú, él, ella, nosotros, vosotros, ellos." },
    ar: { title: "الضمائر الشخصية", description: "تعلم الضمائر المستخدمة للإشارة إلى الأشخاص: أنا، أنت، هو، هي، نحن، أنتم، هم." },
    uk: { title: "Особові займенники", description: "Вивчіть займенники для позначення людей: yo, tú, él, ella, nosotros, vosotros, ellos." },
    fr: { title: "Pronoms personnels", description: "Apprenez les pronoms pour désigner des personnes : yo, tú, él, ella, nosotros, vosotros, ils/elles." }
  },
  "a1-gram-verbos": {
    es: { title: "Verbos Básicos (Ser, Estar, Tener)", description: "Aprende los tres verbos más importantes en español para poder presentarte." },
    en: { title: "Basic Verbs (Ser, Estar, Tener)", description: "Learn the three most important verbs in Spanish to introduce yourself." },
    ar: { title: "الأفعال الأساسية (Ser, Estar, Tener)", description: "تعلم أهم ثلاثة أفعال في اللغة الإسبانية للتعريف بنفسك." },
    uk: { title: "Основні дієслова (Ser, Estar, Tener)", description: "Вивчіть три найважливіші дієслова в іспанській мові, щоб представитися." },
    fr: { title: "Verbes de base (Ser, Estar, Tener)", description: "Apprenez les trois verbes les plus importants en espagnol pour vous présenter." }
  },
  "a1-vocab-ropa": {
    es: { title: "Vocabulario: La Ropa", description: "¿Qué te pones cada día? Aprende palabras como camisa, pantalones y zapatos." },
    en: { title: "Vocabulary: Clothing", description: "What do you wear every day? Learn words like shirt, pants, and shoes." },
    ar: { title: "المفردات: الملابس", description: "ماذا ترتدي كل يوم؟ تعلم كلمات مثل قميص، بنطال، وحذاء." },
    uk: { title: "Словниковий запас: Одяг", description: "Що ви одягаєте щодня? Вивчіть такі слова, як сорочка, штани та взуття." },
    fr: { title: "Vocabulaire : Les vêtements", description: "Que portez-vous chaque jour ? Apprenez des mots comme chemise, pantalon et chaussures." }
  },
  "a1-gram-genero": {
    es: { title: "Género: Masculino y Femenino", description: "Aprende las reglas básicas para saber si una palabra es masculina (termina en 'o') o femenina (termina en 'a'), y algunas excepciones." },
    en: { title: "Gender: Masculine and Feminine", description: "Learn the basic rules to know if a word is masculine (ends in 'o') or feminine (ends in 'a'), and some exceptions." },
    ar: { title: "الجنس: المذكر والمؤنث", description: "تعلم القواعد الأساسية لمعرفة ما إذا كانت الكلمة مذكرة (تنتهي بـ 'o') أو مؤنثة (تنتهي بـ 'a')، وبعض الاستثناءات." },
    uk: { title: "Рід: чоловічий та жіночий", description: "Вивчіть основні правила, щоб визначити, чи є слово чоловічого роду (закінчується на 'o') чи жіночого роду (закінчується на 'a'), а також деякі винятки." },
    fr: { title: "Genre : Masculin et Féminin", description: "Apprenez les règles de base pour savoir si un mot est masculin (se termine par 'o') ou féminin (se termine par 'a'), ainsi que quelques exceptions." }
  },
  "a1-gram-posesivos": {
    es: { title: "Posesivos", description: "Aprende a indicar posesión: mi, tu, nuestro, vuestro, su." },
    en: { title: "Possessives", description: "Learn how to indicate possession: mi, tu, nuestro, vuestro, su." },
    ar: { title: "ضمائر الملكية", description: "تعلم كيفية الإشارة إلى الملكية: لي، لك، لنا، لكم، له/لها." },
    uk: { title: "Присвійні займенники", description: "Дізнайтеся, як вказувати на володіння: mi, tu, nuestro, vuestro, su." },
    fr: { title: "Possessifs", description: "Apprenez à indiquer la possession : mi, tu, nuestro, vuestro, su." }
  },
  "a1-gram-negacion": {
    es: { title: "Afirmación y Negación", description: "Aprende a decir sí o no, y a expresar lo que te gusta y no te gusta." },
    en: { title: "Affirmation and Negation", description: "Learn how to say yes or no, and express what you like and dislike." },
    ar: { title: "الإثبات والنفي", description: "تعلم كيف تقول نعم أو لا، وتعبر عما يعجبك وما لا يعجبك." },
    uk: { title: "Ствердження та заперечення", description: "Навчіться говорити так чи ні, а також висловлювати свої вподобання та нелюбов." },
    fr: { title: "Affirmation et Négation", description: "Apprenez à dire oui ou non, et à exprimer ce que vous aimez et n'aimez pas." }
  },
  "a1-vocab-saludos": {
    es: { title: "Saludos y Presentaciones", description: "Hola, ¿cómo estás? Aprende las preguntas y respuestas más importantes para conocer a alguien." },
    en: { title: "Greetings and Introductions", description: "Hello, how are you? Learn the most important questions and answers to get to know someone." },
    ar: { title: "التحيات والتعارف", description: "مرحباً، كيف حالك؟ تعلم أهم الأسئلة والأجوبة للتعرف على شخص ما." },
    uk: { title: "Привітання та знайомство", description: "Привіт, як справи? Вивчіть найважливіші запитання та відповіді для знайомства." },
    fr: { title: "Salutations et présentations", description: "Bonjour, comment vas-tu ? Apprenez les questions et réponses les plus importantes pour faire connaissance." }
  },
  "a1-vocab-numeros": {
    es: { title: "Vocabulario: Los Números (1-10)", description: "Aprende a contar del uno al diez." },
    en: { title: "Vocabulary: Numbers (1-10)", description: "Learn to count from one to ten." },
    ar: { title: "المفردات: الأرقام (1-10)", description: "تعلم العد من واحد إلى عشرة." },
    uk: { title: "Словниковий запас: Числа (1-10)", description: "Навчіться рахувати від одного до десяти." },
    fr: { title: "Vocabulaire : Les chiffres (1-10)", description: "Apprenez à compter de un à dix." }
  },
  "a1-vocab-nacionalidades": {
    es: { title: "Países y Nacionalidades", description: "España y español. Inglaterra y británico. Aprende cómo hablar de orígenes." },
    en: { title: "Countries and Nationalities", description: "Spain and Spanish. England and British. Learn how to talk about origins." },
    ar: { title: "البلدان والجنسيات", description: "إسبانيا وإسباني. إنجلترا وبريطاني. تعلم كيفية التحدث عن الأصول." },
    uk: { title: "Країни та національності", description: "Іспанія та іспанець. Англія та британець. Навчіться говорити про походження." },
    fr: { title: "Pays et nationalités", description: "Espagne et espagnol. Angleterre et britannique. Apprenez à parler des origines." }
  },
  "a2-vocab-animales": {
    es: { title: "Animales y Naturaleza", description: "Vocabulario sobre árboles, montañas, y animales comunes (perro, gato, pájaro)." },
    en: { title: "Animals and Nature", description: "Vocabulary about trees, mountains, and common animals (dog, cat, bird)." },
    ar: { title: "الحيوانات والطبيعة", description: "مفردات عن الأشجار، الجبال، والحيوانات الشائعة (كلب، قطة، طائر)." },
    uk: { title: "Тварини та природа", description: "Словниковий запас про дерева, гори та поширених тварин (собака, кіт, птах)." },
    fr: { title: "Animaux et nature", description: "Vocabulaire sur les arbres, les montagnes et les animaux communs (chien, chat, oiseau)." }
  },
  "a2-comp-lectura": {
    es: { title: "Lectura Fácil: Mi Primer Día", description: "Una lectura corta para entender frases simples y practicar preguntas." },
    en: { title: "Easy Reading: My First Day", description: "A short reading to understand simple sentences and practice questions." },
    ar: { title: "قراءة سهلة: يومي الأول", description: "قراءة قصيرة لفهم الجمل البسيطة والتدرب على الأسئلة." },
    uk: { title: "Просте читання: Мій перший день", description: "Короткий текст для розуміння простих речень та практикування запитань." },
    fr: { title: "Lecture facile : Mon premier jour", description: "Une lecture courte pour comprendre des phrases simples et s'entraîner à poser des questions." }
  },
  "a2-vocab-mapas": {
    es: { title: "Vocabulario: El Mapa del Mundo", description: "Continentes, países comunes, y vocabulario geográfico." },
    en: { title: "Vocabulary: The World Map", description: "Continents, common countries, and geographical vocabulary." },
    ar: { title: "المفردات: خريطة العالم", description: "القارات، البلدان الشائعة، والمفردات الجغرافية." },
    uk: { title: "Словниковий запас: Карта світу", description: "Континенти, поширені країни та географічна лексика." },
    fr: { title: "Vocabulaire : La carte du monde", description: "Continents, pays communs et vocabulaire géographique." }
  },
  "a2-vocab-direcciones": {
    es: { title: "¿Dónde está...?", description: "Aprende a preguntar por lugares importantes como el lavabo, el autobús o la tienda." },
    en: { title: "Where is...?", description: "Learn to ask for important places like the restroom, the bus, or the store." },
    ar: { title: "أين يقع...؟", description: "تعلم كيفية السؤال عن الأماكن المهمة مثل دورة المياه، الحافلة أو المتجر." },
    uk: { title: "Де знаходиться...?", description: "Навчіться запитувати про важливі місця, такі як туалет, автобус чи магазин." },
    fr: { title: "Où est... ?", description: "Apprenez à demander après des endroits importants comme les toilettes, le bus ou le magasin." }
  },
  "a2-gram-necesidades": {
    es: { title: "Quiero y Necesito", description: "Aprende a expresar tus deseos y necesidades: quiero comprar, necesito ayuda, quiero ir a..." },
    en: { title: "I Want and I Need", description: "Learn to express your desires and needs: I want to buy, I need help, I want to go to..." },
    ar: { title: "أريد وأحتاج", description: "تعلم التعبير عن رغباتك واحتياجاتك: أريد شراء، أحتاج مساعدة، أريد الذهاب إلى..." },
    uk: { title: "Я хочу і мені потрібно", description: "Навчіться висловлювати свої бажання та потреби: я хочу купити, мені потрібна допомога, я хочу піти до..." },
    fr: { title: "Je veux et j'ai besoin", description: "Apprenez à exprimer vos désirs et vos besoins : je veux acheter, j'ai besoin d'aide, je veux aller à..." }
  },
  "a2-gram-tener-estados": {
    es: { title: "Tengo / No tengo", description: "Usa el verbo TENER para hablar de lo que posees y de tus sensaciones corporales." },
    en: { title: "I Have / I Don't Have", description: "Use the verb TENER to talk about what you own and your bodily sensations." },
    ar: { title: "لدي / ليس لدي", description: "استخدم الفعل TENER للتحدث عما تملكه وعن أحاسيسك الجسدية (الجوع، البرد, إلخ)." },
    uk: { title: "Я маю / Я не маю", description: "Використовуйте дієслово TENER для розмов про те, чим ви володієте, та про свої тілесні відчуття." },
    fr: { title: "J'ai / Je n'ai pas", description: "Utilisez le verbe TENER pour parler de ce que vous possédez et de vos sensations corporelles." }
  },
  "a2-gram-me-duele": {
    es: { title: "Me duele, me gusta...", description: "Aprende a expresar dolor, molestias, gustos y preocupaciones usando 'Me'." },
    en: { title: "It Hurts, I Like...", description: "Learn to express pain, discomfort, tastes, and worries using 'Me'." },
    ar: { title: "يؤلمني، يعجبني...", description: "تعلم التعبير عن الألم، الانزعاج، الأذواق والاهتمامات باستخدام 'Me'." },
    uk: { title: "Мені болить, мені подобається...", description: "Навчіться висловлювати біль, дискомфорт, смаки та турботи за допомогою 'Me'." },
    fr: { title: "Ça me fait mal, j'aime...", description: "Apprenez à exprimer la douleur, l'inconfort, les goûts et les inquiétudes avec 'Me'." }
  },
  "a2-comp-supermercado": {
    es: { title: "Lectura Fácil: En el supermercado", description: "Lee sobre una visita al supermercado y practica el vocabulario de alimentos y compras." },
    en: { title: "Easy Reading: In the Supermarket", description: "Read about a trip to the supermarket and practice food and shopping vocabulary." },
    ar: { title: "قراءة سهلة: في السوبرماركت", description: "اقرأ عن زيارة إلى السوبرماركت وتدرب على مفردات الأطعمة والتسوق." },
    uk: { title: "Просте читання: У супермаркеті", description: "Прочитайте про похід до супермаркету та попрактикуйте лексику про їжу та покупки." },
    fr: { title: "Lecture facile : Au supermarché", description: "Lisez sur une visite au supermarché et pratiquez le vocabulaire des aliments et des courses." }
  },
  "a2-comp-medico": {
    es: { title: "Lectura Fácil: En la farmacia", description: "Una pequeña conversación en la farmacia para practicar cómo pedir medicamentos." },
    en: { title: "Easy Reading: In the Pharmacy", description: "A short conversation in the pharmacy to practice how to ask for medications." },
    ar: { title: "قراءة سهلة: في الصيدلية", description: "محادثة قصيرة في الصيدلية للتدرب على كيفية طلب الأدوية." },
    uk: { title: "Просте читання: В аптеці", description: "Коротка розмова в аптеці, щоб попрактикуватися, як просити ліки." },
    fr: { title: "Lecture facile : À la pharmacie", description: "Une courte conversation à la pharmacie pour s'entraîner à demander des médicaments." }
  },
  "a1-vocab-horas-fechas": {
    es: { title: "Vocabulario: Días, Meses y la Hora", description: "Aprende los días de la semana, los meses y cómo decir la hora en español." },
    en: { title: "Vocabulary: Days, Months and Time", description: "Learn the days of the week, the months, and how to tell the time in Spanish." },
    ar: { title: "المفردات: الأيام والأشهر والوقت", description: "تعلم أيام الأسبوع، الأشهر وكيفية الإخبار بالوقت باللغة الإسبانية." },
    uk: { title: "Словниковий запас: Дні, місяці та час", description: "Вивчіть дні тижня, місяці та те, як говорити час іспанською." },
    fr: { title: "Vocabulaire : Jours, mois et heure", description: "Apprenez les jours de la semaine, les mois et comment dire l'heure en espagnol." }
  },
  "a1-vocab-profesiones": {
    es: { title: "Vocabulario: Las Profesiones", description: "Aprende nombres de profesiones comunes como médico, profesor o cocinero." },
    en: { title: "Vocabulary: Professions", description: "Learn names of common professions like doctor, teacher, or chef." },
    ar: { title: "المفردات: المهن", description: "تعلم أسماء المهن الشائعة مثل طبيب، معلم، أو طباخ." },
    uk: { title: "Словниковий запас: Професії", description: "Вивчіть назви поширених професій, таких як лікар, вчитель або кухар." },
    fr: { title: "Vocabulaire : Les professions", description: "Apprenez les noms de professions courantes comme médecin, professeur ou cuisinier." }
  },
  "a1-vocab-familia": {
    es: { title: "La Familia y Descripción Física", description: "Habla de tu familia (madre, padre) y describe cómo son (alto, bajo)." },
    en: { title: "Family and Physical Description", description: "Talk about your family (mother, father) and describe what they look like (tall, short)." },
    ar: { title: "العائلة والوصف الجسدي", description: "تحدث عن عائلتك (الأم، الأب) وصف كيف يبدون (طويل القامة، قصير القامة)." },
    uk: { title: "Родина та фізичний опис", description: "Поговоріть про свою родину (мати, батько) та опишіть їхній вигляд (високий, низький)." },
    fr: { title: "La famille et description physique", description: "Parlez de votre famille (mère, père) et décrivez leur physique (grand, petit)." }
  },
  "a1-gram-preguntas": {
    es: { title: "Preguntas Simples (Qué, Quién, Dónde)", description: "Aprende a formular preguntas básicas para pedir información." },
    en: { title: "Simple Questions (What, Who, Where)", description: "Learn to ask basic questions to request information." },
    ar: { title: "الأسئلة البسيطة (ماذا، من، أين)", description: "تعلم كيفية صياغة أسئلة أساسية لطلب المعلومات." },
    uk: { title: "Прості запитання (Що, Хто, Де)", description: "Навчіться ставити базові запитання для запиту інформації." },
    fr: { title: "Questions simples (Quoi, Qui, Où)", description: "Apprenez à poser des questions de base pour demander des informations." }
  },
  "a1-vocab-comida-casa": {
    es: { title: "Vocabulario: La Casa y la Comida", description: "Aprende el nombre de algunas partes de la casa y alimentos muy comunes." },
    en: { title: "Vocabulary: House and Food", description: "Learn the names of some parts of the house and very common foods." },
    ar: { title: "المفردات: المنزل والطعام", description: "تعلم أسماء بعض أجزاء المنزل والأطعمة الشائعة جداً." },
    uk: { title: "Словниковий запас: Будинок і їжа", description: "Вивчіть назви деяких частин будинку та дуже поширених продуктів харчування." },
    fr: { title: "Vocabulaire : La maison et la nourriture", description: "Apprenez les noms de quelques parties de la maison et d'aliments très courants." }
  },
  "a2-gram-preterito-perfecto": {
    es: { title: "El Pretérito Perfecto", description: "Habla sobre cosas que has hecho hoy, esta semana o en tu vida en general." },
    en: { title: "The Present Perfect", description: "Talk about things you have done today, this week, or in your life in general." },
    ar: { title: "الماضي التام (Pretérito Perfecto)", description: "تحدث عن الأشياء التي قمت بها اليوم، هذا الأسبوع أو في حياتك بشكل عام." },
    uk: { title: "Теперішній доконаний час", description: "Поговоріть про речі, які ви зробили сьогодні, цього тижня або у своєму житті загалом." },
    fr: { title: "Le passé composé", description: "Parlez de choses que vous avez faites aujourd'hui, cette semaine ou dans votre vie en général." }
  },
  "a2-gram-futuro-proximo": {
    es: { title: "El Futuro Próximo (Voy a...)", description: "Habla de tus planes y de cosas que van a pasar usando 'IR + a + infinitivo'." },
    en: { title: "The Near Future (I'm going to...)", description: "Talk about your plans and things that are going to happen using 'IR + a + infinitive'." },
    ar: { title: "المستقبل القريب (سأفعل...)", description: "تحدث عن خططك وأشياء ستحدث باستخدام تركيبة 'IR + a + المصدر'." },
    uk: { title: "Найближче майбутнє (Я збираюся...)", description: "Поговоріть про свої плани та речі, які мають статися, використовуючи 'IR + a + інфінітив'." },
    fr: { title: "Le futur proche (Je vais...)", description: "Parlez de vos projets et des choses qui vont se passer en utilisant 'IR + a + infinitif'." }
  },
  "a2-gram-comparaciones": {
    es: { title: "Hacer Comparaciones Simples", description: "Aprende a comparar cosas: más alto que, menos grande que, tan bueno como..." },
    en: { title: "Making Simple Comparisons", description: "Learn to compare things: taller than, less big than, as good as..." },
    ar: { title: "إجراء مقارنات بسيطة", description: "تعلم مقارنة الأشياء: أطول من، أقل كبراً من، جيد مثل..." },
    uk: { title: "Створення простих порівнянь", description: "Навчіться порівнювати речі: вищий за, менш великий ніж, такий же хороший як..." },
    fr: { title: "Faire des comparaisons simples", description: "Apprenez à comparer des choses : plus grand que, moins grand que, aussi bon que..." }
  },
  "a2-vocab-restaurante": {
    es: { title: "En el Restaurante", description: "Aprende a pedir comida y pagar en un bar o restaurante." },
    en: { title: "In the Restaurant", description: "Learn how to order food and pay in a bar or restaurant." },
    ar: { title: "في المطعم", description: "تعلم كيفية طلب الطعام والدفع في حانة أو مطعم." },
    uk: { title: "У ресторані", description: "Навчіться замовляти їжу та розплачуватися в барі чи ресторані." },
    fr: { title: "Au restaurant", description: "Apprenez à commander à manger et à payer dans un bar ou un restaurant." }
  },
  "a1-alfa-silabas": {
    es: { title: "Alfabetización: Sílabas y Palabras Básicas", description: "Aprende a leer y escribir sílabas directas simples y a formar tus primeras palabras." },
    en: { title: "Literacy: Syllables and Basic Words", description: "Learn to read and write simple direct syllables and form your first words." },
    ar: { title: "محو الأمية: المقاطع والكلمات الأساسية", description: "تعلم قراءة وكتابة المقاطع المباشرة البسيطة وتشكيل كلماتك الأولى." },
    uk: { title: "Грамотність: склади та базові слова", description: "Навчіться читати та писати прості прямі склади та утворювати свої перші слова." },
    fr: { title: "Alphabétisation : Syllabes et mots de base", description: "Apprenez à lire et à écrire des syllabes directes simples et à former vos premiers mots." }
  },
  "a1-vocab-numeros-cuanto": {
    es: { title: "Vocabulario: Los Números y 'Cuánto'", description: "Aprende los números básicos y a preguntar cantidades utilizando cuánto, cuánta, cuántos y cuántas." },
    en: { title: "Vocabulary: Numbers and 'How Much'", description: "Learn basic numbers and ask about quantities using how much and how many (cuánto/a/os/as)." },
    ar: { title: "المفردات: الأرقام و'كم'", description: "تعلم الأرقام الأساسية والسؤال عن الكميات باستخدام cuánto، cuánta، cuántos، cuántas." },
    uk: { title: "Словниковий запас: числа та 'Скільки'", description: "Вивчіть базові числа та навчіться запитувати про кількість, використовуючи cuánto, cuánta, cuántos, cuántas." },
    fr: { title: "Vocabulaire : Les nombres et 'Combien'", description: "Apprenez les nombres de base et à demander des quantités en utilisant cuánto, cuánta, cuántos et cuántas." }
  },
  "a1-vocab-supermercado": {
    es: { title: "Vocabulario: En el Supermercado", description: "Aprende el vocabulario de alimentos comunes y frases para pedir y comprar productos." },
    en: { title: "Vocabulary: In the Supermarket", description: "Learn vocabulary for common foods and phrases to ask for and buy products." },
    ar: { title: "المفردات: في السوبرماركت", description: "تعلم مفردات الأطعمة الشائعة والعبارات المستخدمة لطلب وشراء المنتجات." },
    uk: { title: "Словниковий запас: У супермаркеті", description: "Вивчіть лексику про поширені продукти харчування та фрази для запиту та купівлі товарів." },
    fr: { title: "Vocabulaire : Au supermarché", description: "Apprenez le vocabulaire des aliments courants et des phrases pour demander et acheter des produits." }
  },
  "a1-vocab-casa-estancias": {
    es: { title: "Vocabulario: La Casa y sus Estancias", description: "Conoce las partes de una vivienda, el mobiliario esencial y cómo decir dónde se encuentra algo." },
    en: { title: "Vocabulary: The House and its Rooms", description: "Learn the parts of a home, essential furniture, and how to say where something is located." },
    ar: { title: "المفردات: المنزل وغرفه", description: "تعرف على أجزاء السكن، الأثاث الأساسي وكيفية تحديد مكان شيء ما." },
    uk: { title: "Словниковий запас: Будинок та його кімнати", description: "Ознайомтеся з частинами житла, основними меблями та тим, як сказати, де щось знаходиться." },
    fr: { title: "Vocabulaire : La maison et ses pièces", description: "Découvrez les pièces d'un logement, le mobilier essentiel et comment exprimer la localisation d'un objet." }
  },
  "a1-vocab-medico": {
    es: { title: "Vocabulario: En el Médico", description: "Aprende a describir partes del cuerpo, expresar dolor físico y entender las indicaciones básicas en un hospital o consulta médica." },
    en: { title: "Vocabulary: At the Doctor", description: "Learn to describe parts of the body, express physical pain, and understand basic instructions in a hospital or medical consultation." },
    ar: { title: "المفردات: عند الطبيب", description: "تعلم كيفية وصف أجزاء الجسم، التعبير عن الألم الجسدي وفهم التوجيهات الأساسية في المستشفى أو عيادة الطبيب." },
    uk: { title: "Словниковий запас: У лікаря", description: "Навчіться описувати частини тіла, висловлювати фізичний біль та розуміти базові вказівки в лікарні чи на прийомі у лікаря." },
    fr: { title: "Vocabulaire : Chez le médecin", description: "Apprenez à décrire les parties du corps, à exprimer une douleur physique et à comprendre les consignes de base à l'hôpital ou chez le médecin." }
  },
  "a1-vocab-paises-nacionalidades": {
    es: { title: "Vocabulario: Países, Nacionalidades y Colores", description: "Aprende el nombre de los continentes, países de origen comunes y a describir banderas con colores básicos." },
    en: { title: "Vocabulary: Countries, Nationalities and Colors", description: "Learn the names of continents, common countries of origin, and describe flags with basic colors." },
    ar: { title: "المفردات: البلدان والجنسيات والألوان", description: "تعلم أسماء القارات، بلدان المنشأ الشائعة ووصف الأعلام بالألوان الأساسية." },
    uk: { title: "Словниковий запас: Країни, національності та кольори", description: "Вивчіть назви континентів, поширених країн походження та навчіться описувати прапори за допомогою базових кольорів." },
    fr: { title: "Vocabulaire : Pays, nationalités et couleurs", description: "Apprenez les noms des continents, des pays d'origine courants et à décrire des drapeaux avec des couleurs de base." }
  },
  "a1-vocab-transporte": {
    es: { title: "Vocabulario: Transporte Público", description: "Aprende a moverte por la ciudad utilizando el autobús, el metro o el tren, y conoce los verbos básicos del transporte público." },
    en: { title: "Vocabulary: Public Transport", description: "Learn to get around the city using the bus, subway, or train, and know the basic verbs of public transport." },
    ar: { title: "المفردات: وسائل النقل العامة", description: "تعلم كيفية التنقل في المدينة باستخدام الحافلة، المترو أو القطار، وتعرف على الأفعال الأساسية للمواصلات العامة." },
    uk: { title: "Словниковий запас: Громадський транспорт", description: "Навчіться пересуватися містом на автобусі, метро чи поїзді, та вивчіть базові дієслова громадського транспорту." },
    fr: { title: "Vocabulaire : Transports publics", description: "Apprenez à vous déplacer en ville en utilisant le bus, le métro ou le train, et maîtrisez les verbes de base des transports publics." }
  },
  "a1-reading-1": {
    es: { title: "Comprensión: Mi Nombre y mi País", description: "Lee un texto breve sobre la presentación de una persona y responde a las preguntas." },
    en: { title: "Comprehension: My Name and My Country", description: "Read a brief text about introducing a person and answer the questions." },
    ar: { title: "الفهم: اسمي وبلدي", description: "اقرأ نصاً قصيراً حول تعريف شخص بنفسه وأجب عن الأسئلة." },
    uk: { title: "Розуміння: Моє ім'я та моя країна", description: "Прочитайте короткий текст про знайомство з людиною та дайте відповіді на запитання." },
    fr: { title: "Compréhension : Mon nom et mon pays", description: "Lisez un court texte sur la présentation d'une personne et répondez aux questions." }
  },
  "a1-reading-2": {
    es: { title: "Comprensión: Mi Casa", description: "Lee un texto sobre una vivienda y responde las preguntas de comprensión." },
    en: { title: "Comprehension: My House", description: "Read a text about a home and answer the comprehension questions." },
    ar: { title: "الفهم: منزلي", description: "اقرأ نصاً عن مسكن ما وأجب عن أسئلة الفهم." },
    uk: { title: "Розуміння: Мій будинок", description: "Прочитайте текст про житло та дайте відповіді на запитання для перевірки розуміння." },
    fr: { title: "Compréhension : Ma maison", description: "Lisez un texte sur un logement et répondez aux questions de compréhension." }
  },
  "a1-reading-3": {
    es: { title: "Comprensión: El Transporte", description: "Lee un texto sencillo sobre cómo viajar en autobús por la ciudad." },
    en: { title: "Comprehension: Transport", description: "Read a simple text about how to travel by bus in the city." },
    ar: { title: "الفهم: وسائل النقل", description: "اقرأ نصاً بسيطاً حول كيفية السفر بالحافلة في المدينة." },
    uk: { title: "Розуміння: Транспорт", description: "Прочитайте простий текст про поїздки міським автобусом." },
    fr: { title: "Compréhension : Les transports", description: "Lisez un texte simple sur comment voyager en bus dans la ville." }
  },
  "a1-reading-4": {
    es: { title: "Comprensión: En el Médico", description: "Lee un texto breve sobre la consulta de un enfermo en el hospital y sus medicamentos." },
    en: { title: "Comprehension: At the Doctor", description: "Read a brief text about a patient's consultation in the hospital and their medications." },
    ar: { title: "الفهم: عند الطبيب", description: "اقرأ نصاً قصيراً عن مريض في المستشفى والأدوية الموصوفة له." },
    uk: { title: "Розуміння: У лікаря", description: "Прочитайте короткий текст про візит пацієнта до лікарні та його ліки." },
    fr: { title: "Compréhension : Chez le médecin", description: "Lisez un court texte sur la consultation d'un patient à l'hôpital et ses médicaments." }
  },
  "a1-reading-5": {
    es: { title: "Comprensión: La Hora y el Saludo", description: "Lee un texto sobre saludos cotidianos a distintas horas del día." },
    en: { title: "Comprehension: Time and Greetings", description: "Read a text about everyday greetings at different times of the day." },
    ar: { title: "الفهم: الوقت والتحية", description: "اقرأ نصاً عن التحيات اليومية في أوقات مختلفة من اليوم." },
    uk: { title: "Розуміння: Час та привітання", description: "Прочитайте текст про повсякденні привітання в різні години доби." },
    fr: { title: "Compréhension : L'heure et les salutations", description: "Lisez un texte sur les salutations quotidiennes aux différentes heures de la journée." }
  },
  "a1-reading-6": {
    es: { title: "Comprensión: En el Supermercado", description: "Lee sobre la compra de alimentos básicos en una tienda de alimentación." },
    en: { title: "Comprehension: In the Supermarket", description: "Read about buying basic foods in a grocery store." },
    ar: { title: "الفهم: في السوبرماركت", description: "اقرأ عن شراء الأغذية الأساسية في متجر لبيع المواد الغذائية." },
    uk: { title: "Розуміння: У супермаркеті", description: "Прочитайте про покупку основних продуктів харчування в продуктовому магазині." },
    fr: { title: "Compréhension : Au supermarché", description: "Lisez sur l'achat d'aliments de base dans une épicerie." }
  },
  "a1-reading-7": {
    es: { title: "Comprensión: Mi Profesión", description: "Lee un texto breve sobre la familia de Luis y sus profesiones." },
    en: { title: "Comprehension: My Profession", description: "Read a brief text about Luis's family and their professions." },
    ar: { title: "الفهم: مهنتي", description: "اقرأ نصاً قصيراً عن عائلة لويس ومهنهم." },
    uk: { title: "Розуміння: Моя професія", description: "Прочитайте короткий текст про родину Луїса та їхні професії." },
    fr: { title: "Compréhension : Ma profession", description: "Lisez un court texte sur la famille de Luis et leurs professions." }
  },
  "a1-reading-8": {
    es: { title: "Comprensión: En la Farmacia", description: "Lee sobre la compra de medicamentos recetados por el doctor." },
    en: { title: "Comprehension: In the Pharmacy", description: "Read about buying prescription medications from the doctor." },
    ar: { title: "الفهم: في الصيدلية", description: "اقرأ عن شراء الأدوية الموصوفة من قبل الطبيب." },
    uk: { title: "Розуміння: В аптеці", description: "Прочитайте про купівлю ліків, виписаних лікарем." },
    fr: { title: "Compréhension : À la pharmacie", description: "Lisez sur l'achat de médicaments prescrits par le médecin." }
  },
  "a1-reading-9": {
    es: { title: "Comprensión: En la Ciudad", description: "Lee un texto breve sobre el trayecto a casa en autobús." },
    en: { title: "Comprehension: In the City", description: "Read a brief text about the journey home by bus." },
    ar: { title: "الفهم: في المدينة", description: "اقرأ نصاً قصيراً حول رحلة العودة إلى المنزل بالحافلة." },
    uk: { title: "Розуміння: У місті", description: "Прочитайте короткий текст про дорогу додому на автобусі." },
    fr: { title: "Compréhension : En ville", description: "Lisez un court texte sur le trajet de retour à la maison en bus." }
  },
  "a1-reading-10": {
    es: { title: "Comprensión: País, Color y Nacionalidad", description: "Lee la descripción del país de origen de una persona y los colores de su bandera." },
    en: { title: "Comprehension: Country, Color and Nationality", description: "Read the description of a person's country of origin and the colors of their flag." },
    ar: { title: "الفهم: البلد واللون والجنسية", description: "اقرأ وصف بلد منشأ شخص ما وألوان علم بلده." },
    uk: { title: "Розуміння: Країна, колір та національність", description: "Прочитайте опис країни походження людини та кольорів її прапора." },
    fr: { title: "Compréhension : Pays, couleur et nationalité", description: "Lisez la description du pays d'origine d'une personne et les couleurs de son drapeau." }
  }
};

export function getLessonMetadata(id: string, defaultTitle: string, defaultDesc: string, lang: Language): LessonMetadata {
  const lessonTrans = lessonMetadataTranslations[id];
  if (lessonTrans && lessonTrans[lang]) {
    return lessonTrans[lang];
  }
  return { title: defaultTitle, description: defaultDesc };
}
