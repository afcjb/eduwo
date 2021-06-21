const dataReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      const { data } = action.payload;
      const { links } = action.payload;
      const { metadata } = action.payload;
      return { ...state, data, links, metadata };
    default:
      return state;
  }
};

export default dataReducer;
