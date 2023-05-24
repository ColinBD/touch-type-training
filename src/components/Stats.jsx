import React, { Component } from "react";
import styles from "./Stats.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NoErrors from "./NoErrors";

class Stats extends Component {
  state = {
    sortedStats: [],
    errorFound: false
  };

  componentDidMount() {
    //pop out characters that have not been attempted at all.
    const characters = this.props.stats;
    let sortedStats = [];
    let errorFound = false;
    for (var letter in characters) {
      //use characters[letter][1] below if you only want to keep chracters where mistakes occured
        if (characters[letter][0] !== 0) {
          let errorRate = Math.round(characters[letter][1] / (characters[letter][0] + characters[letter][1]) * 100)
          let newVal = characters[letter];
          newVal.push(errorRate)
          sortedStats.push([letter, newVal]);
        }  
        if (characters[letter][1] !== 0) {
          errorFound = true;
        }
    }
    //order the letters from most mistakes to least
    sortedStats.sort(function(a, b) {
        return b[1][2] - a[1][2];
    });  
    // console.log('here comes the sorted stats...')
    // console.log(sortedStats)
    console.log('error found? ', errorFound)
    this.setState({
      sortedStats,
      errorFound
    })
  }

  render() {
    const listItems = this.state.sortedStats.map((stat) => <li><span style={{fontWeight: "700", fontSize: "xx-large", marginRight: "20px"}}>{stat[0]}</span> {stat[1][2]}% error rate - {stat[1][0]} right, {stat[1][1]} wrong</li>);
    //let message = <div>Hello world</div>
    return (
      <React.Fragment>
        <Container className={styles.myContainer}>
        <Row className={`justify-content-sm-center ${styles.myRow}`}>
          <Col xs="auto">
            <h3>Results</h3>
          </Col>
        </Row>
          <div className={styles.resultsBox}>
            {!this.state.errorFound ? <NoErrors /> : listItems}
          </div> 
      </ Container>
      </React.Fragment>
    );
  }
}

export default Stats;
