import React, { Component } from "react"
import "bulma/css/bulma.css"
import Modal from './Modal'

class NewsCard extends Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
    this.state = { modalActive: false }
  }

    openModal () {
      this.setState({ modalActive: true })
    }
    closeModal () {
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
        <div className="card" onClick={this.openModal}>
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
        </div>
        <Modal modalActive={this.state.modalActive} details={this.props.details} closeModal={this.closeModal}/>
      </div>
    )
  }
}

export default NewsCard
