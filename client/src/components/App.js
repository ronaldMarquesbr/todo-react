import React from 'react';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import '../styles/style_app.css';
import submitTask from '../scripts/submitTask';

// COMPONENTS
import List from './List';

function App(props){
    

    const store = createStore()

    return(

        <div className='background'>

            <div className='container-app'>

                <header className='header-app'>

                    <h1 className='titulo-app'>To Do</h1>
                    <h2 className='name-user'><i className='bx bx-user'></i>Usuário</h2>
                    
                </header>

                <div className='d-flex justify-content-around'>

                    <div className='d-flex flex-column gap-4'>

                        <div className='section-task-form'>

                            <form className='form-new-task' onSubmit={event => submitTask(event)} >

                                <h3>Nova tarefa</h3>

                                <input placeholder='Título' name='title' required />
                                <textarea placeholder='Descrição' name='desc' required></textarea>

                                <button className='button-new-task'>Nova tarefa</button>

                            </form>

                        </div>

                        <div className='list-section'>
                            
                            <div className='header-list-section'>

                                <h2 className='titulo-tarefas'>Tarefas</h2>

                            </div>
                            
                            <List></List>

                        </div>

                    </div>

                    <div className='counter-card'>
                        
                        <h4>Tarefas realizadas</h4>
                        <h2>8</h2>
                        <div className='circle'></div>

                    </div>

                </div>

               

            </div>

        </div>
    );

}

export default App;