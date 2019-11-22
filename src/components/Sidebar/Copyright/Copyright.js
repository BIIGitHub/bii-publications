// @flow strict
import React from 'react';
import styles from './Copyright.module.scss';

type Props = {
  copyright: string
};

const Copyright = ({ copyright }: Props) => (
  <div className={styles['copyright']}>
    <div className={styles['desktop-only']}>
      {copyright}
    </div>

    <div className={styles['mobile-only']}>
      {/* {copyright} */}
    </div>
  </div>
);

export default Copyright;
