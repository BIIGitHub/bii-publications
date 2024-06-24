---
template: post
title: "ContrastivePose: A contrastive learning approach for self-supervised
  feature engineering for pose estimation and behavorial classification of
  interacting animals"
date: 2023-08-29T08:21:00.994Z
journaltypes: Journal Paper
journal: "Computers in Biology and Medicine, Vol 165, Oct 2023, 107416, doi:
  10.1016/j.compbiomed.2023.107416"
url: https://www.sciencedirect.com/science/article/abs/pii/S0010482523008818
impactfactor: "7.7"
dateofacceptance: 2023-08-28T08:21:01.007Z
description: >
  - Study of interaction behaviors in animals is a useful tool in neuroscience
  research.

  - Automated behavior analysis is enabled by machine learning using pose estimation.

  - Training supervised classification models faces bottleneck of manual labeling.

  - Contrastive learning improves model performance with unlabeled pose data.
tags:
  - Zhou T
  - Cheah CCH
  - Chin EWM
  - Chen J
  - Farm HJ
  - Goh ELK
  - Chiam KH
categories:
  - Biophysical Modelling
  - Cellular Image Informatics Division
---
<!--StartFragment-->

In recent years, supervised machine learning models trained on videos of animals with pose estimation data and behavior labels have been used for automated behavior classification. Applications include, for example, automated detection of neurological diseases in animal models. However, we identify two potential problems of such supervised learning approach. First, such models require a large amount of labeled data but the labeling of behaviors frame by frame is a laborious manual process that is not easily scalable. Second, such methods rely on handcrafted features obtained from pose estimation data that are usually designed empirically. In this paper, we propose to overcome these two problems using contrastive learning for self-supervised feature engineering on pose estimation data. Our approach allows the use of unlabeled videos to learn feature representations and reduce the need for handcrafting of higher-level features from pose positions. We show that this approach to feature representation can achieve better classification performance compared to handcrafted features alone, and that the performance improvement is due to contrastive learning on unlabeled data rather than the neural network architecture. The method has the potential to reduce the bottleneck of scarce labeled videos for training and improve performance of supervised behavioral classification models for the study of interaction behaviors in animals.

<!--EndFragment-->