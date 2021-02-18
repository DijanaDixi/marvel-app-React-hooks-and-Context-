import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { MarvelContext } from "../../contexts/marvelContext";
import style from "./Search.module.css";

function Search({ showFavorite, fetchDataAction }) {
  const { dispatch } = useContext(MarvelContext);
  const [value, setValue] = useState("");

  useEffect(() => {
    getSearchData();
  }, [value]);

  const handleValue = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };
  const getSearchData = async () => {
    console.log(value);
    if (value.length > 0) {
      const data = await fetch(
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${value}&ts=thesoer&apikey=6e5060e01c4b7ee2a016ffcd5079b468&hash=487fdf44d9cc6e059dae4d062cf419e2`
      );
      const dataJson = await data.json();
      return dispatch({
        type: "SEARCH_DATA",
        payload: dataJson.data.results,
      });
    } else {
      fetchDataAction();
    }
  };
  return (
    <>
      <nav
        className={`navbar navbar-light justify-content-between ${style.nav}`}
      >
        <div className="container">
          <a href="/" className="navbar-brand text-white ">
            Hero Search
          </a>
          <a
            href="/"
            className="text-white"
            onClick={(event) => {
              event.preventDefault(), showFavorite();
            }}
          >
            FAVORITE
          </a>
          <form className={`form-inline text-danger ${style.marginBlock}`}>
            <input
              className="form-control mr-sm-2 "
              type="search"
              placeholder="Hero Search"
              aria-label="Search"
              onChange={handleValue}
              value={value}
            />
          </form>
        </div>
      </nav>
    </>
  );
}
Search.propTypes = {
  showFavorite: PropTypes.func,
  fetchDataAction: PropTypes.func,
};
export default Search;
