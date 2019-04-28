import React from "react";
import "./Clickers.css";

export const Clickers = props => (

    <div className="clickers color-holder" onClick={() => props.handleClick(props.id)}>
        <div className="color-box" id={props.name + "-" + props.id} name={props.name}></div>
    </div>

);
