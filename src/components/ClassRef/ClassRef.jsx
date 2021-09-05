import React, { createRef, useState } from "react";
class ClassRef extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default ClassRef;
