---
projectId: saps
translationKey: saps
title: SAPS — Project Administration System
slug: saps-project-administration-system
locale: en
summary: An academic web application centralizing integrative projects, deliverables, observations, rubrics, grades, and reports.
category: systems-web
careerArea: systems
projectType: personal
collaboration: individual
course: Programming Languages II
status: published
featured: true
priority: 6
date: 2026-07-06
technologies: [Java 17, Spring Boot 3, Thymeleaf, Spring Data JPA, Spring Security, MySQL]
repositoryUrl: https://github.com/OJ-Edelsonn/saps-sistema-administrador-proyectos-son
coverImage: /images/projects/saps/01-alcance-sistema.webp
gallery:
  - src: /images/projects/saps/01-alcance-sistema.webp
    alt: Functional scope of the SAPS system.
    caption: Actors and processes organized into independent modules.
  - src: /images/projects/saps/02-arquitectura-mvc.webp
    alt: Layered MVC architecture of SAPS.
    caption: Separation across views, controllers, services, repositories, and persistence.
  - src: /images/projects/saps/03-modelo-datos.webp
    alt: SAPS entity model.
    caption: Main relationships in the lifecycle of an integrative project.
role: Personal project developed individually
dataSources:
  - Seed data and functional tests in a local environment
dataNature: [academic]
outcomes:
  - Integrated flow from authentication to reporting
  - Modules for tracking, rubrics, and grading
  - Layered MVC architecture and relational persistence
limitations:
  - The demo runtime requires a local MySQL instance and has no public deployment.
  - The current version does not export reports or physically upload files.
draft: false
---

## The challenge

Centralize the academic tracking of integrative projects that is commonly distributed across spreadsheets, messages, loose files, and separate observations.

## Approach

SAPS represents the complete project lifecycle: courses and groups, project registration, deliverables, observations, rubrics, criteria, grades, and final reporting. Administrator, teacher, and student roles provide differentiated access.

## Solution

The application uses Java 17 and Spring Boot 3 with Thymeleaf views, JPA persistence, and MySQL. Its architecture separates controllers, services, repositories, entities, and presentation to keep responsibilities clear.

## Implemented capabilities

- Authentication and roles with Spring Security.
- Users, courses, teachers, students, and groups.
- Projects, deliverables, and observations.
- Rubrics, criteria, and grades.
- Dashboard and general academic-process report.

## Validation

The documentation records approved functional checks for authentication, maintenance modules, projects, deliverables, evaluation, dashboard, and reports. Visual evidence comes from the project’s technical presentation; the original report reserved interface screenshot spaces without inserting the images.

## Next steps

Add report exports, file uploads, notifications, and a demonstration environment isolated from the local database.
