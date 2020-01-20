import React, {Component} from "react";

export default class FilterObject extends Component {
  constructor() {
    super()

    this.state = {
      unFilteredArray: [
        { name: "Gio", hobbie: "Coding" },
        { name: "Sam", sport: "Running"},
        { name: "Alex", favFood: "All" }
      ],
      userInput: "",
      filterArray: []
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleInput(e) {
    this.setState({ userInput: e.target.value })
  }

  handleFilter() {
    const filtered = this.state.unFilteredArray.filter((item) => {
      for (let key in item) {
        if (key.includes(this.state.userInput)) {
          return true;
        }
      }
    })

    this.setState({ filterArray: filtered })
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input onChange={this.handleInput} className="inputLine" />
        <button onClick={this.handleFilter} className="confirmationButton">Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filterArray)}</span>
    </div>
    )
  }
}