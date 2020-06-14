import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <User />
      </div>
    );
  }
}

export default App;
