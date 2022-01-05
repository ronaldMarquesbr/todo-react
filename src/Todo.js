import React, { useState } from 'react';
import './Todo.css'

function Todo(){

    const [text, setText] = useState('');

    function handleChange(event){

        let todo = event.target.value;
        setText(todo);

    }

    return( <div className='container'>
                <h1>Todo</h1>
                
                <form>

                    <input type='text' onChange={handleChange}></input>
                    <button>Add</button>

                </form>

                <ul>

                    <li>{todo}</li>

                </ul>

            </div> );
};

export default Todo