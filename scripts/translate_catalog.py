#!/usr/bin/env python3
"""
Comprehensive translation script for Tianjin Decent website:
Collects all strings from:
- Existing translation files
- All HTML templates and attribute labels/placeholders
- All 40 products in products.js (names, descriptions, specs, gallery titles & notes, features, applications, accessories, fittings, etc.)
- Dynamic UI strings in nav.js, product.html, products.html

Translates into FR, RU, ES using batched queries, preserving technical standards, dimensions, and brand names.
"""

import json
import os
import re
import sys
import time
import urllib.request
import urllib.parse
from html.parser import HTMLParser

# 1. Custom Technical Terminology & Preserved Overrides
EXACT_OVERRIDES = {
    # Brand
    "TIANJIN DECENT": {
        "fr": "TIANJIN DECENT",
        "ru": "TIANJIN DECENT",
        "es": "TIANJIN DECENT"
    },
    "TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.": {
        "fr": "TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.",
        "ru": "TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.",
        "es": "TIANJIN DECENT INTERNATIONAL TRADE CO., LTD."
    },
    "TIANJIN DECENT INTERNATIONAL TRADE CO., LTD. — Steel Coils, Structural Profiles & Scaffolding Systems": {
        "fr": "TIANJIN DECENT INTERNATIONAL TRADE CO., LTD. — Bobines d'acier, profilés structurels & systèmes d'échafaudage",
        "ru": "TIANJIN DECENT INTERNATIONAL TRADE CO., LTD. — Рулонная сталь, фасонный прокат и строительные леса",
        "es": "TIANJIN DECENT INTERNATIONAL TRADE CO., LTD. — Bobinas de acero, perfiles estructurales y sistemas de andamios"
    },
    # UI actions & dynamic fragments
    "Related in": {
        "fr": "Produits associés dans",
        "ru": "Связанная продукция в",
        "es": "Relacionados en"
    },
    "View All": {
        "fr": "Voir tout",
        "ru": "Посмотреть все",
        "es": "Ver todo"
    },
    "View Specifications": {
        "fr": "Voir les spécifications",
        "ru": "Посмотреть спецификации",
        "es": "Ver especificaciones"
    },
    "View specifications for": {
        "fr": "Voir les spécifications pour",
        "ru": "Посмотреть спецификации для",
        "es": "Ver especificaciones para"
    },
    "Components & Standard Hardware": {
        "fr": "Composants & quincaillerie standard",
        "ru": "Компоненты и стандартные комплектующие",
        "es": "Componentes y accesorios estándar"
    },
    "Available Standard Sizes:": {
        "fr": "Tailles standard disponibles :",
        "ru": "Доступные стандартные размеры:",
        "es": "Tamaños estándar disponibles:"
    },
    "Tube Diameter:": {
        "fr": "Diamètre du tube :",
        "ru": "Диаметр трубы:",
        "es": "Diámetro del tubo:"
    },
    "Tightening Torque:": {
        "fr": "Couple de serrage :",
        "ru": "Момент затяжки:",
        "es": "Par de apriete:"
    },
    "Slip Resistance:": {
        "fr": "Résistance au glissement :",
        "ru": "Сопротивление скольжению:",
        "es": "Resistencia al deslizamiento:"
    },
    "Failure Load:": {
        "fr": "Charge de rupture :",
        "ru": "Разрушающая нагрузка:",
        "es": "Carga de rotura:"
    },
    "Finish:": {
        "fr": "Finition :",
        "ru": "Покрытие:",
        "es": "Acabado:"
    },
    "Fasteners:": {
        "fr": "Fixations :",
        "ru": "Крепеж:",
        "es": "Fijaciones:"
    },
    "Note:": {
        "fr": "Remarque :",
        "ru": "Примечание:",
        "es": "Nota:"
    },
    "BS 1139 tubing is equivalent and is acceptable.": {
        "fr": "Les tubes conformes à la norme BS 1139 sont équivalents et acceptables.",
        "ru": "Трубы по стандарту BS 1139 эквивалентны и допустимы к применению.",
        "es": "Los tubos conforme a BS 1139 son equivalentes y aceptables."
    },
    "Displaying": {
        "fr": "Affichage de",
        "ru": "Отображение",
        "es": "Mostrando"
    },
    "technical product lines": {
        "fr": "lignes de produits techniques",
        "ru": "позиций технической продукции",
        "es": "líneas de productos técnicos"
    },
    "No products found in this category / subcategory.": {
        "fr": "Aucun produit trouvé dans cette catégorie / sous-catégorie.",
        "ru": "Товары не найдены в этой категории / подкатегории.",
        "es": "No se encontraron productos en esta categoría / subcategoría."
    },
    "Reset Filters": {
        "fr": "Réinitialiser les filtres",
        "ru": "Сбросить фильтры",
        "es": "Restablecer filtros"
    },
    "Explore Specs & MTC": {
        "fr": "Explorer les spécifications & MTC",
        "ru": "Спецификации и сертификаты MTC",
        "es": "Ver especificaciones y MTC"
    },
    "Quote": {
        "fr": "Devis",
        "ru": "Запрос цены",
        "es": "Cotizar"
    },
    "All": {
        "fr": "Tous les",
        "ru": "Все",
        "es": "Todos"
    },
    "Specification:": {
        "fr": "Spécification :",
        "ru": "Спецификация:",
        "es": "Especificación:"
    },
    "Standards:": {
        "fr": "Normes :",
        "ru": "Стандарты:",
        "es": "Normas:"
    },
    "Uses:": {
        "fr": "Applications :",
        "ru": "Применение:",
        "es": "Usos:"
    },
    "Technical Specifications": {
        "fr": "Spécifications techniques",
        "ru": "Технические спецификации",
        "es": "Especificaciones técnicas"
    },
    "Hello TIANJIN DECENT, I would like to request technical specifications and pricing for:": {
        "fr": "Bonjour TIANJIN DECENT, je souhaite demander les spécifications techniques et les prix pour :",
        "ru": "Здравствуйте, TIANJIN DECENT! Я хотел бы запросить технические характеристики и цены на:",
        "es": "Hola TIANJIN DECENT, desearía solicitar especificaciones técnicas y cotización para:"
    },
    # Scaffolding Core Systems
    "Cuplock": {
        "fr": "Cuplock",
        "ru": "Cuplock",
        "es": "Cuplock"
    },
    "Kwikstage": {
        "fr": "Kwikstage",
        "ru": "Kwikstage",
        "es": "Kwikstage"
    },
    "Ringlock System": {
        "fr": "Système Ringlock",
        "ru": "Система Ringlock",
        "es": "Sistema Ringlock"
    },
    "Ring Lock Scaffolding": {
        "fr": "Échafaudage modulaire Ring Lock",
        "ru": "Модульные строительные леса Ring Lock",
        "es": "Andamio modular Ring Lock"
    },
    "Cuplock Scaffolding System": {
        "fr": "Système d'échafaudage Cuplock",
        "ru": "Система строительных лесов Cuplock",
        "es": "Sistema de andamios Cuplock"
    },
    "Kwikstage Scaffolding System": {
        "fr": "Système d'échafaudage Kwikstage",
        "ru": "Система строительных лесов Kwikstage",
        "es": "Sistema de andamios Kwikstage"
    },
    "Cuplock Matrix": {
        "fr": "Structure modulaire Cuplock",
        "ru": "Модульная структура Cuplock",
        "es": "Matriz modular Cuplock"
    },
    "Cuplock Accessories & Standard Sizes": {
        "fr": "Accessoires Cuplock & Dimensions standard",
        "ru": "Комплектующие Cuplock и стандартные размеры",
        "es": "Accesorios Cuplock y dimensiones estándar"
    },
    "Infrastructure & External Facade Scaffold Matrix": {
        "fr": "Structure d'échafaudage pour infrastructures et façades extérieures",
        "ru": "Пространственная система лесов для инфраструктуры и фасадных работ",
        "es": "Estructura de andamios para infraestructura y fachadas exteriores"
    },
    "Drop-Forged Right-Angle & Swivel Couplers (EN 74-1 Class B Certified)": {
        "fr": "Coupleurs orthogonaux et orientables forgés (certifiés EN 74-1 classe B)",
        "ru": "Кованые глухие (прямоугольные) и поворотные хомуты (сертификат EN 74-1 класс B)",
        "es": "Abrazaderas ortogonales y giratorias forjadas (certificadas EN 74-1 clase B)"
    },
    "Drop-Forged Fittings & Couplers Catalog": {
        "fr": "Catalogue de coupleurs et raccords forgés",
        "ru": "Каталог кованых хомутов и комплектующих для лесов",
        "es": "Catálogo de acopladores y abrazaderas forjadas"
    },
    "BS 1139 tubing is equivalent and is acceptable.": {
        "fr": "Les tubes conformes à la norme BS 1139 sont équivalents et acceptables.",
        "ru": "Трубы по стандарту BS 1139 эквивалентны и допустимы к применению.",
        "es": "Los tubos conforme a BS 1139 son equivalentes y aceptables."
    },
    "EN 10204 3.1 Mill Test Certificate issued for each heat / lot": {
        "fr": "Certificat d'essai d'usine EN 10204 3.1 émis pour chaque coulée / lot",
        "ru": "Сертификат заводских испытаний EN 10204 3.1 выдаётся на каждую плавку / партию",
        "es": "Certificado de prueba de fábrica EN 10204 3.1 emitido para cada colada / lote"
    },
    "EN 10219, ASTM A500 Grade B, EN 39 Type 4, BS 1139 certified with full MTC 3.1": {
        "fr": "Certifié EN 10219, ASTM A500 Grade B, EN 39 Type 4, BS 1139 avec certificat MTC 3.1 complet",
        "ru": "Сертификация EN 10219, ASTM A500 класс B, EN 39 тип 4, BS 1139 с полным сертификатом MTC 3.1",
        "es": "Certificado EN 10219, ASTM A500 Grado B, EN 39 Tipo 4, BS 1139 con MTC 3.1 completo"
    },
    "DN15–DN300 black carbon steel round pipes (Self Color / bare mill finish) for low-pressure fluid transportation, gas, water, fire protection, and structural framing.": {
        "fr": "Tubes ronds en acier au carbone noir DN15–DN300 (finition brute de laminage) pour le transport de fluides basse pression, gaz, eau, protection incendie et charpentes.",
        "ru": "Круглые трубы из чёрной углеродистой стали DN15–DN300 (без покрытия / черновая отделка) для транспортировки жидкостей низкого давления, газа, воды, пожаротушения и металлоконструкций.",
        "es": "Tuberías redondas de acero al carbono negro DN15–DN300 (acabado natural de laminación) para transporte de fluidos a baja presión, gas, agua, redes contra incendios y estructuras."
    },
    "DN15–DN2000 internal and external plastic-coated (Epoxy / PE) composite steel pipes for fire protection water, municipal supply, and chemical fluids.": {
        "fr": "Tubes composites acier plastifié intérieur et extérieur (Époxy / PE) DN15–DN2000 pour réseaux d'eau d'incendie, distribution municipale et fluides chimiques.",
        "ru": "Стальные композитные трубы с внутренним и наружным пластиковым покрытием (эпоксид / ПЭ) DN15–DN2000 для систем пожаротушения, водоснабжения и химических сред.",
        "es": "Tuberías compuestas de acero con revestimiento plástico interno y externo (Epoxi / PE) DN15–DN2000 para redes contra incendios, suministro municipal y fluidos químicos."
    },
    "DN15–DN300 high-frequency longitudinal ERW welded steel pipe for water, gas, oil transmission, structural columns, and drilling tubes.": {
        "fr": "Tubes en acier soudés longitudinalement haute fréquence ERW DN15–DN300 pour le transport d'eau, de gaz, de pétrole, poteaux structurels et tubes de forage.",
        "ru": "Прямошовные стальные трубы ВЧС (ERW) DN15–DN300 для транспортировки воды, газа, нефти, опорных колонн и бурильных труб.",
        "es": "Tuberías de acero con soldadura longitudinal por alta frecuencia ERW DN15–DN300 para conducción de agua, gas, petróleo, columnas estructurales y perforación."
    },
    "DN15–DN300 hot-dip galvanized round steel pipes for low-pressure fluid transportation, gas, water, fire protection, and structural framing.": {
        "fr": "Tubes ronds en acier galvanisé à chaud DN15–DN300 pour transport de fluides basse pression, gaz, eau, réseaux incendie et structures.",
        "ru": "Круглые стальные горячеоцинкованные трубы DN15–DN300 для транспортировки жидкостей низкого давления, газа, воды, систем пожаротушения и строительных каркасов.",
        "es": "Tuberías redondas de acero galvanizado por inmersión en caliente DN15–DN300 para transporte de fluidos a baja presión, gas, agua, sistemas contra incendios y estructuras."
    },
    "DN22–DN325 heavy hot-dip galvanized seamless carbon steel pipe inventory stacked for petrochemical, structural, and infrastructure projects.": {
        "fr": "Stock de tubes sans soudure en acier au carbone galvanisés à chaud DN22–DN325 pour projets pétrochimiques, structurels et d'infrastructure.",
        "ru": "Складской запас толстостенных горячеоцинкованных бесшовных труб из углеродистой стали DN22–DN325 для нефтехимических, конструкционных и инфраструктурных объектов.",
        "es": "Inventario de tuberías de acero al carbono sin costura galvanizadas en caliente DN22–DN325 para proyectos petroquímicos, estructurales y de infraestructura."
    },
    "DN22–DN325 hot-dip galvanized seamless carbon steel pipe for petrochemical pipelines, high-voltage power stations, bridges, and building structures.": {
        "fr": "Tubes sans soudure en acier au carbone galvanisés à chaud DN22–DN325 pour canalisations pétrochimiques, centrales haute tension, ponts et bâtiments.",
        "ru": "Горячеоцинкованные бесшовные трубы из углеродистой стали DN22–DN325 для нефтехимических трубопроводов, высоковольтных подстанций, мостов и строительных конструкций.",
        "es": "Tuberías de acero al carbono sin costura galvanizadas en caliente DN22–DN325 para ductos petroquímicos, subestaciones eléctricas, puentes y estructuras."
    },
    "IPE / UPN structural channel sections": {
        "fr": "Profilés et poutrelles structurelles IPE / UPN",
        "ru": "Фасонные балочные профили и швеллеры IPE / UPN",
        "es": "Vigas y canales estructurales IPE / UPN"
    },
    "UPN, UPE, PFC, and American Standard Channels": {
        "fr": "Profilés UPN, UPE, PFC et profilés en U aux normes américaines",
        "ru": "Швеллеры UPN, UPE, PFC и швеллеры по американским стандартам",
        "es": "Canales UPN, UPE, PFC y canales estándar americanos"
    },
    "Universal Beams (UB/UC), IPE, IPN, HEA, HEB, HEM": {
        "fr": "Poutrelles universelles (UB/UC), IPE, IPN, HEA, HEB, HEM",
        "ru": "Балки широкополочные (UB/UC), IPE, IPN, HEA, HEB, HEM",
        "es": "Vigas universales (UB/UC), IPE, IPN, HEA, HEB, HEM"
    },
    "S235JR, S275JR, S355JR, S355J2 conforming to EN 10025-2": {
        "fr": "S235JR, S275JR, S355JR, S355J2 conformes à la norme EN 10025-2",
        "ru": "S235JR, S275JR, S355JR, S355J2 по стандарту EN 10025-2",
        "es": "S235JR, S275JR, S355JR, S355J2 conformes con EN 10025-2"
    },
    "IPE 80, IPE 100, IPE 120, IPE 140, IPE 160 up to IPE 600": {
        "fr": "IPE 80, IPE 100, IPE 120, IPE 140, IPE 160 jusqu'à IPE 600",
        "ru": "IPE 80, IPE 100, IPE 120, IPE 140, IPE 160 до IPE 600",
        "es": "IPE 80, IPE 100, IPE 120, IPE 140, IPE 160 hasta IPE 600"
    },
    "UPN 50, UPN 65, UPN 80, UPN 100, UPN 120 up to UPN 400": {
        "fr": "UPN 50, UPN 65, UPN 80, UPN 100, UPN 120 jusqu'à UPN 400",
        "ru": "UPN 50, UPN 65, UPN 80, UPN 100, UPN 120 до UPN 400",
        "es": "UPN 50, UPN 65, UPN 80, UPN 100, UPN 120 hasta UPN 400"
    },
    "WhatsApp Direct": {
        "fr": "WhatsApp direct",
        "ru": "Прямой чат в WhatsApp",
        "es": "WhatsApp directo"
    },
    "Ringlock, Cuplock, Kwikstage, Props, Planks, Couplers": {
        "fr": "Ringlock, Cuplock, Kwikstage, étais, planchers, coupleurs",
        "ru": "Ringlock, Cuplock, Kwikstage, стойки, настилы, хомуты",
        "es": "Ringlock, Cuplock, Kwikstage, puntales, plataformas, acopladores"
    },
    "Application / Notes": {
        "fr": "Applications / Remarques",
        "ru": "Применение / Примечания",
        "es": "Aplicaciones / Notas"
    },
    "AUDIT 01": {
        "fr": "AUDIT 01",
        "ru": "АУДИТ 01",
        "es": "AUDITORÍA 01"
    },
    "AUDIT 02": {
        "fr": "AUDIT 02",
        "ru": "АУДИТ 02",
        "es": "AUDITORÍA 02"
    },
    "AUDIT 03": {
        "fr": "AUDIT 03",
        "ru": "АУДИТ 03",
        "es": "AUDITORÍA 03"
    },
    "Infrastructure": {
        "fr": "Infrastructure",
        "ru": "Инфраструктура",
        "es": "Infraestructura"
    },
    "SGS / BV VERIFIED": {
        "fr": "VÉRIFIÉ SGS / BV",
        "ru": "ПРОВЕРЕНО SGS / BV",
        "es": "VERIFICADO SGS / BV"
    },
    "SGS & BV WITNESS": {
        "fr": "TÉMOIN SGS & BV",
        "ru": "ИНСПЕКЦИЯ SGS & BV",
        "es": "TESTIGO SGS & BV"
    },
    # Contact Form & Terminal
    "Full Name *": {
        "fr": "Nom complet *",
        "ru": "ФИО / Полное имя *",
        "es": "Nombre completo *"
    },
    "Company Name *": {
        "fr": "Nom de l'entreprise *",
        "ru": "Название компании *",
        "es": "Nombre de la empresa *"
    },
    "Company / Organization *": {
        "fr": "Entreprise / Organisation *",
        "ru": "Компания / Организация *",
        "es": "Empresa / Organización *"
    },
    "Business Email *": {
        "fr": "E-mail professionnel *",
        "ru": "Рабочий e-mail *",
        "es": "Correo electrónico corporativo *"
    },
    "Destination Country / Port *": {
        "fr": "Pays / Port de destination *",
        "ru": "Страна назначения / Порт *",
        "es": "País / Puerto de destino *"
    },
    "Destination Country & Port *": {
        "fr": "Pays et port de destination *",
        "ru": "Страна и порт назначения *",
        "es": "País y puerto de destino *"
    },
    "Target Product Family *": {
        "fr": "Famille de produits ciblée *",
        "ru": "Категория продукции *",
        "es": "Familia de productos de interés *"
    },
    "Select product...": {
        "fr": "Sélectionnez un produit...",
        "ru": "Выберите продукцию...",
        "es": "Seleccionar producto..."
    },
    "Selected Product *": {
        "fr": "Produit sélectionné *",
        "ru": "Выбранная продукция *",
        "es": "Producto seleccionado *"
    },
    "Estimated Volume *": {
        "fr": "Volume estimé *",
        "ru": "Ориентировочный объём *",
        "es": "Volumen estimado *"
    },
    "Technical Notes / Dimensional Specifications": {
        "fr": "Notes techniques / Spécifications dimensionnelles",
        "ru": "Технические примечания / Требования к размерам",
        "es": "Notas técnicas / Especificaciones dimensionales"
    },
    "Specify grade requirements, thickness, width, galvanization coating, couplers count...": {
        "fr": "Précisez la nuance d'acier, épaisseur, largeur, galvanisation, quantité de raccords...",
        "ru": "Укажите требования к марке стали, толщине, ширине, цинковому покрытию, числу хомутов...",
        "es": "Especifique grado de acero, espesor, ancho, revestimiento galvanizado, cantidad..."
    },
    "Submit B2B Quotation Request →": {
        "fr": "Soumettre la demande de devis B2B →",
        "ru": "Отправить запрос на расчёт B2B →",
        "es": "Enviar solicitud de cotización B2B →"
    },
    "Submit Inquiry Sheet →": {
        "fr": "Envoyer la fiche de demande →",
        "ru": "Отправить форму заявки →",
        "es": "Enviar formulario de consulta →"
    },
    "WHATSAPP DIRECT CHAT": {
        "fr": "CHAT WHATSAPP DIRECT",
        "ru": "ПРЯМОЙ ЧАТ В WHATSAPP",
        "es": "CHAT DIRECTO POR WHATSAPP"
    },
    "DIRECT EMAIL": {
        "fr": "E-MAIL DIRECT",
        "ru": "ПРЯМОЙ E-MAIL",
        "es": "CORREO ELECTRÓNICO DIRECTO"
    },
    "STRATEGIC DISPATCH TERMINAL": {
        "fr": "TERMINAL D'EXPÉDITION STRATÉGIQUE",
        "ru": "СТРАТЕГИЧЕСКИЙ ТЕРМИНАЛ ОТГРУЗКИ",
        "es": "TERMINAL ESTRATÉGICA DE EMBARQUE"
    },
    "Xingang Terminal, Port of Tianjin (CNTSN)": {
        "fr": "Terminal de Xingang, Port de Tianjin (CNTSN)",
        "ru": "Терминал Синьган, порт Тяньцзинь (CNTSN)",
        "es": "Terminal Xingang, Puerto de Tianjin (CNTSN)"
    },
    "Xingang Terminal, Port of Tianjin (Port Code: CNTSN)": {
        "fr": "Terminal de Xingang, Port de Tianjin (Code portuaire : CNTSN)",
        "ru": "Терминал Синьган, порт Тяньцзинь (код порта: CNTSN)",
        "es": "Terminal Xingang, Puerto de Tianjin (Código: CNTSN)"
    },
    "Direct container stuffing and breakbulk vessel loading": {
        "fr": "Empotage direct des conteneurs et chargement de navires conventionnels",
        "ru": "Прямая затарка контейнеров и погрузка на балкерные суда",
        "es": "Consolidación directa de contenedores y carga en buques graneleros"
    },
    "Tianjin, People's Republic of China": {
        "fr": "Tianjin, République populaire de Chine",
        "ru": "Тяньцзинь, Китайская Народная Республика",
        "es": "Tianjin, República Popular China"
    },
    "✓ Inquiry submitted successfully. Our commercial sales engineer will reply within 24 hours with certified technical specifications and pricing.": {
        "fr": "✓ Demande envoyée avec succès. Notre ingénieur commercial répondra sous 24h avec spécifications techniques et tarification certifiée.",
        "ru": "✓ Запрос успешно отправлен. Наш инженер коммерческого отдела свяжется с вами в течение 24 часов с расчётом стоимости и спецификацией.",
        "es": "✓ Consulta enviada exitosamente. Nuestro ingeniero de ventas responderá en 24 horas con especificaciones y cotización certificada."
    },
    "✓ Your inquiry has been dispatched to TIANJIN DECENT export sales desk. A technical quotation will be delivered to your email shortly.": {
        "fr": "✓ Votre demande a été transmise au service export de TIANJIN DECENT. Un devis technique sera envoyé sur votre e-mail rapidement.",
        "ru": "✓ Ваша заявка передана в экспортный отдел TIANJIN DECENT. Технико-коммерческое предложение поступит на ваш e-mail в ближайшее время.",
        "es": "✓ Su consulta ha sido enviada a la mesa de exportaciones de TIANJIN DECENT. Una cotización técnica llegará a su correo a la brevedad."
    }
}

# 2. Extract HTML strings
class HTMLTextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.strings = set()
        self.in_skip = False

    def handle_starttag(self, tag, attrs):
        if tag in ['script', 'style', 'code', 'noscript']:
            self.in_skip = True
        attr_dict = dict(attrs)
        for a in ['placeholder', 'label', 'title', 'alt']:
            if a in attr_dict and attr_dict[a].strip():
                self.strings.add(attr_dict[a].strip())

    def handle_endtag(self, tag):
        if tag in ['script', 'style', 'code', 'noscript']:
            self.in_skip = False

    def handle_data(self, data):
        if not self.in_skip:
            s = data.strip()
            if s and len(s) > 1 and not re.match(r'^\d+$', s):
                self.strings.add(s)

def extract_all_strings():
    import subprocess
    all_keys = set()

    # A. HTML files
    for f in os.listdir('.'):
        if f.endswith('.html'):
            with open(f, 'r', encoding='utf-8') as hf:
                content = hf.read()
            parser = HTMLTextExtractor()
            parser.feed(content)
            for s in parser.strings:
                all_keys.add(s)
                # also add single whitespace normalized
                norm = re.sub(r'\s+', ' ', s).strip()
                if norm:
                    all_keys.add(norm)

    # B. products.js
    node_script = '''
import("./src/js/data/products.js").then(mod => {
  const strings = new Set();
  const add = (s) => {
    if (typeof s === "string") {
      const trimmed = s.trim();
      if (trimmed && trimmed.length > 1) {
        strings.add(trimmed);
        strings.add(trimmed.replace(/\\s+/g, ' '));
      }
    }
  };

  mod.PRODUCT_HIERARCHY_LIST.forEach(h => {
    add(h.name);
    h.subcategories.forEach(s => add(s));
  });

  mod.PRODUCTS.forEach(p => {
    add(p.name);
    add(p.categoryName);
    add(p.subcategory);
    add(p.shortDescription);
    add(p.description);
    add(p.specification);
    add(p.uses);
    (p.specifications || []).forEach(s => {
      add(s.label);
      add(s.value);
    });
    (p.features || []).forEach(f => add(f));
    (p.applications || []).forEach(a => add(a));
    (p.standards || []).forEach(std => add(std.description));
    (p.gallery || []).forEach(g => {
      if (typeof g === "object") {
        add(g.title);
        add(g.note);
      }
    });
    (p.accessories || []).forEach(acc => {
      add(acc.name);
      add(acc.description);
    });
    if (p.accessoriesSubtitle) add(p.accessoriesSubtitle);
    (p.wallThicknessSpecs || []).forEach(w => {
      add(w.standard);
      add(w.description);
    });
    const sizes = p.standardSizesTables || (p.standardSizesTable ? [p.standardSizesTable] : []);
    sizes.forEach(tbl => {
      add(tbl.title);
      add(tbl.subtitle);
      (tbl.columns || []).forEach(c => add(c));
      (tbl.rows || []).forEach(row => {
        row.forEach(cell => {
          if (typeof cell === 'string') add(cell);
        });
      });
    });
  });

  (mod.SCAFFOLDING_FITTINGS_CATALOG || []).forEach(f => {
    add(f.name);
    add(f.description);
    add(f.finish);
    add(f.fastener);
  });

  console.log(JSON.stringify(Array.from(strings)));
});
'''
    out = subprocess.check_output(['node', '-e', node_script]).decode('utf-8')
    prod_strings = json.loads(out)
    for s in prod_strings:
        all_keys.add(s)

    # C. Existing translations in en.js
    def load_js(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        match = re.search(r'export const \w+ = ({.*?});\s*$', content, re.DOTALL)
        if match:
            return json.loads(match.group(1))
        return {}

    en_dict = load_js('src/js/i18n/translations/en.js')
    for k in en_dict.keys():
        all_keys.add(k)

    # D. Overrides
    for k in EXACT_OVERRIDES.keys():
        all_keys.add(k)

    return all_keys

def is_untranslatable_technical(text):
    t = text.strip()
    if not t:
        return True
    # Numbers, punctuation, and standard measurements only
    if re.match(r'^[\d\s\.\,\-\–\—\/\:\;\(\)\%\+\*xXøφ\<\>\=\~]+$', t):
        return True
    # If it contains common English words, it's natural language, NOT a pure technical code!
    words = re.findall(r'[a-zA-Z]{2,}', t)
    common_english = {'is', 'in', 'to', 'of', 'or', 'for', 'and', 'the', 'with', 'from', 'each', 'type', 'grade', 'pipes', 'pipe', 'tubing', 'tube', 'steel', 'carbon', 'black', 'round', 'welded', 'composite', 'external', 'internal', 'issued', 'lot', 'heat', 'conforming', 'certified', 'full', 'standard', 'channels', 'heavy', 'stacked', 'inventory', 'fluid', 'fluids', 'water', 'fire', 'protection', 'supply', 'municipal', 'columns', 'transmission', 'structural', 'petrochemical', 'stations', 'power', 'bridges', 'building', 'structures', 'infrastructure', 'projects', 'drilling', 'low', 'pressure', 'transportation', 'gas', 'framing', 'bare', 'mill', 'finish', 'acceptable', 'equivalent'}
    if any(w.lower() in common_english for w in words):
        return False
    # Pure technical standard codes or steel grades
    if re.match(r'^(ASTM|EN|BS|GB|JIS|ISO|DIN|API|Q\d+|S\d+|SS\d+|SCH\d+|DN\d+|HE[ABM]|IPE|IPN|UPN|UPE|PFC|UB|UC|Z\d+|SAE\d+)[A-Za-z0-9\/\-\s\.\–\,\(\)]*$', t):
        return True
    # Dimensions like 48.3 mm x 3.2 mm or 60 kN / Leg or 1.2-25 mm
    if re.match(r'^\d+(\.\d+)?\s*(mm|m|MT|kN|kg|g\/m²|tons?|bar|MPa|Psi|inch|\"|\')(\s*[\/\-\–xX]\s*\d+(\.\d+)?\s*(mm|m|MT|kN|kg|g\/m²|tons?|bar|MPa|Psi|inch|\"|\')?)*$', t, re.I):
        return True
    return False

def translate_batch_gtx(batch, target_lang):
    """
    Translates a list of strings joined by ' ~~~ ' using Google GTX endpoint.
    Returns a dict {original: translated}
    """
    if not batch:
        return {}

    # Replace newlines inside strings with placeholder token __NL__
    prepared = [s.replace('\n', ' __NL__ ') for s in batch]
    combined = ' ~~~ '.join(prepared)
    
    url = f'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl={target_lang}&dt=t&q=' + urllib.parse.quote(combined)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            full_translated = ''.join(part[0] for part in data[0] if part[0])
            parts = [p.strip() for p in full_translated.split('~~~')]
            
            if len(parts) == len(batch):
                results = {}
                for orig, trans in zip(batch, parts):
                    # Restore newlines
                    res_clean = trans.replace('__NL__', '\n').replace('__nl__', '\n').strip()
                    results[orig] = res_clean
                return results
    except Exception as e:
        print(f"Batch translation error for {target_lang}: {e}")

    # Fallback: translate individually
    results = {}
    for item in batch:
        results[item] = translate_single_gtx(item, target_lang)
    return results

def translate_single_gtx(text, target_lang):
    if is_untranslatable_technical(text):
        return text
    try:
        prepared = text.replace('\n', ' __NL__ ')
        url = f'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl={target_lang}&dt=t&q=' + urllib.parse.quote(prepared)
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=8) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            trans = ''.join(part[0] for part in data[0] if part[0])
            return trans.replace('__NL__', '\n').replace('__nl__', '\n').strip()
    except Exception as e:
        return text

def post_process_translation(orig, trans, lang):
    """
    Ensure brand name, scaffolding terms, and technical keywords are accurate.
    """
    if orig in EXACT_OVERRIDES and lang in EXACT_OVERRIDES[orig]:
        return EXACT_OVERRIDES[orig][lang]

    res = trans

    # Maintain TIANJIN DECENT
    res = re.sub(r'TIANJIN\s+DECENT(?:\s+INTERNATIONAL)?', 'TIANJIN DECENT', res, flags=re.I)

    # Scaffolding names
    if 'cuplock' in orig.lower():
        res = re.sub(r'чаш(ек|ками|ки|ка|очного)', 'Cuplock', res, flags=re.I)
        res = re.sub(r'coupe\s*lock', 'Cuplock', res, flags=re.I)
        res = re.sub(r'bloqueo\s*de\s*copa', 'Cuplock', res, flags=re.I)
    if 'kwikstage' in orig.lower():
        res = re.sub(r'быстрого\s*этапа', 'Kwikstage', res, flags=re.I)
        res = re.sub(r'étape\s*rapide', 'Kwikstage', res, flags=re.I)
        res = re.sub(r'etapa\s*rápida', 'Kwikstage', res, flags=re.I)
    if 'ringlock' in orig.lower() or 'ring lock' in orig.lower():
        res = re.sub(r'кольцев(ые|ых|ой)\s*зам(ок|ка|ком)', 'Ringlock', res, flags=re.I)
        res = re.sub(r'bloqueo\s*de\s*anillo', 'Ringlock', res, flags=re.I)
        res = re.sub(r'verrouillage\s*d\'anneau', 'Ringlock', res, flags=re.I)

    return res

def main():
    print("Collecting all unique strings across site...")
    all_keys = extract_all_strings()
    print(f"Total unique strings extracted: {len(all_keys)}")

    def load_js(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        match = re.search(r'export const \w+ = ({.*?});\s*$', content, re.DOTALL)
        if match:
            return json.loads(match.group(1))
        return {}

    existing_fr = load_js('src/js/i18n/translations/fr.js')
    existing_ru = load_js('src/js/i18n/translations/ru.js')
    existing_es = load_js('src/js/i18n/translations/es.js')

    # Load cache if available
    cache_file = 'scripts/.translation_cache.json'
    cache = {"fr": {}, "ru": {}, "es": {}}
    if os.path.exists(cache_file):
        try:
            with open(cache_file, 'r', encoding='utf-8') as f:
                cache = json.load(f)
            print(f"Loaded existing translation cache.")
        except Exception:
            pass

    # Populate cache from existing good translations
    for k, v in existing_fr.items():
        if v and v != k: cache["fr"][k] = v
    for k, v in existing_ru.items():
        if v and v != k: cache["ru"][k] = v
    for k, v in existing_es.items():
        if v and v != k: cache["es"][k] = v

    # Apply exact overrides
    for k, v in EXACT_OVERRIDES.items():
        for lang in ['fr', 'ru', 'es']:
            if lang in v:
                cache[lang][k] = v[lang]

    # Process translations for each language
    for lang in ['fr', 'ru', 'es']:
        missing = []
        for k in all_keys:
            if k in EXACT_OVERRIDES and lang in EXACT_OVERRIDES[k]:
                cache[lang][k] = EXACT_OVERRIDES[k][lang]
                continue
            if is_untranslatable_technical(k):
                cache[lang][k] = k
                continue
            if k not in cache[lang] or cache[lang][k] == k:
                missing.append(k)

        print(f"\nLanguage [{lang.upper()}]: {len(missing)} strings need translation.")

        # Batch translate missing strings in chunks of 15
        chunk_size = 15
        for i in range(0, len(missing), chunk_size):
            chunk = missing[i:i + chunk_size]
            batch_res = translate_batch_gtx(chunk, lang)
            for orig, trans in batch_res.items():
                final_trans = post_process_translation(orig, trans, lang)
                cache[lang][orig] = final_trans
            
            # Progress print
            done_count = min(i + chunk_size, len(missing))
            print(f"  [{lang.upper()}] {done_count}/{len(missing)} translated", end='\r')
            time.sleep(0.15)
        print(f"  [{lang.upper()}] Done! Total keys in dictionary: {len(cache[lang])}")

    # Save cache
    with open(cache_file, 'w', encoding='utf-8') as f:
        json.dump(cache, f, indent=2, ensure_ascii=False)

    # Build final dictionaries
    en_dict = {}
    fr_dict = {}
    ru_dict = {}
    es_dict = {}

    for k in sorted(all_keys):
        en_dict[k] = k
        fr_dict[k] = cache['fr'].get(k, k)
        ru_dict[k] = cache['ru'].get(k, k)
        es_dict[k] = cache['es'].get(k, k)

    def write_dict(filename, var_name, data):
        content = f"// Auto-generated i18n translation resource for {var_name.upper()}\n"
        content += f"export const {var_name} = " + json.dumps(data, indent=2, ensure_ascii=False) + ";\n"
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Wrote {len(data)} entries to {filename}")

    write_dict('src/js/i18n/translations/en.js', 'en', en_dict)
    write_dict('src/js/i18n/translations/fr.js', 'fr', fr_dict)
    write_dict('src/js/i18n/translations/ru.js', 'ru', ru_dict)
    write_dict('src/js/i18n/translations/es.js', 'es', es_dict)

    print("\nTranslation generation complete.")

if __name__ == '__main__':
    main()
