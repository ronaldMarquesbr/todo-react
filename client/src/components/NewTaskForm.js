import React  from 'react';
import { useDispatch } from 'react-redux';
import { requestList } from '../actions/appActions';
import submitTask from '../scripts/submitTask';

import '../styles/style_newtaskform.css'

function NewTaskForm(props){

    const dispatch = useDispatch();

    function onSubmitTask(event){

        submitTask(event);
        dispatch(requestList());

    }

    return(

        <div className='section-task-form'>

            <form className='form-new-task' onSubmit={ event => onSubmitTask(event) }>

                <h3>Nova tarefa</h3>

                <input placeholder='Título' name='title' required />
                <textarea placeholder='Descrição' name='desc' required></textarea>

                <button className='button-new-task'>Nova tarefa</button>

            </form>

        </div>

    )

}

export default NewTaskForm;