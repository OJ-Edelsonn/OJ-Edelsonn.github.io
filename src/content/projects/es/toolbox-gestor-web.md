---
projectId: toolbox-gestor-web
translationKey: toolbox-gestor-web
title: ToolBox Gestor Web
slug: toolbox-gestor-web
locale: es
summary: Avance académico de un sistema Java Web para ordenar productos, categorías, proveedores, clientes e inventario básico de una ferretería.
category: systems-web
careerArea: systems
projectType: academic
collaboration: individual
course: Lenguaje de Programación II
status: in-progress
featured: false
priority: 13
date: 2026-07-01
technologies: [Java 17, JSP, Servlets, JDBC, MySQL, MVC]
repositoryUrl: https://github.com/OJ-Edelsonn/toolbox-gestor-web
role: Proyecto académico individual en desarrollo
dataSources:
  - Datos de prueba incluidos en el script de base de datos
dataNature: [academic]
outcomes:
  - CRUD implementado para categorías, proveedores, clientes y productos
  - Consulta de productos con stock bajo
  - Separación MVC con DAO, Servlets y vistas JSP
limitations:
  - El repositorio declara un avance parcial aproximado del 60 %.
  - Los módulos de ventas, detalle y descuento automático de stock permanecen pendientes.
draft: false
---

## El reto

Construir un sistema académico comprensible que ayude a ordenar registros comerciales básicos de una ferretería y, al mismo tiempo, permita explicar con claridad el flujo de una aplicación Java Web clásica.

## Enfoque

El proyecto separa vistas JSP, controladores Servlet, objetos DAO y conexión JDBC. La primera fase prioriza mantenimientos maestros y consultas de stock antes de abordar el registro de ventas.

## Estado real

El repositorio documenta una fase parcial: página principal, base de datos de prueba, conexión JDBC, layout reutilizable, cuatro módulos CRUD y consulta de stock bajo. Ventas y actualización automática de inventario siguen pendientes.

## Aprendizajes

- Aplicar MVC sin depender de un framework de alto nivel.
- Utilizar consultas preparadas y cierre controlado de recursos JDBC.
- Dividir una solución en entregas con alcance explícito.

## Próximos pasos

Completar el flujo maestro–detalle de ventas, validar stock y cerrar la documentación de usuario y exposición.
