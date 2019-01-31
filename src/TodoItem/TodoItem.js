import React from 'react';
import './todoitem.css';



function TodoItem({id, text, isCompleted, isEditing, editTodo, editTodoDone, deleteTodo, completeTodo}){


    return (
         <li className="todo--item">
          {!isEditing && 
            <span
            style={{
              textDecoration: isCompleted ? "line-through" : ""
            }}
            onDoubleClick={()=> editTodo(id)}
            >
            {text}
            </span>
          }

          {isEditing &&  
            <input 
              className="todo--item__edit" 
              type="text" 
              autoFocus
              defaultValue={text}
              onBlur={(e) => editTodoDone(e , id)}
              /> }
      
            <div className="todo--buttons">
              <button
                className="btn--md btn--md__delete"
                onClick={() => deleteTodo(id)}
              >
                Delete
              </button>
              <button
                className="btn--md btn--md__complete"
                onClick={() => completeTodo(id)}
              >
                Complete
              </button>
            </div>
          </li>

    )
}


export default TodoItem;