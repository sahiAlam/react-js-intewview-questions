import React from "react";
import "./App.css";
import PreviousState from "./components/PreviousState";
function App() {
  return (
    <div className="App">
      <h1
        style={{
          color: "red",
          textDecoration: "underline",
        }}
      >
        React Interview Questions
      </h1>
      <PreviousState />
    </div>
  );
}

export default App;
