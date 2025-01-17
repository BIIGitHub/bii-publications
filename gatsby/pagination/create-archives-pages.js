'use strict';

const path = require('path');

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
        path: "/archive",
        component: path.resolve(`./src/templates/client-archive-template.js`),
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
