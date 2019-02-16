import React from "react";
import { connect } from "react-redux";

import "./CreateCommentForm.scss";
import { DefaultButton, InlineError } from "@/components/common";
import { commentAction } from "@/actions";
import createUUID from "@/utils/createUUID";
import formValidation from "@/utils/formValidation";

class CreateCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formErrors: {},
      commentBody: {
        id: "",
        comment: "",
        writer: ""
      }
    };
  }

  normalizeCommentBody = commentBody => {
    const { selectedPost } = this.props;
    const normalizedCommentBody = { ...commentBody };
    normalizedCommentBody.postId = selectedPost.id;
    normalizedCommentBody.id = createUUID();
    if (!normalizedCommentBody.writer) {
      normalizedCommentBody.writer = "annoymous";
    }
    normalizedCommentBody.createdAt = Date.now();
    return normalizedCommentBody;
  };

  handleChange = e => {
    e.preventDefault();
    const { commentBody } = this.state;
    const { name, value } = e.target;
    commentBody[name] = value;
    this.setState({
      commentBody
    });
  };

  resetComment = () => {
    this.setState({
      commentBody: {
        id: "",
        comment: "",
        writer: ""
      }
    });
  };

  handleCreateComment = e => {
    e.preventDefault();
    const { commentBody } = this.state;
    const { createComment } = this.props;
    // title and comment are required, validate before create comment
    const formErrors = formValidation.createComment(commentBody);
    this.setState({ formErrors });
    if (Object.keys(formErrors).length === 0) {
      const normalizedCommentBody = this.normalizeCommentBody(commentBody);
      createComment(normalizedCommentBody);
      this.resetComment();
    }
  };

  render() {
    const { formErrors, commentBody } = this.state;
    return (
      <form className="create-comment-form">
        {formErrors.comment && <InlineError text={formErrors.comment} />}
        <div className="create-comment-form__item">
          <h3 className="create-comment-form__item__field">Comment</h3>
          <input
            type="text"
            name="comment"
            value={commentBody.comment}
            className="create-comment-form__item__input"
            onChange={this.handleChange}
          />
        </div>
        <div className="create-comment-form__item">
          <h3 className="create-comment-form__item__field">By</h3>
          <input
            type="text"
            name="writer"
            value={commentBody.writer}
            className="create-comment-form__item__input"
            onChange={this.handleChange}
          />
        </div>
        <DefaultButton
          cssClass="create-comment-form-item"
          handleClick={this.handleCreateComment}
        >
          Submit
        </DefaultButton>
      </form>
    );
  }
}
const stateToProps = state => ({
  selectedPost: state.postReducer.selectedPost
});

const dispatchToProps = dispatch => ({
  createComment: commentBody => {
    dispatch(commentAction.createComment(commentBody));
  },
  getCommentByPostId: postId => {
    dispatch(commentAction.getCommentByPostId(postId));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(CreateCommentForm);
