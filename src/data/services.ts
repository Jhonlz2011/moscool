export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  included: string[];
  warrantyDays: number;
}

export const servicesData: ServiceItem[] = [
  {
    id: "climatizacion",
    title: "Aires Acondicionados Split, Inverter y Ventana",
    category: "Climatización",
    description: "Mantenimiento preventivo y correctivo, limpieza profunda de turbinas y serpentines, corrección de goteos de agua, detección de fugas y recarga de gas refrigerante.",
    included: [
      "Limpieza profunda de evaporador, condensador y bandeja de drenaje",
      "Revisión de presiones de gas y consumo eléctrico",
      "Detección y corrección de fugas en tuberías de cobre",
      "Diagnóstico de compresores y tarjetas electrónicas Inverter",
    ],
    warrantyDays: 30,
  },
  {
    id: "refrigeracion",
    title: "Neveras, Refrigeradores y Congeladores",
    category: "Refrigeración",
    description: "Reparación de sistemas No-Frost, neveras convencionales, Side-by-Side y congeladores. Solución a problemas de enfriamiento, exceso de escarcha o fallas en el motor.",
    included: [
      "Diagnóstico del sistema de deshielo automático (bimetal, resistencia, sensores)",
      "Reemplazo de relay, capacitor y motocompresores",
      "Limpieza y desobstrucción de drenaje de condensación",
      "Carga de refrigerante y cambio de filtro deshidratador",
    ],
    warrantyDays: 30,
  },
  {
    id: "lavado-secado",
    title: "Lavadoras y Secadoras Automáticas",
    category: "Lavado y Secado",
    description: "Servicio técnico para lavadoras de carga superior, frontal y secadoras (eléctricas y a gas). Solución a problemas de centrifugado, ruidos fuertes y evacuación de agua.",
    included: [
      "Corrección de ruidos al centrifugar y cambio de rodamientos",
      "Reemplazo de bombas de desagüe y electroválvulas de llenado",
      "Calibración y cambio de varillas de suspensión / amortiguadores",
      "Revisión de resistencias, termostatos y sensores de secado",
    ],
    warrantyDays: 30,
  },
  {
    id: "cocinas-hornos",
    title: "Cocinas a Gas, Eléctricas y Hornos",
    category: "Cocción",
    description: "Mantenimiento y calibración de cocinas residenciales, empotrables y hornos. Corrección de fugas de gas, regulación de llama y encendido electrónico.",
    included: [
      "Calibración de quemadores y ajuste de llama (evita tiznado de ollas)",
      "Reemplazo de termocuplas y válvulas de seguridad de horno",
      "Reparación de sistemas de encendido eléctrico (chispómetros)",
      "Verificación de estanqueidad en conexiones de gas",
    ],
    warrantyDays: 30,
  },
];
