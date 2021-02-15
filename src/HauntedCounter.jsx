import React from "react";

export class HauntedCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.startFrom ?? 0
    };
  }

  add = (amount) => () => {
    this.setState(({ count }) => ({ count: count + amount }));
  };

  poltergeist = () => {
    console.log("Boooooh!");
    this.setState(({ count }) => ({
      count: count + Math.round(Math.random() * 2) - 1
    }));
  };

  componentDidUpdate() {
    if (Math.abs(this.state.count) < 25) {
      setTimeout(this.poltergeist, 500 + Math.random() * 2500);
    }
  }

  render() {
    return (
      <div
        style={{
          background: Math.abs(this.state.count) > 5 ? "#E49273" : "#A8D0DB"
        }}
      >
        <span style={{ padding: "8px" }}>{this.state.count}</span>
        <button
          style={{
            background: Math.abs(this.state.count) > 5 ? "#DE7954" : "#7EB9C9"
          }}
          onClick={this.add(1)}
        >
          Add
        </button>
        <button
          style={{
            background: Math.abs(this.state.count) > 5 ? "#DE7954" : "#7EB9C9"
          }}
          onClick={this.add(-1)}
        >
          Subtract
        </button>
        <button
          style={{
            background: Math.abs(this.state.count) > 5 ? "#DE7954" : "#7EB9C9"
          }}
          onClick={this.add(-this.state.count)}
        >
          Reset
        </button>
      </div>
    );
  }
}
