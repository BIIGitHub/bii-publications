---
template: post
title: Multivariate Regression with Gross Errors on Manifold-valued Data
date: 2018-01-04T02:24:56.406Z
journaltypes: Journal Paper
journal: >-
  IEEE Transactions on Pattern Analysis and Machine Intelligence, 2018, doi:
  10.1109/TPAMI.2017.2776260
url: 'https://arxiv.org/abs/1703.08772'
impactfactor: '8.329'
dateofacceptance: 2018-01-04T02:24:56.416Z
description: >-
  We consider the topic of multivariate regression on manifold-valued output,
  that is, for a multivariate observation, its output response lies on a
  manifold. Moreover, we propose a new regression model to deal with the
  presence of grossly corrupted manifold-valued responses, a bottleneck issue
  commonly encountered in practical scenarios. 
tags:
  - Zhang XW
  - Cheng L
  - Shi SD
  - Sun Y
categories:
  - Machine Learning for Bioimage Analysis
  - Imaging Informatics Division
---
<!--StartFragment-->

We consider the topic of multivariate regression on manifold-valued output, that is, for a multivariate observation, its output response lies on a manifold. Moreover, we propose a new regression model to deal with the presence of grossly corrupted manifold-valued responses, a bottleneck issue commonly encountered in practical scenarios. Our model first takes a correction step on the grossly corrupted responses via geodesic curves on the manifold, and then performs multivariate linear regression on the corrected data. This results in a nonconvex and nonsmooth optimization problem on manifolds. To this end, we propose a dedicated approach named PALMR, by utilizing and extending the proximal alternating linearized minimization techniques. Theoretically, we investigate its convergence property, where it is shown to converge to a critical point under mild conditions. Empirically, we test our model on both synthetic and real diffusion tensor imaging data, and show that our model outperforms other multivariate regression models when manifold-valued responses contain gross errors, and is effective in identifying gross errors.

<!--EndFragment-->
