import React, {Component} from "react";

export default class FilterString extends Component {
  constructor() {
    super()
    
    this.state = {
      unFilteredArray: ["Game", "Code", "Sleep", "Repeat", "Run", "Gain", "Dance", "Create", "Destroy"],
      userInput: "",
      filteredArray: []
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleInput(e) {
    this.setState({ userInput: e.target.value })
  }

  handleFilter() {
    let filterArray = this.state.unFilteredArray.filter(item => item.toLowerCase().includes(this.state.userInput.toLowerCase()))

    this.setState({ filterArray })
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input onChange={this.handleInput} className="inputLine" />
        <button onClick={this.handleFilter} className="confirmationButton">Filter</button>
        <span className="resultsBox filterStringRB">Filtered String: {JSON.stringify(this.state.filterArray)}</span>
      </div>
    )
  }
}