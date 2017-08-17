import React from "react";
import { arrayOf, shape, bool, func } from "prop-types";
import ImageComic from "./ImageComic";
import MarvelComic from "./MarvelComic";
import DarkHorseComic from "./DarkHorseComic";
import "../public/styles/comic.css";
import "../public/styles/landing.css";

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
      <div className="page-container">
        <div className="comic-heading-background">
          <h1 className="comic-heading-title">IMAGE COMICS</h1>
        <span className={!this.props.imageIsChecked ? 'show-all__inactive' : 'show-all__active' } onClick={() => this.props.showTrades("imageIsChecked")}>show all</span>
        </div>

        <div className="comic-page">
          {imageComics}
        </div>

        <div className="comic-heading-background">
          <h1 className="comic-heading-title">MARVEL COMICS</h1>
        </div>
        <div className="comic-page">
          {marvelComics}
        </div>
        <div className="comic-heading-background">
          <h1 className="comic-heading-title">DARKHORSE COMICS</h1>
        </div>


        <div className="comic-page">
          {DarkHorseComics}
        </div>
      </div>
    );
  }
}
ComicsContainer.propTypes = {
  comics: arrayOf(shape).isRequired,
  marvelComics: arrayOf(shape).isRequired,
  imageIsChecked: bool.isRequired,
  showTrades: func.isRequired
};

export default ComicsContainer;
