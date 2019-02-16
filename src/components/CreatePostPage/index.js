import React from "react";
import { connect } from "react-redux";

import "./index.scss";
import formValidation from "@/utils/formValidation";
import createUUID from "@/utils/createUUID";
import { postAction } from "@/actions";
import { DefaultButton, InlineError } from "@/components/common";

const CreatePostForm = ({ handleChange, handleCreatePost, formErrors }) => (
  <form className="create-post-form">
    {formErrors.title && <InlineError text={formErrors.title} />}
    <div className="create-post-form__item">
      <h3 className="create-post-form__item__field">Title</h3>
      <input
        type="text"
        name="title"
        className="create-post-form__item__input"
        onChange={handleChange}
      />
    </div>
    {formErrors.post && <InlineError text={formErrors.post} />}
    <div className="create-post-form__item">
      <h3 className="create-post-form__item__field">Post</h3>
      <textarea
        type="text"
        name="post"
        className="create-post-form__item__input"
        onChange={handleChange}
      />
    </div>
    <div className="create-post-form__item">
      <h3 className="create-post-form__item__field">By</h3>
      <input
        type="text"
        name="writer"
        className="create-post-form__item__input"
        onChange={handleChange}
      />
    </div>
    <div className="create-post-form__item">
      <DefaultButton
        cssClass="create-post-form__item__btn"
        handleClick={handleCreatePost}
      >
        Create
      </DefaultButton>
    </div>
  </form>
);

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
    const { formErrors } = this.state;
    return (
      <div className="create-post-page-wrapper page-wrapper">
        <main className="create-post-page-main">
          <h1 className="create-post-page-main__title">CreatePost Page</h1>
          <CreatePostForm
            formErrors={formErrors}
            handleChange={this.handleChange}
            handleCreatePost={this.handleCreatePost}
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

export default connect(
  null,
  dispatchToProps
)(CreatePostPage);
