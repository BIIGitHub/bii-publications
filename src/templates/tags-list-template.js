// @flow strict
import React, { useState } from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata, useTagsList } from '../hooks';
import ReactPaginate from 'react-paginate';
import paginate from 'paginate-array';


const TagsListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const totalAuthors = useTagsList();
  const perPage = 10;
  const pageCount = Math.ceil(totalAuthors.length / perPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [paginateCollection, setPaginateCollection] = useState(paginate(totalAuthors, currentPage, perPage));
  const [authors, setAuthors] = useState(paginateCollection.data);
  
  const handlePageClick = (data) => {
    let selected = data.selected + 1;

    setCurrentPage(selected)
    setPaginateCollection(paginate(totalAuthors, selected, perPage));
    setAuthors(paginateCollection.data);
  };

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

          <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </ul>
      </Page>
    </Layout>
  );
};

export default TagsListTemplate;
