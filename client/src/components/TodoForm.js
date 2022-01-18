import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/listAction';


function TodoForm(props){

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    function addItemEvent(event){

        event.preventDefault();

        if(text){
            dispatch(addItem(text));
            setText('');
            props.onHideModal();
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
            <button onClick={addItemEvent} className='btn btn-primary mx-2' >Add</button>
        </div>

        </form>

    );

}

export default TodoForm
