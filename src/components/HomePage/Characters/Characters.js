import React, { useContext, useEffect } from "react";
import { MarvelContext } from "../../../contexts/marvelContext";
import Header from "../../Header/Header";
import CardItem from "../CardItem/CardItem";
import ListItem from "../ListItem/ListItem";
import Search from "../../Search/Search";
import style from "./Characters.module.css";

export default function Characters() {
  const { state, dispatch } = useContext(MarvelContext);

  useEffect(() => {
    fetchDataAction();
  }, []);

  const fetchDataAction = async () => {
    const data = await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=6e5060e01c4b7ee2a016ffcd5079b468&hash=487fdf44d9cc6e059dae4d062cf419e2`
    );
    const dataJson = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJson.data.results,
    });
  };

  const bookmark = (value) => {
    const charatcterInFavorite = state.favorite.includes(value);
    if (charatcterInFavorite) {
      // remove duplicate character
      const favouritesWithoutCharacter = state.favorite.filter(
        (fav) => fav.id !== value.id
      );
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: favouritesWithoutCharacter,
      });
    } else {
      // add character
      dispatch({
        type: "ADD_FAVORITE",
        payload: value,
      });
    }
  };
  const allCharacters = state.characters.map((character) => {
    if (state.view === "card") {
      return (
        <CardItem
          key={character.id}
          character={character}
          bookmark={bookmark}
        />
      );
    } else {
      return (
        <ListItem
          key={character.id}
          character={character}
          bookmark={bookmark}
        />
      );
    }
  });
  const showFavorite = () => {
    dispatch({
      type: "SHOW_FAVORITES",
      payload: state.favorite,
    });
  };
  return (
    <>
      <Header />
      <div className={style.comicBGPanel}>
        <Search showFavorite={showFavorite} fetchDataAction={fetchDataAction} />
        <div className={`container ${style.charactersBody}`}>
          <div className="row">{allCharacters}</div>
        </div>
      </div>
    </>
  );
}
