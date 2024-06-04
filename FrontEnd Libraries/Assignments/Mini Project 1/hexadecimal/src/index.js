// import React from "react"
import ReactDOM from "react-dom"

import React, { Component } from 'react';
import getRandomHexColor from "./color generator";

class RandomColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: getRandomHexColor(),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ color: getRandomHexColor() });
  }

  render() {
    const { color } = this.state;
    return (
      <div style={{ backgroundColor: color, width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button onClick={this.handleClick}>Change Color</button>
      </div>
    );
  }
}




const rootElement= document.getElementById("root")
ReactDOM.render( <RandomColorBox/>, rootElement)