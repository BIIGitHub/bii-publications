// @flow strict
import React from 'react';
import styles from './Content.module.scss';


const Content = ({ body, title }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <b><span>Journal Type: </span></b><div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.journaltypes }} />
    <b><span>Journal: </span></b><div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.journal }} />
    <b><span>Pubmed: </span></b><div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.pubmed }} />
    <b><span>URL: </span></b><div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.url }} />
    <b><span>Impact Factor: </span></b><div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body.impactfactor }} />
    <div className={styles['content__body']}>
      <p>{body.description}</p>
    </div>
  </div>
);

export default Content;
