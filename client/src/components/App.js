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
                

                <div className='list-section'>
                    
                    <div className='header-list-section'>

                        <h2 className='titulo-tarefas'>Tarefas</h2>
                        <h2 className='texto-nova-tarefa'>Nova tarefa +</h2>

                    </div>
                    
                    <List></List>

                </div>



            </div>

            <div className='modal-tarefa'>

                <div className='card-modal-tarefa'>

                    <h2>Nova tarefa</h2>

                </div>

            </div>

        </div>
    );

}

export default App;