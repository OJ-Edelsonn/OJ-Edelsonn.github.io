---
projectId: virtual-memory-simulation
translationKey: virtual-memory-simulation
title: Virtual versus Physical Memory Simulation
slug: virtual-vs-physical-memory-simulation
locale: en
summary: A reproducible Python experiment comparing FIFO and LRU on modern public traces while reporting page faults and relative costs.
category: architecture-research
careerArea: systems
projectType: academic
collaboration: individual
course: Computer Architecture
status: published
featured: false
priority: 9
date: 2026-07-10
technologies: [Python, pandas, Matplotlib, FIFO, LRU, Memory traces]
repositoryUrl: https://github.com/OJ-Edelsonn/memoria-virtual-vs-fisica-simulacion
coverImage: /images/projects/memoria-virtual/01-fifo-vs-lru.webp
gallery:
  - src: /images/projects/memoria-virtual/01-fifo-vs-lru.webp
    alt: Mean fault-rate comparison between FIFO and LRU by trace source.
    caption: Summary comparison of replacement policies across three trace families.
  - src: /images/projects/memoria-virtual/02-fallos-por-marcos.webp
    alt: Page-fault rate evolution by number of physical frames.
    caption: Experiment sensitivity under different physical-memory configurations.
role: Individual academic project published with code, processed data, and figures
dataSources:
  - Meta Tectonic Storage 2023
  - Meta Key-Value Cache 2024
  - Alibaba Cloud EBS 2020 — curated sample
dataNature: [public, academic]
outcomes:
  - 90 summarized experimental scenarios
  - FIFO and LRU comparison across 4, 8, 16, 32, and 64 frames
  - Pipeline that regenerates CSV tables and figures
limitations:
  - Timing values are relative units based on a cost model, not real hardware timings.
  - Conclusions depend on the samples and parameters documented in the repository.
draft: false
---

## The challenge

Explain with reproducible evidence how virtual-memory behavior changes with the replacement policy, physical-frame count, and reference workload.

## Approach

The experiment normalizes external traces published from 2020 to 2024 and evaluates prefixes of 10,000, 50,000, and 100,000 references. Each combination runs FIFO and LRU across five physical-memory sizes.

## Solution

The repository preserves the simulator, extraction scripts, trace manifest, hashes, detailed results, summaries, and figures. The model assigns one unit per access and a 100-unit page-fault penalty, so values represent relative cost.

## Learning outcomes

- Designing an experiment with explicit parameters and reproducible outputs.
- Separating source, normalization, simulation, summary, and visualization.
- Interpreting a metric within its limits instead of presenting it as real physical time.

## Next steps

Add more policies, further sensitivity analysis, and automated tests for the simulator logic.
