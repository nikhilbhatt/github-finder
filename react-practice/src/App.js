import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ParentComponent from "./components/ParentComponent";
import Memo from "./components/Memo";
import RefsDemo from "./components/RefsDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <Hero HeroName='superman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero HeroName='batman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero HeroName='joker' />
      </ErrorBoundary>
    </div>
  );
}

export default App;
