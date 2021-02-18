export const marvelReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, characters: action.payload };
    case "CHANGE_VIEW":
      return {
        ...state,
        view: action.payload,
      };
    case "SEARCH_DATA":
      return {
        ...state,
        characters: action.payload,
      };
    case "ADD_FAVORITE":
      return { ...state, favorite: [...state.favorite, action.payload] };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorite: action.payload,
      };
    case "SHOW_FAVORITES":
      return {
        ...state,
        characters: action.payload,
      };
    default:
      return state;
  }
};
