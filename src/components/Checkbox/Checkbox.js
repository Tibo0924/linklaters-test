import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.css';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.checked || false,
    }
  }

  handleChange = () => {
    this.setState({ isChecked: !this.state.isChecked })
  }

  render() {
    return (
      <label className={styles.root}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={this.state.isChecked}
          onChange={this.handleChange}
        />
        <div className={styles.slider}></div>
      </label>
    )
  }
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;