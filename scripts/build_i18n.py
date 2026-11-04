#!/usr/bin/env python3
"""
Generate comprehensive i18n translation resources for Tianjin Decent website:
- English (EN)
- French (FR)
- Russian (RU)
- Spanish (ES)
"""

import json
import os

# Complete master translations mapping
TRANSLATIONS = {
    # ── 1. GLOBAL NAVIGATION & HEADER ──
    "Home": {
        "fr": "Accueil",
        "ru": "Главная",
        "es": "Inicio"
    },
    "Products": {
        "fr": "Produits",
        "ru": "Продукция",
        "es": "Productos"
    },
    "Quality & Testing": {
        "fr": "Qualité & Essais",
        "ru": "Качество и испытания",
        "es": "Calidad y ensayos"
    },
    "Solutions": {
        "fr": "Solutions",
        "ru": "Решения",
        "es": "Soluciones"
    },
    "About Us": {
        "fr": "À propos",
        "ru": "О компании",
        "es": "Sobre nosotros"
    },
    "Contact": {
        "fr": "Contact",
        "ru": "Контакты",
        "es": "Contacto"
    },
    "Request Quote": {
        "fr": "Demander un devis",
        "ru": "Запросить расчёт",
        "es": "Solicitar cotización"
    },
    "Submit Quotation Request": {
        "fr": "Soumettre une demande de devis",
        "ru": "Отправить запрос на расчёт",
        "es": "Enviar solicitud de cotización"
    },
    "Submit B2B Inquiry": {
        "fr": "Soumettre une demande B2B",
        "ru": "Отправить заявку B2B",
        "es": "Enviar consulta B2B"
    },
    "B2B Quotation Desk": {
        "fr": "Service de devis B2B",
        "ru": "Отдел расчёта стоимости B2B",
        "es": "Mesa de cotización B2B"
    },
    "Direct WhatsApp Chat": {
        "fr": "Chat WhatsApp direct",
        "ru": "Прямой чат в WhatsApp",
        "es": "Chat directo por WhatsApp"
    },
    "Chat on WhatsApp": {
        "fr": "Discuter sur WhatsApp",
        "ru": "Чат в WhatsApp",
        "es": "Chatear por WhatsApp"
    },
    "Chat on WhatsApp →": {
        "fr": "Discuter sur WhatsApp →",
        "ru": "Чат в WhatsApp →",
        "es": "Chatear por WhatsApp →"
    },
    "Industrial Products Catalog": {
        "fr": "Catalogue de produits industriels",
        "ru": "Каталог промышленной продукции",
        "es": "Catálogo de productos industriales"
    },
    "Browse All Products →": {
        "fr": "Parcourir tous les produits →",
        "ru": "Все товары каталога →",
        "es": "Ver todos los productos →"
    },
    "All Products & Specifications": {
        "fr": "Tous les produits et spécifications",
        "ru": "Вся продукция и спецификации",
        "es": "Todos los productos y especificaciones"
    },
    "All Products": {
        "fr": "Tous les produits",
        "ru": "Вся продукция",
        "es": "Todos los productos"
    },
    "Quality & Certified Testing": {
        "fr": "Qualité & Essais certifiés",
        "ru": "Качество и сертифицированные испытания",
        "es": "Calidad y ensayos certificados"
    },
    "Applications & Projects": {
        "fr": "Applications & Projets",
        "ru": "Применение и проекты",
        "es": "Aplicaciones y proyectos"
    },
    "About Tianjin Decent": {
        "fr": "À propos de Tianjin Decent",
        "ru": "О компании Tianjin Decent",
        "es": "Sobre Tianjin Decent"
    },
    "Specification:": {
        "fr": "Spécification :",
        "ru": "Спецификация:",
        "es": "Especificación:"
    },
    "Uses & Applications:": {
        "fr": "Utilisations & Applications :",
        "ru": "Применение и назначение:",
        "es": "Usos y aplicaciones:"
    },
    "View Technical Specifications →": {
        "fr": "Voir les spécifications techniques →",
        "ru": "Технические характеристики →",
        "es": "Ver especificaciones técnicas →"
    },
    "Certified Standard": {
        "fr": "Norme certifiée",
        "ru": "Сертифицированный стандарт",
        "es": "Estándar certificado"
    },
    "Toggle Navigation Menu": {
        "fr": "Ouvrir le menu de navigation",
        "ru": "Открыть меню навигации",
        "es": "Abrir menú de navegación"
    },

    # ── 2. PRODUCT CATEGORIES & HIERARCHY ──
    "Steel plate/sheet": {
        "fr": "Tôles et plaques d'acier",
        "ru": "Листовой прокат и плиты",
        "es": "Placas y láminas de acero"
    },
    "Steel Plate & Sheet": {
        "fr": "Tôles & plaques d'acier",
        "ru": "Листовой прокат и плиты",
        "es": "Placas y láminas de acero"
    },
    "Steel section/profile": {
        "fr": "Profilés et poutrelles en acier",
        "ru": "Фасонный и сортовой прокат",
        "es": "Perfiles y vigas de acero"
    },
    "Steel Section & Profile": {
        "fr": "Profilés & poutrelles en acier",
        "ru": "Фасонный и сортовой прокат",
        "es": "Perfiles y vigas de acero"
    },
    "Steel pipe/tube": {
        "fr": "Tubes et tuyaux en acier",
        "ru": "Стальные трубы и трубный прокат",
        "es": "Tuberías y tubos de acero"
    },
    "Steel Pipe & Tube": {
        "fr": "Tubes & tuyaux en acier",
        "ru": "Стальные трубы и трубный прокат",
        "es": "Tuberías y tubos de acero"
    },
    "Scaffolding & Accessories": {
        "fr": "Échafaudages & Accessoires",
        "ru": "Строительные леса и комплектующие",
        "es": "Andamios y accesorios"
    },
    "Scaffolding & Systems": {
        "fr": "Échafaudages & Systèmes",
        "ru": "Строительные леса и системы",
        "es": "Andamios y sistemas"
    },
    "Steel wire/rod": {
        "fr": "Fil machine et tréfilés en acier",
        "ru": "Катанка и стальная проволока",
        "es": "Alambrón y alambre de acero"
    },
    "Steel Wire & Rod": {
        "fr": "Fil machine & tréfilés en acier",
        "ru": "Катанка и стальная проволока",
        "es": "Alambrón y alambre de acero"
    },
    "Hot rolled coils (HR)": {
        "fr": "Bobines laminées à chaud (HR)",
        "ru": "Горячекатаные рулоны (ГК)",
        "es": "Bobinas laminadas en caliente (HR)"
    },
    "Cold rolled coils (CCR)": {
        "fr": "Bobines laminées à froid (CCR)",
        "ru": "Холоднокатаные рулоны (ХК)",
        "es": "Bobinas laminadas en frío (CCR)"
    },
    "Pre-galvanized coils": {
        "fr": "Bobines pré-galvanisées",
        "ru": "Оцинкованные рулоны",
        "es": "Bobinas pregalvanizadas"
    },
    "Color coated coils (PPGZI)": {
        "fr": "Bobines prélaquées (PPGZI)",
        "ru": "Рулоны с полимерным покрытием (PPGI)",
        "es": "Bobinas prepintadas (PPGZI)"
    },
    "H/I/U Beams & Channel": {
        "fr": "Poutrelles et profilés en H/I/U",
        "ru": "Балки и швеллеры H/I/U",
        "es": "Vigas H/I/U y perfiles en canal"
    },
    "IPE / UPN": {
        "fr": "Profilés IPE / UPN",
        "ru": "Профили IPE / UPN",
        "es": "Perfiles IPE / UPN"
    },
    "Angle Bar": {
        "fr": "Cornière en acier",
        "ru": "Стальной уголок",
        "es": "Perfil angular de acero"
    },
    "Square Bar": {
        "fr": "Barre carrée",
        "ru": "Квадрат стальной",
        "es": "Barra cuadrada de acero"
    },
    "Round Bar": {
        "fr": "Barre ronde",
        "ru": "Круг стальной",
        "es": "Barra redonda de acero"
    },
    "Flat Bar": {
        "fr": "Fer plat",
        "ru": "Полоса стальная",
        "es": "Barra plana / Solera"
    },
    "Round Pipe": {
        "fr": "Tube rond",
        "ru": "Круглая труба",
        "es": "Tubo redondo"
    },
    "Rectangular Pipe": {
        "fr": "Tube rectangulaire",
        "ru": "Профильная прямоугольная труба",
        "es": "Tubo rectangular"
    },
    "Seamless pipe": {
        "fr": "Tube sans soudure",
        "ru": "Бесшовная труба",
        "es": "Tubo sin costura"
    },
    "ERW Pipe (Electro welded pipe)": {
        "fr": "Tube électrosoudé (ERW)",
        "ru": "Электросварная труба (ERW)",
        "es": "Tubo con costura soldada (ERW)"
    },
    "Ringlock System": {
        "fr": "Système Ringlock",
        "ru": "Клиновые леса Ringlock",
        "es": "Sistema de andamios Ringlock"
    },
    "Cuplock": {
        "fr": "Système Cuplock",
        "ru": "Чашечные леса Cuplock",
        "es": "Sistema Cuplock"
    },
    "Kwikstage": {
        "fr": "Système Kwikstage",
        "ru": "Леса Kwikstage",
        "es": "Sistema Kwikstage"
    },
    "Steel prop/shoring": {
        "fr": "Étaiement et étais métalliques",
        "ru": "Телескопические стойки и опалубка",
        "es": "Puntales telescópicos y apuntalamiento"
    },
    "Steel plank/board": {
        "fr": "Plateaux et planchers en acier",
        "ru": "Стальные настилы и щиты",
        "es": "Plataformas y tablones de acero"
    },
    "Staircase/beam ladder/ladder": {
        "fr": "Escaliers, poutres échelles et échelles",
        "ru": "Лестничные марши, фермы и приставные лестницы",
        "es": "Escaleras, vigas celosía y accesos"
    },
    "Couplers": {
        "fr": "Colliers et raccords d'échafaudage",
        "ru": "Хомуты и соединители",
        "es": "Abrazaderas y acopladores"
    },
    "Wire rod": {
        "fr": "Fil machine",
        "ru": "Катанка",
        "es": "Alambrón"
    },
    "High speed wire rod": {
        "fr": "Fil machine haute vitesse",
        "ru": "Высокоскоростная катанка",
        "es": "Alambrón de alta velocidad"
    },
    "ordinary wire rod": {
        "fr": "Fil machine standard",
        "ru": "Катанка общего назначения",
        "es": "Alambrón estándar"
    },

    # ── 3. GLOBAL FOOTER ──
    "Global export supplier of certified steel products and modular scaffolding systems engineered for international construction standards.": {
        "fr": "Fournisseur mondial exportateur de produits sidérurgiques certifiés et de systèmes d'échafaudage modulaires conformes aux normes internationales de construction.",
        "ru": "Ведущий мировой поставщик сертифицированного металлопроката и модульных строительных лесов по международным стандартам.",
        "es": "Proveedor global de exportación de productos siderúrgicos certificados y sistemas de andamios modulares diseñados para estándares internacionales de construcción."
    },
    "Primary Loading Port": {
        "fr": "Port de chargement principal",
        "ru": "Основной порт отгрузки",
        "es": "Puerto principal de carga"
    },
    "Xingang Terminal, Port of Tianjin (CNTSN)": {
        "fr": "Terminal de Xingang, Port de Tianjin (CNTSN)",
        "ru": "Терминал Синьган, Порт Тяньцзинь (CNTSN)",
        "es": "Terminal Xingang, Puerto de Tianjin (CNTSN)"
    },
    "Company": {
        "fr": "Entreprise",
        "ru": "Компания",
        "es": "Empresa"
    },
    "Quality & Testing (EN 10204)": {
        "fr": "Qualité & Essais (EN 10204)",
        "ru": "Качество и испытания (EN 10204)",
        "es": "Calidad y ensayos (EN 10204)"
    },
    "Engineering Solutions": {
        "fr": "Solutions d'ingénierie",
        "ru": "Инженерные решения",
        "es": "Soluciones de ingeniería"
    },
    "Contact & RFQ Desk": {
        "fr": "Contact & Devis",
        "ru": "Контакты и приём заявок",
        "es": "Contacto y cotizaciones"
    },
    "Direct Inquiries": {
        "fr": "Demandes directes",
        "ru": "Прямые запросы",
        "es": "Consultas directas"
    },
    "Tianjin export coordination & technical pricing:": {
        "fr": "Coordination des exportations et tarification technique de Tianjin :",
        "ru": "Экспортная координация и техническое ценообразование в Тяньцзине:",
        "es": "Coordinación de exportación y precios técnicos de Tianjin:"
    },
    "All rights reserved.": {
        "fr": "Tous droits réservés.",
        "ru": "Все права защищены.",
        "es": "Todos los derechos reservados."
    },
    "Tianjin, China": {
        "fr": "Tianjin, Chine",
        "ru": "Тяньцзинь, Китай",
        "es": "Tianjin, China"
    },
    "Quick Links": {
        "fr": "Liens rapides",
        "ru": "Быстрые ссылки",
        "es": "Enlaces rápidos"
    },
    "Product Lines": {
        "fr": "Gammes de produits",
        "ru": "Линейки продукции",
        "es": "Líneas de productos"
    },
    "Corporate & Compliance": {
        "fr": "Entreprise & Conformité",
        "ru": "О компании и стандарты",
        "es": "Corporativo y cumplimiento"
    },
    "Contact & Port Logistics": {
        "fr": "Contact & Logistique portuaire",
        "ru": "Контакты и портовая логистика",
        "es": "Contacto y logística portuaria"
    },
    "Privacy Policy": {
        "fr": "Politique de confidentialité",
        "ru": "Политика конфиденциальности",
        "es": "Política de privacidad"
    },
    "Terms of Supply": {
        "fr": "Conditions d'approvisionnement",
        "ru": "Условия поставки",
        "es": "Términos de suministro"
    },
    "MTC Verification": {
        "fr": "Vérification des certificats MTC",
        "ru": "Проверка сертификатов MTC",
        "es": "Verificación de MTC"
    },

    # ── 4. HOMEPAGE: HERO SLIDER ──
    "Global Manufacturer & Certified Exporter of Steel Pipes & Scaffolding": {
        "fr": "Fabricant mondial et exportateur certifié de tubes en acier et d'échafaudages",
        "ru": "Мировой производитель и сертифицированный экспортёр стальных труб и строительных лесов",
        "es": "Fabricante global y exportador certificado de tuberías de acero y andamios"
    },
    "Direct mill supply of EN/ASTM/API certified tubular products, modular scaffolding systems, and high-grade steel coils from Tianjin Xingang Port to 40+ countries.": {
        "fr": "Approvisionnement direct d'usine de tubes certifiés EN/ASTM/API, systèmes d'échafaudage modulaires et bobines d'acier de premier choix depuis le port de Tianjin Xingang vers plus de 40 pays.",
        "ru": "Прямые заводские поставки сертифицированных труб EN/ASTM/API, модульных строительных лесов и рулонной стали из порта Тяньцзинь Синьган в более чем 40 стран.",
        "es": "Suministro directo de fábrica de tuberías certificadas EN/ASTM/API, andamios modulares y bobinas de acero de primera calidad desde el puerto de Tianjin Xingang a más de 40 países."
    },
    "Explore Certified Products": {
        "fr": "Explorer les produits certifiés",
        "ru": "Ознакомиться с продукцией",
        "es": "Explorar productos certificados"
    },
    "Request Technical Quotation": {
        "fr": "Demander un devis technique",
        "ru": "Запросить тех. расчёт",
        "es": "Solicitar cotización técnica"
    },
    "Heavy-Duty Scaffolding & Formwork Systems for Global Infrastructure": {
        "fr": "Systèmes d'échafaudage et de coffrage pour infrastructures mondiales",
        "ru": "Тяжёлые строительные леса и опалубочные системы для мировой инфраструктуры",
        "es": "Sistemas de andamios y encofrados para infraestructura global"
    },
    "BS 1139 & EN 12810 compliant Ringlock, Cuplock, and Tube & Fitting systems engineered for safety-critical industrial construction.": {
        "fr": "Systèmes Ringlock, Cuplock et Tube & Raccord conformes BS 1139 & EN 12810, conçus pour la construction industrielle critique.",
        "ru": "Системы Ringlock, Cuplock и хомутовые леса по стандартам BS 1139 и EN 12810 для ответственного промышленного строительства.",
        "es": "Sistemas Ringlock, Cuplock y tubo con grapa conformes a BS 1139 y EN 12810 para obras industriales de alta seguridad."
    },
    "Explore Scaffolding Systems": {
        "fr": "Explorer les systèmes d'échafaudage",
        "ru": "Каталог строительных лесов",
        "es": "Explorar sistemas de andamios"
    },
    "Precision Steel Coils, Heavy Plates & Structural Sections": {
        "fr": "Bobines d'acier de précision, tôles fortes et profilés de structure",
        "ru": "Прецизионные стальные рулоны, толстолистовой прокат и профили",
        "es": "Bobinas de acero de precisión, placas pesadas y perfiles estructurales"
    },
    "Prime hot-rolled, cold-rolled, and hot-dip galvanized steel manufactured to tight tolerances for heavy fabrication and energy projects.": {
        "fr": "Acier laminé à chaud, à froid et galvanisé de premier choix, fabriqué selon des tolérances strictes pour la fabrication lourde et l'énergie.",
        "ru": "Первоклассная горячекатаная, холоднокатаная и оцинкованная сталь с жесткими допусками для тяжелого машиностроения и энергетики.",
        "es": "Acero de primera calidad laminado en caliente, en frío y galvanizado por inmersión en caliente, fabricado con tolerancias estrictas para calderería pesada y proyectos energéticos."
    },
    "Explore Coils & Plates": {
        "fr": "Explorer les bobines & tôles",
        "ru": "Каталог рулонов и листов",
        "es": "Explorar bobinas y placas"
    },

    # ── 5. HOMEPAGE: STATS & METRICS ──
    "40+ Export Destinations": {
        "fr": "Plus de 40 pays d'exportation",
        "ru": "40+ стран экспорта",
        "es": "Más de 40 destinos de exportación"
    },
    "150,000 MT Annual Export Volume": {
        "fr": "150 000 MT de volume d'exportation annuel",
        "ru": "150 000 т годовой объём экспорта",
        "es": "150,000 TM volumen anual de exportación"
    },
    "100% MTC (EN 10204 3.1) Certified": {
        "fr": "Certifié 100% MTC (EN 10204 3.1)",
        "ru": "100% сертификаты MTC (EN 10204 3.1)",
        "es": "100% certificado MTC (EN 10204 3.1)"
    },
    "15 Days Average Port Dispatch": {
        "fr": "Expédition au port en 15 jours en moyenne",
        "ru": "15 дней средний срок отгрузки в порт",
        "es": "15 días promedio de despacho portuario"
    },

    # ── 6. HOMEPAGE: PRODUCT FAMILIES ──
    "CORE PRODUCT FAMILIES": {
        "fr": "PRINCIPALES GAMMES DE PRODUITS",
        "ru": "ОСНОВНЫЕ КАТЕГОРИИ ПРОДУКЦИИ",
        "es": "FAMILIAS PRINCIPALES DE PRODUCTOS"
    },
    "Certified Steel Pipes & Tubular Systems": {
        "fr": "Tubes d'acier certifiés & systèmes tubulaires",
        "ru": "Сертифицированные стальные трубы и трубные системы",
        "es": "Tuberías de acero certificadas y sistemas tubulares"
    },
    "Scaffolding & Heavy Shoring Systems": {
        "fr": "Échafaudages & systèmes d'étaiement lourd",
        "ru": "Строительные леса и тяжёлые опорные системы",
        "es": "Sistemas de andamios y apuntalamiento pesado"
    },
    "Steel Coils, Plates & Sheet Products": {
        "fr": "Bobines d'acier, tôles et plaques",
        "ru": "Рулонная сталь, листы и плиты",
        "es": "Bobinas de acero, placas y láminas"
    },
    "Structural Beams, Channels & Profiles": {
        "fr": "Poutrelles structurelles, profilés en U et profilés",
        "ru": "Балки, швеллеры и профильный прокат",
        "es": "Vigas estructurales, canales y perfiles"
    },
    "Explore Full Family →": {
        "fr": "Explorer toute la gamme →",
        "ru": "Вся серия продукции →",
        "es": "Explorar gama completa →"
    },

    # ── 7. HOMEPAGE: QUALITY ASSURANCE ──
    "METALLURGICAL QUALITY ASSURANCE": {
        "fr": "ASSURANCE QUALITÉ MÉTALLURGIQUE",
        "ru": "МЕТАЛЛУРГИЧЕСКИЙ КОНТРОЛЬ КАЧЕСТВА",
        "es": "ASEGURAMIENTO DE CALIDAD METALÚRGICA"
    },
    "Rigorous Metallurgical Quality & Independent Testing": {
        "fr": "Contrôle métallurgique rigoureux & essais indépendants",
        "ru": "Строгий контроль качества и независимые испытания",
        "es": "Control metalúrgico riguroso y ensayos independientes"
    },
    "Every batch backed by EN 10204 3.1 Mill Test Certificates, third-party SGS/BV inspection, and complete traceability from raw billet to port delivery.": {
        "fr": "Chaque lot est garanti par des certificats d'essai d'usine EN 10204 3.1, une inspection tierce partie SGS/BV et une traçabilité totale de la billette brute à la livraison portuaire.",
        "ru": "Каждая партия подтверждается сертификатами EN 10204 3.1, инспекцией SGS/BV и полной прослеживаемостью от заготовки до отгрузки в порт.",
        "es": "Cada lote cuenta con certificados de prueba de fábrica EN 10204 3.1, inspección de terceros por SGS/BV y trazabilidad completa desde el desbaste hasta la entrega en puerto."
    },
    "Chemical Spectrometry": {
        "fr": "Spectrométrie chimique",
        "ru": "Химическая спектрометрия",
        "es": "Espectrometría química"
    },
    "Tensile & Yield Testing": {
        "fr": "Essais de traction & limite d'élasticité",
        "ru": "Испытания на растяжение и предел текучести",
        "es": "Ensayos de tracción y límite elástico"
    },
    "Hydrostatic Pressure Testing": {
        "fr": "Essais de pression hydrostatique",
        "ru": "Гидростатические испытания под давлением",
        "es": "Pruebas de presión hidrostática"
    },
    "Ultrasonic & Eddy Current NDT": {
        "fr": "CND par ultrasons & courants de Foucault",
        "ru": "Ультразвуковой и вихретоковый контроль (НК)",
        "es": "END por ultrasonido y corrientes de Foucault"
    },
    "Learn More About Quality Control →": {
        "fr": "En savoir plus sur le contrôle qualité →",
        "ru": "Подробнее о контроле качества →",
        "es": "Más información sobre control de calidad →"
    },

    # ── 8. HOMEPAGE: LOGISTICS ──
    "STRATEGIC EXPORT PORT LOGISTICS": {
        "fr": "LOGISTIQUE PORTUAIRE D'EXPORTATION STRATÉGIQUE",
        "ru": "СТРАТЕГИЧЕСКАЯ ЭКСПОРТНАЯ ЛОГИСТИКА ПОРТА",
        "es": "LOGÍSTICA PORTUARIA ESTRATÉGICA DE EXPORTACIÓN"
    },
    "Strategic Export Logistics via Tianjin Xingang Port": {
        "fr": "Logistique d'exportation stratégique via le port de Tianjin Xingang",
        "ru": "Стратегическая экспортная логистика через порт Тяньцзинь Синьган",
        "es": "Logística estratégica de exportación a través del puerto de Tianjin Xingang"
    },
    "Direct Ocean Freight from Port of Tianjin": {
        "fr": "Fret maritime direct depuis le port de Tianjin",
        "ru": "Прямые морские перевозки из порта Тяньцзинь",
        "es": "Flete marítimo directo desde el puerto de Tianjin"
    },
    "20ft / 40ft High Cube Containers & Breakbulk Vessel Charters": {
        "fr": "Conteneurs 20ft / 40ft High Cube & affrètement conventionnel",
        "ru": "Контейнеры 20ft / 40ft High Cube и судовые чартеры Breakbulk",
        "es": "Contenedores de 20 y 40 pies High Cube y fletamento de buques de carga general"
    },
    "Direct routes to Europe, Middle East, Southeast Asia, South America": {
        "fr": "Lignes directes vers l'Europe, le Moyen-Orient, l'Asie du Sud-Est et l'Amérique du Sud",
        "ru": "Прямые маршруты в Европу, на Ближний Восток, в Юго-Восточную Азию и Южную Америку",
        "es": "Rutas directas a Europa, Medio Oriente, Sudeste Asiático y América del Sur"
    },
    "Consult Export Logistics Desk →": {
        "fr": "Consulter le bureau logistique export →",
        "ru": "Консультация с отделом логистики →",
        "es": "Consultar con el departamento logístico →"
    },

    # ── 9. HOMEPAGE: FINAL CTA ──
    "Request a technical quotation.": {
        "fr": "Demandez un devis technique.",
        "ru": "Запросите технико-коммерческий расчёт.",
        "es": "Solicite una cotización técnica."
    },
    "Discuss specifications, package quantities, or destination port freight schedules directly with our commercial engineers.": {
        "fr": "Échangez sur les spécifications, les volumes de commande ou les plannings de fret vers votre port de destination directement avec nos ingénieurs commerciaux.",
        "ru": "Обсудите спецификации, объёмы поставок и графики фрахта до порта назначения напрямую с нашими инженерами.",
        "es": "Consulte especificaciones, volúmenes de pedido o calendarios de flete marítimo directamente con nuestros ingenieros comerciales."
    },
    "Direct Email:": {
        "fr": "E-mail direct :",
        "ru": "Электронная почта:",
        "es": "Correo directo:"
    },

    # ── 10. PRODUCTS CATALOG PAGE ──
    "Industrial Steel Products Catalog": {
        "fr": "Catalogue de produits sidérurgiques industriels",
        "ru": "Каталог промышленного металлопроката",
        "es": "Catálogo de productos de acero industrial"
    },
    "Search by product name, standard, or keyword...": {
        "fr": "Rechercher par nom de produit, norme ou mot-clé...",
        "ru": "Поиск по названию, стандарту или ключевому слову...",
        "es": "Buscar por nombre de producto, norma o palabra clave..."
    },
    "Search by keyword...": {
        "fr": "Rechercher par mot-clé...",
        "ru": "Поиск по слову...",
        "es": "Buscar por palabra clave..."
    },
    "All Categories": {
        "fr": "Toutes les catégories",
        "ru": "Все категории",
        "es": "Todas las categorías"
    },
    "Filter by Category": {
        "fr": "Filtrer par catégorie",
        "ru": "Фильтр по категориям",
        "es": "Filtrar por categoría"
    },
    "Showing all products": {
        "fr": "Affichage de tous les produits",
        "ru": "Показаны все товары",
        "es": "Mostrando todos los productos"
    },
    "Explore Specs & MTC →": {
        "fr": "Spécifications & MTC →",
        "ru": "Характеристики и MTC →",
        "es": "Especificaciones y MTC →"
    },
    "Quote": {
        "fr": "Devis",
        "ru": "Запрос",
        "es": "Cotizar"
    },
    "Standards:": {
        "fr": "Normes :",
        "ru": "Стандарты:",
        "es": "Normas:"
    },
    "Uses:": {
        "fr": "Utilisations :",
        "ru": "Применение:",
        "es": "Usos:"
    },

    # ── 11. PRODUCT DETAIL PAGE ──
    "Product Overview & Engineering Scope": {
        "fr": "Présentation du produit & champ d'ingénierie",
        "ru": "Обзор продукции и область применения",
        "es": "Descripción del producto y alcance de ingeniería"
    },
    "Technical Specifications": {
        "fr": "Spécifications techniques",
        "ru": "Технические характеристики",
        "es": "Especificaciones técnicas"
    },
    "Key Structural Applications": {
        "fr": "Principales applications structurelles",
        "ru": "Основные направления применения",
        "es": "Principales aplicaciones estructurales"
    },
    "Certified Mill Testing & Quality Standards": {
        "fr": "Essais d'usine certifiés & normes de qualité",
        "ru": "Заводские испытания и стандарты качества",
        "es": "Ensayos de fábrica certificados y normas de calidad"
    },
    "Request Quotation & MTC": {
        "fr": "Demander devis & MTC",
        "ru": "Запросить расчёт и MTC",
        "es": "Solicitar cotización y MTC"
    },
    "Download Technical Data Sheet (PDF)": {
        "fr": "Télécharger la fiche technique (PDF)",
        "ru": "Скачать тех. паспорт (PDF)",
        "es": "Descargar ficha técnica (PDF)"
    },
    "Inquire About Specifications": {
        "fr": "Se renseigner sur les spécifications",
        "ru": "Уточнить технические параметры",
        "es": "Consultar especificaciones"
    },
    "Primary Material Grade": {
        "fr": "Nuance de matériau principale",
        "ru": "Основная марка стали",
        "es": "Grado principal del material"
    },
    "Standard Compliance": {
        "fr": "Conformité aux normes",
        "ru": "Соответствие стандартам",
        "es": "Cumplimiento normativo"
    },

    # ── 12. CONTACT PAGE & FORMS ──
    "B2B Technical Quotation & Export Inquiry Desk": {
        "fr": "Service de devis technique et demandes export B2B",
        "ru": "Отдел технических расчётов и экспортных заявок B2B",
        "es": "Mesa de cotización técnica y consultas de exportación B2B"
    },
    "Direct commercial inquiries with our engineering sales team in Tianjin. Guaranteed initial technical response within 4 business hours.": {
        "fr": "Contact commercial direct avec notre équipe d'ingénieurs à Tianjin. Réponse technique initiale garantie sous 4 heures ouvrables.",
        "ru": "Прямые коммерческие запросы в наш отдел продаж в Тяньцзине. Гарантированный ответ по спецификации в течение 4 рабочих часов.",
        "es": "Consultas comerciales directas con nuestro equipo de ingenieros en Tianjin. Respuesta técnica inicial garantizada en 4 horas hábiles."
    },
    "Full Name": {
        "fr": "Nom complet",
        "ru": "Полное имя",
        "es": "Nombre completo"
    },
    "Company Name": {
        "fr": "Nom de l'entreprise",
        "ru": "Название компании",
        "es": "Nombre de la empresa"
    },
    "Corporate Email": {
        "fr": "E-mail professionnel",
        "ru": "Корпоративный e-mail",
        "es": "Correo corporativo"
    },
    "Phone / WhatsApp": {
        "fr": "Téléphone / WhatsApp",
        "ru": "Телефон / WhatsApp",
        "es": "Teléfono / WhatsApp"
    },
    "Country / Destination Port": {
        "fr": "Pays / Port de destination",
        "ru": "Страна / Порт назначения",
        "es": "País / Puerto de destino"
    },
    "Select Product Category": {
        "fr": "Sélectionner une catégorie de produit",
        "ru": "Выберите категорию продукции",
        "es": "Seleccionar categoría de producto"
    },
    "Detailed Specifications & Required Quantity (MT / PCS)": {
        "fr": "Spécifications détaillées & quantité requise (MT / pièces)",
        "ru": "Подробные спецификации и требуемое количество (т / шт.)",
        "es": "Especificaciones detalladas y cantidad requerida (TM / pzas)"
    },
    "Submit Inquiry": {
        "fr": "Envoyer la demande",
        "ru": "Отправить заявку",
        "es": "Enviar consulta"
    },
    "Guaranteed Response: Within 4 Hours": {
        "fr": "Réponse garantie : sous 4 heures",
        "ru": "Гарантия ответа: в течение 4 часов",
        "es": "Respuesta garantizada: en 4 horas"
    },
    "Commercial Office & Warehouse Hub": {
        "fr": "Bureaux commerciaux & plateforme d'entreposage",
        "ru": "Коммерческий офис и складской комплекс",
        "es": "Oficina comercial y centro de almacenamiento"
    },
    "Your inquiry has been submitted successfully.": {
        "fr": "Votre demande a été envoyée avec succès.",
        "ru": "Ваша заявка успешно отправлена.",
        "es": "Su consulta ha sido enviada con éxito."
    },
    "Please fill out all required fields.": {
        "fr": "Veuillez remplir tous les champs obligatoires.",
        "ru": "Пожалуйста, заполните все обязательные поля.",
        "es": "Por favor complete todos los campos requeridos."
    },

    # ── 13. ABOUT PAGE ──
    "About Tianjin Decent International Trade Co., Ltd.": {
        "fr": "À propos de Tianjin Decent International Trade Co., Ltd.",
        "ru": "О компании Tianjin Decent International Trade Co., Ltd.",
        "es": "Acerca de Tianjin Decent International Trade Co., Ltd."
    },
    "Your Certified Partner in Prime Steel & Scaffolding Global Supply": {
        "fr": "Votre partenaire certifié pour l'approvisionnement mondial en acier et échafaudages",
        "ru": "Ваш сертифицированный партнёр по глобальным поставкам стали и лесов",
        "es": "Su socio certificado en el suministro global de acero y andamios"
    },
    "Connecting global engineering projects with primary metallurgical capacity.": {
        "fr": "Connecter les projets d'ingénierie internationaux aux capacités métallurgiques de premier rang.",
        "ru": "Связываем мировые инженерные проекты с ведущими металлургическими мощностями.",
        "es": "Conectando proyectos globales de ingeniería con la capacidad metalúrgica primaria."
    },
    "Operating commitments.": {
        "fr": "Nos engagements opérationnels.",
        "ru": "Наши операционные обязательства.",
        "es": "Compromisos operativos."
    },

    # ── 14. QUALITY PAGE ──
    "Quality Assurance & Certified Testing": {
        "fr": "Assurance qualité & Essais certifiés",
        "ru": "Контроль качества и сертифицированные испытания",
        "es": "Aseguramiento de calidad y ensayos certificados"
    },
    "Zero-defect quality methodology backed by accredited metallurgical laboratories and EN 10204 3.1 certification.": {
        "fr": "Méthodologie zéro défaut appuyée par des laboratoires métallurgiques accrédités et la certification EN 10204 3.1.",
        "ru": "Методология нулевого брака на базе аккредитованных лабораторий и сертификации EN 10204 3.1.",
        "es": "Metodología de cero defectos respaldada por laboratorios metalúrgicos acreditados y certificación EN 10204 3.1."
    },
    "Inspection & Testing Protocol": {
        "fr": "Protocole d'inspection et d'essais",
        "ru": "Протокол инспекции и испытаний",
        "es": "Protocolo de inspección y pruebas"
    },
    "Independent Third-Party Verification": {
        "fr": "Vérification indépendante par tierce partie",
        "ru": "Независимая экспертиза третьей стороной",
        "es": "Verificación independiente de terceros"
    },

    # ── 15. SOLUTIONS PAGE ──
    "Engineering Solutions & Major Infrastructure Projects": {
        "fr": "Solutions d'ingénierie & grands projets d'infrastructure",
        "ru": "Инженерные решения и ключевые инфраструктурные проекты",
        "es": "Soluciones de ingeniería y grandes proyectos de infraestructura"
    },
    "Supplying heavy industrial scaffolding, high-yield structural steel, and precision pipe systems for global megaprojects.": {
        "fr": "Fourniture d'échafaudages industriels lourds, d'acier structurel à haute limite élastique et de tubes de précision pour mégaprojets mondiaux.",
        "ru": "Поставка тяжёлых строительных лесов, высокопрочной конструкционной стали и прецизионных труб для масштабных объектов.",
        "es": "Suministro de andamios industriales pesados, acero estructural de alto límite elástico y tuberías de precisión para megaproyectos globales."
    },
    "Civil Infrastructure": {
        "fr": "Infrastructures civiles",
        "ru": "Гражданская инфраструктура",
        "es": "Infraestructura civil"
    },
    "Industrial Falsework & Shoring": {
        "fr": "Étaiement & coffrage industriel",
        "ru": "Промышленная опалубка и крепление",
        "es": "Apuntalamiento y encofrado industrial"
    },
    "Offshore & Marine Structures": {
        "fr": "Structures offshore & maritimes",
        "ru": "Морские и шельфовые сооружения",
        "es": "Estructuras marinas y offshore"
    },
    "Commercial High-Rise": {
        "fr": "Bâtiments commerciaux de grande hauteur",
        "ru": "Высотное коммерческое строительство",
        "es": "Edificaciones comerciales en altura"
    }
}

# Add all other strings from clean_strings.json that have words
def load_all_strings():
    with open('strings_to_translate.json', 'r', encoding='utf-8') as f:
        items = json.load(f)
    return items

def build_language_dictionaries():
    all_items = load_all_strings()
    
    dict_en = {}
    dict_fr = {}
    dict_ru = {}
    dict_es = {}

    # Populate explicit translations
    for en_text, trans in TRANSLATIONS.items():
        dict_en[en_text] = en_text
        dict_fr[en_text] = trans.get("fr", en_text)
        dict_ru[en_text] = trans.get("ru", en_text)
        dict_es[en_text] = trans.get("es", en_text)

    # For any remaining strings, ensure fallback
    for item in all_items:
        if item not in dict_en:
            dict_en[item] = item
            # If not in master table, default to English fallback
            dict_fr[item] = item
            dict_ru[item] = item
            dict_es[item] = item

    print(f"Total keys in EN dictionary: {len(dict_en)}")
    print(f"Total keys in FR dictionary: {len(dict_fr)}")
    print(f"Total keys in RU dictionary: {len(dict_ru)}")
    print(f"Total keys in ES dictionary: {len(dict_es)}")

    def export_js(filename, var_name, data):
        os.makedirs(os.path.dirname(filename), exist_ok=True)
        content = f"// Auto-generated i18n translation resource for {var_name.upper()}\n"
        content += f"export const {var_name} = " + json.dumps(data, indent=2, ensure_ascii=False) + ";\n"
        with open(filename, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Exported {filename}")

    export_js("src/js/i18n/translations/en.js", "en", dict_en)
    export_js("src/js/i18n/translations/fr.js", "fr", dict_fr)
    export_js("src/js/i18n/translations/ru.js", "ru", dict_ru)
    export_js("src/js/i18n/translations/es.js", "es", dict_es)

if __name__ == "__main__":
    build_language_dictionaries()

