// @flow strict
import React from 'react';
import { getContactHref, getIcon } from '../../../utils';
import Icon from '../../Icon';
import styles from './Contacts.module.scss';

type Props = {
  contacts: {
    [string]: string,
  },
};

const Contacts = ({ contacts }: Props) => (
  <div className={styles['contacts']}>
    <div className={styles['desktop-only']}>
      <ul className={styles['contacts__list']}>
        {Object.keys(contacts).map((name) => (!contacts[name] ? null : (
          <li className={styles['contacts__list-item']} key={name}>
            <a
              className={styles['contacts__list-item-link']}
              href={getContactHref(name, contacts[name])}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name={name} icon={getIcon(name)} />
            </a>
          </li>
        )))}
      </ul>
    </div>

    <div className={styles['mobile-only']}>
      <ul className={styles['contacts__list']}>
        
      </ul>
    </div>
  </div>
);

export default Contacts;
