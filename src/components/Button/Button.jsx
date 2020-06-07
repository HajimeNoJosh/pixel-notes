import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export const Button = ({ className, onClick, text }) => (
  <button className={className} type="button" onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};
