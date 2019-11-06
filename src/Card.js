import React, { Component } from "react";

export class Card extends Component {
  label;
  uniqueId;
  key;
  constructor(props) {
    super(props);
    this.label = props.label;
    this.key = props.key;
  }

  action() {
    console.log("attacked");
  }

  render() {
    return (
      <button key={this.key} onClick={() => this.action()}>
        {this.label}
      </button>
    );
  }
}

export default Card;