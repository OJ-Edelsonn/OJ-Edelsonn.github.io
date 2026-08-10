---
projectId: ferreteria-inteligente
translationKey: ferreteria-inteligente
title: J&S Ferretería Inteligente
slug: ferreteria-inteligente
locale: es
summary: Sistema web personal que combina catálogo, cotizador, administración de productos y lectura básica de interacciones para una ferretería familiar.
category: systems-web
careerArea: systems
projectType: personal
collaboration: individual
status: published
featured: true
priority: 11
date: 2026-07-01
technologies: [PHP, MySQL, JavaScript, Bootstrap, Chart.js, MVC]
repositoryUrl: https://github.com/OJ-Edelsonn/ferreteria-inteligente
coverImage: /images/projects/ferreteria-inteligente/01-inicio.webp
gallery:
  - src: /images/projects/ferreteria-inteligente/01-inicio.webp
    alt: Portada del sistema web J&S Ferretería Inteligente.
    caption: Experiencia pública orientada a catálogo, servicios, cotización y contacto.
role: Proyecto personal desarrollado individualmente con apoyo de Codex
dataSources:
  - Catálogo migrado desde una versión previa de la web de la ferretería
  - Datos demostrativos opcionales para probar el panel local
dataNature: [synthetic]
outcomes:
  - Catálogo conectado a MySQL con búsqueda y filtros
  - Cotizador y registro de búsquedas y vistas de producto
  - Panel local con productos, stock e indicadores de interacción
limitations:
  - La ejecución requiere PHP y MySQL en un entorno local configurado.
  - Las interacciones de demostración no representan comportamiento real de clientes.
draft: false
---

## El reto

Explorar una evolución de la presencia digital de una ferretería que, además de publicar productos, permita observar señales básicas de interés y mantener el catálogo desde un panel protegido.

## Enfoque

El proyecto separa la experiencia pública —inicio, catálogo, servicios, cotizador y contacto— del área administrativa. Cada búsqueda o vista puede registrarse para formar un historial de interacción consultable.

## Solución

La aplicación utiliza PHP y MySQL con una organización MVC ligera. El panel incorpora autenticación, CRUD de productos, gestión rápida de stock y gráficos; el sitio público ofrece 87 productos activos migrados desde FerreSystem.

## Relación con FerreSystem

Ferretería Inteligente es un proyecto separado. Comparte el contexto del negocio y parte del catálogo, pero ensaya una arquitectura y un foco distintos: interacción, mantenimiento de contenido y lectura del comportamiento de navegación.

## Próximos pasos

Consolidar pruebas, separar con mayor rigor los datos de demostración y preparar una instalación reproducible para evaluación técnica.
