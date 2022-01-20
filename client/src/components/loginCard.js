import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
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
    })

    return( <div className={`${nameClass('content')} hide`} id='login'>

                <h2 className={nameClass('titulo')}>Login</h2>

                <form className={nameClass('form')}>

                    <input className={nameClass('field')} name='email' placeholder='Email'  />
                    <input className={nameClass('field')} name='senha' placeholder='Senha'/>
                    
                    <button className={nameClass('botao')}>Entrar</button>

                </form>

                <div className='footer-login-card' >Ainda não tem uma conta?<a className={nameClass('link')}>Cadastre-se</a></div>

            </div>)

}


export default LoginCard;