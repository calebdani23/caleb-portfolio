import { projects } from "./projects";

export type CaseStudySection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  status: string;
  role: string;
  stack: string[];
  highlights: string[];
  flow: string[];
  gallery?: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  documents?: Array<{
    label: string;
    href: string;
    description: string;
  }>;
  sections: {
    problem: CaseStudySection;
    solution: CaseStudySection;
    architecture: CaseStudySection;
    challenges: CaseStudySection;
    decisions: CaseStudySection;
    result: CaseStudySection;
    learnings: CaseStudySection;
    nextSteps: CaseStudySection;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "zalmar-travel",
    title: "Zalmar Travel",
    eyebrow: "Proyecto principal · Travel tech con IA",
    summary:
      "Plataforma para planear, cotizar y reservar viajes con un plan maestro que reúne vuelos, hoteles, actividades, traslados y agentes de IA por viaje.",
    description:
      "Zalmar Travel es mi producto principal: un intento serio de convertir la complejidad operativa del viaje en una experiencia clara para cotizar, decidir y reservar.",
    status: "En desarrollo",
    role: "Product builder: arquitectura de producto, UX/UI, flujos de reserva, integración de APIs y automatización con IA.",
    stack: ["Astro/React", "TypeScript", "FastAPI", "Hotelbeds", "Duffel", "OpenAI", "Tailwind CSS"],
    highlights: ["Plan maestro", "Workspace operativo", "IA por viaje", "Cotización a voucher"],
    flow: ["Brief del viaje", "Plan maestro", "Cotización", "Hold", "Booking", "Voucher", "Seguimiento"],
    gallery: [
      {
        src: "/images/projects/zalmar-travel/01-public-inicio.png",
        alt: "Pantalla pública de inicio de Zalmar Travel",
        caption: "Entrada pública del producto: propuesta de valor y estética travel tech premium.",
      },
      {
        src: "/images/projects/zalmar-travel/10-auth-booking-plan-final.png",
        alt: "Plan de booking autenticado de Zalmar Travel",
        caption: "Evidencia de producto: el plan maestro agrupa servicios y estados para operar el viaje desde un solo lugar.",
      },
      {
        src: "/images/projects/zalmar-travel/11-auth-panel-reservas-final.png",
        alt: "Panel de reservas de Zalmar Travel",
        caption: "Evidencia operativa: panel pensado para seguimiento de reservas, estados y trazabilidad posterior a la cotización.",
      },
    ],
    documents: [
      {
        label: "Documento maestro funcional v1.1",
        href: "/docs/zalmar-travel/documento-maestro-funcional-frontend-v1.1.pdf",
        description: "PDF funcional del frontend con estructura, pantallas y criterios para diseñar la experiencia Zalmar Travel.",
      },
    ],
    sections: {
      problem: {
        title: "Problema",
        body: "Reservar un viaje completo implica comparar proveedores, coordinar disponibilidad, manejar cambios y mantener contexto. Muchas herramientas separan cada pieza y obligan a operar con pestañas, notas y decisiones dispersas.",
        bullets: ["El usuario necesita claridad antes de reservar.", "La operación necesita trazabilidad entre cotización, hold y voucher.", "La IA debe ayudar sin ocultar decisiones críticas."],
      },
      solution: {
        title: "Solución",
        body: "Diseñé Zalmar alrededor de un plan maestro: un workspace donde cada servicio vive dentro del mismo contexto del viaje, con agentes de IA que asisten comparación, explicación y próximos pasos.",
      },
      architecture: {
        title: "Arquitectura o flujo",
        body: "El flujo separa experiencia, orquestación y proveedores. La interfaz guía el plan; la capa de API normaliza servicios; los proveedores como Hotelbeds y Duffel alimentan disponibilidad; y los agentes trabajan sobre el contexto del plan.",
        bullets: ["Plan como entidad central.", "Servicios agrupados por etapas del viaje.", "Estados explícitos: cotizado, en hold, reservado, voucher emitido."],
      },
      challenges: {
        title: "Retos técnicos",
        body: "El reto no es solo consumir APIs, sino traducir respuestas complejas a una experiencia confiable. También hay que diseñar estados intermedios y errores sin romper la confianza del usuario.",
      },
      decisions: {
        title: "Decisiones importantes",
        body: "Mantener el plan maestro como núcleo evita que vuelos, hoteles y actividades se conviertan en módulos aislados. La IA acompaña decisiones, pero las acciones transaccionales deben seguir siendo explícitas y revisables.",
      },
      result: {
        title: "Resultado / estado actual",
        body: "Producto en desarrollo con arquitectura conceptual clara, dirección UX definida y prioridad en flujos reales de cotización, hold, booking y voucher.",
      },
      learnings: {
        title: "Qué aprendí",
        body: "Travel tech exige pensar en producto, operación y confianza al mismo tiempo. Un flujo bonito no basta si no explica disponibilidad, restricciones, precio y próximos pasos.",
      },
      nextSteps: {
        title: "Próximos pasos",
        body: "Profundizar integraciones, documentar estados del plan, crear prototipos navegables y convertir este case study en una bitácora visual del producto.",
      },
    },
  },
  {
    slug: "ai-booking-orchestrator",
    title: "AI Booking Orchestrator",
    eyebrow: "Arquitectura · Reservas multi-servicio",
    summary:
      "Diseño de orquestación para coordinar vuelos, hoteles, actividades y traslados como un flujo de reserva con contexto compartido.",
    description:
      "Este case study documenta la pieza que conecta intención, disponibilidad, reglas y acciones dentro de un viaje complejo.",
    status: "Concepto avanzado",
    role: "Arquitectura de flujo, definición de estados, diseño de decisiones asistidas por IA y modelado de operación.",
    stack: ["FastAPI", "REST APIs", "OpenAI", "TypeScript", "Travel APIs", "Automatización"],
    highlights: ["Orquestación", "Estados de reserva", "Contexto compartido", "Acciones revisables"],
    flow: ["Intento", "Búsqueda", "Comparación", "Reglas", "Confirmación", "Ejecución", "Auditoría"],
    sections: {
      problem: {
        title: "Problema",
        body: "Un viaje no se reserva como una sola llamada de API. Cada servicio tiene reglas, disponibilidad, tiempos y condiciones distintas; si no hay orquestación, el usuario ve fragmentos sin una decisión clara.",
      },
      solution: {
        title: "Solución",
        body: "Diseñar un orquestador que reciba el contexto del plan, consulte servicios, proponga alternativas y prepare acciones transaccionales con revisión humana antes de confirmar.",
      },
      architecture: {
        title: "Arquitectura o flujo",
        body: "El flujo opera como una máquina de estados: intención, búsqueda, selección, hold, booking, emisión y seguimiento. La IA resume y compara, pero el sistema mantiene reglas explícitas.",
        bullets: ["Separar recomendación de acción transaccional.", "Registrar razón de cada alternativa.", "Evitar confirmar servicios sin estado verificable."],
      },
      challenges: {
        title: "Retos técnicos",
        body: "Manejar fallos parciales, expiración de tarifas, diferencias entre proveedores y respuestas que cambian entre búsqueda y reserva.",
      },
      decisions: {
        title: "Decisiones importantes",
        body: "Priorizar trazabilidad sobre magia: cada recomendación debe poder explicarse y cada acción debe tener estado, proveedor y evidencia.",
      },
      result: {
        title: "Resultado / estado actual",
        body: "Concepto listo para convertirse en módulo operativo dentro de Zalmar Travel y para guiar prototipos de booking reales.",
      },
      learnings: {
        title: "Qué aprendí",
        body: "La IA aporta más valor cuando reduce carga cognitiva y no cuando intenta reemplazar reglas críticas de reserva.",
      },
      nextSteps: {
        title: "Próximos pasos",
        body: "Modelar contratos de API, definir estados mínimos y probar escenarios con tarifas expiradas, cambios de disponibilidad y reservas incompletas.",
      },
    },
  },
  {
    slug: "visual-runner-server",
    title: "Visual Runner Server",
    eyebrow: "Infraestructura · Automatización visual",
    summary:
      "Servidor propio para ejecutar navegación real, validaciones visuales y flujos de prueba que ayuden a construir productos con más confianza.",
    description:
      "Un laboratorio de infraestructura para que los agentes y herramientas no solo lean código, sino también prueben experiencias en navegador.",
    status: "Infraestructura en uso",
    role: "Configuración de servidor, automatización, red privada, flujos de validación y soporte a agentes de desarrollo.",
    stack: ["Ubuntu Server", "CasaOS", "Tailscale", "SMB", "Docker", "Automatización", "Agentes"],
    highlights: ["Servidor propio", "Red privada", "Pruebas visuales", "Soporte a agentes"],
    flow: ["Deploy local", "Navegación", "Captura", "Validación", "Feedback", "Iteración"],
    sections: {
      problem: {
        title: "Problema",
        body: "Muchos errores de producto no aparecen en una lectura de código: se detectan navegando, viendo estados, probando layouts y validando si el flujo se entiende.",
      },
      solution: {
        title: "Solución",
        body: "Crear un entorno propio para ejecutar pruebas visuales, navegación real y validación de interfaces con apoyo de agentes y herramientas automatizadas.",
      },
      architecture: {
        title: "Arquitectura o flujo",
        body: "El servidor funciona como laboratorio accesible por red privada, con servicios contenedorizados y rutas de trabajo para ejecutar, observar y ajustar productos en desarrollo.",
        bullets: ["Acceso seguro mediante red privada.", "Servicios aislados cuando conviene.", "Validación visual como paso de calidad, no como adorno."],
      },
      challenges: {
        title: "Retos técnicos",
        body: "Equilibrar seguridad, facilidad de acceso y estabilidad sin convertir el entorno en una pieza más compleja que el producto que ayuda a validar.",
      },
      decisions: {
        title: "Decisiones importantes",
        body: "Mantener la infraestructura simple y útil: primero navegación real y feedback visual; después automatizaciones más sofisticadas cuando el flujo lo justifique.",
      },
      result: {
        title: "Resultado / estado actual",
        body: "Infraestructura activa como parte del laboratorio personal de producto, con foco en acelerar revisión visual y pruebas manuales asistidas.",
      },
      learnings: {
        title: "Qué aprendí",
        body: "Tener servidores propios cambia la forma de aprender: obliga a entender red, despliegue, permisos y operación, no solo frontend.",
      },
      nextSteps: {
        title: "Próximos pasos",
        body: "Documentar flujos repetibles, mejorar observabilidad ligera y conectar validaciones a proyectos como Zalmar Travel y este portafolio.",
      },
    },
  },
  {
    slug: "travel-booking-ux-system",
    title: "Travel Booking UX System",
    eyebrow: "UX/UI · Sistema de reservas",
    summary:
      "Sistema conceptual de pantallas, estados y decisiones para que buscar, cotizar y reservar viajes se sienta claro, moderno y confiable.",
    description:
      "Una exploración de UX para convertir procesos densos de travel tech en interfaces que expliquen qué está pasando y qué decisión sigue.",
    status: "Case study conceptual",
    role: "Diseño de experiencia, arquitectura de información, estados UI, copy de producto y flujos de decisión.",
    stack: ["Wireframes", "Design systems", "User flows", "Booking UX", "Tailwind CSS", "Prototipado"],
    highlights: ["Estados claros", "Confianza", "Comparación", "Flujos multi-servicio"],
    flow: ["Búsqueda", "Resultados", "Comparación", "Cotización", "Revisión", "Reserva", "Voucher"],
    gallery: [
      {
        src: "/images/projects/travel-booking-ux-system/08-auth-viaje-comparar-final.png",
        alt: "Pantalla de comparación de viaje en el sistema UX",
        caption: "Patrón UX: comparación de alternativas con jerarquía visual para reducir carga cognitiva antes de decidir.",
      },
      {
        src: "/images/projects/travel-booking-ux-system/10-auth-booking-plan-final.png",
        alt: "Pantalla de plan de booking del sistema UX",
        caption: "Patrón UX: estructura de plan que muestra cómo ordenar servicios, pasos y decisiones antes de reservar.",
      },
    ],
    sections: {
      problem: {
        title: "Problema",
        body: "Las interfaces de reserva suelen esconder demasiadas reglas: cambios de precio, disponibilidad, políticas, vencimientos y pasos posteriores. Eso genera fricción justo cuando el usuario necesita confianza.",
      },
      solution: {
        title: "Solución",
        body: "Diseñar un sistema UX con estados explícitos, cards comparables, mensajes honestos y una progresión clara desde búsqueda hasta voucher.",
      },
      architecture: {
        title: "Arquitectura o flujo",
        body: "El sistema divide la experiencia en momentos: explorar opciones, entender diferencias, confirmar condiciones, reservar y recibir documentación final.",
        bullets: ["Cada card debe explicar precio, disponibilidad y restricciones.", "Los estados de carga y error deben ser específicos.", "El voucher debe cerrar el ciclo con claridad."],
      },
      challenges: {
        title: "Retos técnicos",
        body: "Diseñar para información incompleta o cambiante sin que la UI parezca rota, ambigua o demasiado técnica.",
      },
      decisions: {
        title: "Decisiones importantes",
        body: "Usar microcopy directo, jerarquía fuerte y componentes que puedan representar estados reales del negocio, no solo vistas ideales.",
      },
      result: {
        title: "Resultado / estado actual",
        body: "Sistema conceptual que alimenta decisiones de Zalmar Travel y sirve como base para prototipos navegables de booking.",
      },
      learnings: {
        title: "Qué aprendí",
        body: "En travel UX, la estética importa, pero la confianza nace de explicar bien restricciones, estados y consecuencias.",
      },
      nextSteps: {
        title: "Próximos pasos",
        body: "Convertir patrones clave en componentes, probarlos con datos simulados y validar qué información necesita el usuario antes de reservar.",
      },
    },
  },
];

export const caseStudySlugs = caseStudies.map((caseStudy) => caseStudy.slug);

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudyProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
