export default {
  createComment: commentBody => dispatch => {
    dispatch({
      type: "CREATE_COMMENT",
      payload: commentBody
    });
  },

  getCommentListByPostId: postId => dispatch => {
    dispatch({
      type: "GET_POST_COMMENT_LIST",
      payload: postId
    });
  }
};
