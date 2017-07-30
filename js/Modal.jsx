import React from "react"
import { string, shape, func, bool } from "prop-types"

const Modal = props =>
  <div className={props.modalActive ? "modal is-active" : "modal"}>
    <div className="modal-background" onClick={props.closeModal} role="button" tabIndex="0" />
    <div className="modal-content">
      <div className="custom-modal">
        <p className="modal-title">
          {props.details.title}
        </p>
        <p className="image">
          <img src={props.details.urlToImage} alt={props.details.title} />
        </p>
        <p>
          {props.details.description}
        </p>
        <a className="button is-primary is-outlined" href={props.details.url}>
          Full Story
        </a>
      </div>
    </div>
    <button className="modal-close is-large" onClick={props.closeModal} />
  </div>

Modal.propTypes = {
  details: shape({
    title: string.isRequired,
    urlToImage: string.isRequired,
    description: string.isRequired
  }).isRequired,
  modalActive: bool.isRequired,
  closeModal: func.isRequired
}

export default Modal
