import React from 'react';
import '../styles/style_registerCard.css'

function registerCard(){

    function nameClass(text){
        return `${text}-register-card`
    }

    return( <div className='content-register-card'>

                <h2 className={nameClass('titulo')}>Login</h2>

                <form className={nameClass('form')}>

                    <input className={nameClass('field')} name='email' placeholder='Email'  />
                    <input className={nameClass('field')} name='senha' placeholder='Senha'/>
                    
                    <button className={nameClass('botao')}>Entrar</button>

                </form>

                <div>Ainda não tem uma conta?<a className={nameClass('link')}>Cadastre-se</a></div>

            </div>)

}


export default registerCard;