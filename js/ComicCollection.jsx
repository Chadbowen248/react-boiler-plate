import React from "react"
import Axios from "axios"

class ComicCollection extends React.Component {
  state = { results: [] }
  searchForComic = () => {
    const searchTerm = this.textInput.value
    const apiKey = "2736f1620710c52159ba0d0aea337c59bd273816"
    const URL = `https://comicvine.gamespot.com/api/search/?api_key=${apiKey}&format=json&query=${searchTerm}&resources=volume`
    // const URL = `https://comicvine.gamespot.com/api/volumes/?api_key=${apiKey}&format=json&filter=name:${searchTerm}`
    Axios(URL).then(res => res.data.results).then(results => this.setState({ results }))
    this.textInput.value = ""
  }
  addComic = (comic) => {
    alert(`in the future, ${comic} will be added to the list of awesome things we own!!`)
  }
  render() {
    return (
      <div>
        <input
          className="comicSearch"
          type="text"
          ref={input => {
            this.textInput = input
          }}
        />
        <input type="submit" onClick={this.searchForComic} />
        <button
          onClick={() => {
            this.setState({ results: [] })
          }}
        >
          clear
        </button>
        <div className="comic-results-container">
          {this.state.results.map(comic =>
            <div className="comic-results" key={comic.id}>
              <div className="hero-results">
                <img className="comic-results__image" src={comic.image.medium_url} alt="" />
              </div>
              <button onClick={ () =>this.addComic(comic.name)}>add me</button>
              <div className="comic-results__desc">
                <a href={`${comic.api_detail_url}&format=json&api_key=2736f1620710c52159ba0d0aea337c59bd273816`}>
                  {comic.name}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ComicCollection

// https://comicvine.gamespot.com/api/search/?api_key=2736f1620710c52159ba0d0aea337c59bd273816&format=json&query=hellboy%20library%20edition&resources=volume
// https://comicvine.gamespot.com/api/volumes/?api_key=e2e9a43f0fc0bd4f98006793a3e6f7389b65df7f&filter=name:Hellboy:%20the%20chained%20coffin%20and%20the%20right%20hand%20of%20doom&format=json
