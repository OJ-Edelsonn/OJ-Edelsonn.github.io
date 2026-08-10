# Portafolio profesional de Edelson Orihuela

Portafolio bilingüe de Edelson Anghuelo Orihuela Jara, orientado a Análisis de
Datos, Business Intelligence, procesos, consultoría, operaciones y sistemas de
información.

**Sitio público:** [oj-edelsonn.github.io](https://oj-edelsonn.github.io/)

[![Deploy to GitHub Pages](https://github.com/OJ-Edelsonn/OJ-Edelsonn.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/OJ-Edelsonn/OJ-Edelsonn.github.io/actions/workflows/deploy.yml)

## Estado del contenido

- 19 casos bilingües: 7 proyectos personales y 12 académicos.
- 7 proyectos personales destacados en la página de inicio.
- Archivo dividido primero entre proyectos personales y académicos. Dentro del
  archivo académico, los cursos se separan entre el área Empresarial y el área
  de Sistemas.
- Perfil, formación, habilidades y trayectoria aplicadas.
- CV maestro disponible para visualizar y descargar.
- Contacto mediante correo, LinkedIn, GitHub y formulario basado en `mailto:`.
- 3 propuestas editoriales bilingües conservadas como borradores no publicados.

## Base técnica

- Astro con TypeScript estricto y generación estática.
- Content Collections para proyectos y borradores editoriales.
- Rutas localizadas en español e inglés.
- Sistema visual propio basado en azules, negros, blancos y grises.
- CSS mantenible, componentes Astro y JavaScript mínimo.

## Comandos locales

| Comando                            | Función                                    |
| ---------------------------------- | ------------------------------------------ |
| `pnpm install`                     | Instala las dependencias.                  |
| `pnpm exec astro dev --background` | Inicia el servidor local en segundo plano. |
| `pnpm exec astro dev status`       | Muestra el estado del servidor.            |
| `pnpm exec astro dev logs`         | Consulta los registros del servidor.       |
| `pnpm exec astro dev stop`         | Detiene el servidor.                       |
| `pnpm check`                       | Revisa tipos, esquemas y componentes.      |
| `pnpm build`                       | Ejecuta `astro check` y genera `dist/`.    |
| `pnpm quality`                     | Ejecuta la revisión técnica completa.      |
| `pnpm validate:external`           | Comprueba los enlaces públicos externos.   |

Los resultados de la última revisión están documentados en
[QA-REPORT.md](./QA-REPORT.md).

## Contenido y mantenimiento

Consulta [CONTENT-GUIDE.md](./CONTENT-GUIDE.md) para agregar o traducir
proyectos, administrar imágenes, ordenar casos, preparar publicaciones,
reemplazar el CV y actualizar enlaces profesionales.

## Variables de despliegue

Copia `.env.example` únicamente si se necesita probar otra URL pública o un
subdirectorio de GitHub Pages. No deben guardarse secretos en este proyecto.

## Publicación y actualización

El sitio se publica gratuitamente mediante GitHub Pages. El flujo
`.github/workflows/deploy.yml` se ejecuta con cada cambio enviado a `main` y:

1. instala las dependencias bloqueadas por `pnpm-lock.yaml`;
2. ejecuta lint, formato, comprobación de Astro y validaciones de contenido;
3. genera las páginas estáticas y comprueba el HTML y los enlaces internos;
4. despliega el resultado aprobado en GitHub Pages.

Para actualizar el portafolio:

1. modifica el contenido siguiendo [CONTENT-GUIDE.md](./CONTENT-GUIDE.md);
2. ejecuta `pnpm quality` localmente;
3. confirma los cambios en Git;
4. envíalos a la rama `main` de GitHub.

La pestaña **Actions** del repositorio permite consultar cada publicación o
iniciar el flujo manualmente. No se requiere un dominio comprado ni un servicio
de pago.
