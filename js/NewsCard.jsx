import React, { Component } from "react"
import { string, shape } from "prop-types"

class NewsCard extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const image = `url(${this.props.details.urlToImage})`
    const backupImage = 'url("http://media.comicbook.com/uploads1/2015/08/rick-and-morty---header-147026.jpg")'
    const backgroundImage = {
      backgroundImage: this.props.details.urlToImage ? image : backupImage,
      backgroundPosition: "center",
      backgroundSize: "cover"
    }
    return (
      <div>
        <a href={this.props.details.url}>
        <button className="card">
          <div className="card-image" style={backgroundImage} />
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">
                  {this.props.details.title}
                </p>
              </div>
            </div>
          </div>
        </button>
        </a>
      </div>
    )
  }
}

NewsCard.propTypes = {
  details: shape({
    title: string.isRequired,
    urlToImage: string
  }).isRequired
}

NewsCard.defaultProps = {
  details: shape({
    title: '',
    urlToImage: ''
  })
}

export default NewsCard
