import React from "react";
import Axios from "axios";
import base from "./base";
import ComicCollectionResult from "./ComicCollectionResult";
import ComicCollectionResultTemp from "./ComicCollectionResultTemp";
import ComicCollectionComic from "./ComicCollectionComic";

class ComicCollection extends React.Component {
  state = {
    results: [],
    collection: [],
    temp: [],
    searchTerm: "",
    loaded: false,
    flag: false
  };

  componentWillMount() {
    this.ref = base.syncState(`/`, {
      context: this,
      state: "collection"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  searchForComic = () => {
    const searchTerm = this.textInput.value;
    const apiKey = "2736f1620710c52159ba0d0aea337c59bd273816";
    const URL = `https://comicvine.gamespot.com/api/search/?api_key=${apiKey}&format=json&query=${searchTerm}&resources=volume`;
    this.setState({loaded: true})
    Axios.get(URL)
      .then(res => res.data.results)
      .then(results => this.setState({  results, loaded: false  }))
  };
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  deeperSearch = url => {
    const apiKey = "2736f1620710c52159ba0d0aea337c59bd273816";

    Axios(url).then(res => res.data.results.issues).then(res =>
      res.map(index =>
        Axios(
          `${index.api_detail_url}?api_key=${apiKey}&format=json`
        ).then(comic => {
          const temp = { ...this.state.temp };
          temp[`comic-${comic.data.results.id}`] = comic.data.results;
          this.setState({ temp });
          this.setState({ flag: true });
        })
      )
    );
  };

  addComic = comic => {
    const collection = { ...this.state.collection };
    comic.volume
      ? (comic.finalName = `${comic.volume.name} ${comic.name}`)
      : (comic.finalName = comic.name);
    collection[`comic-${comic.id}`] = comic;
    this.setState({ collection });
    // localStorage.setItem(`comic-${comic.id}`, JSON.stringify(comic))
  };

  removeComic = comic => {
    this.state.collection[comic] = null;
    this.setState({ collection: this.state.collection });
  };
  render() {
    const firstSearch = this.state.results.map(comic =>
      <ComicCollectionResult
        key={comic.id}
        details={comic}
        addComic={this.addComic}
        isOnlyIssue={comic.count_of_issues}
        deeperSearch={this.deeperSearch}
      />
    );
    const deeperSearch = Object.entries(this.state.temp).map(comic =>
      <ComicCollectionResultTemp
        details={comic[1]}
        addComic={this.addComic}
        key={comic[1].id}
      />
    );
    return (
      <div className="wrapper">
        <div className="publisher-heading">
          <div className="test">
            <h1 className="publisher-heading__title--not-trans">
              ADD TO COLLECTION
            </h1>
            <input
              className="comicSearch"
              type="text"
              ref={input => {
                this.textInput = input;
              }}
            />
            <div className="input-container">
              <input
                className="comic-search__submit"
                type="submit"
                onClick={this.searchForComic}
              />
              <button
                className="comic-search__clear"
                onClick={() => {
                  this.setState({ results: [], temp: [], flag: false })
                  this.textInput.value = ''
                }}
              >
                clear
              </button>
            </div>
          </div>
        </div>
        <div className="comic-results-container">
          {!this.state.flag ? firstSearch : deeperSearch}
          <img className={!this.state.loaded ? 'hide-spinner' : 'show-spinner'} src="/public/img/Spinner.svg" alt=""/>
        </div>

        <div className="publisher-heading">
          <div className="test">
            <h1 className="publisher-heading__title--not-trans">COLLECTION</h1>

            <div className="input-container">
              <input
                className="comicSearch"
                type="text"
                value={this.state.searchTerm}
                onChange={this.handleSearchTermChange}
              />
            </div>
          </div>
        </div>

        <div className="comic-container">
          {Object.entries(this.state.collection)
            .sort((a, b) => {
              if (
                a[1].finalName.replace(/^Absolute /, "") <
                b[1].finalName.replace(/^Absolute /, "")
              )
                return -1;
              if (
                a[1].finalName.replace(/^Absolute /, "") >
                b[1].finalName.replace(/^Absolute /, "")
              )
                return 1;
              return 0;
            })
            .filter(
              comic =>
                comic[1].finalName
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(comic =>
              <ComicCollectionComic
                details={comic[1]}
                key={comic[1].id}
                removeComic={this.removeComic}
              />
            )}
        </div>
      </div>
    );
  }
}

export default ComicCollection;
