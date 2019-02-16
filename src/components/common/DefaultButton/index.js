import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const DefaultButton = ({
  children = "button",
  cssClass = "",
  handleClick = () => {}
}) => (
  <button className={`default-button ${cssClass}`} onClick={handleClick}>
    {children}
  </button>
);

DefaultButton.propTypes = {
  cssClass: PropTypes.string,

  handleClick: PropTypes.func
};

export default DefaultButton;
