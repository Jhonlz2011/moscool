# Moscool Web - Landing Page de Grado Industrial

Plataforma web oficial para **Moscool** (Servicio Técnico Especializado en Climatización y Línea Blanca), desarrollada con **Astro 5**, **Tailwind CSS**, componentes interactivos en **SolidJS** y las mejores prácticas de **SEO técnico** y accesibilidad.

---

## 🚀 Tecnologías Principales

- **Framework Web:** [Astro](https://astro.build/) (v5.18+) - Arquitectura Zero-JS por defecto y generación estática ultra rápida (SSG).
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (v4.3+) con `@tailwindcss/vite` y tokens personalizados de grado industrial (*Slate Navy*, *Electric Cobalt*, *Arctic Cyan*).
- **Islas Interactivas:** [SolidJS](https://www.solidjs.com/) para reactividad de alto rendimiento y cero overhead.
- **Tipado:** TypeScript 100% estricto y tipado de extremo a extremo sin errores.
- **Iconografía & Assets:** Logotipo maestro de la aplicación móvil Moscool integrado en `public/brand/logo.png`.
- **SEO & Datos Estructurados:**
  - Microdatos Schema.org multi-capa: `HVACBusiness`, `HomeAndConstructionBusiness`, `OfferCatalog`, y `FAQPage`.
  - Open Graph y Twitter Cards dinámicas.
  - Sitemap XML automático (`@astrojs/sitemap`).
  - Etiquetas canónicas y robots.txt.

---

## 🛠️ Estructura del Proyecto

```
moscool_web/
├── public/
│   ├── brand/
│   │   ├── logo.png             # Logotipo oficial de la app móvil
│   │   └── logo-app.jpg         # Isotipo secundario
│   ├── favicon.svg              # Isotipo vectorial de alto contraste
│   ├── robots.txt               # Directivas para rastreadores
│   └── site.webmanifest         # Configuración PWA y metadatos
├── src/
│   ├── components/
│   │   ├── islands/
│   │   │   └── DiagnosticProformaCalculator.tsx # Simulador interactivo en SolidJS
│   │   ├── layout/
│   │   │   ├── Navbar.astro                     # Navegación con ticker en vivo
│   │   │   ├── Footer.astro                     # NAP completo y enlaces técnicos
│   │   │   └── FloatingEmergencyBar.astro       # Barra fija móvil (Llamar/WhatsApp)
│   │   └── sections/
│   │       ├── Hero.astro                       # Telemetría de campo e impacto
│   │       ├── LiveTelemetryTicker.astro        # Métricas de vacío y refrigerante
│   │       ├── ServicesBento.astro              # Bento grid de 6 servicios técnicos
│   │       ├── DiagnosticSection.astro          # Contenedor del simulador SolidJS
│   │       ├── WhyMoscoolComparison.astro       # Estándar Moscool vs. Informal
│   │       ├── ProformaAppSpotlight.astro       # Respaldo de la App móvil y PDFs
│   │       ├── WorkflowSteps.astro              # Las 4 fases transparentes
│   │       ├── CoverageAreas.astro              # Zonas de atención y tiempos
│   │       ├── FAQSection.astro                 # Acordeón de FAQs técnicas
│   │       └── FinalCta.astro                   # Conversión de urgencia
│   ├── data/
│   │   ├── siteConfig.ts                        # Configuración central del negocio
│   │   ├── equipment.ts                         # Catálogo de electrodomésticos y fallas
│   │   ├── services.ts                          # Especificaciones e instrumental
│   │   ├── coverage.ts                          # Sectores y tiempos de respuesta
│   │   └── faqs.ts                              # Preguntas técnicas frecuentes
│   ├── layouts/
│   │   └── BaseLayout.astro                     # Head, Meta SEO y JSON-LD
│   ├── pages/
│   │   ├── index.astro                          # Landing page principal
│   │   └── 404.astro                            # Página de error técnico
│   └── styles/
│       └── global.css                           # Tailwind CSS y tokens de marca
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 📦 Comandos de Desarrollo

```bash
# Instalar dependencias con Bun
bun install

# Iniciar servidor local de desarrollo
bun run dev

# Verificación de tipos estricta (TypeScript + Astro)
bun run check

# Compilar para producción (SSG estático en /dist)
bun run build

# Previsualizar la compilación de producción localmente
bun run preview
```

---

## 📄 Características Destacadas

1. **Simulador de Diagnóstico y Proforma:** Permite al visitante elegir su equipo (Split, Nevera, Lavadora, Cocina), su síntoma y capacidad aproximada, generando un pre-diagnóstico técnico y formateando automáticamente un mensaje de WhatsApp para el taller.
2. **Proforma App Spotlight:** Destaca cómo el equipo de campo utiliza la app móvil de Moscool para emitir proformas formales en PDF con desglose de repuestos y garantía escrita de 30 a 90 días.
3. **Optimización Core Web Vitals:** Cero JavaScript inicial bloqueante. La isla interactiva de SolidJS se hidrata únicamente cuando entra en el viewport del usuario (`client:visible`).
