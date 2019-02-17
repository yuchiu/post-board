import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import "./index.scss";
import { postAction } from "@/actions";
import { isObjEmpty } from "@/utils/dataValidation";
import CreateCommentForm from "./CreateCommentForm";
import CommentListSection from "./CommentListSection";
import PostDetail from "./PostDetail";

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

PostDetailPage.propTypes = {
  selectedPost: PropTypes.array.isRequired,
  getPostDetail: PropTypes.func.isRequired
};

export default connect(
  stateToProps,
  dispatchToProps
)(PostDetailPage);
