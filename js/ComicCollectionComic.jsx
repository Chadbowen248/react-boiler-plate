import React from "react";
import { shape, func } from "prop-types";

const ComicCollectionComic = props =>
  <div className="comic-container__comic">
    <img
      className="comic-collection__image"
      src={props.details.image.medium_url}
      alt="comic"
    />
    <p className="comic-container__title">
      {props.details.finalName.length > 47 ? `${props.details.finalName.substring(0,47)} ...` : props.details.finalName}
    </p>
    <button
      className="comic-delete-button"
      onClick={() => props.removeComic(`comic-${props.details.id}`)}
    >
      <img
        className="comic-delete-image"
        src="public/img/close.png"
        alt="close"
      />
    </button>
  </div>;

export default ComicCollectionComic;

ComicCollectionComic.propTypes = {
  details: shape({}).isRequired,
  removeComic: func.isRequired
};
