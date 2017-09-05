import React from "react"
// import {Preload} from "react-preload"
import { string, arrayOf, bool, shape, func } from "prop-types"
import NewsCard from "./NewsCard"
// TODO PRELOAD NEWSOURCE IMAGES
const NewsSource = props =>
  <div className="news-container">
    <div className="news-container__title" onClick={props.toggleClass} role="button" tabIndex="0">
      {props.source}
    </div>
    <div className={props.isActive ? "news-container--show-news" : "news-container--hide-news"}>
      {Object.keys(props.articles).map(index =>
        <NewsCard key={index} details={props.articles[index]} source={props.source} />
      )}
    </div>
  </div>

NewsSource.propTypes = {
  source: string.isRequired,
  isActive: bool.isRequired,
  articles: arrayOf(shape).isRequired,
  toggleClass: func.isRequired
}

export default NewsSource
