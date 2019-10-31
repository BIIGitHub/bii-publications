// @flow strict
import React from 'react';
import styles from './Content.module.scss';


const Content = ({ body, title }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <b>Journal Type:</b>&nbsp; <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.journaltypes }} /> <br />
    <b>Journal: </b>&nbsp; <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.journal }} /> <br />
    {body.pubmed &&
      <div>
        <b>Pubmed: </b>&nbsp;
        <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.pubmed }} /> <br />
      </div>    
    }
    <b>URL:</b>&nbsp; <a href={body.url}><span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.url }} /></a> <br />
    <b>Impact Factor: </b>&nbsp; <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.impactfactor }} /> <br /> 
    <b>Date of Acceptance: </b>&nbsp; <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.dateofacceptance }} /> <br /> 
    <div className={styles['content__body']}>
      <p>{body.description}</p>
    </div>
  </div>
);

export default Content;
