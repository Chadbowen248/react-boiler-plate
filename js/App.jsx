import React from "react"
import { BrowserRouter, Match } from "react-router"
import Navigation from "./Navigation"
import HomeContainer from "./HomeContainer"
import NewsContainer from "./NewsContainer"
import ComicsContainer from "./ComicsContainer"
import "../public/styles/normalize.css"
import "../public/styles/style.css"
import "../public/styles/nav.css"

const App = () =>
  <BrowserRouter>
    <div>
      <Navigation />
      <Match exactly pattern="/" component={HomeContainer} />
      <Match pattern="/news" component={NewsContainer} />
      <Match pattern="/comics" component={ComicsContainer} />
    </div>
  </BrowserRouter>

export default App
