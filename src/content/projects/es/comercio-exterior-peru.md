---
projectId: comercio-exterior-peru
translationKey: comercio-exterior-peru
title: Dashboard de Comercio Exterior del Perú 2024–2026
slug: comercio-exterior-peru-2024-2026
locale: es
summary: Pipeline de datos y tablero ejecutivo para explorar exportaciones e importaciones peruanas con fuente oficial de MINCETUR.
category: data-bi
careerArea: business
projectType: personal
collaboration: individual
status: documentation-improvement
featured: true
priority: 1
date: 2026-06-19
technologies: [Python, pandas, SQL Server, Power BI, DAX, Power Query]
repositoryUrl: https://github.com/OJ-Edelsonn/Dashboard-comercio-exterior-peru-2024-2026
coverImage: /images/projects/comercio-exterior/01_resumen_ejecutivo.png
gallery:
  - src: /images/projects/comercio-exterior/01_resumen_ejecutivo.png
    alt: Resumen ejecutivo del dashboard de comercio exterior peruano.
    caption: Vista ejecutiva de exportaciones, importaciones y balanza comercial.
  - src: /images/projects/comercio-exterior/02_detalle_comercial.png
    alt: Página de detalle comercial en Power BI.
    caption: Exploración por producto, país, empresa y flujo comercial.
  - src: /images/projects/comercio-exterior/03_analisis_geografico_logistico.png
    alt: Página de análisis geográfico y logístico en Power BI.
    caption: Lectura territorial y logística de los movimientos registrados.
role: Proyecto personal de analítica y Business Intelligence
dataSources:
  - MINCETUR — archivo BD XM-2021-2026_Abril.xlsx, hojas 2024 a 2026
dataNature: [official, public]
outcomes:
  - 1,501,624 registros cargados en la tabla de hechos
  - Modelo estrella con una tabla de hechos y seis dimensiones
  - Tres páginas analíticas construidas en Power BI
limitations:
  - La cobertura de 2026 comprende enero a abril, según el archivo oficial utilizado.
  - El proyecto mantiene una fase abierta de refinamiento visual y documentación.
draft: false
---

## El reto

Transformar un archivo oficial de gran volumen en una lectura ejecutiva que permita recorrer el comercio exterior peruano sin perder trazabilidad entre fuente, transformación, modelo y visualización.

## Enfoque

El flujo separa la preparación en Python, la carga en SQL Server y el consumo analítico en Power BI. La información se organiza en un modelo estrella para reducir ambigüedad y facilitar filtros por tiempo, país, producto, empresa, vía y ubicación.

## Solución

El tablero se estructura en tres recorridos: resumen ejecutivo, detalle comercial y análisis geográfico-logístico. Las medidas DAX priorizan exportaciones, importaciones, saldo comercial y comparaciones temporales.

## Resultados verificables

El proceso consolidó 1,501,624 filas en la tabla de hechos y seis dimensiones relacionadas. Para enero–abril de 2026, la validación documentada registra exportaciones por USD 35,906.90 millones e importaciones por USD 21,216.58 millones.

## Decisiones técnicas

- Python y pandas para limpieza y normalización reproducible.
- SQL Server para persistencia y control del modelo analítico.
- Power Query, DAX y Power BI para la capa semántica y visual.
- Validaciones intermedias en CSV y Parquet antes del tablero.

## Próximos pasos

Profundizar la documentación de medidas, mejorar la jerarquía visual y automatizar el ingreso de nuevas publicaciones de la fuente oficial.
