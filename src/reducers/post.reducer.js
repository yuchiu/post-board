const initialState = {
  postList: [],
  selectedPost: {},
  postListCount: 0
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "CREATE_POST":
      newState.postList.push(action.payload);
      newState.postListCount += 1;
      return newState;

    // TODO:
    case "EDIT_POST":
      return newState;

    // TODO:
    case "REMOVE_POST":
      return newState;

    default:
      return state;
  }
};
