import React from "react"
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import ArchiveSearch from "../components/Search/ArchiveSearch"
import { useSiteMetadata } from '../hooks';

const ArchiveTemplate = props => {
  const { pageContext } = props
  const { publicationData } = pageContext
  const { allPublications, options } = publicationData
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`BII Publications - ${title}`} description={subtitle}>
      <Sidebar />
        <Page title="Archive Search">
          <p> Please enter in a range of dates to start your search.</p>
          <ArchiveSearch publications={allPublications.edges} engine={options} />
        </Page>
    </Layout>
  )
}
export default ArchiveTemplate