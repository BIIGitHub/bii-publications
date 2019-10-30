// @flow strict
import React from 'react';
import styles from './Content.module.scss';


const Content = ({ body, title }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <b>Journal Type:</b>&nbsp; <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.journaltypes }} />
    <b>Journal: </b>&nbsp; <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.journal }} />
    <b>Pubmed: </b>&nbsp; <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.pubmed }} />
    <b>URL:</b>&nbsp; <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.url }} />
    <b>Impact Factor: </b>&nbsp; <span className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.impactfactor }} />
    <div className={styles['content__body']}>
      <p>{body.description}</p>
    </div>
  </div>
);

export default Content;
