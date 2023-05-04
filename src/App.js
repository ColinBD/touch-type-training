import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Typer from "./components/Typer";
import Stats from "./components/Stats";
import Exercise from "./components/Exercise";
import Fan from "./images/Fan1.png";

{
  /*<link
  href="https://fonts.googleapis.com/css?family=Muli&display=swap"
  rel="stylesheet"
/>; */
}

class App extends Component {
  state = {
    stage: 1,
    trainingPhase: false,
    settings: {
      selectedTextType: "",
      quantity: ""
    }
  };

  componentDidMount() {
    //position fan and steam
    this.positionFanAndSteam();

    //recalculate positions when window is resized
    window.addEventListener("resize", this.positionFanAndSteam);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <img src={Fan} alt="fan" className="fan" />
        <span className="steam"></span>
        {this.checkStage()}
      </React.Fragment>
    );
  }

  positionFanAndSteam() {
    //calculate then set the fan's size via width prop
    /* NOTES ON CALCULATIONS
    1167 = height of image
    1010 = fans position left of centre on main image
    1010/1167 * innerHeight = num pixels fan should be left of center
    (innerWidth/2) - (1010/1167 * innerHeight) = fan's left position 

    //500/1167 * innerHeight = num pixels steam should be right of center
    (innerWidth/2) + (500/1167 * innerHeight) = fan's left position

    248/1167 * innerHeight = num pixels fan should be from top
    */
    const width = (window.innerHeight / 550) * 200;
    document.getElementsByClassName("fan")[0].style.width = "" + width + "px";

    //calculate then set fan's left position
    const offsetLeft = 80;
    const fanLeft =
      window.innerWidth / 2 - ((1010 - offsetLeft) / 1167) * window.innerHeight;
    document.getElementsByClassName("fan")[0].style.left = "" + fanLeft + "px";

    //calculate then set fan's top position
    const fanTop = (255 / 1167) * window.innerHeight;
    document.getElementsByClassName("fan")[0].style.top = "" + fanTop + "px";

    //calculate then set steam position
    const steamLeft = window.innerWidth / 2 + (770 / 1167) * window.innerHeight;
    document.getElementsByClassName("steam")[0].style.left =
      "" + steamLeft + "px";
  }

  checkStage() {
    if (this.state.stage === 2) {
      return <Typer settings={this.state.settings} />;
    } else if (this.state.stage === 3) {
      return <Stats />;
    } else if (this.state.stage === 4) {
      return <Exercise />;
    } else {
      return <Instructions onSettings={this.handleSettings} />;
    }
  }

  handleSettings = (txt, quant) => {
    this.setState({
      settings: {
        selectedTextType: txt,
        quantity: quant
      },
      stage: 2
    });
  };
}

export default App;
