const initialState = {
  commentList: []
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "CREATE_COMMENT":
      newState.commentList.push(action.payload);
      return newState;

    // TODO:
    case "EDIT_COMMENT":
      return newState;

    // TODO:
    case "REMOVE_COMMENT":
      return newState;

    default:
      return state;
  }
};
