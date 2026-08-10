---
projectId: ods9-lima
translationKey: ods9-lima
title: ODS 9 Lima — SQL Server y Power BI
slug: ods9-lima-sql-server-power-bi
locale: es
summary: Proyecto académico de base de datos y visualización para organizar información sobre infraestructura, innovación y proyectos públicos de Lima.
category: data-bi
careerArea: systems
projectType: academic
collaboration: not-specified
course: Base de Datos
status: documentation-improvement
featured: false
priority: 7
date: 2025-07-01
technologies: [SQL Server, T-SQL, Power BI, Modelamiento relacional, ETL]
coverImage: /images/projects/academic/ods9/01-modelo-entidad-relacion.webp
gallery:
  - src: /images/projects/academic/ods9/01-modelo-entidad-relacion.webp
    alt: Diagrama entidad-relación del proyecto ODS 9 Lima.
    caption: Modelo relacional de proyectos, organismos, contratistas, indicadores, actividades y supervisión.
role: Trabajo académico; la participación individual no está desglosada en los archivos revisados
dataSources:
  - Fuentes públicas referenciadas en la documentación académica
  - Archivos SQL y documentos de modelamiento del curso
dataNature: [public, academic]
outcomes:
  - Modelo relacional documentado con 12 entidades principales
  - Scripts T-SQL para estructurar la información del caso
  - Archivos de Power BI preparados para la capa de visualización
limitations:
  - El reporte de Power BI no dispone de publicación pública segura.
  - La autoría y las tareas individuales no están diferenciadas en la evidencia disponible.
draft: false
---

## El reto

Organizar información heterogénea sobre proyectos públicos e infraestructura de Lima bajo el enfoque del ODS 9, preservando relaciones entre organismos, contratistas, ejecución, indicadores y beneficiarios.

## Enfoque

El trabajo parte del análisis de entidades y reglas de negocio, continúa con el diseño relacional en SQL Server y prepara una capa de visualización en Power BI. La documentación incluye preguntas de análisis, tablas, scripts y un diagrama entidad-relación.

## Solución académica

El modelo conecta proyectos con tipos, entidades públicas, empresas contratistas, actividades, contratos, supervisión, fuentes de financiamiento y mediciones. Esta estructura permite consultar el avance y el contexto de iniciativas de infraestructura sin concentrar todo en una sola tabla.

## Aprendizajes

- Traducir un caso amplio de sostenibilidad e infraestructura a entidades verificables.
- Separar dimensiones operativas, documentales y de medición.
- Preparar una base relacional como soporte para un reporte de BI.

## Siguiente mejora

Consolidar un diccionario de datos, documentar las medidas del reporte y producir una versión demostrativa sin datos o enlaces sensibles.
