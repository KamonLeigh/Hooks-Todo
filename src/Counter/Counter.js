import React from "react";
import "./counter.css";

function Counter({ counter }) {

  return <h3 className="counter--total">Outstanding Todos: {counter}</h3>;

}

export default Counter;
