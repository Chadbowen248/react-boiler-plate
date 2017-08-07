import React from "react"
import { BrowserRouter, Match } from "react-router"
import Axios from "axios"
import Navigation from "./Navigation"
import HomeContainer from "./HomeContainer"
import NewsContainer from "./NewsContainer"
import ComicsContainer from "./ComicsContainer"
import "../public/styles/normalize.css"
import "../public/styles/style.css"
import "../public/styles/nav.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = { imageComics: [], isChecked: true }
    this.showTrades = this.showTrades.bind(this)
  }

  componentDidMount() {
    const date = new Date()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const url = `https://wrapapi.com/use/chadbowen248/comics/comics/latest?wrapAPIKey=Z9JmPx0za31dMxIkLQJr88cFyIpeJCfJ&year=${year}&month=${month}`

    Axios(url)
      .then(res => res.data.data)
      .then(final => Object.values(final))
      .then(arr => {
        const imageComics = []
        for (let i = 0; i < arr[0].length; i++) {
          imageComics.push({
            title: arr[0][i],
            image: arr[1][i],
            date: arr[2][i],
            url: `https://imagecomics.com${arr[3][i]}`
          })
        }
        return imageComics
      })
      .then(imageComics => this.setState({ imageComics }))
  }

  showTrades() {
    const currentState = this.state.isChecked
    this.setState({ isChecked: !currentState })
    // console.log(this.state.isChecked)
    // const all = this.state.imageComics
    // const collected = this.state.imageComics.filter(index => index.title.endsWith("TP") || index.title.endsWith("HC"))
    // if (this.state.isChecked) {
    //   this.setState({ imageComics: collected })
    // } else {
    //   this.setState({imageComics: all})
    // }
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
                showTrades={this.showTrades}
                isChecked={this.state.isChecked}
              />}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
