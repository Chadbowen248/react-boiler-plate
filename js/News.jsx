import React from "react"
import NewsSource from "./NewsSource.jsx"
import "../public/styles/news.css"

class News extends React.Component {
    constructor (props) {
    super(props)
    this.toggleClass = this.toggleClass.bind(this)
    this.state = { active: false }
  }

  toggleClass () {
    const currentState = this.state.active
    this.setState({ active: !currentState })
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
        {sources.map(index => <NewsSource source={index} key={index} toggleClass={this.toggleClass} isActive={this.state.active}/>)}
      </div>
    )
  }
}

export default News
