import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class NewsCard extends Component {
  render () {
    const image = `url(${this.props.details.urlToImage})`
    const backupImage = 'url("http://media.comicbook.com/uploads1/2015/08/rick-and-morty---header-147026.jpg")'
    const backgroundImage = {
      backgroundImage: this.props.details.urlToImage ? image : backupImage,
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
