import React from 'react';
import { useNavigate } from 'react-router';
import validateLogin from '../scripts/validateFormLogin';
import '../styles/style_modal.css';
import '../styles/style_loginCard.css';

function ModalLogin(props){

    let navigate = useNavigate();

    function nameClass(text){
        return `${text}-login-card`
    }   

    async function formSubmit( eve ) {

        eve.preventDefault();

        let success = false; 
        await validateLogin(eve.target).then( res => success = res);

        if(success){
            navigate('/app', { replace: true });
        }

    };

    function removeModal(event){

        let modal = document.getElementById('modal');
        let closeIcon = document.getElementById('close-icon');

        if( event.target === modal || event.target === closeIcon ){
            modal.classList.remove('showModal');
        }

    }

    return(

        <div id='modal' className='Modal' onClick={ event => { removeModal(event) }}>

            <div className='cardModal'>

                <i className='bx bx-x close-icon' onClick={ event => { removeModal(event) }} id='close-icon'></i>

                <div className={nameClass('content')}>

                <h2 className={nameClass('titulo')}>Login</h2>

                <form id='login-form' className={nameClass('form')} onSubmit={ event => formSubmit(event) } >

                    <input className={nameClass('field')} name='email' placeholder='Email' required />
                    <span></span>
                    
                    <input className={nameClass('field')} type='password' name='password' placeholder='Senha' required />
                    <span></span>
                    
                    <button className={nameClass('botao')}>Entrar</button>

                    <span className='span-error'></span>

                </form>

                <div className='footer-login-card' >Ainda não tem uma conta?<i className={nameClass('link')}>Cadastre-se</i></div>

            </div>

            </div>

        </div>

    )

}

export default ModalLogin;