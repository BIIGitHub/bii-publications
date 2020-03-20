---
template: post
title: >-
  AllerCatPro - Prediction of protein allergenicity potential from the protein
  sequence
date: 2019-01-18T03:29:06.199Z
journaltypes: Journal Paper
journal: 'Bioinformatics. 2019 Jan 18. doi: 10.1093/bioinformatics/btz029'
pubmed: '30657872 '
url: >-
  https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/btz029/5292313
impactfactor: '5.481'
dateofacceptance: 2019-01-14T03:29:06.221Z
description: >-
  MOTIVATION:

  Due to the risk of inducing an immediate type I (IgE-mediated) allergic
  response, proteins intended for use in consumer products must be investigated
  for their allergenic potential before introduction into the marketplace. The
  FAO/WHO guidelines for computational assessment of allergenic potential of
  proteins based on short peptide hits and linear sequence window identity
  thresholds misclassify many proteins as allergens.
tags:
  - Maurer-Stroh S
  - Krutz NL
  - Kern PS
  - Gunalan V
  - Nguyen MN
  - Limviphuvadh V
  - Eisenhaber F
  - Gerberick GF
categories:
  - Gene Function Prediction
  - Protein Sequence Analysis
  - 'Biomolecular Function Discovery Division '
---
<!--StartFragment-->

MOTIVATION:\
Due to the risk of inducing an immediate type I (IgE-mediated) allergic response, proteins intended for use in consumer products must be investigated for their allergenic potential before introduction into the marketplace. The FAO/WHO guidelines for computational assessment of allergenic potential of proteins based on short peptide hits and linear sequence window identity thresholds misclassify many proteins as allergens.

RESULTS:\
We developed AllerCatPro which predicts the allergenic potential of proteins based on similarity of their 3D protein structure as well as their amino acid sequence compared to a dataset of known protein allergens comprising of 4180 unique allergenic protein sequences derived from the union of the major databases FARRP, COMPARE, WHO/IUIS, UniProtKB and Allergome. We extended the hexamer hit rule by removing peptides with high probability of random occurrence measured by sequence entropy as well as requiring 3 or more hexamer hits consistent with natural linear epitope patterns in known allergens. This is complemented with a Gluten-like repeat pattern detection. We also switched from a linear sequence window similarity to a B cell epitope-like 3D surface similarity window which became possible through extensive 3D structure modelling covering the majority (74%) of allergens. In case no structure similarity is found, the decision workflow reverts to the old linear sequence window rule. The overall accuracy of AllerCatPro is 84% compared to other current methods which range from 51 to 73%. Both the FAO/WHO rules and AllerCatPro achieve highest sensitivity but AllerCatPro provides a 37-fold increase in specificity.

AVAILABILITY:\
<https://allercatpro.bii.a-star.edu.sg/>.

SUPPLEMENTARY INFORMATION:\
Supplementary data are available at Bioinformatics online.

<!--EndFragment-->
