import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const InlineError = ({ text = "error", cssClass = "" }) => (
  <span className={`inline-error-span ${cssClass}`}>
    {"  "}
    {text}
  </span>
);

InlineError.propTypes = {
  text: PropTypes.string
};

export default InlineError;
