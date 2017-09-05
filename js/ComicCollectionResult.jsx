import React from "react"
import { shape, func } from "prop-types"

const ComicCollectionResult = props =>
  <div className="comic-container__comic" key={props.details.id}>
    <img className="comic-results__image" src={props.details.image.medium_url} alt="" />

    <button onClick={() => props.addComic(props.details)}>add me</button>

    <p className='comic-container__title'><a href={`${props.details.api_detail_url}&format=json&api_key=2736f1620710c52159ba0d0aea337c59bd273816`}>
      {props.details.name}
    </a></p>
  </div>

export default ComicCollectionResult

ComicCollectionResult.propTypes = {
  details: shape.isRequired,
  addComic: func.isRequired
}
