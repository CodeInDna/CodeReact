import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    number: ["one", "two", "three", "four", "five", "six"],
    val: 1
  }
  constructor(props){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    this.props.handleClick(this.props.idx)
  }
  render() {
    const {number, locked, val, disabled, rolling} = this.props;
    let classes = `Die fas fa-dice-${number[val - 1]} fa-5x `;
    if(locked) classes += "Die-locked ";
    if(rolling) classes += "Die-rolling";
    return (
      <i
        className={classes}
        onClick={this.handleClick}
        disabled={disabled}
      >
      </i>
    ); 
  }
}

export default Die;
