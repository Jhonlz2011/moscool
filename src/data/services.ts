export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  category: string;
  shortSummary: string;
  fullDescription: string;
  keySpecs: string[];
  toolsUsed: string[];
  warrantyDays: number;
  featured: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "mantenimiento-split-profundo",
    code: "SRV-HVAC-01",
    title: "Mantenimiento Químico Profundo para Splits e Inverter",
    category: "Climatización",
    shortSummary: "Desarme técnico completo, hidrolavado a presión, desinfección antibacteriana y comprobación de parámetros eléctricos.",
    fullDescription: "No nos limitamos a lavar los filtros. Desmontamos la carcasa y turbina tangencial para aplicar desengrasante químico de serpentín que remueve hongos, bacterias y sarro acumulado. Incluye limpieza profunda de bandeja de drenaje, tratamiento anti-moho y medición de presiones de trabajo.",
    keySpecs: [
      "Lavado con bomba de presión de caudal regulado",
      "Químico biodegradable no corrosivo para aletas de aluminio",
      "Medición de salto térmico (Delta T) in/out",
      "Comprobación de consumo eléctrico en Amperes (RLA)",
    ],
    toolsUsed: ["Bomba hidrolavadora HVAC", "Funda protectora colectora", "Anemómetro digital", "Pinza amperimétrica True-RMS"],
    warrantyDays: 30,
    featured: true,
  },
  {
    id: "recarga-refrigerante-vacio",
    code: "SRV-HVAC-02",
    title: "Carga de Gas Ecológico R410A / R32 con Vacío Industrial",
    category: "Climatización",
    shortSummary: "Presurización con nitrógeno seco, detección de microfugas, vacío a menos de 500 micrones y carga por balanza digital en fase líquida.",
    fullDescription: "Una recarga de gas sin buscar la fuga es botar tu dinero. En Moscool presurizamos las líneas frigoríficas con nitrógeno seco a 350-400 PSI para ubicar exactamente la pérdida. Reparamos la fuga mediante soldadura con varilla de plata y realizamos un vacío profundo antes de cargar el gas exacto según la placa del fabricante.",
    keySpecs: [
      "Bomba de vacío de doble etapa (eliminación total de humedad y no condensables)",
      "Medición con vacuómetro digital calibrado (< 500 micrones)",
      "Carga pesada gramo a gramo mediante balanza electrónica",
      "Comprobación de recalentamiento (Superheat) y subenfriamiento (Subcooling)",
    ],
    toolsUsed: ["Vacuómetro digital Testo/Fieldpiece", "Manifold digital de 4 vías", "Balanza de precisión", "Bomba de vacío 8 CFM"],
    warrantyDays: 60,
    featured: true,
  },
  {
    id: "reparacion-tarjetas-inverter",
    code: "SRV-ELEC-03",
    title: "Diagnóstico y Reparación de Tarjetas Electrónicas Inverter",
    category: "Electrónica de Potencia",
    shortSummary: "Laboratorio especializado en sustitución de módulos IPM, fuentes conmutadas, optoacopladores y memorias EEPROM.",
    fullDescription: "No reemplaces tu equipo si la placa falla. Diagnosticamos fallas de comunicación interior/exterior, códigos de error en compresor inverter, picos de voltaje que dañan la etapa rectificadora y sustituimos componentes de potencia originales.",
    keySpecs: [
      "Diagnóstico osciloscópico de señales PWM y comunicación serial",
      "Reemplazo de módulo de potencia inteligente (IPM)",
      "Protección contra transitorios de voltaje y corrosión",
      "Banco de pruebas con carga simulada antes de instalar en domicilio",
    ],
    toolsUsed: ["Osciloscopio digital 100MHz", "Estación de soldadura SMD por aire caliente", "Generador de señales", "Tester de componentes"],
    warrantyDays: 90,
    featured: true,
  },
  {
    id: "reparacion-neveras-no-frost",
    code: "SRV-REF-04",
    title: "Servicio Integral para Neveras No-Frost y Cavas",
    category: "Refrigeración",
    shortSummary: "Corrección de sistemas de deshielo automático, cambio de compresores silenciosos y desobstrucción de capilares.",
    fullDescription: "Solucionamos fallas críticas donde el congelador trabaja pero los alimentos en la parte inferior se deterioran. Reemplazamos sensores de temperatura (NTC), termofusibles de seguridad, resistencias blindadas y motoventiladores de evaporador para restablecer el flujo forzado de aire frío.",
    keySpecs: [
      "Comprobación de resistencia óhmica de calefactores de defrost",
      "Test de compresión dinámica de motocompresor",
      "Sustitución de filtro deshidratador con malla molecular de silicato",
      "Prueba de sellado magnético de empacaduras y puertas",
    ],
    toolsUsed: ["Termómetro infrarrojo multicanal", "Equipo de soldadura oxi-gas", "Detector electrónico de fugas halógenas", "Manómetros de baja presión"],
    warrantyDays: 60,
    featured: true,
  },
  {
    id: "mantenimiento-lavadoras-secadoras",
    code: "SRV-WASH-05",
    title: "Alineación y Mantenimiento Mecánico de Lavadoras y Secadoras",
    category: "Lavado & Secado",
    shortSummary: "Eliminación de ruidos por rodamientos gastados, cambio de sellos retenedores de agua, amortiguadores y bombas de desagüe.",
    fullDescription: "El desgaste de retenes de agua puede destruir la transmisión y el motor de tu lavadora. Realizamos reemplazo preventivo y correctivo de rodamientos de tina, retenes de doble labio, calibración de sistema de suspensión hidráulica y limpieza profunda de sedimentos y restos de detergente.",
    keySpecs: [
      "Desarme completo de tina y canasta para extracción de lodos",
      "Reemplazo de rodamientos de alta velocidad blindados 2RS",
      "Calibración de resorte y polea de freno de centrifugado",
      "Mantenimiento de ductos de evacuación de pelusas en secadoras",
    ],
    toolsUsed: ["Extractor mecánico de poleas y rodamientos", "Prensa manual", "Multímetro de aislamiento", "Nivel de precisión"],
    warrantyDays: 60,
    featured: false,
  },
  {
    id: "reparacion-cocinas-hornos",
    code: "SRV-GAS-06",
    title: "Calibración de Válvulas, Termocuplas y Hornos a Gas / Eléctricos",
    category: "Cocción & Gas",
    shortSummary: "Detección de escapes de gas combustible, ajuste de mezcla aire/gas y mantenimiento de sistemas de encendido electrónico.",
    fullDescription: "La seguridad con gas es primordial. Desmontamos grifos y perillas atascadas para aplicar grasa grafitada de alta temperatura, cambiamos termocuplas defectuosas para evitar acumulación de gas en el horno y dejamos las llamas en su punto azul ideal de combustión completa.",
    keySpecs: [
      "Test estanqueidad con detector de gases inflamables (metano, propano)",
      "Limpieza y calibración micrométrica de inyectores (espreas)",
      "Regulación de aire primario en tubos de mezcla",
      "Comprobación milivoltios de termopares de seguridad",
    ],
    toolsUsed: ["Detector ultrasónico de gas", "Micrómetro de espreas", "Manómetro de columna de agua (mbar)", "Grasa sellante de alta temperatura"],
    warrantyDays: 45,
    featured: false,
  },
];
