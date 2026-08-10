---
projectId: sistema-web-despacho
translationKey: sistema-web-despacho
title: Dispatch Management Web System
slug: dispatch-management-web-system
locale: en
summary: An academic MVC application managing loads, dispatches, drivers, tractors, and trailers within a transportation operation.
category: operations-logistics
careerArea: systems
projectType: academic
collaboration: not-specified
course: Programming Languages II
status: published
featured: false
priority: 12
date: 2025-07-01
technologies: [Java 17, Spring Boot 3, Thymeleaf, Spring Data JPA, MySQL, Bootstrap 5]
repositoryUrl: https://github.com/OJ-Edelsonn/SistemaWebDespacho
role: Academic project; individual authorship is not specified in the repository
dataSources:
  - SQL script and test data included in the repository
dataNature: [academic]
outcomes:
  - CRUD operations for five operational modules
  - Dispatch relationships with loads, drivers, tractors, and trailers
  - Documented MVC structure executable in a local environment
limitations:
  - Requires a local MySQL instance and has no public demonstration.
  - Scope centers on CRUD operations and does not document route optimization.
draft: false
---

## The challenge

Represent in one application the resources and relationships needed to record a dispatch: which load moves, who drives, and which units are assigned.

## Approach

The model separates loads, dispatches, drivers, tractors, and trailers. The dispatch entity coordinates the remaining modules and preserves their foreign-key relationships.

## Solution

The application uses Spring Boot and Thymeleaf in an MVC architecture, Spring Data JPA for persistence, and MySQL as the database. Each module includes routes for listing, registration, editing, and deletion.

## Learning outcomes

- Translating transportation relationships into a relational model.
- Connecting controllers, views, and repositories in a complete application.
- Documenting dependencies and runtime steps for academic review.

## Next steps

Add availability rules, operational statuses, change traceability, and automated tests.
