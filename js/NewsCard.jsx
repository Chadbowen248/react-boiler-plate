import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class NewsCard extends Component {
  render () {
    const backgroundImage = {
      backgroundImage: `url(${this.props.details.urlToImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
    return (
      <a href={this.props.details.url}>
      <div className="card">
        <div className="card-image" style={backgroundImage}>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                {this.props.details.title}
              </p>
            </div>
          </div>
        </div>
      </div>
      </a>
    )
  }
}

export default NewsCard
