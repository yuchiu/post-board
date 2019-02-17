const initialState = {
  postList: [],
  selectedPost: {},
  postListCount: 0
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "CREATE_COMMENT":
      // increase comment count of the post that user left comment on
      newState.postList.map(post => {
        if (post.id === action.payload.postId) {
          // eslint-disable-next-line
          post.commentCount = post.commentCount+1;
        }
        return post;
      });
      return newState;

    case "GET_POST_DETAIL":
      newState.selectedPost = newState.postList.filter(
        post => post.id === action.payload
      );
      if (newState.selectedPost) {
        newState.selectedPost = newState.selectedPost[0];
      }
      return newState;

    case "CREATE_POST":
      newState.postList.unshift(action.payload);
      newState.postListCount += 1;
      newState.selectedPost = action.payload;
      return newState;

    default:
      return state;
  }
};
