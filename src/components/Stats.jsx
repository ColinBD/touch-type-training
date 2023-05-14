import React, { Component } from "react";
import styles from "./Stats.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Stats extends Component {
  state = {
    sortedStats: []
  };

  componentDidMount() {
    //console.log('props: ', this.props.stats)
    //pop out characters that have not been attempted at all.
    const characters = this.props.stats;
    let sortedStats = [];
    for (var letter in characters) {
        if (characters[letter][1] !== 0) {
          let errorRate = Math.round(characters[letter][1] / (characters[letter][0] + characters[letter][1]) * 100)
          let newVal = characters[letter];
          newVal.push(errorRate)
          sortedStats.push([letter, newVal]);
        }  
    }

    sortedStats.sort(function(a, b) {
        return b[1][2] - a[1][2];
    });  
    //console.log('here comes the sorted stats...')
    //console.log(sortedStats)
    this.setState({
      sortedStats
    })
  }

  render() {
    const listItems = this.state.sortedStats.map((stat) => <li><span style={{fontWeight: "700", fontSize: "xx-large", marginRight: "20px"}}>{stat[0]}</span> {stat[1][2]}% error rate - {stat[1][0]} right, {stat[1][1]} wrong</li>);
    return (
      <React.Fragment>
        <Container className={styles.myContainer}>
        <Row className={`justify-content-sm-center ${styles.myRow}`}>
          <Col xs="auto">
            <h3>Results</h3>
          </Col>
        </Row>
          <div className={styles.resultsBox}>
            {listItems }
          </div>
        {/* <p>accuracy percentage</p>
        <p>mistakes - graph of letter errors</p>
        <p>Target letters: </p>
        <p>Generate Exercise Button - hidden just now</p> */}
      </ Container>
      </React.Fragment>
    );
  }
}

export default Stats;
