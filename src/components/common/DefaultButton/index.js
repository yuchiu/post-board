import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const DefaultButton = ({ children, cssClass, handleClick }) => (
  <button className={`button ${cssClass}`} onClick={handleClick}>
    {children}
  </button>
);

DefaultButton.propTypes = {
  children: PropTypes.object,
  cssClass: PropTypes.string,

  handleClick: PropTypes.func
};

export default DefaultButton;
