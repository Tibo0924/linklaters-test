import React from 'react';
import PropTypes from 'prop-types';

const TickIcon = ({ width, height, color, className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="-5 -20 54 54">
    <path
      d="M31.531 4.719a1.598 1.598 0 0 0-2.261 0L10.102 23.887 2.73 16.52A1.598 1.598 0 1 0 .47 18.78l8.5 8.5a1.598 1.598 0 0 0 2.261 0l20.301-20.3a1.598 1.598 0 0 0 0-2.262zm0 0"
      fill="#cba761"
    />
  </svg>
);

TickIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

TickIcon.defaultProps = {
  width: 48,
  height: 48,
  color: "#fff",
  className: null,
};

export default TickIcon;
