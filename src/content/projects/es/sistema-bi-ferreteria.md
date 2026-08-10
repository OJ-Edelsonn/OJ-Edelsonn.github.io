---
projectId: sistema-bi-ferreteria
translationKey: sistema-bi-ferreteria
title: Sistema BI para una Ferretería
slug: sistema-bi-ferreteria
locale: es
summary: Solución de Business Intelligence que conecta ventas, productos e inventario para convertir datos operativos sintéticos en decisiones comerciales.
category: data-bi
careerArea: business
projectType: personal
collaboration: individual
status: published
featured: true
priority: 2
date: 2026-06-01
technologies: [Power BI, DAX, Power Query, Python, Excel]
repositoryUrl: https://github.com/OJ-Edelsonn/sistema-bi-ferreteria
coverImage: /images/projects/bi-ferreteria/02_vista_general.webp
gallery:
  - src: /images/projects/bi-ferreteria/01_validacion_kpis.webp
    alt: Página de validación de indicadores del sistema BI.
    caption: Contraste documentado de los KPI principales.
  - src: /images/projects/bi-ferreteria/02_vista_general.webp
    alt: Vista general del tablero de una ferretería.
    caption: Panorama ejecutivo de ventas, margen y comportamiento temporal.
  - src: /images/projects/bi-ferreteria/03_ventas.webp
    alt: Página de análisis de ventas del tablero.
    caption: Lectura de ventas por periodo, producto y categoría.
  - src: /images/projects/bi-ferreteria/04_productos.webp
    alt: Página de análisis de productos del tablero.
    caption: Rendimiento y rotación del portafolio de productos.
  - src: /images/projects/bi-ferreteria/05_inventario.webp
    alt: Página de análisis de inventario del tablero.
    caption: Existencias, valor y alertas para la gestión operativa.
role: Proyecto personal de Business Intelligence
dataSources:
  - Dataset sintético documentado de operación ferretera
dataNature: [synthetic]
outcomes:
  - 1,800 ventas sintéticas y 72 productos modelados
  - Cinco páginas de análisis y validación en Power BI
  - KPI de ventas, margen, rotación, stock y valor de inventario
limitations:
  - Todas las cifras pertenecen a un conjunto sintético y no representan una empresa real.
  - Las recomendaciones ilustran un método analítico, no resultados de una intervención comercial.
draft: false
---

## El reto

Diseñar una capa de BI que una ventas, productos e inventario y permita responder preguntas de gestión: cuánto se vende, qué aporta margen, qué rota lentamente y dónde existe riesgo de stock.

## Enfoque

Se construyó un dataset sintético con 72 productos, nueve categorías y 1,800 transacciones entre enero de 2025 y abril de 2026. El modelo prioriza consistencia de KPI antes de la capa visual.

## Solución

El sistema reúne cinco páginas: validación, vista general, ventas, productos e inventario. La navegación permite pasar de la señal ejecutiva al detalle operativo conservando filtros comunes.

## Resultados dentro del dataset sintético

El tablero consolida S/ 128,182.96 en ventas simuladas, 8,056 unidades, 1,800 transacciones y un margen estimado de S/ 35,775.12 (27.91%). También registra 8 productos de baja rotación, 6,039 unidades en stock y S/ 49,960 de inventario valorizado.

## Decisiones técnicas

- Separar una página de validación para contrastar KPI antes de presentar conclusiones.
- Usar medidas DAX para margen, ticket, rotación y alertas.
- Mantener explícita la naturaleza sintética de los datos en documentación y visuales.

## Aprendizaje

Un tablero útil no se limita a mostrar ventas: conecta desempeño comercial con inventario y convierte indicadores aislados en una conversación de gestión.
