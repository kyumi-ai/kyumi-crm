// AUTO-GENERATED from ~/Downloads/Kyumi_ICP_Filtered_Hardware_SeriesA_plus.xlsx (47-company hardware ICP).
// Fills blank companyType/productDomain/segment on import; never overwrites a hand-set value.
// Regenerate when the ICP sheet changes. Keys are lower-cased, whitespace-collapsed company names.
const ENRICH_MAP = {
  "airhart aeronautics": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Aerospace" },
  "albedo": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Aerospace" },
  "aon3d": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Industrial/Manufacturing" },
  "array labs": { companyType: "Hardware Startup", productDomain: "Electronics / PCB", segment: "Aerospace" },
  "astro mechanica": { companyType: "Hardware Startup", productDomain: "Physical / Mechanical", segment: "Aerospace" },
  "astroforge": { companyType: "Hardware Startup", productDomain: "Physical / Mechanical", segment: "Aerospace" },
  "beyond aero": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Aerospace" },
  "charge robotics": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Robotics" },
  "corvus robotics": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Drones" },
  "entocycle": { companyType: "Hardware Startup", productDomain: "Electronics / PCB", segment: "Ag-hardware" },
  "faction": { companyType: "Hardware Startup", productDomain: "Physical / Mechanical", segment: "Automotive" },
  "farcast": { companyType: "Hardware Startup", productDomain: "Physical / Mechanical", segment: "Aerospace" },
  "four growers": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Ag-hardware" },
  "h3x technologies": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Aerospace" },
  "heart aerospace": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Aerospace" },
  "hubble network": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Aerospace" },
  "industrial next": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Industrial/Manufacturing" },
  "innovein": { companyType: "Hardware Startup", productDomain: "Physical / Mechanical", segment: "Medical Device" },
  "inversion space": { companyType: "Hardware Startup", productDomain: "Physical / Mechanical", segment: "Aerospace" },
  "lucid bots": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Robotics" },
  "luminate": { companyType: "Hardware Startup", productDomain: "Physical / Mechanical", segment: "Medical Device" },
  "mars auto": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Automotive" },
  "morphle labs": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Medical Device" },
  "multiply labs": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Robotics" },
  "odys aviation": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Aerospace" },
  "orangewood labs": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Robotics" },
  "overview": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Industrial/Manufacturing" },
  "paladin": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Drones" },
  "perceptive technologies": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Medical Device" },
  "petcube": { companyType: "Hardware Startup", productDomain: "Electronics / PCB", segment: "Consumer Electronics" },
  "pyka": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Aerospace" },
  "quell": { companyType: "Hardware Startup", productDomain: "Electronics / PCB", segment: "Consumer Electronics" },
  "reach": { companyType: "Hardware Startup", productDomain: "Physical / Mechanical", segment: "Energy-hardware" },
  "regent": { companyType: "Hardware Startup", productDomain: "Physical / Mechanical", segment: "Aerospace" },
  "remora": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Industrial/Manufacturing" },
  "shape (shapescale)": { companyType: "Hardware Startup", productDomain: "Electronics / PCB", segment: "Consumer Electronics" },
  "shinkei systems": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Robotics" },
  "somatic": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Robotics" },
  "soundboks": { companyType: "Hardware Startup", productDomain: "Electronics / PCB", segment: "Consumer Electronics" },
  "starcloud": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Aerospace" },
  "teleo": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Robotics" },
  "turion space": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Aerospace" },
  "vena medical": { companyType: "Hardware Startup", productDomain: "Electronics / PCB", segment: "Medical Device" },
  "venostent": { companyType: "Hardware Startup", productDomain: "Physical / Mechanical", segment: "Medical Device" },
  "zendar": { companyType: "Hardware Startup", productDomain: "Electronics / PCB", segment: "Automotive" },
  "zenflow": { companyType: "Hardware Startup", productDomain: "Physical / Mechanical", segment: "Medical Device" },
  "zeta surgical": { companyType: "Hardware Startup", productDomain: "Electromechanical", segment: "Medical Device" },
};

// Fallback for companies not in the ICP map — light, conservative heuristics; never overwrites.
function deriveEnrichment(lead){
  const out = {};
  const co = (lead.company || '').toLowerCase();
  if(/job ?shop|machine|machining|stamping|tool ?&? ?die|fabrication|foundry/.test(co)) out.companyType = 'Contract Mfr / Job Shop';
  return out;
}

if (typeof window !== 'undefined') { window.ENRICH_MAP = ENRICH_MAP; window.deriveEnrichment = deriveEnrichment; }
