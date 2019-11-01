// @flow strict
import React from 'react';
import styles from './Content.module.scss';


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
        <a href={details.url} dangerouslySetInnerHTML={{ __html: details.url }} /> <br />
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
        <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: details.dateofacceptance }} /> <br />
      </div>    
    }
    {details.uploadfile &&
      <div>
        <a href={details.uploadfile}> <img src="/media/images/pdf_icon.jpg"/> </a> <br />
      </div>    
    }
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
    
  </div>
);

export default Content;
