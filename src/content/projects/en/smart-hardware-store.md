---
projectId: ferreteria-inteligente
translationKey: ferreteria-inteligente
title: J&S Smart Hardware Store
slug: smart-hardware-store
locale: en
summary: A personal web system combining a catalog, quotation flow, product administration, and basic interaction analysis for a family hardware store.
category: systems-web
careerArea: systems
projectType: personal
collaboration: individual
status: published
featured: true
priority: 11
date: 2026-07-01
technologies: [PHP, MySQL, JavaScript, Bootstrap, Chart.js, MVC]
repositoryUrl: https://github.com/OJ-Edelsonn/ferreteria-inteligente
coverImage: /images/projects/ferreteria-inteligente/01-inicio.webp
gallery:
  - src: /images/projects/ferreteria-inteligente/01-inicio.webp
    alt: Home page of the J&S Smart Hardware Store web system.
    caption: Public experience centered on catalog, services, quotations, and contact.
role: Personal project developed individually with Codex support
dataSources:
  - Catalog migrated from an earlier hardware-store website
  - Optional demonstration data for testing the local dashboard
dataNature: [synthetic]
outcomes:
  - MySQL-backed catalog with search and filters
  - Quotation flow plus search and product-view logging
  - Local dashboard for products, stock, and interaction indicators
limitations:
  - Runtime requires a configured local PHP and MySQL environment.
  - Demonstration interactions do not represent actual customer behavior.
draft: false
---

## The challenge

Explore an evolution of a hardware store’s digital presence that not only publishes products but also observes basic interest signals and maintains the catalog from a protected dashboard.

## Approach

The project separates the public experience—home, catalog, services, quotation, and contact—from the administration area. Each search or product view can be recorded as a queryable interaction history.

## Solution

The application uses PHP and MySQL with a lightweight MVC organization. The dashboard adds authentication, product CRUD, quick stock controls, and charts; the public site offers 87 active products migrated from FerreSystem.

## Relationship with FerreSystem

Smart Hardware Store is a separate project. It shares the business context and part of the catalog, but explores a different architecture and focus: interaction, content maintenance, and navigation-behavior analysis.

## Next steps

Consolidate testing, separate demonstration data more rigorously, and prepare a reproducible installation for technical review.
