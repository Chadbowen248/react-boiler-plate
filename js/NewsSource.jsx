import React from 'react'
import {string, arrayOf, bool, shape, func} from "prop-types"
import NewsCard from "./NewsCard"

const NewsSource = (props) => 
        <div className="news-container">
        <div className="news-source-title" onClick={props.toggleClass} role="button" tabIndex="0">
           {props.source} 
        </div>
        <div className={props.isActive ? "show-news" : "news-default"}>
          {Object.keys(props.articles).map(index =>
            <NewsCard
              key={index}
              details={props.articles[index]}
              source={props.source}
            />
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