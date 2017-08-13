import React from "react"
import { arrayOf, shape, bool, func } from "prop-types"
import ImageComic from "./ImageComic"
import MarvelComic from "./MarvelComic"
import "../public/styles/comic.css"
import "../public/styles/landing.css"

const ComicsContainer = props => {
  const all = props.comics
  const trades = props.comics.filter(index => index.title.endsWith("TP") || index.title.endsWith("HC"))
  const imageComics = Object.keys(!props.imageIsChecked ? trades : all).map(index => {
    const comic = !props.imageIsChecked ? trades[index] : all[index]
    return <ImageComic key={index} {...comic} />
  })

  const marvelComics = Object.keys(props.marvelComics).map(index => {
    const comic = props.marvelComics[index]
    return <MarvelComic key={index} {...comic} />
  })

  return (
    <div className="page-container">
      <h4>
        <stong>IMAGE COMICS</stong>
        <input type="checkbox" onChange={() => props.showTrades("imageIsChecked")} />
        <span>show trades</span>
      </h4>
      <div className="comic-page">
        {imageComics}
      </div>
      <h4>
        <stong>Marvel COMICS</stong>
      </h4>
      <div className="comic-page">
        {marvelComics}
      </div>
    </div>
  )
}
ComicsContainer.propTypes = {
  comics: arrayOf(shape).isRequired,
  marvelComics: arrayOf(shape).isRequired,
  imageIsChecked: bool.isRequired,
  showTrades: func.isRequired
}

export default ComicsContainer
