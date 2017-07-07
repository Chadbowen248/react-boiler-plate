import React, { Component } from "react"
import "bulma/css/bulma.css"

class NewsCard extends Component {
  constructor(props) {
    super(props)
    this.state = { modalActive: false }
  }

  render() {
    const openModal = () => {
      this.setState({ modalActive: true })
    }
    const closeModal = () => {
      this.setState({ modalActive: false })
    }
    const image = `url(${this.props.details.urlToImage})`
    const backupImage = 'url("http://media.comicbook.com/uploads1/2015/08/rick-and-morty---header-147026.jpg")'
    const backgroundImage = {
      backgroundImage: this.props.details.urlToImage ? image : backupImage,
      backgroundPosition: "center",
      backgroundSize: "cover"
    }
    return (
      <div>
        <div className="card" onClick={openModal}>
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
        {/*<div className={this.state.modalActive ? "modal is-active" : "modal"}>
          <div className="modal-background" onClick={closeModal} />
          <div className="modal-content" />
          <p className="image is-4by3">
            <img src="http://bulma.io/images/placeholders/1280x960.png" />
          </p>
          <button className="modal-close" onClick={closeModal} />
        </div>*/}

        <div className={this.state.modalActive ? "modal is-active" : "modal"}>
          <div className="modal-background" onClick={closeModal}/>
          <div className="modal-content">
            <div className="custom-modal">
             <p className="modal-title"> {this.props.details.title} </p>
            <p className="image">
              <img src={this.props.details.urlToImage} />
            </p>
            <p>{this.props.details.description}</p>
            <a className="button is-primary is-outlined" href={this.props.details.url}>Full Story</a>
            </div>
          </div>
          <button className="modal-close is-large" />
        </div>
      </div>
    )
  }
}

export default NewsCard
