Trabaja únicamente dentro de este repositorio:

/home/calebdani/srv/projects/caleb-portfolio

Objetivo general:
Desarrollar mi portafolio web personal como una página moderna, dinámica, minimalista, estética y con una experiencia de usuario llamativa. El sitio debe representar mi perfil como constructor de productos digitales con IA, travel tech, automatización, servidores propios, UX/UI y desarrollo de software.

Este portafolio no debe sentirse como un CV genérico. Debe sentirse como una experiencia narrativa, visual y profesional que comunique quién soy, qué estoy construyendo y por qué mis proyectos son únicos.

Stack base:
- Astro
- TypeScript
- Tailwind CSS
- React solo para componentes interactivos necesarios
- Sin backend
- Sin base de datos
- Sin autenticación
- Sitio rápido, responsive y preparado para deploy estático

Reglas estrictas:
- No trabajar fuera del repo.
- No usar sudo.
- No instalar paquetes globales.
- No modificar archivos del sistema.
- No tocar rutas fuera de /home/calebdani/srv/projects/caleb-portfolio.
- No hacer git push.
- No hacer commits sin pedirme confirmación.
- Mantener dependencias locales en package.json.
- Antes de instalar una dependencia nueva, justificar brevemente por qué es necesaria.
- Después de cambios importantes, ejecutar npm run build.
- Si algo falla, analizar el error y corregirlo sin cambiar el alcance del proyecto.

Estilo visual:
- Minimalista, elegante y moderno.
- Inspiración: AI + travel tech + tropical premium + dark elegant.
- Fondo oscuro o neutro profundo.
- Acentos en tonos aqua, cyan, azul profundo, arena o blanco cálido.
- Cards limpias con buen espaciado.
- Animaciones suaves, no exageradas.
- Microinteracciones en botones, cards, navegación y secciones.
- UX clara, con jerarquía visual fuerte.
- Diseño responsive impecable para móvil, tablet y desktop.
- Debe verse profesional, pero también personal y memorable.

Personalidad del sitio:
- Ambicioso, moderno y humano.
- Enfocado en construir productos reales, no solo aprender tecnologías.
- Debe transmitir que soy una persona autodidacta, estratégica, técnica y orientada a producto.
- Debe conectar IA, software, diseño, automatización y travel tech.

Narrativa principal:
Soy Caleb Perez, un builder de productos digitales que combina inteligencia artificial, automatización, desarrollo web, diseño de producto, servidores propios e integraciones reales para construir experiencias útiles y diferentes.

Actualmente mi proyecto principal es Zalmar Travel: una plataforma AI-enabled para planear, cotizar y reservar viajes, integrando proveedores como Hotelbeds y Duffel, con concepto de plan maestro, workspace operativo, flujos de booking y agentes de IA por viaje.

Secciones obligatorias de la home:
1. Hero principal
2. Sobre mí
3. Proyectos destacados
4. Proyecto principal: Zalmar Travel
5. Experiencia / journey personal
6. Stack técnico
7. Forma de trabajo
8. Contacto

Estructura sugerida de la home:

1. Hero principal
Debe incluir:
- Nombre: Caleb Perez
- Rol sugerido: AI Product Builder / Full-Stack Explorer / Travel Tech Builder
- Frase principal potente.
- Subtítulo que explique mi combinación de IA, software, producto, automatización y travel tech.
- CTAs:
  - Ver proyectos
  - Contactarme
  - GitHub / LinkedIn si existen placeholders

Ejemplo de copy, puedes mejorarlo:
“Construyo productos digitales con IA, automatización y criterio de producto.”

Subcopy:
“Combino desarrollo web, APIs, servidores propios, diseño UX/UI y agentes de IA para convertir ideas complejas en experiencias digitales reales.”

2. Sobre mí
Debe contar una historia breve:
- Soy de México.
- Me interesa construir productos reales con tecnología.
- Mi camino no ha sido lineal, pero eso me ha dado visión práctica.
- He explorado áreas como finanzas, ingeniería, tecnología, negocios digitales, IA y desarrollo de software.
- Me enfoco en aprender construyendo.

No hacerlo demasiado largo. Debe ser claro, elegante y humano.

3. Proyectos destacados
Crear cards para:
- Zalmar Travel
- AI Booking Orchestrator
- Visual Runner Server
- Travel Booking UX System
- Personal Portfolio System

Cada card debe tener:
- Nombre
- Categoría
- Descripción breve
- Tecnologías o conceptos clave
- Estado: En desarrollo / Concepto / MVP / Infraestructura / Case study
- Link placeholder a detalle

4. Sección especial de Zalmar Travel
Debe sentirse como el proyecto principal del portafolio.
Explicar:
- Plataforma travel tech AI-enabled.
- Plan maestro que agrupa vuelos, hoteles, actividades y traslados.
- Workspace operativo.
- Integraciones con Hotelbeds y Duffel.
- Agentes de IA por plan/viaje.
- Flujo de cotización, hold, booking y voucher.
- Enfoque UX/UI para una experiencia moderna.

Debe ser visualmente más fuerte que las demás secciones.

5. Journey / experiencia
Crear una línea de tiempo visual, no aburrida.
Eventos sugeridos:
- Primeros intereses en negocios y tecnología.
- Exploración académica no lineal.
- Aprendizaje autodidacta con cursos y práctica.
- Primeros proyectos digitales.
- Construcción de Zalmar Travel.
- Configuración de servidores propios y automatización.
- Desarrollo de agentes y herramientas para acelerar producto.

6. Stack técnico
Agrupar por categorías:
- Frontend: Astro, React, TypeScript, Tailwind
- Backend / APIs: FastAPI, integraciones, REST APIs
- AI / Agents: OpenCode, Gentle-AI, OpenAI, agentes por flujo
- Travel Tech: Hotelbeds, Duffel, booking flows
- Infraestructura: Ubuntu Server, CasaOS, Tailscale, SMB, Docker
- Producto / UX: wireframes, design systems, user flows, booking UX

7. Forma de trabajo
Debe explicar cómo construyo:
- De problema a producto.
- Diseño primero la experiencia.
- Creo flujos funcionales.
- Integro APIs reales.
- Automatizo procesos.
- Itero con agentes de IA.
- Valido con pruebas reales.

8. Contacto
Sección simple con:
- Email: calebdani@icloud.com
- GitHub placeholder
- LinkedIn placeholder
- Mensaje breve para colaborar o conversar.

Páginas internas recomendadas:
Crear rutas para case studies:

/proyectos/zalmar-travel
/proyectos/ai-booking-orchestrator
/proyectos/visual-runner-server
/proyectos/travel-booking-ux-system

Cada case study debe tener:
- Resumen
- Problema
- Solución
- Mi rol
- Stack
- Arquitectura o flujo
- Retos técnicos
- Decisiones importantes
- Resultado / estado actual
- Qué aprendí
- Próximos pasos

Primera fase de implementación:
1. Analizar la estructura actual del repo.
2. Revisar package.json, astro.config.mjs, src y public.
3. Proponer un plan breve de implementación por fases.
4. Implementar primero la home completa con diseño pulido.
5. Crear componentes reutilizables:
   - BaseLayout
   - Hero
   - SectionHeader
   - ProjectCard
   - FeaturedProject
   - Timeline
   - TechStack
   - ContactSection
   - Navigation
   - Footer
6. Crear archivo central de datos para proyectos y stack:
   - src/data/projects.ts
   - src/data/stack.ts
   - src/data/timeline.ts
7. Mantener textos editables y ordenados.
8. Ejecutar npm run build.
9. Reportar archivos cambiados y próximos pasos.

Segunda fase:
1. Crear páginas internas de proyectos.
2. Crear layout para case studies.
3. Mejorar navegación interna.
4. Agregar metadata SEO por página.
5. Agregar Open Graph básico.
6. Ejecutar npm run build.

Tercera fase:
1. Pulir responsive.
2. Mejorar microinteracciones.
3. Revisar accesibilidad básica.
4. Optimizar performance.
5. Crear README del proyecto con:
   - Descripción
   - Stack
   - Instalación
   - Desarrollo
   - Build
   - Deploy
6. Ejecutar npm run build.

Criterios de calidad:
- El diseño debe verse premium, no como plantilla genérica.
- El contenido debe sentirse personal y real.
- El código debe ser limpio y modular.
- Las secciones deben tener buena jerarquía visual.
- El sitio debe funcionar bien en móvil.
- No debe haber textos genéricos tipo lorem ipsum.
- No saturar con animaciones.
- No usar imágenes externas obligatorias.
- Usar placeholders elegantes cuando falten assets.
- Todo debe compilar sin errores.

Antes de escribir código:
Dame un plan breve con:
1. Diagnóstico actual del repo.
2. Estructura propuesta.
3. Archivos que vas a crear o modificar.
4. Dependencias que necesitas, si aplica.
5. Orden de ejecución.

Después de que apruebe o si el plan es suficientemente claro, implementa la Fase 1.
