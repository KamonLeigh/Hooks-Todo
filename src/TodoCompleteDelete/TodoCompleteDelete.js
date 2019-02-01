import React from 'react';
import './todocompele.css';


function TodoCompleteDelete({todoCompleteDelete}){


    return ( <button onClick={todoCompleteDelete} className="btn--delete__complete">
            Clear Complete
        </button>
    )
}


export default TodoCompleteDelete;