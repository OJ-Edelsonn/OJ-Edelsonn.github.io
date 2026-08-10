---
projectId: sistema-web-despacho
translationKey: sistema-web-despacho
title: Sistema Web de Despacho
slug: sistema-web-despacho
locale: es
summary: Aplicación MVC académica para administrar cargas, despachos, conductores, tractos y remolques dentro de una operación de transporte.
category: operations-logistics
careerArea: systems
projectType: academic
collaboration: not-specified
course: Lenguaje de Programación II
status: published
featured: false
priority: 12
date: 2025-07-01
technologies: [Java 17, Spring Boot 3, Thymeleaf, Spring Data JPA, MySQL, Bootstrap 5]
repositoryUrl: https://github.com/OJ-Edelsonn/SistemaWebDespacho
role: Proyecto académico; la autoría individual no está especificada en el repositorio
dataSources:
  - Script SQL y datos de prueba incluidos en el repositorio
dataNature: [academic]
outcomes:
  - CRUD para cinco módulos operativos
  - Relación de cada despacho con carga, conductor, tracto y remolque
  - Estructura MVC documentada y ejecutable en entorno local
limitations:
  - Requiere una instancia local de MySQL y no dispone de demostración pública.
  - El alcance se concentra en operaciones CRUD y no documenta optimización de rutas.
draft: false
---

## El reto

Representar en una sola aplicación los recursos y relaciones necesarios para registrar un despacho: qué carga sale, quién conduce y qué unidades se asignan.

## Enfoque

El modelo separa cargas, despachos, conductores, tractos y remolques. La entidad despacho actúa como punto de coordinación entre los demás módulos y conserva sus llaves foráneas.

## Solución

La aplicación usa Spring Boot y Thymeleaf bajo una arquitectura MVC, con Spring Data JPA para persistencia y MySQL como base de datos. Cada módulo dispone de rutas de listado, registro, edición y eliminación.

## Aprendizajes

- Traducir relaciones operativas de transporte a un modelo relacional.
- Conectar controladores, vistas y repositorios en una aplicación completa.
- Documentar dependencias y pasos de ejecución para revisión académica.

## Próximos pasos

Incorporar validaciones de disponibilidad, estados operativos, trazabilidad de cambios y pruebas automatizadas.
