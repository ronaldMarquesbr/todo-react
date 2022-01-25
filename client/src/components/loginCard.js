import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import validateLogin from '../scripts/validateFormLogin';
import '../scripts/validateFormRegistry'
import '../styles/style_loginCard.css';

function LoginCard(){

    const state = useSelector((state) => {return state} )

    function nameClass(text){
        return `${text}-login-card`
    }

    useEffect(()=>{

        var loginSection = document.getElementById('login');

        if(state === 'show_login'){
            loginSection.classList.remove('hide');
        } else {
            loginSection.classList.add('hide');
        }
    }, [state])

   

    document.addEventListener('DOMContentLoaded', ( event ) => {

        let loginForm = document.querySelector('#login-form');
   
        loginForm.addEventListener('submit', ( event ) => {

            event.preventDefault();

            validateLogin(event.target);

        })

    })
    

    return( <div className={`${nameClass('content')} hide`} id='login'>

                <h2 className={nameClass('titulo')}>Login</h2>

                <form id='login-form' className={nameClass('form')} action='/user/login' method='POST'>

                    <input className={nameClass('field')} name='email' placeholder='Email' required />
                    <span></span>
                    
                    <input className={nameClass('field')} type='password' name='password' placeholder='Senha' required />
                    <span></span>
                    
                    <button className={nameClass('botao')}>Entrar</button>

                    <span className='span-error'></span>

                </form>

                <div className='footer-login-card' >Ainda não tem uma conta?<a className={nameClass('link')}>Cadastre-se</a></div>

            </div>)

}


export default LoginCard;