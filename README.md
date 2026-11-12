# Servicio Técnico Mendoza - Web

Plataforma web oficial para **Servicio Técnico Mendoza** (Climatización y Línea Blanca a Domicilio en Guayaquil, Samborondón y Durán, Ecuador), desarrollada con **Astro 7**, **Tailwind CSS**, componentes interactivos en **SolidJS** y las mejores prácticas de **SEO técnico** y accesibilidad.

---

## 🚀 Tecnologías Principales

- **Framework Web:** [Astro](https://astro.build/) (v7.4+) con arquitectura SSG ultra rápida.
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (v4.3+) con `@tailwindcss/vite` y paleta sobria de taller (*Deep Slate Navy*, *Electric Cobalt*, *Ice Slate*).
- **Islas Interactivas:** [SolidJS](https://www.solidjs.com/) para el simulador de diagnóstico y cotización directa por WhatsApp.
- **Tipado:** TypeScript 100% estricto sin errores.
- **Iconografía & Assets:** Logotipo maestro de la aplicación móvil integrado en `public/brand/logo.png`.
- **SEO & Datos Estructurados:**
  - Microdatos Schema.org: `LocalBusiness`, `HVACBusiness`, `OfferCatalog`, y `FAQPage`.
  - Cobertura local: Guayaquil, Samborondón y Durán.
  - Open Graph y Twitter Cards dinámicas.
  - Sitemap XML automático (`@astrojs/sitemap`).

---

## 🛠️ Estructura del Proyecto

```
moscool_web/
├── public/
│   ├── brand/
│   │   ├── logo.png             # Logotipo oficial
│   │   └── logo-app.jpg         # Isotipo secundario
│   ├── favicon.svg              # Isotipo vectorial
│   ├── robots.txt               # Directivas para rastreadores
│   └── site.webmanifest         # Configuración PWA
├── src/
│   ├── components/
│   │   ├── islands/
│   │   │   └── DiagnosticProformaCalculator.tsx # Simulador interactivo SolidJS
│   │   ├── layout/
│   │   │   ├── Navbar.astro                     # Navegación con contacto real
│   │   │   ├── Footer.astro                     # Footer con datos de Ecuador
│   │   │   └── FloatingEmergencyBar.astro       # Barra fija móvil (Llamar/WhatsApp)
│   │   └── sections/
│   │       ├── Hero.astro                       # Mensaje claro + muestra de Proforma PDF
│   │       ├── ServicesGrid.astro               # 4 categorías de equipos de la app
│   │       ├── DiagnosticSection.astro          # Contenedor del simulador
│   │       ├── ServiceGuarantee.astro           # Respaldo, 30 días de garantía y proforma PDF
│   │       ├── ProformaAppSpotlight.astro       # Cómo la app móvil emite tu proforma en PDF
│   │       ├── CoverageAreas.astro              # Cobertura: Guayaquil, Samborondón y Durán
│   │       ├── FAQSection.astro                 # Preguntas frecuentes técnicas
│   │       └── FinalCta.astro                   # Conversión directa por teléfono y WhatsApp
│   ├── data/
│   │   ├── siteConfig.ts                        # Configuración central del negocio
│   │   ├── equipment.ts                         # Catálogo de electrodomésticos y fallas
│   │   ├── services.ts                          # Servicios técnicos reales
│   │   ├── coverage.ts                          # Guayaquil, Samborondón y Durán
│   │   └── faqs.ts                              # Preguntas frecuentes técnicas
│   ├── layouts/
│   │   └── BaseLayout.astro                     # Head, Meta SEO y JSON-LD
│   ├── pages/
│   │   ├── index.astro                          # Landing page principal
│   │   └── 404.astro                            # Página de error
│   └── styles/
│       └── global.css                           # Tailwind CSS
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 📦 Comandos de Desarrollo

```bash
# Iniciar servidor local de desarrollo
bun run dev

# Verificación de tipos estricta (TypeScript + Astro)
bun run check

# Compilar para producción (SSG estático en /dist)
bun run build

# Previsualizar la compilación de producción localmente
bun run preview
```
