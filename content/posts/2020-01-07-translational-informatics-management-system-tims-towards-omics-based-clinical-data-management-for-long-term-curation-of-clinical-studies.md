---
template: post
title: >-
  Translational Informatics Management System (TIMS): Towards OMICS based
  clinical data management for long term curation of clinical studies
date: 2019-08-03T07:20:58.632Z
journaltypes: Journal Paper
journal: 'Journal of Open Source Software, 2019, 4(40), 1533, DOI: 10.21105/joss.01533'
url: 'https://joss.theoj.org/papers/3c5651fb27f0f08d37fc17a2bc31cfee'
impactfactor: '1.01'
dateofacceptance: 2019-08-03T07:20:58.646Z
description: >-
  With the maturation of sequencing technology over the past decade, the cost
  associated to an OMICS based clinical study is no longer a limiting factor
  even for large cohorts, e.g., the UK’s 100K genomes project (Samuel &
  Farsides, 2017). However, the real cost of such a study goes beyond sequencing
  or data generation in general (Muir et al., 2016); the amount of raw
  sequencing data per sample can be quite sizable and quickly amass to quite a
  collection even for a modest cohort in contrast to the array based technology
  that it has inevitably displaced.
uploadfile: /media/uploads/translational-informatics-management.pdf
tags:
  - TAY WH
  - TANTOSO E
  - EISENHABER F
  - WONG WC
categories:
  - Analytics of Biological Sequence Data
  - Gene Function Prediction
  - 'Biomolecular Function Discovery Division '
---
<!--StartFragment-->

With the maturation of sequencing technology over the past decade, the cost associated to an OMICS based clinical study is no longer a limiting factor even for large cohorts, e.g., the UK’s 100K genomes project (Samuel & Farsides, 2017). However, the real cost of such a study goes beyond sequencing or data generation in general (Muir et al., 2016); the amount of raw sequencing data per sample can be quite sizable and quickly amass to quite a collection even for a modest cohort in contrast to the array based technology that it has inevitably displaced.

Often, a poorly tackled area in the post data production of cohort studies is the concerted management of the clinical meta-information (e.g., subjects’ demographics, multiple records of domain specific clinical measures and other information) and the associated OMICS datasets over the course of these studies and eventually their long-term curation after their publication. In particular, these voluminous OMICS datasets require heavy preprocessing to obtain analysis-ready format (e.g., gene count quantification, genetic variants and mutations) prior to any phenotype genotype analysis. Another important consideration is the ability to re-processthe OMICS datasets with alternative or updated algorithms where multiple datasets may be aggregated to perform analysis to test new hypotheses or to simply affirm the reproducibility (Fanelli, 2018) of the clinical results in a larger set. Although heavier systems (e.g., SysMO SEEK, DIPSBC, openBIS, Gaggle/BRM) do exist, they are not necessarily open source freeware and they often require complex deployment and distributed IT infrastructure (Wruck,\
Peuker, & Regenbrecht, 2014).

Specifically, we refer to an OMICS-based clinical data management open-source software that curates study-related clinical information, manages the raw processing of diverse OMICS datasets to a preprocessed analysis ready state and finally visualizes the clinical information and processed output in a single access-controlled and audit trailed environment. Most importantly, this data management system should provide a skeletal open-source software framework for which any appropriate OMICS pipelines and visualizers can be integrated seamlessly in a scaleable fashion. For this purpose, the Translational Informatics Management System (TIMS)\
software suite was built.

<!--EndFragment-->
