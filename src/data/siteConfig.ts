export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string; // international digits only
  whatsappMessageDefault: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  priceRange: string;
  warrantyPeriod: string;
  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
    dark: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Moscool",
  legalName: "Servicio Técnico Mendoza - Moscool",
  tagline: "Climatización y Línea Blanca con Precisión de Grado Industrial",
  description: "Especialistas certificados en reparación, mantenimiento e instalación de Aires Acondicionados Split e Inverter, Neveras, Lavadoras y Cocinas. Emisión inmediata de Proformas en PDF con validez y garantía por escrito.",
  url: "https://moscool.zelys.app",
  phone: "+584120000000",
  phoneFormatted: "+58 (412) 000-0000",
  whatsappNumber: "584120000000",
  whatsappMessageDefault: "Hola Moscool, requiero asistencia técnica especializada para un equipo.",
  email: "contacto@moscool.zelys.app",
  address: {
    street: "Av. Principal Técnica, Edif. Industrial Clima 4",
    city: "Caracas",
    state: "Distrito Capital",
    country: "VE",
    postalCode: "1010",
  },
  geo: {
    latitude: 10.4806,
    longitude: -66.9036,
  },
  openingHours: [
    "Mo-Sa 07:30-18:30",
    "Su 08:00-14:00 (Guardia de Emergencia)"
  ],
  priceRange: "$$",
  warrantyPeriod: "30 a 90 días de garantía certificada por escrito en mano de obra y repuestos.",
  brandColors: {
    primary: "#0F172A",
    secondary: "#0284C7",
    accent: "#0EA5E9",
    dark: "#0B1120",
  },
};
