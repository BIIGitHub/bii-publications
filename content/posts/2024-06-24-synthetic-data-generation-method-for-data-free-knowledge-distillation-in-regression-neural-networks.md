---
template: post
title: Synthetic data generation method for data-free knowledge distillation in
  regression neural networks
date: 2023-05-03T08:33:25.013Z
journaltypes: Journal Paper
journal: "Expert Systems with Applications, Vol 227, 1 Oct 2023, 120327, doi:
  10.1016/j.eswa.2023.120327"
url: https://www.sciencedirect.com/science/article/abs/pii/S0957417423008291
impactfactor: "8.5"
dateofacceptance: 2023-04-29T08:33:25.031Z
description: "Knowledge distillation is the technique of compressing a larger
  neural network, known as the teacher, into a smaller neural network, known as
  the student, while still trying to maintain the performance of the larger
  neural network as much as possible. "
tags:
  - Zhou T
  - Chiam KH
categories:
  - Biophysical Modelling
  - Cellular Image Informatics Division
---
<!--StartFragment-->

[Knowledge distillation](https://www.sciencedirect.com/topics/computer-science/knowledge-distillation "Learn more about Knowledge distillation from ScienceDirect's AI-generated Topic Pages") is the technique of compressing a larger [neural network](https://www.sciencedirect.com/topics/computer-science/neural-network "Learn more about neural network from ScienceDirect's AI-generated Topic Pages"), known as the teacher, into a smaller [neural network](https://www.sciencedirect.com/topics/computer-science/neural-network "Learn more about neural network from ScienceDirect's AI-generated Topic Pages"), known as the student, while still trying to maintain the performance of the larger neural network as much as possible. Existing methods of knowledge distillation are mostly applicable for [classification tasks](https://www.sciencedirect.com/topics/computer-science/classification-task "Learn more about classification tasks from ScienceDirect's AI-generated Topic Pages"). Many of them also require access to the data used to train the teacher model. To address the problem of knowledge distillation for [regression tasks](https://www.sciencedirect.com/topics/computer-science/regression-task "Learn more about regression tasks from ScienceDirect's AI-generated Topic Pages") in the absence of original [training data](https://www.sciencedirect.com/topics/computer-science/training-data "Learn more about training data from ScienceDirect's AI-generated Topic Pages"), the existing method uses a [generator model](https://www.sciencedirect.com/topics/computer-science/model-generator "Learn more about generator model from ScienceDirect's AI-generated Topic Pages") trained adversarially against the student model to generate [synthetic data](https://www.sciencedirect.com/topics/computer-science/synthetic-data "Learn more about synthetic data from ScienceDirect's AI-generated Topic Pages") to train the student model. In this study, we propose a new [synthetic data](https://www.sciencedirect.com/topics/computer-science/synthetic-data "Learn more about synthetic data from ScienceDirect's AI-generated Topic Pages") generation strategy that directly optimizes for a large but bounded difference between the student and teacher model. Our results on benchmark experiments demonstrate that the proposed strategy allows the student model to learn better and emulate the performance of the teacher model more closely.

<!--EndFragment-->