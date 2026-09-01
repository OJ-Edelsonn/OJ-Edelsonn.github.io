---
projectId: procurement-intelligence-supplier-risk-peru
translationKey: procurement-intelligence-supplier-risk-peru
title: Procurement Intelligence & Supplier Risk — Peru
slug: procurement-intelligence-supplier-risk-peru
locale: en
summary: An end-to-end Data/BI solution for public-procurement analysis, B2G opportunities, and supplier operational exposure using official OECE/SEACE data.
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
    alt: Procurement Intelligence executive overview with public-procurement process, buyer, supplier, and value indicators.
    caption: Executive view of the pilot universe and its main procurement figures.
  - src: /images/projects/procurement-intelligence/02-oportunidad-mercado.png
    alt: Power BI page prioritizing B2G markets through a transparent Opportunity Score.
    caption: Prioritization of 87 eligible markets through documented components and weights.
  - src: /images/projects/procurement-intelligence/03-inteligencia-proveedores.png
    alt: Supplier intelligence dashboard showing awarded value and contract detail.
    caption: View of awarded participation and observed supplier diversification.
  - src: /images/projects/procurement-intelligence/04-exposicion-proveedores.png
    alt: Supplier operational and commercial exposure dashboard with dependency analysis.
    caption: A limited exposure indicator for 179 suppliers across three sensitivity scenarios.
  - src: /images/projects/procurement-intelligence/05-inteligencia-compradores.png
    alt: Public-buyer intelligence dashboard with entity rankings and procurement activity.
    caption: Analysis of buying entities, process frequency, and tendered value.
role: Personal Data/BI, procurement analytics, and commercial intelligence project
dataSources:
  - OECE Open Contracting Portal — SEACE OCDS data, 2026-07 source period
dataNature: [official, public]
outcomes:
  - 231,123 RAW rows profiled across 22 OCDS tables; 231,113 rows promoted to Silver and 10 isolated in quarantine
  - 16 dimensional objects, 21 governed KPIs, and independent Python-to-SQL Server validation
  - 772 markets analyzed, 87 prioritized through an Opportunity Score, and 179 suppliers assessed with a deliberately limited exposure indicator
  - Five Power BI pages and 30 visuals, eight final controls passed, and 116 automated tests completed successfully
limitations:
  - The pilot uses a single source period, 2026-07, captured on 19 August 2026; growth and year-over-year comparisons are therefore not published.
  - The Supplier Exposure Score is not a credit rating, legal assessment, allegation of misconduct, or fraud prediction.
  - Power BI Service publication remains an optional distribution step; the repository includes the versionable PBIP project and final evidence.
draft: false
---

## The challenge

Peruvian public-procurement data contains different grains—processes, items, awards, contracts, buyers, and suppliers—that must not be aggregated as one flat table. The goal was to turn that complexity into traceable commercial intelligence without inventing signals the available source cannot yet support.

## End-to-end architecture

The solution organizes the full path from OECE/SEACE to Power BI: immutable RAW snapshots, quality controls, typed Parquet transformation, audited SQL Server loading, a dimensional model, independent reconciliation, Python analytics, and a governed semantic layer.

## Quality and traceability

Each stage preserves configuration, hashes, execution logs, and reproducible evidence. The initial gate detected duplicate rows and a missing classification before Silver; the ETL applied explicit treatments, isolated ten rows, and brought blocking metrics to zero. The automated pipeline can validate and reuse approved artifacts without silently overwriting evidence.

## Market and supplier intelligence

The analysis separates three business questions: category concentration, B2G commercial opportunity, and supplier operational exposure. Scores use percentiles, documented weights, and sensitivity scenarios. Their semantic limits remain explicit: opportunity is not a sales forecast, and exposure is not legal or financial risk.

## Executive dashboard

Power BI provides five paths: executive overview, market opportunity, supplier intelligence, supplier exposure, and buyer intelligence. KPIs use explicit units, rankings preserve business order, and the limitation of a single observed period remains visible on every page.

## Technical decisions

- Fact constellation to prevent double counting across processes, items, awards, and contracts.
- Python and Parquet for reproducible, typed transformations.
- SQL Server for persistence, auditing, integrity, and reconciliation.
- DAX measures and a versionable PBIP project for a traceable presentation layer.
- Automated tests and CI to verify calculations, configuration, artifacts, and portability.

## Next steps

Add comparable historical periods, a governed UBIGEO dimension, scheduled execution, and controlled Power BI Service refresh. A comparable manual baseline must be measured before publishing time-savings claims.
