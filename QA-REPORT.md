# Informe de control de calidad — ETAPA 5

Fecha de revisión: 10 de agosto de 2026.

## Alcance

- Compilación estática de producción y verificación de tipos.
- Lint, formato y validación del HTML generado.
- Integridad del contenido bilingüe y sus pares español/inglés.
- Navegación, filtros, selector de idioma, tema y formulario de contacto.
- Revisión visual en escritorio, tableta y móvil.
- Accesibilidad básica, metadatos SEO, datos estructurados y enlaces.
- Presupuestos de tamaño para JavaScript, CSS, fuentes e imágenes.

## Resultados automatizados

| Control              | Resultado                                                        |
| -------------------- | ---------------------------------------------------------------- |
| ESLint               | Sin errores                                                      |
| Prettier             | Todos los archivos cumplen el formato                            |
| Astro Check          | 53 archivos, 0 errores, 0 advertencias y 0 sugerencias           |
| Compilación          | 54 páginas estáticas generadas                                   |
| Contenido            | 19 pares de proyectos y 3 pares de borradores validados          |
| Referencias internas | 0 referencias rotas en 54 archivos HTML                          |
| HTML                 | Sin errores en las rutas localizadas y la página 404             |
| Enlaces externos     | 15 comprobados; 14 accesibles y LinkedIn restringido para robots |
| Dependencias         | Sin incompatibilidades de pares                                  |

## Matriz visual y funcional

- 32 comprobaciones de rutas clave: 8 rutas por idioma en móvil y escritorio.
- Página de inicio adicional revisada a 768 × 1024 px.
- Sin desbordamiento horizontal ni imágenes rotas en la matriz final.
- Menú móvil comprobado con clic, teclado y tecla Escape.
- Cambio español/inglés, tema claro/oscuro y filtro de proyectos comprobados.
- Validación del formulario comprobada sin abrir el cliente de correo.
- Inicio validado con siete casos en composición 1–2–2–2.
- Catálogo validado en dos categorías principales: 7 proyectos personales y 12
  académicos por idioma. Dentro de los académicos se verifican 2 casos del área
  Empresarial y 10 del área de Sistemas, agrupados por curso.

## Rendimiento estático

- JavaScript externo: 0 B.
- CSS total: 41 446 B.
- Fuentes: 290 932 B.
- Imagen social: 164 288 B, 1200 × 630 px.

Estos valores son presupuestos de archivos de producción, no puntuaciones de
Lighthouse.

## Observaciones

- LinkedIn devuelve el código 999 a clientes automatizados; el enlace público se
  conserva y no se considera roto.
- El repositorio todavía no tiene archivos rastreados ni un commit inicial, por
  lo que no existe una línea base para un diff convencional. No se agregó ni se
  confirmó ningún archivo durante esta etapa.
- La URL pública y el subdirectorio final se definirán únicamente durante la
  ETAPA 6 autorizada.
