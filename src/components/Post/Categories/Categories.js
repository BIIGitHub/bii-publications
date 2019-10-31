// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Categories.module.scss';

type Props = {
  categories: string[],
  categorySlugs: string[]
};

const Categories = ({ categories, categorySlugs }: Props) => (
  <div className={styles['tags']}>
    <ul className={styles['tags__list']}>
    <span>Groups: </span> {categorySlugs && categorySlugs.map((slug, i) => (
        <li className={styles['tags__list-item']} key={categories[i]}>
         <Link to={slug} className={styles['tags__list-item-link']}>
            {categories[i]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Categories;
