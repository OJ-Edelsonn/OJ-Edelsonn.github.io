---
projectId: saps
translationKey: saps
title: SAPS — Sistema Administrador de Proyectos
slug: saps-sistema-administrador-proyectos
locale: es
summary: Aplicación web académica para centralizar proyectos integradores, entregables, observaciones, rúbricas, calificaciones y reportes.
category: systems-web
careerArea: systems
projectType: personal
collaboration: individual
course: Lenguaje de Programación II
status: published
featured: true
priority: 6
date: 2026-07-06
technologies: [Java 17, Spring Boot 3, Thymeleaf, Spring Data JPA, Spring Security, MySQL]
repositoryUrl: https://github.com/OJ-Edelsonn/saps-sistema-administrador-proyectos-son
coverImage: /images/projects/saps/01-alcance-sistema.webp
gallery:
  - src: /images/projects/saps/01-alcance-sistema.webp
    alt: Alcance funcional del sistema SAPS.
    caption: Actores y procesos organizados en módulos independientes.
  - src: /images/projects/saps/02-arquitectura-mvc.webp
    alt: Arquitectura MVC por capas del sistema SAPS.
    caption: Separación entre vistas, controladores, servicios, repositorios y persistencia.
  - src: /images/projects/saps/03-modelo-datos.webp
    alt: Modelo de entidades del sistema SAPS.
    caption: Relaciones principales del ciclo de un proyecto integrador.
role: Proyecto personal desarrollado individualmente
dataSources:
  - Datos iniciales y pruebas funcionales en entorno local
dataNature: [academic]
outcomes:
  - Flujo integrado desde autenticación hasta reportes
  - Módulos para seguimiento, rúbricas y calificaciones
  - Arquitectura MVC por capas y persistencia relacional
limitations:
  - La ejecución demostrativa requiere MySQL local y no dispone de despliegue público.
  - La versión actual no exporta reportes ni realiza carga física de archivos.
draft: false
---

## El reto

Centralizar el seguimiento académico de proyectos integradores que normalmente se distribuye entre hojas de cálculo, mensajes, archivos y observaciones separadas.

## Enfoque

SAPS representa el ciclo completo de un proyecto: cursos y grupos, registro del proyecto, entregables, observaciones, rúbricas, criterios, calificaciones y reporte final. Los roles de administrador, docente y estudiante diferencian el acceso.

## Solución

La aplicación usa Java 17 y Spring Boot 3 con vistas Thymeleaf, persistencia JPA y MySQL. La arquitectura separa controladores, servicios, repositorios, entidades y presentación para mantener responsabilidades claras.

## Capacidades implementadas

- Autenticación y roles con Spring Security.
- Gestión de usuarios, cursos, docentes, estudiantes y grupos.
- Registro de proyectos, entregables y observaciones.
- Rúbricas, criterios y calificaciones.
- Dashboard e informe general del proceso académico.

## Validación

La documentación registra pruebas funcionales aprobadas para autenticación, mantenimientos, proyectos, entregables, evaluación, dashboard y reportes. La evidencia visual proviene de la presentación técnica del proyecto; el informe original reservó las capturas de la interfaz sin insertarlas.

## Próximos pasos

Incorporar exportación de reportes, carga de archivos, notificaciones y un entorno de demostración aislado de la base local.
