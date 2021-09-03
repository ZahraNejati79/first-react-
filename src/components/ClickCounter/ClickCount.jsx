import React, { Component } from "react";
class ClickCount extends Component {
  state = { count: 0 };
  render() {
    return (
      <div>
        <button onClick={addOne}>Click Add {this.count}</button>
      </div>
    );
  }
}

export default ClickCount;
