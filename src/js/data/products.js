/**
 * TIANJIN DECENT — PRODUCT DATA MODEL
 * Central product database. Add a new product by adding an object here.
 * Supports 50+ products. All UI is driven from this file.
 */

export const PRODUCT_CATEGORIES = {
  SCAFFOLDING_SYSTEMS: 'scaffolding-systems',
  TUBES_FITTINGS: 'tubes-fittings',
  PLATFORMS: 'platforms',
  MOBILE_TOWERS: 'mobile-towers',
  LADDERS: 'ladders',
  SAFETY_ACCESSORIES: 'safety-accessories',
};

export const CATEGORY_META = {
  [PRODUCT_CATEGORIES.SCAFFOLDING_SYSTEMS]: {
    label: 'Scaffolding Systems',
    shortLabel: 'Systems',
    description: 'Complete scaffolding system solutions for access and support applications.',
    image: '/src/assets/images/ringlock-scaffolding.jpg',
  },
  [PRODUCT_CATEGORIES.TUBES_FITTINGS]: {
    label: 'Tubes & Fittings',
    shortLabel: 'Components',
    description: 'Precision-engineered scaffold tubes, couplers, and connection fittings.',
    image: '/src/assets/images/scaffold-tubes-fittings.jpg',
  },
  [PRODUCT_CATEGORIES.PLATFORMS]: {
    label: 'Platforms & Boards',
    shortLabel: 'Platforms',
    description: 'Aluminum and steel working platforms engineered for safe, reliable load distribution.',
    image: '/src/assets/images/platform-board.jpg',
  },
  [PRODUCT_CATEGORIES.MOBILE_TOWERS]: {
    label: 'Mobile Aluminum Towers',
    shortLabel: 'Towers',
    description: 'Lightweight aluminum mobile access towers for flexible work-at-height applications.',
    image: '/src/assets/images/aluminum-tower.jpg',
  },
  [PRODUCT_CATEGORIES.LADDERS]: {
    label: 'Ladders',
    shortLabel: 'Ladders',
    description: 'Industrial-grade aluminum and fiberglass ladders for professional applications.',
    image: '/src/assets/images/warehouse.jpg',
  },
  [PRODUCT_CATEGORIES.SAFETY_ACCESSORIES]: {
    label: 'Safety & Accessories',
    shortLabel: 'Safety',
    description: 'Scaffold accessories and safety components for complete, compliant systems.',
    image: '/src/assets/images/cuplock-system.jpg',
  },
};

/** @type {Product[]} */
export const PRODUCTS = [

  // ── SCAFFOLDING SYSTEMS ──────────────────────────────────

  {
    slug: 'cuplock-scaffolding-system',
    category: PRODUCT_CATEGORIES.SCAFFOLDING_SYSTEMS,
    name: 'Cuplock Scaffolding System',
    shortDescription: 'Multi-purpose scaffolding system with a single-node locking mechanism for fast, efficient assembly.',
    description: `The Cuplock scaffolding system is a high-performance, multi-purpose solution widely used in both access and support applications. Its defining feature is the single-node connection — the cup-and-blade mechanism allows up to four ledgers to connect to a single node in one operation, significantly reducing assembly time compared to tube-and-fitting systems.

Suitable for straight runs, curved layouts, and complex geometries, the Cuplock system is adaptable to demanding construction and industrial environments. The system's geometry provides inherent lateral stability, and all components are hot-dip galvanized for long service life.`,
    heroImage: '/src/assets/images/cuplock-system.jpg',
    gallery: ['/src/assets/images/cuplock-system.jpg', '/src/assets/images/hero-scaffolding.jpg'],
    specifications: [
      { label: 'Standard Material', value: 'Grade S235 / S355 Steel' },
      { label: 'Standard Diameter', value: '48.3 mm' },
      { label: 'Wall Thickness', value: '4.0 mm' },
      { label: 'Node Spacing', value: '500 mm (standard)' },
      { label: 'Surface Treatment', value: 'Hot-Dip Galvanized' },
      { label: 'Ledger Connections', value: 'Up to 4 per node' },
    ],
    features: [
      'Single-node connection — four ledgers per node in one operation',
      'Faster assembly versus tube-and-fitting systems',
      'Suited for access scaffolding, falsework, and shoring',
      'Inherent lateral stability from geometric design',
      'Full hot-dip galvanized finish for corrosion resistance',
      'Modular — compatible with a wide range of accessories',
    ],
    applications: [
      'Building access scaffolding',
      'Falsework and shoring support',
      'Industrial plant maintenance',
      'Bridge and infrastructure access',
      'Event and temporary structures',
    ],
    standards: [
      { name: 'EN 12810', description: 'Facade scaffolding made of prefabricated components' },
      { name: 'EN 12811', description: 'Temporary works equipment — scaffolds' },
    ],
    relatedProducts: ['tube-fittings-scaffolding', 'ringlock-system', 'base-jack'],
  },

  {
    slug: 'ringlock-system',
    category: PRODUCT_CATEGORIES.SCAFFOLDING_SYSTEMS,
    name: 'Ring-Lock Scaffolding System',
    shortDescription: 'Versatile modular scaffolding with rosette-node connections for complex geometries and multi-directional access.',
    description: `The Ring-Lock system (also known as Rosette Scaffolding) uses a perforated rosette welded to the standard at regular intervals. Ledgers and diagonal braces can connect at any of up to eight connection points around the rosette, giving designers exceptional flexibility for curved facades, complex geometries, and multi-level access systems.

The wedge-lock mechanism requires no bolts or nuts, reducing loose components on site. All components are hot-dip galvanized.`,
    heroImage: '/src/assets/images/ringlock-scaffolding.jpg',
    gallery: ['/src/assets/images/ringlock-scaffolding.jpg'],
    specifications: [
      { label: 'Standard Material', value: 'S355 Structural Steel' },
      { label: 'Standard Diameter', value: '48.3 mm' },
      { label: 'Rosette Connections', value: 'Up to 8 directions' },
      { label: 'Node Spacing', value: '500 mm standard' },
      { label: 'Surface Treatment', value: 'Hot-Dip Galvanized' },
      { label: 'Wedge Material', value: 'Drop-forged steel' },
    ],
    features: [
      'Rosette node allows up to 8-direction connections',
      'Wedge-lock — no loose bolts or nuts required',
      'Suitable for curved, circular, and irregular structures',
      'High load-bearing capacity',
      'Compatible with cuplock accessories',
      'Hot-dip galvanized throughout',
    ],
    applications: [
      'Complex curved facade scaffolding',
      'Stadium and arena access structures',
      'Petrochemical plant scaffolding',
      'Power station maintenance',
      'Bridge construction support',
    ],
    standards: [
      { name: 'EN 12811', description: 'Temporary works equipment — scaffolds' },
    ],
    relatedProducts: ['cuplock-scaffolding-system', 'tube-fittings-scaffolding', 'scaffold-boards'],
  },

  {
    slug: 'tube-fittings-scaffolding',
    category: PRODUCT_CATEGORIES.SCAFFOLDING_SYSTEMS,
    name: 'Tube & Fitting Scaffolding',
    shortDescription: 'The most versatile scaffolding method — individual tubes connected by pressed-steel couplers for unlimited layout flexibility.',
    description: `Tube and fitting scaffolding is the original and most flexible scaffolding system. Using standard 48.3 mm diameter tubes joined by a range of pressed-steel couplers — right-angle, swivel, sleeve, and putlog — structures of virtually any configuration can be assembled.

While assembly is slower than system scaffolding, tube-and-fitting provides unmatched adaptability, particularly on complex, irregular structures or when working around existing installations.`,
    heroImage: '/src/assets/images/scaffold-tubes-fittings.jpg',
    gallery: ['/src/assets/images/scaffold-tubes-fittings.jpg'],
    specifications: [
      { label: 'Tube OD', value: '48.3 mm' },
      { label: 'Wall Thickness', value: '4.0 mm' },
      { label: 'Tube Grade', value: 'S235 / EN 10219' },
      { label: 'Standard Lengths', value: '1.0 m – 6.0 m' },
      { label: 'Surface Finish', value: 'Hot-Dip Galvanized' },
      { label: 'Coupler Type', value: 'Right-angle, swivel, sleeve, putlog' },
    ],
    features: [
      'Unlimited layout configuration',
      'Compatible with all standard 48.3 mm fittings',
      'Wide range of tube lengths available',
      'Hot-dip galvanized or pre-galvanized options',
      'Pressed-steel couplers with bolt-and-nut fastening',
      'Suitable for irregular structures',
    ],
    applications: [
      'General access scaffolding',
      'Adaptation around existing structures',
      'Industrial maintenance',
      'Slab formwork support',
      'Temporary bridges and walkways',
    ],
    standards: [
      { name: 'EN 39', description: 'Loose steel tubes for tube and coupler scaffolding' },
      { name: 'EN 74-1', description: 'Couplers, spigots and baseplates' },
      { name: 'BS 1139', description: 'Metal scaffolding' },
    ],
    relatedProducts: ['cuplock-scaffolding-system', 'right-angle-coupler', 'swivel-coupler'],
  },

  {
    slug: 'fiberglass-scaffolding',
    category: PRODUCT_CATEGORIES.SCAFFOLDING_SYSTEMS,
    name: 'Fiberglass Scaffolding',
    shortDescription: 'Non-conductive fiberglass scaffolding system for electrical, utility, and high-voltage environments.',
    description: `Fiberglass scaffolding is the solution for work environments where electrical non-conductivity is a requirement. Used extensively in power generation, electrical substations, transmission line maintenance, and other live electrical environments, fiberglass scaffolding provides the structural performance of a system scaffold while eliminating the electrical hazard of metal scaffolding.

Available in tube-and-fitting or frame configurations.`,
    heroImage: '/src/assets/images/warehouse.jpg',
    gallery: [],
    specifications: [
      { label: 'Material', value: 'Pultruded Fiberglass (GFRP)' },
      { label: 'Tube OD', value: '48 mm' },
      { label: 'Dielectric Strength', value: 'Non-conductive' },
      { label: 'Temperature Range', value: '-40°C to +130°C' },
      { label: 'Surface Finish', value: 'UV-resistant coating' },
      { label: 'Weight', value: 'Approx. 60% lighter than steel' },
    ],
    features: [
      'Electrically non-conductive — no conductivity risk',
      'Corrosion resistant — no painting or galvanizing required',
      'UV-stable for outdoor applications',
      'High strength-to-weight ratio',
      'Standard tube dimensions — compatible with fiberglass fittings',
      'Available in tube-and-fitting or ladder frame configurations',
    ],
    applications: [
      'Electrical substations and switchgear',
      'Power generation facilities',
      'Transmission tower maintenance',
      'Chemical and corrosive environments',
      'Offshore and coastal installations',
    ],
    standards: [],
    relatedProducts: ['tube-fittings-scaffolding', 'aluminum-tower'],
  },

  // ── TUBES & FITTINGS ─────────────────────────────────────

  {
    slug: 'scaffold-tube-48',
    category: PRODUCT_CATEGORIES.TUBES_FITTINGS,
    name: 'Scaffold Tube — 48.3 mm',
    shortDescription: 'Standard 48.3 mm OD hot-dip galvanized steel scaffold tube in a full range of lengths.',
    description: `The 48.3 mm scaffold tube is the fundamental component of tube-and-fitting and compatible system scaffolding. Manufactured from structural steel to EN 39 specification, tubes are available with hot-dip galvanized or pre-galvanized surface treatment. A comprehensive range of lengths is available for standard orders; custom lengths can be accommodated.`,
    heroImage: '/src/assets/images/scaffold-tubes-fittings.jpg',
    gallery: [],
    specifications: [
      { label: 'Outside Diameter', value: '48.3 mm' },
      { label: 'Wall Thickness', value: '4.0 mm' },
      { label: 'Material Grade', value: 'S235JRH (EN 10219)' },
      { label: 'Standard Lengths', value: '1.0 / 1.5 / 2.0 / 3.0 / 4.0 / 5.0 / 6.0 m' },
      { label: 'Surface Treatment', value: 'Hot-Dip Galvanized (HDG)' },
      { label: 'End Treatment', value: 'Swaged or plain' },
    ],
    features: [
      'EN 39 compliant specification',
      'Full hot-dip galvanized corrosion protection',
      'Wide range of standard lengths available',
      'Swaged or plain ends available',
      'Compatible with all standard 48.3 mm couplers',
    ],
    applications: [
      'Tube and fitting scaffolding systems',
      'System scaffolding accessories',
      'Temporary works structures',
      'Formwork support',
    ],
    standards: [
      { name: 'EN 39', description: 'Loose steel tubes for tube and coupler scaffolding' },
    ],
    relatedProducts: ['right-angle-coupler', 'swivel-coupler', 'base-jack'],
  },

  {
    slug: 'right-angle-coupler',
    category: PRODUCT_CATEGORIES.TUBES_FITTINGS,
    name: 'Right-Angle Coupler',
    shortDescription: 'Pressed-steel right-angle coupler for perpendicular tube connections. The primary structural connector in tube-and-fitting scaffolding.',
    description: `The right-angle coupler (also: fixed coupler, double coupler) creates a rigid 90° connection between two tubes. It is the primary load-bearing connector in tube and fitting scaffolding, used for connecting ledgers and transoms to standards.

Available in drop-forged and pressed-steel construction. Bolt size, load capacity, and surface finish are in accordance with EN 74-1.`,
    heroImage: '/src/assets/images/scaffold-tubes-fittings.jpg',
    gallery: [],
    specifications: [
      { label: 'Type', value: 'Fixed (Right-Angle)' },
      { label: 'Tube Compatibility', value: '48.3 mm' },
      { label: 'Material', value: 'Pressed steel / Drop-forged steel' },
      { label: 'Bolt Size', value: 'M10 × 75 mm' },
      { label: 'Safe Working Load', value: 'Per EN 74-1' },
      { label: 'Surface Finish', value: 'Hot-dip galvanized or self-color' },
    ],
    features: [
      'Rigid 90° tube connection',
      'EN 74-1 compliant',
      'Pressed-steel or drop-forged options',
      'Hot-dip galvanized or self-color finish',
      'Compatible with all standard 48.3 mm tubes',
    ],
    applications: [
      'Standard-to-ledger connections',
      'Standard-to-transom connections',
      'Primary structural connections',
    ],
    standards: [
      { name: 'EN 74-1', description: 'Couplers, spigots and baseplates for use in falsework and scaffolding' },
      { name: 'BS 1139-2.1', description: 'Metal scaffolding — tube fittings' },
    ],
    relatedProducts: ['swivel-coupler', 'scaffold-tube-48', 'putlog-coupler'],
  },

  {
    slug: 'swivel-coupler',
    category: PRODUCT_CATEGORIES.TUBES_FITTINGS,
    name: 'Swivel Coupler',
    shortDescription: 'Adjustable-angle coupler allowing tube connections at any angle — used for bracing and non-perpendicular members.',
    description: `The swivel coupler connects two tubes at any angle, pivoting freely until tightened. Used primarily for diagonal bracing, angled ledgers, and any non-perpendicular connections. When tightened, the joint provides secure load transfer. Available in pressed-steel and drop-forged construction.`,
    heroImage: '/src/assets/images/scaffold-tubes-fittings.jpg',
    gallery: [],
    specifications: [
      { label: 'Type', value: 'Swivel (any angle)' },
      { label: 'Tube Compatibility', value: '48.3 mm' },
      { label: 'Material', value: 'Pressed steel / Drop-forged steel' },
      { label: 'Bolt Size', value: 'M10 × 75 mm' },
      { label: 'Surface Finish', value: 'Hot-dip galvanized or self-color' },
      { label: 'Rotation', value: '360° free-swivel before tightening' },
    ],
    features: [
      '360° rotation before tightening',
      'Used for diagonal and angled connections',
      'Pressed-steel or drop-forged options',
      'EN 74-1 compliant',
      'Compatible with all 48.3 mm tubes',
    ],
    applications: [
      'Diagonal bracing members',
      'Angled ledger connections',
      'Irregular geometry scaffolding',
    ],
    standards: [
      { name: 'EN 74-1', description: 'Couplers, spigots and baseplates' },
    ],
    relatedProducts: ['right-angle-coupler', 'scaffold-tube-48', 'putlog-coupler'],
  },

  {
    slug: 'putlog-coupler',
    category: PRODUCT_CATEGORIES.TUBES_FITTINGS,
    name: 'Putlog Coupler',
    shortDescription: 'Single-tube fitting for connecting putlogs and transoms to ledgers where load transfer is not required.',
    description: `The putlog coupler (also: single coupler) is used to attach putlogs or transoms to a ledger tube. It carries lighter loads than the right-angle coupler and is used where a secondary, non-primary load-bearing connection is needed — such as board-bearing transoms, reveals, or secondary supports.`,
    heroImage: '/src/assets/images/scaffold-tubes-fittings.jpg',
    gallery: [],
    specifications: [
      { label: 'Type', value: 'Putlog / Single' },
      { label: 'Tube Compatibility', value: '48.3 mm' },
      { label: 'Material', value: 'Pressed steel' },
      { label: 'Bolt Size', value: 'M10' },
      { label: 'Surface Finish', value: 'Self-color or galvanized' },
      { label: 'Load Type', value: 'Secondary / non-primary bearing' },
    ],
    features: [
      'Lightweight single-fitting design',
      'For secondary board-support connections',
      'Compatible with all 48.3 mm tubes',
      'Simple bolt-tighten installation',
    ],
    applications: [
      'Transom-to-ledger connections',
      'Board-bearing putlogs',
      'Secondary structural members',
    ],
    standards: [
      { name: 'EN 74-1', description: 'Couplers, spigots and baseplates' },
    ],
    relatedProducts: ['right-angle-coupler', 'swivel-coupler'],
  },

  {
    slug: 'base-jack',
    category: PRODUCT_CATEGORIES.TUBES_FITTINGS,
    name: 'Adjustable Base Jack',
    shortDescription: 'Screw-adjustable base jack for levelling scaffold standards on uneven ground. Essential for all scaffolding systems.',
    description: `The adjustable base jack provides a solid, level footing for scaffold standards on uneven or sloped surfaces. A steel base plate distributes the load across the ground surface, while the threaded screw allows height adjustment to achieve a level scaffold. Available in a range of heights and thread diameters.`,
    heroImage: '/src/assets/images/scaffold-tubes-fittings.jpg',
    gallery: [],
    specifications: [
      { label: 'Inner Tube Diameter', value: '38 mm (fits 48.3 mm standard)' },
      { label: 'Thread Diameter', value: '38 mm' },
      { label: 'Base Plate Size', value: '150 × 150 mm (standard)' },
      { label: 'Adjustment Range', value: 'Up to 600 mm' },
      { label: 'Material', value: 'Structural steel' },
      { label: 'Surface Finish', value: 'Hot-dip galvanized or self-color' },
    ],
    features: [
      'Threaded screw for height adjustment',
      'Steel base plate for load distribution',
      'Fits all standard 48.3 mm tubes and system standards',
      'Hot-dip galvanized or self-color',
      'Multiple height options available',
    ],
    applications: [
      'Levelling scaffolding on uneven ground',
      'Adjustable support legs',
      'Shoring and falsework base feet',
      'System and tube-and-fitting scaffolding',
    ],
    standards: [
      { name: 'EN 74-1', description: 'Couplers, spigots and baseplates' },
    ],
    relatedProducts: ['scaffold-tube-48', 'cuplock-scaffolding-system'],
  },

  {
    slug: 'sleeve-coupler',
    category: PRODUCT_CATEGORIES.TUBES_FITTINGS,
    name: 'Internal Sleeve Coupler',
    shortDescription: 'Internal connector for joining two scaffold tubes end-to-end. Provides a clean, flush joint for extensions.',
    description: `The internal sleeve coupler (internal spigot) fits inside two adjacent tubes to join them end-to-end. This creates a continuous run of scaffold tube without external protrusion, maintaining the clean geometry of the scaffold. Used for extending standards and ledgers.`,
    heroImage: '/src/assets/images/scaffold-tubes-fittings.jpg',
    gallery: [],
    specifications: [
      { label: 'Type', value: 'Internal sleeve / spigot' },
      { label: 'Fits Tube OD', value: '48.3 mm' },
      { label: 'Material', value: 'Steel' },
      { label: 'Surface Finish', value: 'Self-color or galvanized' },
      { label: 'Fastening', value: 'Pin or friction fit' },
      { label: 'Length', value: 'Standard 200 mm' },
    ],
    features: [
      'Internal fit — no external protrusion',
      'Clean tube extension joint',
      'Compatible with all 48.3 mm tubes',
    ],
    applications: [
      'Extending scaffold standards',
      'Ledger length extensions',
      'Tube-end-to-end joints',
    ],
    standards: [
      { name: 'EN 74-1', description: 'Couplers, spigots and baseplates' },
    ],
    relatedProducts: ['scaffold-tube-48', 'right-angle-coupler'],
  },

  {
    slug: 'castor-wheel',
    category: PRODUCT_CATEGORIES.TUBES_FITTINGS,
    name: 'Castor Wheel with Brake',
    shortDescription: 'Heavy-duty castor wheel for mobile scaffold towers. Braked and unbraked variants available.',
    description: `Heavy-duty castor wheels are fitted to the base of mobile scaffold towers and mobile working platforms. The threaded stem inserts into the base jack socket of system scaffolding. The integral brake lever locks the wheel against rolling. Load-rated castors are available for light, medium, and heavy mobile tower applications.`,
    heroImage: '/src/assets/images/aluminum-tower.jpg',
    gallery: [],
    specifications: [
      { label: 'Wheel Diameter', value: '200 mm (standard)' },
      { label: 'Wheel Material', value: 'Rubber-bonded / Polyurethane' },
      { label: 'Stem Diameter', value: '38 mm (standard)' },
      { label: 'Stem Adjustment', value: 'Threaded, up to 300 mm' },
      { label: 'Brake Type', value: 'Foot-operated lever lock' },
      { label: 'Load Rating', value: 'Up to 200 kg per castor (depending on model)' },
    ],
    features: [
      'Integral foot-operated brake',
      'Threaded stem for height adjustment',
      'Rubber or polyurethane wheel options',
      'Fits standard base jack sockets',
      'Multiple load ratings available',
    ],
    applications: [
      'Mobile aluminum scaffold towers',
      'Mobile working platforms',
      'Mobile support structures',
    ],
    standards: [
      { name: 'EN 1004', description: 'Mobile access and working towers made of prefabricated elements' },
    ],
    relatedProducts: ['aluminum-tower', 'base-jack'],
  },

  // ── PLATFORMS & BOARDS ───────────────────────────────────

  {
    slug: 'aluminum-platform',
    category: PRODUCT_CATEGORIES.PLATFORMS,
    name: 'Aluminum Decking Platform',
    shortDescription: 'Lightweight aluminum hook-on platform board with anti-slip perforated surface. Available in multiple widths and lengths.',
    description: `Aluminum decking platforms combine a lightweight extruded aluminum frame with a perforated non-slip surface. Hook-on ends attach quickly to scaffold ledgers or system components. The open perforated surface allows water and debris to drain while providing a secure working surface.

Multiple widths (single and double) and lengths available. Load-rated per EN 12811.`,
    heroImage: '/src/assets/images/platform-board.jpg',
    gallery: ['/src/assets/images/platform-board.jpg'],
    specifications: [
      { label: 'Material', value: 'Extruded aluminum alloy (6061-T6)' },
      { label: 'Standard Widths', value: '320 mm / 610 mm / 635 mm' },
      { label: 'Standard Lengths', value: '1.0 m / 1.5 m / 2.0 m / 2.5 m / 3.0 m / 4.0 m' },
      { label: 'Surface', value: 'Anti-slip perforated / textured' },
      { label: 'End Fitting', value: 'Hook-on or spring hook' },
      { label: 'Load Rating', value: 'Per EN 12811 load class' },
    ],
    features: [
      'Lightweight aluminum — reduced handling fatigue',
      'Anti-slip perforated surface',
      'Hook-on ends for fast fit and removal',
      'Drains water and debris',
      'Multiple standard widths and lengths',
      'Compatible with major system scaffolding',
    ],
    applications: [
      'Cuplock and ring-lock scaffolding working platforms',
      'System scaffolding decking',
      'Mobile tower platforms',
      'Temporary walkways and bridges',
    ],
    standards: [
      { name: 'EN 12811', description: 'Temporary works equipment — scaffolds' },
    ],
    relatedProducts: ['cuplock-scaffolding-system', 'ringlock-system', 'scaffold-boards'],
  },

  {
    slug: 'scaffold-boards',
    category: PRODUCT_CATEGORIES.PLATFORMS,
    name: 'Steel Scaffold Boards',
    shortDescription: 'Galvanized steel open-mesh platform board for use on all types of scaffolding. Non-slip, durable, long-lasting.',
    description: `Steel open-mesh scaffold boards are the heavy-duty alternative to timber and aluminum boards. The galvanized steel mesh surface provides excellent drainage and anti-slip performance, even in wet conditions. Hooked ends attach securely to scaffold tubes or system components.

Steel boards are particularly suited to demanding industrial environments where longevity, fire resistance, and robustness are priorities.`,
    heroImage: '/src/assets/images/platform-board.jpg',
    gallery: [],
    specifications: [
      { label: 'Material', value: 'Galvanized steel mesh' },
      { label: 'Width', value: '450 mm (standard)' },
      { label: 'Standard Lengths', value: '1.2 m / 1.5 m / 1.8 m / 2.4 m / 3.0 m' },
      { label: 'Surface', value: 'Open mesh — anti-slip' },
      { label: 'End Fitting', value: 'Galvanized hook' },
      { label: 'Surface Treatment', value: 'Hot-dip galvanized' },
    ],
    features: [
      'Open mesh allows drainage of water and debris',
      'Non-slip surface in wet conditions',
      'Hot-dip galvanized — resistant to corrosion',
      'Long service life in industrial environments',
      'Fire resistant — no timber combustion risk',
      'Compatible with tube-and-fitting and system scaffolding',
    ],
    applications: [
      'Industrial and petrochemical scaffolding',
      'Marine and offshore applications',
      'Long-term scaffolding structures',
      'High-temperature environments',
    ],
    standards: [
      { name: 'EN 12811', description: 'Temporary works equipment — scaffolds' },
    ],
    relatedProducts: ['aluminum-platform', 'tube-fittings-scaffolding'],
  },

  // ── MOBILE TOWERS ────────────────────────────────────────

  {
    slug: 'aluminum-tower',
    category: PRODUCT_CATEGORIES.MOBILE_TOWERS,
    name: 'Mobile Aluminum Access Tower',
    shortDescription: 'Free-standing mobile scaffold tower in aluminum alloy for flexible work-at-height access. EN 1004 compliant.',
    description: `Mobile aluminum access towers are self-contained, free-standing working platforms on castor wheels. The aluminum alloy frame provides high strength with low weight, allowing rapid assembly and movement by small teams. Internal or external access ladders provide safe working-level access.

Available in a range of platform heights, widths, and configurations — single-width, double-width, and stairway towers. Castor wheel brakes lock the tower securely during use.

All towers should be assembled, used, and dismantled by competent, trained persons in accordance with the manufacturer's instructions and EN 1004.`,
    heroImage: '/src/assets/images/aluminum-tower.jpg',
    gallery: ['/src/assets/images/aluminum-tower.jpg'],
    specifications: [
      { label: 'Material', value: 'Aluminum alloy (EN AW-6082)' },
      { label: 'Frame Width', value: '0.75 m / 1.35 m (platform width)' },
      { label: 'Platform Lengths', value: '1.8 m / 2.5 m' },
      { label: 'Max Platform Height', value: 'Up to 12 m (single-width, indoors)' },
      { label: 'Castor Wheel Diameter', value: '200 mm with brake' },
      { label: 'Load Rating', value: '225 kg platform load class 3' },
    ],
    features: [
      'Lightweight aluminum — easy to move and handle',
      'Rapid assembly by small teams',
      'Internal or external ladder access',
      'Lockable castor wheels with brakes',
      'Guardrails and toe boards included',
      'Modular — adjustable to required height',
    ],
    applications: [
      'Internal maintenance and fit-out',
      'Electrical and mechanical services installation',
      'Event and stage rigging',
      'Warehouse and logistics operations',
      'Painting and decorating',
      'General commercial maintenance',
    ],
    standards: [
      { name: 'EN 1004', description: 'Mobile access and working towers' },
    ],
    relatedProducts: ['castor-wheel', 'aluminum-platform', 'fiberglass-scaffolding'],
  },

  // ── LADDERS ──────────────────────────────────────────────

  {
    slug: 'aluminum-extension-ladder',
    category: PRODUCT_CATEGORIES.LADDERS,
    name: 'Aluminum Extension Ladder',
    shortDescription: 'Lightweight double-section extension ladder in aluminum alloy. Available in multiple extended reach lengths.',
    description: `Aluminum extension ladders offer the traditional single-person access solution for a wide range of heights. The two-section design allows the upper section to slide for height adjustment, with rung locks securing the extended position. D-rung or flat-rung options available for different applications and user preferences.

All ladders comply with EN 131 safety standards. For work-at-height applications, appropriate fall protection and ladder stabilizers should be used in accordance with site risk assessments.`,
    heroImage: '/src/assets/images/warehouse.jpg',
    gallery: [],
    specifications: [
      { label: 'Material', value: 'Aluminum alloy' },
      { label: 'Rung Type', value: 'D-rung or flat-rung' },
      { label: 'Sections', value: '2 (extension)' },
      { label: 'Extended Lengths', value: '3.0 m to 8.0 m' },
      { label: 'Rung Spacing', value: '300 mm (standard)' },
      { label: 'Load Class', value: 'EN 131 Class I (150 kg) or II (120 kg)' },
    ],
    features: [
      'Lightweight aluminum construction',
      'Rung lock for secure height adjustment',
      'Non-slip rubber feet',
      'Available in multiple extended lengths',
      'D-rung or flat-rung options',
      'EN 131 compliant',
    ],
    applications: [
      'General access and maintenance',
      'Building trades',
      'Electrical and mechanical services',
      'Warehouse access',
    ],
    standards: [
      { name: 'EN 131', description: 'Ladders — requirements, testing, marking' },
    ],
    relatedProducts: ['aluminum-tower', 'platform-stepladder'],
  },

  {
    slug: 'platform-stepladder',
    category: PRODUCT_CATEGORIES.LADDERS,
    name: 'Aluminum Platform Stepladder',
    shortDescription: 'Self-supporting aluminum platform stepladder with non-slip platform and full guardrail for safe working at height.',
    description: `Platform stepladders provide a stable, free-standing working position for tasks that require sustained work at a fixed height. The full-size working platform and guardrail allow both hands to be used for the task — unlike a standard stepladder. Folding design for compact storage and transport.`,
    heroImage: '/src/assets/images/aluminum-tower.jpg',
    gallery: [],
    specifications: [
      { label: 'Material', value: 'Aluminum alloy' },
      { label: 'Platform Sizes', value: '300 × 300 mm (standard)' },
      { label: 'Available Heights', value: '0.6 m to 2.0 m platform height' },
      { label: 'Guardrail', value: 'Full surround with handrail' },
      { label: 'Load Rating', value: 'Up to 150 kg' },
      { label: 'Rung Spacing', value: '300 mm' },
    ],
    features: [
      'Full-size working platform',
      'Full surround guardrail',
      'Folding for compact storage',
      'Non-slip platform surface',
      'Non-slip rubber feet',
      'Free-standing — no wall support required',
    ],
    applications: [
      'Commercial maintenance',
      'Electrical and mechanical services',
      'Retail fitting-out',
      'General trade applications',
    ],
    standards: [
      { name: 'EN 131', description: 'Ladders' },
    ],
    relatedProducts: ['aluminum-extension-ladder', 'aluminum-tower'],
  },

  // ── SAFETY & ACCESSORIES ─────────────────────────────────

  {
    slug: 'toe-board',
    category: PRODUCT_CATEGORIES.SAFETY_ACCESSORIES,
    name: 'Scaffold Toe Board',
    shortDescription: 'Aluminum or steel toe board for scaffold working platforms to prevent materials falling from the deck edge.',
    description: `Toe boards are a standard safety requirement on scaffold working platforms. Fixed at deck level, they prevent tools, materials, and debris from being kicked or rolling off the platform edge. Available in aluminum and steel, with clip-on or bolt-on fixing to standard scaffold tubes.`,
    heroImage: '/src/assets/images/cuplock-system.jpg',
    gallery: [],
    specifications: [
      { label: 'Material', value: 'Aluminum or galvanized steel' },
      { label: 'Height', value: '150 mm (standard)' },
      { label: 'Length', value: 'Standard and cut-to-length options' },
      { label: 'Fixing', value: 'Clip-on to 48.3 mm tube' },
      { label: 'Surface', value: 'Plain or perforated' },
      { label: 'Finish', value: 'Mill / anodized (aluminum) or galvanized (steel)' },
    ],
    features: [
      'Prevents fall of materials from platform edges',
      'Clip-on fixing to standard scaffold tubes',
      'Aluminum (lightweight) or steel (heavy-duty) options',
      'Standard and custom lengths',
      'Complies with EN 12811 edge protection requirements',
    ],
    applications: [
      'All scaffold working platforms',
      'Access scaffolding',
      'Industrial scaffolding',
    ],
    standards: [
      { name: 'EN 12811', description: 'Temporary works equipment — edge protection' },
    ],
    relatedProducts: ['aluminum-platform', 'scaffold-boards'],
  },

  {
    slug: 'scaffold-spanner',
    category: PRODUCT_CATEGORIES.SAFETY_ACCESSORIES,
    name: 'Scaffold Combination Spanner',
    shortDescription: 'Forged steel scaffold combination spanner for tightening and loosening scaffold tube couplers.',
    description: `The scaffold combination spanner is the essential hand tool for tube-and-fitting scaffolding assembly. One end provides an open jaw for coupler bolts; the other end provides a tubular socket. Manufactured from drop-forged steel with a chrome-vanadium finish for durability.`,
    heroImage: '/src/assets/images/scaffold-tubes-fittings.jpg',
    gallery: [],
    specifications: [
      { label: 'Material', value: 'Drop-forged steel (Cr-V)' },
      { label: 'Socket Size', value: '7/16" (standard scaffold bolt)' },
      { label: 'Open End', value: 'Open jaw for coupler hex head' },
      { label: 'Handle', value: 'Tubular — can be extended' },
      { label: 'Finish', value: 'Chrome vanadium' },
      { label: 'Weight', value: 'Approx. 0.35 kg' },
    ],
    features: [
      'Combination open jaw and socket end',
      'Drop-forged for strength and longevity',
      'Tubular handle allows extension bar use',
      'Standard scaffold bolt compatibility',
      'Chrome-vanadium finish for corrosion resistance',
    ],
    applications: [
      'Tube-and-fitting scaffolding assembly and dismantling',
      'Coupler installation and removal',
      'General scaffolding site tool',
    ],
    standards: [],
    relatedProducts: ['right-angle-coupler', 'swivel-coupler'],
  },
];

/**
 * Utility: get product by slug
 */
export function getProductBySlug(slug) {
  return PRODUCTS.find(p => p.slug === slug) || null;
}

/**
 * Utility: get products by category
 */
export function getProductsByCategory(category) {
  return PRODUCTS.filter(p => p.category === category);
}

/**
 * Utility: get all categories with product count
 */
export function getCategoriesWithCount() {
  return Object.entries(PRODUCT_CATEGORIES).map(([, value]) => ({
    category: value,
    ...CATEGORY_META[value],
    count: getProductsByCategory(value).length,
  }));
}

/**
 * Utility: get related products
 */
export function getRelatedProducts(slugs) {
  return slugs
    .map(slug => getProductBySlug(slug))
    .filter(Boolean);
}
