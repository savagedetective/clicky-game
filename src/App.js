import React from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import {Clickers} from "./components/Game"

const App = () => {
  return (
    <div>

      <Nav />
      <Jumbotron />
      
    </div>
  );
}

export default App;
