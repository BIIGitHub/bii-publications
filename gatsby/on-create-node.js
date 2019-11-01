'use strict';

const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    if (typeof node.frontmatter.slug !== 'undefined') {
      createNodeField({
        node,
        name: 'slug',
        value: node.frontmatter.slug
      });
    } else {
      const value = createFilePath({ node, getNode });
      createNodeField({
        node,
        name: 'slug',
        value
      });
    }

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map((author) => `/author/${_.kebabCase(author)}/`);
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }

    if (node.frontmatter.categories) {
      const categorySlugs = node.frontmatter.categories.map((group) => `/group/${_.kebabCase(group)}/`);
      createNodeField({ node, name: 'categorySlugs', value: categorySlugs });
    }
  }
};

module.exports = onCreateNode;
