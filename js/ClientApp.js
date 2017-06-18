import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Navigation from './Navigation'
import Landing from './Landing'
import Search from './Search'
import '../public/normalize.css'
import '../public/style.css'
import '../public/nav.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
