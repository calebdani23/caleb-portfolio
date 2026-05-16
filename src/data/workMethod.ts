export type WorkStep = {
  title: string;
  description: string;
};

export const workSteps: WorkStep[] = [
  {
    title: "Entiendo el problema",
    description: "Antes de abrir el editor, defino qué decisión o fricción real debe resolver el producto.",
  },
  {
    title: "Diseño la experiencia",
    description: "Mapeo pantallas, estados y momentos de confianza para que el flujo se sienta claro desde el primer uso.",
  },
  {
    title: "Construyo flujos funcionales",
    description: "Prefiero prototipos conectados y navegables sobre documentación que nunca se prueba.",
  },
  {
    title: "Integro APIs reales",
    description: "Busco que la arquitectura soporte datos, proveedores y restricciones de negocio desde temprano.",
  },
  {
    title: "Automatizo e itero con IA",
    description: "Uso agentes y scripts para acelerar validaciones, revisar UI y reducir trabajo repetitivo.",
  },
  {
    title: "Valido con pruebas reales",
    description: "Cierro el ciclo navegando, rompiendo flujos y ajustando hasta que el producto se sienta usable.",
  },
];
