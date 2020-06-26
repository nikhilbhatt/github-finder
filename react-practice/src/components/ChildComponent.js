import React, { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello Child",
    };
    console.log("Child Constructor");
  }

  static getDerivedStateFromProps(state, props) {
    console.log("Child getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Child Componentdidmount");
  }
  render() {
    return <div>Child Component</div>;
  }
}

export default ChildComponent;
