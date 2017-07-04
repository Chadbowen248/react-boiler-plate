import React from "react"
import NewsSource from "./NewsSource.jsx"
import "../public/styles/news.css"

class News extends React.Component {
  constructor(props) {
    super()
    this.toggleClass = this.toggleClass.bind(this)
    this.state = {
      "associated-press": false,
      "bbc-news": false,
      buzzfeed: false,
      cnn: false,
      "google-news": false,
      mashable: false,
      techcrunch: false,
      "the-washington-post": false
    }
  }

  toggleClass(key) {
    for (var prop in this.state) {
      if (prop !== key) {
        this.setState({ [prop]: false })
      } else {
        this.setState({ [prop]: true })
      }
    }

    const currentState = this.state[key]
    this.setState({ [key]: !currentState })
  }

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
        {sources.map(source =>
          <NewsSource source={source} key={source} toggleClass={this.toggleClass} isActive={this.state[source]} />
        )}
      </div>
    )
  }
}

export default News
