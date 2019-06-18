import React from "react";
import { connect } from "react-redux";
import { actionE } from "./action";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.increment();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <p>{this.props.todo}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

const ravi = state => {
  return { todo: state.counter };
};
const dispatchAction = dispatch => {
  return {
    increment: () => dispatch(actionE)
  };
};
export default connect(
  ravi,
  dispatchAction
)(Test);
