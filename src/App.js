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

    if (this.state.beenClicked.indexOf(id) === -1) {

      console.log(id + " has been clicked");
      this.colorIsClicked(id);
      this.handleScoreIncrement();

    } else {

      this.handleGameReset();

    }

  };

  //handles increment
  handleScoreIncrement = () => {

    let newScore = this.state.score + 1;

    console.log("Point scored. New score is " + newScore);

    this.setState({
      score: newScore,
      words: "Nice. Keep going!"
    });

    if (newScore >= this.state.highScore) {

      this.setState({ highScore: newScore });

    } else if (newScore === 12) {

      this.setState({ words: "You won!" });

    }

    this.toShuffle();

  }

  handleGameReset = () => {

    console.log("Game over. Game is resetting.");
    this.clearBoard();
    this.toShuffle();

  }

  //initiates shuffle function and sets newly shuffled of color divs to "state = Colors"
  toShuffle = () => {

    console.log("Shuffling Color blocks.");
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


  //helper function to reset game state
  clearBoard = () => {

    console.log("Game is now reset.");
    this.setState({
      beenClicked: [],
      words: "Click a color to play!",
      score: 0
    });

  }

  //helper function to add clicked Color to state's beenClicked array
  colorIsClicked = id => {

    this.setState({ beenClicked: this.state.beenClicked.concat(id) });
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
