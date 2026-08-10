---
projectId: ferresystem
translationKey: ferresystem
title: FerreSystem
slug: ferresystem
locale: es
summary: Sistema web full-stack para digitalizar el catálogo, la cotización y la gestión operativa de una ferretería familiar.
category: systems-web
careerArea: systems
projectType: personal
collaboration: individual
status: published
featured: true
priority: 5
date: 2026-06-01
technologies: [PHP 8, MySQL, JavaScript, Bootstrap, Chart.js, MVC]
repositoryUrl: https://github.com/OJ-Edelsonn/ferresystem
demoUrl: https://jsferreteria.infinityfreeapp.com/public/index.php
coverImage: /images/projects/ferresystem/00-catalogo-real.webp
gallery:
  - src: /images/projects/ferresystem/00-catalogo-real.webp
    alt: Muestra de productos publicados en el catálogo real de FerreSystem.
    caption: Recursos visuales obtenidos de la demostración pública autorizada.
  - src: /images/projects/ferresystem/casco-seguridad.webp
    alt: Casco de seguridad publicado en el catálogo de FerreSystem.
  - src: /images/projects/ferresystem/carretilla.webp
    alt: Carretilla de construcción publicada en el catálogo de FerreSystem.
role: Proyecto personal full-stack
dataSources:
  - Catálogo y operación demostrativa de la ferretería familiar
dataNature: []
outcomes:
  - Catálogo público responsive con búsqueda y cotización
  - Panel administrativo con inventario, ventas, caja, pedidos y obras
  - Demostración pública y repositorio documentado
limitations:
  - La demo está alojada en un servicio externo y algunas rutas dependen de su configuración original.
  - El acceso administrativo no se publica en el portafolio.
draft: false
---

## El reto

Llevar una operación ferretera familiar a una experiencia web que atienda dos necesidades: facilitar consultas y cotizaciones al cliente, y organizar el control interno del negocio.

## Enfoque

La solución separa el recorrido público del panel administrativo. El lado cliente prioriza navegación móvil, catálogo, servicios y contacto; el panel concentra inventario, ventas, pedidos, caja y seguimiento de trabajos.

## Solución

FerreSystem está construido con PHP 8 y MySQL bajo una organización MVC simplificada. La interfaz usa Bootstrap, JavaScript y Chart.js para combinar formularios operativos, tablas y visualizaciones de gestión.

## Capacidades implementadas

- Catálogo con búsqueda, fichas de producto y flujo de cotización.
- Contacto y coordinación mediante WhatsApp.
- Inventario con alertas y descuento de stock asociado a ventas.
- Gestión de caja, pedidos y presupuestos de trabajos.
- Dashboard administrativo con indicadores.

## Evidencia y alcance

La demo pública muestra datos de contacto y ubicación del negocio con autorización del titular. El portafolio enlaza únicamente la experiencia pública; las credenciales y el panel administrativo permanecen fuera de exposición.

## Próximos pasos

Fortalecer las rutas de despliegue, ampliar las pruebas automatizadas y consolidar un proceso de actualización de catálogo.
