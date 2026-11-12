import { createSignal, createMemo, For, Show } from "solid-js";
import { equipmentCatalog, type EquipmentCategory } from "../../data/equipment";
import { siteConfig } from "../../data/siteConfig";

export default function DiagnosticProformaCalculator() {
  const [selectedEquipId, setSelectedEquipId] = createSignal<string>(equipmentCatalog[0]?.id ?? "aire-split");
  const [selectedCapacity, setSelectedCapacity] = createSignal<string>(equipmentCatalog[0]?.capacities[1] ?? "12,000 BTU (1 Ton)");
  const [selectedSymptomId, setSelectedSymptomId] = createSignal<string>(equipmentCatalog[0]?.symptoms[0]?.id ?? "no-enfria");
  const [clientSector, setClientSector] = createSignal<string>("");

  const currentEquipment = createMemo<EquipmentCategory>(() => {
    return equipmentCatalog.find((e) => e.id === selectedEquipId()) || equipmentCatalog[0]!;
  });

  // When equipment changes, reset capacity & symptom to first available
  const handleEquipmentChange = (newId: string) => {
    setSelectedEquipId(newId);
    const equip = equipmentCatalog.find((e) => e.id === newId);
    if (equip) {
      if (equip.capacities[0]) setSelectedCapacity(equip.capacities[0]);
      if (equip.symptoms[0]) setSelectedSymptomId(equip.symptoms[0].id);
    }
  };

  const currentSymptom = createMemo(() => {
    const equip = currentEquipment();
    return equip.symptoms.find((s) => s.id === selectedSymptomId()) || equip.symptoms[0]!;
  });

  // Generate pre-filled WhatsApp link with professional ticket formatting
  const whatsappUrl = createMemo(() => {
    const equip = currentEquipment();
    const symptom = currentSymptom();
    const sector = clientSector().trim();

    const text = [
      `*SOLICITUD DE ASISTENCIA TÉCNICA - MOSCOOL*`,
      `🔧 *Equipo:* ${equip.name}`,
      `📏 *Capacidad:* ${selectedCapacity()}`,
      `⚠️ *Falla reportada:* ${symptom.label}`,
      sector ? `📍 *Ubicación / Sector:* ${sector}` : null,
      `📄 *Servicio sugerido:* ${symptom.estimatedAction}`,
      ``,
      `Hola equipo de Moscool, he generado este pre-diagnóstico desde su sitio web y deseo coordinar la visita técnica y emisión de la proforma oficial.`,
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  });

  return (
    <div class="w-full rounded-2xl bg-slate-900/90 border border-slate-700/60 p-5 md:p-8 shadow-2xl backdrop-blur-md">
      {/* Header Badge */}
      <div class="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800">
        <div>
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-2">
            <span class="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            SIMULADOR DE DIAGNÓSTICO EN TIEMPO REAL
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-white tracking-tight">
            Calcula tu Diagnóstico y Solicita Proforma Digital
          </h3>
          <p class="text-xs md:text-sm text-slate-400 mt-1">
            Selecciona tu electrodoméstico y la anomalía detectada para recibir el protocolo de intervención recomendado.
          </p>
        </div>
        <div class="hidden sm:flex flex-col items-end">
          <span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Protocolo ISO/R410A</span>
          <span class="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Garantía Certificada
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left Column: Form Controls */}
        <div class="lg:col-span-7 space-y-6">
          {/* Step 1: Equipment Selection */}
          <div>
            <label class="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Paso 1: Tipo de Electrodoméstico
            </label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <For each={equipmentCatalog}>
                {(equip) => {
                  const isSelected = () => selectedEquipId() === equip.id;
                  return (
                    <button
                      type="button"
                      onClick={() => handleEquipmentChange(equip.id)}
                      class={`text-left p-3 rounded-xl border text-xs font-medium transition-all duration-200 flex flex-col justify-between h-20 ${
                        isSelected()
                          ? "bg-sky-500/15 border-sky-400/80 text-white shadow-lg shadow-sky-500/10 ring-1 ring-sky-400/50"
                          : "bg-slate-800/60 border-slate-700/50 text-slate-300 hover:bg-slate-800 hover:border-slate-600"
                      }`}
                    >
                      <span class="font-semibold block leading-snug line-clamp-2">{equip.name}</span>
                      <span class={`text-[10px] font-mono ${isSelected() ? "text-sky-300" : "text-slate-500"}`}>
                        {isSelected() ? "● ACTIVO" : "SELECCIONAR"}
                      </span>
                    </button>
                  );
                }}
              </For>
            </div>
          </div>

          {/* Step 2: Capacity / Size */}
          <div>
            <label class="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Paso 2: Capacidad o Dimensión Aprox.
            </label>
            <div class="flex flex-wrap gap-2">
              <For each={currentEquipment().capacities}>
                {(cap) => {
                  const isSelected = () => selectedCapacity() === cap;
                  return (
                    <button
                      type="button"
                      onClick={() => setSelectedCapacity(cap)}
                      class={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        isSelected()
                          ? "bg-sky-600 text-white border-sky-400 font-semibold shadow-sm"
                          : "bg-slate-800/70 text-slate-400 border-slate-700/60 hover:text-slate-200 hover:border-slate-600"
                      }`}
                    >
                      {cap}
                    </button>
                  );
                }}
              </For>
            </div>
          </div>

          {/* Step 3: Symptom Selection */}
          <div>
            <label class="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Paso 3: Síntoma o Falla Observada
            </label>
            <div class="space-y-2 max-h-56 overflow-y-auto pr-1">
              <For each={currentEquipment().symptoms}>
                {(sym) => {
                  const isSelected = () => selectedSymptomId() === sym.id;
                  const severityClass = () => {
                    if (sym.severity === "critica") return "text-red-400 bg-red-500/10 border-red-500/20";
                    if (sym.severity === "alta") return "text-amber-400 bg-amber-500/10 border-amber-500/20";
                    return "text-sky-400 bg-sky-500/10 border-sky-500/20";
                  };

                  return (
                    <button
                      type="button"
                      onClick={() => setSelectedSymptomId(sym.id)}
                      class={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start justify-between gap-3 ${
                        isSelected()
                          ? "bg-slate-800 border-sky-500 text-white shadow-md ring-1 ring-sky-500/30"
                          : "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/50 hover:border-slate-700"
                      }`}
                    >
                      <div class="flex items-start gap-2.5">
                        <span class={`mt-0.5 w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${isSelected() ? "border-sky-400 bg-sky-500" : "border-slate-600"}`}>
                          <Show when={isSelected()}>
                            <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
                          </Show>
                        </span>
                        <div>
                          <p class="font-medium text-slate-200">{sym.label}</p>
                          <p class="text-[11px] text-slate-400 mt-0.5">{sym.estimatedAction}</p>
                        </div>
                      </div>
                      <span class={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase shrink-0 font-semibold ${severityClass()}`}>
                        {sym.severity}
                      </span>
                    </button>
                  );
                }}
              </For>
            </div>
          </div>

          {/* Optional: Sector Input */}
          <div>
            <label class="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Sector o Zona de Residencia (Opcional)
            </label>
            <input
              type="text"
              placeholder="Ej: Altamira, Las Mercedes, El Hatillo, etc."
              value={clientSector()}
              onInput={(e) => setClientSector(e.currentTarget.value)}
              class="w-full bg-slate-800/80 border border-slate-700 text-white text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Right Column: Dynamic Proforma Ticket Preview */}
        <div class="lg:col-span-5 flex flex-col justify-between">
          <div class="rounded-xl bg-slate-950/80 border border-slate-800 p-5 relative overflow-hidden shadow-xl">
            {/* Background watermark icon */}
            <div class="absolute -right-6 -bottom-6 opacity-5 pointer-events-none">
              <svg class="w-48 h-48 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2v20M2 12h20"/>
              </svg>
            </div>

            {/* Ticket Header */}
            <div class="flex items-center justify-between pb-3.5 border-b border-slate-800/80">
              <div class="flex items-center gap-2">
                <div class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                <span class="text-[11px] font-mono font-bold tracking-wider text-slate-300 uppercase">
                  FICHA TÉCNICA ESTIMADA
                </span>
              </div>
              <span class="text-[10px] font-mono text-slate-500">ID: MSC-{Math.floor(Math.random() * 899 + 100)}</span>
            </div>

            {/* Ticket Specs Table */}
            <div class="mt-4 space-y-3 text-xs">
              <div class="flex justify-between items-baseline py-1 border-b border-slate-900">
                <span class="text-slate-400">Equipo:</span>
                <span class="font-semibold text-slate-100 text-right">{currentEquipment().name}</span>
              </div>
              <div class="flex justify-between items-baseline py-1 border-b border-slate-900">
                <span class="text-slate-400">Capacidad:</span>
                <span class="font-mono text-sky-300 font-medium">{selectedCapacity()}</span>
              </div>
              <div class="flex justify-between items-baseline py-1 border-b border-slate-900">
                <span class="text-slate-400">Severidad de Falla:</span>
                <span class="font-mono font-semibold uppercase text-amber-400">
                  {currentSymptom().severity}
                </span>
              </div>
              <div class="flex justify-between items-baseline py-1 border-b border-slate-900">
                <span class="text-slate-400">Tiempo Estimado In-Situ:</span>
                <span class="font-mono text-slate-200">{currentSymptom().typicalDuration}</span>
              </div>
              <div class="flex justify-between items-baseline py-1 border-b border-slate-900">
                <span class="text-slate-400">Garantía Aplicable:</span>
                <span class="font-semibold text-emerald-400">30 a 90 Días por Escrito</span>
              </div>
            </div>

            {/* Protocol description box */}
            <div class="mt-4 p-3 rounded-lg bg-sky-950/30 border border-sky-800/40 text-xs">
              <span class="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-semibold block mb-1">
                Protocolo Sugerido:
              </span>
              <p class="text-slate-300 leading-relaxed text-[11px]">
                {currentSymptom().estimatedAction}
              </p>
            </div>

            {/* Proforma App Notice */}
            <div class="mt-3 text-[10px] text-slate-500 font-mono flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
              <span>El técnico generará tu Proforma PDF oficial con la app móvil Moscool.</span>
            </div>
          </div>

          {/* Action WhatsApp Button */}
          <div class="mt-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-900/30 transition-all duration-200 group transform active:scale-[0.99]"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Enviar Diagnóstico vía WhatsApp</span>
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <p class="text-[11px] text-center text-slate-400 mt-2">
              Sin compromiso • Coordinación directa con el taller
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
