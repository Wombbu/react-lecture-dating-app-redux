import * as React from "react";

const CountDisplay = props => {
  return (
    <div style={{ backgroundColor: props.count % 2 === 0 ? "red" : "blue" }}>
      {props.count}
    </div>
  );
};

export const AppMadeWithHooks = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}> decrement </button>
      <CountDisplay count={count} />
      <button onClick={() => setCount(count + 1)}> increment </button>
    </div>
  );
};

class AppMadeWithClass extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          decrement
        </button>
        <CountDisplay count={this.state.count} />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increment
        </button>
      </div>
    );
  }
}
