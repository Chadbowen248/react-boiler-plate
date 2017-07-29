import React from "react"
import NewsSource from "./NewsSource"
import "../public/styles/news.css"

const News = () => {
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

export default News
