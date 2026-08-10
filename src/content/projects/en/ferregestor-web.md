---
projectId: ferregestor-web
translationKey: ferregestor-web
title: FerreGestor Web
slug: ferregestor-web
locale: en
summary: A final academic sales and inventory project documenting modules, its data model, and a classic Java Web architecture.
category: systems-web
careerArea: systems
projectType: academic
collaboration: individual
course: Programming Languages II
status: documentation-improvement
featured: false
priority: 14
date: 2026-06-01
technologies: [Java, JSP, Servlets, JDBC, MySQL, Maven, Bootstrap]
repositoryUrl: https://github.com/OJ-Edelsonn/ferregestor-web
role: Individual academic project
dataSources:
  - Local script covering categories, suppliers, products, customers, sales, and sale details
dataNature: [academic]
outcomes:
  - Master-detail model for sales and inventory
  - Documented modules for five commercial entities
  - NetBeans installation and working guides included in the repository
limitations:
  - Requires Tomcat and MySQL in a local environment.
  - Shares a domain with ToolBox Web Manager and is presented as a separate academic predecessor.
draft: false
---

## The challenge

Represent a hardware store’s basic sales and inventory cycle using the Java Web technologies required by the course and a structure that can be explained in a presentation.

## Approach

FerreGestor organizes categories, suppliers, products, customers, sales, and sale details. Its documentation explains JDBC connectivity, Tomcat, the relational model, and project structure.

## Relationship with other projects

This repository is a separate academic assignment. ToolBox Web Manager is a later iteration with its own scope and status; FerreSystem and Smart Hardware Store are different personal initiatives.

## Learning outcomes

- Designing a master-detail sales model.
- Separating data access, control, and presentation responsibilities.
- Documenting the runtime environment of a Java Web application.

## Next steps

Review the effective state of each module, add tests, and capture complete workflows so the case does not rely only on documentation.
