---
template: post
title: "CAFT: a deep learning‑based comprehensive abdominal fat analysis tool
  for large cohort studies"
date: 2021-08-02T08:21:30.561Z
journaltypes: Journal Paper
journal: "Magnetic Resonance Materials in Physics, Biology and Medicine, 2021
  Aug 2. doi: 10.1007/s10334-021-00946-9. Epub ahead of print. Erratum in:
  MAGMA. 2021 Sep 4"
pubmed: "34338926"
url: https://link.springer.com/article/10.1007%2Fs10334-021-00946-9
impactfactor: "2.31"
dateofacceptance: 2021-07-13T08:21:30.624Z
description: >-
  Background

  There is increasing appreciation of the association of obesity beyond co-morbidities, such as cancers, Type 2 diabetes, hypertension, and stroke to also impact upon the muscle to give rise to sarcopenic obesity. Phenotypic knowledge of obesity is crucial for profiling and management of obesity, as different fat—subcutaneous adipose tissue depots (SAT) and visceral adipose tissue depots (VAT) have various degrees of influence on metabolic syndrome and morbidities. Manual segmentation is time consuming and laborious. Study focuses on the development of a deep learning-based, complete data processing pipeline for MRI-based fat analysis, for large cohort studies which include (1) data augmentation and preprocessing (2) model zoo (3) visualization dashboard, and (4) correction tool, for automated quantification of fat compartments SAT and VAT.
tags:
  - Bhanu Prakash KN
  - Arvind CS
  - Yeow LY
  - Chen WX
  - Lim WS
  - Tan CH
categories:
  - Imaging Informatics Division
  - Clinical Data Analytics & Radiomics
---
### Background

There is increasing appreciation of the association of obesity beyond co-morbidities, such as cancers, Type 2 diabetes, hypertension, and stroke to also impact upon the muscle to give rise to sarcopenic obesity. Phenotypic knowledge of obesity is crucial for profiling and management of obesity, as different fat—subcutaneous adipose tissue depots (SAT) and visceral adipose tissue depots (VAT) have various degrees of influence on metabolic syndrome and morbidities. Manual segmentation is time consuming and laborious. Study focuses on the development of a deep learning-based, complete data processing pipeline for MRI-based fat analysis, for large cohort studies which include (1) data augmentation and preprocessing (2) model zoo (3) visualization dashboard, and (4) correction tool, for automated quantification of fat compartments SAT and VAT.

### Methods

Our sample comprised 190 healthy community-dwelling older adults from the Geri-LABS study with mean age of 67.85 ± 7.90 years, BMI 23.75 ± 3.65 kg/m2, 132 (69.5%) female, and mainly Chinese ethnicity. 3D-modified Dixon T1-weighted gradient-echo MR images were acquired. Residual global aggregation-based 3D U-Net (RGA-U-Net) and standard 3D U-Net were trained to segment SAT, VAT, superficial and deep subcutaneous adipose tissue depots (SSAT and DSAT). Manual segmentation from 26 subjects was used as ground truth during training. Data augmentations, random bias, noise and ghosting were carried out to increase the number of training datasets to 130. Segmentation accuracy was evaluated using Dice and Hausdorff metrics.

### Results

The accuracy of segmentation was SSAT:0.92, DSAT:0.88 and VAT:0.9. Average Hausdorff distance was less than 5 mm. Automated segmentation significantly correlated *R*2 > 0.99 (*p* < 0.001) with ground truth for all 3-fat compartments. Predicted volumes were within ± 1.96SD from Bland–Altman analysis.

### Conclusions

DL-based, comprehensive SSAT, DSAT, and VAT analysis tool showed high accuracy and reproducibility and provided a comprehensive fat compartment composition analysis and visualization in less than 10 s.