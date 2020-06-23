import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import Memo from "./Memo";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello Parent",
    };
    console.log("Parent Constructor");
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ msg: "hello Parent" });
    }, 2000);
  }
  render() {
    console.log("PARENT@@@@@@@@@@@");
    return (
      <div>
        Parent Component
        {/* <Memo msg={this.state.msg} /> */}
      </div>
    );
  }
}

export default ParentComponent;
