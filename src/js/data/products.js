/**
 * TIANJIN DECENT INTERNATIONAL TRADE CO., LTD. — PRODUCT DATA MODEL
 * Central product database covering Steel Coils, Structural Steel Profiles, 
 * Modular Scaffolding Systems, and Accessories.
 */

export const PRODUCT_CATEGORIES = {
  STEEL_COILS: 'steel-coils',
  STRUCTURAL_PROFILES: 'structural-profiles',
  STEEL_PIPES: 'steel-pipes',
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
    label: 'Structural Steel',
    shortLabel: 'Structural Steel',
    description: 'H-Beams, I-Beams, Channels, Angles, Square/Round Bars, Steel Flat Plates, and T-Sections.',
    image: '/src/assets/images/structural-steel-profiles.jpg',
  },
  [PRODUCT_CATEGORIES.STEEL_PIPES]: {
    label: 'Steel Pipes',
    shortLabel: 'Steel Pipes',
    description: 'Round Pipe (CHS), Square & Rectangular Pipe (RHS/SHS), ERW Pipe, Seamless Pipe, Galvanized Pipe, and Painted Pipe.',
    image: '/src/assets/images/seamless-steel-pipes.jpg',
  },
  [PRODUCT_CATEGORIES.SCAFFOLDING_SYSTEMS]: {
    label: 'Scaffolding Systems',
    shortLabel: 'Scaffolding',
    description: 'Cup Lock, Ring / Pin Lock, and Tube & Fitting modular scaffolding systems for building, access, and industrial shoring.',
    image: '/src/assets/images/cuplock-scaffolding-setup.jpg',
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
    image: '/src/assets/images/aluminum-extension-ladder.jpg',
  },
  [PRODUCT_CATEGORIES.SAFETY_ACCESSORIES]: {
    label: 'Scaffolding Accessories & Safety',
    shortLabel: 'Safety & Parts',
    description: 'Standards, ledgers, transoms, base plates, base jacks, couplers, braces, boards, and access gates.',
    image: '/src/assets/images/scaffolding-accessories-collection.jpg',
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
      { label: 'Spangle Structure', value: 'Regular Spangle, Minimized Spangle, Zero Spangle' },
      { label: 'Coil Width', value: '700–1250 mm; Strip: 20–600 mm OR as required by project/shop drawings' },
      { label: 'Mechanical Properties', value: 'Complies with ASTM A653/A653M or EN 10346 grade parameters' },
      { label: 'Edge Condition', value: 'Mill edge or slit edge as specified' },
      { label: 'Delivery Protection', value: 'Securely packed with waterproof paper and metal banding against moisture and mechanical damage' },
      { label: 'Service Life', value: '10–50 years under standard environmental exposure' },
    ],
    features: [
      'Available in Regular Spangle, Minimized Spangle, and Zero Spangle surface finishes',
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
      { name: 'JIS G3312', description: 'Prepainted hot-dip zinc-coated steel sheets and coils' },
    ],
    relatedProducts: ['pre-galvanized-steel-coils', 'hr-steel-coils', 'structural-steel-profiles'],
  },

  // ── STRUCTURAL STEEL PROFILES ─────────────────────────────

  {
    slug: 'structural-steel-profiles',
    category: PRODUCT_CATEGORIES.STRUCTURAL_PROFILES,
    name: 'Structural Steel Profiles & Sections',
    shortDescription: 'Comprehensive range of fundamental structural sections: H-Beams, I-Beams, Channels, Angle Sections, Square/Round Bars, Flat Plates, and T-Sections.',
    description: `Structural steel sections are fundamental engineering components in modern buildings, bridges, industrial plants, warehouse facilities, and infrastructure projects. Each profile manufactured and supplied by Tianjin Decent International Trade Co., Ltd. is uniquely shaped to withstand specific mechanical loads, moments of inertia, and shear forces with maximum efficiency.

Our structural profiles portfolio covers wide-flange H-Beams, standard I-Beams, C-Channels, L-Angles, Square and Round Bars, Steel Flat Plates, and T-Sections. Sourced in standard lengths of 6 m, 12 m, or cut-to-length as required by project drawings. (Note: For tubular products and hollow sections, please view our dedicated Steel Pipes catalog).`,
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
      { label: 'Material Grades', value: 'Q235B, Q355B, S235JR, S275JR, S355JR, ASTM A36, A572 Gr 50, SS400' },
      { label: 'Standard Lengths', value: '6.0 m, 12.0 m, or precision cut-to-length as required' },
      { label: 'Surface Finish', value: 'Mill finish / black surface, shot-blasted (Sa 2.5), shop primed, or Hot-Dip Galvanized' },
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
    relatedProducts: ['seamless-steel-pipes', 'welded-erw-steel-pipes', 'hr-steel-coils'],
  },

  // ── STEEL PIPES (HOT DIP, WELDED, SEAMLESS, SPIRAL & COMPOSITE) ───────────

  {
    slug: 'hot-dip-galvanized-steel-pipe',
    category: PRODUCT_CATEGORIES.STEEL_PIPES,
    name: 'Hot-Dip Galvanized Steel Pipe',
    shortDescription: 'DN15–DN300 hot-dip galvanized round steel pipes for low-pressure fluid transportation, gas, water, fire protection, and structural framing.',
    description: `Hot-dip galvanized steel pipe supplied by Tianjin Decent International Trade Co., Ltd. is produced by immersing cleaned carbon steel pipe into a high-temperature molten zinc bath (approx. 450°C), creating a dense, metallurgically bonded zinc-iron alloy barrier with a pure zinc outer layer.

Engineered for exceptional corrosion resistance, superior impact resistance, and extended service life even in humid, coastal, or mildly corrosive atmospheric conditions. Available in standard lengths of 5.8 m, 6.0 m, 11.8 m, and 12.0 m with threaded & coupled, grooved, or plain ends.`,
    heroImage: '/src/assets/images/hot-dip-galvanized-steel-pipe.jpg',
    gallery: [
      '/src/assets/images/hot-dip-galvanized-steel-pipe.jpg',
      '/src/assets/images/straight-seam-welded-steel-pipe.jpg',
      '/src/assets/images/galvanized-seamless-steel-pipe.jpg'
    ],
    specifications: [
      { label: 'Specifications', value: 'DN15–DN300 (Outer Diameter: 21.3–323.9 mm)' },
      { label: 'Uses & Applications', value: 'Widely used in water, gas, air, oil and steam and other low-pressure fluid transportation and mechanical structure' },
      { label: 'Wall Thickness', value: '2.0–12.0 mm (Sch 10, Sch 20, Sch 40 / STD)' },
      { label: 'Applicable Standards', value: 'ASTM A53 (Gr. A/B), BS 1387, EN 10255, GB/T 3091, JIS G3452' },
      { label: 'Zinc Coating Mass', value: '200–500 g/m² (uniform hot dip molten bath galvanization)' },
      { label: 'Steel Grades', value: 'Q195, Q215, Q235B, Q345B, Grade A, Grade B' },
      { label: 'End Treatments', value: 'Plain end, Threaded with couplings/sockets (BSPT/NPT), Roll Grooved for fire protection' },
      { label: 'Length Range', value: '5.8 m, 6.0 m, 11.8 m, 12.0 m (custom fixed lengths on request)' },
      { label: 'Quality Verification', value: '100% Hydrostatic testing (up to 5.0 MPa), Eddy current NDT, Mill Test Certificate (EN 10204 3.1)' },
      { label: 'Packaging', value: 'Hexagonal bundles strapped with steel bands, plastic end protection caps fitted' },
    ],
    features: [
      'Comprehensive diameter coverage from DN15 (1/2") up to DN300 (12")',
      'Uniform metallurgical zinc-iron alloy coating resistant to flaking and mechanical damage',
      'High internal cleanliness suitable for municipal drinking water and fire sprinkler systems',
      'Flexible end terminations: threaded with matching malleable iron couplings or roll grooved',
      'Full mill test certification documenting chemical composition and hydrostatic test verification',
      'Cost-effective alternative to stainless steel for water, air, HVAC, and gas distribution',
    ],
    applications: [
      'Municipal water supply, HVAC chilled water, and heating circuit lines',
      'Low-pressure natural gas, coal gas, and liquefied petroleum gas piping',
      'Automatic fire sprinkler networks and fire protection standpipes',
      'Agricultural greenhouse framing, irrigation tubing, and fence posts',
      'Mechanical structural columns, handrails, scaffolding, and canopy frames',
    ],
    standards: [
      { name: 'ASTM A53 / A53M', description: 'Standard Specification for Pipe, Steel, Black and Hot-Dipped, Zinc-Coated, Welded and Seamless' },
      { name: 'BS 1387 / EN 10255', description: 'Non-alloy steel tubes suitable for welding and threading' },
      { name: 'GB/T 3091', description: 'Welded steel pipes for low pressure fluid delivery' },
    ],
    relatedProducts: ['straight-seam-welded-steel-pipe', 'galvanized-seamless-steel-pipe', 'plastic-coated-composite-steel-pipe'],
  },

  {
    slug: 'straight-seam-welded-steel-pipe',
    category: PRODUCT_CATEGORIES.STEEL_PIPES,
    name: 'Straight Seam High-Frequency Welded Steel Pipe (ERW)',
    shortDescription: 'DN15–DN300 high-frequency longitudinal ERW welded steel pipe for water, gas, oil transmission, structural columns, and drilling tubes.',
    description: `Straight seam high-frequency welded steel pipe (HFW / ERW) from Tianjin Decent International Trade Co., Ltd. is manufactured from premium hot-rolled carbon steel strip formed continuously into cylindrical profiles and longitudinally joined using high-frequency induction electrical resistance welding.

Both the outer and inner weld beads are cleanly trimmed to ensure smooth fluid flow, and the entire heat-affected zone undergoes in-line heat treatment. Widely utilized for municipal fluids, oil and gas gathering lines, rotary pressure drill tubes, and heavy structural engineering.`,
    heroImage: '/src/assets/images/straight-seam-welded-steel-pipe.jpg',
    gallery: [
      '/src/assets/images/straight-seam-welded-steel-pipe.jpg',
      '/src/assets/images/hot-dip-galvanized-steel-pipe.jpg',
      '/src/assets/images/seamless-steel-pipes.jpg'
    ],
    specifications: [
      { label: 'Specifications', value: 'DN15–DN300 (Outer Diameter: 21.3–325 mm)' },
      { label: 'Uses & Applications', value: 'Widely used in water, gas, air, oil and steam and other low-pressure fluid transportation and mechanical structure' },
      { label: 'Extended Applications', value: 'Oil and gas line pipe, oil pipe, rotary pressure drill pipe, marine large diameter high frequency straight seam welded pipe, mechanical pipe and other special pipes' },
      { label: 'Wall Thickness', value: '1.5–14.0 mm' },
      { label: 'Steel Grades', value: 'Q195, Q215, Q235B, Q345B, Q355B, API 5L Gr. B, X42, X52, X60' },
      { label: 'Applicable Standards', value: 'API Spec 5L, ASTM A53, ASTM A500, EN 10219, GB/T 3091, GB/T 13793' },
      { label: 'Surface Finish', value: 'Bare mill finish, Lightly oiled, Black anti-rust paint, or Pre-galvanized' },
      { label: 'Length Range', value: '5.8 m, 6.0 m, 11.8 m, 12.0 m, or customized precision cut lengths' },
      { label: 'End Treatments', value: 'Square cut plain ends or beveled ends (30°–35°) with end protection caps' },
      { label: 'Non-Destructive Testing', value: 'On-line ultrasonic weld testing, eddy current inspection, and hydrostatic verification' },
    ],
    features: [
      'Advanced high-frequency induction welding producing 100% joint penetration',
      'Internal and external weld bead removal for seamless fluid dynamic performance',
      'High dimensional accuracy with minimal wall thickness variation and uniform roundness',
      'Comprehensive grade selection from commercial mild carbon steel up to high-yield API X60',
      'Suitable for threading, grooving, flange welding, and cold bending fabrication',
    ],
    applications: [
      'Civil and municipal water, coal gas, air, and low-pressure steam pipelines',
      'Oilfield gathering pipelines, petroleum transport, and rotary drilling casing pipes',
      'Offshore marine structures, harbor piling, and industrial machinery shafts',
      'Prefabricated building columns, stadium space frames, and highway signage bridges',
      'Automotive drive shafts, shock absorber tubes, and structural cross members',
    ],
    standards: [
      { name: 'API Spec 5L (PSL1/PSL2)', description: 'Specification for Line Pipe (Gr. B, X42 through X65)' },
      { name: 'ASTM A53 / A500', description: 'Specification for Pipe, Steel, Black and Hot-Dipped, Welded and Seamless' },
      { name: 'EN 10219', description: 'Cold formed welded structural hollow sections of non-alloy and fine grain steels' },
    ],
    relatedProducts: ['hot-dip-galvanized-steel-pipe', 'galvanized-seamless-steel-pipe', 'spiral-submerged-arc-welded-steel-pipe'],
  },

  {
    slug: 'plastic-coated-composite-steel-pipe',
    category: PRODUCT_CATEGORIES.STEEL_PIPES,
    name: 'Plastic-Coated Composite Steel Pipe (Coated Composite Pipe)',
    shortDescription: 'DN15–DN2000 internal and external plastic-coated (Epoxy / PE) composite steel pipes for fire protection water, municipal supply, and chemical fluids.',
    description: `Plastic-coated composite steel pipe supplied by Tianjin Decent International Trade Co., Ltd. marries the mechanical strength, high pressure containment, and rigid structural integrity of steel pipe with the superior anti-corrosion, anti-scaling, and friction-reducing properties of advanced polymers.

Produced by preheating the steel pipe and electrostatically fusing thermosetting Epoxy Resin (EP) or thermoplastic Polyethylene (PE) onto internal and external surfaces. Widely recognized as the premier solution for fire sprinkler systems, aggressive chemical fluid transmission, and potable water networks.`,
    heroImage: '/src/assets/images/plastic-coated-composite-steel-pipe.jpg',
    gallery: [
      '/src/assets/images/plastic-coated-composite-steel-pipe.jpg',
      '/src/assets/images/hot-dip-galvanized-steel-pipe.jpg',
      '/src/assets/images/straight-seam-welded-steel-pipe.jpg'
    ],
    specifications: [
      { label: 'Specifications', value: 'Plastic composite pipe: DN15–DN2000 | Socket-coated tubes: DN100–DN1600' },
      { label: 'Uses & Applications', value: 'Widely used in fire water supply systems, building water supply transportation, chemical fluid transportation, threading protection and other fields' },
      { label: 'Coating Materials', value: 'High-adhesion Epoxy Resin (EP) powder / Polyethylene (PE) coating' },
      { label: 'Coating Thickness', value: 'Internal: 300–800 µm | External: 350–1,000 µm' },
      { label: 'Working Pressure', value: 'PN 1.6 MPa, 2.5 MPa, up to 6.4 MPa' },
      { label: 'Temperature Range', value: '-30°C to +110°C (Epoxy) | -40°C to +80°C (Polyethylene)' },
      { label: 'Connection Methods', value: 'Grooved mechanical couplings, Flanged connections, Bimetal weld fittings, Socket connections' },
      { label: 'Applicable Standards', value: 'CJ/T 120, GB/T 5135.20, NFPA 13 (Fire Sprinkler), AWWA C213' },
      { label: 'Corrosion Resistance', value: 'Resistant to acids, alkalis, saline water, soil microorganisms, and chemical oxidizers' },
      { label: 'Flow Efficiency', value: 'Roughness coefficient n=0.008–0.009 (20% higher hydraulic flow than bare steel)' },
    ],
    features: [
      'Dual material synergy: carbon steel core delivers high pressure; polymer skin eliminates rust',
      'Smooth internal wall prevents scaling, bio-fouling, and friction head loss',
      'Zero pipe corrosion or red water contamination in municipal and potable water networks',
      'High temperature and flame retardant properties formulated for UL/NFPA fire sprinkler lines',
      'Exceptional electrical insulation protecting cables in underground electrical ducting',
    ],
    applications: [
      'Commercial and industrial automatic fire sprinkler systems (red epoxy coated)',
      'Municipal potable water mains, secondary water distribution, and sewage piping',
      'Chemical fluid transportation, acid/alkali discharge lines, and mining slurry pipelines',
      'Subway tunnels, power cables, and communication optical fiber threading protection pipes',
      'Desalination plants, marine seawater cooling lines, and industrial effluent conduits',
    ],
    standards: [
      { name: 'CJ/T 120', description: 'Plastic coated composite steel pipe for water supply' },
      { name: 'GB/T 5135.20', description: 'Automatic sprinkler system — Part 20: Pre-coated steel pipe' },
      { name: 'AWWA C213', description: 'Fusion-Bonded Epoxy Coating for the Interior and Exterior of Steel Water Pipelines' },
    ],
    relatedProducts: ['hot-dip-galvanized-steel-pipe', 'straight-seam-welded-steel-pipe', 'galvanized-seamless-steel-pipe'],
  },

  {
    slug: 'galvanized-seamless-steel-pipe',
    category: PRODUCT_CATEGORIES.STEEL_PIPES,
    name: 'Galvanized Seamless Steel Pipe',
    shortDescription: 'DN22–DN325 hot-dip galvanized seamless carbon steel pipe for petrochemical pipelines, high-voltage power stations, bridges, and building structures.',
    description: `Galvanized seamless steel pipe supplied by Tianjin Decent International Trade Co., Ltd. is manufactured from solid hot-rolled or cold-drawn carbon steel billets without longitudinal or spiral welds, followed by immersion in a precision hot-dip zinc galvanization bath.

Combines the flawless burst strength and high pressure integrity of seamless tubing with the sacrificial atmospheric protection of hot-dip zinc. Extensively specified in high-voltage substations, petrochemical transmission, and heavy load-bearing structural columns.`,
    heroImage: '/src/assets/images/galvanized-seamless-steel-pipe.jpg',
    gallery: [
      '/src/assets/images/galvanized-seamless-steel-pipe.jpg',
      '/src/assets/images/hot-dip-galvanized-steel-pipe.jpg',
      '/src/assets/images/seamless-steel-pipes.jpg'
    ],
    specifications: [
      { label: 'Specifications', value: 'DN22–DN325 (Wall Thickness: SCH20 to SCH160 / XXS)' },
      { label: 'Uses & Applications', value: 'Widely used in construction, electric power, petrochemical and other fields' },
      { label: 'Construction Use', value: 'Commonly used in building load-bearing structures, steel structures and construction equipment, such as bridges, steel structure houses, etc.' },
      { label: 'Power Industry Use', value: 'Manufacturing of power equipment, such as power transmission, substations, converter stations, etc.' },
      { label: 'Petrochemical Industry', value: 'Pipelines for transporting oil, natural gas and other chemical media' },
      { label: 'Infrastructure & Municipal', value: 'Municipal drainage works, road traffic signals, airports and seaport docks' },
      { label: 'Standards Conformance', value: 'ASTM A106, ASTM A53, API Spec 5L, GB/T 8163, GB/T 3087, DIN 1629' },
      { label: 'Steel Grades', value: 'Grade B, A106B, A53B, Q235B, Q345B, 20#, 45#' },
      { label: 'Zinc Coating Thickness', value: '55–100 µm (approx. 400–700 g/m² hot-dip zinc layer)' },
      { label: 'End Finish', value: 'Plain end, beveled ends (30°–35°), threaded and coupled, roll grooved' },
    ],
    features: [
      '100% seamless cylindrical body with zero seam failure risk under cyclic high pressures',
      'Heavy hot-dip galvanized protective layer prevents atmospheric and coastal marine corrosion',
      'Uniform grain structure with certified tensile yield and Charpy V-notch impact toughness',
      'Engineered for critical high-temperature and sub-zero service applications',
      'Supplied with full Mill Test Certificates (MTC EN 10204 3.1) and ultrasonic NDT reports',
    ],
    applications: [
      'High-pressure chemical, refinery, hydrocarbon, and natural gas transmission lines',
      'High-voltage electric transmission line tubular poles, substations, and gantry towers',
      'Bridge foundation micropiles, highway gantry trusses, and airport terminal space frames',
      'Boiler feed water lines, steam distribution mains, and heat exchanger bundles',
      'Seaport dock fender tubes, mooring dolphin piles, and offshore structural jackets',
    ],
    standards: [
      { name: 'ASTM A106 / A53', description: 'Seamless Carbon Steel Pipe for High-Temperature Service' },
      { name: 'API Spec 5L', description: 'Specification for Line Pipe (Gr. B, X42–X65 Seamless)' },
      { name: 'GB/T 8163', description: 'Seamless steel tubes for liquid service' },
    ],
    relatedProducts: ['hot-dip-galvanized-steel-pipe', 'seamless-steel-pipes', 'spiral-submerged-arc-welded-steel-pipe'],
  },

  {
    slug: 'spiral-submerged-arc-welded-steel-pipe',
    category: PRODUCT_CATEGORIES.STEEL_PIPES,
    name: 'Spiral Seam Double-Sided Submerged Arc Welded Steel Pipe (SSAW / HSAW)',
    shortDescription: 'φ219–2020 mm double-sided submerged arc welded spiral steel pipes for long-distance oil/gas pipelines, urban water transmission, and foundation piling.',
    description: `Spiral seam double-sided submerged arc welded steel pipe (SSAW / HSAW) from Tianjin Decent International Trade Co., Ltd. is continuously manufactured by spirally forming hot-rolled carbon steel strip coils into wide-diameter cylinders, simultaneously welding both the interior and exterior seams using automated submerged arc welding (SAW).

Allows efficient production of large diameter pipes (from 219 mm up to 2,020 mm) with exceptional hoop strength, uniform wall thickness, and precise roundness. Widely deployed in national oil and gas cross-country trunklines, urban water grids, and deep-foundation piling.`,
    heroImage: '/src/assets/images/spiral-submerged-arc-welded-steel-pipe.jpg',
    gallery: [
      '/src/assets/images/spiral-submerged-arc-welded-steel-pipe.jpg',
      '/src/assets/images/straight-seam-welded-steel-pipe.jpg',
      '/src/assets/images/galvanized-seamless-steel-pipe.jpg'
    ],
    specifications: [
      { label: 'Specifications', value: 'φ219–2020 mm, wall thickness up to 20 mm' },
      { label: 'Uses & Applications', value: 'Mainly used for oil, natural gas and other pressure-bearing long-distance pipelines, can also be used for water, gas, air, heating steam and other ordinary fluid transportation, and can be used in piling, structure and other construction fields' },
      { label: 'Wall Thickness Range', value: '5.0 mm up to 20.0 mm' },
      { label: 'Steel Grades', value: 'Q235B, Q345B, Q355B, API 5L Gr. B through X70 (PSL1 & PSL2)' },
      { label: 'Applicable Standards', value: 'API Spec 5L, ASTM A252 (Piling), SY/T 5037, GB/T 9711, EN 10217-1' },
      { label: 'Production Process', value: 'Continuous spiral roll forming with double-sided submerged arc welding (internal & external beads)' },
      { label: 'Welding Quality Control', value: 'Weld gap controlled at 1–3 mm; 100% online X-ray fluoroscopy and ultrasonic NDT' },
      { label: 'Hydrostatic Test', value: '100% pipe-by-pipe hydrostatic pressure testing up to standard calculation pressure' },
      { label: 'Length Range', value: 'Standard 12 m, random lengths 6 m to 18 m (custom pile lengths available)' },
      { label: 'External Coating Options', value: '3LPE (Three-layer Polyethylene), FBE (Fusion Bonded Epoxy), Bitumen, Bare mill' },
    ],
    features: [
      'Massive diameter range up to 2,020 mm manufactured from standard-width steel strip coils',
      'Spiral weld geometry distributes circumferential internal pressures across diagonal seams',
      'Outstanding pressure-bearing capability verified by ultrasonic, radiographic, and hydrostatic tests',
      'High structural bending rigidity making it optimal for civil bridge foundation friction piles',
      'Highly economical per meter cost for large-volume municipal water transmission and PEB piling',
    ],
    applications: [
      'Long-distance cross-country oil, gas, petroleum, and hydrocarbon trunk transmission pipelines',
      'Urban municipal water supply, raw water diversion aqueducts, and wastewater discharge mains',
      'District heating steam circuits and thermal power plant circulating cooling water conduits',
      'Bridge pier foundations, deep harbor dock pilings, highway embankment piles, and offshore structures',
      'Industrial ductwork, ventilation air mains, and metallurgical chimney flues',
    ],
    standards: [
      { name: 'API Spec 5L (PSL1/PSL2)', description: 'Specification for Line Pipe (Gr. B, X42 to X70)' },
      { name: 'ASTM A252', description: 'Standard Specification for Welded and Seamless Steel Pipe Piles' },
      { name: 'GB/T 9711', description: 'Petroleum and natural gas industries — Steel pipe for pipeline transportation systems' },
    ],
    relatedProducts: ['straight-seam-welded-steel-pipe', 'plastic-coated-composite-steel-pipe', 'galvanized-seamless-steel-pipe'],
  },

  {
    slug: 'hot-dip-galvanized-square-rectangular-pipe',
    category: PRODUCT_CATEGORIES.STEEL_PIPES,
    name: 'Hot-Dip Galvanized Square & Rectangular Pipe (SHS / RHS)',
    shortDescription: '25x25mm–200x200mm square and 25x50mm–150x200mm rectangular hot-dip galvanized hollow sections for curtain walls, solar PV brackets, and vehicle chassis.',
    description: `Hot-dip galvanized square and rectangular steel pipe (SHS / RHS) from Tianjin Decent International Trade Co., Ltd. is manufactured by immersing cold-formed square and rectangular structural hollow sections into a molten zinc bath after rigorous degreasing and pickling pre-treatments.

The resulting metallurgical zinc-iron alloy layer adheres firmly to the outer and inner surfaces of the tube, providing robust defense against oxygen, acid/alkali moisture, and atmospheric salt spray. Widely utilized in architectural curtain walls, photovoltaic solar ground racking, and commercial steel frameworks.`,
    heroImage: '/src/assets/images/hot-dip-galvanized-square-rectangular-pipe.jpg',
    gallery: [
      '/src/assets/images/hot-dip-galvanized-square-rectangular-pipe.jpg',
      '/src/assets/images/square-rectangular-welded-steel-pipe.jpg',
      '/src/assets/images/structural-steel-profiles.jpg'
    ],
    specifications: [
      { label: 'Square Specifications', value: '25x25 mm – 200x200 mm' },
      { label: 'Rectangular Specifications', value: '25x50 mm – 150x200 mm' },
      { label: 'Uses & Applications', value: 'Widely used in curtain wall, construction, machinery manufacturing, shipbuilding, photovoltaic support, steel structure engineering, automobile chassis and many other industries' },
      { label: 'Wall Thickness', value: '1.5–12.0 mm' },
      { label: 'Zinc Coating Mass', value: '220–500 g/m² (uniform hot-dip galvanized coating on all faces)' },
      { label: 'Steel Grades', value: 'Q195, Q235B, Q345B, Q355B, S235JR, S275JR, S355JR, ASTM A500 Gr. B' },
      { label: 'Applicable Standards', value: 'ASTM A500, EN 10219, JIS G3466, GB/T 6728, GB/T 3091' },
      { label: 'Mechanical Properties', value: 'Tensile strength 360–510 MPa, Yield point ≥ 235–355 MPa' },
      { label: 'Length Range', value: '5.8 m, 6.0 m, 11.8 m, 12.0 m, or precision cut fixed lengths' },
      { label: 'End Treatments', value: 'Square cut plain ends, burr-free deburred, bundle strapping with water-proof paper' },
    ],
    features: [
      'Comprehensive profile matrix: Square (25x25 to 200x200 mm) & Rectangular (25x50 to 150x200 mm)',
      'Uniform dense zinc layer with exceptional metallurgical adhesion resistant to peeling',
      'High torsional rigidity and superior column buckling resistance for building facades',
      'Excellent cold punching, laser cutting, bending, and robotic welding performance',
      'Corrosion protection service life exceeding 25 to 50 years in outdoor architectural exposures',
    ],
    applications: [
      'Architectural curtain wall mullions, transom frameworks, and glass facade structural supports',
      'Photovoltaic solar mounting ground structures, tracker frames, and rooftop racking',
      'Commercial warehouse structures, canopy framing, and pre-engineered metal buildings',
      'Commercial vehicle chassis, trailer undercarriages, and agricultural equipment frames',
      'Highway guardrail posts, acoustic barrier frames, and overhead gantry signage',
    ],
    standards: [
      { name: 'ASTM A500 (Gr. A, B, C)', description: 'Cold-Formed Welded and Seamless Carbon Steel Structural Tubing in Rounds and Shapes' },
      { name: 'EN 10219', description: 'Cold formed welded structural hollow sections of non-alloy and fine grain steels' },
      { name: 'GB/T 6728', description: 'Cold formed hollow sections for general structure' },
    ],
    relatedProducts: ['square-rectangular-welded-steel-pipe', 'hot-dip-galvanized-steel-pipe', 'structural-steel-profiles'],
  },

  {
    slug: 'square-rectangular-welded-steel-pipe',
    category: PRODUCT_CATEGORIES.STEEL_PIPES,
    name: 'Square & Rectangular Welded Steel Pipe',
    shortDescription: '25x25mm–400x400mm square and 25x40mm–300x500mm rectangular welded steel hollow sections for steel structures, cranes, machine frames, and PEB buildings.',
    description: `Square rectangular welded steel pipe (SHS / RHS) from Tianjin Decent International Trade Co., Ltd. is produced by cold-forming continuous high-grade carbon steel strip into rectangular or square cross-sections, securely fusing the seam with high-frequency resistance welding.

Delivers high strength-to-weight ratio, crisp 90-degree corner radii, flat mating faces, and high torsional resistance. Readily cut, drilled, punched, and welded for modern architectural structural steelwork, heavy crane jibs, and equipment frameworks.`,
    heroImage: '/src/assets/images/square-rectangular-welded-steel-pipe.jpg',
    gallery: [
      '/src/assets/images/square-rectangular-welded-steel-pipe.jpg',
      '/src/assets/images/hot-dip-galvanized-square-rectangular-pipe.jpg',
      '/src/assets/images/structural-steel-profiles.jpg'
    ],
    specifications: [
      { label: 'Square Specifications', value: '25x25 mm – 400x400 mm' },
      { label: 'Rectangular Specifications', value: '25x40 mm – 300x500 mm' },
      { label: 'Uses & Applications', value: 'Widely used in steel structure construction, machinery manufacturing, construction engineering, automobile manufacturing, shipbuilding, electric power and many other industries' },
      { label: 'Wall Thickness', value: '1.2–16.0 mm' },
      { label: 'Steel Grades', value: 'Q195, Q235B, Q345B, Q355B, S235JR, S275JR, S355JR, ASTM A500 Gr. B' },
      { label: 'Applicable Standards', value: 'ASTM A500, EN 10219, EN 10210, JIS G3466, GB/T 6728' },
      { label: 'Surface Finish', value: 'Bare black mill finish, Lightly oiled, Anti-rust red oxide primer, or Pre-galvanized' },
      { label: 'Length Range', value: '5.8 m, 6.0 m, 11.8 m, 12.0 m, or customized precision cut lengths' },
      { label: 'Section Corner Geometry', value: 'Standard sharp radius or custom radius R=1.5t to 2.5t' },
      { label: 'Quality Verification', value: 'Eddy current inspection, flattening test, bend test, Mill Test Certificate (EN 10204 3.1)' },
    ],
    features: [
      'Extensive dimensional scope: Square up to 400x400 mm and Rectangular up to 300x500 mm',
      'Flat geometric faces allow fast, economical bolted and welded connections',
      'Superior column strength with uniform radius of gyration compared to open I/H profiles',
      'Internal hollow section can be filled with concrete for high-capacity composite fireproof columns',
      'Produced under strict ISO 9001 and CE factory production control systems',
    ],
    applications: [
      'Structural columns, building portal frames, mezzanine floors, and roof trusses',
      'Heavy machinery frames, material handling conveyors, overhead cranes, and boom jibs',
      'Industrial pre-engineered building (PEB) framing, hangars, and sports arena space frames',
      'Civil infrastructure pedestrian bridges, highway gantries, and toll station canopies',
      'Automotive transport carriers, agricultural implements, and railway car frames',
    ],
    standards: [
      { name: 'ASTM A500 (Grades A, B, C)', description: 'Cold-Formed Welded Carbon Steel Structural Tubing' },
      { name: 'EN 10219 / EN 10210', description: 'Cold formed & Hot finished structural hollow sections of non-alloy and fine grain steels' },
      { name: 'GB/T 6728', description: 'Cold formed hollow sections for general structure' },
    ],
    relatedProducts: ['hot-dip-galvanized-square-rectangular-pipe', 'straight-seam-welded-steel-pipe', 'structural-steel-profiles'],
  },

  {
    slug: 'seamless-steel-pipes',
    category: PRODUCT_CATEGORIES.STEEL_PIPES,
    name: 'Seamless Industrial Steel Pipes',
    shortDescription: 'Heavy-wall and standard API/GB seamless steel pipes for fluid, gas, oil transmission, boiler tubes, and structural columns.',
    description: `Seamless industrial steel pipes supplied by Tianjin Decent International Trade Co., Ltd. are manufactured without welded seams for high pressure containment, uniform circumferential strength, and dependable structural durability. Conforming to rigorous API and GB standards for fluid, gas, and oil transport as well as heavy civil structural columns.

Available in standard lengths of 6 m, 6.4 m, and 12 m with wall thickness ratings from Schedule 40 (sch40) up to Schedule 120 (sch120). Surface options include hot-rolled black finish or anti-corrosion black galvanized coating with beveled or plain ends fitted with protective end caps.`,
    heroImage: '/src/assets/images/seamless-steel-pipes.jpg',
    gallery: ['/src/assets/images/seamless-steel-pipes.jpg', '/src/assets/images/structural-steel-profiles.jpg'],
    specifications: [
      { label: 'Applications', value: 'Fluid Pipe, Gas Pipe, Oil Pipe, High-Pressure Transmission & Structural Columns' },
      { label: 'Standard', value: 'GB Standards, API Spec 5L / 5CT, ASTM A53, ASTM A106' },
      { label: 'Grade', value: 'Grade B, A53-A369, A106 (B, C), Q195–Q345' },
      { label: 'Certificate', value: 'API Certified, ISO 9001, Mill Test Certificate (EN 10204 3.1)' },
      { label: 'Surface Treatment', value: 'Hot Rolled finish / Black Galvanized Coated with rust-preventive varnish' },
      { label: 'Length', value: '12 m, 6 m, 6.4 m (fixed or random lengths)' },
      { label: 'Special Pipe', value: 'API Pipe, Thick Wall Pipe, High-Pressure Boiler Tube' },
      { label: 'Thickness', value: 'sch40 to sch120 (and customized heavy wall thicknesses)' },
      { label: 'Surface', value: 'Black Galvanized Coated, Oiled, or Bare Mill Finish' },
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
    relatedProducts: ['welded-erw-steel-pipes', 'structural-steel-profiles', 'scaffold-tube-48'],
  },

  {
    slug: 'welded-erw-steel-pipes',
    category: PRODUCT_CATEGORIES.STEEL_PIPES,
    name: 'ERW & Welded Steel Pipes (Round, Square & Rectangular)',
    shortDescription: 'Round Pipe (CHS), Square & Rectangular Pipe (RHS/SHS) in ERW welded fabrication with Galvanized and Painted finishes.',
    description: `Tianjin Decent International Trade Co., Ltd. supplies high-precision ERW (Electric Resistance Welded) and cold-formed welded steel pipes tailored to global engineering standards. Our comprehensive steel pipe range encompasses Round Pipe (Circular Hollow Sections - CHS) as well as Square & Rectangular Pipe (Square and Rectangular Hollow Sections - SHS & RHS).

Available in various high-durability surface executions including Hot-Dip Galvanized, Pre-Galvanized, Black Painted, and Anti-Rust Primer Coated to ensure exceptional longevity across demanding outdoor and industrial environments.`,
    heroImage: '/src/assets/images/seamless-steel-pipes.jpg',
    gallery: [
      '/src/assets/images/seamless-steel-pipes.jpg',
      '/src/assets/images/structural-steel-profiles.jpg',
      '/src/assets/images/scaffold-tubes-48mm.jpg'
    ],
    specifications: [
      { label: 'Product Scope', value: 'Round Pipe, Square & Rectangular Pipe' },
      { label: 'Profile Types', value: 'RHS & SHS (Rectangular & Square Hollow Sections), CHS (Circular Hollow Section)' },
      { label: 'Manufacturing Details', value: 'ERW Pipe (Electric Resistance Welded), Seamless Pipe, Galvanized Pipe, Painted Pipe' },
      { label: 'RHS & SHS Characteristics', value: 'Popular for columns, beams, trusses, canopies, warehouses, and modern architectural steel structures due to their strength and clean appearance.' },
      { label: 'CHS Characteristics', value: 'Offers an excellent strength-to-weight ratio and is widely used for columns, trusses, handrails, and bracing systems.' },
      { label: 'Surface Finishes', value: 'Galvanized Pipe (Hot-Dip Galvanized / Pre-Galvanized), Painted Pipe (Black / Red Oxide / Anti-Corrosion Primer), Bare Mill Finish' },
      { label: 'Applicable Standards', value: 'ASTM A500 (Grades A, B, C), EN 10219, EN 10210, BS 1387, JIS G3444, JIS G3466, GB/T 6728, GB/T 3091' },
      { label: 'Steel Grades', value: 'Q195, Q215, Q235B, Q345B, Q355B, S235JR, S275JR, S355JR, ASTM A500 Grade B' },
      { label: 'Wall Thickness', value: '0.8 mm up to 16.0 mm (sch10 to sch80 equivalent)' },
      { label: 'Length Range', value: '5.8 m, 6.0 m, 11.8 m, 12.0 m, or customized precision cut lengths' },
      { label: 'End Treatments', value: 'Plain square cut ends, beveled ends, threaded and coupled, roll grooved' },
    ],
    features: [
      'Comprehensive geometry: Round (CHS), Square (SHS), and Rectangular (RHS) hollow sections',
      'Advanced high-frequency ERW welding with internal and external weld bead removal',
      'Superior strength-to-weight ratio providing structural economy and clean architectural lines',
      'Extensive finish options: Hot-dip galvanized, pre-galvanized, and multi-layer painted finishes',
      'Strict hydrostatic, ultrasonic, and eddy current non-destructive testing for all fluid/gas lines',
      'Bundled with heavy-duty steel strapping and moisture-resistant seaworthy packaging',
    ],
    applications: [
      'Architectural steel columns, roof trusses, canopy framing, and space frames',
      'Industrial warehouse framing, pre-engineered buildings (PEB), and greenhouse structures',
      'Civil infrastructure handrails, bridge guardrails, and highway signage gantries',
      'Low to medium pressure fluid, water, gas, fire protection sprinkler systems',
      'Mechanical manufacturing, equipment frames, agricultural machinery, and automotive chassis',
    ],
    standards: [
      { name: 'ASTM A500', description: 'Cold-Formed Welded and Seamless Carbon Steel Structural Tubing' },
      { name: 'EN 10219', description: 'Cold formed welded structural hollow sections of non-alloy and fine grain steels' },
      { name: 'GB/T 6728', description: 'Cold formed hollow sections for general structure' },
      { name: 'BS 1387', description: 'Screwed and socketed steel tubes and tubulars for water, gas, air and steam' },
    ],
    relatedProducts: ['seamless-steel-pipes', 'structural-steel-profiles', 'scaffold-tube-48'],
  },

  // ── SCAFFOLDING SYSTEMS ──────────────────────────────────

  {
    slug: 'cuplock-scaffolding-system',
    category: PRODUCT_CATEGORIES.SCAFFOLDING_SYSTEMS,
    name: 'Cup Lock Scaffolding System',
    shortDescription: 'Modular steel scaffolding system featuring vertical standards with cup-and-wedge locking mechanism for rapid assembly.',
    description: `The Cuplock scaffolding system consists of vertical standards with cup-and-ledger blade locking nodes at regular intervals, typically 500 mm apart. Forged ledger and transom blades are secured into the cups using a wedge driven by a single hammer blow.

Each node can connect up to four horizontal members, providing fast erection and dismantling, rigid and stable connections, and high load-bearing capacity without loose bolts, nuts, or threaded fittings.`,
    heroImage: '/src/assets/images/cuplock-scaffolding-setup.jpg',
    gallery: [
      '/src/assets/images/cuplock-scaffolding-setup.jpg',
      '/src/assets/images/cuplock-components-diagram.jpg',
      '/src/assets/images/cuplock-standard-post.jpg',
      '/src/assets/images/cuplock-ledger.jpg',
      '/src/assets/images/cuplock-intermediate-transom.jpg'
    ],
    specifications: [
      { label: 'Scaffolding System', value: 'Cup Lock modular system (BS 1139 Part 5 / EN 12810 / EN 12811)' },
      { label: 'Leg Load Capacity', value: 'Up to 40 kN (4.0 tons) safe working load per vertical standard' },
      { label: 'Material & Grade', value: 'High-yield structural carbon steel (Q235 / Q355 / EN 10219 S355)' },
      { label: 'Tube Dimensions', value: '48.3 mm outside diameter × 3.2 mm / 4.0 mm nominal wall thickness' },
      { label: 'Locking Node Spacing', value: 'Fixed bottom cups welded at standard 500 mm (0.5 m) intervals' },
      { label: 'Top Locking Cup', value: 'Captive malleable ductile iron cup locking up to 4 horizontal/diagonal blades with a single hammer blow' },
      { label: 'Horizontal Ledgers', value: '0.60 m, 0.90 m, 1.0 m, 1.2 m, 1.3 m, 1.5 m, 1.6 m, 1.8 m, 2.0 m, 2.5 m modular bay lengths' },
      { label: 'Cantilever & Beam Brackets', value: 'Hop-up cantilever frames (1.2 m, 1.25 m, 1.3 m reach) and 20 kN heavy beam brackets' },
      { label: 'Surface Finish', value: 'Hot-Dip Galvanized to EN ISO 1461 (minimum 55–85 µm zinc thickness) or painted' },
      { label: 'Base Support', value: 'Solid or hollow adjustable screw jacks (SWL 40 kN), swivel base plates, and spigot base plates' },
      { label: 'Working Platform', value: 'Perforated anti-slip steel planks or timber scaffold boards conforming to EN 12811-1' },
      { label: 'Primary Use', value: 'Heavy civil falsework shoring, building façades, petrochemical plant access, and marine maintenance' },
    ],
    accessories: [
      {
        name: 'Standard / Vertical Post',
        image: '/src/assets/images/cuplock-standard-post.jpg',
        sizes: '0.5 m / 1.0 m / 1.5 m / 2.0 m / 2.5 m / 3.0 m',
        sizeList: ['0.5 m', '1.0 m', '1.5 m', '2.0 m', '2.5 m', '3.0 m'],
        description: 'Vertical load-bearing member (48.3 mm OD) equipped with fixed bottom cups and captive sliding top locking cups spaced at 500 mm intervals, complete with integrated top spigot connector.'
      },
      {
        name: 'Ledger / Transom',
        image: '/src/assets/images/cuplock-ledger.jpg',
        sizes: '0.60 m / 0.9 m / 1.0 m / 1.2 m / 1.3 m / 1.5 m / 1.6 m / 1.8 m / 2.0 m / 2.5 m',
        sizeList: ['0.60 m', '0.9 m', '1.0 m', '1.2 m', '1.3 m', '1.5 m', '1.6 m', '1.8 m', '2.0 m', '2.5 m'],
        description: 'Horizontal member manufactured from 48.3 mm high-strength steel tubing with forged solid blade ends welded at both ends, seating securely into bottom cups.'
      },
      {
        name: 'Intermediate Transom',
        image: '/src/assets/images/cuplock-intermediate-transom.jpg',
        sizes: '1.2 m / 1.3 m / 1.5 m / 1.6 m / 1.8 m / 2.0 m / 2.5 m',
        sizeList: ['1.2 m', '1.3 m', '1.5 m', '1.6 m', '1.8 m', '2.0 m', '2.5 m'],
        description: 'Intermediate board-supporting member with inverted locking hook jaws designed to span across two horizontal ledgers without requiring cup nodes.'
      }
    ],
    features: [
      'Single-node connection — up to four ledgers locked in one operation with a single hammer blow',
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
      { label: 'Lift Height', value: 'Typically 0.5–2.5 m; commonly 3.0 m standard height' },
      { label: 'Horizontal Members', value: 'Steel ledgers with compatible wedge locking connections' },
      { label: 'Base Support', value: 'Adjustable base jacks and heavy-duty base plates' },
      { label: 'Working Platform', value: 'Steel or aluminum scaffold planks / perforated anti-slip boards' },
      { label: 'Access Options', value: 'Ladders or modular stair towers with internal handrails' },
      { label: 'Safety Components', value: 'Guardrails, midrails, toe boards, and access safety gates' },
      { label: 'Finish', value: 'Hot-dip galvanized or painted steel\n(Coating coverage as per client requirements)' },
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
    gallery: [
      '/src/assets/images/scaffold-tubes-fittings.jpg',
      '/src/assets/images/fitting-swivel-coupler.jpg',
      '/src/assets/images/fitting-double-coupler.jpg',
      '/src/assets/images/fitting-beam-clamp.jpg'
    ],
    specifications: [
      { label: 'Scaffolding System', value: 'Tube & Fitting scaffolding' },
      { label: 'Material', value: 'High-strength steel tubes (S235GT / S355 / Q235 / Q355 structural steel)' },
      { label: 'Tube Diameter', value: '48.3 mm nominal outside diameter (OD)' },
      { label: 'Tube Thickness', value: '2.9 mm, 3.2 mm, 3.4/3.76 mm, 4.0 mm nominal wall thickness' },
      { label: 'Tube Lengths', value: 'Any length as per client requirement (Suitable for Ocean freight by BB / Container)' },
      { label: 'Coupler Types', value: 'Right-angle (double), swivel, sleeve, putlog, and girder approved couplers' },
      { label: 'Coupler Compliance', value: 'EN 74-1 Class B Certified' },
      { label: 'Base Support', value: 'Adjustable screw base jacks and steel base plates' },
      { label: 'Working Platform', value: 'Steel or aluminum scaffold boards/planks' },
      { label: 'Access Solutions', value: 'Scaffold ladders or external stair towers as required' },
      { label: 'Safety Components', value: 'Guardrails, midrails, toe boards, and self-closing access gates' },
      { label: 'Finish', value: 'Hot-dip galvanized or painted steel (Coating coverage as per client requirements)' },
      { label: 'Load Capacity', value: 'As per approved scaffolding design and certified load tables' },
      { label: 'Applications', value: 'Building construction, façade works, industrial plants, maintenance, temporary access, and support structures' },
    ],
    features: [
      'Complete geometric freedom for irregular structures, cantilevers, and tight spaces',
      'Standardized 48.3 mm OD tube compatible with universal couplers and accessories',
      'Drop-forged carbon steel couplers meeting EN 74-1 Class B certified ratings',
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
    relatedProducts: ['scaffolding-accessories', 'scaffold-tube-48', 'right-angle-coupler', 'swivel-coupler'],
  },

  {
    slug: 'frame-scaffolding-system',
    category: PRODUCT_CATEGORIES.SCAFFOLDING_SYSTEMS,
    name: 'Modular Frame Scaffolding System (H-Frame & Walk-Through)',
    shortDescription: 'Prefabricated portal frame scaffolding system with walk-through frames, mason frames, cross braces, and lock pins.',
    description: `The Modular Frame Scaffolding System is engineered for rapid, tool-free erection on masonry construction, exterior building finishing, stucco work, and commercial maintenance projects. Built from high-tensile structural steel tubular uprights welded into rigid box geometries, each section locks securely with scissor cross braces and gravity flip-locks.

Available in Walk-Through Frame and Mason H-Frame configurations, accommodating integrated steel walk boards, staircases, and heavy loading conditions conforming to ANSI and EN specifications.`,
    heroImage: '/src/assets/images/frame-scaffolding.jpg',
    gallery: [
      '/src/assets/images/frame-scaffolding.jpg',
      '/src/assets/images/scaffold-steel-plank.jpg',
      '/src/assets/images/scaffold-staircase.jpg'
    ],
    specifications: [
      { label: 'System Type', value: 'Walk-Through Frame & Mason H-Frame modular scaffolding' },
      { label: 'Standard Dimensions', value: '1930 mm × 1219 mm (6\'4" × 4\'), 1700 mm × 1219 mm, 1524 mm × 1219 mm (5\' × 4\'), 1930 mm × 914 mm' },
      { label: 'Main Leg Tube', value: 'Ø 42.7 mm / Ø 48.3 mm × 2.0 mm / 2.5 mm high-yield carbon steel' },
      { label: 'Lock Types', value: 'Drop lock / Gravity flip lock / Fast lock pins' },
      { label: 'Cross Braces', value: 'Galvanized tube scissor cross braces to suit 1.8 m, 2.0 m, 2.13 m, 2.5 m bays' },
      { label: 'Surface Finish', value: 'High-durability powder-coated (Red / Yellow / Blue) or Hot-Dip Galvanized' },
      { label: 'Platform Decking', value: 'Compatible with steel planks, aluminum platform boards, and access hatch decks' },
      { label: 'Load Capacity', value: 'Heavy Duty rating up to 50 psf (2.4 kN/m²) uniform distributed load' },
      { label: 'Applications', value: 'Brick masonry, exterior wall plastering, cladding installation, and interior maintenance' },
    ],
    features: [
      'Rapid, tool-free assembly with drop-lock pins and captive gravity pins',
      'Walk-through portal geometry allows unobstructed worker passage along scaffold bays',
      'High-grade structural steel tubing ensures maximum buckling resistance',
      'Available in durable powder-coated painted finish or hot-dip galvanized finish',
      'Complete accessory compatibility: screw jacks, casters, guardrail posts, and stairs',
      'Full compliance with international access safety and load standards',
    ],
    applications: [
      'Exterior masonry, bricklaying, and stone facade construction',
      'Stucco, plastering, exterior insulation and finish systems (EIFS)',
      'Building painting, window glazing, and architectural panel installation',
      'Industrial warehouse wall maintenance and internal ceiling access',
    ],
    standards: [
      { name: 'ANSI/SSFI SC100-5/05', description: 'Standards for testing and rating scaffold assemblies and components' },
      { name: 'EN 12810', description: 'Façade scaffolds made of prefabricated components' },
      { name: 'OSHA 1926.451', description: 'Safety and Health Regulations for Construction — Scaffolds' },
    ],
    relatedProducts: ['steel-scaffold-planks', 'scaffold-staircase', 'scaffold-steel-props'],
  },

  {
    slug: 'scaffold-steel-props',
    category: PRODUCT_CATEGORIES.SCAFFOLDING_SYSTEMS,
    name: 'Adjustable Heavy-Duty Steel Props (Acrow Shoring Props)',
    shortDescription: 'Telescopic adjustable steel shoring props with rolled Acme threaded collar and forged G-pin across 0.69 m to 4.87 m heights.',
    description: `Adjustable Steel Props (Acrow Props) supplied by Tianjin Decent International Trade Co., Ltd. are heavy-duty telescopic shoring devices designed to support vertical loads during concrete formwork pouring, slab falsework, and temporary structural propping.

Fabricated with precision high-frequency welded steel inner (48.3 mm OD) and outer (56/60 mm OD) tubes, equipped with a forged ductile iron collar nut with dual handles and high-tensile G-pin for micro-level height adjustments. Conforming to EN 1065 Class A through E and BS 4074.`,
    heroImage: '/src/assets/images/scaffold-steel-props.jpg',
    gallery: [
      '/src/assets/images/scaffold-steel-props.jpg',
      '/src/assets/images/scaffold-tubes-fittings.jpg'
    ],
    specifications: [
      { label: 'Prop Sizes & Heights', value: 'Prop Size 00: 0.69 m – 1.163 m\nProp Size 0: 1.07 m – 1.82 m\nProp Size 1: 1.75 m – 3.12 m\nProp Size 2: 1.98 m – 3.35 m\nProp Size 3: 2.59 m – 3.95 m\nProp Size 4: 3.20 m – 4.87 m' },
      { label: 'Outer Tube Spec', value: 'Ø 56 mm / Ø 60 mm × 2.0 mm / 2.5 mm wall thickness' },
      { label: 'Inner Tube Spec', value: 'Ø 48.3 mm × 2.5 mm / 3.0 mm wall thickness with punched pin holes at 100 mm pitch' },
      { label: 'Adjustment Nut', value: 'Ductile cast iron collar nut with dual handles for rapid spin height setting' },
      { label: 'Locking Pin', value: 'High-tensile forged steel G-pin (Ø 12 mm / 14 mm) with retention chain' },
      { label: 'Base & Head Plates', value: '120 × 120 × 6 mm or 150 × 150 × 8 mm flat or flower plates with nail securing holes' },
      { label: 'Surface Finish', value: 'Hot-Dip Galvanized, Electro-Galvanized, or High-Adhesion Powder Painted' },
      { label: 'Safe Working Load', value: '10 kN to 35 kN axial load capacity (per EN 1065 certified load tables)' },
    ],
    features: [
      'Six standard length ranges from 0.69 m up to 4.87 m to meet any ceiling or trench height',
      'Heavy-duty rolled Acme threads ensure smooth adjustment without clogging or stripping',
      'Self-cleaning thread design expels concrete debris and slurry during turning',
      'High axial vertical load capacity with TÜV and EN 1065 certification test data',
      'Punched base plate holes allow secure fastening to timber sole plates or concrete slabs',
      'Available with U-head, fork head, or flat plate tops for timber beam / steel beam support',
    ],
    applications: [
      'Cast-in-place concrete slab formwork and beam bottom shoring',
      'Precast concrete panel installation and temporary wall stabilization',
      'Civil engineering bridge formwork, culvert construction, and tunneling support',
      'Structural renovation, lintel replacement, and trench shoring propping',
    ],
    standards: [
      { name: 'EN 1065', description: 'Adjustable telescopic steel props — Product specifications, design and assessment' },
      { name: 'BS 4074', description: 'Specification for steel trench struts and props' },
    ],
    relatedProducts: ['scaffold-beam-ladder', 'steel-scaffold-planks', 'frame-scaffolding-system'],
  },

  {
    slug: 'scaffold-beam-ladder',
    category: PRODUCT_CATEGORIES.SCAFFOLDING_SYSTEMS,
    name: 'Scaffolding Beam Ladders & Lattice Girders',
    shortDescription: 'High-tensile parallel-chord 48.3 mm tubular lattice beams engineered for bridging large spans, openings, and suspended scaffolds.',
    description: `Scaffolding Beam Ladders and Lattice Girders are structural spanning components manufactured from 48.3 mm high-yield steel tubing. Designed to bridge over wide openings, vehicular roadways, pedestrian thoroughfares, and roof voids where continuous ground-supported scaffolding is impractical.

Engineered with full-penetration welding between chords and diagonal lattice bracing, conforming to BS 1139 and EN 12811 for high bending moment capacity and point load resistance.`,
    heroImage: '/src/assets/images/scaffold-beam-ladder.jpg',
    gallery: [
      '/src/assets/images/scaffold-beam-ladder.jpg',
      '/src/assets/images/scaffold-beam-ladder-bundle.jpg',
      '/src/assets/images/scaffold-tubes-fittings.jpg'
    ],
    specifications: [
      { label: 'Lattice Depth', value: '300 mm, 450 mm, 500 mm, 750 mm (standard 450 mm / 18" deep lattice)' },
      { label: 'Standard Lengths', value: '2.0 m, 3.0 m, 4.0 m, 5.0 m, 6.0 m, 8.0 m (custom lengths available)' },
      { label: 'Chord Tubes', value: 'Ø 48.3 mm × 3.2 mm / 4.0 mm high-yield structural steel tubing' },
      { label: 'Lacing Tubes', value: 'Ø 48.3 mm or Ø 38 mm diagonal and vertical welded lattice trussing' },
      { label: 'Connection Details', value: 'Direct connection using standard EN 74-1 right-angle / swivel couplers or spigot connectors' },
      { label: 'Surface Finish', value: 'Hot-Dip Galvanized to EN ISO 1461 for severe marine and industrial atmospheric protection' },
      { label: 'Bending Capacity', value: 'High permissible bending moment engineered for heavy suspended staging and equipment decks' },
      { label: 'Primary Use', value: 'Bridging openings, entrance portals, pedestrian canopies, and suspended scaffolding' },
    ],
    features: [
      'Fabricated entirely from standardized 48.3 mm tubes for complete coupler compatibility',
      'Continuous automated robotic MIG welding guarantees full weld penetration and joint strength',
      'Provides clear wide-span access over building entrances, roadways, and sensitive equipment',
      'End-to-end spigoting permits multi-section continuous beam spans exceeding 20 meters',
      'Hot-dip galvanized coating ensures zero corrosion maintenance over extended project lifespans',
    ],
    applications: [
      'Bridging over vehicular entrance gates and active construction site roadways',
      'Pedestrian protection gantries and overhead debris catchment decks',
      'Suspended access platforms on offshore platforms, bridges, and ship hulls',
      'Heavy shoring transfer beams and cantilevered working bays',
    ],
    standards: [
      { name: 'BS 1139', description: 'Metal scaffolding — specifications for system scaffolding and components' },
      { name: 'EN 12811-1', description: 'Temporary works equipment — Scaffolds performance requirements' },
    ],
    relatedProducts: ['scaffold-steel-props', 'steel-scaffold-planks', 'frame-scaffolding-system'],
  },

  {
    slug: 'scaffold-staircase',
    category: PRODUCT_CATEGORIES.SCAFFOLDING_SYSTEMS,
    name: 'Modular Steel Scaffolding Staircase Unit',
    shortDescription: 'Prefabricated steel access stairs with non-slip perforated treads and ledger hooks for rapid, safe personnel stair towers.',
    description: `Modular Steel Scaffolding Staircase Units provide safe, ergonomic vertical transit between scaffold working levels, replacing unsafe vertical ladders with compliant stair towers. Engineered with formed steel stringers and punched non-slip stair treads featuring drainage dimples.

Equipped with heavy-duty end hooks that seat directly over scaffolding horizontal ledgers and transoms, providing quick installation and stable, wobble-free footing conforming to EN 12811 and OSHA standards.`,
    heroImage: '/src/assets/images/scaffold-staircase.jpg',
    gallery: [
      '/src/assets/images/scaffold-staircase.jpg',
      '/src/assets/images/scaffold-steel-plank.jpg',
      '/src/assets/images/cuplock-scaffolding-setup.jpg'
    ],
    specifications: [
      { label: 'Lift Height / Rise', value: '1.5 m / 2.0 m standard scaffolding vertical bay lift height' },
      { label: 'Clear Width', value: '600 mm / 900 mm ergonomic walking width' },
      { label: 'Tread Construction', value: 'Pressed steel non-slip perforated treads with drainage holes' },
      { label: 'Rise & Going', value: 'Rise ~200 mm, Going ~220 mm for natural, comfortable stair climbing' },
      { label: 'Connection Hooks', value: 'Reinforced welded steel end hooks with integrated lift-off safety retainers' },
      { label: 'Material & Finish', value: 'High-strength structural steel, Pre-galvanized or Hot-Dip Galvanized' },
      { label: 'Access Handrails', value: 'Internal and external matching diagonal handrail units available' },
      { label: 'Permissible Load', value: '1.5 kN/m² to 2.0 kN/m² live load rating (EN 12811 Class 3)' },
    ],
    features: [
      'Replaces ladder climbing with ergonomic walking access, significantly reducing worker fatigue and fall risk',
      'Perforated dimpled treads provide superior traction in wet, muddy, or icy working conditions',
      'Hooks securely onto standard 48.3 mm ledgers across Cuplock, Ringlock, and Frame systems',
      'Rapid drop-in installation requiring no specialized hand tools or loose fasteners',
      'Hot-dip galvanized finish guarantees lasting protection against coastal and chemical exposure',
    ],
    applications: [
      'High-rise construction public access and personnel evacuation stair towers',
      'Industrial plant turnaround, boiler maintenance, and refinery overhaul access',
      'Commercial facade refurbishment and multi-tiered staging platforms',
    ],
    standards: [
      { name: 'EN 12811-1', description: 'Temporary works equipment — Scaffolds access and stairways' },
      { name: 'OSHA 1926.451', description: 'Safety and Health Regulations for Construction — Scaffolds access requirements' },
    ],
    relatedProducts: ['steel-scaffold-planks', 'frame-scaffolding-system', 'ringlock-system'],
  },

  {
    slug: 'scaffolding-accessories',
    category: PRODUCT_CATEGORIES.SAFETY_ACCESSORIES,
    name: 'Scaffolding Components & Accessories',
    shortDescription: 'Complete 17-part component catalog: Standards, Ledgers, Transoms, Base Jacks, Couplers, Bracing, Boards, Guardrails, and Safety Gates.',
    description: `Scaffolding components and accessories are used to assemble, support, access, protect, and stabilize scaffolding systems for safe construction and maintenance works. Every single component in a scaffold assembly has an indispensable engineering purpose—removing or incorrectly installing a single component affects the structural load transfer, worker safety, and stability of the entire scaffold structure.

Tianjin Decent International Trade Co., Ltd. supplies the complete inventory of 17 essential components and accessories manufactured from suitable high-strength steel or aluminum, with hot-dip galvanized or approved protective finishes as applicable.`,
    heroImage: '/src/assets/images/scaffolding-accessories-collection.jpg',
    gallery: [
      '/src/assets/images/scaffolding-accessories-collection.jpg',
      '/src/assets/images/scaffold-base-jack.jpg',
      '/src/assets/images/fitting-double-coupler.jpg',
      '/src/assets/images/fitting-swivel-coupler.jpg',
      '/src/assets/images/fitting-sleeve-coupler.jpg',
      '/src/assets/images/fitting-beam-clamp.jpg',
      '/src/assets/images/cuplock-scaffolding-setup.jpg'
    ],
    specifications: [
      { label: '1. Standards / Uprights', value: 'Vertical load-bearing members (48.3 mm OD) that transfer combined self-weight and live load to the foundation.' },
      { label: '2. Ledgers', value: 'Horizontal members connecting standards longitudinally and supporting intermediate structure.' },
      { label: '3. Transoms / Bearers', value: 'Transverse members spanning between ledgers, directly supporting scaffold boards and platform loads.' },
      { label: '4. Base Plates & Spigots', value: 'Rigid 150×150×6mm steel base footings to distribute vertical loads over sole timber boards.' },
      { label: '5. Adjustable Base Jacks', value: 'Heavy-duty cold-rolled Acme threaded screw jacks (SWL 40 kN) with ductile collar nut for leveling.' },
      { label: '6. Couplers / Clamps', value: 'High-tensile drop-forged mechanical fittings certified to EN 74-1 Class B (Right Angle, Swivel, Sleeve, Putlog, Beam).' },
      { label: '7. Bracing', value: 'Diagonal sway members providing lateral triangulation, shear stability, and preventing scaffold racking.' },
      { label: '8. Scaffold Boards / Planks', value: 'Perforated galvanized steel or laminated timber boards providing safe slip-resistant working platforms.' },
      { label: '9. Guardrails & Midrails', value: 'Perimeter horizontal barriers providing fall edge protection conforming to EN 12811-1.' },
      { label: '10. Toe Boards', value: 'Perimeter kick-plates preventing dropped tools, fasteners, and loose materials from falling off working decks.' },
      { label: '11. Ladders / Stairways', value: 'Engineered non-slip aluminum extension and rung ladders providing safe vertical tier access.' },
      { label: '12. Access Safety Gates', value: 'Self-closing spring-hinged security barriers controlling safe entry and exit from ladder bays.' },
      { label: '13. Heavy-Duty Gin Wheels', value: '254 mm (10") gin wheel certified to BS 1692:1998, SWL 250 kg (tested to 1,000 kg) with forged swivel eyebolt.' },
      { label: '14. Multi-Tier Scafftag System', value: 'Contractor safety inspection tag system (Green Passed / Yellow Safety Harness Required / Red Danger Do Not Use) with UV-stabilized holders conforming to Saudi Aramco & SABIC contractor site specs.' },
      { label: '15. Podger Ratchet Spanners', value: 'Swing-over ratchet podger spanners (19/21 mm & 21/23 mm bi-hex sockets) with forged tapered aligning handle and tool lanyard hole.' },
      { label: '16. Magnetic Torpedo Levels', value: '250 mm die-cast aluminum spirit level with high-power rare earth magnets and 45°/90°/180° shock-proof vials.' },
      { label: '17. Lifting Bags & Safety Caps', value: 'Woven polypropylene certified lifting bags (40–50 kg SWL), hi-vis yellow scaffold tube end protection caps, and M12 coupler nut covers.' },
      { label: 'Material & Finish', value: 'High-strength structural steel Q235/Q355 or aluminum alloy, with Hot-Dip Galvanizing to EN ISO 1461 or electroplating.' },
    ],
    features: [
      'Complete 17-point component catalog supplied from a single verified manufacturer',
      'Hot-dip galvanized finish across all structural steel items for maximum rust prevention',
      'Drop-forged coupler hardware tested to EN 74-1 Class B slip resistance standards',
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
      { name: 'EN 74-1', description: 'Couplers, spigot pins and baseplates for scaffolding (Class B)' },
      { name: 'BS 1139-2.2', description: 'Access and working scaffolds — Aluminium couplers and fittings' },
    ],
    relatedProducts: ['cuplock-scaffolding-system', 'ringlock-system', 'tube-fittings-scaffolding', 'swivel-coupler'],
  },

  {
    slug: 'scaffold-tube-48',
    category: PRODUCT_CATEGORIES.TUBES_FITTINGS,
    name: 'Scaffold Tubes Dia 48.3 MM',
    shortDescription: 'Standard 48.3 mm outside diameter scaffolding tubes manufactured from high-yield carbon steel. Available in standard 3.2 mm and 4.0 mm wall thicknesses with standard lengths up to 6.0 meters.',
    description: `Standard 48.3 mm outside diameter scaffolding tubes manufactured from high-yield carbon steel. Available in standard 3.2 mm and 4.0 mm wall thicknesses with standard lengths up to 6.0 meters. Fully hot-dip galvanized for extreme weather resistance.`,
    heroImage: '/src/assets/images/scaffold-tubes-48mm.jpg',
    gallery: [
      '/src/assets/images/scaffold-tubes-48mm.jpg',
      '/src/assets/images/scaffold-tubes-fittings.jpg',
      '/src/assets/images/fitting-double-coupler.jpg',
      '/src/assets/images/fitting-swivel-coupler.jpg'
    ],
    specifications: [
      { label: 'Outside Diameter', value: '48.3 mm (1.90 in)' },
      { label: 'Wall Thickness Options', value: '2.9 mm, 3.2 mm, 3.4 mm / 3.76 mm, 4.0 mm nominal wall thickness' },
      { label: 'Standard Lengths', value: 'Any length as per client requirement\n(Should be suitable to Ocean freight by BB / Container)' },
      { label: 'Material Grades', value: 'High-yield Carbon Steel (EN 10219, ASTM A500 Gr B, EN 39, BS 1139)' },
      { label: 'Surface Finish', value: 'Fully Hot-Dip Galvanized for extreme weather resistance\n(Coating coverage as per client requirements)' },
      { label: 'End Finish', value: 'Square cut, deburred, plain ends (fitted with protective end caps upon request)' },
      { label: 'Standard Certification', value: 'EN 10219, ASTM A500 Grade B, EN 39 Type 4, BS 1139 certified with full MTC 3.1' },
    ],
    wallThicknessSpecs: [
      {
        standard: 'EN 10219',
        yieldStress: '460 N/mm² (67 ksi) minimum yield stress',
        nominalWallThickness: '2.9 mm (0.114 in) nominal wall thickness',
        description: 'High-tensile cold-formed welded structural tube with 460 MPa minimum yield stress and 2.9 mm nominal wall.'
      },
      {
        standard: 'EN 10219',
        yieldStress: '320 N/mm² (46 ksi) minimum yield stress',
        nominalWallThickness: '3.2 mm (0.125 in) nominal wall thickness',
        description: 'Standard modular high-yield scaffolding tube with 320 MPa minimum yield stress and 3.2 mm nominal wall.'
      },
      {
        standard: 'ASTM A500, Grade B',
        yieldStress: '290 N/mm² (42 ksi) minimum yield stress',
        nominalWallThickness: '3.4 mm (0.13 in) or 3.76 mm (0.15 in) nominal wall thickness',
        description: 'North American structural specification for cold-formed welded carbon steel hollow sections.'
      },
      {
        standard: 'EN 39 thickness type 4',
        yieldStress: '235 N/mm² (34 ksi) minimum yield stress',
        nominalWallThickness: '4.0 mm (0.16 in) nominal wall thickness',
        description: 'Heavy duty scaffolding tube specification (Note: BS 1139 tubing is equivalent and is acceptable).'
      }
    ],
    wallThicknessNote: 'Note: BS 1139 tubing is equivalent and is acceptable.',
    features: [
      'Manufactured from certified high-yield carbon steel with strict concentricity control',
      'Four international wall thickness grades tailored to global building codes',
      'Custom cut lengths optimized for container loading (20GP / 40HQ) or break-bulk (BB)',
      'Hot-dip galvanized inside and outside for maximum marine atmospheric corrosion defense',
      'Full chemical composition, tensile yield, and flattening test verification provided via MTC 3.1',
    ],
    applications: [
      'Tube & fitting scaffolding and shoring arrangements',
      'Structural ties, facade bracing, plan bracing, and perimeter guardrails',
      'Industrial refinery, power station, and offshore platform maintenance',
      'Civil falsework, bridge propping, and heavy load staging',
    ],
    standards: [
      { name: 'EN 10219', description: 'Cold formed welded structural hollow sections of non-alloy steels' },
      { name: 'ASTM A500 Grade B', description: 'Cold-Formed Welded and Seamless Carbon Steel Structural Tubing' },
      { name: 'EN 39 Type 4', description: 'Loose steel tubes for tube and coupler scaffolds' },
      { name: 'BS 1139', description: 'Metal scaffolding — loose steel tube specification (equivalent & acceptable)' },
    ],
    relatedProducts: ['swivel-coupler', 'right-angle-coupler', 'tube-fittings-scaffolding', 'base-jack'],
  },

  {
    slug: 'right-angle-coupler',
    category: PRODUCT_CATEGORIES.TUBES_FITTINGS,
    name: 'Right-Angle Coupler (Double Coupler)',
    shortDescription: 'Drop-forged carbon steel right-angle coupler connecting two 48.3 mm tubes at 90 degrees conforming to EN 74-1 Class B.',
    description: `Drop-forged high-strength double coupler designed to connect two 48.3 mm scaffold tubes at a fixed 90-degree right angle. Engineered to exceed EN 74-1 Class B slip-resistance ratings with hot-dip galvanized or zinc electroplated finish.`,
    heroImage: '/src/assets/images/fitting-double-coupler.jpg',
    gallery: [
      '/src/assets/images/fitting-double-coupler.jpg',
      '/src/assets/images/fitting-swivel-coupler.jpg',
      '/src/assets/images/fitting-putlog-coupler.jpg',
      '/src/assets/images/fitting-sleeve-coupler.jpg'
    ],
    specifications: [
      { label: 'Connection Angle', value: 'Fixed 90°' },
      { label: 'Tube Diameter', value: '48.3 mm × 48.3 mm' },
      { label: 'Material', value: 'Drop-Forged Carbon Steel (High-Tensile)' },
      { label: 'Tightening Torque', value: '54 Nm' },
      { label: 'Standard Compliance', value: 'EN 74-1 Class B Certified' },
      { label: 'Slip Resistance Load', value: '≥ 15.0 kN (Class B tested)' },
      { label: 'Failure Load', value: '≥ 30.0 kN' },
      { label: 'Surface Finish', value: 'Hot-Dip Galvanized / Zinc Electroplated' },
      { label: 'Fasteners', value: 'Grade 8.8 T-bolts with 21 mm / 22 mm flanged hex nuts' },
    ],
    features: [
      'Drop-forged heavy ribbed body for maximum load resistance without distortion',
      'Corrosion-resistant hot-dip galvanized or electro-galvanized coating',
      'Full compliance with EN 74-1 Class B slip-resistance testing',
      'High-tensile forged T-bolts prevent thread stripping during impact wrench tightening',
    ],
    applications: [
      'Connecting standards to ledgers and transoms at 90 degrees',
      'Structural frame assembly and load-bearing falsework grids',
      'Heavy-duty industrial and offshore scaffolding',
    ],
    standards: [
      { name: 'EN 74-1 Class B', description: 'Couplers for scaffolding — Class B heavy duty rating' },
      { name: 'BS 1139', description: 'Metal scaffolding — specifications for fittings' },
    ],
    relatedProducts: ['swivel-coupler', 'scaffold-tube-48', 'base-jack'],
  },

  {
    slug: 'swivel-coupler',
    category: PRODUCT_CATEGORIES.TUBES_FITTINGS,
    name: 'Swivel Coupler',
    shortDescription: 'Drop-forged steel universal swivel coupler for connecting two 48.3 mm tubes at any arbitrary angle conforming to EN 74-1 Class B.',
    description: `Heavy-duty drop-forged swivel coupler allowing two 48.3 mm scaffold tubes to be clamped at any required angle. Essential for diagonal sway bracing, ledger bracing, and triangular structural ties. Fully certified to EN 74-1 Class B.`,
    heroImage: '/src/assets/images/fitting-swivel-coupler.jpg',
    gallery: [
      '/src/assets/images/fitting-swivel-coupler.jpg',
      '/src/assets/images/fitting-double-coupler.jpg',
      '/src/assets/images/fitting-putlog-coupler.jpg',
      '/src/assets/images/fitting-board-retaining-clamp.jpg',
      '/src/assets/images/fitting-sleeve-coupler.jpg',
      '/src/assets/images/fitting-beam-clamp.jpg'
    ],
    specifications: [
      { label: 'Standard Compliance', value: 'EN 74-1 Class B Certified' },
      { label: 'Connection Angle', value: '360° Swivel rotation' },
      { label: 'Tube Diameter', value: '48.3 mm × 48.3 mm' },
      { label: 'Material', value: 'Drop-Forged Carbon Steel' },
      { label: 'Tightening Torque', value: '54 Nm' },
      { label: 'Slip Resistance Load', value: '≥ 15.0 kN (Class B requirement)' },
      { label: 'Failure Load', value: '≥ 20.0 kN' },
      { label: 'Surface Finish', value: 'Hot-Dip Galvanized / Zinc Electroplated' },
      { label: 'Fasteners', value: 'Grade 8.8 T-bolts with 21 mm / 22 mm flanged hex nuts' },
    ],
    features: [
      '360-degree rotation for diagonal sway bracing and angular propping',
      'Drop-forged heavy-gauge body ensures maximum tensile resistance',
      'Certified to EN 74-1 Class B with physical test verification',
      'Heavy-duty zinc passivation coating protects against marine and coastal atmospheres',
    ],
    applications: [
      'Diagonal sway bracing and plan bracing',
      'Triangulated structural ties and facade stabilizers',
      'Tubular framework junctions on irregular structures',
    ],
    standards: [
      { name: 'EN 74-1 Class B', description: 'Scaffolding couplers — Class B Certified' },
      { name: 'BS 1139', description: 'Metal scaffolding — specifications for fittings' },
    ],
    relatedProducts: ['right-angle-coupler', 'scaffold-tube-48', 'base-jack'],
  },

  {
    slug: 'base-jack',
    category: PRODUCT_CATEGORIES.TUBES_FITTINGS,
    name: 'Adjustable Base Jack & Fork Head',
    shortDescription: 'Heavy-duty cold-rolled Acme threaded screw base jack (SWL 40 kN) with 150×150×6mm base plate for scaffold leveling.',
    description: `Adjustable base jacks provide precision leveling and heavy vertical load transfer from scaffolding standards directly to ground timber sole boards or concrete foundations. Manufactured from high-strength carbon steel featuring a continuous cold-rolled Acme thread that prevents jam-ups from construction debris, paired with a malleable cast iron wing-nut collar for effortless height calibration under load.

Available in Solid Stem and Hollow Tube designs, with complementary Universal Jacks, Fixed or Adjustable U-Head Fork Heads for timber and aluminum bearer support, and Swivel / Rocking Base Plates for inclined or stepped grade surfaces.`,
    heroImage: '/src/assets/images/scaffold-base-jack.jpg',
    gallery: [
      '/src/assets/images/scaffold-base-jack.jpg',
      '/src/assets/images/scaffolding-accessories-collection.jpg',
      '/src/assets/images/scaffold-tubes-fittings.jpg'
    ],
    specifications: [
      { label: 'Safe Working Load (SWL)', value: '40 kN (4,000 kg / 4.0 metric tons) safe axial vertical capacity' },
      { label: 'Base Plate Dimensions', value: '150 mm × 150 mm × 6.0 mm (with 4 pre-punched holes for timber anchor nail fixing)' },
      { label: 'Stem Dimensions', value: '660 mm total length × 38 mm OD (standard fit) / 48.3 mm OD (heavy-duty), 4.0 mm wall' },
      { label: 'Effective Adjustment', value: 'Up to 500 mm continuous height leveling range' },
      { label: 'Thread Profile', value: 'Precision cold-rolled self-cleaning Acme trapezoidal thread' },
      { label: 'Adjustment Collar', value: 'Heavy-duty ductile malleable cast iron double-wing nut with rolled thread engagement' },
      { label: 'Stem Types Available', value: 'Solid bar stem or hollow structural seamless tube stem' },
      { label: 'Alternative Head Options', value: 'Universal Jack, Fixed/Adjustable U-Head Fork Head (for H20/aluminum beams), Swivel Base Plate' },
      { label: 'Surface Protection', value: 'Hot-Dip Galvanized to EN ISO 1461 (minimum 55 µm) or Zinc Electroplated' },
      { label: 'Standard Compliance', value: 'Conforms to BS 1139, EN 12811-1, and OSHA 1926.451' },
    ],
    features: [
      'Self-cleaning cold-rolled Acme threads resist mortar, slurry, and debris build-up on job sites',
      'Robust 150×150×6mm plate distributes intense standard reactions evenly over timber sole plates',
      'Four corner anchor holes facilitate positive nail or screw anchoring to prevent foot displacement',
      'Ergonomic cast wing-nut allows fast manual rotation and fine leveling under full working loads',
      'Full compatibility with Cuplock, Ringlock, Kwikstage, and Tube & Fitting scaffolding standards',
    ],
    applications: [
      'Bottom foundation leveling for Cuplock, Ringlock, and Tube scaffolds on uneven or sloped ground',
      'Top head jack propping for primary falsework beams, slab formwork, and bridging lintels',
      'Industrial maintenance shoring, tank farms, and bridge substructure scaffolding access',
    ],
    standards: [
      { name: 'BS 1139 Part 2', description: 'Metal scaffolding — specifications for base plates and jacks' },
      { name: 'EN 12811-1', description: 'Temporary works equipment — Performance requirements and general design' },
      { name: 'OSHA 1926.451', description: 'Safety and Health Regulations for Construction — Scaffolds' },
    ],
    relatedProducts: ['scaffold-tube-48', 'cuplock-scaffolding-system', 'scaffolding-accessories'],
  },

  {
    slug: 'steel-scaffold-planks',
    category: PRODUCT_CATEGORIES.PLATFORMS,
    name: 'Galvanized Steel Scaffold Planks & Boards',
    shortDescription: 'Anti-slip perforated galvanized steel walk boards with reinforcing stiffeners and heavy-duty end hooks.',
    description: `Galvanized Steel Scaffold Planks and Boards supplied by Tianjin Decent International Trade Co., Ltd. are engineered for high-durability working platforms across commercial, civil, and industrial scaffolding. Manufactured from high-strength pre-galvanized or hot-dip galvanized sheet steel with longitudinal box-channel ribs for maximum deflection resistance.

Featuring a non-slip perforated dimpled surface that prevents slip hazards from water, oil, or mud accumulation, complete with heavy-duty welded end hooks that lock firmly onto scaffolding ledgers and transoms.`,
    heroImage: '/src/assets/images/scaffold-steel-plank.jpg',
    gallery: [
      '/src/assets/images/scaffold-steel-plank.jpg',
      '/src/assets/images/platform-board.jpg',
      '/src/assets/images/scaffold-staircase.jpg'
    ],
    specifications: [
      { label: 'Plank Widths', value: '210 mm, 225 mm, 240 mm, 250 mm, 480 mm' },
      { label: 'Standard Lengths', value: '1.0 m, 1.5 m, 1.8 m, 2.0 m, 2.5 m, 3.0 m, 4.0 m' },
      { label: 'Profile Height', value: '38 mm, 45 mm, 50 mm box-channel with welded bottom stiffeners' },
      { label: 'Sheet Thickness', value: '1.1 mm, 1.2 mm, 1.5 mm, 1.8 mm, 2.0 mm structural galvanized steel' },
      { label: 'Surface Pattern', value: 'Anti-slip raised perforated dimples with rapid drainage perforations' },
      { label: 'End Connections', value: 'Dual or triple welded hooks with safety lock pins or plain box ends' },
      { label: 'Surface Finish', value: 'Pre-galvanized (Z120–Z275) or Hot-Dip Galvanized (HDG)' },
      { label: 'Load Rating', value: 'Conforms to EN 12811-1 Class 3 (2.0 kN/m²) through Class 6 (6.0 kN/m²)' },
    ],
    features: [
      'Convex perforated anti-slip surface ensures secure worker footing even in rain or grease',
      'Box-shaped longitudinal stiffeners prevent sagging and mid-span flexure under heavy worker loads',
      'Fire-resistant, rot-proof, and significantly more durable than traditional timber boards',
      'Welded end hooks fit securely over standard 48.3 mm scaffolding transoms and ledgers',
      'Stackable design with interlocking edges for compact transport container loading',
    ],
    applications: [
      'Main working platforms and walkway decking on Ringlock, Cuplock, and Tube scaffolds',
      'Suspended access decks in industrial boiler houses, tank farms, and shipyards',
      'Facade masonry access, bridge maintenance, and exterior plastering decks',
    ],
    standards: [
      { name: 'EN 12811-1', description: 'Temporary works equipment — Working platforms and decking' },
      { name: 'BS 1139', description: 'Metal scaffolding — specifications for steel scaffold boards' },
      { name: 'OSHA 1926.451', description: 'General safety requirements for scaffolding platforms' },
    ],
    relatedProducts: ['aluminum-platform', 'scaffold-staircase', 'frame-scaffolding-system'],
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
    relatedProducts: ['steel-scaffold-planks', 'aluminum-tower'],
  },

  {
    slug: 'aluminum-tower',
    category: PRODUCT_CATEGORIES.MOBILE_TOWERS,
    name: 'Mobile Aluminum Scaffolding Tower',
    shortDescription: 'Free-standing modular mobile access tower (SWL 700 kg) in high-grade aluminum with 200 mm lockable castors.',
    description: `Lightweight modular mobile access tower engineered for rapid tool-free assembly and safe high-elevation working platforms. Constructed from high-tensile structural aluminum alloy tubes (6061-T6 / 6082-T6) featuring castellated anti-slip rung frames, 200 mm dual-locking polyurethane castors, heavy-duty outriggers, internal ladder bays, and trapdoor working decks.`,
    heroImage: '/src/assets/images/aluminum-tower.jpg',
    gallery: [
      '/src/assets/images/aluminum-tower.jpg',
      '/src/assets/images/platform-board.jpg',
      '/src/assets/images/aluminum-extension-ladder.jpg'
    ],
    specifications: [
      { label: 'Tower Material', value: 'High-strength structural aluminum alloy (6061-T6 / 6082-T6)' },
      { label: 'Working Heights', value: 'Modular configurations up to 16.0 meters working height' },
      { label: 'Safe Working Load (SWL)', value: '250 kg per platform deck; 700 kg maximum total tower load' },
      { label: 'Castor Wheels', value: '200 mm (8-inch) dual-locking polyurethane wheels (500 kg rating per wheel) with grooved height adjusters' },
      { label: 'Frame Dimensions', value: 'Single Width (0.85 m / 1.2 m) & Double Width (1.45 m / 2.0 m); lengths 1.8 m, 2.5 m, 3.0 m' },
      { label: 'Rung Construction', value: 'Deeply ribbed castellated anti-slip aluminum tubing welded directly to upright stiles' },
      { label: 'Decking & Access', value: 'Perforated anti-slip platform with slip-resistant marine plywood trapdoor access' },
      { label: 'Stabilizing Outriggers', value: 'Telescopic clamp-on outriggers ensuring 3:1 base-to-height stability ratio' },
      { label: 'Compliance Standard', value: 'Certified to EN 1004 Class 3 and BS 1139 Part 3' },
    ],
    features: [
      'Castellated ribbed tube design provides safe climbing grip and enhanced structural rigidity',
      'Dual-action 200 mm polyurethane castors provide independent rolling and swiveling locks',
      'Color-coded snap-lock brace claws enable fast tool-free assembly and dismantling',
      'Trapdoor platform design ensures workers always remain protected inside the guardrail perimeter',
      'Lightweight aluminum frames can be maneuvered through narrow corridors and standard double doors',
    ],
    applications: [
      'Interior building fit-out, ceiling installation, lighting, and HVAC duct maintenance',
      'Commercial facade cleaning, window glazing, and architectural cladding inspection',
      'Industrial plant turnaround access inside refineries, power generation halls, and cleanrooms',
    ],
    standards: [
      { name: 'EN 1004', description: 'Mobile access and working towers made of prefabricated elements' },
      { name: 'BS 1139 Part 3', description: 'Specification for prefabricated mobile access and working towers' },
      { name: 'OSHA 1926.452', description: 'Safety standards for mobile scaffolds' },
    ],
    relatedProducts: ['aluminum-platform', 'aluminum-extension-ladder', 'scaffolding-accessories'],
  },

  {
    slug: 'aluminum-extension-ladder',
    category: PRODUCT_CATEGORIES.LADDERS,
    name: 'Industrial Aluminum Extension Ladder (Rope-Operated)',
    shortDescription: 'Heavy-duty 2-section rope-and-pulley operated extension ladder (SWL 150 kg) with serrated D-rungs and swell rubber safety feet.',
    description: `Industrial-grade 2-section aluminum extension ladder engineered for heavy civil, industrial, and electrical utility access. Features a smooth nylon rope-and-pulley deployment system, spring-loaded gravity lock hooks that engage rungs automatically, and deeply serrated slip-resistant D-rungs crimped into heavy box-section stiles.

Fitted with heavy-duty swell rubber pivoting safety shoes with serrated ice/gravel picks for reliable ground traction and non-marring molded rubber top wall caps that protect building surfaces while preventing lateral slide. Fully compliant with EN 131 Professional standards.`,
    heroImage: '/src/assets/images/aluminum-extension-ladder.jpg',
    gallery: [
      '/src/assets/images/aluminum-extension-ladder.jpg',
      '/src/assets/images/aluminum-tower.jpg'
    ],
    specifications: [
      { label: 'Ladder Type', value: '2-section rope-and-pulley operated extension ladder' },
      { label: 'Working Height Range', value: 'Available in 2×5 up to 2×19 rungs (extended lengths from 3.0 m up to 11.4 m)' },
      { label: 'Safe Working Load (SWL)', value: '150 kg (330 lbs) conforming to EN 131 Professional standard' },
      { label: 'Material & Alloy', value: 'High-strength extruded architectural aluminum alloy (6061-T6 / 6063-T6)' },
      { label: 'Rung Profile', value: 'Deeply serrated anti-slip D-rungs with 3-piece hydraulic crimped joints' },
      { label: 'Deployment Mechanism', value: 'Low-friction nylon grooved pulley with braided polyester haul rope' },
      { label: 'Rung Locking Mechanism', value: 'Spring-loaded cast alloy gravity lock hooks with automatic rung engagement' },
      { label: 'Safety Foot Design', value: 'Dual-action pivoting swell rubber safety shoes with serrated steel ice picks' },
      { label: 'Top Wall Protection', value: 'Heavy-duty non-marring molded rubber wall caps to prevent facade damage and slip' },
      { label: 'Standards Compliance', value: 'Certified to EN 131, BS 2037 Class 1 Industrial, and OSHA 1926.1053' },
    ],
    features: [
      'Smooth rope-and-pulley system allows single-operator extension from ground level without pinching',
      'Automatic gravity lock hooks engage rungs securely at each height tier for fail-safe ascent',
      'Deep serrated D-rungs provide flat, comfortable, slip-resistant standing surface underfoot',
      'Pivoting swell rubber shoes adjust automatically to ground slope with flip-down ice pick spurs',
      'Molded rubber top caps grip smooth brick, tile, and metal surfaces without marring or slipping',
      'Corrosion-resistant extruded aluminum construction suitable for humid outdoor and marine job sites',
    ],
    applications: [
      'Industrial scaffolding erection, access staging, and platform crossover inspection',
      'Petrochemical refinery maintenance, electrical cable trays, and pipe bridge inspection',
      'Commercial building construction, roofing access, and telecommunications cabling',
    ],
    standards: [
      { name: 'EN 131', description: 'Ladders — Professional heavy-duty industrial specification' },
      { name: 'BS 2037 Class 1', description: 'Specification for portable aluminium ladders and steps' },
      { name: 'OSHA 1926.1053', description: 'Safety standards for ladders used in construction' },
    ],
    relatedProducts: ['aluminum-tower', 'scaffolding-accessories', 'aluminum-platform'],
  },
];

/**
 * Detailed Scaffolding Fittings & Couplers Catalog with high-resolution imagery and Class B specs
 */
export const SCAFFOLDING_FITTINGS_CATALOG = [
  {
    name: 'Drop-Forged Swivel Coupler',
    standard: 'EN 74-1 Class B Certified',
    image: '/src/assets/images/fitting-swivel-coupler.jpg',
    tubeDiameter: '48.3 mm × 48.3 mm',
    tighteningTorque: '54 Nm',
    slipLoad: '≥ 15.0 kN (Class B requirement)',
    failureLoad: '≥ 20.0 kN',
    finish: 'Hot-Dip Galvanized / Zinc Electroplated',
    fastener: 'Grade 8.8 T-bolts with 21 mm / 22 mm flanged hex nuts',
    description: 'Universal swivel coupler enabling 360-degree rotation for diagonal sway bracing, ledger bracing, and triangular structural ties on 48.3 mm scaffold tubes.'
  },
  {
    name: 'Drop-Forged Right-Angle (Double) Coupler',
    standard: 'EN 74-1 Class B Certified',
    image: '/src/assets/images/fitting-double-coupler.jpg',
    tubeDiameter: '48.3 mm × 48.3 mm',
    tighteningTorque: '54 Nm',
    slipLoad: '≥ 15.0 kN (Class B requirement)',
    failureLoad: '≥ 30.0 kN',
    finish: 'Hot-Dip Galvanized / Zinc Electroplated',
    fastener: 'Grade 8.8 T-bolts with 21 mm / 22 mm flanged hex nuts',
    description: 'Heavy ribbed drop-forged construction connecting two scaffold tubes at a rigid 90-degree angle with maximum load transmission.'
  },
  {
    name: 'Drop-Forged Putlog Coupler (Single Coupler)',
    standard: 'EN 74-1 / BS 1139 Certified',
    image: '/src/assets/images/fitting-putlog-coupler-client.png',
    tubeDiameter: '48.3 mm × 48.3 mm',
    tighteningTorque: '54 Nm',
    slipLoad: 'Working Load Limit (WLL) 6.25 kN',
    failureLoad: '≥ 12.0 kN',
    finish: 'Hot-Dip Galvanized / Zinc Electroplated',
    fastener: 'Grade 8.8 T-bolt with 21 mm flanged hex nut',
    description: 'Drop-forged single putlog wrap coupler designed to securely connect transoms and putlogs across ledgers for board deck load distribution.'
  },
  {
    name: 'Board Retaining Clamp (BRC)',
    standard: 'BS 1139 / EN 74 Compliant',
    image: '/src/assets/images/fitting-board-retaining-clamp-client.png',
    tubeDiameter: '48.3 mm Tube to 38 mm / 50 mm Timber Board',
    tighteningTorque: '30 Nm',
    slipLoad: 'Uplift resistance ≥ 5.0 kN',
    failureLoad: 'Heavy-Duty Forged Jaw',
    finish: 'Hot-Dip Galvanized',
    fastener: 'Grade 8.8 hex bolt & flanged lock nut',
    description: 'Drop-forged clamp with serrated locking jaws designed to firmly secure timber scaffold boards or metal decks to 48.3 mm transom tubes, eliminating wind uplift risk.'
  },
  {
    name: 'External Sleeve Coupler',
    standard: 'EN 74-1 Class B Certified',
    image: '/src/assets/images/fitting-sleeve-coupler.jpg',
    tubeDiameter: '48.3 mm OD External',
    tighteningTorque: '54 Nm',
    slipLoad: 'Tensile ≥ 3.0 kN | Bending ≥ 1.4 kN·m',
    failureLoad: 'Heavy duty external sleeve envelope',
    finish: 'Hot-Dip Galvanized (HDG) to EN ISO 1461',
    fastener: 'Twin Grade 8.8 clamping bolts & lock nuts',
    description: 'External full-wrap clamp with central dividing register rib for joining two 48.3 mm scaffold tubes securely end-to-end.'
  },
  {
    name: 'Drop-Forged Girder Coupler / Beam Clamp (SK Clamp)',
    standard: 'BS 1139 / EN 74 Certified',
    image: '/src/assets/images/fitting-beam-clamp.jpg',
    tubeDiameter: '48.3 mm Scaffolding Tube to Steel Flange',
    tighteningTorque: '54 Nm',
    slipLoad: 'Working Load 30 kN per pair',
    failureLoad: '≥ 45 kN',
    finish: 'Hot-Dip Galvanized / Zinc Electroplated',
    fastener: 'Dual Grade 8.8 clamping bolts',
    description: 'Forged beam clamp designed to lock scaffold tubes securely directly onto universal beams, columns, and structural steel flanges up to 45 mm.'
  }
];

/**
 * Find a product by its slug
 * @param {string} slug 
 * @returns {object|undefined}
 */
export function getProductBySlug(slug) {
  return PRODUCTS.find(p => p.slug === slug);
}

/**
 * Get products filtered by category
 * @param {string} category 
 * @returns {Array}
 */
export function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

/**
 * Get all category definitions with counts
 * @returns {Array}
 */
export function getAllCategories() {
  return Object.entries(CATEGORY_META).map(([key, meta]) => ({
    id: key,
    ...meta,
    count: PRODUCTS.filter(p => p.category === key).length
  }));
}

/**
 * Featured steel pipe products directly referenced from the client menu specification
 */
export const YFGG_PIPE_PRODUCTS = [
  {
    name: 'Hot dip galvanized steel pipe',
    slug: 'hot-dip-galvanized-steel-pipe',
    specification: 'DN15-DN300',
    uses: 'Widely used in water, gas, air, oil and steam and other low-pressure fluid transportation and mechanical structure',
    image: '/src/assets/images/hot-dip-galvanized-steel-pipe.jpg',
    checked: true,
  },
  {
    name: 'Straight seam high-frequency welded steel pipe',
    slug: 'straight-seam-welded-steel-pipe',
    specification: 'DN15-DN300',
    uses: 'Widely used in water, gas, air, oil and steam and other low-pressure fluid transportation and mechanical structure; oil & gas line pipe, rotary pressure drill pipe',
    image: '/src/assets/images/straight-seam-welded-steel-pipe.jpg',
    checked: true,
  },
  {
    name: 'Lined plastic composite steel pipe',
    slug: 'plastic-coated-composite-steel-pipe',
    specification: 'DN15-DN300',
    uses: 'Widely used in drinking water supply, industrial clean water, and corrosion-resistant pipeline networks',
    image: '/src/assets/images/plastic-coated-composite-steel-pipe.jpg',
    checked: false,
  },
  {
    name: 'Coated composite steel pipe',
    slug: 'plastic-coated-composite-steel-pipe',
    specification: 'Plastic composite pipe: DN15-DN2000 | Socket-coated tubes: DN100-DN1600',
    uses: 'Widely used in fire water supply systems, building water supply transportation, chemical fluid transportation, threading protection and other fields',
    image: '/src/assets/images/plastic-coated-composite-steel-pipe.jpg',
    checked: true,
  },
  {
    name: 'Galvanized seamless steel pipe',
    slug: 'galvanized-seamless-steel-pipe',
    specification: 'DN22-DN325',
    uses: 'Widely used in construction, electric power, petrochemical and other fields; building load-bearing structures, bridges, steel structures and power transmission',
    image: '/src/assets/images/galvanized-seamless-steel-pipe.jpg',
    checked: true,
  },
  {
    name: 'Stainless steel pipes and fittings',
    slug: 'seamless-steel-pipes',
    specification: 'DN15-DN300 / Custom Wall',
    uses: 'Food & beverage processing, medical sanitation, marine offshore engineering, and high-corrosion chemical fluid transportation',
    image: '/src/assets/images/seamless-steel-pipes.jpg',
    checked: false,
  },
  {
    name: 'Spiral seam double-sided submerged arc welded steel pipe',
    slug: 'spiral-submerged-arc-welded-steel-pipe',
    specification: 'φ219-2020mm, thickness up to 20mm',
    uses: 'Mainly used for oil, natural gas and other pressure-bearing long-distance pipelines, water, gas, air, heating steam, and piling structures',
    image: '/src/assets/images/spiral-submerged-arc-welded-steel-pipe.jpg',
    checked: true,
  },
  {
    name: 'Hot dip galvanized square rectangular pipe',
    slug: 'hot-dip-galvanized-square-rectangular-pipe',
    specification: '25x25mm-200x200mm, 25x50mm-150x200mm',
    uses: 'Widely used in curtain wall, construction, machinery manufacturing, shipbuilding, photovoltaic support, steel structure engineering, automobile chassis',
    image: '/src/assets/images/hot-dip-galvanized-square-rectangular-pipe.jpg',
    checked: true,
  },
  {
    name: 'Square rectangular welded steel pipe',
    slug: 'square-rectangular-welded-steel-pipe',
    specification: '25x25mm-400x400mm, 25x40mm-300x500mm',
    uses: 'Widely used in steel structure construction, machinery manufacturing, construction engineering, automobile manufacturing, shipbuilding, electric power',
    image: '/src/assets/images/square-rectangular-welded-steel-pipe.jpg',
    checked: true,
  },
  {
    name: 'Pipe fitting',
    slug: 'tube-fittings-scaffolding',
    specification: 'Elbows, tees, reducers, couplings, flanges',
    uses: 'Pipeline connection, direction changing, branching and high-pressure sealing across industrial fluid distribution networks',
    image: '/src/assets/images/scaffold-tubes-fittings.jpg',
    checked: false,
  },
  {
    name: 'socket type scaffold',
    slug: 'ringlock-system',
    specification: 'Ø 48.3 mm x 3.2 mm / Q355 Grade',
    uses: 'Heavy civil bridge shoring, building facade access, power plant maintenance, and industrial high-load falsework support',
    image: '/src/assets/images/ringlock-scaffolding.jpg',
    checked: false,
  },
];


