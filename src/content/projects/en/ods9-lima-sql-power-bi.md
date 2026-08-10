---
projectId: ods9-lima
translationKey: ods9-lima
title: SDG 9 Lima — SQL Server and Power BI
slug: sdg9-lima-sql-server-power-bi
locale: en
summary: An academic database and visualization project organizing information on infrastructure, innovation, and public projects in Lima.
category: data-bi
careerArea: systems
projectType: academic
collaboration: not-specified
course: Database Systems
status: documentation-improvement
featured: false
priority: 7
date: 2025-07-01
technologies: [SQL Server, T-SQL, Power BI, Relational modeling, ETL]
coverImage: /images/projects/academic/ods9/01-modelo-entidad-relacion.webp
gallery:
  - src: /images/projects/academic/ods9/01-modelo-entidad-relacion.webp
    alt: Entity-relationship diagram for the SDG 9 Lima project.
    caption: Relational model covering projects, public bodies, contractors, indicators, activities, and oversight.
role: Academic work; individual participation is not broken down in the reviewed files
dataSources:
  - Public sources referenced in the academic documentation
  - Course SQL files and modeling documents
dataNature: [public, academic]
outcomes:
  - Documented relational model with 12 main entities
  - T-SQL scripts structuring the case information
  - Power BI files prepared for the visualization layer
limitations:
  - The Power BI report has no safely available public publication.
  - Authorship and individual tasks are not separated in the available evidence.
draft: false
---

## The challenge

Organize heterogeneous information about public projects and infrastructure in Lima through an SDG 9 lens while preserving relationships among public bodies, contractors, execution, indicators, and beneficiaries.

## Approach

The work starts with entity and business-rule analysis, continues with relational design in SQL Server, and prepares a Power BI visualization layer. The documentation includes analysis questions, tables, scripts, and an entity-relationship diagram.

## Academic solution

The model connects projects with types, public organizations, contractors, activities, contracts, oversight, funding sources, and measurements. This structure supports progress and context queries without concentrating every field in a single table.

## Learning outcomes

- Translating a broad infrastructure and sustainability case into verifiable entities.
- Separating operational, documentary, and measurement dimensions.
- Preparing a relational database as the foundation for a BI report.

## Next improvement

Consolidate a data dictionary, document report measures, and create a demonstration version without sensitive data or links.
