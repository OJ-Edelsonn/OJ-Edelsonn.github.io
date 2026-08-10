---
projectId: analisis-datos-python
translationKey: analisis-datos-python
title: Python Data Analysis Mini Project
slug: python-data-analysis
locale: en
summary: A reproducible workflow for exploration, KPI calculation, and visualization using synthetic hardware-store sales data.
category: data-bi
careerArea: business
projectType: personal
collaboration: individual
status: published
featured: true
priority: 4
date: 2026-06-01
technologies: [Python, pandas, NumPy, Matplotlib, Seaborn, Jupyter]
repositoryUrl: https://github.com/OJ-Edelsonn/mini-proyecto-analisis-datos-python
coverImage: /images/projects/analisis-python/01_tendencia_mensual_ventas.webp
gallery:
  - src: /images/projects/analisis-python/01_tendencia_mensual_ventas.webp
    alt: Monthly trend chart for synthetic sales.
    caption: Monthly evolution of sales value.
  - src: /images/projects/analisis-python/02_top_productos_ventas.webp
    alt: Product ranking by synthetic sales.
    caption: Products with the highest contribution to sales value.
  - src: /images/projects/analisis-python/03_ventas_por_categoria.webp
    alt: Synthetic sales distribution by category.
    caption: Performance comparison across categories.
  - src: /images/projects/analisis-python/04_precio_vs_unidades.webp
    alt: Relationship between price and units in the synthetic dataset.
    caption: Price-volume exploration.
role: Personal data analysis project
dataSources:
  - Documented synthetic hardware-store sales dataset
dataNature: [synthetic]
outcomes:
  - Executable notebook covering cleaning, KPIs, analysis, and charts
  - Executive summary exported as JSON
  - Four communication-ready visualizations
limitations:
  - Data and findings are synthetic and do not represent a real company’s performance.
draft: false
---

## The challenge

Create a compact but complete analysis that runs end to end, leaves verifiable outputs, and communicates findings without requiring an interactive dashboard.

## Approach

The notebook covers loading, quality review, transformation, KPI calculation, time analysis, and product and category exploration. Figures are exported for reuse in reports.

## Results within the synthetic dataset

The analysis records S/ 128,182.96 in sales, 8,056 units, 1,800 transactions, an average ticket of S/ 71.21, and an estimated margin of 27.91%. The summary identifies 42.5 kg bagged cement as the leading product, construction materials as the top category, and November 2025 as the strongest sales month.

## Technical decisions

- Separate preparation, analysis, and communication into reproducible blocks.
- Export a JSON summary in addition to the figures.
- Measure the price-units relationship; the documented correlation is -0.3247 within the dataset.

## Learning

Reproducibility improves when metrics, charts, and the executive summary are generated from the same workflow with visible sources and assumptions.
