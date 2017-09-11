import React from "react"
import { shape, func } from "prop-types"

const ComicCollectionComic = props => 
  <div className="comic-container__comic" >
   
    <img className="comic-results__image" src={props.details.image.medium_url} alt="" />
    <h3>{props.details.name}</h3>
 
  </div>

export default ComicCollectionComic

// ComicCollectionResultTemp.propTypes = {
//   details: shape.isRequired,
//   addComic: func.isRequired
// }

// disabled={props.isOnlyIssue > 1}
// disabled={props.isOnlyIssue === 1 }