export interface ZoneCoverage {
  id: string;
  name: string;
  badge: string;
  avgResponseHours: string;
  sectors: string[];
}

export const coverageZones: ZoneCoverage[] = [
  {
    id: "zona-norte",
    name: "Sector Norte & Residencial",
    badge: "Despacho Prioritario",
    avgResponseHours: "1 a 2 horas",
    sectors: ["Altamira", "Los Palos Grandes", "La Castellana", "Chacao", "Las Mercedes", "El Rosal"],
  },
  {
    id: "zona-este",
    name: "Sector Este & Comercial",
    badge: "Cuadrilla Activa",
    avgResponseHours: "1.5 a 3 horas",
    sectors: ["Boleíta", "Los Dos Caminos", "La Carlota", "Macaracuay", "La California", "El Marqués"],
  },
  {
    id: "zona-sureste",
    name: "Sector Sureste & Colinas",
    badge: "Guardia Móvil",
    avgResponseHours: "2 a 3 horas",
    sectors: ["Prados del Este", "Cumbres de Curumo", "Alto Prado", "La Boyera", "El Hatillo", "La Trinidad"],
  },
  {
    id: "zona-centro-oeste",
    name: "Sector Centro & Corporativo",
    badge: "Disponibilidad Hoy",
    avgResponseHours: "2 a 4 horas",
    sectors: ["San Bernardino", "La Candelaria", "Plaza Venezuela", "El Recreo", "Bella Vista", "Montalbán"],
  },
];
