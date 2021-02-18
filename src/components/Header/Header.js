import React, { useContext } from "react";
import { faListUl, faTh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Header.module.css";
import { MarvelContext } from "../../contexts/marvelContext";

export default function Header() {
  const { state, dispatch } = useContext(MarvelContext);
  
  const changeButtons = () => {
    if (state.view === "card") {
      return (
        <FontAwesomeIcon
          icon={faTh}
          className={style.FontAwesomeIcon}
          onClick={() => dispatch({ type: "CHANGE_VIEW", payload: "list" })}
        />
      );
    } else {
      return (
        <FontAwesomeIcon
          icon={faListUl}
          className={style.FontAwesomeIcon}
          onClick={() => dispatch({ type: "CHANGE_VIEW", payload: "card" })}
        />
      );
    }
  };
  return (
    <header className={style.header}>
      <h1>
        <a href="/" className={style.home}>
          Home
        </a>
        {changeButtons()}
      </h1>
    </header>
  );
}
