---
projectId: ferregestor-web
translationKey: ferregestor-web
title: FerreGestor Web
slug: ferregestor-web
locale: es
summary: Proyecto final académico de gestión de ventas e inventario que documenta módulos, modelo de datos y una arquitectura Java Web clásica.
category: systems-web
careerArea: systems
projectType: academic
collaboration: individual
course: Lenguaje de Programación II
status: documentation-improvement
featured: false
priority: 14
date: 2026-06-01
technologies: [Java, JSP, Servlets, JDBC, MySQL, Maven, Bootstrap]
repositoryUrl: https://github.com/OJ-Edelsonn/ferregestor-web
role: Proyecto académico individual
dataSources:
  - Script local con categorías, proveedores, productos, clientes, ventas y detalle de venta
dataNature: [academic]
outcomes:
  - Modelo maestro–detalle para ventas e inventario
  - Módulos documentados para cinco entidades comerciales
  - Guías de instalación y trabajo en NetBeans incluidas en el repositorio
limitations:
  - Requiere Tomcat y MySQL en un entorno local.
  - Comparte dominio con ToolBox Gestor Web, por lo que se presenta como antecedente académico separado.
draft: false
---

## El reto

Representar el ciclo básico de ventas e inventario de una ferretería con tecnologías Java Web solicitadas por el curso y una estructura defendible durante la exposición.

## Enfoque

FerreGestor organiza categorías, proveedores, productos, clientes, ventas y detalle de venta. La documentación explica la conexión JDBC, el servidor Tomcat, el modelo relacional y la estructura del proyecto.

## Relación con otros proyectos

Este repositorio es un trabajo académico separado. ToolBox Gestor Web desarrolla una iteración posterior con alcance y estado propios; FerreSystem y Ferretería Inteligente pertenecen a iniciativas personales diferentes.

## Aprendizajes

- Diseñar un modelo maestro–detalle para ventas.
- Mantener separadas la lógica de acceso a datos, el control y la vista.
- Documentar el entorno de ejecución de una aplicación Java Web.

## Próximos pasos

Revisar el estado efectivo de cada módulo, añadir pruebas y capturas de flujos completos para evitar depender solo de la documentación.
