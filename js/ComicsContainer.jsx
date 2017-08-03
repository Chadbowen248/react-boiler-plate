import React from "react";
// import Axios from "axios"
import "../public/styles/landing.css";

const ComicsContainer = props =>
  <div className="page-container">
    {Object.keys(props.comics).map(index => {
      const comic = props.comics[index]
      return (
        <p key={index}>
          {comic.title}
        </p>
      );
    })}
  </div>;

export default ComicsContainer;
