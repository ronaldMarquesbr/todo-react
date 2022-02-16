import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUsername } from '../actions/appActions';
import '../styles/style_app.css';

// COMPONENTS
import Loader from './Loader';
import List from './List';
import NewTaskForm from './NewTaskForm';


function App(props){

    const username = useSelector( state => state.user );
    const dispatch = useDispatch();

    useEffect( () => {

        dispatch(requestUsername());

    },[])

    return(

        <div className='background'>

            <Loader/>

            <div className='container-app'>

                <header className='header-app'>

                    <h1 className='titulo-app'>To Do</h1>
                    <h2 className='name-user'><i className='bx bx-user'></i>{username.split(' ')[0]}</h2>
                    
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

            </div>

        </div>
    );

}

export default App;