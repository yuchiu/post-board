import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import "./CommentListSection.scss";
import { commentAction } from "@/actions";

const CommentListItem = ({ comment }) => (
  <div className="comment-item-panel">
    <p className="comment-item-panel__body">{comment.comment}</p>
    <div className="comment-item-panel__meta">
      <h3 className="comment-item-panel__meta__item">by {comment.writer}</h3>
      <span className="comment-item-panel__meta__item">
        <Moment format="MMM DD, YYYY" date={comment.createAt} />
      </span>
    </div>
  </div>
);

class CommentListSection extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { postId }
      },
      getCommentListByPostId
    } = this.props;
    getCommentListByPostId(postId);
  }

  render() {
    const { selectedCommentList, selectedCommentCount } = this.props;
    return (
      <section className="comment-list-section">
        <h2 className="comment-list-section__header">
          Total of {selectedCommentCount}
          {selectedCommentCount.commentCount > 1 ? (
            <React.Fragment> comments</React.Fragment>
          ) : (
            <React.Fragment> comment</React.Fragment>
          )}
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
  selectedCommentCount: state.commentReducer.selectedCommentCount
});

const dispatchToProps = dispatch => ({
  getCommentListByPostId: postId => {
    dispatch(commentAction.getCommentListByPostId(postId));
  }
});

CommentListSection.propTypes = {
  selectedCommentList: PropTypes.array.isRequired,
  selectedCommentCount: PropTypes.number.isRequired,

  getCommentListByPostId: PropTypes.func.isRequired
};

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(CommentListSection)
);
