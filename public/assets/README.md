# Ficha Técnica de Producción de Assets Fotográficos
## Servicio Técnico Mendoza (Guayaquil, Samborondón, Durán)

Este documento define los requisitos visuales, técnicos y estilísticos para las fotografías reales del taller y técnicos en campo. Cada archivo reemplazará los esquemas vectoriales provisionales sin necesidad de modificar el código fuente de Astro.

---

## 1. Reglas Generales de Producción

1. **Autenticidad Real (Cero Stock Artificial):**
   - No usar modelos con herramientas de utilería plástica o sonrisas forzadas de banco de imágenes.
   - Mostrar herramientas reales de climatización y refrigeración: multímetros digitales, manifolds con mangueras roja/azul/amarilla, bombas de vacío, hidrolavadoras de baja presión para interiores, fundas impermeables con manguera de drenaje.
2. **Presentación Profesional para Urbanizaciones:**
   - Técnico con polo azul marino o camisa de trabajo impecable, limpia y sin roturas.
   - Uso de guantes de nitrilo (negros o azules) y cubrezapatos si se ingresa a salas con porcelanato o piso flotante.
   - Prohibido logos de marcas de la competencia en el uniforme.
3. **Iluminación y Encuadre:**
   - Iluminación natural diurna de sala o cocina residencial. Evitar flash directo frontal que queme los blancos de las paredes o electrodomésticos.
   - Paredes residenciales limpias (gypsum blanco, baldosas) típicas de viviendas en Samborondón, Ceibos o Vía a la Costa.
4. **Formato y Optimización:**
   - Entregar originales en formato JPG/PNG en alta resolución (mínimo 2000px de ancho).
   - Astro los procesará automáticamente a formato AVIF y WebP con compresión optimizada y dimensiones responsivas.

---

## 2. Inventario de Tomas Necesarias y Nombres de Archivo

### A. Sección Hero (Portada)
* **Archivo de Destino:** `src/assets/images/hero/tecnico-diagnostico.webp` (o `.jpg`)
* **Proporción y Tamaño Recomendado:** 16:9 o 3:2 (mínimo 1600 × 1067 px).
* **Composición:** Técnico de perfil o tres cuartos, observando con concentración la unidad interior de un aire split o el panel de control de un electrodoméstico. Sostiene un termómetro infrarrojo o multímetro. Se aprecia el ambiente limpio de una vivienda residencial.

### B. Sección de Servicios
* **Archivo 1:** `src/assets/images/services/split-mantenimiento-funda.webp`
  * **Proporción:** 4:3 (mínimo 1200 × 900 px).
  * **Composición:** Split de pared con la **funda impermeable azul o transparente instalada**, mostrando cómo el agua turbia drena por la manguera hacia el balde mientras la pared de gypsum permanece totalmente seca.
* **Archivo 2:** `src/assets/images/services/refrigeracion-no-frost.webp`
  * **Proporción:** 4:3 (mínimo 1200 × 900 px).
  * **Composición:** Puerta de congelador abierta, técnico verificando con multímetro la resistencia de deshielo o el sensor bimetálico en el evaporador trasero.
* **Archivo 3:** `src/assets/images/services/lavadora-transmision.webp`
  * **Proporción:** 4:3 (mínimo 1200 × 900 px).
  * **Composición:** Lavadora automática o centro de lavado en área de lavandería limpia. Técnico revisando la suspensión, correa o bomba de drenaje. Se observa un paño o alfombra protectora en el piso para no rayar la baldosa.
* **Archivo 4:** `src/assets/images/services/cocina-calibracion.webp`
  * **Proporción:** 4:3 (mínimo 1200 × 900 px).
  * **Composición:** Cocina empotrable o estufa con hornillas encendidas con llama azul nítida, técnico ajustando la válvula o calibrando el paso de aire.

### C. Módulo Interactivo Antes / Después (Turbina de Aire Acondicionado)
* **Archivo Antes:** `src/assets/images/before-after/split-turbina-sucio.webp`
  * **Proporción:** 4:3 (mínimo 1200 × 900 px).
  * **Composición:** Primer plano macro (close-up) de la turbina cilíndrica (rodillo ventilador interior) de un split llena de pelusa negra, moho y polvo acumulado antes del servicio.
* **Archivo Después:** `src/assets/images/before-after/split-turbina-limpio.webp`
  * **Proporción:** 4:3 idéntica a la anterior.
  * **Composición:** **Mismo ángulo y encuadre exacto**, pero con la turbina completamente lavada con desincrustante y desinfectante, mostrando el plástico negro impecable y las aletas del serpentín relucientes.

### D. Módulo de Garantía y Confianza
* **Archivo 1:** `src/assets/images/proof/funda-colectora-pared.webp`
  * **Composición:** Detalle en ángulo cerrado del borde superior de la funda protectora sellada herméticamente a la pared sin derramar humedad.
* **Archivo 2:** `src/assets/images/proof/manifold-digital-vacio.webp`
  * **Composición:** Bomba de vacío y manifold de agujas o digital conectado a los puertos de servicio de la condensadora exterior en terraza o patio.
