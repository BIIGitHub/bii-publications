---
template: post
title: >-
  Finite-size effects in transcript sequencing count distribution: its power-law
  correction necessarily precedes downstream normalization and comparative
  analysis
date: 2018-02-12T01:32:35.286Z
journaltypes: Journal Paper
journal: 'Biology Direct 2018, 13:2, doi: 10.1186/s13062-018-0204-y'
url: 'https://biologydirect.biomedcentral.com/articles/10.1186/s13062-018-0204-y'
impactfactor: '2.856'
dateofacceptance: 2018-01-23T01:32:35.296Z
description: >-
  Background:  Though earlier works on modelling transcript abundance from
  vertebrates to lower eukaroytes have specifically singled out the Zip’s law,
  the observed distributions often deviate from a single power-law slope. In
  hindsight, while power-laws of critical phenomena are derived asymptotically
  under the conditions of infinite observations, real world observations are
  finite where the finite-size effects will set in to force a power-law
  distribution into an exponential decay and consequently, manifests as a
  curvature (i.e., varying exponent values) in a log-log plot.
tags:
  - Wong WC
  - Ng HK
  - Tantoso E
  - Soong R
  - Eisenhaber F
categories:
  - Gene Function Prediction
  - Analytics of Biological Sequence Data
  - 'Biomolecular Function Discovery Division '
---
<!--StartFragment-->

### Background

Though earlier works on modelling transcript abundance from vertebrates to lower eukaroytes have specifically singled out the Zip’s law, the observed distributions often deviate from a single power-law slope. In hindsight, while power-laws of critical phenomena are derived asymptotically under the conditions of infinite observations, real world observations are finite where the finite-size effects will set in to force a power-law distribution into an exponential decay and consequently, manifests as a curvature (i.e.*, varying exponent values*) in a log-log plot. If transcript abundance is truly power-law distributed, the varying exponent signifies changing mathematical moments (e.g.*, mean, variance*) and creates heteroskedasticity which compromises statistical rigor in analysis. The impact of this deviation from the asymptotic power-law on sequencing count data has never truly been examined and quantified.

### Results

The anecdotal description of transcript abundance being almost Zipf’s law-like distributed can be conceptualized as the imperfect mathematical rendition of the Pareto power-law distribution when subjected to the finite-size effects in the real world; This is regardless of the advancement in sequencing technology since sampling is finite in practice. Our conceptualization agrees well with our empirical analysis of two modern day NGS (*Next-generation sequencing*) datasets: an in-house generated dilution miRNA study of two gastric cancer cell lines (*NUGC3 and AGS*) and a publicly available spike-in miRNA data; Firstly, the finite-size effects causes the deviations of sequencing count data from Zipf’s law and issues of reproducibility in sequencing experiments. Secondly, it manifests as heteroskedasticity among experimental replicates to bring about statistical woes. Surprisingly, a straightforward power-law correction that restores the distribution distortion to a single exponent value can dramatically reduce data heteroskedasticity to invoke an instant increase in signal-to-noise ratio by 50% and the statistical/detection sensitivity by as high as 30% regardless of the downstream mapping and normalization methods. Most importantly, the power-law correction improves concordance in significant calls among different normalization methods of a data series averagely by 22%. When presented with a higher sequence depth (*4 times difference*), the improvement in concordance is asymmetrical (*32% for the higher sequencing depth instance*versus*13% for the lower instance*) and demonstrates that the simple power-law correction can increase significant detection with higher sequencing depths. Finally, the correction dramatically enhances the statistical conclusions and eludes the metastasis potential of the NUGC3 cell line against AGS of our dilution analysis.

### Conclusions

The finite-size effects due to undersampling generally plagues transcript count data with reproducibility issues but can be minimized through a simple power-law correction of the count distribution. This distribution correction has direct implication on the biological interpretation of the study and the rigor of the scientific findings.

### Reviewers

<!--EndFragment-->
