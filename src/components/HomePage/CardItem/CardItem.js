/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./CardItem.module.css";
import { MarvelContext } from "../../../contexts/marvelContext";

export default function CardItem({ character, bookmark }) {
  // flip character card
  const [flip, setFlip] = useState(false);
  const { state } = useContext(MarvelContext);

  const handleClick = () => {
    setFlip(!flip);
  };
  const saveId = (val) => {
    bookmark(val);
    setFlip(false);
  };

  // Nested Object
  const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce(
      (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
      nestedObj
    );
  };
  // comics details
  const getComics = getNestedObject(character, ["comics", "items"]);
  const comics = getComics.slice(0, 3);

  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
      <div className={`${style.card}`} onClick={handleClick}>
        <div
          className={
            flip ? `${style.rotateFlipCard}` : `${style.flipCardInner}`
          }
        >
          <div className={style.flipCardFront}>
            <img
              className="card-img-top"
              alt="..."
              src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
            />
            <div className={`card-body ${style.cardBody}`}>
              <p className="card-text ">{character.name}</p>
              {state.favorite.find((f) => f.id === character.id) ? (
                <FontAwesomeIcon
                  icon={faBookmark}
                  onClick={(e) => {
                    e.stopPropagation();
                    saveId(character, character.id);
                  }}
                  className={`text-danger ${style.bookmark}`}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBookmark}
                  onClick={(e) => {
                    e.stopPropagation();
                    saveId(character, character.id);
                  }}
                  className={style.bookmark}
                />
              )}
            </div>
          </div>
          <div className={style.flipCardBack}>
            <div>
              <p className="text-center text-uppercase font-italic">Comics</p>
              {comics?.map((c) => {
                return <p key={c?.id}>{c?.name || "- -"}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
CardItem.propTypes = {
  character: PropTypes.object,
  bookmark: PropTypes.func,
};
