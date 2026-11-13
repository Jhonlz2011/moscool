export interface ZoneCoverage {
  id: string;
  name: string;
  estimatedTime: string;
  image: string;
  tagline: string;
  sectors: string[];
}

export const coverageZones: ZoneCoverage[] = [
  {
    id: "samborondon",
    name: "Samborondón",
    estimatedTime: "1 a 2 horas",
    image: "/assets/images/places/samborondon-2.webp",
    tagline: "La Puntilla, Vía Samborondón y Ciudad Celeste",
    sectors: [
      "La Puntilla y Entre Ríos",
      "Vía Samborondón (km 1 al 14)",
      "Ciudad Celeste y La Joya",
      "Isla Mocolí y urbanizaciones privadas",
    ],
  },
  {
    id: "guayaquil",
    name: "Guayaquil",
    estimatedTime: "1 a 2 horas",
    image: "/assets/images/places/guayaquil-2.jpg",
    tagline: "Norte, Ceibos, Vía a la Costa y Centro",
    sectors: [
      "Norte (Alborada, Sauces, Samanes, Kennedy)",
      "Urdesa, Ceibos, Miraflores",
      "Vía a la Costa (Puerto Azul, Chongón)",
      "Centro y Sur de Guayaquil",
    ],
  },
  {
    id: "duran",
    name: "Durán",
    estimatedTime: "1 a 2 horas",
    image: "/assets/images/places/duran-2.jpg",
    tagline: "Ciudadelas y zonas comerciales principales",
    sectors: [
      "Urbanizaciones y ciudadelas residenciales",
      "Sectores comerciales e industriales",
      "Vía Durán-Tambo y zonas aledañas",
      "Atención técnica programada e inmediata",
    ],
  },
];
