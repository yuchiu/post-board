export default {
  createPost: data => {
    const formErrors = {};
    /* post title character length has to be > 4 || < 64 */
    if (!data.title) {
      formErrors.title = "Title can't be blank";
    } else if (data.title.length < 4) {
      formErrors.title = "Length of title cannot be less than 16 characters";
    } else if (data.title.length > 64) {
      formErrors.title = "Length of title cannot be greater than 64 characters";
      /* post body character length has to be > 4 || < 2048 */
    }
    if (!data.post) {
      formErrors.post = "Post can't be blank";
    } else if (data.post.length < 4) {
      formErrors.post = "Length of post cannot be less than 16 characters";
    } else if (data.post.length > 2048) {
      formErrors.post = "Length of post cannot be greater than 2048 characters";
    }
    return formErrors;
  }
};
