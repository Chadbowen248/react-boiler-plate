import React from "react"
import { Link } from "react-router"
import { arrayOf, shape, bool, func } from "prop-types"
import ImageComic from "./ImageComic"
import MarvelComic from "./MarvelComic"
// import ComicCollection from "./ComicCollection"
import DarkHorseComic from "./DarkHorseComic"
import "../public/styles/style.scss"

// https://comicvine.gamespot.com/api/issues/?api_key=e2e9a43f0fc0bd4f98006793a3e6f7389b65df7f&filter=name:Library%20Edition%20Vol.%206&format=json
// https://comicvine.gamespot.com/api/volumes/?api_key=e2e9a43f0fc0bd4f98006793a3e6f7389b65df7f&filter=name:Hellboy:%20the%20chained%20coffin%20and%20the%20right%20hand%20of%20doom&format=json
// https://comicvine.gamespot.com/api/search/?api_key=2736f1620710c52159ba0d0aea337c59bd273816&format=json&query=hellboy%20library%20edition&resources=volume
class ComicsContainer extends React.Component {
  componentWillUnmount() {
    this.props.resetTrades()
  }
  render() {
    const all = this.props.comics
    const trades = this.props.comics.filter(
      index => index.title.endsWith("TP") || index.title.endsWith("HC") || index.title.endsWith("Tp")
    )
    const imageComics = Object.keys(!this.props.imageIsChecked ? trades : all).map(index => {
      const comic = !this.props.imageIsChecked ? trades[index] : all[index]
      return <ImageComic key={index} {...comic} />
    })

    const marvelComics = Object.keys(this.props.marvelComics).map(index => {
      const comic = this.props.marvelComics[index]
      return <MarvelComic key={index} {...comic} />
    })

    const DarkHorseComics = Object.keys(this.props.darkHorseComics).map(index => {
      const comic = this.props.darkHorseComics[index]
      return <DarkHorseComic key={index} {...comic} />
    })

    return (
      <div className="wrapper">
        <Link className="comic-collection__nav-link" to={"/comicCollection"}>
          VIEW COLLECTION
        </Link>

        <div className="publisher-heading">
          <h1 className="publisher-heading__title">IMAGE COMICS</h1>
          <span
            className={!this.props.imageIsChecked ? "show-all__inactive" : "show-all__active"}
            onClick={() => this.props.showTrades("imageIsChecked")}
            role="button"
            tabIndex="0"
          >
            show all
          </span>
        </div>

        <div className="comic-container">
          {imageComics}
        </div>

        <div className="publisher-heading">
          <h1 className="publisher-heading__title">MARVEL COMICS</h1>
        </div>
        <div className="comic-container">
          {marvelComics}
        </div>
        <div className="publisher-heading">
          <h1 className="publisher-heading__title">DARKHORSE COMICS</h1>
        </div>

        <div className="comic-container">
          {DarkHorseComics}
        </div>
      </div>
    )
  }
}
ComicsContainer.propTypes = {
  comics: arrayOf(shape).isRequired,
  marvelComics: arrayOf(shape).isRequired,
  darkHorseComics: arrayOf(shape).isRequired,
  imageIsChecked: bool.isRequired,
  showTrades: func.isRequired,
  resetTrades: func.isRequired
}

export default ComicsContainer
