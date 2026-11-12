export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqsData: FAQItem[] = [
  {
    category: "Aires Acondicionados",
    question: "¿Por qué mi aire split bota agua hacia adentro de la habitación?",
    answer: "Suele deberse a dos causas principales: la obstrucción del canal o manguera de drenaje debido a polvo y sedimentos acumulados, o la falta de gas refrigerante que congela el serpentín y desborda agua al apagarse. Durante la visita técnica se limpia el drenaje y se comprueba la presión de trabajo para solucionar la causa de raíz.",
  },
  {
    category: "Proformas y Precios",
    question: "¿Cómo funciona la entrega de la proforma y qué respaldo ofrece?",
    answer: "Durante la inspección in-situ, el técnico evalúa el equipo y genera en minutos una proforma formal en formato PDF con nuestra aplicación móvil. En ella se detalla de forma transparente el costo de repuestos y mano de obra antes de realizar el trabajo, incluyendo 30 días de garantía por escrito.",
  },
  {
    category: "Refrigeración",
    question: "¿Por qué mi nevera congela arriba pero no enfría en la parte de abajo?",
    answer: "En los sistemas No-Frost, esto indica que el serpentín del congelador está saturado de hielo debido a una falla en el circuito de deshielo automático (la resistencia, el bimetal o el sensor de temperatura). Al bloquearse el ducto, el ventilador no puede impulsar el aire frío hacia el compartimiento inferior.",
  },
  {
    category: "Lavadoras",
    question: "¿Por qué la lavadora hace un ruido metálico fuerte al centrifugar?",
    answer: "Ese sonido suele ser causado por desgaste en los rodamientos de la tina, casi siempre derivado de un retén de agua que perdió su sellado y permitió el paso de agua al eje. Es recomendable atenderlo oportunamente para no dañar la transmisión ni el eje del tambor.",
  },
  {
    category: "Cobertura y Citas",
    question: "¿Qué sectores cubren y cómo solicito una visita a domicilio?",
    answer: "Brindamos atención técnica a domicilio en Guayaquil, Samborondón y Durán. Puedes contactarnos directamente por WhatsApp (+593 99 006 8605) o por llamada telefónica indicando tu sector y la falla del equipo para coordinar la visita técnica.",
  },
];
