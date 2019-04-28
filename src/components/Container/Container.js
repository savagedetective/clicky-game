import React from "react";
import "./Container.css";

const Container = props => <div className="container" id="the-main-game">{props.children}</div>;

export default Container;