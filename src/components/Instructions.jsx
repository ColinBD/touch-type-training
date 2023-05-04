import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Instructions.module.css";

class Instructions extends Component {
  state = {
    selectedTextType: "",
    quantity: ""
  };

  componentDidUpdate() {
    if (this.state.selectedTextType !== "" && this.state.quantity !== "") {
      this.props.onSettings(this.state.selectedTextType, this.state.quantity);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container className={styles.myContainer}>
          <Row className={`justify-content-sm-center ${styles.myRow}`}>
          <Col xs="auto">
              <p>What do you want to type?</p>
            </Col>
          </Row>
          <Row className={`justify-content-sm-center ${styles.myRow}`}>
            <Col xs="auto" className={styles.myColumn}>
              <Button
                id="Design"
                className={this.getBtnTxtTypeClassName("Design")}
                onClick={this.setBtnClassName}
              >
                Design
              </Button>
              <Button
                id="Movies"
                className={this.getBtnTxtTypeClassName("Movies")}
                onClick={this.setBtnClassName}
              >
                Movie
              </Button>
              <Button
                id="News"
                className={this.getBtnTxtTypeClassName("News")}
                onClick={this.setBtnClassName}
              >
                News
              </Button>
              <Button
                id="Harry Potter"
                className={this.getBtnTxtTypeClassName("Harry Potter")}
                onClick={this.setBtnClassName}
              >
                Harry Potter
              </Button>
            </Col>
          </Row>
          <Row
            className={`justify-content-sm-center ${styles.myRow} ${
              styles.topGap
            }`}
          >
            <Col xs="auto">
              <p>How much typing?</p>
            </Col>
          </Row>
          <Row className={`justify-content-sm-center ${styles.myRow}`}>
            <Col xs="auto" className={styles.myColumn}>
              <Button
                id="Small"
                className={this.getBtnQuantClassName("Small")}
                onClick={this.quantBtnClicked}
              >
                Small
              </Button>
              <Button
                id="Medium"
                className={this.getBtnQuantClassName("Medium")}
                onClick={this.quantBtnClicked}
              >
                Medium
              </Button>
              <Button
                id="Large"
                className={this.getBtnQuantClassName("Large")}
                onClick={this.quantBtnClicked}
              >
                Large
              </Button>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }

  getBtnTxtTypeClassName = btn => {
    let cName = "btn btn-success m-2 ";
    if (this.state.selectedTextType === btn) {
      cName += "disabled";
    }
    return cName;
  };

  setBtnClassName = e => {
    if (e.target.id !== this.state.selectedTextType) {
      //we are selecting the button
      this.setState({
        selectedTextType: e.target.id
      });
    } else {
      //we need to unselect the button
      this.setState({
        selectedTextType: ""
      });
    }
  };
  getBtnQuantClassName = btn => {
    let cName = "btn btn-success m-2 ";
    if (this.state.quantity === btn) {
      cName += "disabled";
    }
    return cName;
  };

  quantBtnClicked = e => {
    if (e.target.id !== this.state.quantity) {
      //we are selecting the button
      this.setState({
        quantity: e.target.id
      });
    } else {
      //we need to unselect the button
      this.setState({
        quantity: ""
      });
    }
  };
}

export default Instructions;
