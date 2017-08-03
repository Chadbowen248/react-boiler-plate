import React from "react"
import { arrayOf, shape } from "prop-types"
import "../public/styles/landing.css"

const ComicsContainer = props =>
  <div className="page-container">
    {Object.keys(props.comics).map(index => {
      const comic = props.comics[index]
      return (
        <p key={index}>
          {comic.title}
        </p>
      )
    })}
  </div>

ComicsContainer.propTypes = {
  comics: arrayOf(shape).isRequired
}

export default ComicsContainer
