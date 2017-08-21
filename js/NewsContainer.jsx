import React from "react"
import NewsSourceContainer from "./NewsSourceContainer"


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
    <div className="wrapper wrapper--news">
      {sources.map(index => <NewsSourceContainer source={index} key={index} />)}
    </div>
  )
}

export default NewsContainer
