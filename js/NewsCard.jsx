import React, { Component } from "react"
import "bulma/css/bulma.css"

class NewsCard extends Component {
  render() {
  console.log('news card rendered')
    return (
      <div className="card">
        <div className="card-image">
          <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image" />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left" />
            <div className="media-content">
              <p className="title is-4">John Smith</p>
            </div>
          </div>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          </div>
        </div>
      </div>
    )
  }
}

export default NewsCard
