import React from "react"
import { BrowserRouter, Match } from "react-router"
import Navigation from "./Navigation"
import Landing from "./Landing"
import News from "./News"
import "../public/styles/normalize.css"
import "../public/styles/style.css"
import "../public/styles/nav.css"

const App = () =>
  <BrowserRouter>
    <div>
      <Navigation />
      <Match exactly pattern="/" component={Landing} />
      <Match pattern="/news" component={News} />
    </div>
  </BrowserRouter>

export default App
