/**
 * TIANJIN DECENT INTERNATIONAL TRADE CO., LTD. — PRODUCT DATA MODEL
 * Central product database covering Steel Coils, Structural Steel Profiles, 
 * Modular Scaffolding Systems, and Accessories.
 */

export const PRODUCT_CATEGORIES = {
  STEEL_COILS: 'steel-coils',
  STRUCTURAL_PROFILES: 'structural-profiles',
  SCAFFOLDING_SYSTEMS: 'scaffolding-systems',
  TUBES_FITTINGS: 'tubes-fittings',
  PLATFORMS: 'platforms',
  MOBILE_TOWERS: 'mobile-towers',
  LADDERS: 'ladders',
  SAFETY_ACCESSORIES: 'safety-accessories',
};

export const CATEGORY_META = {
  [PRODUCT_CATEGORIES.STEEL_COILS]: {
    label: 'Steel Coils',
    shortLabel: 'Steel Coils',
    description: 'Hot Rolled Coils (HR), Pre-Galvanized Coils for forming, and Color Coated Steel Coils in various thicknesses.',
    image: '/src/assets/images/hr-steel-coils.jpg',
  },
  [PRODUCT_CATEGORIES.STRUCTURAL_PROFILES]: {
    label: 'Structural Steel & Pipes',
    shortLabel: 'Structural Steel',
    description: 'H-Beams, I-Beams, Channels, Angles, Square/Round Bars, Hollow Sections, and API Seamless Pipes.',
    image: '/src/assets/images/structural-steel-profiles.jpg',
  },
  [PRODUCT_CATEGORIES.SCAFFOLDING_SYSTEMS]: {
    label: 'Scaffolding Systems',
    shortLabel: 'Scaffolding',
    description: 'Cup Lock, Ring / Pin Lock, and Tube & Fitting modular scaffolding systems for building, access, and industrial shoring.',
    image: '/src/assets/images/cuplock-system.jpg',
  },
  [PRODUCT_CATEGORIES.TUBES_FITTINGS]: {
    label: 'Tubes & Fittings',
    shortLabel: 'Components',
    description: 'Precision 48.3 mm scaffold tubes, drop-forged couplers, base jacks, and connection hardware.',
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
    label: 'Scaffolding Accessories & Safety',
    shortLabel: 'Safety & Parts',
    description: 'Standards, ledgers, transoms, base plates, base jacks, couplers, braces, boards, and access gates.',
    image: '/src/assets/images/ringlock-scaffolding.jpg',
  },
};

/** @type {Product[]} */
export const PRODUCTS = [

  // ── STEEL COILS ──────────────────────────────────────────

  {
    slug: 'hr-steel-coils',
    category: PRODUCT_CATEGORIES.STEEL_COILS,
    name: 'Hot Rolled Steel Coils (HR Coils)',
    shortDescription: 'Hot Rolled Carbon Steel Coils in commercial, structural, and high-strength grades across 1.2–25 mm thicknesses.',
    description: `Hot Rolled Steel Coils (HR Coils) are primary flat-rolled steel products manufactured by Tianjin Decent International Trade Co., Ltd. from verified metallurgical production partners. Sourced in Commercial, Structural, and High-Strength grades tailored to exact buyer specifications, project engineering requirements, and global destination standards.

Available in mill finish (black surface) or Pickled & Oiled (P&O) condition with mill edge (ME) or trimmed/slit edge (TE). Supplied with full Mill Test Certificates (MTC) and third-party inspection verification (SGS / BV) upon request. Export-worthy seaworthy packing suitable for container and bulk vessel shipments.`,
    heroImage: '/src/assets/images/hr-steel-coils.jpg',
    gallery: ['/src/assets/images/hr-steel-coils.jpg', '/src/assets/images/galvanized-steel-coils.jpg'],
    specifications: [
      { label: 'Product Name', value: 'Hot Rolled Steel Coils (HR Coils)' },
      { label: 'Grades', value: 'Commercial, Structural & High-Strength grades as per customer requirement' },
      { label: 'Common Standards', value: 'ASTM A36/A1011, EN 10025/EN 10051, JIS G3131/G3101, or equivalent' },
      { label: 'Thickness Range', value: 'Typically 1.2–25 mm (other thicknesses available on request)' },
      { label: 'Width Range', value: 'Typically 800–2,000 mm (custom widths subject to mill capability)' },
      { label: 'Coil Weight', value: 'As per mill standard and buyer requirements (approx. 15–28 tons)' },
      { label: 'Surface Condition', value: 'Mill finish / black surface; Pickled & Oiled (P&O) available' },
      { label: 'Edge Condition', value: 'Mill edge (ME) or trimmed / slit edge (TE)' },
      { label: 'Mechanical Properties', value: 'As specified according to the applicable grade and standard' },
      { label: 'Supply Form', value: 'Coils, with customized ID/OD (e.g. 610/760 mm ID) and strapping' },
      { label: 'Inspection Protocol', value: 'Mill Test Certificate (MTC) and third-party inspection on request' },
      { label: 'Packing Standard', value: 'Export-worthy seaworthy packing suitable for international shipment' },
    ],
    features: [
      'Comprehensive thickness range from 1.2 mm up to 25.0 mm',
      'Wide mill range accommodating widths from 800 mm to 2,000 mm',
      'Available in mill black finish or Pickled & Oiled (P&O)',
      'High structural integrity and uniform thickness tolerances',
      'Full chemical composition and tensile mechanical data provided',
      'Anti-corrosion seaworthy strapping and moisture-barrier wrapping',
    ],
    applications: [
      'Construction and civil engineering works',
      'Heavy structural steel fabrication',
      'Automotive components and chassis manufacturing',
      'Machinery and heavy equipment frames',
      'Welded steel pipes, tubes, and pressure tanks',
      'General industrial engineering and roll forming',
    ],
    standards: [
      { name: 'ASTM A36 / A1011', description: 'Standard Specification for Steel, Sheet and Strip, Carbon, Structural' },
      { name: 'EN 10025 / EN 10051', description: 'Hot rolled structural steel products and dimensional tolerances' },
      { name: 'JIS G3131 / G3101', description: 'Commercial and general structural hot-rolled mild steel plates' },
    ],
    relatedProducts: ['pre-galvanized-steel-coils', 'color-coated-steel-coils', 'structural-steel-profiles'],
  },

  {
    slug: 'pre-galvanized-steel-coils',
    category: PRODUCT_CATEGORIES.STEEL_COILS,
    name: 'Pre-Galvanized Steel Coils for Forming',
    shortDescription: 'Cold-formed forming-grade steel coils with continuous hot-dip zinc coating (20–275 g/m²) for bending, roll forming, and structural fabrication.',
    description: `Pre-galvanized steel coils supplied by Tianjin Decent International Trade Co., Ltd. are cold-formed/forming-grade steel flat products produced with a continuous hot-dip zinc coating. The material is engineered specifically for roll forming, bending, precision fabrication, and general structural engineering applications.

Pre-galvanized steel offers exceptional corrosion resistance because zinc has more reactive chemical properties than iron, preferentially reacting with atmospheric oxygen and water vapor to form a dense, durable zinc oxide passivation film. The service life of galvanized steel plates reaches 10 to 50 years, significantly outperforming ungalvanized plates while remaining highly cost-effective compared to stainless steel or specialized alloy metals.`,
    heroImage: '/src/assets/images/galvanized-steel-coils.jpg',
    gallery: ['/src/assets/images/galvanized-steel-coils.jpg', '/src/assets/images/color-coated-coils.jpg'],
    specifications: [
      { label: 'Material Base', value: 'Galvanized carbon steel, forming grade' },
      { label: 'Thickness Range', value: 'Normally 0.12–4.0 mm (various thicknesses as required by BOQ/drawings)' },
      { label: 'Zinc Coating Mass', value: '20–275 g/m² total both sides (Z20 to Z275), or as specified' },
      { label: 'Steel Grades', value: 'DX51D, DX52D, SGCC, GB, ASTM A653, JIS G3302 or equivalent' },
      { label: 'Surface Quality', value: 'Smooth, uniform coating free from peeling, excessive zinc build-up, or corrosion' },
      { label: 'Coil Width', value: '700–1250 mm; Strip: 20–600 mm OR as required by project/shop drawings' },
      { label: 'Mechanical Properties', value: 'Complies with ASTM A653/A653M or EN 10346 grade parameters' },
      { label: 'Edge Condition', value: 'Mill edge or slit edge as specified' },
      { label: 'Delivery Protection', value: 'Securely packed with waterproof paper and metal banding against moisture and mechanical damage' },
      { label: 'Service Life', value: '10–50 years under standard environmental exposure' },
    ],
    features: [
      'Excellent corrosion resistance via protective sacrificial zinc oxide film',
      'High cost-effectiveness compared to stainless steel or alloy alternatives',
      'Outstanding processing performance for cutting, roll-forming, bending, and punching',
      'High strength with lightweight profile options for modern building systems',
      'Clean silver-gray metallic luster suitable for visible and exposed installations',
      '100% recyclable environmentally friendly material with reusable zinc substrate',
    ],
    applications: [
      'Roll forming for purlins, studs, framing, and light-gauge steel framing (LGSF)',
      'Cable trays, cable conduits, and electrical panel enclosures',
      'HVAC air ducting, ventilation louvers, and spiral ductwork',
      'Agricultural silos, roofing panels, and cladding substrates',
      'Automotive body stampings and appliance internal brackets',
      'Scaffolding planks, decking boards, and access platform components',
    ],
    standards: [
      { name: 'ASTM A653 / A653M', description: 'Specification for Steel Sheet, Zinc-Coated or Zinc-Iron Alloy-Coated by Hot-Dip' },
      { name: 'EN 10346', description: 'Continuously hot-dip coated steel flat products for cold forming and structural use' },
      { name: 'ISO 3575', description: 'Continuous hot-dip zinc-coated carbon steel sheet of commercial and drawing qualities' },
    ],
    relatedProducts: ['hr-steel-coils', 'color-coated-steel-coils', 'structural-steel-profiles'],
  },

  {
    slug: 'color-coated-steel-coils',
    category: PRODUCT_CATEGORIES.STEEL_COILS,
    name: 'Color Coated Steel Coils for Forming',
    shortDescription: 'Pre-painted galvanized steel coils (PPGI/PPGL) available in all RAL colors, multiple surface finishes (matt, wrinkle, high-gloss), and zinc coating Z40–600 g/m².',
    description: `Color Coated Steel Coils (Pre-painted Galvanized & Galvalume Coils — PPGI / PPGL) from Tianjin Decent International Trade Co., Ltd. provide long-lasting surface protection, vibrant architectural aesthetics, and exceptional weatherability. Supplied with advanced organic paint coating systems on premium galvanized or alloy-coated steel substrates.

Available in all international standard RAL colors, with finishes ranging from Matt and High-Gloss to Two-Side Color, Wrinkle texture, Wooden pattern, and Marble effect. Every shipment is supplied with a comprehensive Mill Test Certificate (MTC) confirming chemical composition, mechanical properties, metal thickness, zinc coating mass, paint film thickness, and heat/coil identification.`,
    heroImage: '/src/assets/images/color-coated-coils.jpg',
    gallery: ['/src/assets/images/color-coated-coils.jpg', '/src/assets/images/galvanized-steel-coils.jpg'],
    specifications: [
      { label: 'Available Grades', value: 'CGCC, CGCH, G550, DX51D, DX52D, DX53D' },
      { label: 'Thickness Range', value: '0.12–4.0 mm' },
      { label: 'Coil Width Range', value: '600–1500 mm' },
      { label: 'Zinc Coating Substrate', value: 'Z40–600 g/m²' },
      { label: 'Paint Coating Thickness', value: 'Top: 15–35 µm, Back: 5–15 µm' },
      { label: 'Color Options', value: 'Complete RAL Color System (custom matching available)' },
      { label: 'Surface Finishes', value: 'Matt, High gloss, Color with two sides, Wrinkle, Wooden color, Marble' },
      { label: 'Coil Weight', value: '2–5 Metric Tons per coil' },
      { label: 'Coil Inner Diameter', value: '508 mm / 610 mm' },
      { label: 'Quality Certification', value: 'Supplied with full Mill Test Certificate (MTC) with heat/coil tracking' },
    ],
    features: [
      'Full RAL color matching for architectural and corporate brand requirements',
      'Premium polyester (PE), SMP, HDP, or PVDF topcoats for UV resistance',
      'Dual-side coating capabilities for exposed interior and exterior roofing',
      'Specialized textured finishes: wrinkle, wood grain, marble, and anti-glare matt',
      'High-yield G550 options for structural profile roll forming and sandwich panels',
      'Standardized 508 mm and 610 mm internal diameters for roll forming decoilers',
    ],
    applications: [
      'Commercial and industrial roofing sheets (corrugated, trapezoidal)',
      'Architectural wall sandwich panels and insulated cladding',
      'Cold storage facility walls, warehouse facades, and airport hangars',
      'Roller shutter doors, garage panels, and cleanroom partitioning',
      'Household electrical appliance outer casing and enclosure panels',
    ],
    standards: [
      { name: 'EN 10169', description: 'Continuously organic coated (coil coated) steel flat products' },
      { name: 'ASTM A755 / A755M', description: 'Steel sheet, metallic coated by the hot-dip process and prepainted by coil-coating' },
      { name: 'JIS G3312', description: 'Prepainted hot-dip zinc-coated steel sheets and coils' },
    ],
    relatedProducts: ['pre-galvanized-steel-coils', 'hr-steel-coils', 'structural-steel-profiles'],
  },

  // ── STRUCTURAL STEEL PROFILES & PIPES ───────────────────

  {
    slug: 'structural-steel-profiles',
    category: PRODUCT_CATEGORIES.STRUCTURAL_PROFILES,
    name: 'Structural Steel Profiles & Sections',
    shortDescription: 'Comprehensive range of fundamental structural sections: H-Beams, I-Beams, Channels, Angle Sections, Square/Round Bars, Flat Plates, and Hollow Sections.',
    description: `Structural steel sections are fundamental engineering components in modern buildings, bridges, industrial plants, warehouse facilities, and infrastructure projects. Each profile manufactured and supplied by Tianjin Decent International Trade Co., Ltd. is uniquely shaped to withstand specific mechanical loads, moments of inertia, and shear forces with maximum efficiency.

Our structural profiles portfolio covers wide-flange H-Beams, standard I-Beams, C-Channels, L-Angles, Square and Round Bars, Steel Flat Plates, T-Sections, and Hollow Sections (SHS, RHS, CHS). Sourced in standard lengths of 6 m, 12 m, or cut-to-length as required by project drawings.`,
    heroImage: '/src/assets/images/structural-steel-profiles.jpg',
    gallery: ['/src/assets/images/structural-steel-profiles.jpg', '/src/assets/images/seamless-steel-pipes.jpg'],
    specifications: [
      { label: 'H-Beam (Wide Flange)', value: 'Thickness: 3–70 mm | Length: 6–12 m or custom. Ideal for heavy load-bearing columns, bridge girders, and frameworks.' },
      { label: 'I-Beam (Narrow Flange)', value: 'Resists strong bending forces. Commonly used in floor beam systems, crane runways, and industrial structures.' },
      { label: 'Channel (C-Section)', value: 'Frequently used for purlins, girts, wall framing, and moderate structural support applications.' },
      { label: 'Angle Section (L-Section)', value: 'Equal & unequal angles. Ideal for roof trusses, diagonal bracing, equipment towers, and corner reinforcement.' },
      { label: 'Square & Round Bars', value: 'High-rigidity solid bars for machinery shafts, pins, anchor rods, gates, railings, and plain reinforcement.' },
      { label: 'Steel Plate (Flat Bar)', value: 'Base plates, gusset plates, column stiffeners, connection plates, and custom fabrication works.' },
      { label: 'T-Section Steel', value: 'Support members, floor framing stiffeners, and secondary structural elements.' },
      { label: 'RHS & SHS (Hollow)', value: 'Rectangular & Square Hollow Sections for canopies, warehouses, and modern architectural steel frameworks.' },
      { label: 'CHS (Circular Hollow)', value: 'Circular Hollow Sections offering excellent omnidirectional strength-to-weight ratio for columns and trusses.' },
      { label: 'Material Grades', value: 'Q235B, Q355B, S235JR, S275JR, S355JR, ASTM A36, A572 Gr 50, SS400' },
    ],
    features: [
      'Comprehensive structural geometry options matching global building codes',
      'Guaranteed yield strength and elongation limits for seismic and dynamic loads',
      'Lengths available in standard 6.0 m, 12.0 m or custom cut-to-length specifications',
      'Surface options: Mill black finish, shot-blasted, primed, or Hot-Dip Galvanized',
      'Tight dimensional tolerances conforming to EN 10034, EN 10056, and ASTM A6',
      'Direct container and break-bulk vessel dispatch from Port of Tianjin',
    ],
    applications: [
      'High-rise building frameworks and commercial tower columns',
      'Highway bridges, rail viaducts, and pedestrian overpasses',
      'Industrial warehouses, pre-engineered steel buildings (PEB), and canopies',
      'Crane gantry girders, runway tracks, and heavy machinery beds',
      'Offshore platforms, ship repair yards, and heavy equipment chassis',
      'Architectural trusses, stadium roof canopies, and towers',
    ],
    standards: [
      { name: 'EN 10025-2', description: 'Technical delivery conditions for non-alloy structural steels' },
      { name: 'ASTM A36 / A572', description: 'Standard Specification for Carbon and High-Strength Low-Alloy Structural Steel' },
      { name: 'JIS G3101', description: 'Rolled steel for general structure (SS400 / SS490)' },
    ],
    relatedProducts: ['seamless-steel-pipes', 'hr-steel-coils', 'pre-galvanized-steel-coils'],
  },

  {
    slug: 'seamless-steel-pipes',
    category: PRODUCT_CATEGORIES.STRUCTURAL_PROFILES,
    name: 'Seamless Industrial Steel Pipes',
    shortDescription: 'Heavy-wall and standard API/GB seamless steel pipes for fluid, gas, oil transmission, and high-load structural columns.',
    description: `Seamless industrial steel pipes supplied by Tianjin Decent International Trade Co., Ltd. are manufactured without welded seams for high pressure containment, uniform circumferential strength, and dependable structural durability. Conforming to rigorous API and GB standards for fluid, gas, and oil transport as well as heavy civil structural columns.

Available in standard lengths of 6 m, 6.4 m, and 12 m with wall thickness ratings from Schedule 40 (sch40) up to Schedule 120 (sch120). Surface options include hot-rolled black finish or anti-corrosion black galvanized coating with beveled or plain ends fitted with protective end caps.`,
    heroImage: '/src/assets/images/seamless-steel-pipes.jpg',
    gallery: ['/src/assets/images/seamless-steel-pipes.jpg', '/src/assets/images/structural-steel-profiles.jpg'],
    specifications: [
      { label: 'Applications', value: 'Fluid Pipe, Gas Pipe, Oil Pipe, High-Pressure Transmission & Structural Columns' },
      { label: 'Manufacturing Standard', value: 'GB Standards, API Spec 5L / 5CT, ASTM A53, ASTM A106' },
      { label: 'Steel Grades', value: 'Grade B, A53, A369, A106 (B, C), Q195–Q345' },
      { label: 'Certifications', value: 'API Certified, ISO 9001, Mill Test Certificate (EN 10204 3.1)' },
      { label: 'Surface Treatment', value: 'Hot Rolled finish / Black Galvanized Coated with rust-preventive varnish' },
      { label: 'Standard Lengths', value: '6.0 m, 6.4 m, 12.0 m (fixed or random lengths)' },
      { label: 'Specialty Classes', value: 'API Pipe, Thick Wall Pipe, High-Pressure Boiler Tube' },
      { label: 'Wall Thickness Schedule', value: 'sch40 to sch120 (and customized heavy wall thicknesses)' },
      { label: 'End Protection', value: 'Plain end, beveled end (30°–35°), plastic end caps fitted' },
    ],
    features: [
      'Seamless fabrication ensures 100% integrity without longitudinal weld weakness',
      'High pressure test verification: hydrostatic and non-destructive eddy-current testing',
      'Wall thickness options from Schedule 40 to Schedule 120 for extreme loads',
      'Black galvanized coating provides atmospheric protection during sea transit',
      'Certified under API standard for critical fluid, petrochemical, and gas lines',
      'Clean bundling with steel strapping and end caps for safe forklift handling',
    ],
    applications: [
      'Petrochemical, natural gas, and hydrocarbon transmission pipelines',
      'High-pressure steam lines, boiler tubes, and heat exchanger circuits',
      'Industrial fluid transportation in water treatment and processing plants',
      'Heavy-load structural columns, bridge foundation pilings, and micro-piles',
      'Mechanical machining, hydraulic cylinders, and automotive shafts',
    ],
    standards: [
      { name: 'API Spec 5L', description: 'Specification for Line Pipe (Gr. B, X42–X70)' },
      { name: 'ASTM A106 / A53', description: 'Seamless Carbon Steel Pipe for High-Temperature Service' },
      { name: 'GB/T 8163', description: 'Seamless steel tubes for liquid service' },
    ],
    relatedProducts: ['structural-steel-profiles', 'hr-steel-coils', 'scaffold-tube-48'],
  },

  // ── SCAFFOLDING SYSTEMS ──────────────────────────────────

  {
    slug: 'cuplock-scaffolding-system',
    category: PRODUCT_CATEGORIES.SCAFFOLDING_SYSTEMS,
    name: 'Cup Lock Scaffolding System',
    shortDescription: 'Modular steel scaffolding system featuring vertical standards with cup-and-wedge locking mechanism for rapid assembly.',
    description: `Cup Lock scaffolding is a modular steel scaffolding system used extensively for access, support, and working platforms in building construction, maintenance, and heavy industrial projects.

Its defining operational feature is the vertical standard with cup-and-wedge locking nodes spaced at regular intervals (typically 500 mm). The top cup rotates and locks down over the forged blade ends of up to four horizontal ledgers in a single hammer blow, ensuring fast erection times, rigid node geometry, and high load-bearing capacity without loose bolts or nuts.`,
    heroImage: '/src/assets/images/cuplock-system.jpg',
    gallery: ['/src/assets/images/cuplock-system.jpg', '/src/assets/images/hero-scaffolding.jpg'],
    specifications: [
      { label: 'Scaffolding System', value: 'Cup Lock modular scaffolding' },
      { label: 'Material', value: 'High-strength galvanized steel (S235 / S355 structural steel)' },
      { label: 'Standard Mechanism', value: 'Vertical standards with cup-and-wedge locking mechanism' },
      { label: 'Standard Spacing', value: 'Typically 0.60–2.5 m, depending on design and load requirements' },
      { label: 'Lift Height', value: 'Typically 0.5–2.0 m; commonly 2.0 m standard' },
      { label: 'Horizontal Ledgers', value: 'Available in required lengths to suit modular bay dimensions' },
      { label: 'Base Support', value: 'Adjustable base jacks / base plates' },
      { label: 'Working Platform', value: 'Steel planks or Wooden scaffold boards' },
      { label: 'Access Components', value: 'Ladders or integrated stair units as required' },
      { label: 'Safety Components', value: 'Guardrails, midrails, toe boards, and access gates' },
      { label: 'Finish', value: 'Hot-dip galvanized (HDG ≥ 55 µm) or painted steel' },
      { label: 'Load Capacity', value: 'As per approved design and manufacturer certified load tables' },
      { label: 'Primary Use', value: 'Construction works, building façades, industrial plants, warehouses, and maintenance' },
    ],
    features: [
      'Single-node connection — up to four ledgers locked in one operation',
      'Significantly faster assembly compared to conventional tube & coupler systems',
      'Suited for exterior access scaffolding, heavy falsework, and shoring',
      'Inherent lateral stability resulting from rigid cup-wedge node geometry',
      'Hot-dip galvanized finish provides lasting corrosion protection in marine environments',
      'Full compatibility with modular ladders, toe boards, and jack supports',
    ],
    applications: [
      'Commercial building construction and façade maintenance',
      'Heavy shoring, falsework, and concrete slab support',
      'Refinery, chemical plant, and industrial facility shutdowns',
      'Bridge construction, viaduct piers, and tunnel linings',
      'Shipbuilding repair yards and aircraft maintenance docks',
    ],
    standards: [
      { name: 'EN 12810', description: 'Facade scaffolding made of prefabricated components' },
      { name: 'EN 12811', description: 'Temporary works equipment — scaffolds performance requirements' },
      { name: 'BS 1139', description: 'Metal scaffolding — specifications for system scaffolding' },
    ],
    relatedProducts: ['ringlock-system', 'tube-fittings-scaffolding', 'scaffolding-accessories'],
  },

  {
    slug: 'ringlock-system',
    category: PRODUCT_CATEGORIES.SCAFFOLDING_SYSTEMS,
    name: 'Ring / Pin Lock Scaffolding System',
    shortDescription: 'Modular steel scaffolding system featuring rosette ring connections and locking pins for multi-directional access and complex structures.',
    description: `Ring Lock / Pin Lock scaffolding is a modular steel scaffolding system used for access, working platforms, shoring support, and temporary structures in construction and industrial projects worldwide.

Engineered with vertical standards fitted with rosette/ring connection plates at 500 mm intervals and cast ledger ends with captive wedge locking pins. The rosette features 8 connection points (4 small holes for 90° right angles and 4 large holes for variable diagonal bracing angles), offering unlimited flexibility for curved structures, tanks, complex industrial geometry, and high-rise facades.`,
    heroImage: '/src/assets/images/ringlock-scaffolding.jpg',
    gallery: ['/src/assets/images/ringlock-scaffolding.jpg', '/src/assets/images/hero-scaffolding.jpg'],
    specifications: [
      { label: 'Scaffolding System', value: 'Ring Lock / Pin Lock modular scaffolding' },
      { label: 'Material', value: 'High-strength steel (Q355 / S355JR grade)' },
      { label: 'Standard Mechanism', value: 'Vertical standards with rosette/ring connection and locking pins' },
      { label: 'Standard Spacing', value: 'Typically 1.0–2.5 m, depending on required bay size and structural design' },
      { label: 'Lift Height', value: 'Typically 0.5–2.0 m; commonly 2.0 m' },
      { label: 'Horizontal Members', value: 'Steel ledgers with compatible wedge locking connections' },
      { label: 'Base Support', value: 'Adjustable base jacks and heavy-duty base plates' },
      { label: 'Working Platform', value: 'Steel or aluminum scaffold planks / perforated anti-slip boards' },
      { label: 'Access Options', value: 'Ladders or modular stair towers with internal handrails' },
      { label: 'Safety Components', value: 'Guardrails, midrails, toe boards, and access safety gates' },
      { label: 'Finish', value: 'Hot-dip galvanized (HDG) or painted steel' },
      { label: 'Load Capacity', value: 'As per approved design and manufacturer certified load tables' },
      { label: 'Applications', value: 'Building construction, façade works, industrial plants, warehouses, maintenance, and access' },
    ],
    features: [
      'Rosette node accommodates up to 8 connection members per point',
      'Integrated captive wedge keys prevent loose parts on construction sites',
      'Optimal force distribution: high vertical capacity and rigid frame stability',
      'Adaptable to straight, curved, circular, and angular architectural geometries',
      'Hot-dip galvanized coating ensures resistance in harsh offshore and coastal climates',
      'Compliant with international safety specifications and EN 12810 / 12811 certified',
    ],
    applications: [
      'Complex building facades and high-rise structural envelopes',
      'Industrial maintenance in oil & gas refineries, power plants, and chemical units',
      'Bridge shoring, suspended access platforms, and marine docks',
      'Grandstands, concert stages, and temporary event seating structures',
      'Storage tank maintenance and spherical vessel access',
    ],
    standards: [
      { name: 'EN 12810', description: 'Prefabricated facade scaffold systems' },
      { name: 'EN 12811', description: 'Scaffolds — performance requirements and general design' },
      { name: 'ANSI/SSFI SC100-5/05', description: 'Standards for testing and rating scaffold assemblies' },
    ],
    relatedProducts: ['cuplock-scaffolding-system', 'tube-fittings-scaffolding', 'scaffolding-accessories'],
  },

  {
    slug: 'tube-fittings-scaffolding',
    category: PRODUCT_CATEGORIES.SCAFFOLDING_SYSTEMS,
    name: 'Tube & Fitting Scaffolding System',
    shortDescription: 'Traditional modular scaffolding system consisting of 48.3 mm high-strength steel tubes connected using drop-forged mechanical couplers.',
    description: `Tube & Fitting scaffolding is a versatile traditional modular scaffolding system consisting of high-strength steel tubes connected using mechanical couplers and clamps. It is suitable for construction, maintenance, access, and temporary support works where site conditions demand complete dimensional freedom.

Because couplers can be fastened at any position along the 48.3 mm diameter tubes, this system can wrap around irregular building profiles, accommodate uneven terrain, bridge complex obstacles, and adapt where prefabricated modular systems are constrained. Supplied with hot-dip galvanized or painted finish with drop-forged EN 74 compliant couplers.`,
    heroImage: '/src/assets/images/scaffold-tubes-fittings.jpg',
    gallery: ['/src/assets/images/scaffold-tubes-fittings.jpg', '/src/assets/images/hero-scaffolding.jpg'],
    specifications: [
      { label: 'Scaffolding System', value: 'Tube & Fitting scaffolding' },
      { label: 'Material', value: 'High-strength steel tubes (S235GT / S355 structural steel)' },
      { label: 'Tube Diameter', value: 'Typically 48.3 mm nominal outside diameter (OD)' },
      { label: 'Tube Thickness', value: 'Typically 3.2 mm or 4.0 mm, or as per approved design' },
      { label: 'Tube Lengths', value: 'Available in 1.0 m to 6.4 m lengths to suit required arrangements' },
      { label: 'Coupler Types', value: 'Right-angle (double), swivel, sleeve, and putlog approved couplers' },
      { label: 'Base Support', value: 'Adjustable screw base jacks and steel base plates' },
      { label: 'Working Platform', value: 'Steel or aluminum scaffold boards/planks' },
      { label: 'Access Solutions', value: 'Scaffold ladders or external stair towers as required' },
      { label: 'Safety Components', value: 'Guardrails, midrails, toe boards, and self-closing access gates' },
      { label: 'Finish', value: 'Hot-dip galvanized (HDG) or painted steel' },
      { label: 'Load Capacity', value: 'As per approved scaffolding design and certified load tables' },
      { label: 'Applications', value: 'Building construction, façade works, industrial plants, maintenance, temporary access, and support structures' },
    ],
    features: [
      'Complete geometric freedom for irregular structures, cantilevers, and tight spaces',
      'Standardized 48.3 mm OD tube compatible with universal couplers and accessories',
      'Drop-forged carbon steel couplers meeting EN 74-1 Class A and Class B ratings',
      'Hot-dip galvanized to EN ISO 1461 for long-term corrosion resistance',
      'Cost-effective and durable solution for industrial plant maintenance',
    ],
    applications: [
      'Heritage restoration with complex masonry contours',
      'Industrial refineries, boiler houses, and chemical plant piping racks',
      'Cantilevered platforms, bridging beams, and suspended scaffolds',
      'Heavy shoring, raking shores, and structural propping',
    ],
    standards: [
      { name: 'EN 39', description: 'Loose steel tubes for tube and coupler scaffolds — Technical delivery conditions' },
      { name: 'EN 74-1', description: 'Couplers, spigot pins and baseplates for use in falsework and scaffolds' },
      { name: 'BS 1139', description: 'Metal scaffolding — Specification for steel tube' },
    ],
    relatedProducts: ['scaffolding-accessories', 'scaffold-tube-48', 'right-angle-coupler'],
  },

  {
    slug: 'scaffolding-accessories',
    category: PRODUCT_CATEGORIES.SAFETY_ACCESSORIES,
    name: 'Scaffolding Components & Accessories',
    shortDescription: 'Complete 17-part component catalog: Standards, Ledgers, Transoms, Base Jacks, Couplers, Bracing, Boards, Guardrails, and Safety Gates.',
    description: `Scaffolding components and accessories are used to assemble, support, access, protect, and stabilize scaffolding systems for safe construction and maintenance works. Every single component in a scaffold assembly has an indispensable engineering purpose—removing or incorrectly installing a single component affects the structural load transfer, worker safety, and stability of the entire scaffold structure.

Tianjin Decent International Trade Co., Ltd. supplies the complete inventory of 17 essential components and accessories manufactured from suitable high-strength steel or aluminum, with hot-dip galvanized or approved protective finishes as applicable.`,
    heroImage: '/src/assets/images/ringlock-scaffolding.jpg',
    gallery: ['/src/assets/images/ringlock-scaffolding.jpg', '/src/assets/images/cuplock-system.jpg'],
    specifications: [
      { label: '1. Standards / Uprights', value: 'Vertical load-bearing members that transfer the combined self-weight and live load to the foundation.' },
      { label: '2. Ledgers', value: 'Horizontal members connecting standards longitudinally and supporting the intermediate structure.' },
      { label: '3. Transoms / Bearers', value: 'Transverse members that span between ledgers, directly supporting scaffold boards and platform loads.' },
      { label: '4. Base Plates', value: 'Provide a rigid, stable flat footing at the bottom of standards to distribute vertical loads over sole boards.' },
      { label: '5. Adjustable Base Jacks', value: 'Heavy-duty Acme threaded jacks used for precise leveling and height adjustment on uneven site grounds.' },
      { label: '6. Couplers / Clamps', value: 'High-tensile mechanical fittings used to securely connect tubes and structural members.' },
      { label: '7. Bracing', value: 'Diagonal members that provide lateral triangulation, shear stability, and prevent scaffold racking.' },
      { label: '8. Scaffold Boards / Planks', value: 'Perforated galvanized steel or aluminum boards that provide the safe working and walking platform.' },
      { label: '9. Guardrails', value: 'Horizontal barriers at platform perimeters that provide fall edge protection for workers.' },
      { label: '10. Toe Boards', value: 'Perimeter kick-plates that prevent dropped tools, fasteners, and loose materials from falling off platforms.' },
      { label: '11. Ladders / Stair Units', value: 'Engineered non-slip climbing systems providing safe access between scaffold working tiers.' },
      { label: '12. Access Gates', value: 'Self-closing spring-hinged barriers that control safe entry and exit from working platform ladder bays.' },
      { label: '13. Castor Wheels', value: 'Heavy-duty polyurethane or rubber locking wheels used for mobile scaffold towers where permitted.' },
      { label: '14. Swivel & Fixed Couplers', value: 'Drop-forged couplers used for connecting tubes at 90° right angles or arbitrary 360° brace angles.' },
      { label: '15. Joint Pins / Sleeve Couplers', value: 'Engineered alignment pins used to connect scaffold tubes or standards securely end-to-end.' },
      { label: '16. Scaffold Ties', value: 'Anchorage hardware that mechanically secures the scaffold frame to the building structure against wind loads.' },
      { label: '17. Netting & Scaffold Tags', value: 'Protective debris containment netting and color-coded safety inspection tags (SCAFFTAG system).' },
      { label: 'Material & Finish', value: 'High-strength carbon steel or aluminum alloy, with Hot-Dip Galvanized or approved protective finishes.' },
    ],
    features: [
      'Complete 17-point component catalog supplied from a single verified manufacturer',
      'Hot-dip galvanized finish across all structural steel items for maximum rust prevention',
      'Drop-forged coupler hardware tested to EN 74 Class A and B slip resistance standards',
      'Precision machined Acme threads on adjustable base jacks for smooth height leveling',
      'Non-slip perforated steel decking planks with integrated end hooks and safety lock pins',
      'Full compliance documentation and load tables available for civil engineering submittals',
    ],
    applications: [
      'Assembly of complete Cuplock, Ring-Lock, and Tube & Fitting scaffolding configurations',
      'Upgrading safety protocols with guardrails, toe boards, and self-closing access gates',
      'Façade anchorage and structural propping for high-rise commercial structures',
      'Industrial turnaround and shutdown access framing in power and processing plants',
    ],
    standards: [
      { name: 'EN 12811-1', description: 'Temporary works equipment — Scaffolds' },
      { name: 'EN 74-1', description: 'Couplers, spigot pins and baseplates for scaffolding' },
      { name: 'BS 1139-2.2', description: 'Access and working scaffolds — Aluminium couplers and fittings' },
    ],
    relatedProducts: ['cuplock-scaffolding-system', 'ringlock-system', 'tube-fittings-scaffolding'],
  },

  {
    slug: 'scaffold-tube-48',
    category: PRODUCT_CATEGORIES.TUBES_FITTINGS,
    name: '48.3 mm Scaffold Tubes',
    shortDescription: 'Hot-dip galvanized high-strength steel scaffold tubes conforming to EN 39 / BS 1139 standards.',
    description: `Standard 48.3 mm outside diameter scaffolding tubes manufactured from high-yield carbon steel. Available in standard 3.2 mm and 4.0 mm wall thicknesses with lengths up to 6.4 meters. Fully hot-dip galvanized for extreme weather resistance.`,
    heroImage: '/src/assets/images/scaffold-tubes-fittings.jpg',
    gallery: ['/src/assets/images/scaffold-tubes-fittings.jpg'],
    specifications: [
      { label: 'Outside Diameter', value: '48.3 mm' },
      { label: 'Wall Thickness', value: '3.2 mm / 4.0 mm nominal' },
      { label: 'Steel Grade', value: 'S235GT / S355 Structural Steel' },
      { label: 'Surface Finish', value: 'Hot-Dip Galvanized to EN ISO 1461 (≥ 40 µm)' },
      { label: 'Standard Lengths', value: '1.0 m, 2.0 m, 3.0 m, 4.0 m, 5.0 m, 6.0 m, 6.4 m' },
    ],
    features: [
      'High structural rigidity and tensile strength',
      'Precision dimensional control on outer diameter',
      'Hot-dip galvanized coating inside and outside',
    ],
    applications: [
      'Tube & fitting scaffolding structures',
      'Structural ties, bracing, and guardrails',
      'Industrial falsework and shoring',
    ],
    standards: [
      { name: 'EN 39', description: 'Loose steel tubes for tube and coupler scaffolds' },
      { name: 'BS 1139', description: 'Metal scaffolding specifications' },
    ],
    relatedProducts: ['right-angle-coupler', 'swivel-coupler', 'base-jack'],
  },

  {
    slug: 'right-angle-coupler',
    category: PRODUCT_CATEGORIES.TUBES_FITTINGS,
    name: 'Right-Angle Coupler (Double Coupler)',
    shortDescription: 'Drop-forged carbon steel right-angle coupler connecting two 48.3 mm tubes at 90 degrees.',
    description: `Drop-forged high-strength double coupler designed to connect two 48.3 mm scaffold tubes at a fixed 90-degree right angle. Tested to exceed EN 74-1 Class B slip-resistance ratings with zinc electroplating or hot-dip galvanizing.`,
    heroImage: '/src/assets/images/scaffold-tubes-fittings.jpg',
    gallery: ['/src/assets/images/scaffold-tubes-fittings.jpg'],
    specifications: [
      { label: 'Connection Angle', value: 'Fixed 90°' },
      { label: 'Tube Diameter', value: '48.3 mm × 48.3 mm' },
      { label: 'Material', value: 'Drop-Forged Carbon Steel' },
      { label: 'Tightening Torque', value: '54 Nm' },
      { label: 'Standard Compliance', value: 'EN 74-1 Class B Certified' },
    ],
    features: [
      'Drop-forged body for maximum load resistance',
      'Corrosion resistant zinc coating',
      'High slip load performance',
    ],
    applications: [
      'Connecting standards to ledgers at 90 degrees',
      'Structural frame assembly',
    ],
    standards: [
      { name: 'EN 74-1', description: 'Couplers for scaffolding Class B' },
    ],
    relatedProducts: ['swivel-coupler', 'scaffold-tube-48', 'base-jack'],
  },

  {
    slug: 'swivel-coupler',
    category: PRODUCT_CATEGORIES.TUBES_FITTINGS,
    name: 'Swivel Coupler',
    shortDescription: 'Drop-forged steel universal coupler for connecting two 48.3 mm tubes at any arbitrary angle.',
    description: `Heavy-duty drop-forged swivel coupler allowing two 48.3 mm scaffold tubes to be clamped at any required angle. Essential for diagonal bracing, ledger bracing, and triangular structural ties.`,
    heroImage: '/src/assets/images/scaffold-tubes-fittings.jpg',
    gallery: ['/src/assets/images/scaffold-tubes-fittings.jpg'],
    specifications: [
      { label: 'Connection Angle', value: '360° Swivel rotation' },
      { label: 'Tube Diameter', value: '48.3 mm × 48.3 mm' },
      { label: 'Material', value: 'Drop-Forged Carbon Steel' },
      { label: 'Standard Compliance', value: 'EN 74-1 Class A Certified' },
    ],
    features: [
      '360-degree rotation for diagonal bracing',
      'Drop-forged heavy wall construction',
      'Zinc electroplated or HDG finish',
    ],
    applications: [
      'Diagonal sway bracing',
      'Plan bracing and tie-back tubes',
    ],
    standards: [
      { name: 'EN 74-1', description: 'Scaffolding couplers Class A' },
    ],
    relatedProducts: ['right-angle-coupler', 'scaffold-tube-48'],
  },

  {
    slug: 'base-jack',
    category: PRODUCT_CATEGORIES.TUBES_FITTINGS,
    name: 'Adjustable Base Jack',
    shortDescription: 'Heavy-duty threaded screw base jack for leveling scaffolding standards on uneven site ground.',
    description: `Solid or hollow stem threaded screw jack fitted with an integrated steel base plate. Enables precise vertical height adjustment and secure load transfer from the standard down to ground sills or foundation blocks.`,
    heroImage: '/src/assets/images/scaffold-tubes-fittings.jpg',
    gallery: ['/src/assets/images/scaffold-tubes-fittings.jpg'],
    specifications: [
      { label: 'Stem Diameter', value: '38 mm / 48 mm' },
      { label: 'Base Plate Size', value: '150 mm × 150 mm × 6 mm' },
      { label: 'Adjustment Range', value: '300 mm – 600 mm' },
      { label: 'Surface Finish', value: 'Hot-Dip Galvanized / Electro-galvanized' },
    ],
    features: [
      'Heavy-duty Acme trapezoidal thread for smooth adjustment',
      'Punched base plate holes for nail-securing to timber sole boards',
      'High axial vertical load capacity',
    ],
    applications: [
      'Bottom foundation leveling for Cuplock, Ringlock, and Tube scaffolds',
    ],
    standards: [
      { name: 'EN 12811-1', description: 'Temporary works equipment' },
    ],
    relatedProducts: ['scaffold-tube-48', 'cuplock-scaffolding-system'],
  },

  {
    slug: 'aluminum-platform',
    category: PRODUCT_CATEGORIES.PLATFORMS,
    name: 'Aluminum Scaffold Platform Board',
    shortDescription: 'Lightweight aluminum working deck with perforated anti-slip surface and safety locking hooks.',
    description: `High-strength aluminum alloy scaffold platform board designed for ease of handling, corrosion resistance, and safe worker footing. Features non-slip textured surfaces, water-drainage perforations, and wind-lock clips.`,
    heroImage: '/src/assets/images/platform-board.jpg',
    gallery: ['/src/assets/images/platform-board.jpg'],
    specifications: [
      { label: 'Material', value: 'Aluminum Alloy 6061-T6 / 6082-T6' },
      { label: 'Platform Width', value: '320 mm / 480 mm / 600 mm' },
      { label: 'Lengths Available', value: '1.5 m, 2.0 m, 2.5 m, 3.0 m' },
      { label: 'Load Rating', value: 'EN 12811 Class 3 (2.0 kN/m²) to Class 5' },
    ],
    features: [
      'Lightweight aluminum design reduces worker handling fatigue',
      'Perforated anti-slip profile for wet and oily environments',
      'Integrated wind-lock safety hooks',
    ],
    applications: [
      'Working platforms on facade scaffolding and mobile towers',
    ],
    standards: [
      { name: 'EN 12811', description: 'Temporary works equipment — Working platforms' },
    ],
    relatedProducts: ['scaffold-boards', 'aluminum-tower'],
  },

  {
    slug: 'aluminum-tower',
    category: PRODUCT_CATEGORIES.MOBILE_TOWERS,
    name: 'Mobile Aluminum Scaffolding Tower',
    shortDescription: 'Free-standing modular mobile access tower in high-grade aluminum with lockable castor wheels.',
    description: `Lightweight modular mobile access tower engineered for rapid tool-free assembly. Constructed from high-tensile structural aluminum alloy tubes with dual-locking castor wheels, outriggers, internal access ladders, and trapdoor platforms.`,
    heroImage: '/src/assets/images/aluminum-tower.jpg',
    gallery: ['/src/assets/images/aluminum-tower.jpg'],
    specifications: [
      { label: 'Tower Material', value: 'Structural Aluminum Alloy' },
      { label: 'Working Heights', value: 'Up to 14.0 meters' },
      { label: 'Wheel Specification', value: '200 mm dual-locking polyurethane castors' },
      { label: 'Compliance Standard', value: 'EN 1004 Certified' },
    ],
    features: [
      'Tool-free snap-lock assembly mechanism',
      'Lightweight components easily transported through standard doorways',
      'Heavy-duty lockable castors for safe repositioning',
    ],
    applications: [
      'Interior building fit-out, ceiling installation, and HVAC work',
      'Exterior maintenance, glazing, and industrial plant access',
    ],
    standards: [
      { name: 'EN 1004', description: 'Mobile access and working towers made of prefabricated elements' },
    ],
    relatedProducts: ['aluminum-platform', 'aluminum-extension-ladder'],
  },

  {
    slug: 'aluminum-extension-ladder',
    category: PRODUCT_CATEGORIES.LADDERS,
    name: 'Industrial Aluminum Extension Ladder',
    shortDescription: 'Heavy-duty 2-section and 3-section aluminum extension ladders conforming to EN 131 Professional standards.',
    description: `Industrial-grade aluminum extension ladder featuring D-shaped anti-slip rungs, robust guide brackets, manual rope and pulley deployment, and swivel safety shoes with rubber treads for maximum surface grip.`,
    heroImage: '/src/assets/images/warehouse.jpg',
    gallery: ['/src/assets/images/warehouse.jpg'],
    specifications: [
      { label: 'Ladder Type', value: '2-section / 3-section push-up and rope-operated' },
      { label: 'Extended Lengths', value: '4.0 m up to 12.0 m' },
      { label: 'Max Work Load', value: '150 kg (EN 131 Professional)' },
      { label: 'Material', value: 'Extruded Aluminum Alloy' },
    ],
    features: [
      'Deep serrated D-rungs for secure grip and comfort',
      'Heavy-duty cast alloy gravity locks',
      'Anti-slip swivel rubber safety feet',
    ],
    applications: [
      'Building inspection, telecom cabling, and construction access',
    ],
    standards: [
      { name: 'EN 131', description: 'Ladders — Professional use' },
    ],
    relatedProducts: ['aluminum-tower', 'scaffolding-accessories'],
  },
];
