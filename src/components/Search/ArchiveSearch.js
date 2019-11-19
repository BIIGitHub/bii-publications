import React, { Component } from "react"
import DatePicker from "react-datepicker";
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";


class ArchiveSearch extends Component {
  state = {
      startDate: null,
      endDate: null,
      allPublications: [],
      queryPublications: [],
  }
  /**
   * React lifecycle method that will inject the data into the state.
   */
  async componentDidMount() {
    const { publications } = this.props

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
    this.setState({ allPublications: searchPublications });
  }


  handleStartDateChange = date => { this.setState({ startDate: date}); };
  handleEndDateChange = date => { this.setState({ endDate: date}); };

  onSearchPublications = () => {
    if (this.state.startDate == null || this.state.endDate == null) {
        alert("Error");
    } else {
        let tempPublications = [];
        let publications = this.state.allPublications;
    
        let startDate = moment(this.state.startDate, "DD/MM/YYYY");
        let endDate = moment(this.state.endDate, "DD/MM/YYYY");
    
        if (publications != null ){
            publications.forEach((pub) => {
                let pubDate = moment((pub.date).substring(0, (pub.date).indexOf('T')), "YYYY/MM/DD");
                if (pubDate.isBetween(startDate, endDate, 'days', '[]'))
                    tempPublications.push(pub);
                     
           });
    
            this.setState({ queryPublications: tempPublications });
         }
    }

  


 


     //console.log(tempPublications);
  }
  
  render(){
        return (
            <div>
                <div>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleStartDateChange}
                        dateFormat="dd/MM/yyyy"
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        isClearable
                    />
                    <DatePicker
                        selected={this.state.endDate}
                        onChange={this.handleEndDateChange}
                        dateFormat="dd/MM/yyyy"
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        isClearable
                    />
                    <button onClick={this.onSearchPublications}>
                        Search 
                    </button>
                </div>
                <div>
                   
                    {(this.state.queryPublications).length > 0 &&
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
                            {(this.state.queryPublications).map(item => {
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
        )
    }   
}
export default ArchiveSearch 