// @flow strict
import React from 'react';
import styles from './Content.module.scss';

type Props = {
  body: string,
  title: string
};

const Content = ({ body, title }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <span>Journal Types: </span><div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: type }} />
    <span>Journal: </span><div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: journal }} />
    <span>Pubmed: </span><div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: pubmed }} />
    <span>URL: </span><div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: url }} />
    <span>Impact Factor: </span><div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: impactfactor }} />
    <span>Abstract: </span><div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
