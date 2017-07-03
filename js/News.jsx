import React from "react"
import NewsSource from "./NewsSource.jsx"
import "../public/styles/news.css"

class News extends React.Component {
  render() {
    const sources = [ 
     "bbc-news",
      "the-washington-post",
      "associated-press",
      "cnn",
      "google-news",
      "buzzfeed",
      "mashable",
      "techcrunch"
    ]

    return (
      <div className="page-container news">
        {sources.map(index => <NewsSource source={index} key={index} />)}
      </div>
    )
  }
}

export default News