export default {
  createPost: data => {
    const formErrors = {};
    /* post title character length has to be > 2 || < 64 */
    if (!data.title) {
      formErrors.title = "Title can't be blank";
    } else if (data.title.length < 2) {
      formErrors.title = "Length of title cannot be less than 2 characters";
    } else if (data.title.length > 64) {
      formErrors.title = "Length of title cannot be greater than 64 characters";
    }
    /* post body character length has to be > 2 || < 8192 */
    if (!data.post) {
      formErrors.post = "Post can't be blank";
    } else if (data.post.length < 2) {
      formErrors.post = "Length of post cannot be less than 2 characters";
    } else if (data.post.length > 8192) {
      formErrors.post = "Length of post cannot be greater than 8192 characters";
    }
    return formErrors;
  },
  createComment: data => {
    const formErrors = {};
    /* comment title character length has to be > 2 || < 256 */
    if (!data.comment) {
      formErrors.comment = "Comment can't be blank";
    } else if (data.comment.length < 2) {
      formErrors.comment = "Length of comment cannot be less than 2 characters";
    } else if (data.comment.length > 256) {
      formErrors.comment =
        "Length of comment cannot be greater than 256 characters";
    }
    return formErrors;
  }
};
