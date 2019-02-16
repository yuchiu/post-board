import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Redirect } from "react-router-dom";

import "./index.scss";
import { postAction } from "@/actions";
import { isObjEmpty } from "@/utils/dataValidation";
import CreateCommentForm from "./CreateCommentForm";
import CommentListSection from "./CommentListSection";

const PostDetail = ({ selectedPost = {} }) => (
  <section className="post-detail-panel">
    <h3 className="post-detail-panel__title post-detail-panel__item">
      {selectedPost.title}
    </h3>
    <p className="post-detail-panel__body post-detail-panel__item">
      {selectedPost.post}
    </p>

    <h3 className="post-detail-panel__writer post-detail-panel__item">
      {selectedPost.writer}
    </h3>

    <span className="post-detail-panel__time post-detail-panel__item">
      Created At: <Moment format="MMM DD, YYYY" date={selectedPost.createAt} />
    </span>
  </section>
);

class PostDetailPage extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { postId }
      },
      getPostDetail
    } = this.props;
    getPostDetail(postId);
  }

  render() {
    const { selectedPost } = this.props;
    return (
      <React.Fragment>
        {isObjEmpty(selectedPost) ? (
          <Redirect to="/" />
        ) : (
          <div className="post-detail-page-wrapper page-wrapper">
            <main className="post-detail-page-main">
              <h1 className="post-detail-page-main__title">PostDetail Page</h1>
              <PostDetail selectedPost={selectedPost} />
              <CommentListSection />
              <CreateCommentForm />
            </main>
          </div>
        )}
      </React.Fragment>
    );
  }
}
const stateToProps = state => ({
  selectedPost: state.postReducer.selectedPost
});

const dispatchToProps = dispatch => ({
  getPostDetail: postId => {
    dispatch(postAction.getPostDetail(postId));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(PostDetailPage);
