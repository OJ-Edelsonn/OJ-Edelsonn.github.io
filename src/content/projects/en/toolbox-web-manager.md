---
projectId: toolbox-gestor-web
translationKey: toolbox-gestor-web
title: ToolBox Web Manager
slug: toolbox-web-manager
locale: en
summary: An academic Java Web work in progress organizing products, categories, suppliers, customers, and basic inventory for a hardware store.
category: systems-web
careerArea: systems
projectType: academic
collaboration: individual
course: Programming Languages II
status: in-progress
featured: false
priority: 13
date: 2026-07-01
technologies: [Java 17, JSP, Servlets, JDBC, MySQL, MVC]
repositoryUrl: https://github.com/OJ-Edelsonn/toolbox-gestor-web
role: Individual academic project in progress
dataSources:
  - Test data included in the database script
dataNature: [academic]
outcomes:
  - CRUD implemented for categories, suppliers, customers, and products
  - Low-stock product query
  - MVC separation across DAO, Servlets, and JSP views
limitations:
  - The repository reports an approximate 60% partial completion.
  - Sales, line-item, and automatic stock-deduction modules remain pending.
draft: false
---

## The challenge

Build an understandable academic system that organizes basic hardware-store records while clearly demonstrating the flow of a classic Java Web application.

## Approach

The project separates JSP views, Servlet controllers, DAO objects, and JDBC connectivity. Its first phase prioritizes master-data maintenance and stock queries before implementing sales.

## Current state

The repository documents a partial phase: home page, test database, JDBC connection, reusable layout, four CRUD modules, and a low-stock query. Sales and automatic inventory updates remain pending.

## Learning outcomes

- Applying MVC without a high-level framework.
- Using prepared queries and controlled JDBC resource closure.
- Dividing a solution into deliveries with explicit scope.

## Next steps

Complete the master-detail sales flow, validate stock, and finish user and presentation documentation.
