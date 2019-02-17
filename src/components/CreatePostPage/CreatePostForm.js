import React from "react";
import PropTypes from "prop-types";

import "./CreatePostForm.scss";
import { DefaultButton, InlineError } from "@/components/common";

const CreatePostForm = ({
  handleChange,
  handleCreatePost,
  formErrors,
  postBody
}) => (
  <form className="create-post-form">
    {formErrors.title && <InlineError text={formErrors.title} />}
    <div className="create-post-form__item">
      <h3 className="create-post-form__item__field">Title</h3>
      <input
        type="text"
        name="title"
        value={postBody.title}
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
        value={postBody.post}
        className="create-post-form__item__input create-post-form__item__input--area"
        onChange={handleChange}
      />
    </div>
    <div className="create-post-form__item">
      <h3 className="create-post-form__item__field">By</h3>
      <input
        type="text"
        name="writer"
        placeholder="annoymous"
        value={postBody.writer}
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

CreatePostForm.propTypes = {
  formErrors: PropTypes.object.isRequired,
  postBody: PropTypes.object.isRequired,
  handleCreatePost: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CreatePostForm;
