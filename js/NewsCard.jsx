import React from 'react'
import Modal from './Modal'

const NewsCard = (props) => 
      <div>
        <button className="card" onClick={this.openModal}>
          <div className="card-image" style={props.backgroundImage} />
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">
                  {props.details.title}
                </p>
              </div>
            </div>
          </div>
        </button>
        <Modal modalActive={this.state.modalActive} details={this.props.details} closeModal={this.closeModal}/>
      </div>

      export default NewsCard