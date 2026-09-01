---
projectId: procurement-intelligence-supplier-risk-peru
translationKey: procurement-intelligence-supplier-risk-peru
title: Procurement Intelligence & Supplier Risk — Perú
slug: procurement-intelligence-supplier-risk-peru
locale: es
summary: Solución Data/BI end-to-end para analizar contratación pública, oportunidades B2G y exposición operativa de proveedores con datos oficiales de OECE/SEACE.
category: data-bi
careerArea: business
projectType: personal
collaboration: individual
status: published
featured: true
priority: 0
date: 2026-09-01
technologies: [Python, pandas, SQL Server, Power BI, DAX, PyArrow, pytest, GitHub Actions]
repositoryUrl: https://github.com/OJ-Edelsonn/procurement-intelligence-supplier-risk-peru
coverImage: /images/projects/procurement-intelligence/01-resumen-ejecutivo.png
gallery:
  - src: /images/projects/procurement-intelligence/01-resumen-ejecutivo.png
    alt: Resumen ejecutivo de Procurement Intelligence con indicadores de procesos, compradores, proveedores y montos de contratación pública.
    caption: Vista ejecutiva del universo piloto y sus principales magnitudes de contratación.
  - src: /images/projects/procurement-intelligence/02-oportunidad-mercado.png
    alt: Página de Power BI que prioriza mercados B2G mediante un Opportunity Score transparente.
    caption: Priorización de 87 mercados elegibles mediante componentes y pesos documentados.
  - src: /images/projects/procurement-intelligence/03-inteligencia-proveedores.png
    alt: Panel de inteligencia de proveedores con montos adjudicados y detalle contractual.
    caption: Lectura de participación adjudicada y diversificación observada por proveedor.
  - src: /images/projects/procurement-intelligence/04-exposicion-proveedores.png
    alt: Panel de exposición operativa y comercial de proveedores con análisis de dependencia.
    caption: Indicador limitado de exposición para 179 proveedores, con tres escenarios de sensibilidad.
  - src: /images/projects/procurement-intelligence/05-inteligencia-compradores.png
    alt: Panel de inteligencia de compradores públicos con ranking de entidades y actividad de contratación.
    caption: Análisis de entidades compradoras, frecuencia de procesos y monto licitado.
role: Proyecto personal de Data/BI, analítica de compras e inteligencia comercial
dataSources:
  - Portal de Contrataciones Abiertas de OECE — datos OCDS de SEACE, periodo fuente 2026-07
dataNature: [official, public]
outcomes:
  - 231,123 filas RAW perfiladas en 22 tablas OCDS; 231,113 filas promovidas a Silver y 10 aisladas en cuarentena
  - 16 objetos dimensionales, 21 KPIs gobernados y validación independiente entre Python y SQL Server
  - 772 mercados analizados, 87 priorizados mediante Opportunity Score y 179 proveedores evaluados con un indicador de exposición limitado
  - Cinco páginas y 30 visuales en Power BI, ocho controles finales aprobados y 116 pruebas automatizadas superadas
limitations:
  - El piloto utiliza un único periodo fuente, 2026-07, capturado el 19 de agosto de 2026; por ello no publica crecimiento ni comparaciones interanuales.
  - El Supplier Exposure Score no constituye una calificación crediticia, evaluación legal, acusación de irregularidad ni predicción de fraude.
  - La publicación en Power BI Service queda como distribución opcional; el repositorio incluye el proyecto PBIP versionable y sus evidencias finales.
draft: false
---

## El reto

Los datos de contratación pública peruana contienen distintos granos —procesos, ítems, adjudicaciones, contratos, compradores y proveedores— que no deben sumarse como si fueran una sola tabla. El objetivo fue convertir esa complejidad en información comercial trazable sin fabricar señales que la fuente disponible todavía no permite medir.

## Arquitectura end-to-end

La solución organiza el recorrido completo desde OECE/SEACE hasta Power BI: snapshots RAW inmutables, controles de calidad, transformación tipada a Parquet, carga auditada en SQL Server, modelo dimensional, reconciliación independiente, analítica en Python y una capa semántica gobernada.

## Calidad y trazabilidad

Cada etapa conserva configuración, hashes, registros de ejecución y evidencia reproducible. La puerta inicial detectó duplicados y una clasificación nula antes de Silver; el ETL aplicó tratamientos explícitos, aisló diez filas y dejó las métricas bloqueantes en cero. El pipeline automatizado puede validar y reutilizar artefactos aprobados sin sobrescribir evidencia de forma silenciosa.

## Inteligencia de mercado y proveedores

El análisis separa tres preguntas de negocio: concentración por categoría, oportunidad comercial B2G y exposición operativa de proveedores. Los scores usan percentiles, pesos documentados y escenarios de sensibilidad. También mantienen límites semánticos claros: oportunidad no equivale a pronóstico de ventas y exposición no equivale a riesgo legal o financiero.

## Dashboard ejecutivo

Power BI presenta cinco recorridos: resumen ejecutivo, oportunidad de mercado, inteligencia de proveedores, exposición de proveedores e inteligencia de compradores. Los KPI muestran unidades explícitas y los rankings conservan el orden del negocio; las advertencias sobre el único periodo observado permanecen visibles en cada página.

## Decisiones técnicas

- Constelación de hechos para evitar duplicar montos entre procesos, ítems, adjudicaciones y contratos.
- Python y Parquet para transformaciones reproducibles y tipadas.
- SQL Server para persistencia, auditoría, integridad y reconciliación.
- Medidas DAX y proyecto PBIP versionable para mantener trazable la capa de presentación.
- Pruebas automatizadas y CI para verificar cálculos, configuración, artefactos y portabilidad.

## Próximos pasos

Incorporar periodos históricos comparables, una dimensión UBIGEO gobernada, ejecución programada y actualización controlada en Power BI Service. Antes de publicar métricas de ahorro, se requiere medir una línea base manual comparable.
