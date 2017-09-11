import React from "react"
import { shape, func } from "prop-types"

const ComicCollectionResultTemp = props => 
  <div className="comic-container__comic" >
   
    <img className="comic-results__image" src={props.details.image.medium_url} alt="" />

    <button  className={props.isOnlyIssue === 1 ? 'comic-results-add-button' : 'comic-results-add-button__disabled'} onClick={() => props.addComic(props.details)}>Add Comic</button>

    <a href={props.details.site_detail_url}>{props.details.count_of_issues}</a>
  </div>

export default ComicCollectionResultTemp

// ComicCollectionResultTemp.propTypes = {
//   details: shape.isRequired,
//   addComic: func.isRequired
// }

// disabled={props.isOnlyIssue > 1}
// disabled={props.isOnlyIssue === 1 }