import React from "react"
import Axios from "axios"
import base from "./base"
import ComicCollectionResult from "./ComicCollectionResult"
import ComicCollectionResultTemp from "./ComicCollectionResultTemp"
import ComicCollectionComic from "./ComicCollectionComic"

class ComicCollection extends React.Component {
  state = {
    results: [],
    collection: [],
    temp: [],
    searchTerm: "",
    loaded: false,
    flag: false,
    fade: false,
    images: 0,
    modal: false,
    selected: ''
  }

  componentWillMount() {
    this.ref = base.syncState(`/`, {
      context: this,
      state: "collection"
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  haveImagesLoaded = arr => {
    if (arr === "temp") {
      if (this.state.images + 1 === Object.keys(this.state[arr]).length) {
        this.setState({ fade: true, loaded: false })
      }
    }
    const count = this.state.images
    this.setState({ images: count + 1 })

    if (this.state.images === this.state[arr].length - 1) {
      this.setState({ fade: true, loaded: false })
    }
  }

  searchForComic = () => {
    const searchTerm = this.textInput.value
    const apiKey = "2736f1620710c52159ba0d0aea337c59bd273816"
    const URL = `https://comicvine.gamespot.com/api/search/?api_key=${apiKey}&format=json&query=${searchTerm}&resources=volume`
    this.setState({ loaded: true, fade: false })
    Axios.get(URL).then(res => res.data.results).then(results => this.setState({ results }))
  }
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value })
  }
  deeperSearch = url => {
    const apiKey = "2736f1620710c52159ba0d0aea337c59bd273816"
    this.setState({ loaded: true, images: 0 })
    Axios(url).then(res => res.data.results.issues).then(res =>
      res.map(index =>
        Axios(`${index.api_detail_url}?api_key=${apiKey}&format=json`).then(comic => {
          const temp = { ...this.state.temp }
          temp[`comic-${comic.data.results.id}`] = comic.data.results
          this.setState({ temp, flag: true, fade: false })
          window.scrollTo(0, 0)
        })
      )
    )
  }

  addComic = comic => {
    const collection = { ...this.state.collection }
    const words = [
      ["One", 1],
      ["Two", 2],
      ["Three", 3],
      ["Four", 4],
      ["Five", 5],
      ["Six", 6],
      ["Seven", 7],
      ["Eight", 8],
      ["Nine", 9],
      ["Ten", 10]
    ]

    comic.volume ? (comic.finalName = `${comic.volume.name} ${comic.name}`) : (comic.finalName = comic.name)
    for (let i = 0; i < words.length; i++) {
      if (comic.finalName.indexOf(words[i][0]) > -1) {
        comic.finalName = comic.finalName.replace(words[i][0], words[i][1])
      }
    }
    collection[`comic-${comic.id}`] = comic
    this.setState({ collection, modal: true , selected: comic.name})


    // alert(`${comic.finalName} added!!`)
    // localStorage.setItem(`comic-${comic.id}`, JSON.stringify(comic))
  }

  removeComic = comic => {
    this.state.collection[comic] = null
    this.setState({ collection: this.state.collection })
  }
  render() {
    const firstSearch = this.state.results.map(comic =>
      <ComicCollectionResult
        key={comic.id}
        details={comic}
        addComic={this.addComic}
        isOnlyIssue={comic.count_of_issues}
        deeperSearch={this.deeperSearch}
        haveImagesLoaded={this.haveImagesLoaded}
        modal={this.state.modal}
      />
    )
    const deeperSearch = Object.entries(this.state.temp).map(comic =>
      <ComicCollectionResultTemp
        details={comic[1]}
        addComic={this.addComic}
        key={comic[1].id}
        haveImagesLoaded={this.haveImagesLoaded}
      />
    )
    return (
      <div className="wrapper">
        <div className="publisher-heading">
          <div className="test">
            <h1 className="publisher-heading__title--not-trans">ADD TO COLLECTION</h1>
            <input
              className="comicSearch"
              onFocus={() => {
                this.setState({ results: [], temp: [], flag: false, fade: false, images: 0 })
                this.textInput.value = ""
              }}
              type="text"
              ref={input => {
                this.textInput = input
              }}
            />
            <div className="input-container">
              <input className="comic-search__submit" type="submit" onClick={this.searchForComic} />
              <button
                className="comic-search__clear"
                onClick={() => {
                  this.setState({ results: [], temp: [], flag: false, fade: false, images: 0 })
                  this.textInput.value = ""
                }}
              >
                clear
              </button>
            </div>
          </div>
        </div>
        <div className={!this.state.fade ? "comic-results-container-hide" : "comic-results-container-show"}>
          {!this.state.flag ? firstSearch : deeperSearch}
        </div>
        <img className={!this.state.loaded ? "hide-spinner" : "show-spinner"} src="/public/img/Spinner.svg" alt="" />

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
              if (a[1].finalName.replace(/^Absolute /, "") < b[1].finalName.replace(/^Absolute /, "")) return -1
              if (a[1].finalName.replace(/^Absolute /, "") > b[1].finalName.replace(/^Absolute /, "")) return 1
              return 0
            })
            .filter(comic => comic[1].finalName.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map(comic => <ComicCollectionComic details={comic[1]} key={comic[1].id} removeComic={this.removeComic} />)}
        </div>
        <div className={this.state.modal ? "modal-show" : "modal-hide"}>
          <p>{this.state.selected}</p>
         <button className="comic-results-add-button" onClick={()=>{this.setState({modal: false})}}>close</button> 
        </div> 
        <div className={this.state.modal ? "fade-out" : ''} />
      </div>
    )
  }
}

export default ComicCollection
