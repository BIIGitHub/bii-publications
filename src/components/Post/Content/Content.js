// @flow strict
import React from 'react';
import styles from './Content.module.scss';
import moment from 'moment';

// get our fontawesome imports
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Content = ({ details, title, body}: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    {details.journaltypes &&
      <div>
        <b>Journal Type: </b>&nbsp;
        <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: details.journaltypes }} /> <br />
      </div> 
    }
    {details.journal &&
      <div>
        <b>Journal: </b>&nbsp;
        <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: details.journal }} /> <br />
      </div> 
    }
    {details.pubmed &&
      <div>
        <b>Pubmed: </b>&nbsp;
        <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: details.pubmed }} /> <br />
      </div>    
    }
    {details.url &&
      <div>
        <b>URL: </b>&nbsp;
        <a target="_blank" href={details.url}><span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: details.url }} /> &nbsp;  <FontAwesomeIcon style={{ width:"0.8em"}} icon={faExternalLinkAlt} /></a> <br />
      </div>    
    }
    {details.impactfactor &&
      <div>
        <b>Impact Factor: </b>&nbsp;
        <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: details.impactfactor }} /> <br />
      </div>    
    }
    {details.dateofacceptance &&
      <div>
        <b>Date of Acceptance: </b>&nbsp;
        
        <span className={styles['content__body']} /> {moment(details.dateofacceptance).format('D MMM YYYY')}<br />
        
      </div>    
    }
    {details.uploadfile &&
      <div>
         <a href={details.uploadfile}> <img src="/media/images/pdf_icon.png" style={{ display: "inline-block"}}/> &nbsp;<b>Published Paper</b></a> <br />
      </div>    
    }
    <br />
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
    
  </div>
);

export default Content;
