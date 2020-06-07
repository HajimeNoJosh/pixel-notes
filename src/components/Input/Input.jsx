import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

export const Input = ({ className, placeholder, onClick }) => (
  <input className={className} placeholder={placeholder} onClick={onClick} />
);

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
};
