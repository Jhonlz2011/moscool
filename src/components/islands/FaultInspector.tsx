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
    symptomDetail: "El equipo empieza a chorrear agua por las esquinas o por la bandeja frontal, mojando el piso y la pared.",
    honestDiagnosis: "Bandeja de condensados y manguera de desagüe obstruidas por lodo bacteriano y moho acumulado por la humedad ambiental.",
    dishonestScam: "Técnicos informales dicen: 'Le falta gas' o 'La tubería está rota' para cobrar recargas innecesarias.",
    technicianAction: "Destape a presión de la línea de desagüe, aplicación de desincrustante bactericida y prueba de nivelación del equipo.",
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
    dishonestScam: "Técnicos informales dicen: 'Se le fue el gas refrigerante por una fuga interna' y cobran $70 por una recarga que no resuelve el bloqueo de hielo.",
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
              class={`p-4 rounded-xl text-left border  cursor-pointer relative overflow-hidden ${
                isSelected()
                  ? "bg-sky-50 dark:bg-sky-950/40 border-sky-500 shadow-md dark:shadow-lg dark:shadow-sky-950/40"
                  : "bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 shadow-sm"
              }`}
            >
              {isSelected() && (
                <div class="absolute top-0 left-0 right-0 h-1 bg-sky-500"></div>
              )}
              <span class="block text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">
                {fault.equipment}
              </span>
              <span class="block text-sm font-bold text-slate-800 dark:text-slate-100 line-clamp-2">
                {fault.symptomTitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Fault Diagnostic Panel */}
      <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 md:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden">
        {/* Header with Title and Equipment */}
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800 mb-2">
              <span class="w-2 h-2 rounded-full bg-sky-500"></span>
              {currentFault().equipment}
            </div>
            <h3 class="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              {currentFault().symptomTitle}
            </h3>
            <p class="text-slate-600 dark:text-slate-300 text-sm mt-1">
              {currentFault().symptomDetail}
            </p>
          </div>

          <div class="flex-shrink-0 text-left md:text-right">
            <span class="block text-xs font-mono text-slate-500 dark:text-slate-400">Tiempo de Solución en Sitio</span>
            <span class="text-lg font-bold text-sky-600 dark:text-sky-400">{currentFault().estimatedTime}</span>
          </div>
        </div>

        {/* Comparison: Honest vs Scam */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          {/* Honest Diagnosis */}
          <div class="p-5 rounded-xl bg-sky-50/70 dark:bg-slate-950/80 border border-sky-200 dark:border-sky-900/60 relative">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-6 h-6 rounded-full bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center border border-sky-500/40">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h4 class="text-sm font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 font-mono">
                Diagnóstico Técnico Honesto
              </h4>
            </div>
            <p class="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              {currentFault().honestDiagnosis}
            </p>
          </div>

          {/* Scam Warning */}
          <div class="p-5 rounded-xl bg-amber-50/70 dark:bg-slate-950/80 border border-amber-200 dark:border-amber-900/60 relative">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/40">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
              <h4 class="text-sm font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 font-mono">
                Lo que un taller informal inventa
              </h4>
            </div>
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentFault().dishonestScam}
            </p>
          </div>
        </div>

        {/* Action and WhatsApp CTA */}
        <div class="p-5 rounded-xl bg-sky-100/60 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/40 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <span class="block text-xs font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">
              Protocolo que aplicamos en tu hogar
            </span>
            <p class="text-sm text-slate-800 dark:text-slate-200">
              {currentFault().technicianAction}
            </p>
          </div>

          <a
            href={getWhatsAppUrl(currentFault().whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white shadow-md shadow-emerald-950/20 flex-shrink-0 active:translate-y-0.5 cursor-pointer"
          >
            <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Solicitar esta solución por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
