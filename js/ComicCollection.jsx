import React from "react"
import Axios from "axios"
import base from'./base'
import ComicCollectionResult from "./ComicCollectionResult"

class ComicCollection extends React.Component {
  state = {
    results: [],
    collection: []
  }

  // componentWillMount() {
  //   this.ref = base.syncState(`comic-${comic.id}`,{
  //     context: this,
  //     state: 'collection'
  //   })
  // }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  searchForComic = () => {
    const searchTerm = this.textInput.value
    const apiKey = "2736f1620710c52159ba0d0aea337c59bd273816"
    const URL = `https://comicvine.gamespot.com/api/search/?api_key=${apiKey}&format=json&query=${searchTerm}&resources=volume`
    // const URL = `https://comicvine.gamespot.com/api/volumes/?api_key=${apiKey}&format=json&filter=name:${searchTerm}`
    Axios.get(URL, { crossdomain: true }).then(res => res.data.results).then(results => this.setState({ results }))
    this.textInput.value = ""
  }
  addComic = comic => {
    const collection = { ...this.state.collection }
    collection[`comic-${comic.id}`] = comic
    this.setState({ collection })
    this.ref = base.syncState(`/`,{
      context: this,
      state: 'collection'
    })

    // this.setState({ collection: { [comic.id]: addedComic } })
    // this.setState({[`comic${comic.id}]:addedComic})
    // localStorage.setItem(`comic-${comic.id}`, JSON.stringify(comic))
  }
  render() {
    return (
      <div className="wrapper">
        <div className="publisher-heading">
          <div className="test">
            <h1 className="publisher-heading__title--not-trans">ADD TO COLLECTION</h1>
            <input
              className="comicSearch"
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
                  this.setState({ results: [] })
                }}
              >
                clear
              </button>
            </div>
          </div>
        </div>
        <div className="comic-results-container">
          {this.state.results.map(comic =>
            <ComicCollectionResult key={comic.id} details={comic} addComic={this.addComic} />
          )}
        </div>
      </div>
    )
  }
}

export default ComicCollection

// https://comicvine.gamespot.com/api/search/?api_key=2736f1620710c52159ba0d0aea337c59bd273816&format=json&query=hellboy%20library%20edition&resources=volume
// https://comicvine.gamespot.com/api/volumes/?api_key=e2e9a43f0fc0bd4f98006793a3e6f7389b65df7f&filter=name:Hellboy:%20the%20chained%20coffin%20and%20the%20right%20hand%20of%20doom&format=json

/* <div className="comic-results" key={comic.id}>
              <div className="hero-results">
                <img className="comic-results__image" src={comic.image.medium_url} alt="" />
              </div>
              <button onClick={ () =>this.addComic(comic.name)}>add me</button>
              <div className="comic-results__desc">
                <a href={`${comic.api_detail_url}&format=json&api_key=2736f1620710c52159ba0d0aea337c59bd273816`}>
                  {comic.name}
                </a>
              </div>
            </div> */
