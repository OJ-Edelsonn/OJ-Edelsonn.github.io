---
projectId: virtual-memory-simulation
translationKey: virtual-memory-simulation
title: Simulación de memoria virtual frente a memoria física
slug: simulacion-memoria-virtual-fisica
locale: es
summary: Experimento reproducible en Python que compara FIFO y LRU sobre trazas públicas modernas y reporta fallos de página y costos relativos.
category: architecture-research
careerArea: systems
projectType: academic
collaboration: individual
course: Arquitectura de Computadoras
status: published
featured: false
priority: 9
date: 2026-07-10
technologies: [Python, pandas, Matplotlib, FIFO, LRU, Trazas de memoria]
repositoryUrl: https://github.com/OJ-Edelsonn/memoria-virtual-vs-fisica-simulacion
coverImage: /images/projects/memoria-virtual/01-fifo-vs-lru.webp
gallery:
  - src: /images/projects/memoria-virtual/01-fifo-vs-lru.webp
    alt: Comparación de la tasa media de fallos entre FIFO y LRU por fuente de trazas.
    caption: Comparación resumida de políticas de reemplazo sobre tres familias de trazas.
  - src: /images/projects/memoria-virtual/02-fallos-por-marcos.webp
    alt: Evolución de la tasa de fallos según la cantidad de marcos físicos.
    caption: Sensibilidad del experimento frente a diferentes configuraciones de memoria física.
role: Proyecto académico individual publicado con código, datos procesados y figuras
dataSources:
  - Meta Tectonic Storage 2023
  - Meta Key-Value Cache 2024
  - Alibaba Cloud EBS 2020 — muestra curada
dataNature: [public, academic]
outcomes:
  - 90 escenarios resumidos en el experimento
  - Comparación de FIFO y LRU con 4, 8, 16, 32 y 64 marcos
  - Pipeline capaz de regenerar tablas CSV y figuras
limitations:
  - Los tiempos son unidades relativas basadas en un modelo de costo, no tiempos de hardware real.
  - Las conclusiones dependen de las muestras y parámetros documentados en el repositorio.
draft: false
---

## El reto

Explicar con evidencia reproducible cómo cambia el comportamiento de la memoria virtual cuando varían la política de reemplazo, la cantidad de marcos físicos y la carga de referencias.

## Enfoque

El experimento normaliza trazas externas publicadas entre 2020 y 2024 y evalúa prefijos de 10 000, 50 000 y 100 000 referencias. Cada combinación se ejecuta con FIFO y LRU sobre cinco tamaños de memoria física.

## Solución

El repositorio conserva el simulador, scripts de extracción, manifiesto de trazas, hashes, resultados detallados, resúmenes y figuras. El costo asigna una unidad por acceso y una penalización de 100 por fallo de página, por lo que los valores se leen como costos relativos.

## Aprendizajes

- Diseñar un experimento con parámetros explícitos y salidas reproducibles.
- Separar fuente, normalización, simulación, resumen y visualización.
- Interpretar una métrica dentro de sus límites, sin presentarla como tiempo físico real.

## Próximos pasos

Incorporar más políticas, análisis de sensibilidad adicional y pruebas automatizadas sobre la lógica del simulador.
