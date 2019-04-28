import React from "react";
import "./Nav.css";

const Nav = props => (

    <nav className="navbar">

        <ul>

            <li className="brand" href="/">Clicky Game</li>
            <li>{props.words}</li>
            <li>Score: {props.score} | High Score: {props.highScore}</li>

        </ul>
        
    </nav>

);

export default Nav