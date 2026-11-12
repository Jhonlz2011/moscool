export interface EquipmentCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  capacities: string[];
  symptoms: {
    id: string;
    label: string;
    severity: "alta" | "media" | "critica";
    estimatedAction: string;
    typicalDuration: string;
  }[];
}

export const equipmentCatalog: EquipmentCategory[] = [
  {
    id: "aire-split",
    name: "Aire Acondicionado Split / Inverter",
    icon: "snowflake",
    description: "Sistemas residenciales y comerciales de alta eficiencia energética.",
    capacities: [
      "9,000 BTU",
      "12,000 BTU (1 Ton)",
      "18,000 BTU (1.5 Ton)",
      "24,000 BTU (2 Ton)",
      "36,000 BTU (3 Ton)",
    ],
    symptoms: [
      {
        id: "no-enfria",
        label: "Ventila pero no enfría / Tubería congelada",
        severity: "alta",
        estimatedAction: "Detección de micro-fugas, presurización con nitrógeno seco y recarga R410A/R32.",
        typicalDuration: "1 a 2 horas",
      },
      {
        id: "gotea-agua",
        label: "Bota agua hacia la pared interior",
        severity: "media",
        estimatedAction: "Desobstrucción química de bandeja y canalización con bomba de drenaje.",
        typicalDuration: "45 a 60 min",
      },
      {
        id: "error-inverter",
        label: "Luces titilan / Código de error en display (E1, E6, etc.)",
        severity: "critica",
        estimatedAction: "Diagnóstico osciloscópico de placa inverter, sensores thermistor y IPM.",
        typicalDuration: "1 a 3 horas",
      },
      {
        id: "ruido-vibracion",
        label: "Ruido metálico o vibración en unidad exterior",
        severity: "alta",
        estimatedAction: "Alineación de turbina, cambio de rodamientos o silentblocks de compresor.",
        typicalDuration: "1 a 2 horas",
      },
      {
        id: "mantenimiento-rutina",
        label: "Mantenimiento preventivo químico profundo",
        severity: "media",
        estimatedAction: "Hidrolavado a presión con desengrasante biodegradable, serpentines y turbinas.",
        typicalDuration: "1 hora",
      },
    ],
  },
  {
    id: "refrigeracion",
    name: "Nevera / Refrigerador / Congelador",
    icon: "refrigerator",
    description: "Neveras No-Frost, sistemas Side-by-Side, French Door y cavas de conservación.",
    capacities: [
      "10 a 14 Pies Cúbicos",
      "16 a 22 Pies Cúbicos",
      "Side by Side / French Door",
      "Congelador Horizontal / Vertical",
    ],
    symptoms: [
      {
        id: "enfria-arriba-no-abajo",
        label: "Congela arriba pero no enfría en la parte de abajo",
        severity: "alta",
        estimatedAction: "Revisión de bimetálico, resistencia de descongelamiento, damper y timer/tarjeta.",
        typicalDuration: "1 a 2 horas",
      },
      {
        id: "no-arranca-motor",
        label: "El motor intenta arrancar con un 'clic' y se apaga",
        severity: "critica",
        estimatedAction: "Comprobación de relay PTC, capacitor de arranque o bobinas de compresor.",
        typicalDuration: "1 a 2 horas",
      },
      {
        id: "fuga-gas-nevera",
        label: "Poco frío, motor trabaja sin parar y tubería tibia",
        severity: "critica",
        estimatedAction: "Test de estanqueidad, cambio de filtro deshidratador y carga R134a/R600a.",
        typicalDuration: "2 a 3 horas",
      },
      {
        id: "bota-agua-piso",
        label: "Agua acumulada en gavetas de vegetales o piso",
        severity: "media",
        estimatedAction: "Limpieza y destape de conducto de evaporación hacia bandeja de condensado.",
        typicalDuration: "45 min",
      },
    ],
  },
  {
    id: "lavado-secado",
    name: "Lavadora / Secadora Automática",
    icon: "washing-machine",
    description: "Carga frontal, carga superior, centros de lavado eléctricos y a gas.",
    capacities: [
      "8 a 12 Kg Residencial",
      "14 a 19 Kg Carga Pesada",
      "20+ Kg Gran Capacidad",
      "Centro de Lavado Integrado",
    ],
    symptoms: [
      {
        id: "no-centrifuga",
        label: "Lava pero no centrifuga / Ropa sale empapada",
        severity: "alta",
        estimatedAction: "Comprobación de bomba de drenaje, sensor de nivel de agua y switch de puerta.",
        typicalDuration: "1 a 2 horas",
      },
      {
        id: "golpeteo-fuerte",
        label: "Golpea fuerte al girar / Salta de su lugar",
        severity: "alta",
        estimatedAction: "Sustitución de varillas de suspensión, amortiguadores o cruceta de tambor.",
        typicalDuration: "1.5 horas",
      },
      {
        id: "no-calienta-secadora",
        label: "Secadora gira normal pero no genera calor",
        severity: "alta",
        estimatedAction: "Comprobación de termostatos de seguridad, bimetales, ignitor o resistencia.",
        typicalDuration: "1 a 2 horas",
      },
      {
        id: "no-entra-agua",
        label: "Marca error al llenar / Entrada de agua insuficiente",
        severity: "media",
        estimatedAction: "Inspección de solenoides de electroválvula y limpieza de filtros de malla.",
        typicalDuration: "45 min",
      },
    ],
  },
  {
    id: "cocinas-hornos",
    name: "Cocina a Gas / Eléctrica / Horno",
    icon: "flame",
    description: "Estufas, hornos empotrables, encendido electrónico y válvulas termopar.",
    capacities: [
      "4 Quemadores",
      "5 a 6 Quemadores",
      "Horno Empotrable",
      "Tope de Inducción / Vitrocerámica",
    ],
    symptoms: [
      {
        id: "llama-amarilla",
        label: "Llama amarilla y ahúma las ollas / Olor a gas",
        severity: "critica",
        estimatedAction: "Ajuste de espreas, calibración del venturi y verificación de estanqueidad.",
        typicalDuration: "1 hora",
      },
      {
        id: "no-mantiene-llama-horno",
        label: "El horno prende pero al soltar la perilla se apaga",
        severity: "alta",
        estimatedAction: "Calibración o reemplazo de termocupla de seguridad y válvula de paso.",
        typicalDuration: "1 hora",
      },
      {
        id: "chispa-continua",
        label: "Chispómetro suena sin parar o no produce chispa",
        severity: "media",
        estimatedAction: "Revisión de módulo generador de impulsos, microswitches y bujías cerámicas.",
        typicalDuration: "45 min",
      },
    ],
  },
];
