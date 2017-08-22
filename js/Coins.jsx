import React from "react";
import Axios from "axios";

class Coins extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    const coins = ["xrp", "eth", "btc"];
    coins.map(coin =>
      Axios(`https://api.cryptonator.com/api/ticker/${coin}-usd`).then(res =>
        this.setState({ [res.data.ticker.base]: res.data.ticker.price })
      )
    );
  }
  // return arr.push({ [res.data.ticker.base]: res.data.ticker.price });

  render() {
    return (
      <div className="wrapper">
        {/* {this.state.map(coin => {
        console.log(coin)
      })} */}
        Coins
      </div>
    );
  }
}

export default Coins;
