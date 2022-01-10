import React, { useState } from 'react'


function TodoForm(props){

    const [text, setText] = useState('');

    function addItem(event){

        event.preventDefault();

        if(text){
            // setItems([...items, text]);
            props.onAddItem(text);
            setText('');
        }
        
    }


    function handleChange(event){
    
        let t = event.target.value;
        setText(t);

    }

    return(

        <form className='mb-4 d-flex justify-content-center'>

        <div className="d-flex">
            <input onChange={handleChange} type="text" value={text} className='form-control' ></input>
            <button onClick={addItem} className='btn btn-primary mx-2' >Add</button>
        </div>

        </form>

    );

}

export default TodoForm
