import React from "react";
import { string, shape } from "prop-types";

const NewsCard = props => {
  const image = `url(${props.details.urlToImage})`;
  const backupImage =
    'url("http://media.comicbook.com/uploads1/2015/08/rick-and-morty---header-147026.jpg")';
  const backgroundImage = {
    backgroundImage: props.details.urlToImage ? image : backupImage,
    backgroundPosition: "center",
    backgroundSize: "cover"
  };
  return (
    <div className='news-card'>
      <a href={props.details.url} target='_blank'>
        <button className="news-card__button">
          <div className="news-card__image" style={backgroundImage} />
          <p className='news-card__title'>
            {props.details.title}
          </p>
        </button>
      </a>
    </div>
  );
};

NewsCard.propTypes = {
  details: shape({
    title: string.isRequired,
    urlToImage: string
  }).isRequired
};

NewsCard.defaultProps = {
  details: shape({
    title: "",
    urlToImage: ""
  })
};

export default NewsCard;
