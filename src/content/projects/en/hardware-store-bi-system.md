---
projectId: sistema-bi-ferreteria
translationKey: sistema-bi-ferreteria
title: Hardware Store BI System
slug: hardware-store-bi-system
locale: en
summary: A Business Intelligence solution connecting sales, products, and inventory to turn synthetic operational data into commercial decisions.
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
    alt: KPI validation page for the BI system.
    caption: Documented cross-check of the main indicators.
  - src: /images/projects/bi-ferreteria/02_vista_general.webp
    alt: General view of the hardware store dashboard.
    caption: Executive view of sales, margin, and time behavior.
  - src: /images/projects/bi-ferreteria/03_ventas.webp
    alt: Sales analysis page of the dashboard.
    caption: Sales by period, product, and category.
  - src: /images/projects/bi-ferreteria/04_productos.webp
    alt: Product analysis page of the dashboard.
    caption: Product performance and rotation.
  - src: /images/projects/bi-ferreteria/05_inventario.webp
    alt: Inventory analysis page of the dashboard.
    caption: Stock, value, and alerts for operational management.
role: Personal Business Intelligence project
dataSources:
  - Documented synthetic hardware-store operations dataset
dataNature: [synthetic]
outcomes:
  - 1,800 synthetic sales and 72 modeled products
  - Five analysis and validation pages in Power BI
  - Sales, margin, rotation, stock, and inventory-value KPIs
limitations:
  - Every figure belongs to a synthetic dataset and does not represent a real company.
  - Recommendations illustrate an analytical method, not outcomes from a commercial intervention.
draft: false
---

## The challenge

Design a BI layer that connects sales, products, and inventory to answer management questions: how much is sold, what contributes margin, what rotates slowly, and where stock risk exists.

## Approach

A synthetic dataset was built with 72 products, nine categories, and 1,800 transactions from January 2025 to April 2026. The model prioritizes KPI consistency before visual presentation.

## Solution

The system brings together five pages: validation, general view, sales, products, and inventory. Navigation moves from executive signals to operational detail while preserving common filters.

## Results within the synthetic dataset

The dashboard consolidates S/ 128,182.96 in simulated sales, 8,056 units, 1,800 transactions, and an estimated margin of S/ 35,775.12 (27.91%). It also records eight slow-moving products, 6,039 units in stock, and S/ 49,960 in inventory value.

## Technical decisions

- Separate KPI validation from the presentation layer.
- Use DAX measures for margin, average order, rotation, and alerts.
- Keep the synthetic nature of the data explicit in both documentation and visuals.

## Learning

A useful dashboard goes beyond sales reporting: it connects commercial performance with inventory and turns isolated metrics into a management conversation.
