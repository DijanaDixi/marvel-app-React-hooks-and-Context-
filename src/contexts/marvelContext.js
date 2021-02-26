import PropTypes from 'prop-types'
import React, { createContext, useReducer } from "react";
import { marvelReducer } from "../reducer/marvelReducer";

export const MarvelContext = createContext();

const MarvelContextProvider = (props) => {
  const initState = {
    loading:false,
    characters: [],
    favorite: [],
    view: "card",
  };
  const [state, dispatch] = useReducer(marvelReducer, initState);

  return (
    <MarvelContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MarvelContext.Provider>
  );
};
MarvelContextProvider.propTypes={
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]).isRequired
};
export default MarvelContextProvider;
