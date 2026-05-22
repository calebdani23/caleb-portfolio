# Fútbol intake

Los videos fuente originales de fútbol se retiraron del repo para reducir peso después de generar las versiones optimizadas públicas en `public/media/futbol/`.

Si en el futuro se necesitan nuevos cortes o una recompresión distinta, conviene volver a subir el material crudo fuera del historial principal o gestionarlo mediante almacenamiento externo/LFS.

Default status for new source uploads: `needs-review`.

## Estado actual

- `retired-source`: fuentes originales no permanecen en el repo.
- `promoted`: clips optimizados y posters existen en `public/media/futbol/` y se referencian desde `src/data/sports.ts`.

Para nuevos clips, guardar primero la fuente en intake o almacenamiento externo, revisar privacidad/contexto, comprimir para web y luego promover la copia optimizada.
