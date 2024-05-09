const initState = {
  userDetail: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        userDetail: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
