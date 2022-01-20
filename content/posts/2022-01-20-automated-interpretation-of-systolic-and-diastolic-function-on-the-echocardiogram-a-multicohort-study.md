---
template: post
title: "Automated Interpretation of Systolic and Diastolic Function on the
  Echocardiogram: A Multicohort Study"
date: 2021-12-01T05:42:41.611Z
journaltypes: Journal Paper
journal: "The Lancet Digital Health, Vol 4, Issue 1, E46-E54, Jan 1 2022, doi:
  10.1016/S2589-7500(21)00235-1"
pubmed: "34863649"
url: https://www.thelancet.com/journals/landig/article/PIIS2589-7500(21)00235-1/fulltext
impactfactor: "24.519"
dateofacceptance: ""
description: Heart failure is a significant public health problem
  worldwide.  Early diagnosis and treatment can prevent disease progression and
  reduce the burden on health-care systems. Echocardiography is the most
  commonly used cardiac imaging modality and is generally considered the primary
  method for assessing cardiac structure and function in the diagnosis of heart
  failure.
uploadfile: /media/uploads/1284_automated-interpretation-of-systolic.pdf
tags:
  - Tromp J
  - Seekings PJ
  - Hung CL
  - Iversen MB
  - Frost MJ
  - Ouwerkerk W
  - Jiang Z
  - Eisenhaber F
  - Goh RSM
  - Zhao H
  - Huang W
  - Ling LH
  - Sim D
  - Cozzone P
  - Richards AM
  - Lee HK
  - Solomon SD
  - Lam CSP
  - Ezekowitz JA
categories:
  - Computer Vision and Pattern Discovery for Bioimages
  - Imaging Informatics Division
---
<!--StartFragment-->

**Background:** Echocardiography is the diagnostic modality for assessing cardiac systolic and diastolic function to diagnose and manage heart failure. However, manual interpretation of echocardiograms can be time consuming and subject to human error. Therefore, we developed a fully automated deep learning workflow to classify, segment, and annotate two-dimensional (2D) videos and Doppler modalities in echocardiograms.

**Methods:** We developed the workflow using a training dataset of 1145 echocardiograms and an internal test set of 406 echocardiograms from the prospective heart failure research platform (Asian Network for Translational Research and Cardiovascular Trials; ATTRaCT) in Asia, with previous manual tracings by expert sonographers. We validated the workflow against manual measurements in a curated dataset from Canada (Alberta Heart Failure Etiology and Analysis Research Team; HEART; n=1029 echocardiograms), a real-world dataset from Taiwan (n=31 241), the US-based EchoNet-Dynamic dataset (n=10 030), and in an independent prospective assessment of the Asian (ATTRaCT) and Canadian (Alberta HEART) datasets (n=142) with repeated independent measurements by two expert sonographers.

**Findings:** In the ATTRaCT test set, the automated workflow classified 2D videos and Doppler modalities with accuracies (number of correct predictions divided by the total number of predictions) ranging from 0·91 to 0·99. Segmentations of the left ventricle and left atrium were accurate, with a mean Dice similarity coefficient greater than 93% for all. In the external datasets (n=1029 to 10 030 echocardiograms used as input), automated measurements showed good agreement with locally measured values, with a mean absolute error range of 9-25 mL for left ventricular volumes, 6-10% for left ventricular ejection fraction (LVEF), and 1·8-2·2 for the ratio of the mitral inflow E wave to the tissue Doppler e' wave (E/e' ratio); and reliably classified systolic dysfunction (LVEF <40%, area under the receiver operating characteristic curve \[AUC] range 0·90-0·92) and diastolic dysfunction (E/e' ratio ≥13, AUC range 0·91-0·91), with narrow 95% CIs for AUC values. Independent prospective evaluation confirmed less variance of automated compared with human expert measurements, with all individual equivalence coefficients being less than 0 for all measurements.

**Interpretation:** Deep learning algorithms can automatically annotate 2D videos and Doppler modalities with similar accuracy to manual measurements by expert sonographers. Use of an automated workflow might accelerate access, improve quality, and reduce costs in diagnosing and managing heart failure globally.

<!--EndFragment-->