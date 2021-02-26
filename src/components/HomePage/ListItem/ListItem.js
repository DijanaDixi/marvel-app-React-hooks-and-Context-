import PropTypes from "prop-types";
import React, { useContext } from "react";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./ListItem.module.css";
import { MarvelContext } from "../../../contexts/marvelContext";

export default function ListItem({ character, bookmark }) {
  const { state } = useContext(MarvelContext);
  const saveId = (val) => {
    bookmark(val);
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
    <div className={`col-10 offset-1 ${style.bodyCard}`} key={character.id}>
      <div className="row">
        <div className={`col-6 col-lg-4 ${style.imageHolder}`}>
          <img
            className={` ${style.marvelImage}`}
            alt="..."
            src={`${character.thumbnail.path}.${character?.thumbnail?.extension}`}
          />
        </div>

        <div className="col-6 col-lg-8">
          <div className="card-body p-0 mt-2">
            <h5 className="card-title ">{character.name}</h5>
            <div>
              <h5 className={style.overflow}>Comics</h5>
              {comics?.map((c) => {
                return <p key={c?.id}>{c?.name || "- -"}</p>;
              })}
            </div>
            <div>
              {state.favorite.find((f) => f.id === character.id) ? (
                <FontAwesomeIcon
                  icon={faBookmark}
                  onClick={() => saveId(character, character.id)}
                  className={`text-danger ${style.bookmark}`}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBookmark}
                  onClick={() => saveId(character)}
                  className={style.bookmark}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ListItem.propTypes = {
  character: PropTypes.object,
  bookmark: PropTypes.func,
};
