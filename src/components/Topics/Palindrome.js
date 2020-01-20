import React, {Component} from "react";

export default class Palindrome extends Component {
  constructor() {
    super()

    this.state = {
      userInput: "",
      palindrome: ""
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleInput(e) {
    this.setState({ userInput: e.target.value })
  }

  handleFilter() {
    let palindrome = this.state.userInput.toLowerCase() === this.state.userInput.toLowerCase().split("").reverse().join("") ? true : false;

    this.setState({ palindrome });
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4>Palindrome</h4>
        <input onChange={this.handleInput} className="inputLine" />
        <button onClick={this.handleFilter} className="confirmationButton">Check</button>
        <span className="resultsBox">Palindrome: {this.state.palindrome.toString().toUpperCase()}</span>
      </div>
    )
  }
}