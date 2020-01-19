import React, {Component} from "react";

export default class EvenAndOdd extends Component {
  constructor() {
    super()

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSplit = this.handleSplit.bind(this);
  }

  handleChangeInput(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  handleSplit() {
    let userInputArray = this.state.userInput.split(",");
    let even = [];
    let odd = [];

    userInputArray.forEach(num => Number(num) % 2 === 0 ? even.push(Number(num)) : odd.push(Number(num)))

    this.setState({
      evenArray: even,
      oddArray: odd
    })
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input onChange={this.handleChangeInput} className="inputLine" />
        <button onClick={this.handleSplit} className="confirmationButton">Split</button>
        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}