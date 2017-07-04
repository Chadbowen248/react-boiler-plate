import React, { Component } from "react"
import Axios from "axios"
import NewsCard from "./NewsCard.jsx"

class NewsSource extends Component {
  constructor(props) {
    super(props)
    this.state = { articles: [] }
  }

  componentDidMount() {
    const APIkey = "&sortBy=top&apiKey=26ce81bcd5214311bb4c8d1bd8761e20"
    const endPoint = "https://newsapi.org/v1/articles?source="
    Axios.get(endPoint + this.props.source + APIkey).then(res => {
      const trimmedArr = res.data.articles.slice(0, 9)
      this.setState({ articles: trimmedArr })
    })
  }

  render() {
    return (
      <div className="news-container">
        <h6
          className="news-source-title"
          onClick={() => {
            this.props.toggleClass(this.props.source)
          }}
        >
          {this.props.source}
        </h6>
        <div className={this.props.isActive ? "show-news" : "news-default"}>
          {Object.keys(this.state.articles).map(index =>
            <NewsCard key={index} index={index} details={this.state.articles[index]} source={this.props.source} />
          )}
        </div>
      </div>
    )
  }
}
export default NewsSource
