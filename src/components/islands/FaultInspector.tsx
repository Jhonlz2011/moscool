import { createSignal } from "solid-js";

interface FaultItem {
  id: string;
  equipment: string;
  symptomTitle: string;
  symptomDetail: string;
  honestDiagnosis: string;
  dishonestScam: string;
  technicianAction: string;
  estimatedTime: string;
  whatsappMessage: string;
}

const FAULTS: FaultItem[] = [
  {
    id: "split-water",
    equipment: "Aire Acondicionado Split",
    symptomTitle: "Gotea agua por la pared interior y moja el piso",
    symptomDetail: "El equipo empieza a chorrear agua por las esquinas o por la bandeja frontal, manchando la pared de gypsum.",
    honestDiagnosis: "Bandeja de condensados y manguera de desagüe obstruidas por lodo bacteriano y moho acumulado por la humedad de Guayaquil.",
    dishonestScam: "Técnicos informales dicen: 'Le falta gas' o 'La tubería está rota' para cobrar recargas innecesarias.",
    technicianAction: "Destape a presión de la línea de desagüe, aplicación de desincrustante bactericida y prueba de nivelación con funda colectora.",
    estimatedTime: "45 a 60 minutos",
    whatsappMessage: "Hola Servicio Técnico Mendoza, mi aire acondicionado split está botando agua por la pared interior. Deseo coordinar una revisión técnica.",
  },
  {
    id: "split-warm",
    equipment: "Aire Acondicionado Split / Inverter",
    symptomTitle: "Ventila con fuerza pero el aire sale tibio",
    symptomDetail: "La unidad interior sopla normal pero el compresor exterior no arranca o se apaga a los 3 minutos.",
    honestDiagnosis: "Capacitor de marcha desvalorizado, condensadora exterior tapada en tierra o sensor de pozo descalibrado. Si no hubo fuga física previa, el gas sigue intacto.",
    dishonestScam: "Técnicos informales dicen: 'Compresor quemado, hay que cambiar todo el motor'.",
    technicianAction: "Medición con multímetro de microfaradios del capacitor, lavado a presión del serpentín exterior y verificación de amperaje.",
    estimatedTime: "40 a 50 minutos",
    whatsappMessage: "Hola Servicio Técnico Mendoza, mi split ventila pero no enfría la habitación. Necesito un diagnóstico técnico en mi domicilio.",
  },
  {
    id: "fridge-defrost",
    equipment: "Refrigeración No-Frost",
    symptomTitle: "Congela arriba pero abajo se dañan las verduras",
    symptomDetail: "El congelador hace escarcha en el fondo pero el compartimento inferior de alimentos no recibe frío.",
    honestDiagnosis: "Bloqueo de hielo en el ducto de aire por falla en la resistencia de deshielo, sensor bimetálico o termofusible.",
    dishonestScam: "Técnicos informales dicen: 'Se le fue el gas refrigerante por una fuga interna' y cobran \$70 por una recarga que no resuelve el bloqueo de hielo.",
    technicianAction: "Descongelamiento técnico del ducto, medición de continuidad de la resistencia y reemplazo del bimetal defectuoso con repuesto original.",
    estimatedTime: "1 a 2 horas",
    whatsappMessage: "Hola Servicio Técnico Mendoza, mi refrigeradora congela en el freezer pero abajo no enfría. Quisiera agendar una visita técnica.",
  },
  {
    id: "washer-spin",
    equipment: "Lavadora Automática",
    symptomTitle: "Golpea fuerte al centrifugar y no bota el agua",
    symptomDetail: "La tina se sacude de forma violenta al tomar velocidad o se queda detenida con agua y ropa empapada.",
    honestDiagnosis: "Varillas tensoras de suspensión vencidas o monedas/pelusa trabando la propela de la electrobomba de desagüe.",
    dishonestScam: "Técnicos informales dicen: 'La transmisión central está destruida y la tarjeta electrónica no sirve'.",
    technicianAction: "Apertura del filtro de drenaje, calibración o cambio de varillas de suspensión y nivelación sobre piso protector.",
    estimatedTime: "45 a 75 minutos",
    whatsappMessage: "Hola Servicio Técnico Mendoza, mi lavadora no bota el agua y golpea fuerte al centrifugar. Solicito revisión técnica.",
  },
];

export default function FaultInspector() {
  const [selectedId, setSelectedId] = createSignal<string>(FAULTS[0].id);

  const currentFault = () => FAULTS.find((f) => f.id === selectedId()) || FAULTS[0];

  const getWhatsAppUrl = (msg: string) =>
    `https://wa.me/593990068605?text=${encodeURIComponent(msg)}`;

  return (
    <div class="w-full max-w-5xl mx-auto">
      {/* Selector Tabs */}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {FAULTS.map((fault) => {
          const isSelected = () => selectedId() === fault.id;
          return (
            <button
              type="button"
              onClick={() => setSelectedId(fault.id)}
              class={`p-4 rounded-xl text-left border transition-all cursor-pointer relative overflow-hidden ${
                isSelected()
                  ? "bg-sky-950/40 border-sky-500 shadow-lg shadow-sky-950/40"
                  : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
              }`}
            >
              {isSelected() && (
                <div class="absolute top-0 left-0 right-0 h-1 bg-sky-400"></div>
              )}
              <span class="block text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 mb-1">
                {fault.equipment}
              </span>
              <span class="block text-sm font-bold text-slate-100 line-clamp-2">
                {fault.symptomTitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Fault Diagnostic Panel */}
      <div class="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 shadow-2xl relative overflow-hidden">
        {/* Header with Title and Equipment */}
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-sky-950 text-sky-300 border border-sky-800 mb-2">
              <span class="w-2 h-2 rounded-full bg-sky-400"></span>
              {currentFault().equipment}
            </div>
            <h3 class="text-xl md:text-2xl font-bold text-white">
              {currentFault().symptomTitle}
            </h3>
            <p class="text-slate-300 text-sm mt-1">
              {currentFault().symptomDetail}
            </p>
          </div>

          <div class="flex-shrink-0 text-left md:text-right">
            <span class="block text-xs font-mono text-slate-400">Tiempo de Solución en Sitio</span>
            <span class="text-lg font-bold text-sky-400">{currentFault().estimatedTime}</span>
          </div>
        </div>

        {/* Comparison: Honest vs Scam */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          {/* Honest Diagnosis */}
          <div class="p-5 rounded-xl bg-slate-950/80 border border-sky-900/60 relative">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/40">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h4 class="text-sm font-bold uppercase tracking-wider text-sky-300 font-mono">
                Diagnóstico Técnico Honesto
              </h4>
            </div>
            <p class="text-sm text-slate-200 leading-relaxed">
              {currentFault().honestDiagnosis}
            </p>
          </div>

          {/* Scam Warning */}
          <div class="p-5 rounded-xl bg-slate-950/80 border border-amber-900/60 relative">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
              <h4 class="text-sm font-bold uppercase tracking-wider text-amber-300 font-mono">
                Lo que un taller informal inventa
              </h4>
            </div>
            <p class="text-sm text-slate-300 leading-relaxed">
              {currentFault().dishonestScam}
            </p>
          </div>
        </div>

        {/* Action and WhatsApp CTA */}
        <div class="p-5 rounded-xl bg-sky-950/30 border border-sky-800/40 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <span class="block text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-1">
              Protocolo que aplicamos en tu hogar
            </span>
            <p class="text-sm text-slate-200">
              {currentFault().technicianAction}
            </p>
          </div>

          <a
            href={getWhatsAppUrl(currentFault().whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/50 hover:shadow-emerald-900/60 transition-all flex-shrink-0 active:translate-y-0.5"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Solicitar esta solución por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
