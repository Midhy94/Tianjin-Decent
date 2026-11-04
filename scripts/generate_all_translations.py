#!/usr/bin/env python3
"""
Comprehensive i18n translation generator for Tianjin Decent website:
Generates:
  src/js/i18n/translations/en.js
  src/js/i18n/translations/fr.js
  src/js/i18n/translations/ru.js
  src/js/i18n/translations/es.js
"""

import json
import os
import re

# Read strings needing translation
with open("strings_to_translate.json", "r", encoding="utf-8") as f:
    items = json.load(f)

# Load existing base translations from build_i18n.py
from build_i18n import TRANSLATIONS as BASE_TRANSLATIONS

# Additional specialized translations mapping
ADDITIONAL_TRANSLATIONS = {
    # Page Titles
    "About Us — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.": {
        "fr": "À propos — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.",
        "ru": "О компании — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.",
        "es": "Sobre nosotros — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD."
    },
    "B2B Quotation & Inquiries — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.": {
        "fr": "Devis B2B & Demandes — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.",
        "ru": "Расчёт B2B и заявки — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.",
        "es": "Cotización B2B y consultas — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD."
    },
    "Products — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.": {
        "fr": "Produits — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.",
        "ru": "Продукция — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.",
        "es": "Productos — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD."
    },
    "Quality & Testing — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.": {
        "fr": "Qualité & Essais — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.",
        "ru": "Качество и испытания — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.",
        "es": "Calidad y ensayos — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD."
    },
    "Solutions — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.": {
        "fr": "Solutions — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.",
        "ru": "Решения — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.",
        "es": "Soluciones — TIANJIN DECENT INTERNATIONAL TRADE CO., LTD."
    },

    # General Commercial & Technical
    "B2B Quotation & Supply Inquiries.": {
        "fr": "Devis B2B & Demandes d'approvisionnement.",
        "ru": "Расчёт B2B и заявки на поставку.",
        "es": "Cotización B2B y consultas de suministro."
    },
    "A specialized international industrial trading company headquartered in the strategic port city of Tianjin, China. Backed by long-standing relationships with premier metallurgical mills and heavy fabrication facilities across northern China.": {
        "fr": "Société spécialisée dans le commerce industriel international basée dans la ville portuaire stratégique de Tianjin, en Chine. Forte de relations durables avec les principales aciéries métallurgiques et usines de fabrication lourde du nord de la Chine.",
        "ru": "Специализированная международная торгово-промышленная компания со штаб-квартирой в портовом городе Тяньцзинь, Китай. Опирается на многолетнее сотрудничество с ведущими металлургическими заводами северного Китая.",
        "es": "Empresa comercial industrial internacional especializada con sede en la estratégica ciudad portuaria de Tianjin, China. Respaldada por relaciones duraderas con las principales acerías metalúrgicas e instalaciones de fabricación pesada del norte de China."
    },
    "Connecting global engineering projects with primary metallurgical capacity.": {
        "fr": "Connecter les projets d'ingénierie mondiaux aux capacités métallurgiques de premier rang.",
        "ru": "Связываем мировые инженерные проекты с ведущими металлургическими мощностями.",
        "es": "Conectando proyectos globales de ingeniería con la capacidad metalúrgica primaria."
    },
    "Our core operations center on Steel plate& sheet, Steel Section&profile, Steel pipe &tube, steel wire&rod, and modular scaffolding systems.": {
        "fr": "Nos activités principales se concentrent sur les tôles et plaques d'acier, les profilés et poutrelles, les tubes et tuyaux, le fil machine et les systèmes d'échafaudage modulaires.",
        "ru": "Наши ключевые направления: листовой прокат, фасонные профили, стальные трубы, катанка и модульные строительные леса.",
        "es": "Nuestras operaciones clave se centran en placas y láminas de acero, perfiles y vigas, tuberías y tubos, alambrón y sistemas de andamios modulares."
    },
    "Operating out of Tianjin affords direct geographical access to Xingang Terminal (Port Code: CNTSN)—one of the world's highest-throughput maritime trade hubs. This positioning drastically reduces transit times from blast-furnace mills to sea berths, avoiding weather exposure and transportation bottlenecks.": {
        "fr": "Opérer depuis Tianjin offre un accès direct au terminal de Xingang (code portuaire : CNTSN), l'un des hubs maritimes les plus actifs au monde. Cette situation réduit considérablement les délais de transit des hauts fourneaux aux quais maritimes, évitant l'exposition aux intempéries et les goulets d'étranglement.",
        "ru": "Работа в Тяньцзине обеспечивает прямой доступ к терминалу Синьган (код порта: CNTSN) — одному из крупнейших морских хабов мира. Это значительно сокращает время доставки от доменных печей до морских причалов, защищая продукцию от непогоды и задержек.",
        "es": "Operar desde Tianjin brinda acceso geográfico directo a la Terminal Xingang (código: CNTSN), uno de los centros marítimos de mayor volumen del mundo. Esto reduce drásticamente los tiempos de tránsito desde los altos hornos hasta los muelles, evitando la exposición climática y demoras de transporte."
    },
    "A Mill Test Certificate (MTC) provides the complete metallurgical lineage of your steel. Issued in accordance with EN 10204 Type 3.1 (or Type 3.2 with independent third-party witness), our certificates confirm:": {
        "fr": "Un certificat d'essai d'usine (MTC) garantit la traçabilité métallurgique complète de votre acier. Émis selon l'EN 10204 Type 3.1 (ou Type 3.2 avec témoin indépendant), nos certificats confirment :",
        "ru": "Сертификат заводских испытаний (MTC) подтверждает полную металлургическую историю стали. Выдаваемый в соответствии с EN 10204 тип 3.1 (или 3.2 с участием независимого инспектора), он удостоверяет:",
        "es": "Un Certificado de Prueba de Fábrica (MTC) proporciona la trazabilidad metalúrgica completa de su acero. Emitido de acuerdo con EN 10204 Tipo 3.1 (o Tipo 3.2 con testigo independiente), nuestros certificados confirman:"
    },
    "Carbon (C), Manganese (Mn), Silicon (Si), Phosphorus (P), Sulfur (S), and Carbon Equivalent Value (CEV).": {
        "fr": "Carbone (C), Manganèse (Mn), Silicium (Si), Phosphore (P), Soufre (S) et Valeur d'Équivalent Carbone (CEV).",
        "ru": "Углерод (C), марганец (Mn), кремний (Si), фосфор (P), сера (S) и углеродный эквивалент (CEV).",
        "es": "Carbono (C), Manganeso (Mn), Silicio (Si), Fósforo (P), Azufre (S) y Valor de Carbono Equivalente (CEV)."
    },
    "Calipered thickness tolerances, camber, squareness, and flatness measurements.": {
        "fr": "Tolérances d'épaisseur au palmer, cambrure, équerrage et mesures de planéité.",
        "ru": "Замеры допусков толщины микрометром, кривизны, прямоугольности и плоскостности.",
        "es": "Mediciones con calibrador de tolerancias de espesor, combado, escuadría y planitud."
    },
    "Bureau Veritas (BV) Witness": {
        "fr": "Témoin Bureau Veritas (BV)",
        "ru": "Инспекция Bureau Veritas (BV)",
        "es": "Testigo Bureau Veritas (BV)"
    },
    "SGS Inspection & Certification": {
        "fr": "Inspection & Certification SGS",
        "ru": "Инспекция и сертификация SGS",
        "es": "Inspección y certificación SGS"
    },
    "Certified Mill Test Reports": {
        "fr": "Rapports d'essais d'usine certifiés",
        "ru": "Сертифицированные заводские отчёты испытаний",
        "es": "Informes certificados de prueba de fábrica"
    },
    "Bridges, Viaducts & Falsework": {
        "fr": "Ponts, viaducs & étaiements de coffrage",
        "ru": "Мосты, виадуки и опорная опалубка",
        "es": "Puentes, viaductos y cimbras"
    },
    "Industrial Plants & Refineries": {
        "fr": "Usines industrielles & raffineries",
        "ru": "Промышленные заводы и НПЗ",
        "es": "Plantas industriales y refinerías"
    },
    "High-Rise Commercial Construction": {
        "fr": "Construction commerciale de grande hauteur",
        "ru": "Высотное коммерческое строительство",
        "es": "Construcción comercial en altura"
    },
    "Shipbuilding & Marine Engineering": {
        "fr": "Construction navale & génie maritime",
        "ru": "Судостроение и морская инженерия",
        "es": "Construcción naval e ingeniería marina"
    },
    "CERTIFIED INDUSTRIAL STEEL & SCAFFOLDING SUPPLY": {
        "fr": "APPROVISIONNEMENT CERTIFIÉ EN ACIER INDUSTRIEL & ÉCHAFAUDAGES",
        "ru": "ПОСТАВКИ СЕРТИФИЦИРОВАННОЙ СТАЛИ И СТРОИТЕЛЬНЫХ ЛЕСОВ",
        "es": "SUMINISTRO CERTIFICADO DE ACERO INDUSTRIAL Y ANDAMIOS"
    },
    "Black Carbon Steel Rectangular Pipe (Self Color)": {
        "fr": "Tube rectangulaire en acier au carbone noir (brut)",
        "ru": "Стальная прямоугольная профильная труба (без покрытия)",
        "es": "Tubo rectangular de acero al carbono negro (acabado natural)"
    },
    "Black Carbon Steel Round Pipe (Self Color)": {
        "fr": "Tube rond en acier au carbone noir (brut)",
        "ru": "Стальная круглая труба из углеродистой стали (без покрытия)",
        "es": "Tubo redondo de acero al carbono negro (acabado natural)"
    },
    "Black mill finish, Shot-blasted & Primed, Hot-Dip Galvanized": {
        "fr": "Finition brute de laminage, grenaillée & apprêtée, galvanisée à chaud",
        "ru": "Черновая прокатка, дробеструйная очистка с грунтовкой, горячее цинкование",
        "es": "Acabado de laminación negro, granallado e imprimado, galvanizado en caliente"
    },
    "Available in required lengths (normally 0.60 m to 2.50 m sizes)": {
        "fr": "Disponible dans les longueurs requises (généralement de 0,60 m à 2,50 m)",
        "ru": "Доступны требуемые длины (стандартно от 0,60 м до 2,50 м)",
        "es": "Disponible en las longitudes requeridas (normalmente de 0,60 m a 2,50 m)"
    },
    "Access Tower & Bay": {
        "fr": "Tour d'accès & travée",
        "ru": "Башня доступа и пролёт",
        "es": "Torre de acceso y tramo"
    },
    "Access & Shoring": {
        "fr": "Accès & Étaiement",
        "ru": "Доступ и крепление",
        "es": "Acceso y apuntalamiento"
    },
    "AVAILABLE DIAMETERS": {
        "fr": "DIAMÈTRES DISPONIBLES",
        "ru": "ДОСТУПНЫЕ ДИАМЕТРЫ",
        "es": "DIÁMETROS DISPONIBLES"
    },
    "ASTM, EN, BS & JIS certified": {
        "fr": "Certifié ASTM, EN, BS & JIS",
        "ru": "Сертифицировано по ASTM, EN, BS и JIS",
        "es": "Certificado ASTM, EN, BS y JIS"
    },
    "Contact Sales Desk": {
        "fr": "Contacter le service commercial",
        "ru": "Связаться с отделом продаж",
        "es": "Contactar al departamento comercial"
    },
    "Cup Lock Specifications": {
        "fr": "Spécifications du système Cuplock",
        "ru": "Характеристики системы Cuplock",
        "es": "Especificaciones del sistema Cuplock"
    },
    "Drawn Metallurgy": {
        "fr": "Métallurgie tréfilée",
        "ru": "Тянутый металлопрокат",
        "es": "Metalurgia trefilada"
    },
    "Explore Category Specs": {
        "fr": "Explorer les spécifications de catégorie",
        "ru": "Характеристики категории",
        "es": "Explorar especificaciones de categoría"
    },
    "Explore Product Catalog": {
        "fr": "Explorer le catalogue de produits",
        "ru": "Каталог продукции",
        "es": "Explorar catálogo de productos"
    },
    "Explore Products": {
        "fr": "Explorer les produits",
        "ru": "Ознакомиться с продукцией",
        "es": "Explorar productos"
    },
    "Explore Solution Specs": {
        "fr": "Spécifications de solutions",
        "ru": "Характеристики решений",
        "es": "Especificaciones de soluciones"
    },
    "Flat Metallurgy": {
        "fr": "Métallurgie des produits plats",
        "ru": "Листовой прокат",
        "es": "Metalurgia de productos planos"
    },
    "MILL-DIRECT QUALITY": {
        "fr": "QUALITÉ DIRECTE D'USINE",
        "ru": "ЗАВОДСКОЕ КАЧЕСТВО",
        "es": "CALIDAD DIRECTA DE FÁBRICA"
    },
    "Nominal Wall Thickness": {
        "fr": "Épaisseur nominale de paroi",
        "ru": "Номинальная толщина стенки",
        "es": "Espesor nominal de pared"
    },
    "PRODUCT HIERARCHY": {
        "fr": "HIÉRARCHIE DES PRODUITS",
        "ru": "КАТАЛОГ ПРОДУКЦИИ",
        "es": "JERARQUÍA DE PRODUCTOS"
    },
    "PRODUCT RANGE": {
        "fr": "GAMME DE PRODUITS",
        "ru": "АССОРТИМЕНТ ПРОДУКЦИИ",
        "es": "GAMA DE PRODUCTOS"
    },
    "Pipeline & Tubular Products": {
        "fr": "Tubes et conduites de canalisation",
        "ru": "Трубопроводный и трубный прокат",
        "es": "Tuberías y productos tubulares para oleoductos"
    },
    "Drop-Forged Couplers": {
        "fr": "Colliers matricés à chaud",
        "ru": "Кованые хомуты",
        "es": "Abrazaderas forjadas"
    },
    "Dynamic Applications": {
        "fr": "Applications dynamiques",
        "ru": "Динамические нагрузки",
        "es": "Aplicaciones dinámicas"
    },
    "Engineering Features": {
        "fr": "Caractéristiques d'ingénierie",
        "ru": "Инженерные особенности",
        "es": "Características de ingeniería"
    },
    "Minimum Yield Stress": {
        "fr": "Limite élastique minimale",
        "ru": "Минимальный предел текучести",
        "es": "Límite elástico mínimo"
    },
    "PRIMARY APPLICATIONS": {
        "fr": "APPLICATIONS PRINCIPALES",
        "ru": "ОСНОВНОЕ НАЗНАЧЕНИЕ",
        "es": "APLICACIONES PRINCIPALES"
    },
    "Project Applications": {
        "fr": "Applications projets",
        "ru": "Применение в проектах",
        "es": "Aplicaciones en proyectos"
    },
    "Thickness Capability": {
        "fr": "Capacité d'épaisseur",
        "ru": "Диапазон толщин",
        "es": "Capacidad de espesor"
    },
    "WHATSAPP DIRECT CHAT": {
        "fr": "CHAT DIRECT WHATSAPP",
        "ru": "ПРЯМОЙ ЧАТ В WHATSAPP",
        "es": "CHAT DIRECTO DE WHATSAPP"
    },
    "DIMENSIONAL TOLERANCE": {
        "fr": "TOLÉRANCE DIMENSIONNELLE",
        "ru": "РАЗМЕРНЫЙ ДОПУСК",
        "es": "TOLERANCIA DIMENSIONAL"
    },
    "PORT OF TIANJIN CNTSN": {
        "fr": "PORT DE TIANJIN CNTSN",
        "ru": "ПОРТ ТЯНЬЦЗИНЬ CNTSN",
        "es": "PUERTO DE TIANJIN CNTSN"
    },
    "Scope:": {
        "fr": "Champ d'application :",
        "ru": "Область применения:",
        "es": "Alcance:"
    },
    "Mediums:": {
        "fr": "Milieux :",
        "ru": "Среды:",
        "es": "Medios:"
    },
    "Consult": {
        "fr": "Consulter",
        "ru": "Консультация",
        "es": "Consultar"
    },
    "Category": {
        "fr": "Catégorie",
        "ru": "Категория",
        "es": "Categoría"
    },
    "FREIGHT": {
        "fr": "FRET",
        "ru": "ФРАХТ",
        "es": "FLETE"
    },
    "DESTINATIONS": {
        "fr": "DESTINATIONS",
        "ru": "НАПРАВЛЕНИЯ",
        "es": "DESTINOS"
    },
    "TERMINAL": {
        "fr": "TERMINAL",
        "ru": "ТЕРМИНАЛ",
        "es": "TERMINAL"
    },
    "FINISH": {
        "fr": "FINITION",
        "ru": "ОТДЕЛКА",
        "es": "ACABADO"
    },
    "Hot-dip galvanized (HDG) / Electro-galvanized": {
        "fr": "Galvanisé à chaud (HDG) / Électro-galvanisé",
        "ru": "Горячеоцинкованный (HDG) / Электрооцинкованный",
        "es": "Galvanizado en caliente (HDG) / Electrogalvanizado"
    },
    "Hot-Dip Galvanized / Painted / Self-Color": {
        "fr": "Galvanisé à chaud / Peint / Brut",
        "ru": "Горячеоцинкованный / Окрашенный / Без покрытия",
        "es": "Galvanizado en caliente / Pintado / Natural"
    },
    "Prime structural carbon steel": {
        "fr": "Acier de construction au carbone de premier choix",
        "ru": "Первоклассная конструкционная углеродистая сталь",
        "es": "Acero al carbono estructural de primera calidad"
    },
    "Standard export seaworthy packing (bundled / containerized)": {
        "fr": "Emballage maritime standard pour l'exportation (en fardeaux / conteneurs)",
        "ru": "Стандартная морская экспортная упаковка (в пачках / контейнерах)",
        "es": "Embalaje marítimo estándar de exportación (en atados / contenedorizado)"
    },
    "EN 10204 3.1 Mill Test Certificate issued for each heat / lot": {
        "fr": "Certificat d'essai d'usine EN 10204 3.1 délivré pour chaque coulée / lot",
        "ru": "Сертификат EN 10204 3.1 выдаётся на каждую плавку / партию",
        "es": "Certificado de prueba de fábrica EN 10204 3.1 emitido para cada colada / lote"
    },
    "Third-party inspection (SGS, BV, Intertek) welcome upon request": {
        "fr": "Inspection tierce partie (SGS, BV, Intertek) bienvenue sur demande",
        "ru": "Возможна независимая инспекция (SGS, BV, Intertek) по запросу",
        "es": "Inspección de terceros (SGS, BV, Intertek) disponible a solicitud"
    },
    "Minimum Order Quantity (MOQ): 1 × 20ft FCL or 10–25 MT per specification": {
        "fr": "Quantité minimale de commande (MOQ) : 1 × conteneur 20ft FCL ou 10–25 MT par spécification",
        "ru": "Минимальный объём заказа (MOQ): 1 × 20-футовый FCL или 10–25 т на спецификацию",
        "es": "Cantidad mínima de pedido (MOQ): 1 × 20ft FCL o 10–25 TM por especificación"
    },
    "Prompt delivery from port stock or 15–30 days mill production lead time": {
        "fr": "Livraison rapide depuis le stock portuaire ou délai de production d'usine de 15 à 30 jours",
        "ru": "Быстрая отгрузка со склада в порту или 15–30 дней срок производства",
        "es": "Despacho inmediato desde stock portuario o plazo de producción de 15 a 30 días"
    }
}

# Merge all into dictionary
def compile_dictionaries():
    merged_dict = {}
    merged_dict.update(BASE_TRANSLATIONS)
    merged_dict.update(ADDITIONAL_TRANSLATIONS)

    # For any item in strings_to_translate not in merged_dict:
    # If it is technical specifications or numbers, it falls back to the original string.
    en_dict = {}
    fr_dict = {}
    ru_dict = {}
    es_dict = {}

    for k, v in merged_dict.items():
        en_dict[k] = k
        fr_dict[k] = v.get("fr", k)
        ru_dict[k] = v.get("ru", k)
        es_dict[k] = v.get("es", k)

    for item in items:
        if item not in en_dict:
            en_dict[item] = item
            fr_dict[item] = item
            ru_dict[item] = item
            es_dict[item] = item

    print(f"Total compiled keys: {len(en_dict)}")

    def export_js(filename, var_name, data):
        os.makedirs(os.path.dirname(filename), exist_ok=True)
        content = f"// Auto-generated i18n translation resource for {var_name.upper()}\n"
        content += f"export const {var_name} = " + json.dumps(data, indent=2, ensure_ascii=False) + ";\n"
        with open(filename, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Wrote {filename}")

    export_js("src/js/i18n/translations/en.js", "en", en_dict)
    export_js("src/js/i18n/translations/fr.js", "fr", fr_dict)
    export_js("src/js/i18n/translations/ru.js", "ru", ru_dict)
    export_js("src/js/i18n/translations/es.js", "es", es_dict)

if __name__ == "__main__":
    compile_dictionaries()

