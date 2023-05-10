import React, { Component } from "react";

class Stats extends Component {
  state = {};

  componentDidMount() {
    //console.log(this.props.stats)
    //const stats_b = this.props.map(item => item)
  }

  render() {
    return (
      <React.Fragment>
        <h3>Stats</h3>
        <p>accuracy percentage</p>
        <p>mistakes - graph of letter errors</p>
        <p>Target letters: </p>
        <p>Generate Exercise Button - hidden just now</p>
      </React.Fragment>
    );
  }
}

export default Stats;
