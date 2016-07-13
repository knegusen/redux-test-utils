import React, { Component } from 'react';

export default class a extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'example text',
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ text: 'new state example text' });
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <button
          className="textChangeButton"
          type="button"
          onClick={this.onClick}
        >
          button
        </button>
      </div>
    );
  }
}
