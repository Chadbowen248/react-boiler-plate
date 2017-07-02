import React, { Component } from "react"
import Axios from "axios"
import NewsCard from "./NewsCard.jsx"

class NewsSource extends Component {

  componentDidMount() {
    console.log(this.props.source)
    const APIkey = "&sortBy=top&apiKey=26ce81bcd5214311bb4c8d1bd8761e20"
    const endPoint = "https://newsapi.org/v1/articles?source="
    Axios.get(endPoint + this.props.source + APIkey).then(res => {
      console.log(res.data.articles)
    })
  }
  // run map on articleComponents to build newscards arr of components
  render() {
    return (
      <div>
        <h6>
          {this.props.source}
        </h6>
       
        <NewsCard />
      </div>
    )
  }
}

export default NewsSource
