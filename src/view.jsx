import * as React from "react";
import PropTypes from "prop-types";

export class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <Counter
          increment={() => this.increment()}
          count={this.state.count}
        />
      </div>
    );
  }
}

const Counter = props => (
  <div>
    <div>{props.count}</div>
    <button onClick={props.increment}>increment</button>
  </div>
);
Counter.propTypes = { count: PropTypes.number, increment: PropTypes.func };
