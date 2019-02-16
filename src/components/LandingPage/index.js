import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import "./index.scss";
import { DefaultButton } from "@/components/common";

const PostItem = ({ postItem }) => (
  <div className="post-item-panel">
    <h3 className="post-item-panel__title post-item-panel__item">
      {postItem.title}
    </h3>
    <p className="post-item-panel__body post-item-panel__item">
      {postItem.post}
    </p>
    <h3 className="post-item-panel__writer post-item-panel__item">
      {postItem.writer}
    </h3>
    {postItem.updatedAt ? (
      <span className="post-item-panel__time post-item-panel__item">
        Updated At: <Moment format="MMM DD, YYYY" date={postItem.updatedAt} />
      </span>
    ) : (
      <span className="post-item-panel__time post-item-panel__item">
        Created At: <Moment format="MMM DD, YYYY" date={postItem.createAt} />
      </span>
    )}
  </div>
);

const LandingPage = ({ postList = [], postListCount = 0 }) => (
  <div className="landing-page-wrapper page-wrapper">
    <main className="landing-page-main">
      <section className="landing-page-header">
        <h1 className="landing-page-header__title landing-page-header__item">
          Welcome to Post Board!
        </h1>
        <h2 className="landing-page-header__desc landing-page-header__item">
          There are currently {postListCount} posts
        </h2>
        <div className="landing-page-header__create-post landing-page-header__item">
          <DefaultButton>
            <Link
              to="create-post"
              className="router-link landing-page-header__create-post__btn"
            >
              Create Post
            </Link>
          </DefaultButton>
        </div>
      </section>
      <section className="landing-page-body">
        <div className="landing-page-body__list">
          {postList.map((postItem, i) => (
            <PostItem key={`post-item-${i}`} postItem={postItem} />
          ))}
        </div>
      </section>
    </main>
  </div>
);

const stateToProps = state => ({
  postList: state.postReducer.postList,
  postListCount: state.postReducer.postListCount
});

LandingPage.propTypes = {
  postList: PropTypes.array.isRequired,
  postListCount: PropTypes.number.isRequired
};

export default connect(
  stateToProps,
  null
)(LandingPage);
