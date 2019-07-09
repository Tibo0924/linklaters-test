import React from 'react';
import classNames from 'classnames';
import { ArrowSVG, MailSVG, WasteBasketSVG } from '../SVG'
import Checkbox from '../Checkbox';
import styles from './ActionBar.module.css';

const ActionBar = ({ checkboxCallback }) => {
  const titleClassName = classNames(
    styles.metaSection,
    styles.title,
  );

  const suntClassName = classNames(
    styles.metaSection,
    styles.sunt,
  );

  return (
    <div className={styles.root}>
      <div className={suntClassName}>
        Sunt
      </div>
      <div className={styles.metaSection}>
        <div className={styles.round}>
          <ArrowSVG
            color='#242424'
            height={13}
            width={13}
          />
        </div>
        Beatea Vita
      </div>
      <div className={titleClassName}>
        Doloremque laudantium otam Doloremque laudantium otam
      </div>
      <div className={styles.actionButtonGroup}>
        <button className={styles.actionButton}>
          <WasteBasketSVG
            height={25}
            width={25}
            color='#606060'
          />
          Archieto
        </button>
        <button className={styles.actionButton}>
          <Checkbox callback={checkboxCallback} />
          Aperiam
        </button>
        <button className={styles.actionButton}>
          <Checkbox checked />
          Totam
        </button>
        <button className={styles.actionButton}>
          <MailSVG
            color='#606060'
          />
          Rem
        </button>
      </div>
    </div>
  )
};

export default ActionBar;