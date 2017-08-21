import React from "react";
import { string } from "prop-types"

const MarvelComic = props => {
    const missingImage = props.image.indexOf('_not_');
    const normalImage = props.image.replace("portrait_incredible", "detail");
  return (
    <div className="comic-container__comic">
      <a href={props.href} target="blank">
        <img
          src={missingImage === -1 ? normalImage : 'public/img/landing-page/marvel_no_image.jpg'}
          alt={props.title}
        />
        <p className="comic-container__title">
          <strong>
            {props.title}
          </strong>
        </p>
      </a>
    </div>
  );
};

MarvelComic.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  href: string.isRequired,
}

export default MarvelComic;
