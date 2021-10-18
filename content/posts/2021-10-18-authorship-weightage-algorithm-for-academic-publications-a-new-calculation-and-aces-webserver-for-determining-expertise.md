---
template: post
title: "Authorship Weightage Algorithm for Academic Publications: A New
  Calculation and ACES Webserver for Determining Expertise. "
date: 2021-06-09T07:16:11.031Z
journaltypes: Journal Paper
journal: "Methods and Protocols, 2021 Jun 9;4(2):41. doi: 10.3390/mps4020041. "
pubmed: "3420754"
url: https://www.mdpi.com/2409-9279/4/2/41
impactfactor: "1.84"
dateofacceptance: 2021-06-05T07:16:11.041Z
description: Despite the public availability, finding experts in any field when
  relying on academic publications can be challenging, especially with the use
  of jargons. Even after overcoming these issues, the discernment of expertise
  by authorship positions is often also absent in the many publication-based
  search platforms.
tags:
  - Wu WL
  - Tan O
  - Chan KF
  - Ong NB
  - Gunasegaran D
  - Gan SKE
categories:
  - Translational Research Division
  - Antibody and Product Development
---
Despite the public availability, finding experts in any field when relying on academic publications can be challenging, especially with the use of jargons. Even after overcoming these issues, the discernment of expertise by authorship positions is often also absent in the many publication-based search platforms. Given that it is common in many academic fields for the research group lead or lab head to take the position of the last author, some of the existing authorship scoring systems that assign a decreasing weightage from the first author would not reflect the last author correctly. To address these problems, we incorporated natural language processing (Common Crawl using fastText) to retrieve related keywords when using jargons as well as a modified authorship positional scoring that allows the assignment of greater weightage to the last author. The resulting output is a ranked scoring system of researchers upon every search that we implemented as a webserver for internal use called the APD lab Capability & Expertise Search (ACES).