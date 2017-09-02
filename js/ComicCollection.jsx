import React from "react"
import Axios from "axios"

class ComicCollection extends React.Component {

  searchForComic = () => {
    const searchTerm = this.textInput.value;
    const apiKey = '2736f1620710c52159ba0d0aea337c59bd273816'
    const URL = `https://comicvine.gamespot.com/api/search/?api_key=${apiKey}&format=json&query=${searchTerm}&resources=volume`
    Axios({url: URL,  crossdomain: true}).then(res => console.log(res.data.results))
    // fetch(URL, {mode: 'no-cors'}).then(res => console.log(res))
    this.textInput.value = ""

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
      </div>
    )
  }
}

export default ComicCollection


// https://comicvine.gamespot.com/api/search/?api_key=2736f1620710c52159ba0d0aea337c59bd273816&format=json&query=hellboy%20library%20edition&resources=volume