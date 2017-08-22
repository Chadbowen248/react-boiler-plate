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

  render() {
    return (
      <div className="wrapper">
        <h1>BTC: {this.state.BTC}</h1>
        <h1>ETH: {this.state.ETH}</h1>
        <h1>XRP: {this.state.XRP}</h1>
      </div>
    );
  }
}

export default Coins;
