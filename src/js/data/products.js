/**
 * TIANJIN DECENT INTERNATIONAL TRADE CO., LTD. — PRODUCT DATA MODEL
 * Source of Truth Product Categorization Hierarchy:
 * 1. Steel plate/sheet
 *    - Hot rolled coils (HR)
 *    - Cold rolled coils (CCR)
 *    - Pre-galvanized coils
 *    - Color coated coils (PPGZI)
 * 2. Steel section/profile
 *    - H/I/U Beams & Channel
 *    - IPE / UPN
 *    - Angle Bar
 *    - Square Bar
 *    - Round Bar
 *    - Flut Bar
 * 3. Steel pipe/tube
 *    - Round Pipe
 *    - Rectangular Pipe
 *    - Seamless pipe
 *    - ERW Pipe (Electro welded pipe)
 * 4. Scaffolding & Accessories
 *    - Ringlock System
 *    - Cuplock
 *    - Kwikstage
 *    - Steel prop/shoring
 *    - Steel plank/board
 *    - Staircase/beam ladder/ladder
 *    - Couplers
 * 5. Steel wire/rod
 *    - Wire rod
 *    - High speed wire rod
 *    - ordinary wire rod
 */

export const PRODUCT_HIERARCHY_LIST = [
  {
    id: 'steel-plate-sheet',
    name: 'Steel plate/sheet',
    subcategories: [
      'Hot rolled coils (HR)',
      'Cold rolled coils (CCR)',
      'Pre-galvanized coils',
      'Color coated coils (PPGZI)'
    ]
  },
  {
    id: 'steel-section-profile',
    name: 'Steel section/profile',
    subcategories: [
      'H/I/U Beams & Channel',
      'IPE / UPN',
      'Angle Bar',
      'Square Bar',
      'Round Bar',
      'Flut Bar'
    ]
  },
  {
    id: 'steel-pipe-tube',
    name: 'Steel pipe/tube',
    subcategories: [
      'Round Pipe',
      'Rectangular Pipe',
      'Seamless pipe',
      'ERW Pipe (Electro welded pipe)'
    ]
  },
  {
    id: 'scaffolding-accessories',
    name: 'Scaffolding & Accessories',
    subcategories: [
      'Ringlock System',
      'Cuplock',
      'Kwikstage',
      'Steel prop/shoring',
      'Steel plank/board',
      'Staircase/beam ladder/ladder',
      'Couplers'
    ]
  },
  {
    id: 'steel-wire-rod',
    name: 'Steel wire/rod',
    subcategories: [
      'Wire rod',
      'High speed wire rod',
      'ordinary wire rod'
    ]
  }
];

export const PRODUCT_HIERARCHY = {
  'steel-plate-sheet': PRODUCT_HIERARCHY_LIST[0],
  'steel-section-profile': PRODUCT_HIERARCHY_LIST[1],
  'steel-pipe-tube': PRODUCT_HIERARCHY_LIST[2],
  'scaffolding-accessories': PRODUCT_HIERARCHY_LIST[3],
  'steel-wire-rod': PRODUCT_HIERARCHY_LIST[4],
};
PRODUCT_HIERARCHY.map = (...args) => PRODUCT_HIERARCHY_LIST.map(...args);
PRODUCT_HIERARCHY.forEach = (...args) => PRODUCT_HIERARCHY_LIST.forEach(...args);
PRODUCT_HIERARCHY.find = (...args) => PRODUCT_HIERARCHY_LIST.find(...args);

export const PRODUCT_CATEGORIES = {
  // Canonical 5 Categories
  STEEL_PLATE_SHEET: 'steel-plate-sheet',
  STEEL_SECTION_PROFILE: 'steel-section-profile',
  STEEL_PIPE_TUBE: 'steel-pipe-tube',
  SCAFFOLDING_ACCESSORIES: 'scaffolding-accessories',
  STEEL_WIRE_ROD: 'steel-wire-rod',

  // Backward-compatibility aliases
  STEEL_COILS: 'steel-plate-sheet',
  STRUCTURAL_PROFILES: 'steel-section-profile',
  STEEL_PIPES: 'steel-pipe-tube',
  SCAFFOLDING_SYSTEMS: 'scaffolding-accessories',
  TUBES_FITTINGS: 'scaffolding-accessories',
  PLATFORMS: 'scaffolding-accessories',
  MOBILE_TOWERS: 'scaffolding-accessories',
  LADDERS: 'scaffolding-accessories',
  SAFETY_ACCESSORIES: 'scaffolding-accessories',
};

export const CATEGORY_META = {
  'steel-plate-sheet': {
    id: 'steel-plate-sheet',
    label: 'Steel plate/sheet',
    shortLabel: 'Steel plate/sheet',
    description: 'Hot rolled coils (HR), Cold rolled coils (CCR), Pre-galvanized coils, and Color coated coils (PPGZI).',
    image: '/src/assets/images/hr-steel-coils.jpg',
    subcategories: [
      'Hot rolled coils (HR)',
      'Cold rolled coils (CCR)',
      'Pre-galvanized coils',
      'Color coated coils (PPGZI)'
    ]
  },
  'steel-section-profile': {
    id: 'steel-section-profile',
    label: 'Steel section/profile',
    shortLabel: 'Steel section/profile',
    description: 'H/I/U Beams & Channel, IPE / UPN, Angle Bar, Square Bar, Round Bar, and Flut Bar.',
    image: '/src/assets/images/structural-steel-profiles.jpg',
    subcategories: [
      'H/I/U Beams & Channel',
      'IPE / UPN',
      'Angle Bar',
      'Square Bar',
      'Round Bar',
      'Flut Bar'
    ]
  },
  'steel-pipe-tube': {
    id: 'steel-pipe-tube',
    label: 'Steel pipe/tube',
    shortLabel: 'Steel pipe/tube',
    description: 'Round Pipe, Rectangular Pipe, Seamless pipe, and ERW Pipe (Electro welded pipe).',
    image: '/src/assets/images/seamless-steel-pipes.jpg',
    subcategories: [
      'Round Pipe',
      'Rectangular Pipe',
      'Seamless pipe',
      'ERW Pipe (Electro welded pipe)'
    ]
  },
  'scaffolding-accessories': {
    id: 'scaffolding-accessories',
    label: 'Scaffolding & Accessories',
    shortLabel: 'Scaffolding & Accessories',
    description: 'Ringlock System, Cuplock, Kwikstage, Steel prop/shoring, Steel plank/board, Staircase/beam ladder/ladder, and Couplers.',
    image: '/src/assets/images/cuplock-scaffolding-setup.jpg',
    subcategories: [
      'Ringlock System',
      'Cuplock',
      'Kwikstage',
      'Steel prop/shoring',
      'Steel plank/board',
      'Staircase/beam ladder/ladder',
      'Couplers'
    ]
  },
  'steel-wire-rod': {
    id: 'steel-wire-rod',
    label: 'Steel wire/rod',
    shortLabel: 'Steel wire/rod',
    description: 'Wire rod, High speed wire rod, and ordinary wire rod.',
    image: '/src/assets/images/steel-wire-rod.jpg',
    subcategories: [
      'Wire rod',
      'High speed wire rod',
      'ordinary wire rod'
    ]
  },

  // Compatibility aliases
  'steel-coils': {
    aliasOf: 'steel-plate-sheet',
    label: 'Steel plate/sheet',
  },
  'structural-profiles': {
    aliasOf: 'steel-section-profile',
    label: 'Steel section/profile',
  },
  'steel-pipes': {
    aliasOf: 'steel-pipe-tube',
    label: 'Steel pipe/tube',
  },
  'scaffolding-systems': {
    aliasOf: 'scaffolding-accessories',
    label: 'Scaffolding & Accessories',
  },
  'tubes-fittings': {
    aliasOf: 'scaffolding-accessories',
    label: 'Scaffolding & Accessories',
  },
  'platforms': {
    aliasOf: 'scaffolding-accessories',
    label: 'Scaffolding & Accessories',
  },
  'mobile-towers': {
    aliasOf: 'scaffolding-accessories',
    label: 'Scaffolding & Accessories',
  },
  'ladders': {
    aliasOf: 'scaffolding-accessories',
    label: 'Scaffolding & Accessories',
  },
  'safety-accessories': {
    aliasOf: 'scaffolding-accessories',
    label: 'Scaffolding & Accessories',
  },
};

/**
 * Normalizes any category string or legacy alias into the canonical category ID.
 * @param {string} category
 * @returns {string}
 */
export function normalizeCategory(category) {
  if (!category || category === 'all') return 'all';
  const meta = CATEGORY_META[category];
  if (meta && meta.aliasOf) return meta.aliasOf;
  if (CATEGORY_META[category]) return category;
  return category;
}

/** @type {Product[]} */
export const PRODUCTS = [
  {
    "slug": "hr-steel-coils",
    "category": "steel-plate-sheet",
    "name": "Hot rolled coils (HR)",
    "shortDescription": "Hot Rolled Carbon Steel Coils in commercial, structural, and high-strength grades across 1.2\u201325 mm thicknesses.",
    "description": "Hot Rolled Steel Coils (HR Coils) are primary flat-rolled steel products manufactured by Tianjin Decent International Trade Co., Ltd. from verified metallurgical production partners. Sourced in Commercial, Structural, and High-Strength grades tailored to exact buyer specifications, project engineering requirements, and global destination standards.\n\nAvailable in mill finish (black surface) or Pickled & Oiled (P&O) condition with mill edge (ME) or trimmed/slit edge (TE). Supplied with full Mill Test Certificates (MTC) and third-party inspection verification (SGS / BV) upon request. Export-worthy seaworthy packing suitable for container and bulk vessel shipments.",
    "heroImage": "/src/assets/images/hr-steel-coils.jpg",
    "gallery": [
      "/src/assets/images/hr-steel-coils.jpg",
      "/src/assets/images/galvanized-steel-coils.jpg"
    ],
    "specifications": [
      {
        "label": "Product Name",
        "value": "Hot Rolled Steel Coils (HR Coils)"
      },
      {
        "label": "Grades",
        "value": "Commercial, Structural & High-Strength grades as per customer requirement"
      },
      {
        "label": "Common Standards",
        "value": "ASTM A36/A1011, EN 10025/EN 10051, JIS G3131/G3101, or equivalent"
      },
      {
        "label": "Thickness Range",
        "value": "Typically 1.2\u201325 mm (other thicknesses available on request)"
      },
      {
        "label": "Width Range",
        "value": "Typically 800\u20132,000 mm (custom widths subject to mill capability)"
      },
      {
        "label": "Coil Weight",
        "value": "As per mill standard and buyer requirements (approx. 15\u201328 tons)"
      },
      {
        "label": "Surface Condition",
        "value": "Mill finish / black surface; Pickled & Oiled (P&O) available"
      },
      {
        "label": "Edge Condition",
        "value": "Mill edge (ME) or trimmed / slit edge (TE)"
      },
      {
        "label": "Mechanical Properties",
        "value": "As specified according to the applicable grade and standard"
      },
      {
        "label": "Supply Form",
        "value": "Coils, with customized ID/OD (e.g. 610/760 mm ID) and strapping"
      },
      {
        "label": "Inspection Protocol",
        "value": "Mill Test Certificate (MTC) and third-party inspection on request"
      },
      {
        "label": "Packing Standard",
        "value": "Export-worthy seaworthy packing suitable for international shipment"
      }
    ],
    "features": [
      "Comprehensive thickness range from 1.2 mm up to 25.0 mm",
      "Wide mill range accommodating widths from 800 mm to 2,000 mm",
      "Available in mill black finish or Pickled & Oiled (P&O)",
      "High structural integrity and uniform thickness tolerances",
      "Full chemical composition and tensile mechanical data provided",
      "Anti-corrosion seaworthy strapping and moisture-barrier wrapping"
    ],
    "applications": [
      "Construction and civil engineering works",
      "Heavy structural steel fabrication",
      "Automotive components and chassis manufacturing",
      "Machinery and heavy equipment frames",
      "Welded steel pipes, tubes, and pressure tanks",
      "General industrial engineering and roll forming"
    ],
    "standards": [
      {
        "name": "ASTM A36 / A1011",
        "description": "Standard Specification for Steel, Sheet and Strip, Carbon, Structural"
      },
      {
        "name": "EN 10025 / EN 10051",
        "description": "Hot rolled structural steel products and dimensional tolerances"
      },
      {
        "name": "JIS G3131 / G3101",
        "description": "Commercial and general structural hot-rolled mild steel plates"
      }
    ],
    "relatedProducts": [
      "cold-rolled-coils",
      "pre-galvanized-steel-coils",
      "color-coated-steel-coils"
    ],
    "categoryName": "Steel plate/sheet",
    "subcategory": "Hot rolled coils (HR)"
  },
  {
    "slug": "cold-rolled-coils",
    "category": "steel-plate-sheet",
    "categoryName": "Steel plate/sheet",
    "subcategory": "Cold rolled coils (CCR)",
    "name": "Cold rolled coils (CCR)",
    "shortDescription": "Cold Rolled Carbon Steel Coils (CCR) in commercial and deep-drawing grades (SPCC, DC01) across 0.2\u20133.0 mm thicknesses.",
    "description": "Cold Rolled Coils (CCR) supplied by Tianjin Decent International Trade Co., Ltd. are flat-rolled steel products manufactured by cold reduction of hot-rolled pickled strip. Engineered for superior surface finish, uniform thickness tolerance, and exceptional ductility for stamping, bending, and roll forming.\n\nSupplied in annealed, temper-rolled condition with oiled or dry surface, with full Mill Test Certificates (MTC EN 10204 3.1) and seaworthy export packing.",
    "heroImage": "/src/assets/images/galvanized-steel-coils.jpg",
    "gallery": [
      "/src/assets/images/galvanized-steel-coils.jpg",
      "/src/assets/images/hr-steel-coils.jpg"
    ],
    "specifications": [
      {
        "label": "Product Name",
        "value": "Cold rolled coils (CCR)"
      },
      {
        "label": "Grades",
        "value": "SPCC, SPCD, SPCE, DC01, DC02, DC03, DC04, SAE 1008"
      },
      {
        "label": "Common Standards",
        "value": "EN 10130, JIS G3141, ASTM A1008, or equivalent"
      },
      {
        "label": "Thickness Range",
        "value": "Typically 0.2\u20133.0 mm (precision gauge control)"
      },
      {
        "label": "Width Range",
        "value": "Typically 600\u20131,500 mm (custom slitting available)"
      },
      {
        "label": "Coil Weight",
        "value": "Approx. 3\u201315 tons as per mill standard and buyer requirements"
      },
      {
        "label": "Surface Finish",
        "value": "Bright (B), Dull / Matte (D) finish; Lightly Oiled"
      },
      {
        "label": "Edge Condition",
        "value": "Slit edge (TE) or Mill edge (ME)"
      },
      {
        "label": "Supply Form",
        "value": "Coils or precision slit strips (ID 508 mm / 610 mm)"
      },
      {
        "label": "Inspection Protocol",
        "value": "Mill Test Certificate (MTC EN 10204 3.1) and third-party inspection (SGS/BV) on request"
      },
      {
        "label": "Packing Standard",
        "value": "Export-worthy seaworthy packing with anti-rust paper and steel strapping"
      }
    ],
    "features": [
      "Superior surface smoothness and tight thickness tolerances",
      "Excellent formability for deep-drawing, stamping, and profiling",
      "Available in bright or matte finish with protective oiling",
      "Uniform mechanical properties along full coil length",
      "High structural integrity and uniform gauge tolerances",
      "Anti-corrosion seaworthy strapping and moisture-barrier wrapping"
    ],
    "applications": [
      "Home appliances (refrigerators, washing machines, air conditioners)",
      "Automotive body panels, chassis brackets, and interior stampings",
      "Electrical switchboards, control cabinets, and steel furniture",
      "Steel drums, barrels, containers, and precision roll-formed tubes",
      "Light gauge structural sections and purlins"
    ],
    "standards": [
      {
        "name": "EN 10130",
        "description": "Cold rolled low carbon steel flat products for cold forming"
      },
      {
        "name": "JIS G3141",
        "description": "Cold-reduced carbon steel sheets and strip (SPCC/SPCD)"
      },
      {
        "name": "ASTM A1008",
        "description": "Standard Specification for Steel, Sheet, Cold-Rolled, Carbon"
      }
    ],
    "relatedProducts": [
      "hr-steel-coils",
      "pre-galvanized-steel-coils",
      "color-coated-steel-coils"
    ]
  },
  {
    "slug": "pre-galvanized-steel-coils",
    "category": "steel-plate-sheet",
    "name": "Pre-galvanized coils",
    "shortDescription": "Cold-formed forming-grade steel coils with continuous hot-dip zinc coating (20\u2013275 g/m\u00b2) for bending, roll forming, and structural fabrication.",
    "description": "Pre-galvanized steel coils supplied by Tianjin Decent International Trade Co., Ltd. are cold-formed/forming-grade steel flat products produced with a continuous hot-dip zinc coating. The material is engineered specifically for roll forming, bending, precision fabrication, and general structural engineering applications.\n\nPre-galvanized steel offers exceptional corrosion resistance because zinc has more reactive chemical properties than iron, preferentially reacting with atmospheric oxygen and water vapor to form a dense, durable zinc oxide passivation film. The service life of galvanized steel plates reaches 10 to 50 years, significantly outperforming ungalvanized plates while remaining highly cost-effective compared to stainless steel or specialized alloy metals.",
    "heroImage": "/src/assets/images/galvanized-steel-coils.jpg",
    "gallery": [
      "/src/assets/images/galvanized-steel-coils.jpg",
      "/src/assets/images/color-coated-coils.jpg"
    ],
    "specifications": [
      {
        "label": "Material Base",
        "value": "Galvanized carbon steel, forming grade"
      },
      {
        "label": "Thickness Range",
        "value": "Normally 0.12\u20134.0 mm (various thicknesses as required by BOQ/drawings)"
      },
      {
        "label": "Zinc Coating Mass",
        "value": "20\u2013275 g/m\u00b2 total both sides (Z20 to Z275), or as specified"
      },
      {
        "label": "Steel Grades",
        "value": "DX51D, DX52D, SGCC, GB, ASTM A653, JIS G3302 or equivalent"
      },
      {
        "label": "Surface Quality",
        "value": "Smooth, uniform coating free from peeling, excessive zinc build-up, or corrosion"
      },
      {
        "label": "Spangle Structure",
        "value": "Regular Spangle, Minimized Spangle, Zero Spangle"
      },
      {
        "label": "Coil Width",
        "value": "700\u20131250 mm; Strip: 20\u2013600 mm OR as required by project/shop drawings"
      },
      {
        "label": "Mechanical Properties",
        "value": "Complies with ASTM A653/A653M or EN 10346 grade parameters"
      },
      {
        "label": "Edge Condition",
        "value": "Mill edge or slit edge as specified"
      },
      {
        "label": "Delivery Protection",
        "value": "Securely packed with waterproof paper and metal banding against moisture and mechanical damage"
      },
      {
        "label": "Service Life",
        "value": "10\u201350 years under standard environmental exposure"
      }
    ],
    "features": [
      "Available in Regular Spangle, Minimized Spangle, and Zero Spangle surface finishes",
      "Excellent corrosion resistance via protective sacrificial zinc oxide film",
      "High cost-effectiveness compared to stainless steel or alloy alternatives",
      "Outstanding processing performance for cutting, roll-forming, bending, and punching",
      "High strength with lightweight profile options for modern building systems",
      "Clean silver-gray metallic luster suitable for visible and exposed installations",
      "100% recyclable environmentally friendly material with reusable zinc substrate"
    ],
    "applications": [
      "Roll forming for purlins, studs, framing, and light-gauge steel framing (LGSF)",
      "Cable trays, cable conduits, and electrical panel enclosures",
      "HVAC air ducting, ventilation louvers, and spiral ductwork",
      "Agricultural silos, roofing panels, and cladding substrates",
      "Automotive body stampings and appliance internal brackets",
      "Scaffolding planks, decking boards, and access platform components"
    ],
    "standards": [
      {
        "name": "ASTM A653 / A653M",
        "description": "Specification for Steel Sheet, Zinc-Coated or Zinc-Iron Alloy-Coated by Hot-Dip"
      },
      {
        "name": "EN 10346",
        "description": "Continuously hot-dip coated steel flat products for cold forming and structural use"
      },
      {
        "name": "ISO 3575",
        "description": "Continuous hot-dip zinc-coated carbon steel sheet of commercial and drawing qualities"
      }
    ],
    "relatedProducts": [
      "hr-steel-coils",
      "cold-rolled-coils",
      "color-coated-steel-coils"
    ],
    "categoryName": "Steel plate/sheet",
    "subcategory": "Pre-galvanized coils"
  },
  {
    "slug": "color-coated-steel-coils",
    "category": "steel-plate-sheet",
    "name": "Color coated coils (PPGZI)",
    "shortDescription": "Pre-painted galvanized steel coils (PPGI/PPGL) available in all RAL colors, multiple surface finishes (matt, wrinkle, high-gloss), and zinc coating Z40\u2013600 g/m\u00b2.",
    "description": "Color Coated Steel Coils (Pre-painted Galvanized & Galvalume Coils \u2014 PPGI / PPGL) from Tianjin Decent International Trade Co., Ltd. provide long-lasting surface protection, vibrant architectural aesthetics, and exceptional weatherability. Supplied with advanced organic paint coating systems on premium galvanized or alloy-coated steel substrates.\n\nAvailable in all international standard RAL colors, with finishes ranging from Matt and High-Gloss to Two-Side Color, Wrinkle texture, Wooden pattern, and Marble effect. Every shipment is supplied with a comprehensive Mill Test Certificate (MTC) confirming chemical composition, mechanical properties, metal thickness, zinc coating mass, paint film thickness, and heat/coil identification.",
    "heroImage": "/src/assets/images/color-coated-coils.jpg",
    "gallery": [
      "/src/assets/images/color-coated-coils.jpg",
      "/src/assets/images/galvanized-steel-coils.jpg"
    ],
    "specifications": [
      {
        "label": "Available Grades",
        "value": "CGCC, CGCH, G550, DX51D, DX52D, DX53D"
      },
      {
        "label": "Thickness Range",
        "value": "0.12\u20134.0 mm"
      },
      {
        "label": "Coil Width Range",
        "value": "600\u20131500 mm"
      },
      {
        "label": "Zinc Coating Substrate",
        "value": "Z40\u2013600 g/m\u00b2"
      },
      {
        "label": "Paint Coating Thickness",
        "value": "Top: 15\u201335 \u00b5m, Back: 5\u201315 \u00b5m"
      },
      {
        "label": "Color Options",
        "value": "Complete RAL Color System (custom matching available)"
      },
      {
        "label": "Surface Finishes",
        "value": "Matt, High gloss, Color with two sides, Wrinkle, Wooden color, Marble"
      },
      {
        "label": "Coil Weight",
        "value": "2\u20135 Metric Tons per coil"
      },
      {
        "label": "Coil Inner Diameter",
        "value": "508 mm / 610 mm"
      },
      {
        "label": "Quality Certification",
        "value": "Supplied with full Mill Test Certificate (MTC) with heat/coil tracking"
      }
    ],
    "features": [
      "Full RAL color matching for architectural and corporate brand requirements",
      "Premium polyester (PE), SMP, HDP, or PVDF topcoats for UV resistance",
      "Dual-side coating capabilities for exposed interior and exterior roofing",
      "Specialized textured finishes: wrinkle, wood grain, marble, and anti-glare matt",
      "High-yield G550 options for structural profile roll forming and sandwich panels",
      "Standardized 508 mm and 610 mm internal diameters for roll forming decoilers"
    ],
    "applications": [
      "Commercial and industrial roofing sheets (corrugated, trapezoidal)",
      "Architectural wall sandwich panels and insulated cladding",
      "Cold storage facility walls, warehouse facades, and airport hangars",
      "Roller shutter doors, garage panels, and cleanroom partitioning",
      "Household electrical appliance outer casing and enclosure panels"
    ],
    "standards": [
      {
        "name": "JIS G3312",
        "description": "Prepainted hot-dip zinc-coated steel sheets and coils"
      }
    ],
    "relatedProducts": [
      "pre-galvanized-steel-coils",
      "hr-steel-coils",
      "cold-rolled-coils"
    ],
    "categoryName": "Steel plate/sheet",
    "subcategory": "Color coated coils (PPGZI)"
  },
  {
    "slug": "h-i-u-beams-channel",
    "category": "steel-section-profile",
    "categoryName": "Steel section/profile",
    "subcategory": "H/I/U Beams & Channel",
    "name": "H/I/U Beams & Channel",
    "shortDescription": "Heavy structural H-Beams, I-Beams, and U-Channels conforming to EN 10025 S235JR/S355JR, ASTM A36/A572, and JIS G3101.",
    "description": "Heavy structural H-Beams, I-Beams, and U-Channels supplied by Tianjin Decent International Trade Co., Ltd. are primary load-bearing profiles engineered for modern building frameworks, bridge girders, industrial workshops, and civil infrastructure.\n\nAvailable in standard wide flange, narrow flange, and channel geometries in standard 6 m and 12 m lengths, or precision cut-to-length as required.",
    "heroImage": "/src/assets/images/structural-steel-profiles.jpg",
    "gallery": [
      "/src/assets/images/structural-steel-profiles.jpg",
      "/src/assets/images/seamless-steel-pipes.jpg"
    ],
    "specifications": [
      {
        "label": "H-Beam (Wide Flange)",
        "value": "Flange width 50\u2013400 mm, height 100\u2013900 mm, thickness 3\u201370 mm, length 6\u201312 m"
      },
      {
        "label": "I-Beam (Narrow Flange)",
        "value": "Resists strong bending moments. Height 80\u2013600 mm, flange 42\u2013215 mm"
      },
      {
        "label": "U-Channel (C-Section)",
        "value": "50\u00d725 mm up to 400\u00d7100 mm. Purlins, girts, and wall framing"
      },
      {
        "label": "Material Grades",
        "value": "Q235B, Q355B, S235JR, S275JR, S355JR, ASTM A36, A572 Gr 50, SS400"
      },
      {
        "label": "Standard Lengths",
        "value": "6.0 m, 12.0 m, or precision cut-to-length as required"
      },
      {
        "label": "Surface Finish",
        "value": "Mill finish / black surface, shot-blasted (Sa 2.5), shop primed, or Hot-Dip Galvanized"
      }
    ],
    "features": [
      "Heavy load-bearing capacity for columns, bridge girders, and frameworks",
      "Strict dimensional tolerances conforming to EN 10034 and ASTM A6",
      "Available in high-yield grades S355JR / A572 Gr 50",
      "Direct container and break-bulk vessel dispatch from Port of Tianjin"
    ],
    "applications": [
      "High-rise commercial tower columns and floor beam frameworks",
      "Highway bridges, rail viaducts, and pedestrian overpasses",
      "Industrial warehouses, pre-engineered steel buildings (PEB), and canopies",
      "Crane gantry girders, runway tracks, and heavy machinery beds"
    ],
    "standards": [
      {
        "name": "EN 10025-2",
        "description": "Technical delivery conditions for non-alloy structural steels"
      },
      {
        "name": "ASTM A36 / A572",
        "description": "Carbon and High-Strength Low-Alloy Structural Steel"
      },
      {
        "name": "JIS G3101",
        "description": "Rolled steel for general structure (SS400 / SS490)"
      }
    ],
    "relatedProducts": [
      "ipe-upn",
      "angle-bar",
      "flut-bar"
    ]
  },
  {
    "slug": "ipe-upn",
    "category": "steel-section-profile",
    "categoryName": "Steel section/profile",
    "subcategory": "IPE / UPN",
    "name": "IPE / UPN",
    "shortDescription": "European standard IPE parallel flange I-beams (IPE 80\u2013600) and UPN tapered flange channels (UPN 50\u2013400) conforming to EN 10025.",
    "description": "European standard IPE parallel flange I-beams and UPN European channels supplied by Tianjin Decent International Trade Co., Ltd. Manufactured to precise Euronorm dimensional specifications.\n\nIPE profiles offer parallel inner and outer flange surfaces for simplified bolt connections, while UPN tapered channels provide high lateral stiffness for purlins, lintels, and equipment skids.",
    "heroImage": "/src/assets/images/structural-steel-profiles.jpg",
    "gallery": [
      "/src/assets/images/structural-steel-profiles.jpg"
    ],
    "specifications": [
      {
        "label": "IPE Profiles",
        "value": "IPE 80, IPE 100, IPE 120, IPE 140, IPE 160 up to IPE 600"
      },
      {
        "label": "UPN Channels",
        "value": "UPN 50, UPN 65, UPN 80, UPN 100, UPN 120 up to UPN 400"
      },
      {
        "label": "Material Grades",
        "value": "S235JR, S275JR, S355JR, S355J2 conforming to EN 10025-2"
      },
      {
        "label": "Tolerances",
        "value": "EN 10034 (IPE dimensional tolerances), EN 10279 (UPN channel tolerances)"
      },
      {
        "label": "Standard Lengths",
        "value": "6.0 m, 12.0 m, or custom cut lengths with deburred ends"
      },
      {
        "label": "Surface Condition",
        "value": "Black mill finish, shot blasted & primed, or Hot-Dip Galvanized"
      }
    ],
    "features": [
      "Standardized European sections widely specified in international engineering contracts",
      "Parallel flange geometry on IPE simplifies structural bolting and welding details",
      "High bending strength-to-weight ratio",
      "Full 3.1 Mill Test Certification stating chemical heats and tensile properties"
    ],
    "applications": [
      "Architectural steel structures and commercial building floors",
      "Industrial crane runways and roof purlin systems",
      "Offshore skid frameworks and modular process packages",
      "Solar mounting structures and mechanical equipment bases"
    ],
    "standards": [
      {
        "name": "EN 10025-2",
        "description": "Non-alloy structural steels \u2014 Technical delivery conditions"
      },
      {
        "name": "EN 10034",
        "description": "Structural steel I and H sections \u2014 Tolerances on shape and dimensions"
      },
      {
        "name": "EN 10279",
        "description": "Hot rolled steel channels \u2014 Tolerances on shape, dimensions and mass"
      }
    ],
    "relatedProducts": [
      "h-i-u-beams-channel",
      "angle-bar",
      "flut-bar"
    ]
  },
  {
    "slug": "angle-bar",
    "category": "steel-section-profile",
    "categoryName": "Steel section/profile",
    "subcategory": "Angle Bar",
    "name": "Angle Bar",
    "shortDescription": "Hot-rolled equal and unequal structural angle bars (20\u00d720 mm to 200\u00d7200 mm) in ASTM A36, EN 10025 S275JR/S355JR, and JIS SS400.",
    "description": "Hot-rolled equal and unequal structural steel angle bars supplied by Tianjin Decent International Trade Co., Ltd. Angle bars are among the most versatile structural elements in engineering, providing essential rotational and diagonal bracing strength.\n\nManufactured with uniform leg thickness and sharp corner transitions, available in mill black, shot-blasted, or hot-dip galvanized condition.",
    "heroImage": "/src/assets/images/structural-steel-profiles.jpg",
    "gallery": [
      "/src/assets/images/structural-steel-profiles.jpg"
    ],
    "specifications": [
      {
        "label": "Equal Angles (L)",
        "value": "20\u00d720\u00d73 mm up to 200\u00d7200\u00d720 mm"
      },
      {
        "label": "Unequal Angles (L)",
        "value": "25\u00d716\u00d73 mm up to 200\u00d7125\u00d718 mm"
      },
      {
        "label": "Material Grades",
        "value": "ASTM A36, EN 10025 S235JR / S275JR / S355JR, JIS G3101 SS400, Q235B, Q355B"
      },
      {
        "label": "Tolerances",
        "value": "Conforming to EN 10056-2 and ASTM A6"
      },
      {
        "label": "Standard Lengths",
        "value": "6.0 m, 9.0 m, 12.0 m, or bundled custom cut lengths"
      },
      {
        "label": "Surface Finish",
        "value": "Mill black finish or Hot-Dip Galvanized to EN ISO 1461"
      }
    ],
    "features": [
      "Comprehensive size range covering equal and unequal profiles",
      "High resistance to torsion, deflection, and lateral racking",
      "Superior weldability and ease of punching/bolting",
      "Heavy zinc coating available for exterior transmission tower applications"
    ],
    "applications": [
      "Power transmission towers, telecommunications masts, and substations",
      "Roof trusses, diagonal wind bracing, and gantry bridge bracing",
      "Shipbuilding stiffeners and marine container corner frames",
      "Industrial shelving, warehousing racks, and machinery guarding"
    ],
    "standards": [
      {
        "name": "EN 10056",
        "description": "Structural steel equal and unequal leg angles"
      },
      {
        "name": "ASTM A36",
        "description": "Standard Specification for Carbon Structural Steel"
      },
      {
        "name": "JIS G3101",
        "description": "Rolled steel for general structure"
      }
    ],
    "relatedProducts": [
      "h-i-u-beams-channel",
      "square-bar",
      "round-bar"
    ]
  },
  {
    "slug": "square-bar",
    "category": "steel-section-profile",
    "categoryName": "Steel section/profile",
    "subcategory": "Square Bar",
    "name": "Square Bar",
    "shortDescription": "Hot-rolled and cold-drawn solid square steel bars across 10\u00d710 mm to 150\u00d7150 mm in carbon and alloy structural grades.",
    "description": "Solid square carbon and alloy steel bars supplied by Tianjin Decent International Trade Co., Ltd. Manufactured by hot rolling or precision cold drawing to deliver high rigidity, dimensional stability, and uniform metallurgical grain structure.\n\nEngineered for structural framing, machinery manufacturing, architectural grating, security grills, and precision machined mechanical components.",
    "heroImage": "/src/assets/images/structural-steel-profiles.jpg",
    "gallery": [
      "/src/assets/images/structural-steel-profiles.jpg"
    ],
    "specifications": [
      {
        "label": "Size Range",
        "value": "10\u00d710 mm, 12\u00d712 mm, 14\u00d714 mm, 16\u00d716 mm, 20\u00d720 mm up to 150\u00d7150 mm"
      },
      {
        "label": "Material Grades",
        "value": "Q235B, Q355B, SAE 1020, SAE 1045, EN 10025 S235JR / S355JR"
      },
      {
        "label": "Process Technique",
        "value": "Hot Rolled or Cold Drawn (precision ground available on request)"
      },
      {
        "label": "Straightness",
        "value": "\u2264 1.5 mm/m straightness control"
      },
      {
        "label": "Standard Lengths",
        "value": "5.8 m, 6.0 m, 12.0 m, or custom cut lengths"
      },
      {
        "label": "Surface Finish",
        "value": "Black surface, cold drawn smooth bright, or Hot-Dip Galvanized"
      }
    ],
    "features": [
      "Solid cross-section ensures high torsional resistance and compressive strength",
      "Cold drawn bars provide tight \u00b10.05 mm dimensional tolerances",
      "Excellent machinability, forgeability, and weldability",
      "Full chemical heat verification and mechanical yield test reports"
    ],
    "applications": [
      "Architectural gates, fences, safety railings, and security window grilles",
      "Machinery drive shafts, keys, guides, and crane rail mountings",
      "Automotive parts, agricultural implements, and trailer components",
      "Industrial fabrication and steel framework stiffeners"
    ],
    "standards": [
      {
        "name": "EN 10059",
        "description": "Hot rolled square steel bars for general purposes"
      },
      {
        "name": "ASTM A36 / A108",
        "description": "Standard Specification for Steel Bars, Carbon, Cold-Finished"
      },
      {
        "name": "GB/T 702",
        "description": "Hot-rolled steel bars \u2014 Dimensions, shape, weight and tolerances"
      }
    ],
    "relatedProducts": [
      "round-bar",
      "flut-bar",
      "angle-bar"
    ]
  },
  {
    "slug": "round-bar",
    "category": "steel-section-profile",
    "categoryName": "Steel section/profile",
    "subcategory": "Round Bar",
    "name": "Round Bar",
    "shortDescription": "Solid carbon and alloy structural round steel bars (\u00d8 10 mm to \u00d8 300 mm) for machining, construction, and forging.",
    "description": "Solid structural carbon and alloy round steel bars supplied by Tianjin Decent International Trade Co., Ltd. Produced via precision hot rolling, forging, or cold finishing with consistent concentricity and high surface integrity.\n\nWidely specified for machine shafts, foundation anchor bolts, pins, hydraulic cylinder rods, gears, and construction reinforcement.",
    "heroImage": "/src/assets/images/structural-steel-profiles.jpg",
    "gallery": [
      "/src/assets/images/structural-steel-profiles.jpg"
    ],
    "specifications": [
      {
        "label": "Diameter Range",
        "value": "\u00d8 10 mm to \u00d8 300 mm (other diameters available on inquiry)"
      },
      {
        "label": "Material Grades",
        "value": "Q235B, Q355B, SAE 1020, SAE 1045, 40Cr, EN 10025 S235JR / S355JR"
      },
      {
        "label": "Production Process",
        "value": "Hot Rolled, Forged, or Cold Drawn / Turned & Polished"
      },
      {
        "label": "Tolerance Class",
        "value": "h9, h11, or standard hot rolled DIN 1013 / EN 10060"
      },
      {
        "label": "Standard Lengths",
        "value": "5.8 m, 6.0 m, 11.8 m, 12.0 m, or cut to customer requirements"
      },
      {
        "label": "Surface Condition",
        "value": "Black surface, peeled, turned & polished, or Hot-Dip Galvanized"
      }
    ],
    "features": [
      "High tensile strength and uniform cross-sectional density",
      "Excellent response to induction hardening and heat treatments",
      "Smooth surface finish suitable for automated CNC machining",
      "Complete traceability via Mill Test Certificate (EN 10204 3.1)"
    ],
    "applications": [
      "Heavy civil foundation anchor rods, tie rods, and rock bolts",
      "Machine axles, motor shafts, pump rotors, and conveyor pins",
      "Automotive suspension parts, steering knuckles, and drive rods",
      "Forging blanks, fasteners, studs, and high-strength threaded rods"
    ],
    "standards": [
      {
        "name": "EN 10060",
        "description": "Hot rolled round steel bars for general purposes \u2014 Dimensions and tolerances"
      },
      {
        "name": "ASTM A29 / A36",
        "description": "General Requirements for Steel Bars, Carbon and Alloy"
      },
      {
        "name": "JIS G4051",
        "description": "Carbon steels for machine structural use"
      }
    ],
    "relatedProducts": [
      "square-bar",
      "flut-bar",
      "angle-bar"
    ]
  },
  {
    "slug": "flut-bar",
    "category": "steel-section-profile",
    "categoryName": "Steel section/profile",
    "subcategory": "Flut Bar",
    "name": "Flut Bar",
    "shortDescription": "Flat structural steel bars and plates across 3\u201360 mm thicknesses and 15\u2013200 mm widths for construction, gussets, and fabrication.",
    "description": "Flat steel bars and strips (Flut Bar) supplied by Tianjin Decent International Trade Co., Ltd. Manufactured from high-tensile carbon steel featuring clean, square rolled edges and uniform thickness across the entire width.\n\nEssential for structural base plates, column stiffeners, gusset plates, architectural brackets, machine frames, and general metal fabrication.",
    "heroImage": "/src/assets/images/structural-steel-profiles.jpg",
    "gallery": [
      "/src/assets/images/structural-steel-profiles.jpg"
    ],
    "specifications": [
      {
        "label": "Thickness Range",
        "value": "3.0 mm up to 60.0 mm"
      },
      {
        "label": "Width Range",
        "value": "15 mm up to 200 mm (wider plates custom sheared)"
      },
      {
        "label": "Material Grades",
        "value": "Q235B, Q355B, S235JR, S355JR, ASTM A36, SS400"
      },
      {
        "label": "Dimensional Standard",
        "value": "EN 10058 / DIN 1017, ASTM A6"
      },
      {
        "label": "Standard Lengths",
        "value": "5.8 m, 6.0 m, 12.0 m, or cut-to-length pieces"
      },
      {
        "label": "Surface Finish",
        "value": "Mill finish / black surface, shot-blasted, or Hot-Dip Galvanized"
      }
    ],
    "features": [
      "True flat surface with controlled edge squareness",
      "High shear strength and tensile load-bearing capacity",
      "Excellent weldability without pre-heating required on standard grades",
      "Available in hot-dip galvanized finish for long-term corrosion prevention"
    ],
    "applications": [
      "Structural base plates, column cap plates, and beam connection gussets",
      "Stiffener plates in bridge girders and industrial crane runways",
      "Architectural clamp brackets, stair stringers, and railing posts",
      "Agricultural machinery blades, wear strips, and chassis crossmembers"
    ],
    "standards": [
      {
        "name": "EN 10058",
        "description": "Hot rolled flat steel bars for general purposes \u2014 Dimensions and tolerances"
      },
      {
        "name": "ASTM A36 / A6",
        "description": "Standard Specification for Carbon Structural Steel"
      },
      {
        "name": "JIS G3101",
        "description": "Rolled steel for general structure"
      }
    ],
    "relatedProducts": [
      "h-i-u-beams-channel",
      "square-bar",
      "round-bar"
    ]
  },
  {
    "slug": "hot-dip-galvanized-steel-pipe",
    "category": "steel-pipe-tube",
    "name": "Hot-Dip Galvanized Steel Pipe",
    "shortDescription": "DN15\u2013DN300 hot-dip galvanized round steel pipes for low-pressure fluid transportation, gas, water, fire protection, and structural framing.",
    "description": "Hot-dip galvanized steel pipe supplied by Tianjin Decent International Trade Co., Ltd. is produced by immersing cleaned carbon steel pipe into a high-temperature molten zinc bath (approx. 450\u00b0C), creating a dense, metallurgically bonded zinc-iron alloy barrier with a pure zinc outer layer.\n\nEngineered for exceptional corrosion resistance, superior impact resistance, and extended service life even in humid, coastal, or mildly corrosive atmospheric conditions. Available in standard lengths of 5.8 m, 6.0 m, 11.8 m, and 12.0 m with threaded & coupled, grooved, or plain ends.",
    "heroImage": "/src/assets/images/hot-dip-galvanized-steel-pipe.jpg",
    "gallery": [
      "/src/assets/images/hot-dip-galvanized-steel-pipe.jpg",
      "/src/assets/images/straight-seam-welded-steel-pipe.jpg",
      "/src/assets/images/galvanized-seamless-steel-pipe.jpg"
    ],
    "specifications": [
      {
        "label": "Specifications",
        "value": "DN15\u2013DN300 (Outer Diameter: 21.3\u2013323.9 mm)"
      },
      {
        "label": "Uses & Applications",
        "value": "Widely used in water, gas, air, oil and steam and other low-pressure fluid transportation and mechanical structure"
      },
      {
        "label": "Wall Thickness",
        "value": "2.0\u201312.0 mm (Sch 10, Sch 20, Sch 40 / STD)"
      },
      {
        "label": "Applicable Standards",
        "value": "ASTM A53 (Gr. A/B), BS 1387, EN 10255, GB/T 3091, JIS G3452"
      },
      {
        "label": "Zinc Coating Mass",
        "value": "200\u2013500 g/m\u00b2 (uniform hot dip molten bath galvanization)"
      },
      {
        "label": "Steel Grades",
        "value": "Q195, Q215, Q235B, Q345B, Grade A, Grade B"
      },
      {
        "label": "End Treatments",
        "value": "Plain end, Threaded with couplings/sockets (BSPT/NPT), Roll Grooved for fire protection"
      },
      {
        "label": "Length Range",
        "value": "5.8 m, 6.0 m, 11.8 m, 12.0 m (custom fixed lengths on request)"
      },
      {
        "label": "Quality Verification",
        "value": "100% Hydrostatic testing (up to 5.0 MPa), Eddy current NDT, Mill Test Certificate (EN 10204 3.1)"
      },
      {
        "label": "Packaging",
        "value": "Hexagonal bundles strapped with steel bands, plastic end protection caps fitted"
      }
    ],
    "features": [
      "Comprehensive diameter coverage from DN15 (1/2\") up to DN300 (12\")",
      "Uniform metallurgical zinc-iron alloy coating resistant to flaking and mechanical damage",
      "High internal cleanliness suitable for municipal drinking water and fire sprinkler systems",
      "Flexible end terminations: threaded with matching malleable iron couplings or roll grooved",
      "Full mill test certification documenting chemical composition and hydrostatic test verification",
      "Cost-effective alternative to stainless steel for water, air, HVAC, and gas distribution"
    ],
    "applications": [
      "Municipal water supply, HVAC chilled water, and heating circuit lines",
      "Low-pressure natural gas, coal gas, and liquefied petroleum gas piping",
      "Automatic fire sprinkler networks and fire protection standpipes",
      "Agricultural greenhouse framing, irrigation tubing, and fence posts",
      "Mechanical structural columns, handrails, scaffolding, and canopy frames"
    ],
    "standards": [
      {
        "name": "ASTM A53 / A53M",
        "description": "Standard Specification for Pipe, Steel, Black and Hot-Dipped, Zinc-Coated, Welded and Seamless"
      },
      {
        "name": "BS 1387 / EN 10255",
        "description": "Non-alloy steel tubes suitable for welding and threading"
      },
      {
        "name": "GB/T 3091",
        "description": "Welded steel pipes for low pressure fluid delivery"
      }
    ],
    "relatedProducts": [
      "straight-seam-welded-steel-pipe",
      "galvanized-seamless-steel-pipe",
      "plastic-coated-composite-steel-pipe"
    ],
    "categoryName": "Steel pipe/tube",
    "subcategory": "Round Pipe"
  },
  {
    "slug": "spiral-submerged-arc-welded-steel-pipe",
    "category": "steel-pipe-tube",
    "name": "Spiral Seam Double-Sided Submerged Arc Welded Steel Pipe (SSAW / HSAW)",
    "shortDescription": "\u03c6219\u20132020 mm double-sided submerged arc welded spiral steel pipes for long-distance oil/gas pipelines, urban water transmission, and foundation piling.",
    "description": "Spiral seam double-sided submerged arc welded steel pipe (SSAW / HSAW) from Tianjin Decent International Trade Co., Ltd. is continuously manufactured by spirally forming hot-rolled carbon steel strip coils into wide-diameter cylinders, simultaneously welding both the interior and exterior seams using automated submerged arc welding (SAW).\n\nAllows efficient production of large diameter pipes (from 219 mm up to 2,020 mm) with exceptional hoop strength, uniform wall thickness, and precise roundness. Widely deployed in national oil and gas cross-country trunklines, urban water grids, and deep-foundation piling.",
    "heroImage": "/src/assets/images/spiral-submerged-arc-welded-steel-pipe.jpg",
    "gallery": [
      "/src/assets/images/spiral-submerged-arc-welded-steel-pipe.jpg",
      "/src/assets/images/straight-seam-welded-steel-pipe.jpg",
      "/src/assets/images/galvanized-seamless-steel-pipe.jpg"
    ],
    "specifications": [
      {
        "label": "Specifications",
        "value": "\u03c6219\u20132020 mm, wall thickness up to 20 mm"
      },
      {
        "label": "Uses & Applications",
        "value": "Mainly used for oil, natural gas and other pressure-bearing long-distance pipelines, can also be used for water, gas, air, heating steam and other ordinary fluid transportation, and can be used in piling, structure and other construction fields"
      },
      {
        "label": "Wall Thickness Range",
        "value": "5.0 mm up to 20.0 mm"
      },
      {
        "label": "Steel Grades",
        "value": "Q235B, Q345B, Q355B, API 5L Gr. B through X70 (PSL1 & PSL2)"
      },
      {
        "label": "Applicable Standards",
        "value": "API Spec 5L, ASTM A252 (Piling), SY/T 5037, GB/T 9711, EN 10217-1"
      },
      {
        "label": "Production Process",
        "value": "Continuous spiral roll forming with double-sided submerged arc welding (internal & external beads)"
      },
      {
        "label": "Welding Quality Control",
        "value": "Weld gap controlled at 1\u20133 mm; 100% online X-ray fluoroscopy and ultrasonic NDT"
      },
      {
        "label": "Hydrostatic Test",
        "value": "100% pipe-by-pipe hydrostatic pressure testing up to standard calculation pressure"
      },
      {
        "label": "Length Range",
        "value": "Standard 12 m, random lengths 6 m to 18 m (custom pile lengths available)"
      },
      {
        "label": "External Coating Options",
        "value": "3LPE (Three-layer Polyethylene), FBE (Fusion Bonded Epoxy), Bitumen, Bare mill"
      }
    ],
    "features": [
      "Massive diameter range up to 2,020 mm manufactured from standard-width steel strip coils",
      "Spiral weld geometry distributes circumferential internal pressures across diagonal seams",
      "Outstanding pressure-bearing capability verified by ultrasonic, radiographic, and hydrostatic tests",
      "High structural bending rigidity making it optimal for civil bridge foundation friction piles",
      "Highly economical per meter cost for large-volume municipal water transmission and PEB piling"
    ],
    "applications": [
      "Long-distance cross-country oil, gas, petroleum, and hydrocarbon trunk transmission pipelines",
      "Urban municipal water supply, raw water diversion aqueducts, and wastewater discharge mains",
      "District heating steam circuits and thermal power plant circulating cooling water conduits",
      "Bridge pier foundations, deep harbor dock pilings, highway embankment piles, and offshore structures",
      "Industrial ductwork, ventilation air mains, and metallurgical chimney flues"
    ],
    "standards": [
      {
        "name": "API Spec 5L (PSL1/PSL2)",
        "description": "Specification for Line Pipe (Gr. B, X42 to X70)"
      },
      {
        "name": "ASTM A252",
        "description": "Standard Specification for Welded and Seamless Steel Pipe Piles"
      },
      {
        "name": "GB/T 9711",
        "description": "Petroleum and natural gas industries \u2014 Steel pipe for pipeline transportation systems"
      }
    ],
    "relatedProducts": [
      "straight-seam-welded-steel-pipe",
      "plastic-coated-composite-steel-pipe",
      "galvanized-seamless-steel-pipe"
    ],
    "categoryName": "Steel pipe/tube",
    "subcategory": "Round Pipe"
  },
  {
    "slug": "plastic-coated-composite-steel-pipe",
    "category": "steel-pipe-tube",
    "name": "Plastic-Coated Composite Steel Pipe (Coated Composite Pipe)",
    "shortDescription": "DN15\u2013DN2000 internal and external plastic-coated (Epoxy / PE) composite steel pipes for fire protection water, municipal supply, and chemical fluids.",
    "description": "Plastic-coated composite steel pipe supplied by Tianjin Decent International Trade Co., Ltd. marries the mechanical strength, high pressure containment, and rigid structural integrity of steel pipe with the superior anti-corrosion, anti-scaling, and friction-reducing properties of advanced polymers.\n\nProduced by preheating the steel pipe and electrostatically fusing thermosetting Epoxy Resin (EP) or thermoplastic Polyethylene (PE) onto internal and external surfaces. Widely recognized as the premier solution for fire sprinkler systems, aggressive chemical fluid transmission, and potable water networks.",
    "heroImage": "/src/assets/images/plastic-coated-composite-steel-pipe.jpg",
    "gallery": [
      "/src/assets/images/plastic-coated-composite-steel-pipe.jpg",
      "/src/assets/images/hot-dip-galvanized-steel-pipe.jpg",
      "/src/assets/images/straight-seam-welded-steel-pipe.jpg"
    ],
    "specifications": [
      {
        "label": "Specifications",
        "value": "Plastic composite pipe: DN15\u2013DN2000 | Socket-coated tubes: DN100\u2013DN1600"
      },
      {
        "label": "Uses & Applications",
        "value": "Widely used in fire water supply systems, building water supply transportation, chemical fluid transportation, threading protection and other fields"
      },
      {
        "label": "Coating Materials",
        "value": "High-adhesion Epoxy Resin (EP) powder / Polyethylene (PE) coating"
      },
      {
        "label": "Coating Thickness",
        "value": "Internal: 300\u2013800 \u00b5m | External: 350\u20131,000 \u00b5m"
      },
      {
        "label": "Working Pressure",
        "value": "PN 1.6 MPa, 2.5 MPa, up to 6.4 MPa"
      },
      {
        "label": "Temperature Range",
        "value": "-30\u00b0C to +110\u00b0C (Epoxy) | -40\u00b0C to +80\u00b0C (Polyethylene)"
      },
      {
        "label": "Connection Methods",
        "value": "Grooved mechanical couplings, Flanged connections, Bimetal weld fittings, Socket connections"
      },
      {
        "label": "Applicable Standards",
        "value": "CJ/T 120, GB/T 5135.20, NFPA 13 (Fire Sprinkler), AWWA C213"
      },
      {
        "label": "Corrosion Resistance",
        "value": "Resistant to acids, alkalis, saline water, soil microorganisms, and chemical oxidizers"
      },
      {
        "label": "Flow Efficiency",
        "value": "Roughness coefficient n=0.008\u20130.009 (20% higher hydraulic flow than bare steel)"
      }
    ],
    "features": [
      "Dual material synergy: carbon steel core delivers high pressure; polymer skin eliminates rust",
      "Smooth internal wall prevents scaling, bio-fouling, and friction head loss",
      "Zero pipe corrosion or red water contamination in municipal and potable water networks",
      "High temperature and flame retardant properties formulated for UL/NFPA fire sprinkler lines",
      "Exceptional electrical insulation protecting cables in underground electrical ducting"
    ],
    "applications": [
      "Commercial and industrial automatic fire sprinkler systems (red epoxy coated)",
      "Municipal potable water mains, secondary water distribution, and sewage piping",
      "Chemical fluid transportation, acid/alkali discharge lines, and mining slurry pipelines",
      "Subway tunnels, power cables, and communication optical fiber threading protection pipes",
      "Desalination plants, marine seawater cooling lines, and industrial effluent conduits"
    ],
    "standards": [
      {
        "name": "CJ/T 120",
        "description": "Plastic coated composite steel pipe for water supply"
      },
      {
        "name": "GB/T 5135.20",
        "description": "Automatic sprinkler system \u2014 Part 20: Pre-coated steel pipe"
      },
      {
        "name": "AWWA C213",
        "description": "Fusion-Bonded Epoxy Coating for the Interior and Exterior of Steel Water Pipelines"
      }
    ],
    "relatedProducts": [
      "hot-dip-galvanized-steel-pipe",
      "straight-seam-welded-steel-pipe",
      "galvanized-seamless-steel-pipe"
    ],
    "categoryName": "Steel pipe/tube",
    "subcategory": "Round Pipe"
  },
  {
    "slug": "hot-dip-galvanized-square-rectangular-pipe",
    "category": "steel-pipe-tube",
    "name": "Hot-Dip Galvanized Square & Rectangular Pipe (SHS / RHS)",
    "shortDescription": "25x25mm\u2013200x200mm square and 25x50mm\u2013150x200mm rectangular hot-dip galvanized hollow sections for curtain walls, solar PV brackets, and vehicle chassis.",
    "description": "Hot-dip galvanized square and rectangular steel pipe (SHS / RHS) from Tianjin Decent International Trade Co., Ltd. is manufactured by immersing cold-formed square and rectangular structural hollow sections into a molten zinc bath after rigorous degreasing and pickling pre-treatments.\n\nThe resulting metallurgical zinc-iron alloy layer adheres firmly to the outer and inner surfaces of the tube, providing robust defense against oxygen, acid/alkali moisture, and atmospheric salt spray. Widely utilized in architectural curtain walls, photovoltaic solar ground racking, and commercial steel frameworks.",
    "heroImage": "/src/assets/images/hot-dip-galvanized-square-rectangular-pipe.jpg",
    "gallery": [
      "/src/assets/images/hot-dip-galvanized-square-rectangular-pipe.jpg",
      "/src/assets/images/square-rectangular-welded-steel-pipe.jpg",
      "/src/assets/images/structural-steel-profiles.jpg"
    ],
    "specifications": [
      {
        "label": "Square Specifications",
        "value": "25x25 mm \u2013 200x200 mm"
      },
      {
        "label": "Rectangular Specifications",
        "value": "25x50 mm \u2013 150x200 mm"
      },
      {
        "label": "Uses & Applications",
        "value": "Widely used in curtain wall, construction, machinery manufacturing, shipbuilding, photovoltaic support, steel structure engineering, automobile chassis and many other industries"
      },
      {
        "label": "Wall Thickness",
        "value": "1.5\u201312.0 mm"
      },
      {
        "label": "Zinc Coating Mass",
        "value": "220\u2013500 g/m\u00b2 (uniform hot-dip galvanized coating on all faces)"
      },
      {
        "label": "Steel Grades",
        "value": "Q195, Q235B, Q345B, Q355B, S235JR, S275JR, S355JR, ASTM A500 Gr. B"
      },
      {
        "label": "Applicable Standards",
        "value": "ASTM A500, EN 10219, JIS G3466, GB/T 6728, GB/T 3091"
      },
      {
        "label": "Mechanical Properties",
        "value": "Tensile strength 360\u2013510 MPa, Yield point \u2265 235\u2013355 MPa"
      },
      {
        "label": "Length Range",
        "value": "5.8 m, 6.0 m, 11.8 m, 12.0 m, or precision cut fixed lengths"
      },
      {
        "label": "End Treatments",
        "value": "Square cut plain ends, burr-free deburred, bundle strapping with water-proof paper"
      }
    ],
    "features": [
      "Comprehensive profile matrix: Square (25x25 to 200x200 mm) & Rectangular (25x50 to 150x200 mm)",
      "Uniform dense zinc layer with exceptional metallurgical adhesion resistant to peeling",
      "High torsional rigidity and superior column buckling resistance for building facades",
      "Excellent cold punching, laser cutting, bending, and robotic welding performance",
      "Corrosion protection service life exceeding 25 to 50 years in outdoor architectural exposures"
    ],
    "applications": [
      "Architectural curtain wall mullions, transom frameworks, and glass facade structural supports",
      "Photovoltaic solar mounting ground structures, tracker frames, and rooftop racking",
      "Commercial warehouse structures, canopy framing, and pre-engineered metal buildings",
      "Commercial vehicle chassis, trailer undercarriages, and agricultural equipment frames",
      "Highway guardrail posts, acoustic barrier frames, and overhead gantry signage"
    ],
    "standards": [
      {
        "name": "ASTM A500 (Gr. A, B, C)",
        "description": "Cold-Formed Welded and Seamless Carbon Steel Structural Tubing in Rounds and Shapes"
      },
      {
        "name": "EN 10219",
        "description": "Cold formed welded structural hollow sections of non-alloy and fine grain steels"
      },
      {
        "name": "GB/T 6728",
        "description": "Cold formed hollow sections for general structure"
      }
    ],
    "relatedProducts": [
      "square-rectangular-welded-steel-pipe",
      "hot-dip-galvanized-steel-pipe",
      "structural-steel-profiles"
    ],
    "categoryName": "Steel pipe/tube",
    "subcategory": "Rectangular Pipe"
  },
  {
    "slug": "square-rectangular-welded-steel-pipe",
    "category": "steel-pipe-tube",
    "name": "Square & Rectangular Welded Steel Pipe",
    "shortDescription": "25x25mm\u2013400x400mm square and 25x40mm\u2013300x500mm rectangular welded steel hollow sections for steel structures, cranes, machine frames, and PEB buildings.",
    "description": "Square rectangular welded steel pipe (SHS / RHS) from Tianjin Decent International Trade Co., Ltd. is produced by cold-forming continuous high-grade carbon steel strip into rectangular or square cross-sections, securely fusing the seam with high-frequency resistance welding.\n\nDelivers high strength-to-weight ratio, crisp 90-degree corner radii, flat mating faces, and high torsional resistance. Readily cut, drilled, punched, and welded for modern architectural structural steelwork, heavy crane jibs, and equipment frameworks.",
    "heroImage": "/src/assets/images/square-rectangular-welded-steel-pipe.jpg",
    "gallery": [
      "/src/assets/images/square-rectangular-welded-steel-pipe.jpg",
      "/src/assets/images/hot-dip-galvanized-square-rectangular-pipe.jpg",
      "/src/assets/images/structural-steel-profiles.jpg"
    ],
    "specifications": [
      {
        "label": "Square Specifications",
        "value": "25x25 mm \u2013 400x400 mm"
      },
      {
        "label": "Rectangular Specifications",
        "value": "25x40 mm \u2013 300x500 mm"
      },
      {
        "label": "Uses & Applications",
        "value": "Widely used in steel structure construction, machinery manufacturing, construction engineering, automobile manufacturing, shipbuilding, electric power and many other industries"
      },
      {
        "label": "Wall Thickness",
        "value": "1.2\u201316.0 mm"
      },
      {
        "label": "Steel Grades",
        "value": "Q195, Q235B, Q345B, Q355B, S235JR, S275JR, S355JR, ASTM A500 Gr. B"
      },
      {
        "label": "Applicable Standards",
        "value": "ASTM A500, EN 10219, EN 10210, JIS G3466, GB/T 6728"
      },
      {
        "label": "Surface Finish",
        "value": "Bare black mill finish, Lightly oiled, Anti-rust red oxide primer, or Pre-galvanized"
      },
      {
        "label": "Length Range",
        "value": "5.8 m, 6.0 m, 11.8 m, 12.0 m, or customized precision cut lengths"
      },
      {
        "label": "Section Corner Geometry",
        "value": "Standard sharp radius or custom radius R=1.5t to 2.5t"
      },
      {
        "label": "Quality Verification",
        "value": "Eddy current inspection, flattening test, bend test, Mill Test Certificate (EN 10204 3.1)"
      }
    ],
    "features": [
      "Extensive dimensional scope: Square up to 400x400 mm and Rectangular up to 300x500 mm",
      "Flat geometric faces allow fast, economical bolted and welded connections",
      "Superior column strength with uniform radius of gyration compared to open I/H profiles",
      "Internal hollow section can be filled with concrete for high-capacity composite fireproof columns",
      "Produced under strict ISO 9001 and CE factory production control systems"
    ],
    "applications": [
      "Structural columns, building portal frames, mezzanine floors, and roof trusses",
      "Heavy machinery frames, material handling conveyors, overhead cranes, and boom jibs",
      "Industrial pre-engineered building (PEB) framing, hangars, and sports arena space frames",
      "Civil infrastructure pedestrian bridges, highway gantries, and toll station canopies",
      "Automotive transport carriers, agricultural implements, and railway car frames"
    ],
    "standards": [
      {
        "name": "ASTM A500 (Grades A, B, C)",
        "description": "Cold-Formed Welded Carbon Steel Structural Tubing"
      },
      {
        "name": "EN 10219 / EN 10210",
        "description": "Cold formed & Hot finished structural hollow sections of non-alloy and fine grain steels"
      },
      {
        "name": "GB/T 6728",
        "description": "Cold formed hollow sections for general structure"
      }
    ],
    "relatedProducts": [
      "hot-dip-galvanized-square-rectangular-pipe",
      "straight-seam-welded-steel-pipe",
      "structural-steel-profiles"
    ],
    "categoryName": "Steel pipe/tube",
    "subcategory": "Rectangular Pipe"
  },
  {
    "slug": "seamless-steel-pipes",
    "category": "steel-pipe-tube",
    "name": "Seamless Industrial Steel Pipes",
    "shortDescription": "Heavy-wall and standard API/GB seamless steel pipes for fluid, gas, oil transmission, boiler tubes, and structural columns.",
    "description": "Seamless industrial steel pipes supplied by Tianjin Decent International Trade Co., Ltd. are manufactured without welded seams for high pressure containment, uniform circumferential strength, and dependable structural durability. Conforming to rigorous API and GB standards for fluid, gas, and oil transport as well as heavy civil structural columns.\n\nAvailable in standard lengths of 6 m, 6.4 m, and 12 m with wall thickness ratings from Schedule 40 (sch40) up to Schedule 120 (sch120). Surface options include hot-rolled black finish or anti-corrosion black galvanized coating with beveled or plain ends fitted with protective end caps.",
    "heroImage": "/src/assets/images/seamless-steel-pipes.jpg",
    "gallery": [
      "/src/assets/images/seamless-steel-pipes.jpg",
      "/src/assets/images/structural-steel-profiles.jpg"
    ],
    "specifications": [
      {
        "label": "Applications",
        "value": "Fluid Pipe, Gas Pipe, Oil Pipe, High-Pressure Transmission & Structural Columns"
      },
      {
        "label": "Standard",
        "value": "GB Standards, API Spec 5L / 5CT, ASTM A53, ASTM A106"
      },
      {
        "label": "Grade",
        "value": "Grade B, A53-A369, A106 (B, C), Q195\u2013Q345"
      },
      {
        "label": "Certificate",
        "value": "API Certified, ISO 9001, Mill Test Certificate (EN 10204 3.1)"
      },
      {
        "label": "Surface Treatment",
        "value": "Hot Rolled finish / Black Galvanized Coated with rust-preventive varnish"
      },
      {
        "label": "Length",
        "value": "12 m, 6 m, 6.4 m (fixed or random lengths)"
      },
      {
        "label": "Special Pipe",
        "value": "API Pipe, Thick Wall Pipe, High-Pressure Boiler Tube"
      },
      {
        "label": "Thickness",
        "value": "sch40 to sch120 (and customized heavy wall thicknesses)"
      },
      {
        "label": "Surface",
        "value": "Black Galvanized Coated, Oiled, or Bare Mill Finish"
      },
      {
        "label": "End Protection",
        "value": "Plain end, beveled end (30\u00b0\u201335\u00b0), plastic end caps fitted"
      }
    ],
    "features": [
      "Seamless fabrication ensures 100% integrity without longitudinal weld weakness",
      "High pressure test verification: hydrostatic and non-destructive eddy-current testing",
      "Wall thickness options from Schedule 40 to Schedule 120 for extreme loads",
      "Black galvanized coating provides atmospheric protection during sea transit",
      "Certified under API standard for critical fluid, petrochemical, and gas lines",
      "Clean bundling with steel strapping and end caps for safe forklift handling"
    ],
    "applications": [
      "Petrochemical, natural gas, and hydrocarbon transmission pipelines",
      "High-pressure steam lines, boiler tubes, and heat exchanger circuits",
      "Industrial fluid transportation in water treatment and processing plants",
      "Heavy-load structural columns, bridge foundation pilings, and micro-piles",
      "Mechanical machining, hydraulic cylinders, and automotive shafts"
    ],
    "standards": [
      {
        "name": "API Spec 5L",
        "description": "Specification for Line Pipe (Gr. B, X42\u2013X70)"
      },
      {
        "name": "ASTM A106 / A53",
        "description": "Seamless Carbon Steel Pipe for High-Temperature Service"
      },
      {
        "name": "GB/T 8163",
        "description": "Seamless steel tubes for liquid service"
      }
    ],
    "relatedProducts": [
      "welded-erw-steel-pipes",
      "structural-steel-profiles",
      "scaffold-tube-48"
    ],
    "categoryName": "Steel pipe/tube",
    "subcategory": "Seamless pipe"
  },
  {
    "slug": "galvanized-seamless-steel-pipe",
    "category": "steel-pipe-tube",
    "name": "Galvanized Seamless Steel Pipe",
    "shortDescription": "DN22\u2013DN325 hot-dip galvanized seamless carbon steel pipe for petrochemical pipelines, high-voltage power stations, bridges, and building structures.",
    "description": "Galvanized seamless steel pipe supplied by Tianjin Decent International Trade Co., Ltd. is manufactured from solid hot-rolled or cold-drawn carbon steel billets without longitudinal or spiral welds, followed by immersion in a precision hot-dip zinc galvanization bath.\n\nCombines the flawless burst strength and high pressure integrity of seamless tubing with the sacrificial atmospheric protection of hot-dip zinc. Extensively specified in high-voltage substations, petrochemical transmission, and heavy load-bearing structural columns.",
    "heroImage": "/src/assets/images/galvanized-seamless-steel-pipe.jpg",
    "gallery": [
      "/src/assets/images/galvanized-seamless-steel-pipe.jpg",
      "/src/assets/images/hot-dip-galvanized-steel-pipe.jpg",
      "/src/assets/images/seamless-steel-pipes.jpg"
    ],
    "specifications": [
      {
        "label": "Specifications",
        "value": "DN22\u2013DN325 (Wall Thickness: SCH20 to SCH160 / XXS)"
      },
      {
        "label": "Uses & Applications",
        "value": "Widely used in construction, electric power, petrochemical and other fields"
      },
      {
        "label": "Construction Use",
        "value": "Commonly used in building load-bearing structures, steel structures and construction equipment, such as bridges, steel structure houses, etc."
      },
      {
        "label": "Power Industry Use",
        "value": "Manufacturing of power equipment, such as power transmission, substations, converter stations, etc."
      },
      {
        "label": "Petrochemical Industry",
        "value": "Pipelines for transporting oil, natural gas and other chemical media"
      },
      {
        "label": "Infrastructure & Municipal",
        "value": "Municipal drainage works, road traffic signals, airports and seaport docks"
      },
      {
        "label": "Standards Conformance",
        "value": "ASTM A106, ASTM A53, API Spec 5L, GB/T 8163, GB/T 3087, DIN 1629"
      },
      {
        "label": "Steel Grades",
        "value": "Grade B, A106B, A53B, Q235B, Q345B, 20#, 45#"
      },
      {
        "label": "Zinc Coating Thickness",
        "value": "55\u2013100 \u00b5m (approx. 400\u2013700 g/m\u00b2 hot-dip zinc layer)"
      },
      {
        "label": "End Finish",
        "value": "Plain end, beveled ends (30\u00b0\u201335\u00b0), threaded and coupled, roll grooved"
      }
    ],
    "features": [
      "100% seamless cylindrical body with zero seam failure risk under cyclic high pressures",
      "Heavy hot-dip galvanized protective layer prevents atmospheric and coastal marine corrosion",
      "Uniform grain structure with certified tensile yield and Charpy V-notch impact toughness",
      "Engineered for critical high-temperature and sub-zero service applications",
      "Supplied with full Mill Test Certificates (MTC EN 10204 3.1) and ultrasonic NDT reports"
    ],
    "applications": [
      "High-pressure chemical, refinery, hydrocarbon, and natural gas transmission lines",
      "High-voltage electric transmission line tubular poles, substations, and gantry towers",
      "Bridge foundation micropiles, highway gantry trusses, and airport terminal space frames",
      "Boiler feed water lines, steam distribution mains, and heat exchanger bundles",
      "Seaport dock fender tubes, mooring dolphin piles, and offshore structural jackets"
    ],
    "standards": [
      {
        "name": "ASTM A106 / A53",
        "description": "Seamless Carbon Steel Pipe for High-Temperature Service"
      },
      {
        "name": "API Spec 5L",
        "description": "Specification for Line Pipe (Gr. B, X42\u2013X65 Seamless)"
      },
      {
        "name": "GB/T 8163",
        "description": "Seamless steel tubes for liquid service"
      }
    ],
    "relatedProducts": [
      "hot-dip-galvanized-steel-pipe",
      "seamless-steel-pipes",
      "spiral-submerged-arc-welded-steel-pipe"
    ],
    "categoryName": "Steel pipe/tube",
    "subcategory": "Seamless pipe"
  },
  {
    "slug": "welded-erw-steel-pipes",
    "category": "steel-pipe-tube",
    "name": "ERW Pipe (Electro welded pipe)",
    "shortDescription": "Round Pipe (CHS), Square & Rectangular Pipe (RHS/SHS) in ERW welded fabrication with Galvanized and Painted finishes.",
    "description": "Tianjin Decent International Trade Co., Ltd. supplies high-precision ERW (Electric Resistance Welded) and cold-formed welded steel pipes tailored to global engineering standards. Our comprehensive steel pipe range encompasses Round Pipe (Circular Hollow Sections - CHS) as well as Square & Rectangular Pipe (Square and Rectangular Hollow Sections - SHS & RHS).\n\nAvailable in various high-durability surface executions including Hot-Dip Galvanized, Pre-Galvanized, Black Painted, and Anti-Rust Primer Coated to ensure exceptional longevity across demanding outdoor and industrial environments.",
    "heroImage": "/src/assets/images/seamless-steel-pipes.jpg",
    "gallery": [
      "/src/assets/images/seamless-steel-pipes.jpg",
      "/src/assets/images/structural-steel-profiles.jpg",
      "/src/assets/images/scaffold-tubes-48mm.jpg"
    ],
    "specifications": [
      {
        "label": "Product Scope",
        "value": "Round Pipe, Square & Rectangular Pipe"
      },
      {
        "label": "Profile Types",
        "value": "RHS & SHS (Rectangular & Square Hollow Sections), CHS (Circular Hollow Section)"
      },
      {
        "label": "Manufacturing Details",
        "value": "ERW Pipe (Electric Resistance Welded), Seamless Pipe, Galvanized Pipe, Painted Pipe"
      },
      {
        "label": "RHS & SHS Characteristics",
        "value": "Popular for columns, beams, trusses, canopies, warehouses, and modern architectural steel structures due to their strength and clean appearance."
      },
      {
        "label": "CHS Characteristics",
        "value": "Offers an excellent strength-to-weight ratio and is widely used for columns, trusses, handrails, and bracing systems."
      },
      {
        "label": "Surface Finishes",
        "value": "Galvanized Pipe (Hot-Dip Galvanized / Pre-Galvanized), Painted Pipe (Black / Red Oxide / Anti-Corrosion Primer), Bare Mill Finish"
      },
      {
        "label": "Applicable Standards",
        "value": "ASTM A500 (Grades A, B, C), EN 10219, EN 10210, BS 1387, JIS G3444, JIS G3466, GB/T 6728, GB/T 3091"
      },
      {
        "label": "Steel Grades",
        "value": "Q195, Q215, Q235B, Q345B, Q355B, S235JR, S275JR, S355JR, ASTM A500 Grade B"
      },
      {
        "label": "Wall Thickness",
        "value": "0.8 mm up to 16.0 mm (sch10 to sch80 equivalent)"
      },
      {
        "label": "Length Range",
        "value": "5.8 m, 6.0 m, 11.8 m, 12.0 m, or customized precision cut lengths"
      },
      {
        "label": "End Treatments",
        "value": "Plain square cut ends, beveled ends, threaded and coupled, roll grooved"
      }
    ],
    "features": [
      "Comprehensive geometry: Round (CHS), Square (SHS), and Rectangular (RHS) hollow sections",
      "Advanced high-frequency ERW welding with internal and external weld bead removal",
      "Superior strength-to-weight ratio providing structural economy and clean architectural lines",
      "Extensive finish options: Hot-dip galvanized, pre-galvanized, and multi-layer painted finishes",
      "Strict hydrostatic, ultrasonic, and eddy current non-destructive testing for all fluid/gas lines",
      "Bundled with heavy-duty steel strapping and moisture-resistant seaworthy packaging"
    ],
    "applications": [
      "Architectural steel columns, roof trusses, canopy framing, and space frames",
      "Industrial warehouse framing, pre-engineered buildings (PEB), and greenhouse structures",
      "Civil infrastructure handrails, bridge guardrails, and highway signage gantries",
      "Low to medium pressure fluid, water, gas, fire protection sprinkler systems",
      "Mechanical manufacturing, equipment frames, agricultural machinery, and automotive chassis"
    ],
    "standards": [
      {
        "name": "ASTM A500",
        "description": "Cold-Formed Welded and Seamless Carbon Steel Structural Tubing"
      },
      {
        "name": "EN 10219",
        "description": "Cold formed welded structural hollow sections of non-alloy and fine grain steels"
      },
      {
        "name": "GB/T 6728",
        "description": "Cold formed hollow sections for general structure"
      },
      {
        "name": "BS 1387",
        "description": "Screwed and socketed steel tubes and tubulars for water, gas, air and steam"
      }
    ],
    "relatedProducts": [
      "seamless-steel-pipes",
      "structural-steel-profiles",
      "scaffold-tube-48"
    ],
    "categoryName": "Steel pipe/tube",
    "subcategory": "ERW Pipe (Electro welded pipe)"
  },
  {
    "slug": "straight-seam-welded-steel-pipe",
    "category": "steel-pipe-tube",
    "name": "Straight Seam High-Frequency Welded Steel Pipe (ERW)",
    "shortDescription": "DN15\u2013DN300 high-frequency longitudinal ERW welded steel pipe for water, gas, oil transmission, structural columns, and drilling tubes.",
    "description": "Straight seam high-frequency welded steel pipe (HFW / ERW) from Tianjin Decent International Trade Co., Ltd. is manufactured from premium hot-rolled carbon steel strip formed continuously into cylindrical profiles and longitudinally joined using high-frequency induction electrical resistance welding.\n\nBoth the outer and inner weld beads are cleanly trimmed to ensure smooth fluid flow, and the entire heat-affected zone undergoes in-line heat treatment. Widely utilized for municipal fluids, oil and gas gathering lines, rotary pressure drill tubes, and heavy structural engineering.",
    "heroImage": "/src/assets/images/straight-seam-welded-steel-pipe.jpg",
    "gallery": [
      "/src/assets/images/straight-seam-welded-steel-pipe.jpg",
      "/src/assets/images/hot-dip-galvanized-steel-pipe.jpg",
      "/src/assets/images/seamless-steel-pipes.jpg"
    ],
    "specifications": [
      {
        "label": "Specifications",
        "value": "DN15\u2013DN300 (Outer Diameter: 21.3\u2013325 mm)"
      },
      {
        "label": "Uses & Applications",
        "value": "Widely used in water, gas, air, oil and steam and other low-pressure fluid transportation and mechanical structure"
      },
      {
        "label": "Extended Applications",
        "value": "Oil and gas line pipe, oil pipe, rotary pressure drill pipe, marine large diameter high frequency straight seam welded pipe, mechanical pipe and other special pipes"
      },
      {
        "label": "Wall Thickness",
        "value": "1.5\u201314.0 mm"
      },
      {
        "label": "Steel Grades",
        "value": "Q195, Q215, Q235B, Q345B, Q355B, API 5L Gr. B, X42, X52, X60"
      },
      {
        "label": "Applicable Standards",
        "value": "API Spec 5L, ASTM A53, ASTM A500, EN 10219, GB/T 3091, GB/T 13793"
      },
      {
        "label": "Surface Finish",
        "value": "Bare mill finish, Lightly oiled, Black anti-rust paint, or Pre-galvanized"
      },
      {
        "label": "Length Range",
        "value": "5.8 m, 6.0 m, 11.8 m, 12.0 m, or customized precision cut lengths"
      },
      {
        "label": "End Treatments",
        "value": "Square cut plain ends or beveled ends (30\u00b0\u201335\u00b0) with end protection caps"
      },
      {
        "label": "Non-Destructive Testing",
        "value": "On-line ultrasonic weld testing, eddy current inspection, and hydrostatic verification"
      }
    ],
    "features": [
      "Advanced high-frequency induction welding producing 100% joint penetration",
      "Internal and external weld bead removal for seamless fluid dynamic performance",
      "High dimensional accuracy with minimal wall thickness variation and uniform roundness",
      "Comprehensive grade selection from commercial mild carbon steel up to high-yield API X60",
      "Suitable for threading, grooving, flange welding, and cold bending fabrication"
    ],
    "applications": [
      "Civil and municipal water, coal gas, air, and low-pressure steam pipelines",
      "Oilfield gathering pipelines, petroleum transport, and rotary drilling casing pipes",
      "Offshore marine structures, harbor piling, and industrial machinery shafts",
      "Prefabricated building columns, stadium space frames, and highway signage bridges",
      "Automotive drive shafts, shock absorber tubes, and structural cross members"
    ],
    "standards": [
      {
        "name": "API Spec 5L (PSL1/PSL2)",
        "description": "Specification for Line Pipe (Gr. B, X42 through X65)"
      },
      {
        "name": "ASTM A53 / A500",
        "description": "Specification for Pipe, Steel, Black and Hot-Dipped, Welded and Seamless"
      },
      {
        "name": "EN 10219",
        "description": "Cold formed welded structural hollow sections of non-alloy and fine grain steels"
      }
    ],
    "relatedProducts": [
      "hot-dip-galvanized-steel-pipe",
      "galvanized-seamless-steel-pipe",
      "spiral-submerged-arc-welded-steel-pipe"
    ],
    "categoryName": "Steel pipe/tube",
    "subcategory": "ERW Pipe (Electro welded pipe)"
  },
  {
    "slug": "ringlock-system",
    "category": "scaffolding-accessories",
    "name": "Ringlock System",
    "shortDescription": "Modular steel scaffolding system featuring rosette ring connections and locking pins for multi-directional access and complex structures.",
    "description": "Ring Lock / Pin Lock scaffolding is a modular steel scaffolding system used for access, working platforms, shoring support, and temporary structures in construction and industrial projects worldwide.\n\nEngineered with vertical standards fitted with rosette/ring connection plates at 500 mm intervals and cast ledger ends with captive wedge locking pins. The rosette features 8 connection points (4 small holes for 90\u00b0 right angles and 4 large holes for variable diagonal bracing angles), offering unlimited flexibility for curved structures, tanks, complex industrial geometry, and high-rise facades.",
    "heroImage": "/src/assets/images/ringlock-scaffolding.jpg",
    "gallery": [
      "/src/assets/images/ringlock-scaffolding.jpg",
      "/src/assets/images/hero-scaffolding.jpg"
    ],
    "specifications": [
      {
        "label": "Scaffolding System",
        "value": "Ring Lock / Pin Lock modular scaffolding"
      },
      {
        "label": "Material",
        "value": "High-strength steel (Q355 / S355JR grade)"
      },
      {
        "label": "Standard Mechanism",
        "value": "Vertical standards with rosette/ring connection and locking pins"
      },
      {
        "label": "Standard Spacing",
        "value": "Typically 1.0\u20132.5 m, depending on required bay size and structural design"
      },
      {
        "label": "Lift Height",
        "value": "Typically 0.5\u20132.5 m; commonly 3.0 m standard height"
      },
      {
        "label": "Horizontal Members",
        "value": "Steel ledgers with compatible wedge locking connections"
      },
      {
        "label": "Base Support",
        "value": "Adjustable base jacks and heavy-duty base plates"
      },
      {
        "label": "Working Platform",
        "value": "Steel or aluminum scaffold planks / perforated anti-slip boards"
      },
      {
        "label": "Access Options",
        "value": "Ladders or modular stair towers with internal handrails"
      },
      {
        "label": "Safety Components",
        "value": "Guardrails, midrails, toe boards, and access safety gates"
      },
      {
        "label": "Finish",
        "value": "Hot-dip galvanized or painted steel\n(Coating coverage as per client requirements)"
      },
      {
        "label": "Load Capacity",
        "value": "As per approved design and manufacturer certified load tables"
      },
      {
        "label": "Applications",
        "value": "Building construction, fa\u00e7ade works, industrial plants, warehouses, maintenance, and access"
      }
    ],
    "features": [
      "Rosette node accommodates up to 8 connection members per point",
      "Integrated captive wedge keys prevent loose parts on construction sites",
      "Optimal force distribution: high vertical capacity and rigid frame stability",
      "Adaptable to straight, curved, circular, and angular architectural geometries",
      "Hot-dip galvanized coating ensures resistance in harsh offshore and coastal climates",
      "Compliant with international safety specifications and EN 12810 / 12811 certified"
    ],
    "applications": [
      "Complex building facades and high-rise structural envelopes",
      "Industrial maintenance in oil & gas refineries, power plants, and chemical units",
      "Bridge shoring, suspended access platforms, and marine docks",
      "Grandstands, concert stages, and temporary event seating structures",
      "Storage tank maintenance and spherical vessel access"
    ],
    "standards": [
      {
        "name": "EN 12810",
        "description": "Prefabricated facade scaffold systems"
      },
      {
        "name": "EN 12811",
        "description": "Scaffolds \u2014 performance requirements and general design"
      },
      {
        "name": "ANSI/SSFI SC100-5/05",
        "description": "Standards for testing and rating scaffold assemblies"
      }
    ],
    "relatedProducts": [
      "cuplock-scaffolding-system",
      "tube-fittings-scaffolding",
      "scaffolding-accessories"
    ],
    "categoryName": "Scaffolding & Accessories",
    "subcategory": "Ringlock System"
  },
  {
    "slug": "cuplock-scaffolding-system",
    "category": "scaffolding-accessories",
    "name": "Cuplock",
    "shortDescription": "Modular steel scaffolding system featuring vertical standards with cup-and-wedge locking mechanism for rapid assembly.",
    "description": "The Cuplock scaffolding system consists of vertical standards with cup-and-ledger blade locking nodes at regular intervals, typically 500 mm apart. Forged ledger and transom blades are secured into the cups using a wedge driven by a single hammer blow.\n\nEach node can connect up to four horizontal members, providing fast erection and dismantling, rigid and stable connections, and high load-bearing capacity without loose bolts, nuts, or threaded fittings.",
    "heroImage": "/src/assets/images/cuplock-scaffolding-setup.jpg",
    "gallery": [
      "/src/assets/images/cuplock-scaffolding-setup.jpg",
      "/src/assets/images/cuplock-components-diagram.jpg",
      "/src/assets/images/cuplock-standard-post.jpg",
      "/src/assets/images/cuplock-ledger.jpg",
      "/src/assets/images/cuplock-intermediate-transom.jpg"
    ],
    "specifications": [
      {
        "label": "Scaffolding System",
        "value": "Cup Lock modular system (BS 1139 Part 5 / EN 12810 / EN 12811)"
      },
      {
        "label": "Leg Load Capacity",
        "value": "Up to 40 kN (4.0 tons) safe working load per vertical standard"
      },
      {
        "label": "Material & Grade",
        "value": "High-yield structural carbon steel (Q235 / Q355 / EN 10219 S355)"
      },
      {
        "label": "Tube Dimensions",
        "value": "48.3 mm outside diameter \u00d7 3.2 mm / 4.0 mm nominal wall thickness"
      },
      {
        "label": "Locking Node Spacing",
        "value": "Fixed bottom cups welded at standard 500 mm (0.5 m) intervals"
      },
      {
        "label": "Top Locking Cup",
        "value": "Captive malleable ductile iron cup locking up to 4 horizontal/diagonal blades with a single hammer blow"
      },
      {
        "label": "Horizontal Ledgers",
        "value": "0.60 m, 0.90 m, 1.0 m, 1.2 m, 1.3 m, 1.5 m, 1.6 m, 1.8 m, 2.0 m, 2.5 m modular bay lengths"
      },
      {
        "label": "Cantilever & Beam Brackets",
        "value": "Hop-up cantilever frames (1.2 m, 1.25 m, 1.3 m reach) and 20 kN heavy beam brackets"
      },
      {
        "label": "Surface Finish",
        "value": "Hot-Dip Galvanized to EN ISO 1461 (minimum 55\u201385 \u00b5m zinc thickness) or painted"
      },
      {
        "label": "Base Support",
        "value": "Solid or hollow adjustable screw jacks (SWL 40 kN), swivel base plates, and spigot base plates"
      },
      {
        "label": "Working Platform",
        "value": "Perforated anti-slip steel planks or timber scaffold boards conforming to EN 12811-1"
      },
      {
        "label": "Primary Use",
        "value": "Heavy civil falsework shoring, building fa\u00e7ades, petrochemical plant access, and marine maintenance"
      }
    ],
    "accessories": [
      {
        "name": "Standard / Vertical Post",
        "image": "/src/assets/images/cuplock-standard-post.jpg",
        "sizes": "0.5 m / 1.0 m / 1.5 m / 2.0 m / 2.5 m / 3.0 m",
        "sizeList": [
          "0.5 m",
          "1.0 m",
          "1.5 m",
          "2.0 m",
          "2.5 m",
          "3.0 m"
        ],
        "description": "Vertical load-bearing member (48.3 mm OD) equipped with fixed bottom cups and captive sliding top locking cups spaced at 500 mm intervals, complete with integrated top spigot connector."
      },
      {
        "name": "Ledger / Transom",
        "image": "/src/assets/images/cuplock-ledger.jpg",
        "sizes": "0.60 m / 0.9 m / 1.0 m / 1.2 m / 1.3 m / 1.5 m / 1.6 m / 1.8 m / 2.0 m / 2.5 m",
        "sizeList": [
          "0.60 m",
          "0.9 m",
          "1.0 m",
          "1.2 m",
          "1.3 m",
          "1.5 m",
          "1.6 m",
          "1.8 m",
          "2.0 m",
          "2.5 m"
        ],
        "description": "Horizontal member manufactured from 48.3 mm high-strength steel tubing with forged solid blade ends welded at both ends, seating securely into bottom cups."
      },
      {
        "name": "Intermediate Transom",
        "image": "/src/assets/images/cuplock-intermediate-transom.jpg",
        "sizes": "1.2 m / 1.3 m / 1.5 m / 1.6 m / 1.8 m / 2.0 m / 2.5 m",
        "sizeList": [
          "1.2 m",
          "1.3 m",
          "1.5 m",
          "1.6 m",
          "1.8 m",
          "2.0 m",
          "2.5 m"
        ],
        "description": "Intermediate board-supporting member with inverted locking hook jaws designed to span across two horizontal ledgers without requiring cup nodes."
      }
    ],
    "features": [
      "Single-node connection \u2014 up to four ledgers locked in one operation with a single hammer blow",
      "Significantly faster assembly compared to conventional tube & coupler systems",
      "Suited for exterior access scaffolding, heavy falsework, and shoring",
      "Inherent lateral stability resulting from rigid cup-wedge node geometry",
      "Hot-dip galvanized finish provides lasting corrosion protection in marine environments",
      "Full compatibility with modular ladders, toe boards, and jack supports"
    ],
    "applications": [
      "Commercial building construction and fa\u00e7ade maintenance",
      "Heavy shoring, falsework, and concrete slab support",
      "Refinery, chemical plant, and industrial facility shutdowns",
      "Bridge construction, viaduct piers, and tunnel linings",
      "Shipbuilding repair yards and aircraft maintenance docks"
    ],
    "standards": [
      {
        "name": "EN 12810",
        "description": "Facade scaffolding made of prefabricated components"
      },
      {
        "name": "EN 12811",
        "description": "Temporary works equipment \u2014 scaffolds performance requirements"
      },
      {
        "name": "BS 1139",
        "description": "Metal scaffolding \u2014 specifications for system scaffolding"
      }
    ],
    "relatedProducts": [
      "ringlock-system",
      "tube-fittings-scaffolding",
      "scaffolding-accessories"
    ],
    "categoryName": "Scaffolding & Accessories",
    "subcategory": "Cuplock"
  },
  {
    "slug": "kwikstage-scaffolding-system",
    "category": "scaffolding-accessories",
    "categoryName": "Scaffolding & Accessories",
    "subcategory": "Kwikstage",
    "name": "Kwikstage",
    "shortDescription": "Heavy-duty modular system scaffolding featuring captive wedge cluster connections and 48.3 mm high-yield standards.",
    "description": "Kwikstage is an established modular system scaffolding widely utilized in construction, industrial maintenance, and commercial access. Characterized by vertical standards with pressed steel 'V' pressings welded at 495 mm intervals and captive wedge fixing pins on ledgers and transoms.\n\nProviding rigid, self-aligning 90-degree orthogonal connections without loose fittings or threaded couplers. Fully compatible with non-slip steel planks, staircase towers, and heavy shoring applications.",
    "heroImage": "/src/assets/images/cuplock-scaffolding-setup.jpg",
    "gallery": [
      "/src/assets/images/cuplock-scaffolding-setup.jpg",
      "/src/assets/images/ringlock-scaffolding.jpg"
    ],
    "specifications": [
      {
        "label": "System Type",
        "value": "Kwikstage modular system scaffolding"
      },
      {
        "label": "Material & Grade",
        "value": "High-yield structural carbon steel (Q235 / Q355 / S355JR)"
      },
      {
        "label": "Tube Specification",
        "value": "48.3 mm outside diameter \u00d7 3.2 mm / 4.0 mm nominal wall"
      },
      {
        "label": "Node Spacing",
        "value": "'V' pressings welded at 495 mm (nominal 0.5 m) intervals"
      },
      {
        "label": "Standard Lengths",
        "value": "0.98 m, 1.48 m, 1.98 m, 2.48 m, 2.98 m with integrated spigot connectors"
      },
      {
        "label": "Horizontal Ledgers",
        "value": "0.8 m, 1.2 m, 1.8 m, 2.4 m modular bays with captive wedge pins"
      },
      {
        "label": "Transoms",
        "value": "T-section or inverted channel board-bearing transoms"
      },
      {
        "label": "Surface Finish",
        "value": "Hot-Dip Galvanized to EN ISO 1461 or durable painted"
      },
      {
        "label": "Working Platforms",
        "value": "Steel planks / timber scaffold boards conforming to EN 12811"
      },
      {
        "label": "Standards Compliance",
        "value": "BS 1139 Part 5, AS/NZS 1576, EN 12810 / EN 12811"
      }
    ],
    "features": [
      "Captive wedge fixing eliminates loose bolts, nuts, and pins",
      "Rapid assembly and dismantling with single-hammer blow connection",
      "High leg load capacity suitable for heavy civil falsework and access",
      "Hot-dip galvanized for extreme outdoor and coastal longevity"
    ],
    "applications": [
      "Building construction, brickwork, and external facade rendering",
      "Industrial shutdown access and petrochemical maintenance",
      "Falsework support for cast-in-place concrete slabs and beams",
      "Perimeter staging and public thoroughfare protection"
    ],
    "standards": [
      {
        "name": "BS 1139",
        "description": "Metal scaffolding \u2014 system scaffolding specifications"
      },
      {
        "name": "AS/NZS 1576",
        "description": "Scaffolding general requirements and prefabricated systems"
      },
      {
        "name": "EN 12810 / 12811",
        "description": "Facade scaffolding performance requirements"
      }
    ],
    "relatedProducts": [
      "ringlock-system",
      "cuplock-scaffolding-system",
      "scaffold-steel-props"
    ]
  },
  {
    "slug": "scaffold-steel-props",
    "category": "scaffolding-accessories",
    "name": "Steel prop/shoring",
    "shortDescription": "Telescopic adjustable steel shoring props with rolled Acme threaded collar and forged G-pin across 0.69 m to 4.87 m heights.",
    "description": "Adjustable Steel Props (Acrow Props) supplied by Tianjin Decent International Trade Co., Ltd. are heavy-duty telescopic shoring devices designed to support vertical loads during concrete formwork pouring, slab falsework, and temporary structural propping.\n\nFabricated with precision high-frequency welded steel inner (48.3 mm OD) and outer (56/60 mm OD) tubes, equipped with a forged ductile iron collar nut with dual handles and high-tensile G-pin for micro-level height adjustments. Conforming to EN 1065 Class A through E and BS 4074.",
    "heroImage": "/src/assets/images/scaffold-steel-props.jpg",
    "gallery": [
      "/src/assets/images/scaffold-steel-props.jpg",
      "/src/assets/images/scaffold-tubes-fittings.jpg"
    ],
    "specifications": [
      {
        "label": "Prop Sizes & Heights",
        "value": "Prop Size 00: 0.69 m \u2013 1.163 m\nProp Size 0: 1.07 m \u2013 1.82 m\nProp Size 1: 1.75 m \u2013 3.12 m\nProp Size 2: 1.98 m \u2013 3.35 m\nProp Size 3: 2.59 m \u2013 3.95 m\nProp Size 4: 3.20 m \u2013 4.87 m"
      },
      {
        "label": "Outer Tube Spec",
        "value": "\u00d8 56 mm / \u00d8 60 mm \u00d7 2.0 mm / 2.5 mm wall thickness"
      },
      {
        "label": "Inner Tube Spec",
        "value": "\u00d8 48.3 mm \u00d7 2.5 mm / 3.0 mm wall thickness with punched pin holes at 100 mm pitch"
      },
      {
        "label": "Adjustment Nut",
        "value": "Ductile cast iron collar nut with dual handles for rapid spin height setting"
      },
      {
        "label": "Locking Pin",
        "value": "High-tensile forged steel G-pin (\u00d8 12 mm / 14 mm) with retention chain"
      },
      {
        "label": "Base & Head Plates",
        "value": "120 \u00d7 120 \u00d7 6 mm or 150 \u00d7 150 \u00d7 8 mm flat or flower plates with nail securing holes"
      },
      {
        "label": "Surface Finish",
        "value": "Hot-Dip Galvanized, Electro-Galvanized, or High-Adhesion Powder Painted"
      },
      {
        "label": "Safe Working Load",
        "value": "10 kN to 35 kN axial load capacity (per EN 1065 certified load tables)"
      }
    ],
    "features": [
      "Six standard length ranges from 0.69 m up to 4.87 m to meet any ceiling or trench height",
      "Heavy-duty rolled Acme threads ensure smooth adjustment without clogging or stripping",
      "Self-cleaning thread design expels concrete debris and slurry during turning",
      "High axial vertical load capacity with T\u00dcV and EN 1065 certification test data",
      "Punched base plate holes allow secure fastening to timber sole plates or concrete slabs",
      "Available with U-head, fork head, or flat plate tops for timber beam / steel beam support"
    ],
    "applications": [
      "Cast-in-place concrete slab formwork and beam bottom shoring",
      "Precast concrete panel installation and temporary wall stabilization",
      "Civil engineering bridge formwork, culvert construction, and tunneling support",
      "Structural renovation, lintel replacement, and trench shoring propping"
    ],
    "standards": [
      {
        "name": "EN 1065",
        "description": "Adjustable telescopic steel props \u2014 Product specifications, design and assessment"
      },
      {
        "name": "BS 4074",
        "description": "Specification for steel trench struts and props"
      }
    ],
    "relatedProducts": [
      "scaffold-beam-ladder",
      "steel-scaffold-planks",
      "frame-scaffolding-system"
    ],
    "categoryName": "Scaffolding & Accessories",
    "subcategory": "Steel prop/shoring"
  },
  {
    "slug": "steel-scaffold-planks",
    "category": "scaffolding-accessories",
    "name": "Steel plank/board",
    "shortDescription": "Anti-slip perforated galvanized steel walk boards with reinforcing stiffeners and heavy-duty end hooks.",
    "description": "Galvanized Steel Scaffold Planks and Boards supplied by Tianjin Decent International Trade Co., Ltd. are engineered for high-durability working platforms across commercial, civil, and industrial scaffolding. Manufactured from high-strength pre-galvanized or hot-dip galvanized sheet steel with longitudinal box-channel ribs for maximum deflection resistance.\n\nFeaturing a non-slip perforated dimpled surface that prevents slip hazards from water, oil, or mud accumulation, complete with heavy-duty welded end hooks that lock firmly onto scaffolding ledgers and transoms.",
    "heroImage": "/src/assets/images/scaffold-steel-plank.jpg",
    "gallery": [
      "/src/assets/images/scaffold-steel-plank.jpg",
      "/src/assets/images/platform-board.jpg",
      "/src/assets/images/scaffold-staircase.jpg"
    ],
    "specifications": [
      {
        "label": "Plank Widths",
        "value": "210 mm, 225 mm, 240 mm, 250 mm, 480 mm"
      },
      {
        "label": "Standard Lengths",
        "value": "1.0 m, 1.5 m, 1.8 m, 2.0 m, 2.5 m, 3.0 m, 4.0 m"
      },
      {
        "label": "Profile Height",
        "value": "38 mm, 45 mm, 50 mm box-channel with welded bottom stiffeners"
      },
      {
        "label": "Sheet Thickness",
        "value": "1.1 mm, 1.2 mm, 1.5 mm, 1.8 mm, 2.0 mm structural galvanized steel"
      },
      {
        "label": "Surface Pattern",
        "value": "Anti-slip raised perforated dimples with rapid drainage perforations"
      },
      {
        "label": "End Connections",
        "value": "Dual or triple welded hooks with safety lock pins or plain box ends"
      },
      {
        "label": "Surface Finish",
        "value": "Pre-galvanized (Z120\u2013Z275) or Hot-Dip Galvanized (HDG)"
      },
      {
        "label": "Load Rating",
        "value": "Conforms to EN 12811-1 Class 3 (2.0 kN/m\u00b2) through Class 6 (6.0 kN/m\u00b2)"
      }
    ],
    "features": [
      "Convex perforated anti-slip surface ensures secure worker footing even in rain or grease",
      "Box-shaped longitudinal stiffeners prevent sagging and mid-span flexure under heavy worker loads",
      "Fire-resistant, rot-proof, and significantly more durable than traditional timber boards",
      "Welded end hooks fit securely over standard 48.3 mm scaffolding transoms and ledgers",
      "Stackable design with interlocking edges for compact transport container loading"
    ],
    "applications": [
      "Main working platforms and walkway decking on Ringlock, Cuplock, and Tube scaffolds",
      "Suspended access decks in industrial boiler houses, tank farms, and shipyards",
      "Facade masonry access, bridge maintenance, and exterior plastering decks"
    ],
    "standards": [
      {
        "name": "EN 12811-1",
        "description": "Temporary works equipment \u2014 Working platforms and decking"
      },
      {
        "name": "BS 1139",
        "description": "Metal scaffolding \u2014 specifications for steel scaffold boards"
      },
      {
        "name": "OSHA 1926.451",
        "description": "General safety requirements for scaffolding platforms"
      }
    ],
    "relatedProducts": [
      "aluminum-platform",
      "scaffold-staircase",
      "frame-scaffolding-system"
    ],
    "categoryName": "Scaffolding & Accessories",
    "subcategory": "Steel plank/board"
  },
  {
    "slug": "aluminum-platform",
    "category": "scaffolding-accessories",
    "name": "Aluminum Scaffold Platform Board",
    "shortDescription": "Lightweight aluminum working deck with perforated anti-slip surface and safety locking hooks.",
    "description": "High-strength aluminum alloy scaffold platform board designed for ease of handling, corrosion resistance, and safe worker footing. Features non-slip textured surfaces, water-drainage perforations, and wind-lock clips.",
    "heroImage": "/src/assets/images/platform-board.jpg",
    "gallery": [
      "/src/assets/images/platform-board.jpg"
    ],
    "specifications": [
      {
        "label": "Material",
        "value": "Aluminum Alloy 6061-T6 / 6082-T6"
      },
      {
        "label": "Platform Width",
        "value": "320 mm / 480 mm / 600 mm"
      },
      {
        "label": "Lengths Available",
        "value": "1.5 m, 2.0 m, 2.5 m, 3.0 m"
      },
      {
        "label": "Load Rating",
        "value": "EN 12811 Class 3 (2.0 kN/m\u00b2) to Class 5"
      }
    ],
    "features": [
      "Lightweight aluminum design reduces worker handling fatigue",
      "Perforated anti-slip profile for wet and oily environments",
      "Integrated wind-lock safety hooks"
    ],
    "applications": [
      "Working platforms on facade scaffolding and mobile towers"
    ],
    "standards": [
      {
        "name": "EN 12811",
        "description": "Temporary works equipment \u2014 Working platforms"
      }
    ],
    "relatedProducts": [
      "steel-scaffold-planks",
      "aluminum-tower"
    ],
    "categoryName": "Scaffolding & Accessories",
    "subcategory": "Steel plank/board"
  },
  {
    "slug": "scaffold-staircase",
    "category": "scaffolding-accessories",
    "name": "Modular Steel Scaffolding Staircase Unit",
    "shortDescription": "Prefabricated steel access stairs with non-slip perforated treads and ledger hooks for rapid, safe personnel stair towers.",
    "description": "Modular Steel Scaffolding Staircase Units provide safe, ergonomic vertical transit between scaffold working levels, replacing unsafe vertical ladders with compliant stair towers. Engineered with formed steel stringers and punched non-slip stair treads featuring drainage dimples.\n\nEquipped with heavy-duty end hooks that seat directly over scaffolding horizontal ledgers and transoms, providing quick installation and stable, wobble-free footing conforming to EN 12811 and OSHA standards.",
    "heroImage": "/src/assets/images/scaffold-staircase.jpg",
    "gallery": [
      "/src/assets/images/scaffold-staircase.jpg",
      "/src/assets/images/scaffold-steel-plank.jpg",
      "/src/assets/images/cuplock-scaffolding-setup.jpg"
    ],
    "specifications": [
      {
        "label": "Lift Height / Rise",
        "value": "1.5 m / 2.0 m standard scaffolding vertical bay lift height"
      },
      {
        "label": "Clear Width",
        "value": "600 mm / 900 mm ergonomic walking width"
      },
      {
        "label": "Tread Construction",
        "value": "Pressed steel non-slip perforated treads with drainage holes"
      },
      {
        "label": "Rise & Going",
        "value": "Rise ~200 mm, Going ~220 mm for natural, comfortable stair climbing"
      },
      {
        "label": "Connection Hooks",
        "value": "Reinforced welded steel end hooks with integrated lift-off safety retainers"
      },
      {
        "label": "Material & Finish",
        "value": "High-strength structural steel, Pre-galvanized or Hot-Dip Galvanized"
      },
      {
        "label": "Access Handrails",
        "value": "Internal and external matching diagonal handrail units available"
      },
      {
        "label": "Permissible Load",
        "value": "1.5 kN/m\u00b2 to 2.0 kN/m\u00b2 live load rating (EN 12811 Class 3)"
      }
    ],
    "features": [
      "Replaces ladder climbing with ergonomic walking access, significantly reducing worker fatigue and fall risk",
      "Perforated dimpled treads provide superior traction in wet, muddy, or icy working conditions",
      "Hooks securely onto standard 48.3 mm ledgers across Cuplock, Ringlock, and Frame systems",
      "Rapid drop-in installation requiring no specialized hand tools or loose fasteners",
      "Hot-dip galvanized finish guarantees lasting protection against coastal and chemical exposure"
    ],
    "applications": [
      "High-rise construction public access and personnel evacuation stair towers",
      "Industrial plant turnaround, boiler maintenance, and refinery overhaul access",
      "Commercial facade refurbishment and multi-tiered staging platforms"
    ],
    "standards": [
      {
        "name": "EN 12811-1",
        "description": "Temporary works equipment \u2014 Scaffolds access and stairways"
      },
      {
        "name": "OSHA 1926.451",
        "description": "Safety and Health Regulations for Construction \u2014 Scaffolds access requirements"
      }
    ],
    "relatedProducts": [
      "steel-scaffold-planks",
      "frame-scaffolding-system",
      "ringlock-system"
    ],
    "categoryName": "Scaffolding & Accessories",
    "subcategory": "Staircase/beam ladder/ladder"
  },
  {
    "slug": "scaffold-beam-ladder",
    "category": "scaffolding-accessories",
    "name": "Scaffolding Beam Ladders & Lattice Girders",
    "shortDescription": "High-tensile parallel-chord 48.3 mm tubular lattice beams engineered for bridging large spans, openings, and suspended scaffolds.",
    "description": "Scaffolding Beam Ladders and Lattice Girders are structural spanning components manufactured from 48.3 mm high-yield steel tubing. Designed to bridge over wide openings, vehicular roadways, pedestrian thoroughfares, and roof voids where continuous ground-supported scaffolding is impractical.\n\nEngineered with full-penetration welding between chords and diagonal lattice bracing, conforming to BS 1139 and EN 12811 for high bending moment capacity and point load resistance.",
    "heroImage": "/src/assets/images/scaffold-beam-ladder.jpg",
    "gallery": [
      "/src/assets/images/scaffold-beam-ladder.jpg",
      "/src/assets/images/scaffold-beam-ladder-bundle.jpg",
      "/src/assets/images/scaffold-tubes-fittings.jpg"
    ],
    "specifications": [
      {
        "label": "Lattice Depth",
        "value": "300 mm, 450 mm, 500 mm, 750 mm (standard 450 mm / 18\" deep lattice)"
      },
      {
        "label": "Standard Lengths",
        "value": "2.0 m, 3.0 m, 4.0 m, 5.0 m, 6.0 m, 8.0 m (custom lengths available)"
      },
      {
        "label": "Chord Tubes",
        "value": "\u00d8 48.3 mm \u00d7 3.2 mm / 4.0 mm high-yield structural steel tubing"
      },
      {
        "label": "Lacing Tubes",
        "value": "\u00d8 48.3 mm or \u00d8 38 mm diagonal and vertical welded lattice trussing"
      },
      {
        "label": "Connection Details",
        "value": "Direct connection using standard EN 74-1 right-angle / swivel couplers or spigot connectors"
      },
      {
        "label": "Surface Finish",
        "value": "Hot-Dip Galvanized to EN ISO 1461 for severe marine and industrial atmospheric protection"
      },
      {
        "label": "Bending Capacity",
        "value": "High permissible bending moment engineered for heavy suspended staging and equipment decks"
      },
      {
        "label": "Primary Use",
        "value": "Bridging openings, entrance portals, pedestrian canopies, and suspended scaffolding"
      }
    ],
    "features": [
      "Fabricated entirely from standardized 48.3 mm tubes for complete coupler compatibility",
      "Continuous automated robotic MIG welding guarantees full weld penetration and joint strength",
      "Provides clear wide-span access over building entrances, roadways, and sensitive equipment",
      "End-to-end spigoting permits multi-section continuous beam spans exceeding 20 meters",
      "Hot-dip galvanized coating ensures zero corrosion maintenance over extended project lifespans"
    ],
    "applications": [
      "Bridging over vehicular entrance gates and active construction site roadways",
      "Pedestrian protection gantries and overhead debris catchment decks",
      "Suspended access platforms on offshore platforms, bridges, and ship hulls",
      "Heavy shoring transfer beams and cantilevered working bays"
    ],
    "standards": [
      {
        "name": "BS 1139",
        "description": "Metal scaffolding \u2014 specifications for system scaffolding and components"
      },
      {
        "name": "EN 12811-1",
        "description": "Temporary works equipment \u2014 Scaffolds performance requirements"
      }
    ],
    "relatedProducts": [
      "scaffold-steel-props",
      "steel-scaffold-planks",
      "frame-scaffolding-system"
    ],
    "categoryName": "Scaffolding & Accessories",
    "subcategory": "Staircase/beam ladder/ladder"
  },
  {
    "slug": "aluminum-extension-ladder",
    "category": "scaffolding-accessories",
    "name": "Industrial Aluminum Extension Ladder (Rope-Operated)",
    "shortDescription": "Heavy-duty 2-section rope-and-pulley operated extension ladder (SWL 150 kg) with serrated D-rungs and swell rubber safety feet.",
    "description": "Industrial-grade 2-section aluminum extension ladder engineered for heavy civil, industrial, and electrical utility access. Features a smooth nylon rope-and-pulley deployment system, spring-loaded gravity lock hooks that engage rungs automatically, and deeply serrated slip-resistant D-rungs crimped into heavy box-section stiles.\n\nFitted with heavy-duty swell rubber pivoting safety shoes with serrated ice/gravel picks for reliable ground traction and non-marring molded rubber top wall caps that protect building surfaces while preventing lateral slide. Fully compliant with EN 131 Professional standards.",
    "heroImage": "/src/assets/images/aluminum-extension-ladder.jpg",
    "gallery": [
      "/src/assets/images/aluminum-extension-ladder.jpg",
      "/src/assets/images/aluminum-tower.jpg"
    ],
    "specifications": [
      {
        "label": "Ladder Type",
        "value": "2-section rope-and-pulley operated extension ladder"
      },
      {
        "label": "Working Height Range",
        "value": "Available in 2\u00d75 up to 2\u00d719 rungs (extended lengths from 3.0 m up to 11.4 m)"
      },
      {
        "label": "Safe Working Load (SWL)",
        "value": "150 kg (330 lbs) conforming to EN 131 Professional standard"
      },
      {
        "label": "Material & Alloy",
        "value": "High-strength extruded architectural aluminum alloy (6061-T6 / 6063-T6)"
      },
      {
        "label": "Rung Profile",
        "value": "Deeply serrated anti-slip D-rungs with 3-piece hydraulic crimped joints"
      },
      {
        "label": "Deployment Mechanism",
        "value": "Low-friction nylon grooved pulley with braided polyester haul rope"
      },
      {
        "label": "Rung Locking Mechanism",
        "value": "Spring-loaded cast alloy gravity lock hooks with automatic rung engagement"
      },
      {
        "label": "Safety Foot Design",
        "value": "Dual-action pivoting swell rubber safety shoes with serrated steel ice picks"
      },
      {
        "label": "Top Wall Protection",
        "value": "Heavy-duty non-marring molded rubber wall caps to prevent facade damage and slip"
      },
      {
        "label": "Standards Compliance",
        "value": "Certified to EN 131, BS 2037 Class 1 Industrial, and OSHA 1926.1053"
      }
    ],
    "features": [
      "Smooth rope-and-pulley system allows single-operator extension from ground level without pinching",
      "Automatic gravity lock hooks engage rungs securely at each height tier for fail-safe ascent",
      "Deep serrated D-rungs provide flat, comfortable, slip-resistant standing surface underfoot",
      "Pivoting swell rubber shoes adjust automatically to ground slope with flip-down ice pick spurs",
      "Molded rubber top caps grip smooth brick, tile, and metal surfaces without marring or slipping",
      "Corrosion-resistant extruded aluminum construction suitable for humid outdoor and marine job sites"
    ],
    "applications": [
      "Industrial scaffolding erection, access staging, and platform crossover inspection",
      "Petrochemical refinery maintenance, electrical cable trays, and pipe bridge inspection",
      "Commercial building construction, roofing access, and telecommunications cabling"
    ],
    "standards": [
      {
        "name": "EN 131",
        "description": "Ladders \u2014 Professional heavy-duty industrial specification"
      },
      {
        "name": "BS 2037 Class 1",
        "description": "Specification for portable aluminium ladders and steps"
      },
      {
        "name": "OSHA 1926.1053",
        "description": "Safety standards for ladders used in construction"
      }
    ],
    "relatedProducts": [
      "aluminum-tower",
      "scaffolding-accessories",
      "aluminum-platform"
    ],
    "categoryName": "Scaffolding & Accessories",
    "subcategory": "Staircase/beam ladder/ladder"
  },
  {
    "slug": "aluminum-tower",
    "category": "scaffolding-accessories",
    "name": "Mobile Aluminum Scaffolding Tower",
    "shortDescription": "Free-standing modular mobile access tower (SWL 700 kg) in high-grade aluminum with 200 mm lockable castors.",
    "description": "Lightweight modular mobile access tower engineered for rapid tool-free assembly and safe high-elevation working platforms. Constructed from high-tensile structural aluminum alloy tubes (6061-T6 / 6082-T6) featuring castellated anti-slip rung frames, 200 mm dual-locking polyurethane castors, heavy-duty outriggers, internal ladder bays, and trapdoor working decks.",
    "heroImage": "/src/assets/images/aluminum-tower.jpg",
    "gallery": [
      "/src/assets/images/aluminum-tower.jpg",
      "/src/assets/images/platform-board.jpg",
      "/src/assets/images/aluminum-extension-ladder.jpg"
    ],
    "specifications": [
      {
        "label": "Tower Material",
        "value": "High-strength structural aluminum alloy (6061-T6 / 6082-T6)"
      },
      {
        "label": "Working Heights",
        "value": "Modular configurations up to 16.0 meters working height"
      },
      {
        "label": "Safe Working Load (SWL)",
        "value": "250 kg per platform deck; 700 kg maximum total tower load"
      },
      {
        "label": "Castor Wheels",
        "value": "200 mm (8-inch) dual-locking polyurethane wheels (500 kg rating per wheel) with grooved height adjusters"
      },
      {
        "label": "Frame Dimensions",
        "value": "Single Width (0.85 m / 1.2 m) & Double Width (1.45 m / 2.0 m); lengths 1.8 m, 2.5 m, 3.0 m"
      },
      {
        "label": "Rung Construction",
        "value": "Deeply ribbed castellated anti-slip aluminum tubing welded directly to upright stiles"
      },
      {
        "label": "Decking & Access",
        "value": "Perforated anti-slip platform with slip-resistant marine plywood trapdoor access"
      },
      {
        "label": "Stabilizing Outriggers",
        "value": "Telescopic clamp-on outriggers ensuring 3:1 base-to-height stability ratio"
      },
      {
        "label": "Compliance Standard",
        "value": "Certified to EN 1004 Class 3 and BS 1139 Part 3"
      }
    ],
    "features": [
      "Castellated ribbed tube design provides safe climbing grip and enhanced structural rigidity",
      "Dual-action 200 mm polyurethane castors provide independent rolling and swiveling locks",
      "Color-coded snap-lock brace claws enable fast tool-free assembly and dismantling",
      "Trapdoor platform design ensures workers always remain protected inside the guardrail perimeter",
      "Lightweight aluminum frames can be maneuvered through narrow corridors and standard double doors"
    ],
    "applications": [
      "Interior building fit-out, ceiling installation, lighting, and HVAC duct maintenance",
      "Commercial facade cleaning, window glazing, and architectural cladding inspection",
      "Industrial plant turnaround access inside refineries, power generation halls, and cleanrooms"
    ],
    "standards": [
      {
        "name": "EN 1004",
        "description": "Mobile access and working towers made of prefabricated elements"
      },
      {
        "name": "BS 1139 Part 3",
        "description": "Specification for prefabricated mobile access and working towers"
      },
      {
        "name": "OSHA 1926.452",
        "description": "Safety standards for mobile scaffolds"
      }
    ],
    "relatedProducts": [
      "aluminum-platform",
      "aluminum-extension-ladder",
      "scaffolding-accessories"
    ],
    "categoryName": "Scaffolding & Accessories",
    "subcategory": "Staircase/beam ladder/ladder"
  },
  {
    "slug": "frame-scaffolding-system",
    "category": "scaffolding-accessories",
    "name": "Modular Frame Scaffolding System (H-Frame & Walk-Through)",
    "shortDescription": "Prefabricated portal frame scaffolding system with walk-through frames, mason frames, cross braces, and lock pins.",
    "description": "The Modular Frame Scaffolding System is engineered for rapid, tool-free erection on masonry construction, exterior building finishing, stucco work, and commercial maintenance projects. Built from high-tensile structural steel tubular uprights welded into rigid box geometries, each section locks securely with scissor cross braces and gravity flip-locks.\n\nAvailable in Walk-Through Frame and Mason H-Frame configurations, accommodating integrated steel walk boards, staircases, and heavy loading conditions conforming to ANSI and EN specifications.",
    "heroImage": "/src/assets/images/frame-scaffolding.jpg",
    "gallery": [
      "/src/assets/images/frame-scaffolding.jpg",
      "/src/assets/images/scaffold-steel-plank.jpg",
      "/src/assets/images/scaffold-staircase.jpg"
    ],
    "specifications": [
      {
        "label": "System Type",
        "value": "Walk-Through Frame & Mason H-Frame modular scaffolding"
      },
      {
        "label": "Standard Dimensions",
        "value": "1930 mm \u00d7 1219 mm (6'4\" \u00d7 4'), 1700 mm \u00d7 1219 mm, 1524 mm \u00d7 1219 mm (5' \u00d7 4'), 1930 mm \u00d7 914 mm"
      },
      {
        "label": "Main Leg Tube",
        "value": "\u00d8 42.7 mm / \u00d8 48.3 mm \u00d7 2.0 mm / 2.5 mm high-yield carbon steel"
      },
      {
        "label": "Lock Types",
        "value": "Drop lock / Gravity flip lock / Fast lock pins"
      },
      {
        "label": "Cross Braces",
        "value": "Galvanized tube scissor cross braces to suit 1.8 m, 2.0 m, 2.13 m, 2.5 m bays"
      },
      {
        "label": "Surface Finish",
        "value": "High-durability powder-coated (Red / Yellow / Blue) or Hot-Dip Galvanized"
      },
      {
        "label": "Platform Decking",
        "value": "Compatible with steel planks, aluminum platform boards, and access hatch decks"
      },
      {
        "label": "Load Capacity",
        "value": "Heavy Duty rating up to 50 psf (2.4 kN/m\u00b2) uniform distributed load"
      },
      {
        "label": "Applications",
        "value": "Brick masonry, exterior wall plastering, cladding installation, and interior maintenance"
      }
    ],
    "features": [
      "Rapid, tool-free assembly with drop-lock pins and captive gravity pins",
      "Walk-through portal geometry allows unobstructed worker passage along scaffold bays",
      "High-grade structural steel tubing ensures maximum buckling resistance",
      "Available in durable powder-coated painted finish or hot-dip galvanized finish",
      "Complete accessory compatibility: screw jacks, casters, guardrail posts, and stairs",
      "Full compliance with international access safety and load standards"
    ],
    "applications": [
      "Exterior masonry, bricklaying, and stone facade construction",
      "Stucco, plastering, exterior insulation and finish systems (EIFS)",
      "Building painting, window glazing, and architectural panel installation",
      "Industrial warehouse wall maintenance and internal ceiling access"
    ],
    "standards": [
      {
        "name": "ANSI/SSFI SC100-5/05",
        "description": "Standards for testing and rating scaffold assemblies and components"
      },
      {
        "name": "EN 12810",
        "description": "Fa\u00e7ade scaffolds made of prefabricated components"
      },
      {
        "name": "OSHA 1926.451",
        "description": "Safety and Health Regulations for Construction \u2014 Scaffolds"
      }
    ],
    "relatedProducts": [
      "steel-scaffold-planks",
      "scaffold-staircase",
      "scaffold-steel-props"
    ],
    "categoryName": "Scaffolding & Accessories",
    "subcategory": "Staircase/beam ladder/ladder"
  },
  {
    "slug": "right-angle-coupler",
    "category": "scaffolding-accessories",
    "name": "Right-Angle Coupler (Double Coupler)",
    "shortDescription": "Drop-forged carbon steel right-angle coupler connecting two 48.3 mm tubes at 90 degrees conforming to EN 74-1 Class B.",
    "description": "Drop-forged high-strength double coupler designed to connect two 48.3 mm scaffold tubes at a fixed 90-degree right angle. Engineered to exceed EN 74-1 Class B slip-resistance ratings with hot-dip galvanized or zinc electroplated finish.",
    "heroImage": "/src/assets/images/fitting-double-coupler.jpg",
    "gallery": [
      "/src/assets/images/fitting-double-coupler.jpg",
      "/src/assets/images/fitting-swivel-coupler.jpg",
      "/src/assets/images/fitting-putlog-coupler.jpg",
      "/src/assets/images/fitting-sleeve-coupler.jpg"
    ],
    "specifications": [
      {
        "label": "Connection Angle",
        "value": "Fixed 90\u00b0"
      },
      {
        "label": "Tube Diameter",
        "value": "48.3 mm \u00d7 48.3 mm"
      },
      {
        "label": "Material",
        "value": "Drop-Forged Carbon Steel (High-Tensile)"
      },
      {
        "label": "Tightening Torque",
        "value": "54 Nm"
      },
      {
        "label": "Standard Compliance",
        "value": "EN 74-1 Class B Certified"
      },
      {
        "label": "Slip Resistance Load",
        "value": "\u2265 15.0 kN (Class B tested)"
      },
      {
        "label": "Failure Load",
        "value": "\u2265 30.0 kN"
      },
      {
        "label": "Surface Finish",
        "value": "Hot-Dip Galvanized / Zinc Electroplated"
      },
      {
        "label": "Fasteners",
        "value": "Grade 8.8 T-bolts with 21 mm / 22 mm flanged hex nuts"
      }
    ],
    "features": [
      "Drop-forged heavy ribbed body for maximum load resistance without distortion",
      "Corrosion-resistant hot-dip galvanized or electro-galvanized coating",
      "Full compliance with EN 74-1 Class B slip-resistance testing",
      "High-tensile forged T-bolts prevent thread stripping during impact wrench tightening"
    ],
    "applications": [
      "Connecting standards to ledgers and transoms at 90 degrees",
      "Structural frame assembly and load-bearing falsework grids",
      "Heavy-duty industrial and offshore scaffolding"
    ],
    "standards": [
      {
        "name": "EN 74-1 Class B",
        "description": "Couplers for scaffolding \u2014 Class B heavy duty rating"
      },
      {
        "name": "BS 1139",
        "description": "Metal scaffolding \u2014 specifications for fittings"
      }
    ],
    "relatedProducts": [
      "swivel-coupler",
      "scaffold-tube-48",
      "base-jack"
    ],
    "categoryName": "Scaffolding & Accessories",
    "subcategory": "Couplers"
  },
  {
    "slug": "swivel-coupler",
    "category": "scaffolding-accessories",
    "name": "Swivel Coupler",
    "shortDescription": "Drop-forged steel universal swivel coupler for connecting two 48.3 mm tubes at any arbitrary angle conforming to EN 74-1 Class B.",
    "description": "Heavy-duty drop-forged swivel coupler allowing two 48.3 mm scaffold tubes to be clamped at any required angle. Essential for diagonal sway bracing, ledger bracing, and triangular structural ties. Fully certified to EN 74-1 Class B.",
    "heroImage": "/src/assets/images/fitting-swivel-coupler.jpg",
    "gallery": [
      "/src/assets/images/fitting-swivel-coupler.jpg",
      "/src/assets/images/fitting-double-coupler.jpg",
      "/src/assets/images/fitting-putlog-coupler.jpg",
      "/src/assets/images/fitting-board-retaining-clamp.jpg",
      "/src/assets/images/fitting-sleeve-coupler.jpg",
      "/src/assets/images/fitting-beam-clamp.jpg"
    ],
    "specifications": [
      {
        "label": "Standard Compliance",
        "value": "EN 74-1 Class B Certified"
      },
      {
        "label": "Connection Angle",
        "value": "360\u00b0 Swivel rotation"
      },
      {
        "label": "Tube Diameter",
        "value": "48.3 mm \u00d7 48.3 mm"
      },
      {
        "label": "Material",
        "value": "Drop-Forged Carbon Steel"
      },
      {
        "label": "Tightening Torque",
        "value": "54 Nm"
      },
      {
        "label": "Slip Resistance Load",
        "value": "\u2265 15.0 kN (Class B requirement)"
      },
      {
        "label": "Failure Load",
        "value": "\u2265 20.0 kN"
      },
      {
        "label": "Surface Finish",
        "value": "Hot-Dip Galvanized / Zinc Electroplated"
      },
      {
        "label": "Fasteners",
        "value": "Grade 8.8 T-bolts with 21 mm / 22 mm flanged hex nuts"
      }
    ],
    "features": [
      "360-degree rotation for diagonal sway bracing and angular propping",
      "Drop-forged heavy-gauge body ensures maximum tensile resistance",
      "Certified to EN 74-1 Class B with physical test verification",
      "Heavy-duty zinc passivation coating protects against marine and coastal atmospheres"
    ],
    "applications": [
      "Diagonal sway bracing and plan bracing",
      "Triangulated structural ties and facade stabilizers",
      "Tubular framework junctions on irregular structures"
    ],
    "standards": [
      {
        "name": "EN 74-1 Class B",
        "description": "Scaffolding couplers \u2014 Class B Certified"
      },
      {
        "name": "BS 1139",
        "description": "Metal scaffolding \u2014 specifications for fittings"
      }
    ],
    "relatedProducts": [
      "right-angle-coupler",
      "scaffold-tube-48",
      "base-jack"
    ],
    "categoryName": "Scaffolding & Accessories",
    "subcategory": "Couplers"
  },
  {
    "slug": "tube-fittings-scaffolding",
    "category": "scaffolding-accessories",
    "name": "Tube & Fitting Scaffolding System",
    "shortDescription": "Traditional modular scaffolding system consisting of 48.3 mm high-strength steel tubes connected using drop-forged mechanical couplers.",
    "description": "Tube & Fitting scaffolding is a versatile traditional modular scaffolding system consisting of high-strength steel tubes connected using mechanical couplers and clamps. It is suitable for construction, maintenance, access, and temporary support works where site conditions demand complete dimensional freedom.\n\nBecause couplers can be fastened at any position along the 48.3 mm diameter tubes, this system can wrap around irregular building profiles, accommodate uneven terrain, bridge complex obstacles, and adapt where prefabricated modular systems are constrained. Supplied with hot-dip galvanized or painted finish with drop-forged EN 74 compliant couplers.",
    "heroImage": "/src/assets/images/scaffold-tubes-fittings.jpg",
    "gallery": [
      "/src/assets/images/scaffold-tubes-fittings.jpg",
      "/src/assets/images/fitting-swivel-coupler.jpg",
      "/src/assets/images/fitting-double-coupler.jpg",
      "/src/assets/images/fitting-beam-clamp.jpg"
    ],
    "specifications": [
      {
        "label": "Scaffolding System",
        "value": "Tube & Fitting scaffolding"
      },
      {
        "label": "Material",
        "value": "High-strength steel tubes (S235GT / S355 / Q235 / Q355 structural steel)"
      },
      {
        "label": "Tube Diameter",
        "value": "48.3 mm nominal outside diameter (OD)"
      },
      {
        "label": "Tube Thickness",
        "value": "2.9 mm, 3.2 mm, 3.4/3.76 mm, 4.0 mm nominal wall thickness"
      },
      {
        "label": "Tube Lengths",
        "value": "Any length as per client requirement (Suitable for Ocean freight by BB / Container)"
      },
      {
        "label": "Coupler Types",
        "value": "Right-angle (double), swivel, sleeve, putlog, and girder approved couplers"
      },
      {
        "label": "Coupler Compliance",
        "value": "EN 74-1 Class B Certified"
      },
      {
        "label": "Base Support",
        "value": "Adjustable screw base jacks and steel base plates"
      },
      {
        "label": "Working Platform",
        "value": "Steel or aluminum scaffold boards/planks"
      },
      {
        "label": "Access Solutions",
        "value": "Scaffold ladders or external stair towers as required"
      },
      {
        "label": "Safety Components",
        "value": "Guardrails, midrails, toe boards, and self-closing access gates"
      },
      {
        "label": "Finish",
        "value": "Hot-dip galvanized or painted steel (Coating coverage as per client requirements)"
      },
      {
        "label": "Load Capacity",
        "value": "As per approved scaffolding design and certified load tables"
      },
      {
        "label": "Applications",
        "value": "Building construction, fa\u00e7ade works, industrial plants, maintenance, temporary access, and support structures"
      }
    ],
    "features": [
      "Complete geometric freedom for irregular structures, cantilevers, and tight spaces",
      "Standardized 48.3 mm OD tube compatible with universal couplers and accessories",
      "Drop-forged carbon steel couplers meeting EN 74-1 Class B certified ratings",
      "Hot-dip galvanized to EN ISO 1461 for long-term corrosion resistance",
      "Cost-effective and durable solution for industrial plant maintenance"
    ],
    "applications": [
      "Heritage restoration with complex masonry contours",
      "Industrial refineries, boiler houses, and chemical plant piping racks",
      "Cantilevered platforms, bridging beams, and suspended scaffolds",
      "Heavy shoring, raking shores, and structural propping"
    ],
    "standards": [
      {
        "name": "EN 39",
        "description": "Loose steel tubes for tube and coupler scaffolds \u2014 Technical delivery conditions"
      },
      {
        "name": "EN 74-1",
        "description": "Couplers, spigot pins and baseplates for use in falsework and scaffolds"
      },
      {
        "name": "BS 1139",
        "description": "Metal scaffolding \u2014 Specification for steel tube"
      }
    ],
    "relatedProducts": [
      "scaffolding-accessories",
      "scaffold-tube-48",
      "right-angle-coupler",
      "swivel-coupler"
    ],
    "categoryName": "Scaffolding & Accessories",
    "subcategory": "Couplers"
  },
  {
    "slug": "base-jack",
    "category": "scaffolding-accessories",
    "name": "Adjustable Base Jack & Fork Head",
    "shortDescription": "Heavy-duty cold-rolled Acme threaded screw base jack (SWL 40 kN) with 150\u00d7150\u00d76mm base plate for scaffold leveling.",
    "description": "Adjustable base jacks provide precision leveling and heavy vertical load transfer from scaffolding standards directly to ground timber sole boards or concrete foundations. Manufactured from high-strength carbon steel featuring a continuous cold-rolled Acme thread that prevents jam-ups from construction debris, paired with a malleable cast iron wing-nut collar for effortless height calibration under load.\n\nAvailable in Solid Stem and Hollow Tube designs, with complementary Universal Jacks, Fixed or Adjustable U-Head Fork Heads for timber and aluminum bearer support, and Swivel / Rocking Base Plates for inclined or stepped grade surfaces.",
    "heroImage": "/src/assets/images/scaffold-base-jack.jpg",
    "gallery": [
      "/src/assets/images/scaffold-base-jack.jpg",
      "/src/assets/images/scaffolding-accessories-collection.jpg",
      "/src/assets/images/scaffold-tubes-fittings.jpg"
    ],
    "specifications": [
      {
        "label": "Safe Working Load (SWL)",
        "value": "40 kN (4,000 kg / 4.0 metric tons) safe axial vertical capacity"
      },
      {
        "label": "Base Plate Dimensions",
        "value": "150 mm \u00d7 150 mm \u00d7 6.0 mm (with 4 pre-punched holes for timber anchor nail fixing)"
      },
      {
        "label": "Stem Dimensions",
        "value": "660 mm total length \u00d7 38 mm OD (standard fit) / 48.3 mm OD (heavy-duty), 4.0 mm wall"
      },
      {
        "label": "Effective Adjustment",
        "value": "Up to 500 mm continuous height leveling range"
      },
      {
        "label": "Thread Profile",
        "value": "Precision cold-rolled self-cleaning Acme trapezoidal thread"
      },
      {
        "label": "Adjustment Collar",
        "value": "Heavy-duty ductile malleable cast iron double-wing nut with rolled thread engagement"
      },
      {
        "label": "Stem Types Available",
        "value": "Solid bar stem or hollow structural seamless tube stem"
      },
      {
        "label": "Alternative Head Options",
        "value": "Universal Jack, Fixed/Adjustable U-Head Fork Head (for H20/aluminum beams), Swivel Base Plate"
      },
      {
        "label": "Surface Protection",
        "value": "Hot-Dip Galvanized to EN ISO 1461 (minimum 55 \u00b5m) or Zinc Electroplated"
      },
      {
        "label": "Standard Compliance",
        "value": "Conforms to BS 1139, EN 12811-1, and OSHA 1926.451"
      }
    ],
    "features": [
      "Self-cleaning cold-rolled Acme threads resist mortar, slurry, and debris build-up on job sites",
      "Robust 150\u00d7150\u00d76mm plate distributes intense standard reactions evenly over timber sole plates",
      "Four corner anchor holes facilitate positive nail or screw anchoring to prevent foot displacement",
      "Ergonomic cast wing-nut allows fast manual rotation and fine leveling under full working loads",
      "Full compatibility with Cuplock, Ringlock, Kwikstage, and Tube & Fitting scaffolding standards"
    ],
    "applications": [
      "Bottom foundation leveling for Cuplock, Ringlock, and Tube scaffolds on uneven or sloped ground",
      "Top head jack propping for primary falsework beams, slab formwork, and bridging lintels",
      "Industrial maintenance shoring, tank farms, and bridge substructure scaffolding access"
    ],
    "standards": [
      {
        "name": "BS 1139 Part 2",
        "description": "Metal scaffolding \u2014 specifications for base plates and jacks"
      },
      {
        "name": "EN 12811-1",
        "description": "Temporary works equipment \u2014 Performance requirements and general design"
      },
      {
        "name": "OSHA 1926.451",
        "description": "Safety and Health Regulations for Construction \u2014 Scaffolds"
      }
    ],
    "relatedProducts": [
      "scaffold-tube-48",
      "cuplock-scaffolding-system",
      "scaffolding-accessories"
    ],
    "categoryName": "Scaffolding & Accessories",
    "subcategory": "Couplers"
  },
  {
    "slug": "scaffold-tube-48",
    "category": "scaffolding-accessories",
    "name": "Scaffold Tubes Dia 48.3 MM",
    "shortDescription": "Standard 48.3 mm outside diameter scaffolding tubes manufactured from high-yield carbon steel. Available in standard 3.2 mm and 4.0 mm wall thicknesses with standard lengths up to 6.0 meters.",
    "description": "Standard 48.3 mm outside diameter scaffolding tubes manufactured from high-yield carbon steel. Available in standard 3.2 mm and 4.0 mm wall thicknesses with standard lengths up to 6.0 meters. Fully hot-dip galvanized for extreme weather resistance.",
    "heroImage": "/src/assets/images/scaffold-tubes-48mm.jpg",
    "gallery": [
      "/src/assets/images/scaffold-tubes-48mm.jpg",
      "/src/assets/images/scaffold-tubes-fittings.jpg",
      "/src/assets/images/fitting-double-coupler.jpg",
      "/src/assets/images/fitting-swivel-coupler.jpg"
    ],
    "specifications": [
      {
        "label": "Outside Diameter",
        "value": "48.3 mm (1.90 in)"
      },
      {
        "label": "Wall Thickness Options",
        "value": "2.9 mm, 3.2 mm, 3.4 mm / 3.76 mm, 4.0 mm nominal wall thickness"
      },
      {
        "label": "Standard Lengths",
        "value": "Any length as per client requirement\n(Should be suitable to Ocean freight by BB / Container)"
      },
      {
        "label": "Material Grades",
        "value": "High-yield Carbon Steel (EN 10219, ASTM A500 Gr B, EN 39, BS 1139)"
      },
      {
        "label": "Surface Finish",
        "value": "Fully Hot-Dip Galvanized for extreme weather resistance\n(Coating coverage as per client requirements)"
      },
      {
        "label": "End Finish",
        "value": "Square cut, deburred, plain ends (fitted with protective end caps upon request)"
      },
      {
        "label": "Standard Certification",
        "value": "EN 10219, ASTM A500 Grade B, EN 39 Type 4, BS 1139 certified with full MTC 3.1"
      }
    ],
    "wallThicknessSpecs": [
      {
        "standard": "EN 10219",
        "yieldStress": "460 N/mm\u00b2 (67 ksi) minimum yield stress",
        "nominalWallThickness": "2.9 mm (0.114 in) nominal wall thickness",
        "description": "High-tensile cold-formed welded structural tube with 460 MPa minimum yield stress and 2.9 mm nominal wall."
      },
      {
        "standard": "EN 10219",
        "yieldStress": "320 N/mm\u00b2 (46 ksi) minimum yield stress",
        "nominalWallThickness": "3.2 mm (0.125 in) nominal wall thickness",
        "description": "Standard modular high-yield scaffolding tube with 320 MPa minimum yield stress and 3.2 mm nominal wall."
      },
      {
        "standard": "ASTM A500, Grade B",
        "yieldStress": "290 N/mm\u00b2 (42 ksi) minimum yield stress",
        "nominalWallThickness": "3.4 mm (0.13 in) or 3.76 mm (0.15 in) nominal wall thickness",
        "description": "North American structural specification for cold-formed welded carbon steel hollow sections."
      },
      {
        "standard": "EN 39 thickness type 4",
        "yieldStress": "235 N/mm\u00b2 (34 ksi) minimum yield stress",
        "nominalWallThickness": "4.0 mm (0.16 in) nominal wall thickness",
        "description": "Heavy duty scaffolding tube specification (Note: BS 1139 tubing is equivalent and is acceptable)."
      }
    ],
    "wallThicknessNote": "Note: BS 1139 tubing is equivalent and is acceptable.",
    "features": [
      "Manufactured from certified high-yield carbon steel with strict concentricity control",
      "Four international wall thickness grades tailored to global building codes",
      "Custom cut lengths optimized for container loading (20GP / 40HQ) or break-bulk (BB)",
      "Hot-dip galvanized inside and outside for maximum marine atmospheric corrosion defense",
      "Full chemical composition, tensile yield, and flattening test verification provided via MTC 3.1"
    ],
    "applications": [
      "Tube & fitting scaffolding and shoring arrangements",
      "Structural ties, facade bracing, plan bracing, and perimeter guardrails",
      "Industrial refinery, power station, and offshore platform maintenance",
      "Civil falsework, bridge propping, and heavy load staging"
    ],
    "standards": [
      {
        "name": "EN 10219",
        "description": "Cold formed welded structural hollow sections of non-alloy steels"
      },
      {
        "name": "ASTM A500 Grade B",
        "description": "Cold-Formed Welded and Seamless Carbon Steel Structural Tubing"
      },
      {
        "name": "EN 39 Type 4",
        "description": "Loose steel tubes for tube and coupler scaffolds"
      },
      {
        "name": "BS 1139",
        "description": "Metal scaffolding \u2014 loose steel tube specification (equivalent & acceptable)"
      }
    ],
    "relatedProducts": [
      "swivel-coupler",
      "right-angle-coupler",
      "tube-fittings-scaffolding",
      "base-jack"
    ],
    "categoryName": "Scaffolding & Accessories",
    "subcategory": "Couplers"
  },
  {
    "slug": "scaffolding-accessories",
    "category": "scaffolding-accessories",
    "name": "Scaffolding Components & Accessories",
    "shortDescription": "Complete 17-part component catalog: Standards, Ledgers, Transoms, Base Jacks, Couplers, Bracing, Boards, Guardrails, and Safety Gates.",
    "description": "Scaffolding components and accessories are used to assemble, support, access, protect, and stabilize scaffolding systems for safe construction and maintenance works. Every single component in a scaffold assembly has an indispensable engineering purpose\u2014removing or incorrectly installing a single component affects the structural load transfer, worker safety, and stability of the entire scaffold structure.\n\nTianjin Decent International Trade Co., Ltd. supplies the complete inventory of 17 essential components and accessories manufactured from suitable high-strength steel or aluminum, with hot-dip galvanized or approved protective finishes as applicable.",
    "heroImage": "/src/assets/images/scaffolding-accessories-collection.jpg",
    "gallery": [
      "/src/assets/images/scaffolding-accessories-collection.jpg",
      "/src/assets/images/scaffold-base-jack.jpg",
      "/src/assets/images/fitting-double-coupler.jpg",
      "/src/assets/images/fitting-swivel-coupler.jpg",
      "/src/assets/images/fitting-sleeve-coupler.jpg",
      "/src/assets/images/fitting-beam-clamp.jpg",
      "/src/assets/images/cuplock-scaffolding-setup.jpg"
    ],
    "specifications": [
      {
        "label": "1. Standards / Uprights",
        "value": "Vertical load-bearing members (48.3 mm OD) that transfer combined self-weight and live load to the foundation."
      },
      {
        "label": "2. Ledgers",
        "value": "Horizontal members connecting standards longitudinally and supporting intermediate structure."
      },
      {
        "label": "3. Transoms / Bearers",
        "value": "Transverse members spanning between ledgers, directly supporting scaffold boards and platform loads."
      },
      {
        "label": "4. Base Plates & Spigots",
        "value": "Rigid 150\u00d7150\u00d76mm steel base footings to distribute vertical loads over sole timber boards."
      },
      {
        "label": "5. Adjustable Base Jacks",
        "value": "Heavy-duty cold-rolled Acme threaded screw jacks (SWL 40 kN) with ductile collar nut for leveling."
      },
      {
        "label": "6. Couplers / Clamps",
        "value": "High-tensile drop-forged mechanical fittings certified to EN 74-1 Class B (Right Angle, Swivel, Sleeve, Putlog, Beam)."
      },
      {
        "label": "7. Bracing",
        "value": "Diagonal sway members providing lateral triangulation, shear stability, and preventing scaffold racking."
      },
      {
        "label": "8. Scaffold Boards / Planks",
        "value": "Perforated galvanized steel or laminated timber boards providing safe slip-resistant working platforms."
      },
      {
        "label": "9. Guardrails & Midrails",
        "value": "Perimeter horizontal barriers providing fall edge protection conforming to EN 12811-1."
      },
      {
        "label": "10. Toe Boards",
        "value": "Perimeter kick-plates preventing dropped tools, fasteners, and loose materials from falling off working decks."
      },
      {
        "label": "11. Ladders / Stairways",
        "value": "Engineered non-slip aluminum extension and rung ladders providing safe vertical tier access."
      },
      {
        "label": "12. Access Safety Gates",
        "value": "Self-closing spring-hinged security barriers controlling safe entry and exit from ladder bays."
      },
      {
        "label": "13. Heavy-Duty Gin Wheels",
        "value": "254 mm (10\") gin wheel certified to BS 1692:1998, SWL 250 kg (tested to 1,000 kg) with forged swivel eyebolt."
      },
      {
        "label": "14. Multi-Tier Scafftag System",
        "value": "Contractor safety inspection tag system (Green Passed / Yellow Safety Harness Required / Red Danger Do Not Use) with UV-stabilized holders conforming to Saudi Aramco & SABIC contractor site specs."
      },
      {
        "label": "15. Podger Ratchet Spanners",
        "value": "Swing-over ratchet podger spanners (19/21 mm & 21/23 mm bi-hex sockets) with forged tapered aligning handle and tool lanyard hole."
      },
      {
        "label": "16. Magnetic Torpedo Levels",
        "value": "250 mm die-cast aluminum spirit level with high-power rare earth magnets and 45\u00b0/90\u00b0/180\u00b0 shock-proof vials."
      },
      {
        "label": "17. Lifting Bags & Safety Caps",
        "value": "Woven polypropylene certified lifting bags (40\u201350 kg SWL), hi-vis yellow scaffold tube end protection caps, and M12 coupler nut covers."
      },
      {
        "label": "Material & Finish",
        "value": "High-strength structural steel Q235/Q355 or aluminum alloy, with Hot-Dip Galvanizing to EN ISO 1461 or electroplating."
      }
    ],
    "features": [
      "Complete 17-point component catalog supplied from a single verified manufacturer",
      "Hot-dip galvanized finish across all structural steel items for maximum rust prevention",
      "Drop-forged coupler hardware tested to EN 74-1 Class B slip resistance standards",
      "Precision machined Acme threads on adjustable base jacks for smooth height leveling",
      "Non-slip perforated steel decking planks with integrated end hooks and safety lock pins",
      "Full compliance documentation and load tables available for civil engineering submittals"
    ],
    "applications": [
      "Assembly of complete Cuplock, Ring-Lock, and Tube & Fitting scaffolding configurations",
      "Upgrading safety protocols with guardrails, toe boards, and self-closing access gates",
      "Fa\u00e7ade anchorage and structural propping for high-rise commercial structures",
      "Industrial turnaround and shutdown access framing in power and processing plants"
    ],
    "standards": [
      {
        "name": "EN 12811-1",
        "description": "Temporary works equipment \u2014 Scaffolds"
      },
      {
        "name": "EN 74-1",
        "description": "Couplers, spigot pins and baseplates for scaffolding (Class B)"
      },
      {
        "name": "BS 1139-2.2",
        "description": "Access and working scaffolds \u2014 Aluminium couplers and fittings"
      }
    ],
    "relatedProducts": [
      "cuplock-scaffolding-system",
      "ringlock-system",
      "tube-fittings-scaffolding",
      "swivel-coupler"
    ],
    "categoryName": "Scaffolding & Accessories",
    "subcategory": "Couplers"
  },
  {
    "slug": "steel-wire-rod",
    "category": "steel-wire-rod",
    "categoryName": "Steel wire/rod",
    "subcategory": "Wire rod",
    "name": "Wire rod",
    "tagline": "Hot Rolled / Cold drawn / Galvanized Steel Wire Rod / Wire",
    "shortDescription": "Hot Rolled / Cold drawn / Galvanized Steel Wire Rod & Wire (SAE1006 / SAE1008, 5.5\u201314 mm).",
    "description": "Carbon steel wire rod in the low carbon steel wire commonly known as soft wire, medium and high carbon steel wire commonly known as hard wire. Wire rod is mainly used as drawing blank, but also directly used as building materials and machine parts.\n\nOur company sells hot-rolled carbon steel wire rod, ASTM A510/A510M standard, material SAE1006, SAE1008, diameter 5.5mm, 6mm, 6.5mm, 8mm, 10mm, 12mm, 14mm. Manufactured under strict quality controls with uniform dimensions, consistent coil weight, and full Mill Test Certificates.",
    "heroImage": "/src/assets/images/steel-wire-rod.jpg",
    "gallery": [
      "/src/assets/images/steel-wire-rod.jpg"
    ],
    "specifications": [
      {
        "label": "Product Type",
        "value": "Soft wire, hard wire, spring wire, electrode wire, cold heading wire, electrolytic wire, welding wire etc"
      },
      {
        "label": "Material Grades",
        "value": "SAE1006, SAE1008, Q235, Q195, SWRH32-37, SWRH42A-77A, SWRH42B-82B"
      },
      {
        "label": "Available Diameters",
        "value": "5.5 mm, 6.0 mm, 6.5 mm, 8.0 mm, 10.0 mm, 12.0 mm, 14.0 mm"
      },
      {
        "label": "Standards Compliance",
        "value": "ASTM A510 / A510M, GB/T 701, JIS G3505, ISO 16120"
      },
      {
        "label": "Process Technique",
        "value": "Hot Rolled, Cold Drawn, Galvanized / Black Annealed"
      },
      {
        "label": "Dimensional Tolerance",
        "value": "\u00b11% diameter tolerance guarantees consistent quality across orders"
      },
      {
        "label": "Coil Weight & Packaging",
        "value": "1.8 to 2.5 Metric Tons per coil, seaworthy export strapped and labeled"
      },
      {
        "label": "Quality Verification",
        "value": "Mill Test Certificate (EN 10204 3.1) stating ladle chemical heats & tensile properties"
      }
    ],
    "features": [
      "High Carbon & Low Carbon Steel: Ensures durability and precision for construction and drawing projects",
      "Uniform Dimensions: \u00b11% tolerance guarantees consistent quality and smooth wire-drawing performance",
      "Wide Range of Sizes: Available in 5.5 mm to 14.0 mm diameters for diverse industrial applications",
      "Cold Drawn Technique: Produces uniform wire for precise fabrication and weaving",
      "Versatile Applications: wire-drawing, weaving of wire mesh, soft pipe, bean of cabinet, steel wire, etc"
    ],
    "applications": [
      "Wire-drawing, weaving of wire mesh, soft pipe, bean of cabinet, steel wire, etc",
      "High-speed drawing into binding wire, galvanized wire, and black annealed wire",
      "Industrial fabrication of wire mesh, welded wire mesh, chain link, and gabion baskets",
      "Civil construction tie wire, concrete reinforcement ties, and PC wire",
      "Manufacturing of nails, screws, springs, welding rods, electrodes, and automotive hardware"
    ],
    "standards": [
      {
        "name": "ASTM A510 / A510M",
        "description": "Standard Specification for General Requirements for Wire Rods and Coarse Round Wire, Carbon Steel"
      },
      {
        "name": "GB/T 701",
        "description": "Hot-rolled low carbon steel wire rods for technical use"
      },
      {
        "name": "JIS G3505",
        "description": "Low carbon steel wire rods for wire drawing"
      }
    ],
    "relatedProducts": [
      "high-speed-wire-rod",
      "ordinary-wire-rod",
      "h-i-u-beams-channel"
    ]
  },
  {
    "slug": "high-speed-wire-rod",
    "category": "steel-wire-rod",
    "categoryName": "Steel wire/rod",
    "subcategory": "High speed wire rod",
    "name": "High speed wire rod",
    "tagline": "Continuous High-Speed Mill Rolled Carbon Steel Wire Rod",
    "shortDescription": "High-speed rolling mill carbon steel wire rod with tight dimensional tolerances (\u00b10.1 mm) and uniform metallurgical microstructure (SAE 1006 / 1008).",
    "description": "High speed wire rod manufactured on continuous high-speed block finishing mills with controlled Stelmor cooling. Sourced in low, medium, and high carbon grades engineered for subsequent high-speed drawing, cold heading, and precision spring fabrication.\n\nUniform mechanical properties along the entire coil length, minimal scale formation, and strict diameter tolerance guarantees optimal productivity on automated drawing blocks.",
    "heroImage": "/src/assets/images/steel-wire-rod.jpg",
    "gallery": [
      "/src/assets/images/steel-wire-rod.jpg"
    ],
    "specifications": [
      {
        "label": "Product Type",
        "value": "High speed wire rod (WR)"
      },
      {
        "label": "Steel Grades",
        "value": "SAE 1006, SAE 1008, SAE 1018, Q195, Q235, SWRH62A-82B"
      },
      {
        "label": "Diameters",
        "value": "5.5 mm, 6.0 mm, 6.5 mm, 7.0 mm, 8.0 mm, 9.0 mm, 10.0 mm, 12.0 mm"
      },
      {
        "label": "Rolling Process",
        "value": "Continuous high-speed finishing mill with Stelmor controlled cooling"
      },
      {
        "label": "Diameter Tolerance",
        "value": "\u00b10.15 mm to \u00b10.20 mm (high-precision tolerance)"
      },
      {
        "label": "Coil Weight",
        "value": "1.8 to 2.5 Metric Tons per coil (continuous single strand)"
      },
      {
        "label": "Surface",
        "value": "Smooth pickled & phosphate / unpickled with uniform light oxide"
      },
      {
        "label": "Certification",
        "value": "Mill Test Certificate (EN 10204 3.1)"
      }
    ],
    "features": [
      "Exceptionally uniform tensile strength and elongation throughout coil",
      "Fast drawing speeds without strand breakage or frequent die wear",
      "High surface cleanliness and minimal decarburization depth",
      "Controlled cooling produces optimal pearlite/ferrite microstructures"
    ],
    "applications": [
      "Fine wire drawing (binding wire, galvanized wire, staples)",
      "Fastener manufacturing (screws, rivets, cold-headed bolts)",
      "Steel cord, tire bead wire, and prestressed concrete (PC) wire",
      "High-tensile springs and industrial wire mesh weaving"
    ],
    "standards": [
      {
        "name": "ASTM A510 / A510M",
        "description": "Wire Rods and Coarse Round Wire, Carbon Steel"
      },
      {
        "name": "ISO 16120",
        "description": "Non-alloy steel wire rod for conversion to wire"
      },
      {
        "name": "JIS G3505",
        "description": "Low carbon steel wire rods"
      }
    ],
    "relatedProducts": [
      "steel-wire-rod",
      "ordinary-wire-rod",
      "h-i-u-beams-channel"
    ]
  },
  {
    "slug": "ordinary-wire-rod",
    "category": "steel-wire-rod",
    "categoryName": "Steel wire/rod",
    "subcategory": "ordinary wire rod",
    "name": "ordinary wire rod",
    "tagline": "Hot-Rolled General Purpose Carbon Steel Wire Rod",
    "shortDescription": "Hot-rolled general purpose carbon steel wire rod for construction ties, nail production, and welded wire mesh (Q195 / Q235 / SAE 1008).",
    "description": "Ordinary wire rod produced by standard hot rolling processes for general construction, fabrication, and basic wire conversion applications. Tianjin Decent supplies ordinary wire rods with consistent carbon content and reliable weldability.\n\nCommonly utilized for construction tie wires, masonry reinforcement, nail and screw manufacturing, and wire mesh fabrication across international export markets.",
    "heroImage": "/src/assets/images/steel-wire-rod.jpg",
    "gallery": [
      "/src/assets/images/steel-wire-rod.jpg"
    ],
    "specifications": [
      {
        "label": "Product Type",
        "value": "Ordinary hot-rolled wire rod"
      },
      {
        "label": "Steel Grades",
        "value": "Q195, Q235, SAE 1006, SAE 1008"
      },
      {
        "label": "Diameters Available",
        "value": "5.5 mm, 6.5 mm, 8.0 mm, 10.0 mm, 12.0 mm, 14.0 mm"
      },
      {
        "label": "Process",
        "value": "Hot Rolled"
      },
      {
        "label": "Coil Weight",
        "value": "Approx. 1.8\u20132.2 MT per coil strapped"
      },
      {
        "label": "Standards Compliance",
        "value": "GB/T 701, ASTM A510, JIS G3505"
      },
      {
        "label": "Quality Verification",
        "value": "Mill Test Certificate (EN 10204 3.1)"
      }
    ],
    "features": [
      "Cost-effective raw material for general fabrication and building works",
      "Excellent weldability and cold bend performance",
      "Seaworthy export bundled coils with moisture-resistant tagging",
      "Strict chemical composition control"
    ],
    "applications": [
      "Concrete reinforcement ties and construction tie wire",
      "Nail, staple, and basic wire fastener production",
      "Welded wire mesh for building foundations and fencing",
      "General agricultural fencing and craft wire"
    ],
    "standards": [
      {
        "name": "GB/T 701",
        "description": "Hot-rolled low carbon steel wire rods for technical use"
      },
      {
        "name": "ASTM A510",
        "description": "Standard Specification for Carbon Steel Wire Rods"
      },
      {
        "name": "JIS G3505",
        "description": "Low carbon steel wire rods for wire drawing"
      }
    ],
    "relatedProducts": [
      "steel-wire-rod",
      "high-speed-wire-rod",
      "h-i-u-beams-channel"
    ]
  }
];

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

/**
 * Find a product by its slug (supports backwards compatibility aliases)
 * @param {string} slug 
 * @returns {object|undefined}
 */
export function getProductBySlug(slug) {
  if (!slug) return undefined;
  if (slug === 'structural-steel-profiles') {
    return PRODUCTS.find(p => p.slug === 'h-i-u-beams-channel') || PRODUCTS[0];
  }
  return PRODUCTS.find(p => p.slug === slug);
}

/**
 * Get products filtered by category and optional subcategory
 * @param {string} category 
 * @param {string} [subcategory]
 * @returns {Array}
 */
export function getProductsByCategory(category, subcategory) {
  const normCat = normalizeCategory(category);
  let list = normCat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === normCat);
  if (subcategory && subcategory !== 'all') {
    list = list.filter(p => p.subcategory === subcategory);
  }
  return list;
}

/**
 * Get all category definitions with counts
 * @returns {Array}
 */
export function getAllCategories() {
  return PRODUCT_HIERARCHY.map(h => ({
    id: h.id,
    label: h.name,
    subcategories: h.subcategories,
    ...CATEGORY_META[h.id],
    count: PRODUCTS.filter(p => p.category === h.id).length
  }));
}

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
