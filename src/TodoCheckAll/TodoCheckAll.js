import React, { useState } from 'react';
import './todocheckall.css'


function TodoCheckAll({todoCheckAll}){

    const [check, setCheck] = useState(false);

    const handleCheckAll = (e) => {

        setCheck(e.target.checked);
        todoCheckAll(e.target.checked)
    }
 

    return(
    <div className="todo--checkall">
        <label  htmlFor="check">
        {!check? 'Check All' : 'UnCheck All'}
        <input 
        
        name="check" 
        type="checkbox" 
        value={check} 
        onClick = {(e) => handleCheckAll(e)}
        />
        </label>
    </div>
    )
}

export default TodoCheckAll;