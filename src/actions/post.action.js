export default {
  getPostDetail: postId => dispatch => {
    dispatch({
      type: "GET_POST_DETAIL",
      payload: postId
    });
  },

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
