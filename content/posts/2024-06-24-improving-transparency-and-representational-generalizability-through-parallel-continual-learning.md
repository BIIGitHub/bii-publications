---
template: post
title: Improving transparency and representational generalizability through
  parallel continual learning
date: 2023-02-10T07:55:31.683Z
journaltypes: Journal Paper
journal: Neural Networks, Volume 161, April 2023, Pages 449-465,
  doi:10.1016/j.neunet.2023.02.007
pubmed: "36805261"
url: https://www.sciencedirect.com/science/article/abs/pii/S0893608023000709?via%3Dihub
impactfactor: "7.8"
dateofacceptance: ""
description: This paper takes a parallel learning approach in continual learning
  scenarios. We define parallel continual learning as learning a sequence of
  tasks where the data for the previous tasks, whose distribution may have
  shifted over time, are also available while learning new tasks.
tags:
  - Paknezhad M
  - Rengarajan H
  - Yuan C
  - Suresh S
  - Gupta M
  - Ramasamy S
  - Lee HK
categories:
  - Computer Vision and Pattern Discovery for Bioimages
  - Cellular Image Informatics Division
---
<!--StartFragment-->

This paper takes a parallel learning approach in continual learning scenarios. We define parallel continual learning as learning a sequence of tasks where the data for the previous tasks, whose distribution may have shifted over time, are also available while learning new tasks. We propose a parallel continual learning method by assigning subnetworks to each task, and simultaneously training only the assigned subnetworks on their corresponding tasks. In doing so, some parts of the network will be shared across multiple tasks. This is unlike the existing literature in continual learning which aims at learning incoming tasks sequentially, with the assumption that the data for the previous tasks have a fixed distribution. Our proposed method offers promises in: (1) Transparency in the network and in the relationship across tasks by enabling examination of the learned representations by independent and shared subnetworks, (2) Representation generalizability through sharing and training subnetworks on multiple tasks simultaneously. Our analysis shows that compared to many competing approaches such as continual learning, neural architecture search, and multi-task learning, parallel continual learning is capable of learning more generalizable representations. Also, (3)Parallel continual learning overcomes the common issue of catastrophic forgetting in continual learning algorithms. This is the first effort to train a neural network on multiple tasks and input domains simultaneously in a continual learning scenario. Our code is available at https://github.com/yours-anonym/PaRT.

<!--EndFragment-->