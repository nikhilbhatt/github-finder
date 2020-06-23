import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ParentComponent from "./components/ParentComponent";
import Memo from "./components/Memo";
import RefsDemo from "./components/RefsDemo";

function App() {
  return (
    <div className='App'>
      <RefsDemo />
    </div>
  );
}

export default App;
