import React, { Component } from 'react'
import Axios from 'axios'
import NewsCard from './NewsCard'

class NewsSource extends Component {
  constructor (props) {
    super(props)
    this.toggleClass = this.toggleClass.bind(this)
    this.state = { articles: [], active: false }
  } 


  componentDidMount () {
    const APIkey = '&sortBy=top&apiKey=26ce81bcd5214311bb4c8d1bd8761e20'
    const endPoint = 'https://newsapi.org/v1/articles?source='
    Axios.get(endPoint + this.props.source + APIkey).then(res => {
      const trimmedArr = res.data.articles.slice(0, 9)
      this.setState({ articles: trimmedArr })
    })
  }

  toggleClass () {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }
  
  render () {
    return (
      <div className="news-container">
        <h6 className="news-source-title" onClick={this.toggleClass}>
          {this.props.source}
        </h6>
        <div className={this.state.active ? 'show-news' : 'news-default'}>
          {Object.keys(this.state.articles).map(index =>
            <NewsCard
              key={index}
              details={this.state.articles[index]}
              source={this.props.source}
            />
          )}
        </div>
      </div>
    )
  }
}
export default NewsSource
