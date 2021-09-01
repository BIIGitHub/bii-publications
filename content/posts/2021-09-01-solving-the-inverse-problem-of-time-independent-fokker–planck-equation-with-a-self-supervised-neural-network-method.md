---
template: post
title: Solving the inverse problem of time independent Fokker–Planck equation
  with a self supervised neural network method
date: 2021-07-30T05:30:59.381Z
journaltypes: Journal Paper
journal: " Scientific Reports, 2021 Jul 30;11(1):15540, doi: 10.1038/s41598-021-94712-5"
pubmed: "34330934"
url: https://www.nature.com/articles/s41598-021-94712-5
impactfactor: "4.379"
dateofacceptance: 2021-07-05T05:30:59.392Z
description: The Fokker–Planck equation (FPE) has been used in many important
  applications to study stochastic processes with the evolution of the
  probability density function (pdf). Previous studies on FPE mainly focus on
  solving the forward problem which is to predict the time-evolution of the pdf
  from the underlying FPE terms.
tags:
  - Liu W
  - Kou CKL
  - Park KH
  - Lee HK
categories:
  - Computer Vision and Pattern Discovery for Bioimages
  - Imaging Informatics Division
---
<!--StartFragment-->

The Fokker–Planck equation (FPE) has been used in many important applications to study stochastic processes with the evolution of the probability density function (pdf). Previous studies on FPE mainly focus on solving the forward problem which is to predict the time-evolution of the pdf from the underlying FPE terms. However, in many applications the FPE terms are usually unknown and roughly estimated, and solving the forward problem becomes more challenging. In this work, we take a different approach of starting with the observed pdfs to recover the FPE terms using a self-supervised machine learning method. This approach, known as the inverse problem, has the advantage of requiring minimal assumptions on the FPE terms and allows data-driven scientific discovery of unknown FPE mechanisms. Specifically, we propose an FPE-based neural network (FPE-NN) which directly incorporates the FPE terms as neural network weights. By training the network on observed pdfs, we recover the FPE terms. Additionally, to account for noise in real-world observations, FPE-NN is able to denoise the observed pdfs by training the pdfs alongside the network weights. Our experimental results on various forms of FPE show that FPE-NN can accurately recover FPE terms and denoising the pdf plays an essential role.

<!--EndFragment-->