import React from "react"

const Modal = props =>
  <div className={props.modalActive ? "modal is-active" : "modal"}>
    <div className="modal-background" onClick={props.closeModal} />
    <div className="modal-content">
      <div className="custom-modal">
        <p className="modal-title">
          {props.details.title}
        </p>
        <p className="image">
          <img src={props.details.urlToImage} />
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

export default Modal
