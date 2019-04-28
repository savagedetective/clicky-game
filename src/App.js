import React, { Component } from "react";
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Container from "./components/Container"
import { Clickers } from "./components/Game"
import Colors from "./data.json";


class App extends Component {

  state = {
    Colors,
    score: 0,
    highScore: 0,
    words: "Click a color to play!",
    beenClicked: []
  };

  //shuffles on page load
  componentDidMount() {
    this.setState({ Colors: this.shuffleTheDeck(Colors) });
  }

  //click handler
  handleClick = id => {
    console.log(id + " has been clicked");
    this.colorIsClicked(id);
    this.toShuffle();
  };

  //handles increment
  handleIncrement = () => {
    let newScore = this.state.score + 1;
  }

  //initiates shuffle function and sets newly shuffled of color divs to "state = Colors"
  toShuffle = () => {
    console.log("Shuffling Color blocks");
    this.setState({ Colors: this.shuffleTheDeck(Colors) });
  };

  //this function does the actual shuffling
  shuffleTheDeck(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  //helper function to clear arrays
  clearClicked = () => {
    console.log("beenClicked array is now cleared.");
    this.setState({ beenClicked: [] });
  }

  //helper function to add clicked Color to state's beenClicked array
  colorIsClicked = (param) => {
    console.log(this.state.beenClicked);
    this.setState({ beenClicked: this.state.beenClicked.concat(param) });
    console.log(this.state.beenClicked);
  }


  render() {
    return (
      <div>

        <Nav
          words={this.state.words}
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Jumbotron />
        <Container>
          {this.state.Colors.map(color => (
            <Clickers
              key={color.id}
              id={color.id}
              name={color.name}
              color={color.color}
              handleClick={this.handleClick}
            />
          ))}
        </Container>

      </div>
    );
  }

}

export default App;
