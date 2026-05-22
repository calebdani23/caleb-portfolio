# Backend — Guía rápida

## Qué encontrarás aquí
- Mapa del backend y sus capas.
- Puntos de entrada clave y rutas relevantes.
- Links a documentación técnica específica.

## Alcance de este documento
- Resume la superficie backend y a dónde ir según el tema.
- Si buscas primero una lectura rapida del producto y de las superficies de usuario que el backend soporta, ver `docs/PRODUCT_CONTEXT.md`.
- No define policy ni workflow; para eso usar `docs/WORKFLOWS.md`, `docs/POLICY_SKILLS_MCP_ENFORCEMENT.md` y `policy/agent_task_matrix.yaml`.

## Estructura
- `backend/app/routers/`: endpoints por dominio.
- `backend/app/services/`: lógica de negocio.
- `backend/app/clients/`: integraciones externas.
- `backend/app/schemas/`: modelos Pydantic.
- `backend/tests/`: pruebas.
- `backend/app/main.py`: app FastAPI y configuración global.

## Nota rápida: assistant backend-owned
- El dominio `backend/app/routers/ai_agent/` ya no usa n8n en su path principal migrado; el backend resuelve reply/list/sales con OpenAI directo.
- La configuración base visible para esta slice es `OPENAI_API_KEY` y `OPENAI_MODEL`.
- La primera migración del assistant fue backend-only y no necesitó cambio de DB.

## Referencias específicas
- `docs/PRODUCT_CONTEXT.md`
- `backend/AGENTS.md`
- `backend/docs/DB_SCHEMA_SUMMARY.md`
- `backend/docs/QA_CHECKLIST.md`
- `backend/docs/FRONTEND_BACKEND_RECONFIG_PLAN.md`
- `backend/docs/FULLSTACK_ALIGNMENT_AUDIT.md`
- `docs/COMMANDS.md`
