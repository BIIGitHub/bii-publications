---
template: post
title: "Distribution based MIL pooling filters: Experiments on a lymph node
  metastases dataset"
date: 2023-04-20T13:48:00.000Z
journaltypes: Journal Paper
journal: "Medical Image Analysis, 2023, Vol. 87, July 2023, Article 102813, doi:
  10.1016/j.media.2023.102813"
url: https://www.sciencedirect.com/science/article/pii/S1361841523000749
impactfactor: "13.828"
dateofacceptance: 2023-04-07T13:49:00.000Z
description: Multiple instance learning (MIL), MIL pooling filters, Distribution
  pooling, Point estimate based pooling
uploadfile: /media/uploads/1362_distribution-based-mil-pooling-filters.pdf
tags:
  - Oner MU
  - Kye-Jet JMS
  - Lee HK
  - Sung WK
categories:
  - Imaging Informatics Division
  - Computer Vision and Pattern Discovery for Bioimages
---
<!--StartFragment-->

[Histopathology](https://www.sciencedirect.com/topics/medicine-and-dentistry/histopathology "Learn more about Histopathology from ScienceDirect's AI-generated Topic Pages") is a crucial diagnostic tool in cancer and involves the analysis of gigapixel slides. Multiple [instance learning](https://www.sciencedirect.com/topics/computer-science/instance-learning "Learn more about instance learning from ScienceDirect's AI-generated Topic Pages") (MIL) promises success in digital histopathology thanks to its ability to handle gigapixel slides and work with weak labels. MIL is a [machine learning](https://www.sciencedirect.com/topics/computer-science/machine-learning "Learn more about machine learning from ScienceDirect's AI-generated Topic Pages") paradigm that learns the mapping between bags of instances and bag labels. It represents a slide as a bag of patches and uses the slide’s weak label as the bag’s label. This paper introduces *distribution-based pooling filters* that obtain a bag-level representation by estimating marginal distributions of instance features. We formally prove that the distribution-based pooling filters are more expressive than the classical point estimate-based counterparts, like ‘max’ and ‘mean’ pooling, in terms of the amount of information captured while obtaining bag-level representations. Moreover, we empirically show that models with distribution-based pooling filters perform equal to or better than those with point estimate-based pooling filters on distinct real-world MIL tasks defined on the CAMELYON16 [lymph node metastases](https://www.sciencedirect.com/topics/medicine-and-dentistry/lymph-node-metastasis "Learn more about lymph node metastases from ScienceDirect's AI-generated Topic Pages") dataset. Our model with a distribution pooling filter achieves an area under the receiver operating characteristics curve value of 0.9325 (95% confidence interval: 0.8798 - 0.9743) in the tumor vs. normal slide [classification task](https://www.sciencedirect.com/topics/computer-science/classification-task "Learn more about classification task from ScienceDirect's AI-generated Topic Pages").

<!--EndFragment-->