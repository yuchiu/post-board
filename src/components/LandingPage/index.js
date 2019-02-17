import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./index.scss";
import { DefaultButton } from "@/components/common";
import PostList from "./PostList";

const LandingPage = ({ postList = [], postListCount = 0 }) => (
  <div className="landing-page-wrapper page-wrapper">
    <main className="landing-page-main">
      <section className="landing-page-header">
        <h1 className="landing-page-header__title landing-page-header__item">
          Welcome to Post Board!
        </h1>
        <div className="landing-page-header__meta">
          <h2 className="landing-page-header__meta__item">
            There are currently {postListCount} posts
          </h2>
          <DefaultButton cssClass="landing-page-header__meta__item">
            <Link to="create-post" className="router-link">
              <i className="fas fa-edit" /> Create Post
            </Link>
          </DefaultButton>
        </div>
      </section>
      <section className="landing-page-body">
        <PostList postList={postList} />
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
