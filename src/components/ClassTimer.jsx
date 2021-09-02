import React, { Component } from "react";
class ClassTimer extends Component {
  state = { count: 0 };

  componentDidMount() {
    console.log("CCCCCCDDDDDMMMMMMM");
    this.myTimer = setInterval(() => {
      console.log("Hi Zahra");
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    console.log("CWUM");
    clearInterval(this.myTimer);
  }
  render() {
    return <div>class interval</div>;
  }
}

export default ClassTimer;
