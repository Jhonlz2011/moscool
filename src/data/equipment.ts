export interface EquipmentCategory {
  id: string;
  name: string;
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
    description: "Sistemas residenciales y comerciales de pared, ventana o ducto.",
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
        estimatedAction: "Detección de fuga de gas, presurización y recarga de refrigerante.",
        typicalDuration: "1 a 2 horas",
      },
      {
        id: "gotea-agua",
        label: "Bota agua hacia la pared interior",
        severity: "media",
        estimatedAction: "Limpieza y desobstrucción de bandeja y canalización de drenaje.",
        typicalDuration: "45 a 60 min",
      },
      {
        id: "error-inverter",
        label: "Luces parpadean / Código de error en pantalla",
        severity: "critica",
        estimatedAction: "Diagnóstico de tarjeta electrónica, sensores y compresión.",
        typicalDuration: "1 a 2 horas",
      },
      {
        id: "ruido-vibracion",
        label: "Ruido excesivo o vibración en unidad exterior",
        severity: "alta",
        estimatedAction: "Revisión de turbina, soportes de compresor o aspas de ventilador.",
        typicalDuration: "1 hora",
      },
      {
        id: "mantenimiento-rutina",
        label: "Mantenimiento preventivo periódico",
        severity: "media",
        estimatedAction: "Limpieza profunda de serpentines, filtros y revisión de presiones.",
        typicalDuration: "1 hora",
      },
    ],
  },
  {
    id: "refrigeracion",
    name: "Nevera / Refrigerador / Congelador",
    description: "Neveras No-Frost, convencionales, Side-by-Side y congeladores.",
    capacities: [
      "10 a 14 Pies Cúbicos",
      "16 a 22 Pies Cúbicos",
      "Side by Side / French Door",
      "Congelador Horizontal / Vertical",
    ],
    symptoms: [
      {
        id: "enfria-arriba-no-abajo",
        label: "Congela arriba pero no enfría en la parte inferior",
        severity: "alta",
        estimatedAction: "Revisión del sistema de deshielo (resistencia, bimetal y ductos).",
        typicalDuration: "1 a 2 horas",
      },
      {
        id: "no-arranca-motor",
        label: "El motor intenta arrancar con un 'clic' y se detiene",
        severity: "critica",
        estimatedAction: "Comprobación de relay de arranque, capacitor o motor compresor.",
        typicalDuration: "1 a 2 horas",
      },
      {
        id: "fuga-gas-nevera",
        label: "Poco frío y el motor trabaja continuamente sin parar",
        severity: "critica",
        estimatedAction: "Verificación de presiones, cambio de filtro y recarga de refrigerante.",
        typicalDuration: "2 horas",
      },
      {
        id: "bota-agua-piso",
        label: "Acumulación de agua en el piso o cajones de vegetales",
        severity: "media",
        estimatedAction: "Limpieza del ducto de desagüe hacia la bandeja posterior.",
        typicalDuration: "45 min",
      },
    ],
  },
  {
    id: "lavado-secado",
    name: "Lavadora / Secadora Automática",
    description: "Carga frontal, superior y centros de lavado.",
    capacities: [
      "8 a 12 Kg Residencial",
      "14 a 19 Kg Carga Pesada",
      "20+ Kg Gran Capacidad",
      "Centro de Lavado Integrado",
    ],
    symptoms: [
      {
        id: "no-centrifuga",
        label: "Lava pero no centrifuga / La ropa queda con agua",
        severity: "alta",
        estimatedAction: "Revisión de bomba de drenaje, sensor de nivel y seguro de puerta.",
        typicalDuration: "1 a 2 horas",
      },
      {
        id: "golpeteo-fuerte",
        label: "Golpeteo fuerte o vibración al girar",
        severity: "alta",
        estimatedAction: "Revisión de amortiguadores, varillas de suspensión y rodamientos.",
        typicalDuration: "1 a 2 horas",
      },
      {
        id: "no-calienta-secadora",
        label: "La secadora gira pero no calienta",
        severity: "alta",
        estimatedAction: "Comprobación de resistencias, termostatos y sensores térmicos.",
        typicalDuration: "1 hora",
      },
      {
        id: "no-entra-agua",
        label: "No ingresa agua o llena muy lento",
        severity: "media",
        estimatedAction: "Limpieza de filtros y verificación de electroválvulas de entrada.",
        typicalDuration: "45 min",
      },
    ],
  },
  {
    id: "cocinas-hornos",
    name: "Cocina a Gas / Eléctrica / Horno",
    description: "Cocinas de piso, empotrables y hornos.",
    capacities: [
      "4 Quemadores",
      "5 a 6 Quemadores",
      "Horno Empotrable",
      "Cocina Eléctrica / Inducción",
    ],
    symptoms: [
      {
        id: "llama-amarilla",
        label: "Llama amarilla y ahúma las ollas / Olor a gas",
        severity: "critica",
        estimatedAction: "Calibración de quemadores, espreas y revisión de conexiones de gas.",
        typicalDuration: "1 hora",
      },
      {
        id: "no-mantiene-llama-horno",
        label: "El horno enciende pero al soltar la perilla se apaga",
        severity: "alta",
        estimatedAction: "Reemplazo o calibración de la termocupla de seguridad.",
        typicalDuration: "1 hora",
      },
      {
        id: "chispa-continua",
        label: "Chispómetro no acciona o suena continuamente",
        severity: "media",
        estimatedAction: "Revisión de bujías, pulsadores y módulo generador de chispas.",
        typicalDuration: "45 min",
      },
    ],
  },
];
