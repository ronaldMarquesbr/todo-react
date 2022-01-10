import React from 'react';
import '../styles/style_hero.css'
import taskImg from '../imgs/task-img.png'
import runImg from '../imgs/run.png'
import studyImg from '../imgs/study.png'

function Header(){

    return(

        <div className='header'>

            <div className='text-header'>
                <h1 className='titulo'>To Do</h1>
                <h2 className='subtitulo'>Tenha total controle sobre suas tarefas</h2>
                <button className='botao-iniciar'>Iniciar</button>
            </div>

            <div className='grid-img'>
                <img className='header-img' alt='illustration-task' src={taskImg}></img>
                <img className='header-img' alt='run' src={runImg}></img>
                <img className='header-img' alt='study' src={studyImg}></img>
            </div>

        </div>

    );

}

export default Header;
