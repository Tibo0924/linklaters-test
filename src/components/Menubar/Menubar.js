import React from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ArrowSVG } from '../SVG';
import styles from './Menubar.module.css';

const Menubar = ({ menu, profileName, onClick }) => (
  <div className={styles.root}>
    <div className={styles.menu}>
      {(menu && menu.length) && menu.map(menuLink => {
        const menuLinkClassName = classNames(
          styles.menuLink,
          {
            [styles.menuLinkActive]: menuLink.isActive,
          }
        );
        return (
          <button
            key={uuid()}
            className={menuLinkClassName}
            onClick={() => onClick(menuLink.id)}
          >
            {menuLink.text}
          </button>
        )
      })}
    </div>
    <div
      className={styles.profileSection}
    >
      <button
        className={styles.profileButton}
      >
        {profileName}
        <ArrowSVG
          color="#fff"
          width={10}
          height={10}
          className={styles.arrowSVG}
        />
      </button>
      <div className={styles.round}>
        <span>Z</span>
      </div>
    </div>
  </div>
);

Menubar.propTypes = {
  menu: PropTypes.array,
  profileName: PropTypes.string,
  onClick: PropTypes.func,
};

export default Menubar;