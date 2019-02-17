import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

import "./PostDetail.scss";

const PostDetail = ({ selectedPost = {} }) => (
  <section className="post-detail-panel">
    <h3 className="post-detail-panel__title post-detail-panel__item">
      {selectedPost.title}
    </h3>
    <h3 className="post-detail-panel__writer post-detail-panel__item">
      By {selectedPost.writer}
    </h3>
    <span className="post-detail-panel__time post-detail-panel__item">
      <Moment format="MMM DD, YYYY" date={selectedPost.createAt} />
    </span>
    <p className="post-detail-panel__body post-detail-panel__item">
      {selectedPost.post}
    </p>
  </section>
);

PostDetail.propTypes = {
  selectedPost: PropTypes.object.isRequired
};

export default PostDetail;
