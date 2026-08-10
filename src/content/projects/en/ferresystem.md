---
projectId: ferresystem
translationKey: ferresystem
title: FerreSystem
slug: ferresystem
locale: en
summary: A full-stack web system for digitizing the catalog, quoting, and operational management of a family-owned hardware store.
category: systems-web
careerArea: systems
projectType: personal
collaboration: individual
status: published
featured: true
priority: 5
date: 2026-06-01
technologies: [PHP 8, MySQL, JavaScript, Bootstrap, Chart.js, MVC]
repositoryUrl: https://github.com/OJ-Edelsonn/ferresystem
demoUrl: https://jsferreteria.infinityfreeapp.com/public/index.php
coverImage: /images/projects/ferresystem/00-catalogo-real.webp
gallery:
  - src: /images/projects/ferresystem/00-catalogo-real.webp
    alt: Sample products published in the live FerreSystem catalog.
    caption: Visual assets obtained from the authorized public demo.
  - src: /images/projects/ferresystem/casco-seguridad.webp
    alt: Safety helmet published in the FerreSystem catalog.
  - src: /images/projects/ferresystem/carretilla.webp
    alt: Construction wheelbarrow published in the FerreSystem catalog.
role: Personal full-stack project
dataSources:
  - Family hardware-store demo catalog and operations
dataNature: []
outcomes:
  - Responsive public catalog with search and quoting
  - Admin panel covering inventory, sales, cash, orders, and jobs
  - Public demo and documented repository
limitations:
  - The demo is hosted by a third party, and some routes depend on its original configuration.
  - Administrative access is not exposed through the portfolio.
draft: false
---

## The challenge

Bring a family hardware-store operation to the web while serving two needs: make product enquiries and quotes easier for customers, and organize the business’s internal control.

## Approach

The solution separates the public journey from the administrative panel. The customer-facing side prioritizes mobile navigation, catalog access, services, and contact; the panel brings together inventory, sales, orders, cash, and job tracking.

## Solution

FerreSystem uses PHP 8 and MySQL with a simplified MVC organization. Bootstrap, JavaScript, and Chart.js support operational forms, tables, and management visualizations.

## Implemented capabilities

- Searchable catalog, product cards, and quote flow.
- Contact and coordination through WhatsApp.
- Inventory alerts and stock deduction linked to sales.
- Cash, order, and job-quote management.
- Administrative dashboard with indicators.

## Evidence and scope

The public demo shows the business contact details and location with the owner’s authorization. The portfolio links only to the public experience; credentials and administrative access remain private.

## Next steps

Strengthen deployment routes, expand automated testing, and consolidate the catalog update process.
