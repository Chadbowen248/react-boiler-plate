import React from "react"
import NewsSourceContainer from "./NewsSourceContainer"
import "../public/styles/news.scss"

const NewsContainer = () => {
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
      {sources.map(index => <NewsSourceContainer source={index} key={index} />)}
    </div>
  )
}

export default NewsContainer
