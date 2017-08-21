import React from "react";
import { arrayOf, shape, bool, func } from "prop-types";
import ImageComic from "./ImageComic";
import MarvelComic from "./MarvelComic";
import DarkHorseComic from "./DarkHorseComic";
import "../public/styles/style.scss";


class ComicsContainer extends React.Component {
  componentWillUnmount() {
    this.props.resetTrades();
  }
  render() {
    const all = this.props.comics;
    const trades = this.props.comics.filter(
      index => index.title.endsWith("TP") || index.title.endsWith("HC")
    );
    const imageComics = Object.keys(
      !this.props.imageIsChecked ? trades : all
    ).map(index => {
      const comic = !this.props.imageIsChecked ? trades[index] : all[index];
      return <ImageComic key={index} {...comic} />;
    });

    const marvelComics = Object.keys(this.props.marvelComics).map(index => {
      const comic = this.props.marvelComics[index];
      return <MarvelComic key={index} {...comic} />;
    });

    const DarkHorseComics = Object.keys(
      this.props.darkHorseComics
    ).map(index => {
      const comic = this.props.darkHorseComics[index];
      return <DarkHorseComic key={index} {...comic} />;
    });

    return (
      <div className="wrapper">
        <div className="publisher-heading">
          <h1 className="publisher-heading__title">IMAGE COMICS</h1>
        <span className={!this.props.imageIsChecked ? 'show-all__inactive' : 'show-all__active' } onClick={() => this.props.showTrades("imageIsChecked")} role="button" tabIndex="0">show all</span>
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
    );
  }
}
ComicsContainer.propTypes = {
  comics: arrayOf(shape).isRequired,
  marvelComics: arrayOf(shape).isRequired,
  darkHorseComics: arrayOf(shape).isRequired,
  imageIsChecked: bool.isRequired,
  showTrades: func.isRequired,
  resetTrades: func.isRequired
};

export default ComicsContainer;
