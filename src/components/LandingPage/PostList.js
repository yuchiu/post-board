import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import "./PostList.scss";
import { DefaultButton } from "@/components/common";

const PostItem = ({ postItem }) => (
  <div className="post-item-panel">
    <div className="post-item-panel__header">
      <h3 className="post-item-panel__header__item post-item-panel__header__item--title">
        {postItem.title}
      </h3>
      <h3 className="post-item-panel__header__item">by {postItem.writer}</h3>
    </div>

    <div className="post-item-panel__body">
      <DefaultButton cssClass="post-item-panel__body__item">
        <Link to={`posts/${postItem.id}`} className="router-link">
          View Post
        </Link>
      </DefaultButton>
      <span className="post-item-panel__body__item">
        {postItem.commentCount}{" "}
        {postItem.commentCount > 1 ? (
          <React.Fragment>comments</React.Fragment>
        ) : (
          <React.Fragment>comment</React.Fragment>
        )}
      </span>
      <span className="post-item-panel__body__item">
        posted at: <Moment format="MMM DD, YYYY" date={postItem.createAt} />
      </span>
    </div>
  </div>
);

const PostList = ({ postList = [] }) => (
  <div className="landing-post-list">
    {postList.map((postItem, i) => (
      <PostItem key={`post-item-${i}`} postItem={postItem} />
    ))}
  </div>
);

PostList.propTypes = {
  postList: PropTypes.array.isRequired
};

export default PostList;
