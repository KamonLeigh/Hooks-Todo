import React, { useState, useEffect } from "react";
import TodoItem from './../TodoItem/TodoItem';
import "./todo.css";

/*using index as an id is incorrect the id sent to
  App.js will depend on what is being filtered.
  Better to add unique id
*/

function Todo({ todos, completeTodo, deleteTodo, editTodo, editTodoDone, cancelTodo }) {
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(
    () => {
      setFilterTodos(todos);
    },
    [todos]
  );

  const searchTodo = e => {
    let upDate = [];
    const item = e.target.value.trim().toLowerCase();

    if (item.length > 0) {
      upDate = [...todos].filter(todo => {
        return todo.text.toLowerCase().includes(item) && !todo.isCompleted;
      });
    } else {
      upDate = [...todos];
    }

    setFilterTodos(upDate);
  };

  return (
    <React.Fragment>
      <input
        className="todo--search"
        type="text"
        placeholder="Search..."
        onChange={searchTodo}
      />
      <ul className="todo--list">
        {filterTodos.map(({ id, text, isCompleted, isEditing }) => 
          <TodoItem 
            key={id}
            id={id}
            text={text}
            isCompleted={isCompleted}
            isEditing={isEditing}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            editTodoDone={editTodoDone}
            cancelTodo={cancelTodo}
        
          />
        )}
      </ul>
    </React.Fragment>
  );
}

export default Todo;
