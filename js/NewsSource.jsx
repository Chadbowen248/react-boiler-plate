import React from 'react'
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



export default NewsSource