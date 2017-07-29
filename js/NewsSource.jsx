import React from 'react'
import NewsCardContainer from "./NewsCardContainer"

const NewsSource = (props) => 
        <div className="news-container">
        <div className="news-source-title" onClick={props.toggleClass} role="button" tabIndex="0">
           {props.source} 
        </div>
        <div className={props.isActive ? "show-news" : "news-default"}>
          {Object.keys(props.articles).map(index =>
            <NewsCardContainer
              key={index}
              details={props.articles[index]}
              source={props.source}
            />
          )}
        </div>
      </div>



export default NewsSource