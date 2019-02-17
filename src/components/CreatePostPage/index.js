import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./index.scss";
import formValidation from "@/utils/formValidation";
import createUUID from "@/utils/createUUID";
import CreatePostForm from "./CreatePostForm";
import { postAction } from "@/actions";

class CreatePostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formErrors: {},
      postBody: {
        id: "",
        title: "",
        post: "",
        writer: ""
      }
    };
  }

  normalizePostBody = postBody => {
    const normalizedPostBody = { ...postBody };
    normalizedPostBody.id = createUUID();
    if (!normalizedPostBody.writer) {
      normalizedPostBody.writer = "annoymous";
    }
    normalizedPostBody.createdAt = Date.now();
    normalizedPostBody.commentCount = 0;
    return normalizedPostBody;
  };

  handleChange = e => {
    e.preventDefault();
    const { postBody } = this.state;
    const { name, value } = e.target;
    postBody[name] = value;
    this.setState({
      postBody
    });
  };

  handleCreatePost = e => {
    e.preventDefault();
    const { postBody } = this.state;
    const { createPost, history } = this.props;
    // title and post are required, validate before create post
    const formErrors = formValidation.createPost(postBody);
    this.setState({ formErrors });
    if (Object.keys(formErrors).length === 0) {
      const normalizedPostBody = this.normalizePostBody(postBody);
      createPost(normalizedPostBody);
      history.push(`posts/${normalizedPostBody.id}`);
    }
  };

  render() {
    const { formErrors, postBody } = this.state;
    return (
      <div className="create-post-page-wrapper page-wrapper">
        <main className="create-post-page-main">
          <h1 className="create-post-page-main__title">Create Post</h1>
          <CreatePostForm
            formErrors={formErrors}
            handleChange={this.handleChange}
            handleCreatePost={this.handleCreatePost}
            postBody={postBody}
          />
        </main>
      </div>
    );
  }
}

const dispatchToProps = dispatch => ({
  createPost: postBody => {
    dispatch(postAction.createPost(postBody));
  }
});

CreatePostPage.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  dispatchToProps
)(CreatePostPage);
