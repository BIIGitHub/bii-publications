---
template: post
title: Common Component in Black-Boxes Is Prone to Attacks
date: 2021-10-01T05:16:00.000Z
journaltypes: Journal Paper
journal: "Proceedings : Computer Security – ESORICS 2021 26th European Symposium
  on Research in Computer Security, Darmstadt, Germany, October 4–8, 2021,
  Proceedings, Part I"
dateofacceptance: ""
description: Part of the Lecture Notes in Computer Science book series (LNSC,volume 12972)
tags:
  - Zhang J
  - Tann WJW
  - Chang ECC
  - Lee HK
categories:
  - Imaging Informatics Division
  - Computer Vision and Pattern Discovery for Bioimages
---
<!--StartFragment-->

Neural network models are getting increasingly complex. Large models are often modular, consisting of multiple separate sharable components. The development of such components may require specific domain knowledge, intensive computation power, and large datasets. Therefore, there is a high incentive for companies to keep these components proprietary. However, when a common component is included in multiple black-box models, it could potentially provide another attack vector and weaken security. In this paper, we present a method that “extracts” the common component from black-box models, using only limited resources. With a small number of data samples, an attacker can (1) obtain accurate information about the shared component, stealing propriety information of the intellectual property, and (2) utilize this component to train new tasks or execute subsequent attacks such as model cloning, class inversion, and adversarial attacks more effectively. Comprehensive experiments demonstrate that our proposed method successfully extracts the common component through hard-label and black-box access only. Moreover, the consequent attacks are also effective against straightforward defenses that introduce noise and dummy classifiers.

<!--EndFragment-->