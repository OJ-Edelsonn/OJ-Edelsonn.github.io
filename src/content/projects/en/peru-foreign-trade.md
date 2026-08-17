---
projectId: comercio-exterior-peru
translationKey: comercio-exterior-peru
title: Peru Foreign Trade Dashboard 2024–2026
slug: peru-foreign-trade-2024-2026
locale: en
summary: A data pipeline and executive dashboard for exploring Peru’s exports and imports using official MINCETUR data.
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
    alt: Executive overview of the Peru foreign trade dashboard.
    caption: Executive view of exports, imports, and the trade balance.
  - src: /images/projects/comercio-exterior/02_detalle_comercial.png
    alt: Trade detail page in Power BI.
    caption: Exploration by product, country, company, and trade flow.
  - src: /images/projects/comercio-exterior/03_analisis_geografico_logistico.png
    alt: Geographic and logistics analysis page in Power BI.
    caption: Territorial and logistics view of the recorded movements.
role: Personal analytics and Business Intelligence project
dataSources:
  - MINCETUR — BD XM-2021-2026_Abril.xlsx file, 2024 to 2026 sheets
dataNature: [official, public]
outcomes:
  - 1,501,624 records loaded into the fact table
  - Star schema with one fact table and six dimensions
  - Three analytical pages built in Power BI
limitations:
  - The 2026 coverage spans January through April, following the official source file.
  - Visual refinement and documentation remain open workstreams.
draft: false
---

## The challenge

Turn a high-volume official file into an executive view of Peru’s foreign trade while preserving traceability across source, transformation, model, and visualization.

## Approach

The workflow separates Python preparation, SQL Server loading, and Power BI consumption. A star schema reduces ambiguity and supports filtering by time, country, product, company, transport mode, and location.

## Solution

The dashboard follows three paths: executive overview, trade detail, and geographic-logistics analysis. Its DAX measures prioritize exports, imports, the trade balance, and time comparisons.

## Verifiable results

The process consolidated 1,501,624 rows in the fact table and six related dimensions. For January–April 2026, the documented validation records USD 35,906.90 million in exports and USD 21,216.58 million in imports.

## Technical decisions

- Python and pandas for reproducible cleaning and normalization.
- SQL Server for persistence and analytical model control.
- Power Query, DAX, and Power BI for the semantic and visual layers.
- Intermediate CSV and Parquet checks before dashboard consumption.

## Next steps

Expand measure documentation, refine the visual hierarchy, and automate ingestion when the official source publishes new periods.
