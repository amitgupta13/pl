import React from "react";
import letter from "./letter";

class App extends React.Component {
  state = {
    salary: "",
    profession: "",
    dropdown: "",
    letter: ""
  };

  arr = ["ram", "abdul", "jim"];

  results = () => {
    const arry = this.arr.filter(value => {
      return (
        value.toLowerCase().indexOf(this.state.dropdown.toLowerCase()) >= 0
      );
    });
    return arry.map(ar => {
      return <li>{ar}</li>;
    });
  };

  // profession = () => {};
  render() {
    // console.log();
    return (
      <div>
        <label htmlFor="salary">Salary</label>
        <input
          name="salary"
          type="text"
          value={this.state.salary}
          onChange={e =>
            this.setState({
              salary: e.target.value,
              letter: letter(e.target.value)
            })
          }
        />
        {this.state.letter}
        <div>{letter(this.state.salary)}</div>
        {this.state.salary !== "" ? (
          <>
            <label htmlFor="profession">profession</label>
            <input
              name="profession"
              type="text"
              value={this.state.profession}
              onChange={e => this.setState({ profession: e.target.value })}
            />
          </>
        ) : null}
        <label htmlFor="dropdown">Dropdown</label>
        <input
          name="dropdown"
          type="text"
          value={this.state.dropdown}
          onChange={e => this.setState({ dropdown: e.target.value })}
        />
        <ul>{this.results()}</ul>
      </div>
    );
  }
}

export default App;
