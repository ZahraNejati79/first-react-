import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComop from "./RegComp";
class ParentComponent extends React.Component {
  state = { name: "zahra" };
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "zahra" });
    }, 1000);
  }
  render() {
    return (
      <div>
        parentComponent
        <RegComop name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
