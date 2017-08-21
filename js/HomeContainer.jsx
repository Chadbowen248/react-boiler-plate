import React from "react"
import Axios from "axios"
import Home from "./Home"


class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { quote: {} }
  }

  componentDidMount() {
    const URL = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous"
    Axios.get(URL, {
      headers: {
        "X-Mashape-Key": "VX2byySRsJmshOGnZtVwLVW1ymWwp143BhvjsnEhKJnBQDcrrb"
      }
    }).then(res => {
      this.setState({ quote: res.data })
    })
  }
  render() {
    return <Home quote={this.state.quote.quote} author={this.state.quote.author} />
  }
}

export default HomeContainer
