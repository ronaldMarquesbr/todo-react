import React from 'react';
import '../styles/style_app.css';
import api from '../services/api';

// COMPONENTS
import List from './List';

function App(props){

    api.get('/user_session').then( res => {
        if(res){
            console.log(res)
        } else {
            console.log('não tem sessão')
            // let usuario = res;
            // let titulo = document.getElementsByClassName('usuario');
            // titulo.innerHTML = `${usuario}`;
        }
    })

    return(

        <div className='background'>

            <div className='container-app'>

                <header className='header-app'>

                    <h1 className='titulo-app'>To Do</h1>
                    <h2 className='name-user'><i className='bx bx-user'></i>Usuário</h2>
                    
                </header>

                <div className='section-task-form'>



                </div>
                
                <div className='d-flex mx-5 justify-content-between'>

                    <div className='list-section'>
                        
                        <div className='header-list-section'>

                            <h2 className='titulo-tarefas'>Tarefas</h2>

                        </div>
                        
                        <List></List>

                        <button className='button-new-task'>Nova tarefa</button>

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