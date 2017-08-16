import React from "react";

const MarvelComic = props => {
    const test = props.image.indexOf('_not_');
    const normalImage = props.image.replace("portrait_incredible", "detail");
    console.log(normalImage)
  return (
    <div className="comic">
      <a href={props.href} target="blank">
        <img
          src={normalImage}
          alt={props.title}
        />
        <p className="comic-title">
          <strong>
            {props.title}
          </strong>
        </p>
      </a>
    </div>
  );
};

export default MarvelComic;
