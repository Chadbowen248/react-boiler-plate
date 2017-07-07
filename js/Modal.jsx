import React, { Component } from 'react'

class Modal extends Component {
  render () {
    return (
      <div className={this.props.modalActive ? 'modal is-active' : 'modal'}>
        <div className="modal-background" onClick={this.props.closeModal} />
        <div className="modal-content">
          <div className="custom-modal">
            <p className="modal-title">
              {this.props.details.title}
            </p>
            <p className="image">
              <img src={this.props.details.urlToImage} />
            </p>
            <p>
              {this.props.details.description}
            </p>
            <a
              className="button is-primary is-outlined"
              href={this.props.details.url}
            >
              Full Story
            </a>
          </div>
        </div>
        <button
          className="modal-close is-large"
          onClick={this.props.closeModal}
        />
      </div>
    )
  }
}

export default Modal
