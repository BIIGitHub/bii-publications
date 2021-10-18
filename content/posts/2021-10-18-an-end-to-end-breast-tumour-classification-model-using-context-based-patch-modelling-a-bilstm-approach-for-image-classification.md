---
template: post
title: An end-to-end breast tumour classification model using context-based
  patch modelling - A BiLSTM approach for image classification
date: 2020-12-04T06:38:51.958Z
journaltypes: Journal Paper
journal: "Computerized Medical Imaging and Graphics, Vol. 87, Jan 2021, doi:
  10.1016/j.compmedimag.2020.101838"
pubmed: "33340945"
url: https://www.sciencedirect.com/science/article/pii/S0895611120301336
impactfactor: "3.169"
dateofacceptance: 2020-11-25T06:38:52.052Z
description: "Researchers working on computational analysis of Whole Slide
  Images (WSIs) in histopathology have primarily resorted to patch-based
  modelling due to large resolution of each WSI. The large resolution makes WSIs
  infeasible to be fed directly into the machine learning models due to
  computational constraints. However, due to patch-based analysis, most of the
  current methods fail to exploit the underlying spatial relationship among the
  patches. "
tags:
  - Tripathi S
  - Singh SK
  - Lee HK
categories:
  - Imaging Informatics Division
  - Computer Vision and Pattern Discovery for Bioimages
---
Researchers working on computational analysis of Whole Slide Images (WSIs) in histopathology have primarily resorted to patch-based modelling due to large resolution of each WSI. The large resolution makes WSIs infeasible to be fed directly into the machine learning models due to computational constraints. However, due to patch-based analysis, most of the current methods fail to exploit the underlying spatial relationship among the patches. In our work, we have tried to integrate this relationship along with feature-based correlation among the extracted patches from the particular tumorous region. The tumour regions extracted from WSI have arbitrary dimensions having the range 20,570 to 195 pixels across width and 17,290 to 226 pixels across height. For the given task of classification, we have used BiLSTMs to model both forward and backward contextual relationship. Also, using RNN based model, the limitation of sequence size is eliminated which allows the modelling of variable size images within a deep learning model. We have also incorporated the effect of spatial continuity by exploring different scanning techniques used to sample patches. To establish the efficiency of our approach, we trained and tested our model on two datasets, microscopy images and WSI tumour regions. Both datasets were published by ICIAR BACH Challenge 2018. Finally, we compared our results with top 5 teams who participated in the BACH challenge and achieved the top accuracy of 90% for microscopy image dataset. For WSI tumour region dataset, we compared the classification results with state of the art deep learning networks such as ResNet, DenseNet, and InceptionV3 using maximum voting technique. We achieved the highest performance accuracy of 84%. We found out that BiLSTMs with CNN features have performed much better in modelling patches into an end-to-end Image classification network. Additionally, the variable dimensions of WSI tumour regions were used for classification without the need for resizing. This suggests that our method is independent of tumour image size and can process large dimensional images without losing the resolution details.