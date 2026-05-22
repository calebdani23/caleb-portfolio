# Frontend — Guía rápida

## Qué encontrarás aquí
- Estructura del frontend (App Router y UI).
- Ubicación del cliente API y tipos.
- Referencias a planes de reconfiguración.

## Alcance de este documento
- Resume la superficie frontend y sus puntos de entrada.
- Si necesitas contexto rapido de producto antes de entrar al App Router, ver `docs/PRODUCT_CONTEXT.md`.
- No define policy ni workflow; para eso volver a `docs/WORKFLOWS.md`, `docs/POLICY_SKILLS_MCP_ENFORCEMENT.md` y `policy/agent_task_matrix.yaml`.

## Estructura
- `frontend/src/app/`: rutas y layouts (App Router).
- `frontend/src/components/`: UI reutilizable.
- `frontend/src/lib/`: helpers y cliente API.
- `frontend/src/features/`: lógica por dominio.
- `frontend/src/types/`: tipos compartidos.
- Cliente API: `frontend/src/lib/api/apiClient.ts`.

## Referencias específicas
- `docs/PRODUCT_CONTEXT.md`
- `ZALMAR_FRONTEND_RECONFIG_PLAN.md`
- `backend/docs/FRONTEND_BACKEND_RECONFIG_PLAN.md`
- `docs/COMMANDS.md`
