const initialState = {
  commentList: [],
  selectedCommentList: [],
  selectedCommentCount: 0
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "CREATE_COMMENT":
      newState.commentList.unshift(action.payload);
      newState.selectedCommentList.unshift(action.payload);
      newState.selectedCommentCount += 1;
      return newState;

    case "GET_POST_COMMENT_LIST":
      newState.selectedCommentList = newState.commentList.filter(
        comment => comment.postId === action.payload
      );
      newState.selectedCommentCount = newState.selectedCommentList.length;
      return newState;

    default:
      return state;
  }
};
