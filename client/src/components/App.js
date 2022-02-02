import React from 'react';
import '../styles/style_app.css';
// import api from '../services/api';

function App(props){

    // api.get('/user_session').then( res => {
    //     if(res !== 'error'){
    //         console.log('deu erro!')
    //     } else {
    //         let usuario = res;
    //         let titulo = document.getElementsByClassName('usuario');
    //         titulo.innerHTML = `${usuario}`;
    //     }
    // })

    return(

        <div className='container-app'>

            <h1 className='usuario'>Usuário</h1>

        </div>

    );

}

export default App;