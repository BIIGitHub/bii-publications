// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata, useTagsList } from '../hooks';

const TagsListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const authors = useTagsList();

  return (
    <Layout title={`Authors - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Authors">
        <ul>
          {authors.map((author) => (
            <li key={author.fieldValue}>
              <Link to={`/author/${kebabCase(author.fieldValue)}/`}>
                {author.fieldValue} ({author.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default TagsListTemplate;
