import React, { Component } from "react"
import Axios from "axios"
import NewsCard from "./NewsCard.jsx"

class NewsSource extends Component {
  constructor(props) {
    super(props)
    this.state = { articles: [] }
  }
  componentDidMount() {
    console.log(this.props.source)
    const APIkey = "&sortBy=top&apiKey=26ce81bcd5214311bb4c8d1bd8761e20"
    const endPoint = "https://newsapi.org/v1/articles?source="
    Axios.get(endPoint + this.props.source + APIkey).then(res => {
      this.setState({ articles: res.data.articles })
    })
  }
  render() {
    return (
      <div>
        {Object.keys(this.state.articles).map(test =>
          <NewsCard key={test} index={test} details={this.state.articles[test]} source={this.props.source} />
        )}
      </div>
    )
  }
}
export default NewsSource
