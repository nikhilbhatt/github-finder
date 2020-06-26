import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
    // this.inputRef.current.focus;
  }
  clickHandler = () => {
    console.log(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <input type='text' />
        <button onClick={this.clickHandler}>Submit</button>
      </div>
    );
  }
}

export default RefsDemo;
