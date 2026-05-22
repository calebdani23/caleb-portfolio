# Zalmar Travel - Contexto de Producto

## Que encontraras aqui
- Que es Zalmar Travel como producto fullstack para usuarios finales.
- Que problema resuelve y para quien esta pensado.
- Como encajan busqueda, plan, cotizaciones, workspace, booking y reservas dentro de una sola experiencia.

## Alcance de este documento
- Este archivo describe el producto y su propuesta operativa para usuarios finales.
- Es un documento canonico de contexto de producto.
- No define workflow interno, enforcement, policy ni gates tecnicos; esos viven en otros documentos.

## Que es Zalmar
Zalmar Travel no es solo un catalogo de viajes ni un escaparate de proveedores. Es una plataforma plan-first para descubrir, comparar, organizar, preparar booking, pagar una sola vez y gestionar reservas de un viaje compuesto por multiples servicios.

En la practica, Zalmar funciona como una capa de orquestacion entre el usuario y varios suppliers. La busqueda abre la puerta, pero el producto real vive en el sistema que transforma selecciones dispersas en un plan operativo con cotizacion principal, validacion por servicio, booking maestro y reserva consolidada.

## A quien sirve
Zalmar esta pensado para personas y grupos que no quieren resolver un viaje complejo como piezas sueltas. Sirve especialmente a usuarios que:
- quieren combinar vuelos, hospedaje, actividades y transporte dentro de un mismo viaje;
- necesitan comparar variantes antes de decidir una version principal del plan;
- valoran acompanamiento y visibilidad del estado real del viaje, no solo una compra puntual;
- quieren seguir el viaje desde la seleccion inicial hasta la reserva final desde una sola superficie.

Tambien soporta una operacion de travel planning mas guiada, donde el plan puede evolucionar antes de cerrarse como reserva final.

## Tesis central del producto
- La busqueda es solo el punto de entrada.
- El producto real es el sistema de plan, workspace, cotizaciones, booking y reservas.
- Zalmar actua como una capa inteligente de orquestacion entre usuario y proveedores.

Eso significa que Zalmar no se comporta como una OTA generica donde cada vertical termina aislada en su propia compra. En cambio, concentra el viaje en un plan vivo: el usuario descubre opciones, agrega servicios, define una cotizacion principal, prepara los datos de booking por vertical, autoriza un pago unico y termina con una reserva del plan que puede seguir gestionando despues.

## Que puede hacer el usuario hoy
Hoy la aplicacion ya permite, a nivel de producto, recorrer estas capacidades principales:

### 1. Buscar por vertical desde un hub comun
El usuario puede iniciar desde `/servicios` o desde las paginas de vertical para buscar:
- vuelos;
- hoteles;
- experiencias;
- transporte.

### 2. Explorar resultados y abrir detalle
Cada vertical tiene listado y detalle propios. La logica canonica del producto es:
- listado para explorar;
- detalle para decidir;
- accion para agregar al carrito o al plan activo.

### 3. Agregar servicios al carrito o al plan activo
Zalmar permite convertir una seleccion en parte de un borrador o de un plan activo. El carrito `/viaje` ya funciona como superficie canonica para revisar el borrador y el contenido del plan.

### 4. Crear y comparar cotizaciones dentro del plan
El plan puede tener hasta tres cotizaciones y una de ellas queda marcada como principal. La pantalla `/cotizaciones` existe para comparar variantes y decidir cual sera la base operativa del viaje.

### 5. Trabajar el viaje desde un workspace
`/viaje/workspace` no es una pantalla administrativa secundaria. Es la mesa de trabajo del plan: muestra estado general, cotizacion principal, accesos operativos y contexto para seguir avanzando.

### 6. Preparar el booking por servicio
Antes del cierre final, Zalmar ya expone superficies de booking por servicio para completar o validar datos operativos por vertical. Esto incluye el tratamiento distinto que requiere cada proveedor, por ejemplo hold de vuelos, revalidacion de hoteles o datos obligatorios de actividades y transporte.

### 7. Autorizar un pago unico y ejecutar booking del plan
El producto ya esta alineado a un booking maestro del plan donde el usuario revisa readiness, autoriza un solo pago con Stripe y deja que Zalmar procese las reservas contra cada proveedor segun la naturaleza de cada servicio.

### 8. Ver la reserva consolidada del plan
Despues del booking, el usuario puede seguir el resultado desde `/panel/reservas`, donde la experiencia deja de ser solo "que compre" y pasa a ser "que quedo confirmado, que esta parcial, y como sigo este viaje".

## Viaje canonico del usuario
El recorrido producto esperado es el siguiente:

1. Buscar servicios desde el hub o desde una vertical.
2. Revisar resultados y abrir el detalle del servicio.
3. Agregar la seleccion al carrito o al plan activo.
4. Revisar el contenido desde `/viaje`.
5. Convertir o mantener ese contenido dentro de un plan.
6. Gestionar variantes desde `/cotizaciones` y fijar una cotizacion principal.
7. Usar `/viaje/workspace` como centro operativo del plan.
8. Completar booking por servicio cuando falten datos o validaciones.
9. Entrar a `/viaje/booking/plan` para revisar el booking maestro.
10. Autorizar un pago unico.
11. Dejar que Zalmar ejecute el booking multi-proveedor.
12. Seguir la reserva consolidada del plan en `/panel/reservas`.

## Verticales de servicio

### Vuelos
Vuelos opera como vertical con logica propia. Puede requerir hold real, reprice, pasajeros y contacto antes del cierre. No se trata como una compra aislada: se integra al plan y luego se cierra desde el booking del viaje.

### Hoteles
Hospedaje aporta la base del viaje. El usuario puede buscar, seleccionar y agregar hoteles al plan, pero el cierre final depende de validaciones reales de tarifa y disponibilidad antes de reservar.

### Experiencias
Actividades y tours se integran como parte del mismo viaje, no como extras sueltos fuera del plan. El producto preserva modalidad elegida, preguntas obligatorias y contexto operativo necesario para booking.

### Transporte
Transporte cubre traslados locales necesarios para conectar el viaje. Se modela como parte del plan y puede requerir datos operativos especificos antes del cierre final.

## Como encajan planes, cotizaciones, workspace, booking y reservas

### Plan
El plan es la unidad central del producto. No es solo una carpeta ni un wishlist: es el contenedor vivo donde se organiza el viaje y se decide que version se quiere cerrar.

### Cotizaciones
Las cotizaciones representan variantes posibles del mismo plan. Sirven para comparar combinaciones y elegir una principal sin perder trazabilidad de las otras opciones.

### Workspace
El workspace es la superficie plan-first para operar el viaje. Organiza el contexto, muestra la cotizacion principal y conecta carrito, comparador, booking y reservas.

### Booking por servicio
Cada vertical puede necesitar datos y validaciones especificas antes del cierre. Por eso el producto no salta directo de "agregar" a "reservado": primero prepara cada servicio para que llegue limpio al booking maestro.

### Booking maestro
El booking del plan es el punto donde Zalmar consolida readiness, reglas de continuidad, pago unico y ejecucion multi-proveedor. Ahi se expresa mejor la tesis del producto: una sola experiencia de cierre para un viaje compuesto por varias verticales.

### Reservas
La reserva final se presenta como una lectura consolidada del plan. En lugar de dejar al usuario persiguiendo confirmaciones sueltas por vertical, Zalmar expone una vista donde el viaje reservado sigue teniendo contexto, estado y soporte.

## Que hace distinto a Zalmar frente a una OTA generica o un showcase
- No termina en "buscar y comprar un item"; organiza un viaje completo.
- No trata cada vertical como un checkout aislado; las articula dentro de un plan.
- No usa el catalogo como producto principal; lo usa como entrada a un sistema de decision y ejecucion.
- No reduce el viaje a una sola reserva puntual; mantiene workspace, variantes y seguimiento posterior.
- No oculta la complejidad operativa; la absorbe en una capa de orquestacion que unifica providers, estados y cierre.

En otras palabras: Zalmar no solo muestra inventario. Coordina discovery, seleccion, comparacion, preparacion transaccional, pago y reserva dentro de una experiencia continua.

## Limites honestos y realidades operativas
Zalmar no promete una magia abstracta por encima de las reglas reales de los proveedores. El producto opera con restricciones concretas:
- cada vertical tiene capacidades y validaciones distintas;
- vuelos, hoteles, actividades y transporte no comparten exactamente el mismo lifecycle;
- algunos servicios necesitan revalidacion antes de reservar;
- algunos servicios pueden requerir datos adicionales antes del cierre;
- el sistema ya converge a un booking maestro del plan, pero sigue respetando la realidad transaccional de cada supplier.

Por eso el producto esta pensado para acompanar una decision compleja con honestidad operativa. La experiencia busca que el usuario vea un flujo unificado, sin fingir que todos los proveedores funcionan igual.

## Resumen ejecutivo del producto
Si hubiera que resumir Zalmar en una sola idea, seria esta:

> Zalmar es una plataforma de orquestacion de viajes plan-first: usa la busqueda como entrada, pero entrega valor real al convertir selecciones de multiples verticales en un plan operable, cotizable, reservable y gestionable de punta a punta.

## Referencias relacionadas
- `docs/ABOUT_US.md`
- `docs/ARCHITECTURE.md`
- `docs/FRONTEND.md`
- `docs/BACKEND.md`
- `docs/plans/zalmar-end-to-end-booking-master-plan.md`
- `docs/plan/master-plan-booking-orchestrator-plan.md`
- `frontend/src/features/service-entry/components/ServiceSearchHub.tsx`
- `frontend/src/features/cart-confirmation/components/CartConfirmationShell.tsx`
- `frontend/src/features/plan-workspace/components/WorkspaceShell.tsx`
- `frontend/src/features/plan-quotes/components/PlanQuotesShell.tsx`
- `frontend/src/features/service-booking/components/ServiceBookingPage.tsx`
- `frontend/src/app/(site)/viaje/booking/plan/page.tsx`
- `frontend/src/app/(panel)/panel/reservas/page.tsx`
- `backend/app/routers/plans.py`
- `backend/app/routers/quotes.py`
- `backend/app/routers/booking_orders.py`
- `backend/app/routers/bookings.py`
