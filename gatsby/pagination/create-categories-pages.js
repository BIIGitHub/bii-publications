'use strict';

const _ = require('lodash');
const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;
  const { postsPerPage } = siteConfig;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { 
        template: { eq: "post" }
                  categories: {
            in: [
              "Biomolecular Function Discovery Division"
              "Biomolecular Modelling and Design Division"
              "Imaging Informatics Division"
              "Translational Research Division"
              "Biomolecular Sequence To Function Division"
              "Biomolecular Structure To Mechanism Division"
              "Cellular Image Informatics Division"
              "Gene Function Prediction"
              "Protein Sequence Analysis"
              "Function and Structure of RNA"
              "Analytics of Biological Sequence Data"
              "Aging Biology Interventional Research"
              "Atomistic Simulations and Design in Biology"
              "Physics and Evolution of Biological Macromolecules"
              "Multiscale Simulation, Modelling and Design"
              "Structure-based Ligand Discovery and Design"
              "Computational Chemical biology and Fragment-based Design"
              "Algorithms and Models of Protein Machinery"
              "Computer Vision and Pattern Discovery for Bioimages"
              "Machine Learning for Bioimage Analysis"
              "Biophysical Modelling"
              "Complex Cellular Phenotype Analysis"
              "Clinical Data Analytics & Radiomics"
              "Natural Product Biology"
              "Natural Product Chemistry"
              "Chemical Genomics"
              "Antibody and Product Development"
              "BioMedical Data Architecture & Repository"
              "Clinical Data Engagement"
              "Research Data Integration"
              "Algorithms and Models of Protein Machinery"
              "Genome & Gene Expression Data Analysis"
              "Spatial & Single-Cell Omics Immunology"
              "Molecular Innovations And AI Integrations"
              "Biomedical Data Hub Division"
              "Analysis/HuPo"
              "Computational Biology & Omics Lab"
            ]
          }
        } }
      ) {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  _.each(result.data.allMarkdownRemark.group, (category) => {
    const numPages = Math.ceil(category.totalCount / postsPerPage);
    const categorySlug = `/group/${_.kebabCase(category.fieldValue)}`;

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? categorySlug : `${categorySlug}/page/${i}`,
        component: path.resolve('./src/templates/category-template.js'),
        context: {
          category: category.fieldValue,
          currentPage: i,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPagePath: i <= 1 ? categorySlug : `${categorySlug}/page/${i - 1}`,
          nextPagePath: `${categorySlug}/page/${i + 1}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1
        }
      });
    }
  });
};
