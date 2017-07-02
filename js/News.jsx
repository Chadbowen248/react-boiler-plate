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
      "hacker-news",
      "techcrunch"
    ]

    return (
      <div className="news-page page-container">
        {sources.map(index => <NewsSource source={index} key={index} />)}
      </div>
    )
  }
}

export default News
