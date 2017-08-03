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
  constructor(props) {
    super(props)
    this.state = { imageComics: [] }
  }

  componentDidMount() {
    const url =
      "https://wrapapi.com/use/chadbowen248/comics/comics/latest?wrapAPIKey=Z9JmPx0za31dMxIkLQJr88cFyIpeJCfJ&year=2017&month=7"

    Axios(url)
      .then(res => res.data.data)
      .then(final => Object.values(final))
      .then(arr => {
        const objects = []
        for (let i = 0; i < arr[0].length; i++) {
          objects.push({
            title: arr[0][i],
            image: arr[1][i],
            date: arr[2][i],
            url: arr[3][i]
          })
        }
        return objects
      })
      .then(final => this.setState({ imageComics: final }))
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Match exactly pattern="/" component={HomeContainer} />
          <Match pattern="/news" component={NewsContainer} />
          <Match pattern="/comics" render={() => <ComicsContainer comics={this.state.imageComics} />} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
