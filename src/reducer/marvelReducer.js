export const marvelReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return{
        ...state,
        loading:true,
      }
    case "FETCH_DATA_SUCCESS":
      return { 
        ...state, 
        loading:false,
        characters: action.payload.data };
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
