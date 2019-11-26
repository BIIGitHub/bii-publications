'use strict';
const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
    const { createPage } = actions;
  
    const result = await graphql(`
     {
        allMarkdownRemark(
            filter: { frontmatter: { template: { eq: "post" } } },
            sort: { order: DESC, fields: [frontmatter___date] }
          ){
          edges {
            node {
              fields {
                slug             
              }
              frontmatter {
                title
                journaltypes
                journal
                pubmed
                url
                impactfactor
                dateofacceptance
                date
                categories
                tags
                description
              }
            }
          }
        }
      }
    `);
 
    createPage({
        path: "/search",
        component: path.resolve(`./src/templates/publications-search-template.js`),
        context: {
            publicationData: {
                allPublications: result.data.allMarkdownRemark,
                options: {
                    indexStrategy: "Prefix match",
                    searchSanitizer: "Lower Case",
                    TitleIndex: true,
                    SearchByTerm: true,
            },
          },
        },
    });    
  };
