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
      `- Equipo: ${equip.name}`,
      `- Capacidad: ${selectedCapacity()}`,
      `- Falla observada: ${symptom.label}`,
      sector ? `- Sector / Ciudad: ${sector}` : null,
      `- Intervención recomendada: ${symptom.estimatedAction}`,
      ``,
      `Hola, he seleccionado esta información en su sitio web y deseo coordinar una visita técnica a domicilio para la revisión y presupuesto.`,
    ].filter(Boolean);

    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
  });

  return (
    <div class="w-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xl">
      <div class="pb-6 border-b border-slate-200 dark:border-slate-800">
        <h3 class="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Simulador de Diagnóstico y Consulta Técnica
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Selecciona tu electrodoméstico y la falla observada para generar una consulta directa para la visita a domicilio.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        <div class="lg:col-span-7 space-y-6">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
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
                      class={`text-left p-3 rounded-xl border text-xs font-medium  flex flex-col justify-between h-20 ${
                        isSelected()
                          ? "bg-sky-50 dark:bg-sky-600/20 border-sky-500 text-sky-950 dark:text-white ring-1 ring-sky-500"
                          : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <span class="font-semibold block leading-tight">{equip.name}</span>
                      <span class={`text-[10px] ${isSelected() ? "text-sky-600 dark:text-sky-400 font-semibold" : "text-slate-400 dark:text-slate-500"}`}>
                        {isSelected() ? "Seleccionado" : "Elegir"}
                      </span>
                    </button>
                  );
                }}
              </For>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
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
                      class={`px-3 py-1.5 rounded-lg text-xs font-medium border  ${
                        isSelected()
                          ? "bg-sky-600 text-white border-sky-500 font-semibold"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white hover:border-slate-300"
                      }`}
                    >
                      {cap}
                    </button>
                  );
                }}
              </For>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
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
                      class={`w-full text-left p-3 rounded-xl border text-xs  flex items-start justify-between gap-3 ${
                        isSelected()
                          ? "bg-sky-50/80 dark:bg-slate-800 border-sky-500 text-slate-900 dark:text-white ring-1 ring-sky-500/50"
                          : "bg-slate-50/70 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70"
                      }`}
                    >
                      <div class="flex items-start gap-2.5">
                        <span class={`mt-0.5 w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${isSelected() ? "border-sky-500 bg-sky-500" : "border-slate-300 dark:border-slate-600"}`}>
                          <Show when={isSelected()}>
                            <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
                          </Show>
                        </span>
                        <div>
                          <p class="font-medium text-slate-900 dark:text-slate-200">{sym.label}</p>
                          <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{sym.estimatedAction}</p>
                        </div>
                      </div>
                    </button>
                  );
                }}
              </For>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              Sector o Ciudad (Guayaquil / Samborondón / Durán)
            </label>
            <input
              type="text"
              placeholder="Ej: Samborondón, Alborada, Urdesa, Durán..."
              value={clientSector()}
              onInput={(e) => setClientSector(e.currentTarget.value)}
              class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-sky-500 placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
          </div>
        </div>

        <div class="lg:col-span-5 flex flex-col justify-between">
          <div class="rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-5 space-y-4">
            <div class="pb-3 border-b border-slate-200 dark:border-slate-800">
              <span class="text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 tracking-wider">
                Resumen de tu Consulta
              </span>
            </div>

            <div class="space-y-3 text-xs">
              <div class="flex justify-between py-1 border-b border-slate-200 dark:border-slate-900">
                <span class="text-slate-500 dark:text-slate-400">Equipo:</span>
                <span class="font-medium text-slate-900 dark:text-white text-right">{currentEquipment().name}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-200 dark:border-slate-900">
                <span class="text-slate-500 dark:text-slate-400">Capacidad:</span>
                <span class="font-medium text-slate-800 dark:text-slate-200">{selectedCapacity()}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-200 dark:border-slate-900">
                <span class="text-slate-500 dark:text-slate-400">Tiempo estimado in-situ:</span>
                <span class="font-medium text-slate-800 dark:text-slate-200">{currentSymptom().typicalDuration}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-200 dark:border-slate-900">
                <span class="text-slate-500 dark:text-slate-400">Garantía aplicable:</span>
                <span class="font-semibold text-emerald-600 dark:text-emerald-400">Garantía por Escrito</span>
              </div>
            </div>

            <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
              <span class="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                Intervención recomendada:
              </span>
              <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                {currentSymptom().estimatedAction}
              </p>
            </div>

            <div class="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2 pt-1">
              <svg class="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
              <span>El técnico emitirá tu presupuesto detallado durante la revisión.</span>
            </div>
          </div>

          <div class="mt-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm  shadow-lg shadow-emerald-950/40"
            >
              <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
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
