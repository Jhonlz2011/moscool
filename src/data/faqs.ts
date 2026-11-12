export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqsData: FAQItem[] = [
  {
    category: "Climatización",
    question: "¿Por qué mi aire acondicionado split bota agua hacia adentro de la habitación?",
    answer: "Generalmente se debe a tres causas técnicas: 1) Obstrucción de la bandeja o manguera de drenaje por biopelícula y polvo acumulado; 2) Falta de gas refrigerante, lo que provoca congelamiento del serpentín y un desborde repentino al apagarse; o 3) Pérdida del nivel de inclinación en la bandeja colectora. En Moscool limpiamos a presión la canalización con químicos fungicidas y verificamos la presión de trabajo para erradicar la causa raíz.",
  },
  {
    category: "Proformas & Garantías",
    question: "¿Cómo funciona la entrega de la proforma digital y qué respaldo tiene?",
    answer: "Durante la visita, el técnico realiza la inspección con instrumental digital y emite en minutos una Proforma formal en PDF generada a través de nuestra aplicación oficial Moscool. Este documento desglosa el costo exacto de repuestos originales, mano de obra y el tiempo de garantía (30 a 90 días por escrito). Sin precios inventados sobre la marcha ni sorpresas en el cobro.",
  },
  {
    category: "Gases Refrigerantes",
    question: "¿Por qué es obligatorio hacer vacío con bomba antes de recargar gas en un equipo inverter?",
    answer: "Los equipos inverter utilizan aceites sintéticos POE (polioléster) que son extremadamente higroscópicos (absorben humedad del aire rápidamente). Si no se realiza un vacío profundo a menos de 500 micrones con bomba de doble etapa, la humedad se combina con el refrigerante formando ácidos fluorhídrico y clorhídrico que queman el bobinado del compresor en pocos meses. En Moscool siempre medimos el vacío con vacuómetro digital calibrado.",
  },
  {
    category: "Refrigeración",
    question: "¿Qué indica si la nevera congela arriba pero no enfría abajo?",
    answer: "En los sistemas No-Frost, esto casi siempre indica una falla en el circuito de deshielo automático. Si el bimetal, la resistencia o el sensor de defrost se dañan, el serpentín del evaporador se satura de hielo sólido, bloqueando el ducto por donde el ventilador impulsa el aire hacia el compartimiento inferior. Cambiamos el componente averiado con repuesto homologado y descongelamos el conducto sin dañar las aletas.",
  },
  {
    category: "Tiempos & Emergencias",
    question: "¿Atienden emergencias técnicas los fines de semana?",
    answer: "Sí, mantenemos cuadrillas de guardia activa para emergencias residenciales y comerciales (cavas frigoríficas de restaurantes, salas de servidores, consultorios médicos o fallas críticas de climatización). Puedes coordinar asistencia inmediata a través de nuestro botón de WhatsApp o llamando a nuestra central técnica.",
  },
  {
    category: "Lavado & Secado",
    question: "¿Por qué mi lavadora hace un ruido similar a una turbina de avión al centrifugar?",
    answer: "Ese sonido metálico ensordecedor es el síntoma clásico de desgaste de los rodamientos del tambor debido a que el retén de agua perdió su sello hermético y permitió la entrada de agua jabonosa al eje. Debe atenderse pronto para evitar que el eje sufra desgaste irrecuperable o se dañe la cruceta y la tina plástica.",
  },
];
