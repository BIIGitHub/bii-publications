// @flow strict
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import ReactPaginate from 'react-paginate';

import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata, useTagsList } from '../hooks';
import { usePaginateArray } from '../utils/utilities';



const TagsListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const totalAuthors = useTagsList();
  const perPage = 10;
  const pageCount = Math.ceil(totalAuthors.length / perPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [paginateCollection, setPaginateCollection] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors();
    
  }, [authors]);
  

  const fetchAuthors = async () => {
    const pageData = await usePaginateArray(totalAuthors, currentPage, perPage);

    setPaginateCollection(pageData);
    setAuthors(pageData.data);
  };


  const handlePageClick = (data) => {
    let selected = data.selected + 1;
    setCurrentPage(selected)

    setPaginateCollection(usePaginateArray(totalAuthors, currentPage, perPage));
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
                previousLabel={'← Previous'}
                nextLabel={'Next →'}
                breakLabel={<span className="gap">...</span>}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                previousLinkClassName={"previous_page"}
                nextLinkClassName={"next_page"}
                disabledClassName={"disabled"}
                activeClassName={"active"}
            />
        </ul>
      </Page>
    </Layout>
  );
};

export default TagsListTemplate;
