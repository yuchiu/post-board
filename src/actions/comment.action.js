export default {
  createComment: commentBody => dispatch => {
    dispatch({
      type: "CREATE_COMMENT",
      payload: commentBody
    });
  },

  // TODO:
  editComment: () => dispatch => {
    dispatch({
      type: "EDIT_COMMENT"
    });
  },

  // TODO:
  removeComment: () => dispatch => {
    dispatch({
      type: "REMOVE_COMMENT"
    });
  }
};
