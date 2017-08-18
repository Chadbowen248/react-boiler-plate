import React from "react";
import { BrowserRouter, Match } from "react-router";
import Axios from "axios";
import Navigation from "./Navigation";
import HomeContainer from "./HomeContainer";
import NewsContainer from "./NewsContainer";
import ComicsContainer from "./ComicsContainer";
import "../public/styles/normalize.css";
import "../public/styles/style.css";
import "../public/styles/nav.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imageComics: [],
      imageIsChecked: false,
      marvelComics: [],
      darkHorseComics: []
    };
    this.showTrades = this.showTrades.bind(this);
    this.getComics = this.getComics.bind(this);
    this.resetTrades = this.resetTrades.bind(this);
  }
  // "https://wrapapi.com/use/chadbowen248/newnewnew/comics/0.0.1?wrapAPIKey=Z9JmPx0za31dMxIkLQJr88cFyIpeJCfJ&year=2017&month=03"

  componentDidMount() {
    const date = new Date();
    let month = (date.getMonth() + 1).toString();
    month = month.length < 2 ? `0${month}` : month;
    const year = date.getFullYear();
    const apiKey = "wrapAPIKey=Z9JmPx0za31dMxIkLQJr88cFyIpeJCfJ";
    const imageUrl = `https://wrapapi.com/use/chadbowen248/comics/comics/latest?${apiKey}&year=${year}&month=${month}`;
    const marvelUrl = `https://wrapapi.com/use/chadbowen248/newnewnew/comics/0.0.1?${apiKey}&year=${year}&month=${month}`;
    const darkHorseUrl = `https://wrapapi.com/use/chadbowen248/darkhorse/comics/0.0.1?${apiKey}`;
    this.getComics(imageUrl, "imageComics");
    this.getComics(marvelUrl, "marvelComics");
    this.getComics(darkHorseUrl, "darkHorseComics");
  }

  getComics(url, publisher) {
    Axios(url)
      .then(res => res.data.data)
      .then(final => Object.values(final))
      .then(arr => {
        const comics = [];
        arr[0].map((index, i) => {
          if (publisher === "imageComics") {
            comics.push({
              title: arr[0][i],
              image: arr[1][i],
              date: arr[2][i],
              href: arr[3][i]
            });
          } else {
            comics.push({
              title: arr[0][i],
              image: arr[1][i],
              href: arr[2][i]
            });
          }
          return index;
        });
        return comics;
      })
      .then(returnedComics => this.setState({ [publisher]: returnedComics }));
  }

  showTrades(publisher) {
    const currentState = this.state[publisher];
    this.setState({ [publisher]: !currentState });
  }

  resetTrades() {
    this.setState({ imageIsChecked: false });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Match exactly pattern="/" component={HomeContainer} />
          <Match pattern="/news" component={NewsContainer} />
          <Match
            pattern="/comics"
            render={() =>
              <ComicsContainer
                comics={this.state.imageComics}
                marvelComics={this.state.marvelComics}
                darkHorseComics={this.state.darkHorseComics}
                showTrades={this.showTrades}
                imageIsChecked={this.state.imageIsChecked}
                resetTrades={this.resetTrades}
              />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
