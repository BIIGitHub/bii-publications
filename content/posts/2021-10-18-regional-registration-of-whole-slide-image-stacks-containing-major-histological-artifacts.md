---
template: post
title: Regional registration of whole slide image stacks containing major
  histological artifacts
date: 2020-12-04T06:42:47.349Z
journaltypes: Journal Paper
journal: " BMC Bioinformatics. 2020 Dec 4;21(1):558. doi: 10.1186/s12859-020-03907-6. "
pubmed: "33276732"
url: https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-020-03907-6
impactfactor: "3.169"
dateofacceptance: 2020-11-25T06:42:47.360Z
description: >
  Background

  High resolution 2D whole slide imaging provides rich information about the tissue structure. This information can be a lot richer if these 2D images can be stacked into a 3D tissue volume. A 3D analysis, however, requires accurate reconstruction of the tissue volume from the 2D image stack. This task is not trivial due to the distortions such as tissue tearing, folding and missing at each slide. Performing registration for the whole tissue slices may be adversely affected by distorted tissue regions. Consequently, regional registration is found to be more effective. In this paper, we propose a new approach to an accurate and robust registration of regions of interest for whole slide images. We introduce the idea of multi-scale attention for registration.
tags:
  - Paknezhad M
  - Loh SYM
  - Choudhury Y
  - Koh VKC
  - Yong TTK
  - Tan HS
  - Kanesvaran R
  - Tan PH
  - Peng JYS
  - Yu W
  - Tan YB
  - Loy YZ
  - Tan MH
  - Lee HK
categories:
  - Imaging Informatics Division
  - Computer Vision and Pattern Discovery for Bioimages
---
### Background

High resolution 2D whole slide imaging provides rich information about the tissue structure. This information can be a lot richer if these 2D images can be stacked into a 3D tissue volume. A 3D analysis, however, requires accurate reconstruction of the tissue volume from the 2D image stack. This task is not trivial due to the distortions such as tissue tearing, folding and missing at each slide. Performing registration for the whole tissue slices may be adversely affected by distorted tissue regions. Consequently, regional registration is found to be more effective. In this paper, we propose a new approach to an accurate and robust registration of regions of interest for whole slide images. We introduce the idea of multi-scale attention for registration.

### Results

Using mean similarity index as the metric, the proposed algorithm (mean ± SD 0.84±0.11) followed by a fine registration algorithm (0.86±0.08) outperformed the state-of-the-art linear whole tissue registration algorithm (0.74±0.19) and the regional version of this algorithm (0.81±0.15). The proposed algorithm also outperforms the state-of-the-art nonlinear registration algorithm (original: 0.82±0.12, regional: 0.77±0.22) for whole slide images and a recently proposed patch-based registration algorithm (patch size 256: 0.79±0.16 , patch size 512: 0.77±0.16) for medical images.

### Conclusion

Using multi-scale attention mechanism leads to a more robust and accurate solution to the problem of regional registration of whole slide images corrupted in some parts by major histological artifacts in the imaged tissue.