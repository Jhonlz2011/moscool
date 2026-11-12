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

  const whatsappUrl = createMemo(() => {
    const equip = currentEquipment();
    const symptom = currentSymptom();
    const sector = clientSector().trim();

    const lines = [
      `*SOLICITUD DE ASISTENCIA TÉCNICA - SERVICIO TÉCNICO MENDOZA*`,
      `🔧 *Equipo:* ${equip.name}`,
      `📏 *Capacidad:* ${selectedCapacity()}`,
      `⚠️ *Falla observada:* ${symptom.label}`,
      sector ? `📍 *Sector / Ciudad:* ${sector}` : null,
      `📄 *Solución estimada:* ${symptom.estimatedAction}`,
      ``,
      `Hola, he seleccionado esta información en su sitio web y deseo coordinar una visita técnica a domicilio para la revisión y proforma.`,
    ].filter(Boolean);

    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
  });

  return (
    <div class="w-full rounded-2xl bg-slate-900 border border-slate-800 p-6 md:p-8 shadow-xl">
      {/* Header */}
      <div class="pb-6 border-b border-slate-800">
        <h3 class="text-xl md:text-2xl font-bold text-white tracking-tight">
          Simulador de Diagnóstico y Consulta Técnica
        </h3>
        <p class="text-sm text-slate-400 mt-1">
          Selecciona tu electrodoméstico y la falla observada para generar una consulta directa para la visita a domicilio.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left Column: Form Controls */}
        <div class="lg:col-span-7 space-y-6">
          {/* Step 1: Equipment */}
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              1. Tipo de Electrodoméstico
            </label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <For each={equipmentCatalog}>
                {(equip) => {
                  const isSelected = () => selectedEquipId() === equip.id;
                  return (
                    <button
                      type="button"
                      onClick={() => handleEquipmentChange(equip.id)}
                      class={`text-left p-3 rounded-xl border text-xs font-medium transition-colors flex flex-col justify-between h-20 ${
                        isSelected()
                          ? "bg-sky-600/20 border-sky-500 text-white"
                          : "bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      <span class="font-semibold block leading-tight">{equip.name}</span>
                      <span class={`text-[10px] ${isSelected() ? "text-sky-400 font-semibold" : "text-slate-500"}`}>
                        {isSelected() ? "Seleccionado" : "Elegir"}
                      </span>
                    </button>
                  );
                }}
              </For>
            </div>
          </div>

          {/* Step 2: Capacity */}
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              2. Capacidad o Tamaño Aproximado
            </label>
            <div class="flex flex-wrap gap-2">
              <For each={currentEquipment().capacities}>
                {(cap) => {
                  const isSelected = () => selectedCapacity() === cap;
                  return (
                    <button
                      type="button"
                      onClick={() => setSelectedCapacity(cap)}
                      class={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                        isSelected()
                          ? "bg-sky-600 text-white border-sky-500 font-semibold"
                          : "bg-slate-800 text-slate-300 border-slate-700 hover:text-white"
                      }`}
                    >
                      {cap}
                    </button>
                  );
                }}
              </For>
            </div>
          </div>

          {/* Step 3: Symptom */}
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              3. Falla o Anomalía Detectada
            </label>
            <div class="space-y-2 max-h-56 overflow-y-auto pr-1">
              <For each={currentEquipment().symptoms}>
                {(sym) => {
                  const isSelected = () => selectedSymptomId() === sym.id;
                  return (
                    <button
                      type="button"
                      onClick={() => setSelectedSymptomId(sym.id)}
                      class={`w-full text-left p-3 rounded-xl border text-xs transition-colors flex items-start justify-between gap-3 ${
                        isSelected()
                          ? "bg-slate-800 border-sky-500 text-white"
                          : "bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800/70"
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
                    </button>
                  );
                }}
              </For>
            </div>
          </div>

          {/* Optional: Sector Input */}
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Sector o Ciudad (Guayaquil / Samborondón / Durán)
            </label>
            <input
              type="text"
              placeholder="Ej: Samborondón, Alborada, Urdesa, Durán..."
              value={clientSector()}
              onInput={(e) => setClientSector(e.currentTarget.value)}
              class="w-full bg-slate-800 border border-slate-700 text-white text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-sky-500 placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Right Column: Summary Card */}
        <div class="lg:col-span-5 flex flex-col justify-between">
          <div class="rounded-xl bg-slate-950 border border-slate-800 p-5 space-y-4">
            <div class="pb-3 border-b border-slate-800">
              <span class="text-xs font-semibold uppercase text-slate-300 tracking-wider">
                Resumen de tu Consulta
              </span>
            </div>

            <div class="space-y-3 text-xs">
              <div class="flex justify-between py-1 border-b border-slate-900">
                <span class="text-slate-400">Equipo:</span>
                <span class="font-medium text-white text-right">{currentEquipment().name}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-900">
                <span class="text-slate-400">Capacidad:</span>
                <span class="font-medium text-slate-200">{selectedCapacity()}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-900">
                <span class="text-slate-400">Tiempo de atención estimado:</span>
                <span class="font-medium text-slate-200">{currentSymptom().typicalDuration}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-900">
                <span class="text-slate-400">Garantía por escrito:</span>
                <span class="font-semibold text-emerald-400">30 Días de Garantía</span>
              </div>
            </div>

            <div class="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs">
              <span class="text-[11px] font-semibold text-slate-300 block mb-1">
                Intervención recomendada:
              </span>
              <p class="text-slate-400 text-xs leading-relaxed">
                {currentSymptom().estimatedAction}
              </p>
            </div>

            <div class="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
              <span>📄</span>
              <span>El técnico emitirá tu proforma digital en PDF durante la revisión.</span>
            </div>
          </div>

          {/* Action Button */}
          <div class="mt-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-emerald-950/40"
            >
              <span>Consultar por WhatsApp (+593 99 006 8605)</span>
            </a>
            <p class="text-[11px] text-center text-slate-500 mt-2">
              Atención a domicilio en Guayaquil, Samborondón y Durán
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
