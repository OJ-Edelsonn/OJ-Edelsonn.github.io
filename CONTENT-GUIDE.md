# Guía de contenido

El contenido público se administra mediante Markdown y datos TypeScript. Los
esquemas de validación están en `src/content.config.ts`.

## 1. Agregar un proyecto

1. Copia `examples/project.example.md` a `src/content/projects/es/`.
2. Completa solo información comprobable.
3. Usa un `projectId` y `translationKey` estables.
4. Define `projectType` como `personal` o `academic`.
5. En proyectos académicos, `careerArea` define su subgrupo: `business` para el
   área Empresarial o `systems` para el área de Sistemas. Clasifica el propósito
   central del proyecto, no solo las herramientas utilizadas.
6. Usa `collaboration: not-specified` cuando la evidencia no permita distinguir
   la autoría. No adivines una participación.
7. Mantén `draft: true` mientras el caso esté en revisión y cámbialo a `false`
   cuando esté aprobado.

Los campos `outcomes`, `dataSources` y `limitations` deben separar resultados,
fuentes y límites reales. Las métricas necesitan una fuente verificable.

## 2. Traducir un proyecto

1. Crea la versión inglesa en `src/content/projects/en/`.
2. Conserva exactamente el mismo `projectId` y `translationKey`.
3. Usa un `slug` natural en inglés.
4. Traduce la intención profesional, no palabra por palabra.
5. Mantén iguales los enlaces, la prioridad y el estado.

El selector de idioma relaciona ambas versiones mediante `translationKey`.

## 3. Añadir capturas

1. Crea una carpeta en `public/images/projects/<proyecto>/`.
2. Prefiere WebP optimizado y una proporción cercana a 16:9.
3. Agrega `coverImage` y elementos en `gallery`.
4. Escribe un `alt` que explique la evidencia, no su apariencia decorativa.
5. Añade `caption` cuando ayude a interpretar el gráfico o la captura.

No publiques credenciales, paneles privados, teléfonos no autorizados ni datos
de terceros. Si una imagen contiene datos simulados, indícalo en el caso.

## 4. Cambiar el orden

`priority` controla el orden: el número menor aparece primero. Las prioridades
1 a 7 corresponden a la selección principal. El archivo muestra primero los
proyectos personales y después los académicos. Solo los académicos se separan
entre el área Empresarial y el área de Sistemas y se agrupan por `course`.

## 5. Destacar un proyecto

Usa `featured: true`. La página de inicio está diseñada para siete casos: el
primero ocupa el ancho completo y los seis restantes forman tres filas de dos.

## 6. Agregar una publicación

1. Copia `examples/post.example.md` a `src/content/posts/es/`.
2. Crea su traducción en `src/content/posts/en/` con el mismo `postId` y
   `translationKey`.
3. Mantén `draft: true` mientras sea una idea editorial.

La versión actual muestra únicamente los títulos y resúmenes de borradores y
declara que no están publicados. Una ruta individual debe implementarse y
revisarse antes de cambiar un artículo a `draft: false`.

## 7. Reemplazar el CV

Reemplaza `public/cv/CV_Edelson_Orihuela_Jara.pdf` conservando el nombre. La ruta se
configura una sola vez mediante `SITE.resumePath` en `src/config/site.ts`.

Antes de publicar una nueva versión, revisa los datos personales incluidos en
el PDF y confirma que están autorizados para exposición pública.

## 8. Actualizar enlaces profesionales

Edita `src/config/site.ts` para cambiar nombre, correo, GitHub, LinkedIn o la
ruta del CV. Los componentes consumen esta configuración central y no requieren
cambios adicionales.

Nunca añadas secretos, tokens ni credenciales al frontend o a archivos
versionados.
