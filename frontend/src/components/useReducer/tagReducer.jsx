export const INITIAL_TAG_STATE = {
  tags: [], // Holds the created tags
  error: null, // Holds error messages if any
};
export const tagReucer = (state, action) => {
  switch (action.type) {
    case "ADD_TAGS": {
      const newTags = action.payload
        .split(/[, ]+/)
        .filter((tags) => tags.trim() !== "");

      return {
        ...state,
        tags: [...state.tags, ...newTags],
        error: null,
      };
    }
    case "REMOVE_TAG":
      return {
        ...state,
        tags: state.tags.filter((tag, index) => index !== action.payload),
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
