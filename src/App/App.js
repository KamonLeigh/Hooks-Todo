import React, { useState, useEffect } from "react";
import generateId from "./../lib/generateId";
import Todo from "./../Todo/Todo";
import TodoForm from "./../TodoForm/TodoForm";
import Counter from "./../Counter/Counter";
import TodoCompleteDelete from "./../TodoCompleteDelete/TodoCompleteDelete";
import TodoCheckAll from "./../TodoCheckAll/TodoCheckAll";
import "./app.css";

function App() {
  const [todos, setTodos] = useState([
    // {
    //   id: "01234",
    //   text: "Learn about React",
    //   isCompleted: false
    // },
    // {
    //   id: "56789",
    //   text: "Meet Friend for lunch",
    //   isCompleted: false
    // },
    // {
    //   id: "10111",
    //   text: "Build really cool todo app",
    //   isCompleted: true
    // }
  ]);

  const [count, setCount] = useState(0);
  const [beforeEdit, setBeforeEdit ] = useState('');

  const addTodo = value => {
    const newTodo = [
      ...todos,
      { id: generateId(5), text: value, isCompleted: false, isEditing: false }
    ];

    setTodos(newTodo);
  };

  const completeTodo = id => {
    todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });

    setTodos(todos);
    counter();
  };

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    counter();
    setTodos(newTodos);
  };

  const editTodo = id => {
    todos.map(todo => {

      if(todo.id === id){
        todo.isEditing = !todo.isEditing
        setBeforeEdit(todo.text)
      }
      return todo
    })

    setTodos(todos);
  }

  const counter = () => {
    const count = todos.reduce((total, acc) => {
      if (!acc.isCompleted) {
        total++;
      }

      return total;
    }, 0);
    setCount(count);
  };

   useEffect(
     () => {
       counter();
       return () => {};
     },
     [todos]
   );

  const editTodoDone = (e, id) => {
    const text = e.target.value.trim()

    if(text.length === 0){

      cancelTodo(e, id);

    } else {
      const newTodos = todos.map(todo => {
        if(todo.id === id){
          todo.isEditing = !todo.isEditing;
          todo.text = text
        }
        return todo;
        
      });
      
      setTodos(newTodos);
    }
  }

  const cancelTodo = (e, id) => {
    
    const resetTodo = todos.map(todo => {
      if(todo.id === id){
        todo.text = beforeEdit; 
        todo.isEditing = !todo.isEditing
        e.target.value = beforeEdit;
  
      }
      return todo;
    });

    setTodos(resetTodo);

  }

  const todoCompleteCount = () =>{

    return todos.filter(todo => todo.isCompleted).length;

  }

  const todoCompleteDelete = () => {
    const upDateTodos = todos.filter(todo => !todo.isCompleted);
    setTodos(upDateTodos);
  }

  const todoCheckAll = (state) => {

    const cheakAllTodo = todos.map(todo => ({ ...todo,  ...todo.isCompleted = state}));
    setTodos(cheakAllTodo);
  }

 

  return (
    <div className="todo--app">
      <h1 className="todo--title">A Todo with Hooks. </h1>
      <Counter counter={count} />
      <Todo 
        todos={todos} 
        completeTodo={completeTodo} 
        deleteTodo={deleteTodo} 
        editTodo={editTodo} 
        editTodoDone={editTodoDone}
        cancelTodo={cancelTodo}
        />
      { todos.length > 0 && <TodoCheckAll todoCheckAll={todoCheckAll }/>}
         <TodoForm addTodo={addTodo} />
      { todoCompleteCount() > 0 && 
         <TodoCompleteDelete  todoCompleteDelete={todoCompleteDelete}/>}
    </div>
  );
}

export default App;
