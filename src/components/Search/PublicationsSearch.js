import React, { Component } from "react"
import * as JsSearch from "js-search"
import { StaticQuery, graphql } from 'gatsby';
import ReactPaginate from 'react-paginate';
import moment from 'moment';
import Badge from 'react-bootstrap/Badge';
import paginate from 'paginate-array';
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

class PublicationsSearch extends Component {
  state = {
    isLoading: true,
    searchResults: [],
    search: null,
    isError: false,
    indexByTitle: false,
    indexByJournalTypes: false,
    indexByPubmed: false,
    indexByAuthors: false,
    indexByGroups: false,
    indexBy: false,
    termFrequency: true,
    removeStopWords: true,
    searchQuery: "",
    selectedStrategy: "",
    selectedSanitizer: "",
  }
  /**
   * React lifecycle method that will inject the data into the state.
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.search === null) {
      const { engine } = nextProps
      return {
        indexByTitle: engine.TitleIndex,
        indexByJournalTypes: engine.JournalTypesIndex,
        indexByPubmed: engine.PubmedIndex,
        indexByAuthors: engine.AuthorsIndex,
        indexByGroups: engine.GroupsIndex,
        termFrequency: engine.SearchByTerm,
        selectedSanitizer: engine.searchSanitizer,
        selectedStrategy: engine.indexStrategy,
      }
    }
    return null
  }
  async componentDidMount() {
    this.rebuildIndex()
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const {
      selectedStrategy,
      selectedSanitizer,
      removeStopWords,
      termFrequency
    } = this.state
    const { publications } = this.props

    const dataToSearch = new JsSearch.Search("title")

    if (removeStopWords) {
      dataToSearch.tokenizer = new JsSearch.StopWordsTokenizer(
        new JsSearch.SimpleTokenizer()
      )
    }
    /**
     * defines an indexing strategy for the data
     * read more about it here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */

      dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy()
    
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     */
    selectedSanitizer === "Case Sensitive"
      ? (dataToSearch.sanitizer = new JsSearch.CaseSensitiveSanitizer())
      : (dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer())
    termFrequency === true
      ? (dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("title"))
      : (dataToSearch.searchIndex = new JsSearch.UnorderedSearchIndex())

    // sets the index attribute for the data
    dataToSearch.addIndex("title");
    dataToSearch.addIndex("groups");
    dataToSearch.addIndex("authors");
    dataToSearch.addIndex("pubmed");
    dataToSearch.addIndex("description");


    let searchPublications = [];
    publications.forEach((publication) => {
      let publicationObj = {
        slug: publication.node.fields.slug,
        groups: publication.node.frontmatter.categories,
        date: publication.node.frontmatter.date,
        dateofacceptance: publication.node.frontmatter.dateofacceptance,
        description: publication.node.frontmatter.description,
        impactfactor: publication.node.frontmatter.impactfactor,
        journal: publication.node.frontmatter.journal,
        journaltypes: publication.node.frontmatter.journaltypes,
        pubmed: publication.node.frontmatter.pubmed,
        authors: publication.node.frontmatter.tags,
        title: publication.node.frontmatter.title,
        url: publication.node.frontmatter.url
      }

      searchPublications.push(publicationObj);
    });


    dataToSearch.addDocuments(searchPublications) // adds the data to be searched

    this.setState({ search: dataToSearch, isLoading: false })
  }
  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    const { searchResults, searchQuery } = this.state
    const { publications } = this.props
    const queryResults = searchResults;
    return (
      <div>
        <div style={{ margin: "0 auto" }}>
          <form onSubmit={this.handleSubmit}>
            <div style={{ margin: "0 auto" }}>
              <label htmlFor="Search" style={{ paddingRight: "10px" }}>
                <span style={{fontWeight: 'bold'}}>SEARCH: </span><br />
              </label>
              <div class="form-group">
                <input type="search" value={searchQuery}
                  id="Search"
                  onChange={this.searchData} 
                  class="form-control-lg" 
                  aria-describedby="publicationsHelp" 
                  placeholder=" Enter search field" />
              </div>
            </div>
          </form>
          <div>
          <div class="alert alert-primary" role="alert">
          <span style={{fontSize: '12px', fontWeight: 'normal'}}> Please enter <span style={{fontWeight: 'bold'}}>Author's surname and initials</span> or <span style={{fontWeight: 'bold'}}>Group Name</span> or <span style={{fontWeight: 'bold'}}> Keywords</span> 
          <br /> Example: <span style={{textDecoration: 'underline'}}>Eisenhaber F</span> OR <span style={{textDecoration: 'underline'}}>Gene Function Prediction</span> OR <span style={{textDecoration: 'underline'}}>Metabolic</span></span>
          </div>
          
          <span style={{fontStyle: 'italic', fontSize: '12px', color: '#990000'}}>Number of returned articles: 
            {queryResults.length}
        </span>
            {queryResults.length > 0 && <h1 style={{ fontSize: '20px', marginTop: '5%', marginBottom: '2%', fontWeight: 'bold', textDecorationLine: 'underline'}}>Publication(s)</h1>}
              
                  {queryResults.map(item => {
                    return (
                        <div key={`row_${item.title}`}>
                        <span style={{ fontSize: "12px", fontWeight: "bold", color: '#000000', textTransform: 'uppercase'}}>
                            <time dateTime={moment(item.date).format('MMMM D, YYYY')}>
                                {moment(item.date).format('D MMMM YYYY')}
                            </time>
                        </span>
                        <br />
                        <span style={{ fontSize: "18px", fontWeight: "bold"}}>
                            <a target="_blank" style={{color: '#003399'}} href={`${item.slug}`}>{item.title}</a>
                        </span>
                        <br />
                        <p><span style={{ fontSize: "14px", lineHeight: "1px"}}>{item.description}</span></p>
                        <span style={{ fontSize: "16px"}}> Authors: 
                        {
                            (item.authors).map(author => {
                                var searchAuthor = author.replace(/\s+/g, '-').toLowerCase();
                                return(
                                    <Badge className="badge-author-group" pill variant="primary">
                                    <a target="_blank" style={{color: '#ffffff', fontWeight: "normal"}} href={`/author/${searchAuthor}`}>{author}</a>
                                    </Badge>
                                )  
                            })
                        }
                        </span>
                        <br />
                        <span style={{ fontSize: "16px"}}> Groups:
                        {
                            (item.groups).map(group => {
                                var searchGroup = group.replace(/\s+/g, '-').toLowerCase();
                                return(
                                    <Badge className="badge-author-group" pill variant="danger">
                                        <a target="_blank" style={{color: '#ffffff', fontWeight: "normal"}} href={`/group/${searchGroup}`}>{group}</a>
                                    </Badge>
                                )  
                            })
                        }
                        </span>
                        <div style={{borderBottom: '1px solid #D3D3D3', marginTop: '5%', marginBottom: '5%'}}></div>
                    </div>
                    )
                  })}
                   {/* {queryResults.length > 0 && 
                        <ReactPaginate
                            previousLabel={'← Previous'}
                            nextLabel={'Next →'}
                            breakLabel={<span className="gap">...</span>}
                            breakClassName={'break-me'}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={2}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            previousLinkClassName={"previous_page"}
                            nextLinkClassName={"next_page"}
                            disabledClassName={"disabled"}
                            activeClassName={"active"}
                        />
                    } */}
            </div>
          </div>
          <ScrollUpButton />  
        </div>
    )
  }
}
export default PublicationsSearch