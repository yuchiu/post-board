import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const NotFoundPage = ({
  match: {
    params: { unfoundLocation = "" }
  }
}) => (
  <div className="not-found-page-wrapper page-wrapper">
    <h1 className="not-found-page-header">
      Oops... location "{unfoundLocation}" is not found.
    </h1>
  </div>
);

NotFoundPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default NotFoundPage;
