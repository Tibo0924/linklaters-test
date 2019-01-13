import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import CustomSelect from '../CustomSelect';
import styles from './FormGroup.module.css';

const HeaderText = ({ text, isActive, isDisabled, onClick, id }) => {
  const headerClassName = className(
    styles.headerText,
    {
      [styles.disabledHeader]: isDisabled,
    }
  );
  const textClassName = className({
    [styles.activeText]: isActive,
  }
  )
  return (
    <button
      className={headerClassName}
      disabled={isDisabled}
      onClick={() => onClick(id)}
    >
      <span className={textClassName}>
        {text}
      </span>
    </button>
  )
};

class FormGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          text: 'Perspiciatis Unde',
          isActive: false,
          isDisabled: false,
          id: 0,
        },
        {
          text: 'Accusantium doloremque laudant',
          isActive: true,
          isDisabled: false,
          id: 1,
        },
        {
          text: 'Voluptatem (duvrnem)',
          isActive: false,
          isDisabled: true,
          id: 2,
        },
      ]
    }
  }

  headerHandler = (id) => {
    const newState = this.state.headers.map(header => (
      header.id === id
        ? ({
          ...header,
          isActive: !header.isActive,
        })
        : header
    ))
    this.setState({ headers: newState })
  }

  render() {
    const { headers } = this.state;
    const { dropdown } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.formHeader}>
          {
            (headers && headers.length) && headers.map(header => (
              <HeaderText
                onClick={this.headerHandler}
                key={header.id}
                {...header}
              />
            ))
          }
        </div>
        <div className={styles.formBody}>
          <div className={styles.formBodyText}>Iste Natus</div>
          <CustomSelect dropdown={dropdown} />
          <div className={styles.formBodyButton}>Unde omnis</div>
        </div>
      </div>
    )
  }
};

FormGroup.propTypes = {
  dropdown: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.number,
  }))
};

FormGroup.defaultProps = {
  dropdown: null,
};

HeaderText.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  id: PropTypes.number,
};

HeaderText.defaultProps = {
  text: null,
  isActive: null,
  isDisabled: null,
  onClick: null,
  id: null,
};

export default FormGroup;