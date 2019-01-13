import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ArrowSVG } from '../SVG';
import styles from './CustomSelect.module.css';

class CustomSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.dropdown,
      currentSelection: 1,
      isDropdownOpen: false,
    }
  }

  handleClick = (id) => {
    // and call any other handlers
    this.setState({ currentSelection: id, isDropdownOpen: false })
  }

  toggleDropDown = () => {
    const { isDropdownOpen } = this.state;
    this.setState({ isDropdownOpen: !isDropdownOpen })
  }

  render() {
    const { options, currentSelection, isDropdownOpen } = this.state;
    const dropDownClassName = classNames(
      styles.dropDown,
      {
        [styles.isOpen]: isDropdownOpen,
      }
    );
    const rootClassName = classNames(
      styles.root,
    );
    const arrowClassName = classNames(
      styles.arrow,
      {
        [styles.arrowUp]: isDropdownOpen,
      }
    );

    return (
      <div className={rootClassName}>
        <div
          className={styles.currentSelection}
          onClick={this.toggleDropDown}
        >
          {options && options[currentSelection].text}
          <ArrowSVG
            width={15}
            height={15}
            className={arrowClassName}
          />
        </div>
        <div className={dropDownClassName}>
          {options && options.filter(option => option.id !== currentSelection).map(option => (
            <div
              key={option.id}
              className={styles.option}
              onClick={() => this.handleClick(option.id)}
            >
              {option.text}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

CustomSelect.propTypes = {
  dropdown: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.number,
  }))
};

CustomSelect.defaultProps = {
  dropdown: null,
};

export default CustomSelect;