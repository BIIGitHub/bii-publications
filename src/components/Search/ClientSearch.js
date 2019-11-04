import React, { Component } from "react"
import * as JsSearch from "js-search"

class ClientSearch extends Component {
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
    dataToSearch.addIndex("journal");
    dataToSearch.addIndex("journaltypes");
    dataToSearch.addIndex("impactfactor");
    

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
                Enter your search here
              </label>
              <input
                id="Search"
                value={searchQuery}
                onChange={this.searchData}
                placeholder="Enter your search here"
                style={{ margin: "0 auto", width: "400px" }}
              />
            </div>
          </form>
          <div>
            Number of items:
            {queryResults.length}

            {queryResults.length > 0 &&
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  borderRadius: "4px",
                  border: "1px solid #d3d3d3",
                }}
              >
                <thead style={{ border: "1px solid #808080" }}>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "5px",
                        fontSize: "14px",
                        fontWeight: 600,
                        borderBottom: "2px solid #d3d3d3",
                        cursor: "pointer",
                      }}
                    >
                      Title
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "5px",
                        fontSize: "14px",
                        fontWeight: 600,
                        borderBottom: "2px solid #d3d3d3",
                        cursor: "pointer",
                      }}
                    >
                      Authors
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "5px",
                        fontSize: "14px",
                        fontWeight: 600,
                        borderBottom: "2px solid #d3d3d3",
                        cursor: "pointer",
                      }}
                    >
                      Groups
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {queryResults.map(item => {
                    return (
                      <tr key={`row_${item.title}`}>
                        <td style={{ fontSize: "14px", border: "1px solid #d3d3d3" }}>
                          <a href={`${item.slug}`}>{item.title}</a>
                        </td>
                        <td style={{ fontSize: "14px", border: "1px solid #d3d3d3" }}>
                          {
                            (item.authors).map(author => {
                              var searchAuthor = author.replace(/\s+/g, '-').toLowerCase();
                              return(
                                <div>
                                  <a href={`/author/${searchAuthor}`}>{author}</a> <br/>
                                </div>      
                              )  
                            })
                          }
                        </td>
                        <td style={{ fontSize: "14px", border: "1px solid #d3d3d3" }}>
                        {
                          (item.groups).map(group => {
                            var searchGroup = group.replace(/\s+/g, '-').toLowerCase();
                            return(
                              <div>
                                <a href={`/group/${searchGroup}`}>{group}</a> <br/>
                              </div>      
                            )  
                          })
                        }
                      </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              }     
            </div>
          </div>
        </div>
    )
  }
}
export default ClientSearch