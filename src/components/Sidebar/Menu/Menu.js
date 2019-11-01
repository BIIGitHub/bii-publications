// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
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
      <li class="Menu-module--menu__list-item--1lJ6B">
        <a class="Menu-module--menu__list-item-link--10Ush" href="/authors">Authors</a>
      </li>
      <li class="Menu-module--menu__list-item--1lJ6B">
        <a class="Menu-module--menu__list-item-link--10Ush" href="/groups">Groups</a>
      </li>
    </ul>
  </nav>
);

export default Menu;
