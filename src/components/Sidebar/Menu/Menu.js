// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';
import ClientSearch from '../../Search/ClientSearch';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => (
  
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
    <li className={styles['menu__list-item','smallfont']}>
        <ClientSearch />
      </li>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          <Link
            to={item.path}
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
          >
            {item.label}
          </Link>
        </li>
      ))}
      <li className={styles['menu__list-item']}>
        <a className={styles['menu__list-item-link']} target='_blank' href="http://www.bii.a-star.edu.sg/">Bioinformatics Institute Website</a>
      </li>
      <li className={styles['menu__list-item']}>
        <Link
            to="/authors"
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
        >
        Authors
        </Link>
      </li>
      <li className={styles['menu__list-item']}>
        <Link
          to="/groups"
          className={styles['menu__list-item-link']}
          activeClassName={styles['menu__list-item-link--active']}
        >
        Groups
        </Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
