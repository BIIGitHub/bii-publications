// @flow strict
import React from 'react';
import styles from './Content.module.scss';


const Content = ({ body, title }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    {body.journaltypes &&
      <div>
        <b>Journal Type: </b>&nbsp;
        <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.journaltypes }} /> <br />
      </div> 
    }
    {body.journal &&
      <div>
        <b>Journal: </b>&nbsp;
        <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.journal }} /> <br />
      </div> 
    }
    {body.pubmed &&
      <div>
        <b>Pubmed: </b>&nbsp;
        <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.pubmed }} /> <br />
      </div>    
    }
    {body.url &&
      <div>
        <b>URL: </b>&nbsp;
        <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.url }} /> <br />
      </div>    
    }
    {body.impactfactor &&
      <div>
        <b>Impact Factor: </b>&nbsp;
        <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.impactfactor }} /> <br />
      </div>    
    }
    {body.dateofacceptance &&
      <div>
        <b>Date of Acceptance: </b>&nbsp;
        <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.dateofacceptance }} /> <br />
      </div>    
    }
    <div className={styles['content__body']}>
      <p>{body.description}</p>
    </div>
  </div>
);

export default Content;
