export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  whatsappMessageDefault: string;
  email: string;
  city: string;
  country: string;
  serviceAreas: string[];
  warrantyPeriod: string;
  proformaValidity: string;
  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
    dark: string;
    light: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Servicio Técnico Mendoza",
  legalName: "Servicio Técnico Mendoza",
  tagline: "Reparación, Mantenimiento e Instalación: Neveras, Lavadoras, Secadoras, Aires Acondicionados, Cocinas a Gas y Eléctricas",
  description: "Servicio técnico profesional a domicilio en Guayaquil, Samborondón y Durán. Diagnóstico claro, presupuesto formal y garantía por escrito.",
  url: "https://zelys.app",
  phone: "+593 99 006 8605",
  phoneFormatted: "+593 99 006 8605",
  whatsappNumber: "593990068605",
  whatsappMessageDefault: "Hola, me comunico desde la página web de Servicio Técnico Mendoza. Requiero asistencia técnica para un equipo.",
  email: "serviciotecnicomendoza789@gmail.com",
  city: "Guayaquil",
  country: "Ecuador",
  serviceAreas: [
    "Guayaquil",
    "Samborondón",
    "Durán",
  ],
  warrantyPeriod: "Garantía formal por escrito en mano de obra y repuestos instalados.",
  proformaValidity: "Presupuesto formal previo sin compromiso.",
  brandColors: {
    primary: "#0F172A",
    secondary: "#0284C7",
    accent: "#0EA5E9",
    dark: "#0B1120",
    light: "#F8FAFC",
  },
};
