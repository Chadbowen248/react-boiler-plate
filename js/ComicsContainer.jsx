import React from "react"
import { arrayOf, shape } from "prop-types"
import ImageComic from "./ImageComic"
import "../public/styles/comic.css"
import "../public/styles/landing.css"

const ComicsContainer = props => {
  const all = props.comics
  const trades = props.comics.filter(index => index.title.endsWith("TP") || index.title.endsWith("HC"))

  return (
    <div className="page-container">
      <h4>
        <stong>IMAGE COMICS</stong>
        <input type="checkbox" onChange={props.showTrades} />
        <span>show trades</span>
      </h4>
      <div className="comic-page">
        {Object.keys(!props.isChecked ? trades : all).map(index => {
          const comic = !props.isChecked ? trades[index] : all[index]
          return <ImageComic key={index} {...comic} />
        })}
      </div>
    </div>
  )}
ComicsContainer.propTypes = {
  comics: arrayOf(shape).isRequired
}

export default ComicsContainer
