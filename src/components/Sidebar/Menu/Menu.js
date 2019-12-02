// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';
import ClientSearch from '../../Search/ClientSearch';

// get our fontawesome imports
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}> 
    <div className={styles['desktop-only']}>
      <ul className={styles['menu__list']}>
        <li className={styles['menu__list-item','smallfont','hoverDetails']}>
          {/* <ClientSearch /> */}
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
          <a className={styles['menu__list-item-link']} target='_blank' href="http://www.bii.a-star.edu.sg/">Bioinformatics Institute Website <FontAwesomeIcon style={{ width:"0.8em"}} icon={faExternalLinkAlt} /></a>
        </li>
        <li className={styles['menu__list-item']}>
          <Link
              to="/authors"
              className={styles['menu__list-item-link']}
              activeClassName={styles['menu__list-item-link--active']}
          >Authors
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
        <li className={styles['menu__list-item']}>
          <Link
              to="/archive"
              className={styles['menu__list-item-link']}
              activeClassName={styles['menu__list-item-link--active']}
          >
          Archive Search
          </Link>
        </li>
        <li className={styles['menu__list-item']}>
          <Link
              to="/search"
              className={styles['menu__list-item-link']}
              activeClassName={styles['menu__list-item-link--active']}
          >
          <FontAwesomeIcon icon={faSearch} /> Search
          </Link>
        </li>
      </ul>
    </div>
  </nav>

);

export default Menu;
