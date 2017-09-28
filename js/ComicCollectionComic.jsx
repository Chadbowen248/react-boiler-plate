import React from "react"
import { shape } from "prop-types"

const ComicCollectionComic = props =>
  <div className="comic-container__comic">
    <img className="comic-collection__image" src={props.details.image.medium_url} alt="" />
    <p className='comic-container__title'>
      {props.details.finalName}
    </p>
    <img className="comic-delete" src="public/img/close.png" alt="close" onClick={() => props.removeComic(`comic-${props.details.id}`)}/>
  </div>

export default ComicCollectionComic

ComicCollectionComic.propTypes = {
  details: shape.isRequired
}
