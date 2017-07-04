import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class NewsCard extends Component {
  render () {
    return (
      <a href={this.props.details.url}>
      <div className="card">
        <div className="card-image">
          <img src={this.props.details.urlToImage} alt="Image" />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                {this.props.details.title}
              </p>
              <p>{this.props.details.description}</p>
            </div>
          </div>
        </div>
      </div>
      </a>
    )
  }
}

export default NewsCard
