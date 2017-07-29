import React from "react"
import NewsSource from "./NewsSource"
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
      "techcrunch",
      "the-huffington-post",
      "the-new-york-times",
      "new-scientist"
    ]

    return (
      <div className="page-container news">
        {sources.map(index => <NewsSource source={index} key={index} />)}
      </div>
    )
  }
}

export default News
