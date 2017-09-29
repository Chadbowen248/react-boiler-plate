import React from "react"
import { shape, func } from "prop-types"

const ComicCollectionResultTemp = props =>
  <div className="comic-container__comic">
    <img className="comic-results__image" src={props.details.image.medium_url} alt="" />
    <p>{props.details.name} {props.details.issue_number}</p>
    <button className="comic-results-add-button" onClick={() => props.addComic(props.details)}>
      Add Comic
    </button>

    <a href={props.details.site_detail_url}><img className="cvlogo" src="public/img/cvlogo.png" alt=""/></a>
  </div>

export default ComicCollectionResultTemp

ComicCollectionResultTemp.propTypes = {
  details: shape({}).isRequired,
  addComic: func.isRequired
}
