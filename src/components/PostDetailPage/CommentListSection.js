import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";

import "./CommentListSection.scss";
import { commentAction } from "@/actions";

const CommentListItem = ({ comment }) => (
  <div className="comment-item-panel">
    <p className="comment-item-panel__body comment-item-panel__item">
      {comment.comment}
    </p>
    <h3 className="comment-item-panel__writer comment-item-panel__item">
      {comment.writer}
    </h3>
    <span className="comment-item-panel__time comment-item-panel__item">
      Created At: <Moment format="MMM DD, YYYY" date={comment.createAt} />
    </span>
  </div>
);

class CommentListSection extends React.Component {
  componentDidMount() {
    const { getCommentListByPostId, postId } = this.props;
    getCommentListByPostId(postId);
  }

  render() {
    const { selectedCommentList, selectedCommentCount } = this.props;
    return (
      <section className="comment-list-section">
        <h2 className="comment-list-section__header">
          Total of {selectedCommentCount}
        </h2>
        {selectedCommentList.map((comment, i) => (
          <CommentListItem key={`comment-item-${i}`} comment={comment} />
        ))}
      </section>
    );
  }
}

const stateToProps = state => ({
  selectedCommentList: state.commentReducer.selectedCommentList,
  selectedCommentCount: state.commentReducer.selectedCommentCount,
  postId: state.postReducer.selectedPost.id
});

const dispatchToProps = dispatch => ({
  getCommentListByPostId: postId => {
    dispatch(commentAction.getCommentListByPostId(postId));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(CommentListSection);
