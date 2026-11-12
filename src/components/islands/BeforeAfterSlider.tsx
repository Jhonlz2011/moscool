import { createSignal } from "solid-js";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider(props: BeforeAfterSliderProps) {
  const [position, setPosition] = createSignal(50);
  const [isDragging, setIsDragging] = createSignal(false);
  let containerRef: HTMLDivElement | undefined;

  const handleMove = (clientX: number) => {
    if (!containerRef) return;
    const rect = containerRef.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  };

  const handlePointerDown = (e: PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    if (containerRef) {
      containerRef.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (isDragging()) {
      handleMove(e.clientX);
    }
  };

  const handlePointerUp = (e: PointerEvent) => {
    setIsDragging(false);
    if (containerRef && containerRef.hasPointerCapture(e.pointerId)) {
      containerRef.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div class="w-full max-w-4xl mx-auto">
      <div
        ref={containerRef}
        class="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950 select-none shadow-2xl touch-none cursor-ew-resize group"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Before Layer (Base) */}
        <div class="w-full relative">
          <img
            src={props.beforeSrc}
            alt={props.beforeAlt || "Antes del mantenimiento"}
            class="w-full h-auto block object-cover aspect-[4/3] pointer-events-none"
            loading="lazy"
          />
          {/* Label Antes */}
          <div class="absolute top-4 left-4 z-10">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-red-950/90 text-red-300 border border-red-700/60 backdrop-blur-md shadow-lg">
              <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              {props.beforeLabel || "Antes: Con Moho"}
            </span>
          </div>
        </div>

        {/* After Layer (Clipped Overlay) */}
        <div
          class="absolute inset-0 overflow-hidden pointer-events-none"
          style={{
            "clip-path": `inset(0 0 0 ${position()}%)`,
          }}
        >
          <img
            src={props.afterSrc}
            alt={props.afterAlt || "Después del mantenimiento"}
            class="w-full h-auto block object-cover aspect-[4/3] pointer-events-none"
            loading="lazy"
          />
          {/* Label Después */}
          <div class="absolute top-4 right-4 z-10">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-sky-950/90 text-sky-300 border border-sky-600/60 backdrop-blur-md shadow-lg">
              <span class="w-2 h-2 rounded-full bg-sky-400"></span>
              {props.afterLabel || "Después: Sanitizado"}
            </span>
          </div>
        </div>

        {/* Divider Handle Bar */}
        <div
          class="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{ left: `${position()}%` }}
        >
          {/* Vertical line */}
          <div class="w-0.5 h-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)] -translate-x-1/2"></div>

          {/* Central Grabber Button */}
          <div class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-sky-400 text-sky-300 flex items-center justify-center shadow-xl shadow-sky-950/50 group-hover:scale-110 transition-transform">
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
              <polyline points="9 18 3 12 9 6"></polyline>
            </svg>
            <svg
              class="w-5 h-5 -ml-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
              <polyline points="15 18 21 12 15 6"></polyline>
            </svg>
          </div>
        </div>
      </div>

      {/* Helpful instruction below slider */}
      <p class="text-center text-xs text-slate-400 mt-3 font-mono">
        Arrastra la barra lateralmente con el cursor o el dedo para comparar la higienización profunda.
      </p>
    </div>
  );
}
