// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}
        <a
          className={styles['author__bio-twitter']}
          href="http://www.bii.a-star.edu.sg/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name} © 2019 </strong>
        </a> 
      </p>
    </div>
  );
};

export default Author;
