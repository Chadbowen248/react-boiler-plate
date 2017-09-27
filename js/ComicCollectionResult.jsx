import React from "react"
import { shape, func } from "prop-types"

const ComicCollectionResult = props => 
// const addButton = props.details.count_of_issues === 1 ? 'Add Me' : 'disabled';
  <div className="comic-container__comic" key={props.details.id}>
    <img className="comic-results__image" src={props.details.image.medium_url} alt="" />
    <p className='comic-container__title'>{props.details.name}</p>
    <button  className={props.isOnlyIssue === 1 ? 'comic-results-add-button' : 'comic-results-add-button__disabled'} onClick={() => props.addComic(props.details)}>Add Comic</button>

    <button className={props.isOnlyIssue > 1 ? 'comic-results-add-button' : 'comic-results-add-button__disabled'} onClick={()=> props.deeperSearch(`${props.details.api_detail_url}?api_key=2736f1620710c52159ba0d0aea337c59bd273816&format=json`)}>
      go deeper
      
    </button>
    <a href={props.details.site_detail_url}><img className="cvlogo" src="public/img/cvlogo.png" alt=""/></a>
  </div>

export default ComicCollectionResult

ComicCollectionResult.propTypes = {
  details: shape.isRequired,
  addComic: func.isRequired
}

// disabled={props.isOnlyIssue > 1}
// disabled={props.isOnlyIssue === 1 }