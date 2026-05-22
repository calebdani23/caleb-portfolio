# Arquitectura Fullstack — Zalmar Travel

## Qué encontrarás aquí
- Stack y componentes principales.
- Flujo entre frontend, backend y base de datos.
- Integraciones externas y puntos de validación con MCP.

## Alcance de este documento
- Resume la arquitectura fullstack y el reparto general de responsabilidades.
- Si primero necesitas entender qué ofrece Zalmar como producto y cómo se conecta el journey usuario, arranca por `docs/PRODUCT_CONTEXT.md`.
- No redefine policy, workflow ni gates MCP; esos viven en `docs/POLICY_SKILLS_MCP_ENFORCEMENT.md`, `docs/WORKFLOWS.md` y `policy/agent_task_matrix.yaml`.

## Regla de decisión (skills y MCP)
Antes de responder en mensajes de trabajo:
- Clasificar `task_type` con `policy/agent_task_matrix.yaml`.
- Resolver skills requeridas con ayuda de `docs/SKILLS_PATHS.md`.
- Resolver gates MCP con `docs/MCP_SERVERS.md` y aplicar el enforcement canónico en `docs/POLICY_SKILLS_MCP_ENFORCEMENT.md`.

## Stack
- Backend: FastAPI con autenticación Supabase.
- Frontend: Next.js App Router.
- DB: Supabase Postgres.
- Orquestación: backend-owned por dominio + n8n donde siga aplicando.
- Proveedores: integraciones externas (ej. Amadeus, Hotelbeds).

## Nota de assistant / Zal
- El dominio `ai_agent` ya es backend-owned para su primera migración principal: reply/list/sales se resuelven desde FastAPI y usan OpenAI directo.
- La configuración base nueva del assistant es `OPENAI_API_KEY` + `OPENAI_MODEL`.
- Esta primera migración del assistant no requirió cambio de DB.

## Flujo general
- Frontend consume API REST bajo `/v1/*`.
- Backend delega lógica externa a proveedores y, según el dominio, a servicios propios o a n8n.
- En particular, `ai_agent` ya no depende de n8n para su path principal migrado y usa backend + OpenAI directo.
- Supabase gestiona autenticación y almacenamiento.
- Context7 MCP aporta contexto técnico externo y actualizado cuando lo local no alcance.
- Stripe MCP aporta fuente de verdad para API/objetos/eventos de pagos en Stripe.
- El esquema real y RLS se validan vía Supabase MCP cuando corresponda.

## Referencias
- `docs/PRODUCT_CONTEXT.md`
- `backend/docs/FRONTEND_BACKEND_RECONFIG_PLAN.md`
- `backend/docs/FULLSTACK_ALIGNMENT_AUDIT.md`
- `ZALMAR_FRONTEND_RECONFIG_PLAN.md`
- `docs/WORKFLOWS.md`
