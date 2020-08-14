---
template: post
title: Evaluation of tools for long read RNA-seq splice-aware alignment
date: 2017-10-23T07:53:12.083Z
journaltypes: Journal Paper
journal: "Bioinformatics, 2017, Pg 1-7, doi: 10.1093/bioinformatics/btx668"
pubmed: "29069314"
url: https://academic.oup.com/bioinformatics/article/34/5/748/4562330
impactfactor: "7.037"
dateofacceptance: 2017-10-18T07:53:12.125Z
description: >-
  Motivation


  High-throughput sequencing has transformed the study of gene expression levels through RNA-seq, a technique that is now routinely used by various fields, such as genetic research or diagnostics. The advent of third generation sequencing technologies providing significantly longer reads opens up new possibilities. However, the high error rates common to these technologies set new bioinformatics challenges for the gapped alignment of reads to their genomic origin. 
tags:
  - Krizanovic K
  - Echchiki A
  - Roux J
  - Sikic M.
categories:
  - "Biomolecular Function Discovery Division "
---
<!--StartFragment-->

**Motivation**

High-throughput sequencing has transformed the study of gene expression levels through RNA-seq, a technique that is now routinely used by various fields, such as genetic research or diagnostics. The advent of third generation sequencing technologies providing significantly longer reads opens up new possibilities. However, the high error rates common to these technologies set new bioinformatics challenges for the gapped alignment of reads to their genomic origin. In this study, we have explored how currently available RNA-seq splice-aware alignment tools cope with increased read lengths and error rates. All tested tools were initially developed for short NGS reads, but some have claimed support for long Pacific Biosciences (PacBio) or even Oxford Nanopore Technologies (ONT) MinION reads.

**Results**

The tools were tested on synthetic and real datasets from two technologies (PacBio and ONT MinION). Alignment quality and resource usage were compared across different aligners. The effect of error correction of long reads was explored, both using self-correction and correction with an external short reads dataset. A tool was developed for evaluating RNA-seq alignment results. This tool can be used to compare the alignment of simulated reads to their genomic origin, or to compare the alignment of real reads to a set of annotated transcripts. Our tests show that while some RNA-seq aligners were unable to cope with long error-prone reads, others produced overall good results. We further show that alignment accuracy can be improved using error-corrected reads.

<!--EndFragment-->