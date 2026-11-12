export interface ZoneCoverage {
  id: string;
  name: string;
  estimatedTime: string;
  sectors: string[];
}

export const coverageZones: ZoneCoverage[] = [
  {
    id: "guayaquil",
    name: "Guayaquil",
    estimatedTime: "1 a 2 horas",
    sectors: [
      "Norte (Alborada, Sauces, Samanes, Guayacanes)",
      "Urdesa, Ceibos, Miraflores, Kennedy",
      "Vía a la Costa (Puerto Azul, Los Ceibos, Chongón)",
      "Centro y Sur de Guayaquil",
    ],
  },
  {
    id: "samborondon",
    name: "Samborondón",
    estimatedTime: "1 a 2 horas",
    sectors: [
      "La Puntilla",
      "Vía Samborondón",
      "Ciudad Celeste",
      "Entre Ríos y urbanizaciones aledañas",
    ],
  },
  {
    id: "duran",
    name: "Durán",
    estimatedTime: "1 a 2 horas",
    sectors: [
      "Sectores residenciales y comerciales",
      "Urbanizaciones y ciudadelas principales",
    ],
  },
];
