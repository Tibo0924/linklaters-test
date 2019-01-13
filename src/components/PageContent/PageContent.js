import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { TickIconSVG } from '../SVG';
import FormGroup from '../FormGroup';
import styles from './PageContent.module.css'

const PageContent = ({ dropdownOptions }) => {
  const lists = [
    ['Otam rem aperian', 'Ipsa quae', 'Unde omnis', 'Voluptatem (duvrnem'],
    ['Perspiciatis Unde', 'Architecto beatae vitae', 'Perspiciatis Unde', 'Architecto beatae vitae'],
    ['achitecto beatae vitae'],
    ['Totam', 'Iste Natus', 'Omnis Iste Natus Erro', 'Explicabo'],
    ['5.0', 'Omnis iste natus', 'Accusantium doloremque laudant', 'Accusantium dolor']
  ];
  return (
    <div className={styles.root}>
      <span className={styles.title}>
        <TickIconSVG />
        CSed ut perspiciatis unde
      </span>
      <span className={styles.paragraph}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatea vitae dicta sunt explicabo.
      </span>
      <div className={styles.listGroup}>
        {lists.map(list => (
          <div
            className={styles.list}
            key={uuidv4()}
          >
            {list.map(listItem => (
              <div
                key={uuidv4()}
                className={styles.listItem}
              >
                {listItem}
              </div>
            ))}
          </div>
        ))}
      </div>
      <FormGroup
        dropdown={dropdownOptions}
      />
    </div>
  )
};

PageContent.propTypes = {
  dropdownOptions: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.number,
  }))
}

export default PageContent;
