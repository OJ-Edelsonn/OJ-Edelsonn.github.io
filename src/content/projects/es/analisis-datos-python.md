---
projectId: analisis-datos-python
translationKey: analisis-datos-python
title: Mini Proyecto de Análisis de Datos con Python
slug: analisis-datos-python
locale: es
summary: Flujo reproducible de exploración, cálculo de KPI y visualización para entender ventas sintéticas de una ferretería.
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
    alt: Gráfico de tendencia mensual de ventas sintéticas.
    caption: Evolución mensual del valor de ventas.
  - src: /images/projects/analisis-python/02_top_productos_ventas.webp
    alt: Ranking de productos por ventas sintéticas.
    caption: Productos con mayor aporte al valor vendido.
  - src: /images/projects/analisis-python/03_ventas_por_categoria.webp
    alt: Distribución de ventas sintéticas por categoría.
    caption: Comparación del desempeño entre categorías.
  - src: /images/projects/analisis-python/04_precio_vs_unidades.webp
    alt: Relación entre precio y unidades vendidas en el dataset sintético.
    caption: Exploración de la relación precio-volumen.
role: Proyecto personal de análisis de datos
dataSources:
  - Dataset sintético documentado de ventas ferreteras
dataNature: [synthetic]
outcomes:
  - Notebook ejecutable con limpieza, KPI, análisis y gráficos
  - Resumen ejecutivo exportado en JSON
  - Cuatro visualizaciones listas para comunicación
limitations:
  - Los datos y hallazgos son sintéticos y no representan el desempeño de una empresa real.
draft: false
---

## El reto

Crear un análisis compacto pero completo que pueda ejecutarse de principio a fin, deje salidas verificables y comunique hallazgos sin depender de un tablero interactivo.

## Enfoque

El notebook recorre carga, revisión de calidad, transformación, cálculo de KPI, análisis temporal y exploración por producto y categoría. Las figuras se exportan para reutilizarse en reportes.

## Resultados dentro del dataset sintético

El análisis registra S/ 128,182.96 en ventas, 8,056 unidades, 1,800 transacciones, un ticket promedio de S/ 71.21 y un margen estimado de 27.91%. El resumen identifica Cemento bolsa 42.5 kg como producto líder, Materiales de construcción como categoría principal y noviembre de 2025 como el mes de mayor venta.

## Decisiones técnicas

- Separar preparación, análisis y comunicación en bloques reproducibles.
- Exportar un resumen JSON además de las figuras.
- Medir la relación precio-unidades; la correlación documentada es -0.3247 dentro del dataset.

## Aprendizaje

La reproducibilidad mejora cuando los indicadores, los gráficos y el resumen ejecutivo se generan desde el mismo flujo, con una fuente y supuestos visibles.
