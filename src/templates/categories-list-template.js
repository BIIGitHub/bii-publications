// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata, useCategoriesList } from '../hooks';

const CategoriesListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const groups = useCategoriesList();

  return (
    <Layout title={`Groups - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Groups">
        <ul>
          {groups.map((group) => (
            <li key={group.fieldValue}>
              <Link to={`/group/${kebabCase(group.fieldValue)}/`}>
                {group.fieldValue} ({group.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default CategoriesListTemplate;
