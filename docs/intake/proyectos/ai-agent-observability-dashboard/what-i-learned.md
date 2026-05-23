# What I Learned — AI Agent Observability Dashboard

## 1. Observar agentes no es solo hacer logging

Uno de los aprendizajes principales de este proyecto es que observar agentes de IA no significa simplemente guardar logs. Un log normalmente responde a la pregunta: “¿qué evento ocurrió?”. La observabilidad debe responder preguntas más amplias:

- ¿por qué ocurrió?
- ¿qué paso del run causó el problema?
- ¿qué herramienta participó?
- ¿el sistema se recuperó con un retry?
- ¿el resultado final fue confiable?
- ¿debería intervenir una persona?

En un sistema con agentes, el resultado final puede ocultar muchos comportamientos intermedios. Por eso, un dashboard útil debe mostrar la historia completa de la ejecución, no solo el mensaje final.

## 2. Las señales importantes no son únicamente errores

En un backend tradicional se suele monitorear status codes, excepciones, CPU, memoria o latencia. En agentes de IA también importan señales más específicas:

- runs completados,
- runs fallidos,
- runs con advertencias,
- reintentos,
- duración por paso,
- herramientas usadas,
- errores por categoría,
- puntos de revisión humana,
- cantidad de pasos ejecutados,
- operaciones más lentas,
- operaciones más inestables,
- frecuencia de fallos por agente o flujo.

Estas señales ayudan a entender si el agente no solo “funciona”, sino si funciona de forma consistente y confiable.

## 3. Ejecución y confiabilidad no son lo mismo

Un run puede terminar con estado `success` y aun así no ser completamente confiable. Por ejemplo, puede haber requerido demasiados reintentos, haber omitido una validación, haber usado una herramienta de baja confianza o haber generado una respuesta que requiere revisión humana.

Por eso, el dashboard separa la idea de ejecución de la idea de confiabilidad:

- **Ejecución**: el flujo terminó o no terminó.
- **Confiabilidad**: el flujo terminó con señales suficientes de calidad, estabilidad y trazabilidad.

Esta diferencia es importante porque muchos sistemas con IA fallan de manera silenciosa. No siempre se caen; a veces producen una salida plausible pero débil.

## 4. Human review debe ser parte del diseño, no un parche

La revisión humana no debe aparecer solo cuando algo sale mal. En sistemas con IA, especialmente cuando hay decisiones sensibles o salidas de alto impacto, la revisión humana puede ser un estado normal del ciclo de vida.

El dashboard incorpora la idea de puntos de revisión humana para identificar:

- ejecuciones que necesitan aprobación,
- salidas con baja confianza,
- errores que no deben resolverse automáticamente,
- decisiones que requieren criterio humano,
- y flujos donde el agente debe pausar antes de continuar.

Esto ayuda a construir sistemas donde la IA asiste, pero no actúa sin control cuando el riesgo es alto.

## 5. Evitar black box behavior requiere trazas comprensibles

El comportamiento de caja negra aparece cuando solo vemos el input y el output. Para reducirlo, el sistema debe capturar una traza clara de la ejecución:

1. tarea recibida,
2. pasos ejecutados,
3. herramientas llamadas,
4. eventos generados,
5. errores o advertencias,
6. reintentos,
7. resumen final,
8. estado de revisión.

Una traza no debe exponer información sensible, pero sí debe explicar suficientemente el comportamiento del agente. El objetivo es que un desarrollador o reviewer pueda entender qué ocurrió sin acceder a payloads privados.

## 6. La observabilidad también mejora el diseño del producto

Al construir el dashboard entendí que la observabilidad no solo sirve para debugging técnico. También ayuda a diseñar mejores productos con IA.

Cuando se observan runs reales o simulados, es más fácil detectar:

- dónde se confunde el agente,
- qué pasos son innecesarios,
- qué herramientas fallan más,
- qué flujos necesitan mejores validaciones,
- qué outputs deberían resumirse mejor,
- y qué tareas deberían tener revisión humana por defecto.

Esto convierte la observabilidad en una herramienta de mejora continua del producto.

## 7. La seguridad debe estar presente desde la documentación

Un dashboard de observabilidad puede volverse riesgoso si expone demasiado. Por eso, desde el diseño se deben evitar:

- prompts internos sensibles,
- payloads completos,
- secretos,
- API keys,
- nombres de clientes,
- endpoints internos,
- identificadores delicados,
- datos personales innecesarios.

El aprendizaje fue que una buena herramienta de observabilidad no es la que muestra todo, sino la que muestra lo necesario para operar y mejorar el sistema sin comprometer seguridad.

## 8. Conclusión

Este proyecto me ayudó a entender que construir aplicaciones con IA no termina cuando el agente responde. Un sistema serio necesita visibilidad sobre lo que pasó antes, durante y después de la respuesta.

La observabilidad permite convertir agentes de IA en sistemas más confiables, medibles y gobernables. Ese es el valor principal del dashboard: reducir la caja negra y hacer que los flujos con IA puedan ser entendidos, evaluados y mejorados.
