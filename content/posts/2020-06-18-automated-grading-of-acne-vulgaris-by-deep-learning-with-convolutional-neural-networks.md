---
template: post
title: >-
  Automated grading of acne vulgaris by deep learning with convolutional neural
  networks
date: 2020-03-26T07:06:52.938Z
journaltypes: Journal Paper
journal: >-
  Skin Research & Technology, Vol 26, Issue 2, March 2020, Pg 187-192, doi:
  10.1111/srt.12794 
pubmed: '3156582'
url: ' https://onlinelibrary.wiley.com/doi/abs/10.1111/srt.12794 '
impactfactor: '1.657'
dateofacceptance: 2020-06-18T07:06:52.947Z
description: >-
  BACKGROUND:

  The visual assessment and severity grading of acne vulgaris by physicians can
  be subjective, resulting in inter- and intra-observer variability.


  OBJECTIVE:

  To develop and validate an algorithm for the automated calculation of the
  Investigator's Global Assessment (IGA) scale, to standardize acne severity and
  outcome measurements.
tags:
  - Lim ZV
  - Akram F
  - Ngo CP
  - Winarto AA
  - Lee WQ
  - Liang K
  - Oon HH
  - Thng STG
  - Lee HK.
categories:
  - Computer Vision and Pattern Discovery for Bioimages
  - Imaging Informatics Division
---
<!--StartFragment-->

BACKGROUND:\
The visual assessment and severity grading of acne vulgaris by physicians can be subjective, resulting in inter- and intra-observer variability.

OBJECTIVE:\
To develop and validate an algorithm for the automated calculation of the Investigator's Global Assessment (IGA) scale, to standardize acne severity and outcome measurements.

MATERIALS AND METHODS:\
A total of 472 photographs (retrieved 01/01/2004-04/08/2017) in the frontal view from 416 acne patients were used for training and testing. Photographs were labeled according to the IGA scale in three groups of IGA clear/almost clear (0-1), IGA mild (2), and IGA moderate to severe (3-4). The classification model used a convolutional neural network, and models were separately trained on three image sizes. The photographs were then subjected to analysis by the algorithm, and the generated automated IGA scores were compared to clinical scoring. The prediction accuracy of each IGA grade label and the agreement (Pearson correlation) of the two scores were computed.

RESULTS:\
The best classification accuracy was 67%. Pearson correlation between machine-predicted score and human labels (clinical scoring and researcher scoring) for each model and various image input sizes was 0.77. Correlation of predictions with clinical scores was highest when using Inception v4 on the largest image size of 1200 × 1600. Two sets of human labels showed a high correlation of 0.77, verifying the repeatability of the ground truth labels. Confusion matrices show that the models performed sub-optimally on the IGA 2 label.

CONCLUSION:\
Deep learning techniques harnessing high-resolution images and large datasets will continue to improve, demonstrating growing potential for automated clinical image analysis and grading.

<!--EndFragment-->
