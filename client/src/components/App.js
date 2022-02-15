import React from 'react';
import {applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import listReducer from '../reducers/listReducer';
import NewTaskForm from './NewTaskForm';
import '../styles/style_app.css';


// COMPONENTS
import List from './List';

const store = createStore(listReducer, applyMiddleware(thunk));

function App(props){

    return(

        <div className='background'>

            <div className='container-app'>

                <Provider store={store}>

                    <header className='header-app'>

                        <h1 className='titulo-app'>To Do</h1>
                        <h2 className='name-user'><i className='bx bx-user'></i>Usuário</h2>
                        
                    </header>

                    <div className='d-flex justify-content-around'>

                        <div className='d-flex flex-column gap-4'>

                            <NewTaskForm />

                            <div className='list-section'>
                        
                                <h2 className='titulo-tarefas'>Tarefas</h2>
                                <List></List>

                            </div>

                        </div>

                        <div className='counter-card'>
                            
                            <h4>Tarefas realizadas</h4>
                            <h2>8</h2>
                            <div className='circle'></div>

                        </div>

                    </div>

                </Provider>

            </div>

        </div>
    );

}

export default App;