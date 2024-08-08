import React, { Component } from "react";
import Navbar from "./Navbar";
import "./App.css";
import Counter from "./Counter.js";
import Todo from "./Todo.js";

const App = () => {
  return (
    <>
      <h1 style={{ color: "lightgrey", alignText: "center" }}>
        Expeense Tracker pro
      </h1>
      <Navbar />
      <Counter />
      <Todo />
    </>
  );
};
export default App;
