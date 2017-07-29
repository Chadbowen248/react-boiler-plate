import React, { Component } from "react"
import Axios from "axios"
import NewsSource from "./NewsSource"

class NewsSourceContainer extends Component {
  constructor(props) {
    super(props)
    this.toggleClass = this.toggleClass.bind(this)
    this.state = { articles: [], active: false }
  }

  componentDidMount() {
    const APIkey = "&sortBy=top&apiKey=26ce81bcd5214311bb4c8d1bd8761e20"
    const endPoint = "https://newsapi.org/v1/articles?source="
    Axios.get(endPoint + this.props.source + APIkey).then(res => {
      const trimmedArr = res.data.articles.slice(0, 9)
      this.setState({ articles: trimmedArr })
    })
  }
  toggleClass() {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }

  render() {
    return (
      <NewsSource
        source={this.props.source}
        isActive={this.state.active}
        articles={this.state.articles}
        toggleClass={this.toggleClass}
      />
    )
  }
}
export default NewsSourceContainer
