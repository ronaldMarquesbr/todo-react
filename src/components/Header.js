import React from 'react';


function Header(){

    return(

        <div className='header'>

            <h1 className='titulo'>To Do</h1>

            <button className='button-add'>Nova tarefa +</button>

            <div className='div-button'>
                <button className='button-add-teste'>Nova tarefa</button> 
                <div className='add-icon'></div>
            </div>

        </div>

    );

}

export default Header;
