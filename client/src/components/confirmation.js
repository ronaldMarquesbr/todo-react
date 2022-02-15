import React from 'react';
import thankImg from '../imgs/thank.png'
import '../styles/style_confirmation.css'

function Confirmation(props){

    return(

        <div className='content-confirmation-card hide' id='confirmation'>

            <img src={thankImg} alt='thank'></img>
            <h2 className='text-confirmation'>Usuário cadastrado com sucesso!</h2>
            <button type="button" className="button-return">Voltar</button>

        </div>

    );

}

export default Confirmation;