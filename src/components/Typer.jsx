import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Typer.module.css";
import TextBox from "./TextBox";

// TO DO: Replace hard coded quotes with dynamic propulation of quotes from open APIs 
class Typer extends Component {
  state = {
    //iteration: 0, 
    pos: 0,
    quantity: 0,
    quote: "Main text entry box. Will show the quote here.",
    quotes: {
      movieQuotes: ["You're gonna need a bigger boat.", "Here's looking at you, kid.", "Houston, we have a problem.", "There's no crying in baseball!", "You can't handle the truth!"],
      newsQuotes: ["News is what somebody somewhere wants to suppress; all the rest is advertising.","Bad news isn't wine. It doesn't improve with age.","We cannot make good news out of bad practice.","When fake news is repeated, it becomes difficult for the public to discern what's real.","People everywhere confuse what they read in newspapers with news."],
      harryPotterQuotes: ["Yer a wizard Harry.","Ah, music. A magic beyond all we do here!","The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.","It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.","It does not do well to dwell on dreams and forget to live."],
      designQuotes:["Have no fear of perfection - you will never reach it.","Design is intelligence made visible.","Everything is designed. Few things are designed well.","Design adds value faster than it adds costs.","Make it simple, but significant."]
    },
    iteration: 0,
    str: {},
    prevKey: "right"
  };

  componentDidMount() {
    console.log('selected text type',this.props.settings.selectedTextType)
    // set the number of quotes to be typed before we move to the analysis stage
    let quantity; //to assign directly after
    if (this.props.settings.quantity === "Small") {
      quantity = 1;
    } else if (this.props.settings.quantity === "Medium") {
      quantity = 3;
    } else {
      quantity = 5;
    };

    //CALL GETQUOTE
    console.log(`iteration: ${this.state.iteration}`)
    let quote = this.getQuote(this.state.iteration, this.props.settings.selectedTextType)
    //sort the quote
    let str = {
      pre: "",
      curr: quote.substring(0, 1),
      post: quote.substring(1, quote.length)
    };

    //set an event listener for key presses
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
    //update state
    this.setState({ quote, quantity, str });
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.typeWrapper}>
          <span>{this.state.iteration + 1} of {this.state.quantity}</span>
        </div>
        <div className={styles.typeBox}>
          <TextBox
            str={this.state.str}
            quote={this.state.quote}
            prevKey={this.state.prevKey}
          />
          <input
            type="text"
            id="one"
            onKeyPress={this.handleKeyPress}
            className={styles.hidden}
          />
        </div>
      </React.Fragment>
    );
  }

  handleKeyPress = event => {
    //evaluate current pos - was the right key pressed?

    //only consider alpha keys or spacebar
    const code = event.keyCode;
    if (event.key === this.state.quote.charAt(this.state.pos)) {
      console.log("Correct!");
      const newPos = this.state.pos + 1;
      let str = {
        pre: this.state.quote.substring(0, newPos),
        curr: this.state.quote.substring(newPos, newPos + 1),
        post: this.state.quote.substring(newPos + 1, this.state.quote.length)
      };
      this.setState({
        str,
        pos: newPos,
        prevKey: "right"
      });
      //check that 'newPos' is not at the end of the string
      //if so run an onEnd function
      if (this.state.quote.length - newPos === 0) this.quoteComplete();
    } else if (code === 16 || code === 20) {
      //shift or caps so ignore
    } else {
      console.log(`wrong - expecting: ${this.state.quote.charAt(this.state.pos)} - assuming I'm here: ${this.state.pos}`);
      //store the wrong keypress
      this.setState({ prevKey: "wrong" });
    }
  };

  quoteComplete = () => {
    let iteration = this.state.iteration + 1;
    console.log("quote complete")
    //check if all iterations are done
      //if so we move to the new stage
    if (iteration >= this.state.quantity) {
      this.props.onQuotesComplete("scores object goes here")
    } else {
      //setup new quote by incrementing 'increment', choosing a new quote and re-rendering the component
      let quote = this.getQuote(iteration, this.props.settings.selectedTextType)
      console.log(`just fetched quote: ${quote}`)
      //sort the quote
      let str = {
        pre: "",
        curr: quote.substring(0, 1),
        post: quote.substring(1, quote.length)
      };
      this.setState({
        quote,
        str,
        pos: 0
      })
    }
    
  }

  getQuote = (iteration, selectedTxt) => {
    let quote = "";
    //get a quote - then save it so the state as 'quote'
    if (selectedTxt === 'Design') {
      quote = this.state.quotes.designQuotes[iteration];
    } else if (selectedTxt === 'Movies') {
      quote = this.state.quotes.movieQuotes[iteration];
    } else if (selectedTxt === 'News') {
      quote = this.state.quotes.newsQuotes[iteration];
    } else if (selectedTxt === 'Harry Potter') {
      quote = this.state.quotes.harryPotterQuotes[iteration];
    };
    console.log(`returning quote: ${quote}`)
    return quote;
  }
}

export default Typer;
