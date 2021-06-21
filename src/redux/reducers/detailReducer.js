const detailReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DETAILS":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default detailReducer;
