export default {
  createPost: data => {
    const formErrors = {};
    /* post title character length has to be > 4 || < 64 */
    if (!data.title) {
      formErrors.title = "Title can't be blank";
    } else if (data.title.length < 4) {
      formErrors.title = "Length of title cannot be less than 4 characters";
    } else if (data.title.length > 64) {
      formErrors.title = "Length of title cannot be greater than 64 characters";
    }
    /* post body character length has to be > 4 || < 2048 */
    if (!data.post) {
      formErrors.post = "Post can't be blank";
    } else if (data.post.length < 4) {
      formErrors.post = "Length of post cannot be less than 4 characters";
    } else if (data.post.length > 2048) {
      formErrors.post = "Length of post cannot be greater than 2048 characters";
    }
    return formErrors;
  },
  createComment: data => {
    const formErrors = {};
    /* comment title character length has to be > 4 || < 128 */
    if (!data.comment) {
      formErrors.comment = "Comment can't be blank";
    } else if (data.comment.length < 4) {
      formErrors.comment = "Length of comment cannot be less than 4 characters";
    } else if (data.comment.length > 128) {
      formErrors.comment =
        "Length of comment cannot be greater than 128 characters";
    }
    return formErrors;
  }
};
