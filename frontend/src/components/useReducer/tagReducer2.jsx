export const INITIAL_TAG_STATE = {
  tags: [],
  error: null,
};
export const tagReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TAGS": {
      const newTags = action.payload
        .split(/[, ]+/)
        .filter((tag) => tag.trim() !== "");
      return {
        ...state,
        tage: [...state.tags, ...newTags],
        error: null,
      };
    }
    case "REMOVE_TAGS":
      return {
        ...state,
        tags: state.tags.filter((_, index) => index !== action.payload),
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
