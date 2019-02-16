export default {
  createPost: postBody => dispatch => {
    dispatch({
      type: "CREATE_POST",
      payload: postBody
    });
  },

  // TODO:
  editPost: () => dispatch => {
    dispatch({
      type: "EDIT_POST"
    });
  },

  // TODO:
  removePost: () => dispatch => {
    dispatch({
      type: "REMOVE_POST"
    });
  }
};
