import React, {Component} from "react";

export default class Sum extends Component {
  constructor() {
    super()

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSum = this.handleSum.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSum() {
    let sum = Number(this.state.number1) + Number(this.state.number2);
    this.setState({ sum });
  }
  
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input type="number" name="number1" onChange={this.handleInput} className="inputLine" />
        <input type="number" name="number2" onChange={this.handleInput} className="inputLine" />
        <button onClick={this.handleSum} className="confirmationButton">Check</button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    )
  }
}