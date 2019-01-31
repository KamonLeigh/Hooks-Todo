import React, { useState } from "react";
import "./todoform.css";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim().length > 0) {
      addTodo(value.trim());
    }
    setValue("");
  };

  const handleValue = e => {
    const todo = e.target.value;
    setValue(todo);
  };

  return (
    <form className="todo--form" onSubmit={handleSubmit}>
      <input
        className="todo--input"
        type="text"
        value={value}
        onChange={handleValue}
      />
      <button className="btn--form">Add Todo</button>
    </form>
  );
}

export default TodoForm;
