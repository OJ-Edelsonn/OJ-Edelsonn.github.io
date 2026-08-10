---
projectId: consultoria-optimizacion-negocio
translationKey: consultoria-optimizacion-negocio
title: Caso de Consultoría para Optimización de Negocio
slug: consultoria-optimizacion-negocio
locale: es
summary: Caso ficticio y reproducible que integra diagnóstico comercial, inventario y escenarios de impacto para priorizar decisiones.
category: consulting
careerArea: business
projectType: personal
collaboration: individual
status: documentation-improvement
featured: true
priority: 3
date: 2026-06-01
technologies: [Python, pandas, Jupyter, Power BI, Análisis de escenarios]
repositoryUrl: https://github.com/OJ-Edelsonn/caso-consultoria-optimizacion-negocio
coverImage: /images/projects/consultoria-optimizacion/01-escenarios-simulados.webp
gallery:
  - src: /images/projects/consultoria-optimizacion/01-escenarios-simulados.webp
    alt: Comparación de impacto económico en tres escenarios simulados.
    caption: Capital liberado y ahorro anual referencial en escenarios conservador, moderado y agresivo.
  - src: /images/projects/consultoria-optimizacion/02-oportunidades-simuladas.webp
    alt: Priorización de productos por sobrestock valorizado simulado.
    caption: Seis oportunidades con mayor valor de sobrestock dentro del caso ficticio.
role: Proyecto personal de análisis y consultoría
dataSources:
  - Datos operativos simulados y contexto público de la industria cementera
dataNature: [simulated, public]
outcomes:
  - 46,870 ventas y 5,760 registros de inventario simulados
  - Escenarios conservador, moderado y agresivo documentados
  - Oportunidades priorizadas por capital y ahorro referencial
limitations:
  - El caso, la empresa y los resultados son ficticios; no describen una intervención real.
  - Los impactos económicos son estimaciones de escenario y no beneficios realizados.
draft: false
---

## El reto

Construir un caso de consultoría que conecte señales comerciales e inventario con acciones priorizadas, sin confundir correlaciones analíticas con resultados reales.

## Enfoque

El trabajo usa datos simulados con estructura empresarial realista y contexto público de la industria. El diagnóstico revisa ventas, margen, rotación, stock y sobrestock antes de formular escenarios.

## Solución

La propuesta organiza oportunidades por producto y acción sugerida. Luego calcula tres escenarios —conservador, moderado y agresivo— para estimar capital potencialmente liberado y ahorro operativo anual.

## Hallazgos del caso simulado

La simulación registra un aumento de ventas desde S/ 273.81 millones en 2023 hasta S/ 339.83 millones en 2025 y un sobrestock valorizado de S/ 34.38 millones. En el escenario moderado, una reducción del 40% del sobrestock se asocia con S/ 13.75 millones de capital potencialmente liberado y S/ 1.65 millones de ahorro operativo anual referencial.

## Decisiones técnicas

- Separar diagnóstico, priorización y simulación de impacto.
- Conservar supuestos y salidas en archivos tabulares auditables.
- Rotular cada visual y cifra como simulada.

## Próximos pasos

Consolidar la documentación ejecutiva, ampliar las pruebas de sensibilidad y alinear el tablero final con la narrativa del caso.
