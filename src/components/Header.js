import React from 'react';
import taskImg from '../imgs/task-img.png'

function Header(){

    return(

        <div className='header'>

            <div className='text-header'>
                <h1 className='titulo'>To Do</h1>
                <h2 className='subtitulo'>Tenha total controle sobre suas tarefas</h2>
            </div>

            <div>
                <img className='task-img' src={taskImg}></img>
            </div>
            
            
           

        </div>

    );

}

export default Header;
