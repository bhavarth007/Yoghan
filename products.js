/**
 * ============================================================================
 * YOGHAN — PRODUCT CATALOGUE & IMAGE DATABASE
 * ============================================================================
 * 
 * HOW TO EDIT OR ADD PRODUCTS & IMAGES:
 * 1. To change an image: Replace the 'image' URL with your image link or local path.
 * 2. To change product details: Edit 'title', 'tagline', 'denier', 'specs', etc.
 * 3. To add a new product: Copy any object below, assign a unique 'id', and
 *    specify the appropriate 'category' ('nylon-reg', 'nylon-feat', 'chips', 'fertilizer').
 * ============================================================================
 */

const YOGHAN_PRODUCTS = [

  /* ==========================================================================
     DEPARTMENT 1: NYLON YARN – REGULAR (5 PRODUCTS)
     ========================================================================== */
  {
    id: "fdy-semi-dull",
    category: "nylon-reg",
    department: "Nylon Yarn – Regular",
    series: "fdy",
    badge: "FDY",
    badgeType: "series",
    status: "Ready Dispatch",
    statusType: "in-stock",
    title: "Nylon 6 FDY Semi-Dull Filament",
    tagline: "Ultra-consistent continuous draw filament for high-speed weaving",
    denier: "20D / 1f to 210D / 68f",
    lustre: "Semi-Dull (TiO₂ 0.3%)",
    tenacity: "≥ 5.0 – 5.4 gpd",
    elongation: "28.0% ± 2.5%",
    shrinkage: "7.0% ± 0.8%",
    // 4K Industrial Product Image:
    image: "https://images.unsplash.com/photo-1542044801-30d3e45ae49a?auto=format&fit=crop&w=1200&q=85",
    summary: "Continuous filament yarn processed on multi-stage draw godets with computerized tension control. Engineered for zero breaks on 1,000 RPM water jet and air jet looms.",
    applications: ["Surat Chiffon & Georgette", "Warp Shirting & Suiting", "Lightweight Lining Fabrics", "Organza & Sheer Curtains"],
    packaging: "5.0 kg / 6.0 kg bobbins on 290mm paper tubes. 48 bobbins per export pallet with shrink-wrap moisture barrier.",
    keySpecs: {
      "Denier Range": "20D, 30D, 40D, 50D, 70D, 210D",
      "Filament Range": "1f (mono) to 68f (micro)",
      "Tenacity": "5.0 – 5.4 gpd",
      "Elongation at Break": "28.0% ± 2.5%",
      "Evenness CV%": "< 1.05% (Uster Tester 5)",
      "Oil Pick-Up (OPU)": "0.90% – 1.15% (Water-Jet Grade)"
    }
  },
  {
    id: "dty-micro",
    category: "nylon-reg",
    department: "Nylon Yarn – Regular",
    series: "dty",
    badge: "DTY",
    badgeType: "series",
    status: "High Demand",
    statusType: "in-stock",
    title: "Nylon 6 DTY Textured Micro-Yarn",
    tagline: "Soft-touch crimped yarn engineered for seamless knits & activewear",
    denier: "30D / 24f to 100D / 68f",
    lustre: "Semi-Dull / Full Dull",
    tenacity: "≥ 4.4 – 4.7 gpd",
    elongation: "32.0% ± 3.0%",
    shrinkage: "3.2% ± 0.4%",
    image: "https://images.unsplash.com/photo-1517146783983-418c681b56c5?auto=format&fit=crop&w=1200&q=85",
    summary: "Manufactured using state-of-the-art polyurethane friction disc texturizing units for high crimp bulk, thermal comfort, moisture wicking, and soft skin touch.",
    applications: ["Seamless Yoga & Athleisure", "Hosiery & Socks Plating", "Circular Knit Jerseys", "Compression & Medical Garments"],
    packaging: "5.5 kg bi-conical paper cones, individual polythene sleeve wrapped, packed in 6-ply corrugated export cartons.",
    keySpecs: {
      "Denier Range": "30D, 40D, 70D, 70D/2, 100D",
      "Filament Density": "Micro-filament (up to 68f)",
      "Crimp Contraction (CC)": "44.0% – 48.0%",
      "Crimp Stability (CS)": "85.0% – 88.0%",
      "Interlace Available": "Non-Interlaced (NIM) / Soft (SIM) / High (HIM)",
      "Tenacity": "4.4 – 4.7 gpd"
    }
  },
  {
    id: "poy-cheese",
    category: "nylon-reg",
    department: "Nylon Yarn – Regular",
    series: "poy",
    badge: "POY",
    badgeType: "series",
    status: "Spun on Order",
    statusType: "custom",
    title: "Nylon 6 POY Partially Oriented Yarn",
    tagline: "High-speed spinning feedstock with uniform residual elongation",
    denier: "50D / 12f to 280D / 68f",
    lustre: "Semi-Dull / Bright",
    tenacity: "≥ 3.8 – 4.2 gpd",
    elongation: "68.0% – 76.0%",
    shrinkage: "Residual stress stabilized",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85",
    summary: "Precision-wound cheeses spun at 4,800 m/min with specialized finish formulations ensuring zero filament snags and predictable draw texturizing ratios.",
    applications: ["Texturizing Feedstock (DTY)", "Draw-Twisting (Draw-Winders)", "Air-Texturing Plants (ATY)", "Industrial Twisting"],
    packaging: "10.5 kg – 12.0 kg precision wound cylindrical cheeses, outer diameter 420mm, palletized.",
    keySpecs: {
      "Feed Denier": "50D, 85D, 115D, 170D, 280D",
      "Elongation Range": "68% – 76%",
      "Uster Unevenness U%": "< 0.70%",
      "Package Traverse": "150mm cylindrical tube",
      "Finish Formulation": "Low-viscosity antistatic spin finish"
    }
  },
  {
    id: "hoy-weaving",
    category: "nylon-reg",
    department: "Nylon Yarn – Regular",
    series: "hoy",
    badge: "HOY",
    badgeType: "series",
    status: "Direct Weaving",
    statusType: "in-stock",
    title: "Nylon 6 HOY Highly Oriented Yarn",
    tagline: "Eliminates sizing for rapid weft insertion on rapier looms",
    denier: "30D / 12f to 70D / 36f",
    lustre: "Semi-Dull",
    tenacity: "≥ 4.6 – 5.0 gpd",
    elongation: "34.0% ± 2.5%",
    shrinkage: "6.5% – 8.5%",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=85",
    summary: "Spun at ultra-high velocities without a secondary drawing step, imparting high dimensional stability and optimal shrinkage for direct weft insertion.",
    applications: ["Direct Weft Insertion", "Rapier & Water-Jet Looms", "Ethnic Dupattas & Sarees", "Jacquard Border Weaving"],
    packaging: "6.0 kg bobbin packages on 290mm tubes, 60 bobbins per pallet.",
    keySpecs: {
      "Spinning Velocity": "5,000 meters/min",
      "Denier Counts": "30D, 40D, 70D",
      "Tenacity": "4.6 – 5.0 gpd",
      "Boiling Shrinkage": "6.5% – 8.5%",
      "Sizing Requirement": "Zero sizing required"
    }
  },
  {
    id: "fdy-bright",
    category: "nylon-reg",
    department: "Nylon Yarn – Regular",
    series: "fdy",
    badge: "FDY BRIGHT",
    badgeType: "series",
    status: "Premium Sheen",
    statusType: "in-stock",
    title: "Nylon 6 FDY Bright High-Sheen",
    tagline: "Pure unpigmented diamond lustre for luxury ethnic & bridal textiles",
    denier: "30D / 24f to 100D / 36f",
    lustre: "Super Bright (Zero TiO₂)",
    tenacity: "≥ 5.2 – 5.6 gpd",
    elongation: "29.0% ± 2.0%",
    shrinkage: "7.2% ± 0.6%",
    image: "https://images.unsplash.com/photo-1573680156791-0b85133632b4?auto=format&fit=crop&w=1200&q=85",
    summary: "Optically clear, zero-delustrant nylon 6 with mirror-like light reflectivity. Delivers radiant silky drape, intense dye brilliance, and luxurious handfeel.",
    applications: ["Bridal Sarees & Lehengas", "High-Sheen Ribbon & Tapes", "Embroidery Yarns", "Lingerie & Satin Weaves"],
    packaging: "5.0 kg bobbins, double polythene bagged, 48 units per wooden crate.",
    keySpecs: {
      "Lustre Type": "Optically Clear Super Bright",
      "Tenacity": "5.2 – 5.6 gpd",
      "Denier Counts": "30D, 40D, 70D, 100D",
      "Evenness CV%": "< 0.98%",
      "Dye Affinity": "Deep, brilliant shade saturation"
    }
  },

  /* ==========================================================================
     DEPARTMENT 2: NYLON YARN – SPECIALTY / FEATURED (5 PRODUCTS)
     ========================================================================== */
  {
    id: "dope-dyed-black",
    category: "nylon-feat",
    department: "Nylon Yarn – Specialty",
    series: "fdy",
    badge: "DOPE-DYED",
    badgeType: "specialty",
    status: "Zero Effluent",
    statusType: "in-stock",
    title: "Dope-Dyed Jet Black Filament (Spun-Dyed)",
    tagline: "Carbon black pigment infused into molten polymer — 100% colour fast",
    denier: "30D / 24f to 140D / 68f",
    lustre: "Jet Black Semi-Dull / Bright",
    tenacity: "≥ 4.9 – 5.2 gpd",
    elongation: "29.0% ± 2.0%",
    shrinkage: "7.0% ± 0.6%",
    image: "https://images.unsplash.com/photo-1560880857-2b1c0603f964?auto=format&fit=crop&w=1200&q=85",
    summary: "Spun-dyed using micro-ground carbon black masterbatch injected directly at the extrusion screw. Eliminates wet dyeing completely with unmatched wash, bleach, and sunlight fastness.",
    applications: ["Automotive Headliners & Trims", "Permanent Black Ribbons", "Swimwear & Activewear", "High-End Contrast Stripes"],
    packaging: "5.0 kg cones on paper tubes, palletized with UV protective film.",
    keySpecs: {
      "Wash Fastness": "Grade 5 (ISO 105-C06)",
      "Light Fastness": "Grade 7-8 (ISO 105-B02 Xenon)",
      "Perspiration Fastness": "Grade 5 (Acidic & Alkaline)",
      "Environmental Benefit": "100% Water Saving (Zero Dyehouse Discharge)"
    }
  },
  {
    id: "trilobal-lustre",
    category: "nylon-feat",
    department: "Nylon Yarn – Specialty",
    series: "fdy",
    badge: "TRILOBAL",
    badgeType: "specialty",
    status: "Diamond Sheen",
    statusType: "in-stock",
    title: "Bright Trilobal Cross-Section Nylon",
    tagline: "Three-sided prism filament designed for sparkling optical refraction",
    denier: "40D / 12f to 70D / 24f",
    lustre: "Trilobal Diamond Sparkle",
    tenacity: "≥ 4.8 – 5.2 gpd",
    elongation: "30.0% ± 2.5%",
    shrinkage: "7.5% ± 0.8%",
    image: "https://images.unsplash.com/photo-1660733101195-f688256c8854?auto=format&fit=crop&w=1200&q=85",
    summary: "Extruded through precision micro-milled Y-shaped spinneret orifices. Each filament acts as a miniature triangular prism, dispersing light into shimmering highlights.",
    applications: ["Zari & Metallic Accent Blends", "Boutique Fashion Fabric", "Curtain & Upholstery Jacquards", "Partywear Dupion"],
    packaging: "5.0 kg packages on 290mm tubes, wrapped in anti-static film.",
    keySpecs: {
      "Filament Cross-Section": "Equilateral Y-Trilobal",
      "Refractive Index": "1.58",
      "Tenacity": "4.8 – 5.2 gpd",
      "Lustre Index": "Maximized prismatic sparkle"
    }
  },
  {
    id: "high-tenacity",
    category: "nylon-feat",
    department: "Nylon Yarn – Specialty",
    series: "fdy",
    badge: "HIGH-TENACITY",
    badgeType: "specialty",
    status: "≥ 7.8 gpd",
    statusType: "in-stock",
    title: "Industrial High-Tenacity Cordage Nylon",
    tagline: "Ultra-strong reinforcement filament for marine ropes & military gear",
    denier: "210D / 36f to 840D / 144f",
    lustre: "Bright Industrial",
    tenacity: "≥ 7.8 – 8.4 gpd",
    elongation: "18.0% – 22.0%",
    shrinkage: "5.5% – 6.8%",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85",
    summary: "Spun from high-viscosity polyamide 6 and drawn over ultra-heated high-draw rolls to align molecular crystalline chains. Delivers massive tensile strength and tear resilience.",
    applications: ["Military Parachutes & Cords", "Deep Sea Fishnets & Ropes", "Conveyor Belt Reinforcement", "Industrial Geotextiles"],
    packaging: "6.0 kg and 10.0 kg heavy-duty cheeses on perforated steel/plastic tubes.",
    keySpecs: {
      "Breaking Tenacity": "7.8 – 8.4 grams / denier",
      "Elongation at Break": "18.0% – 22.0%",
      "Abrasion Cycle Resistance": "> 15,000 cycles (ASTM D3884)",
      "Hot Air Shrinkage (177°C)": "5.5% – 6.8%"
    }
  },
  {
    id: "anti-microbial",
    category: "nylon-feat",
    department: "Nylon Yarn – Specialty",
    series: "dty",
    badge: "BIO-ACTIVE",
    badgeType: "specialty",
    status: "Silver Infused",
    statusType: "custom",
    title: "Anti-Microbial & UV-Shield Nylon 6",
    tagline: "Sub-micron zinc and silver ion matrix for permanent odour-free fabrics",
    denier: "40D / 34f to 70D / 68f",
    lustre: "Semi-Dull / Matte",
    tenacity: "≥ 4.3 – 4.6 gpd",
    elongation: "31.0% ± 2.5%",
    shrinkage: "3.5% ± 0.5%",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=85",
    summary: "Engineered with mineral bio-active additives embedded within the polymer matrix. Will not wash out over 50 industrial laundry cycles. Provides UPF 50+ UV solar protection.",
    applications: ["Hospital Scrubs & Linens", "Athletic Socks & Footwear", "Thermal Baselayers", "Undergarments & Sanitized Liners"],
    packaging: "5.5 kg cones, double-shielded sanitary polythene packaging.",
    keySpecs: {
      "Bacterial Reduction": "> 99.8% (AATCC 100 / JIS L 1902)",
      "Wash Durability": "50+ Home Laundering Cycles",
      "UV Solar Protection": "UPF 50+ Certified",
      "Dermatological Safety": "OEKO-TEX Class 1 (Baby Safe)"
    }
  },
  {
    id: "eco-recycled",
    category: "nylon-feat",
    department: "Nylon Yarn – Specialty",
    series: "fdy",
    badge: "ECO-NYLON",
    badgeType: "specialty",
    status: "GRS Certified",
    statusType: "in-stock",
    title: "Eco-Polyamide 100% Recycled Nylon 6",
    tagline: "Depolymerized post-industrial textile waste rebuilt into virgin-grade yarn",
    denier: "40D / 24f to 70D / 36f",
    lustre: "Semi-Dull",
    tenacity: "≥ 4.7 – 5.1 gpd",
    elongation: "29.0% ± 2.0%",
    shrinkage: "7.2% ± 0.7%",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    summary: "Produced via chemical depolymerization of pre-consumer yarn waste into caprolactam monomer, purified, and re-polymerized. Delivers virgin-matching physical properties with 65% lower carbon footprint.",
    applications: ["Sustainable Fashion Brands", "Recycled Performance Apparel", "Eco Outerwear & Windbreakers", "Corporate Green Uniforms"],
    packaging: "5.0 kg cones with Global Recycled Standard (GRS) transaction certificates.",
    keySpecs: {
      "Certification": "Global Recycled Standard (GRS 4.0)",
      "CO₂ Footprint Reduction": "65% compared to fossil nylon",
      "Physical Parity": "Identical tensile and elongation to virgin FDY",
      "Traceability": "Batch transaction certification provided"
    }
  },

  /* ==========================================================================
     DEPARTMENT 3: POLYAMIDE 6 CHIPS (5 PRODUCTS)
     ========================================================================== */
  {
    id: "pa6-textile-rv245",
    category: "chips",
    department: "Polyamide 6 Chips",
    series: "all",
    badge: "PA6 RV 2.45",
    badgeType: "polymer",
    status: "Textile Grade",
    statusType: "in-stock",
    title: "Polyamide 6 Chips — Textile Grade (RV 2.45)",
    tagline: "Low relative viscosity virgin polymer for high-speed filament spinning",
    denier: "Relative Viscosity 2.45 ± 0.03",
    lustre: "Natural Translucent / TiO₂ 0.3%",
    tenacity: "Spinning Grade",
    elongation: "N/A (Polymer Pellets)",
    shrinkage: "N/A",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=85",
    summary: "Continuous hydrolytic caprolactam polymerization chips with ultra-narrow molecular weight distribution. Low extractable monomer content ensures smooth spinning at up to 5,000 m/min.",
    applications: ["POY, FDY & HOY Yarn Spinning", "Mono-Filament Weaving", "Raschel Warp Knitting Yarns", "Non-Woven Spunbond Webs"],
    packaging: "25 kg multi-layer moisture-barrier paper-poly bags / 1,000 kg PP Jumbo Bags with PE liner.",
    keySpecs: {
      "Relative Viscosity (96% H₂SO₄)": "2.45 ± 0.03 (ISO 307)",
      "Extractable Monomer Content": "≤ 0.55% w/w",
      "Moisture Content": "≤ 0.06% (Packed condition)",
      "Melting Point": "220°C – 222°C (DSC)",
      "Amino End Groups (-NH₂)": "42 ± 4 mmol/kg"
    }
  },
  {
    id: "pa6-compound-rv270",
    category: "chips",
    department: "Polyamide 6 Chips",
    series: "all",
    badge: "PA6 RV 2.70",
    badgeType: "polymer",
    status: "Compounding",
    statusType: "in-stock",
    title: "Polyamide 6 Chips — Moulding Grade (RV 2.70)",
    tagline: "Medium viscosity base resin for glass-fibre compounding & injection",
    denier: "Relative Viscosity 2.70 ± 0.03",
    lustre: "Natural Cylindrical Pellets",
    tenacity: "High Mechanical Rigidity",
    elongation: "N/A",
    shrinkage: "N/A",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
    summary: "Engineered for plastic compounders formulating 15%–50% glass-filled and mineral-reinforced engineering compounds. Exceptional surface gloss, thermal resistance, and melt flow.",
    applications: ["Automotive Air Intake Manifolds", "Power Tool Housings", "Electrical Switchgear & MCBs", "Industrial Fan Blades"],
    packaging: "25 kg bags / 1,000 kg Jumbo Bags / Bulk Silo delivery.",
    keySpecs: {
      "Relative Viscosity": "2.70 ± 0.03",
      "Monomer Extractables": "≤ 0.60%",
      "Granule Size": "2.5mm × 3.0mm cylindrical",
      "Tensile Modulus": "3,000 MPa (Unfilled)",
      "Heat Deflection (0.45 MPa)": "170°C"
    }
  },
  {
    id: "pa6-extrusion-rv330",
    category: "chips",
    department: "Polyamide 6 Chips",
    series: "all",
    badge: "PA6 RV 3.30",
    badgeType: "polymer",
    status: "Extrusion Grade",
    statusType: "in-stock",
    title: "Polyamide 6 Chips — High Viscosity (RV 3.30)",
    tagline: "Solid-state polymerized (SSP) resin for film extrusion & monofilament",
    denier: "Relative Viscosity 3.30 ± 0.04",
    lustre: "Translucent White Granules",
    tenacity: "Ultra Impact Toughness",
    elongation: "N/A",
    shrinkage: "N/A",
    image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=1200&q=85",
    summary: "Undergoes secondary solid-state polymerization to boost polymer chain length and melt strength. Perfect for cast & blown barrier films, thick monofilaments, and corrugated conduits.",
    applications: ["BOPA Food Packaging Barrier Film", "Trimmer Lines & Cable Ties", "Heavy Monofilament Fishing Lines", "Corrugated Automotive Tubing"],
    packaging: "25 kg moisture-barrier foil bags / 1,000 kg bulk containers.",
    keySpecs: {
      "Relative Viscosity": "3.30 ± 0.04",
      "Oxygen Barrier Performance": "High Gas Impermeability",
      "Residual Moisture": "≤ 0.05%",
      "Processing Temperature": "240°C – 275°C",
      "Flexural Strength": "105 MPa"
    }
  },
  {
    id: "pa6-heat-stabilized",
    category: "chips",
    department: "Polyamide 6 Chips",
    series: "all",
    badge: "HEAT STABLE",
    badgeType: "polymer",
    status: "Under-Hood Auto",
    statusType: "custom",
    title: "Heat-Stabilized Copper Complex PA6 Chips",
    tagline: "Formulated for continuous exposure to high operating temperatures",
    denier: "RV 2.70 Heat Modified",
    lustre: "Olive / Natural Pellets",
    tenacity: "Continuous 140°C Rating",
    elongation: "N/A",
    shrinkage: "N/A",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    summary: "Integrated with organic copper halide heat stabilizers during polymerization. Resists thermal oxidative breakdown even when subjected to prolonged under-the-hood engine bay temperatures.",
    applications: ["Radiator End Tanks", "Engine Acoustic Covers", "Industrial Furnace Connectors", "Electrical Busbar Insulators"],
    packaging: "25 kg hermetically sealed aluminum-barrier sacks.",
    keySpecs: {
      "Thermal Endurance": "Continuous 140°C (Short peak 190°C)",
      "Additive System": "CuI / KI synergistic antioxidant",
      "Relative Viscosity": "2.70 ± 0.04",
      "UL94 Rating": "V-2 (0.8mm)"
    }
  },
  {
    id: "pa6-flame-retardant",
    category: "chips",
    department: "Polyamide 6 Chips",
    series: "all",
    badge: "UL94 V-0",
    badgeType: "polymer",
    status: "Halogen Free",
    statusType: "in-stock",
    title: "Flame Retardant UL94 V-0 PA6 Compound",
    tagline: "Eco-friendly non-halogenated compound for railway & electrical safety",
    denier: "Non-Halogen Flame Retardant",
    lustre: "Off-White Uniform Pellets",
    tenacity: "Self-Extinguishing",
    elongation: "N/A",
    shrinkage: "N/A",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=85",
    summary: "Complies with stringent European railway and appliance standards (EN 45545-2 and IEC 60335). Non-halogenated phosphorus-nitrogen flame retardant that generates low toxic smoke.",
    applications: ["Railway Coach Electrical Boxes", "Solar Inverter Casings", "Industrial Circuit Breakers", "Appliance Terminal Blocks"],
    packaging: "25 kg moisture-barrier multi-ply paper bags.",
    keySpecs: {
      "Flammability Class": "UL94 V-0 at 0.8mm",
      "Glow Wire Flammability (GWFI)": "960°C (IEC 60695-2-12)",
      "Comparative Tracking Index": "CTI ≥ 600V",
      "Environmental Compliance": "RoHS 3 & REACH SVHC Free"
    }
  },

  /* ==========================================================================
     DEPARTMENT 4: AMMONIUM SULPHATE & CHEMICALS (5 PRODUCTS)
     ========================================================================== */
  {
    id: "ammo-crystalline",
    category: "fertilizer",
    department: "Ammonium Sulphate & Chemicals",
    series: "all",
    badge: "AGRO CRYSTAL",
    badgeType: "chem",
    status: "FCO Certified",
    statusType: "in-stock",
    title: "White Crystalline Ammonium Sulphate (21% N, 24% S)",
    tagline: "Pure crystalline plant co-product fertilizer with dual nitrogen & sulphur nutrition",
    denier: "N: 20.95% | S: 24.10%",
    lustre: "Brilliant White Crystals",
    tenacity: "100% Water Soluble",
    elongation: "N/A",
    shrinkage: "N/A",
    image: "https://images.unsplash.com/photo-1604697976327-4f28ff459803?auto=format&fit=crop&w=1200&q=85",
    summary: "Synthesized during caprolactam production. Pure white, free-flowing crystalline salt that provides readily accessible ammoniacal nitrogen and plant-available sulphate sulphur.",
    applications: ["Sugarcane & Paddy Cultivation", "Tea & Coffee Plantations", "Oilseed Crops (Mustard, Groundnut)", "Soil pH Reduction (Alkaline Soils)"],
    packaging: "50 kg laminated HDPE woven bags with inner liner / 1,000 kg Jumbo Bags / Loose Bulk Hopper Rake.",
    keySpecs: {
      "Ammoniacal Nitrogen (N)": "20.95% min (Guaranteed Min 20.6%)",
      "Available Sulphur (S)": "24.10% min (Guaranteed Min 23.0%)",
      "Free Moisture": "≤ 0.20%",
      "Free Acidity (H₂SO₄)": "≤ 0.025%",
      "FCO Compliance": "100% compliant with Fertilizer Control Order 1985"
    }
  },
  {
    id: "ammo-granular",
    category: "fertilizer",
    department: "Ammonium Sulphate & Chemicals",
    series: "all",
    badge: "GRANULAR",
    badgeType: "chem",
    status: "Bulk Blending",
    statusType: "in-stock",
    title: "Granular Compacted Ammonium Sulphate (2-4mm)",
    tagline: "Compacted uniform hard granules for pneumatic spreading & bulk blending",
    denier: "N: 20.6% | S: 23.8%",
    lustre: "Light Tan Compacted Granules",
    tenacity: "Hardness > 3.0 kg",
    elongation: "N/A",
    shrinkage: "N/A",
    image: "https://images.unsplash.com/photo-1562162135-9f64f33e623b?auto=format&fit=crop&w=1200&q=85",
    summary: "Mechanical compaction of crystalline ammonium sulphate into uniform 2-4mm granules with high crush strength. Prevents segregration when blended with Urea and DAP.",
    applications: ["Bulk Blend NPK Fertilizer Units", "Aerial & Tractor Pneumatic Spreading", "Commercial Turf & Horticulture", "Cotton & Pulses Agriculture"],
    packaging: "50 kg HDPE bags / 1 MT Sling Bags for container export.",
    keySpecs: {
      "Granule Size (2.0mm – 4.0mm)": "≥ 90%",
      "Granule Hardness (Crush Strength)": "≥ 3.2 kgf",
      "Ammoniacal Nitrogen": "20.6% min",
      "Sulphur Content": "23.8% min",
      "Anti-Caking Agent": "Food grade vegetable oil coating"
    }
  },
  {
    id: "capro-monomer",
    category: "fertilizer",
    department: "Ammonium Sulphate & Chemicals",
    series: "all",
    badge: "MONOMER",
    badgeType: "chem",
    status: "99.98% Purity",
    statusType: "custom",
    title: "Caprolactam Pure Monomer Flakes",
    tagline: "High-purity raw feedstock for polyamide 6 polymerization & synthesis",
    denier: "Purity ≥ 99.98%",
    lustre: "White Crystalline Flakes",
    tenacity: "M.P. 69.2°C",
    elongation: "N/A",
    shrinkage: "N/A",
    image: "https://images.unsplash.com/photo-1598598218968-47720f64c360?auto=format&fit=crop&w=1200&q=85",
    summary: "Ultra-pure ε-caprolactam produced via cyclohexanone oxime rearrangement. Exceptional permanganate absorption number and low volatile bases for high-tenacity yarn synthesis.",
    applications: ["Nylon 6 Resins & Yarn Synthesis", "Pharmaceutical Intermediates", "Leather Tanning Crosslinkers", "Polyurethane Chain Extenders"],
    packaging: "25 kg PE-lined paper sacks / Molten liquid road tankers under nitrogen blanket.",
    keySpecs: {
      "Purity (GC)": "≥ 99.98% by weight",
      "Permanganate Number": "> 20,000 seconds",
      "Volatile Bases": "< 0.3 meq/kg",
      "Colour in Melt": "< 5 Hazen (APHA)",
      "Melting Point": "69.0°C – 69.3°C"
    }
  },
  {
    id: "ammo-technical",
    category: "fertilizer",
    department: "Ammonium Sulphate & Chemicals",
    series: "all",
    badge: "TECHNICAL",
    badgeType: "chem",
    status: "Low Heavy Metal",
    statusType: "in-stock",
    title: "Technical Grade Ammonium Sulphate",
    tagline: "Precipitation and buffering reagent for textile dyeing & industrial water",
    denier: "Technical Purity 99.5%",
    lustre: "Fine White Crystals",
    tenacity: "pH 5.0 – 5.5",
    elongation: "N/A",
    shrinkage: "N/A",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=85",
    summary: "Refined to remove trace heavy metals and insoluble impurities. Acts as an acid-donor in acid dyehouses, flame-retardant treatment, and biological wastewater effluent treatment.",
    applications: ["Textile Dyehouse Acid Reagents", "Cellulose Insulation Flameproofing", "Fermentation & Yeast Nutrient", "Water Treatment De-chlorination"],
    packaging: "25 kg and 50 kg moisture-proof HDPE sacks.",
    keySpecs: {
      "Assay (NH₄)₂SO₄": "≥ 99.5%",
      "Insoluble Matter": "≤ 0.01%",
      "Chloride (Cl)": "≤ 15 ppm",
      "Iron (Fe)": "≤ 5 ppm",
      "Heavy Metals (as Pb)": "≤ 2 ppm"
    }
  },
  {
    id: "ammo-watersoluble",
    category: "fertilizer",
    department: "Ammonium Sulphate & Chemicals",
    series: "all",
    badge: "FERTIGATION",
    badgeType: "chem",
    status: "Drip Safe",
    statusType: "in-stock",
    title: "100% Water-Soluble Fertigation Grade",
    tagline: "Micro-filtered crystal formulation designed for precision drip irrigation",
    denier: "Zero Insoluble Residue",
    lustre: "Crystal Sugar Texture",
    tenacity: "Rapid Dissolution",
    elongation: "N/A",
    shrinkage: "N/A",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",
    summary: "Specially treated with anti-caking conditioners that leave zero suspended solids, preventing venturi injector clogs and drip emitter blockage in greenhouse fertigation systems.",
    applications: ["Drip Irrigation & Fertigation", "Polyhouse & Greenhouse Crops", "Foliar Nitrogen-Sulphur Sprays", "Hydroponic Nutrient Solutions"],
    packaging: "25 kg LDPE lined paper sacks with UV stability.",
    keySpecs: {
      "Solubility in Water (20°C)": "754 g/L (Instant dissolution)",
      "Insoluble Matter in Water": "< 0.005% (No nozzle clogging)",
      "Total Nitrogen (Ammoniacal)": "21.0% min",
      "Sulphur (as S)": "24.0% min",
      "EC (1g/L at 25°C)": "1.4 mS/cm"
    }
  }
];

// Export for Node/ES environment if required
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { YOGHAN_PRODUCTS };
}
