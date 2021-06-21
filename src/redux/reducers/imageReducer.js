const imageReducer = (state = [], action) => {
  switch (action.type) {
    case "IMAGES":
      const images = action.payload;
      return [...state, images];
    default:
      return state;
  }
};

export default imageReducer;
