import React, { Component } from "react"
import { string, shape } from "prop-types"
import "bulma/css/bulma.css"
import Modal from "./Modal"

class NewsCard extends Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
    this.state = { modalActive: false }
  }

  openModal() {
    this.setState({ modalActive: true })
  }
  closeModal() {
    this.setState({ modalActive: false })
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
        <button className="card" onClick={this.openModal}>
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
        <Modal modalActive={this.state.modalActive} details={this.props.details} closeModal={this.closeModal} />
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
