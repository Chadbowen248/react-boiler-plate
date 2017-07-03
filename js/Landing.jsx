import React from 'react'
import Axios from 'axios'
import '../public/styles/landing.css'

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.state = { quote: {} }
  }

  componentDidMount () {
    const URL =
      'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous'
    Axios.get(URL, {
      headers: {
        'X-Mashape-Key': 'VX2byySRsJmshOGnZtVwLVW1ymWwp143BhvjsnEhKJnBQDcrrb'
      }
    }).then(res => {
      this.setState({ quote: res.data })
    })
  }
  render () {
    return (
      <div
        className="landing-page page-container"
        style={{ backgroundImage: `url(public/img/landing-page/1.jpg)` }}
      >
        <div className="quote-container">
          <h4>
            {this.state.quote.quote}
          </h4>
          <span className="byline">
            {this.state.quote.author}
          </span>
        </div>
      </div>
    )
  }
}

export default Landing
