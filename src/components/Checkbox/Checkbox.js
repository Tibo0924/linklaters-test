import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import styles from './Checkbox.module.css';


class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.checked || false,
    }
  }
  handleChange = () => {
    if (this.props.callback) {
      this.props.callback()
    }
    this.setState({ isChecked: !this.state.isChecked })
  }

  render() {
    const sliderClassName = className(
      styles.slider,
      {
        [styles.bluebg]: this.state.isChecked,
      }
      );
      return (
        <label className={styles.root}>
        <input
        type="checkbox"
        className={styles.checkbox}
        checked={this.state.isChecked}
        onChange={this.handleChange}
        />
        <div className={sliderClassName}></div>
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