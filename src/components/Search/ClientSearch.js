import React, { Component } from "react"
import * as JsSearch from "js-search"
import { StaticQuery, graphql } from 'gatsby';

// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ClientSearch extends Component {
  state = {
    isLoading: true,
    searchResults: [],
    search: null,
    isError: false,
    searchQuery: ""
  }
  /**
   * React lifecycle method that will inject the data into the state.
   */

  async componentDidMount() {
    this.rebuildIndex();
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { publications } = this.props
    
    const dataToSearch = new JsSearch.Search("title")

    if (true) {
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
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();

    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("title")
    // sets the index attribute for the data
    dataToSearch.addIndex("title");
    dataToSearch.addIndex("groups");
    dataToSearch.addIndex("authors");
    dataToSearch.addIndex("pubmed");
    dataToSearch.addIndex("journal");
    dataToSearch.addIndex("journaltypes");
    dataToSearch.addIndex("impactfactor");
    

    let searchPublications = [];
    if (publications != null) {
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
    }
  


    dataToSearch.addDocuments(searchPublications) // adds the data to be searched

    this.setState({ search: dataToSearch, isLoading: false })
  }
  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { search } = this.state;
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    const { searchResults, searchQuery } = this.state
    const queryResults = searchResults;
    return (
      <div>
        <div className="awesomplete" style={{ margin: "0 auto" }}>
        <span className="awesomplete" style={{ position: "relative", display: "inline-block", direction: "ltr"}}>
          <FontAwesomeIcon icon={faSearch} /> Search:
                <input
                  id="Search"
                  value={searchQuery}
                  onChange={this.searchData}
                  className="awesomplete" 
                  data-list="#mylist" 
                  placeholder="Title, Author or Group Name"
                  style={{ margin: "0 auto" }}
                />
        </span>
            
            {queryResults.length > 0 &&
              <ul id="mylist">
                {queryResults.map(item => {
                    return (
                      <li key={`row_${item.title}`} style={{ borderBottom:"1px dotted #cbced4"}}>
                        Article Title: {" "}<a href={`${item.slug}`}>{item.title}</a>
                      </li>
                    )
                  })}
              </ul>
            }   

          <div>
            {/* Number of items:
            {queryResults.length} */}
  
            </div>
          </div>
        </div>
    )
  }
}



export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } },
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
    `}
    render={(data) => (
      <ClientSearch publications={data.allMarkdownRemark.edges} />
    )}
  />
)