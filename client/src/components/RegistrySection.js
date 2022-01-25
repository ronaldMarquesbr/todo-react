import React from 'react';
import interfaceImg from '../imgs/interface.png';
import customValidate, {activeInput, addClassLabel} from '../scripts/validateFormRegistry';

import '../styles/style_RegistrySection.css'

function RegistrySection(props){ 
    
    document.addEventListener('DOMContentLoaded', event => {

        const fields = document.querySelector('.register-form').querySelectorAll("[required]");
        
        for( let field of fields ) {

            field.addEventListener("invalid", event => {
                customValidate(event.target);
                event.preventDefault();
            });
    
            field.addEventListener("blur", event => {
                activeInput(event);
                customValidate(event.target);
            });
    
            field.addEventListener("focus", event => {
                addClassLabel(event);
            });
    
        }
        
        document.querySelector('.register-form').addEventListener('submit', async eve => {
           
            eve.preventDefault();

            let valid = true;

            let inputs = eve.target.querySelectorAll('[required]');
            
            for(let input of inputs){

                await customValidate(input).then( res => {
                    if(!res){
                        valid = false;
                    }
                });
            }
            
            if(valid){
                eve.target.submit();
                inputs.forEach(element => {
                    element.innerHTML = '';
                });
            }

        })
    })

    return(

        <div className='container-registry-section' id='registro'>
        <section className='section-register'>

            <div className='register-card'>

                <h1 className='text-register-card'>Cadastre-se para obter acesso<br/> a nossa plataforma</h1>

                <form className='register-form' method='POST' action='/user/register'>


                    <div className='box-input'>

                        <input className='input-register-card' id='input-nome' name='name' required />
                        <label className='label-register-card' htmlFor='input-nome'>Nome</label>
                        <span></span>

                    </div>

                    
                    <div className='box-input'>

                        <input className='input-register-card' id='input-email' minLength={10} name='email' type='email' required />
                        <label className='label-register-card' htmlFor='input-email'>Email</label>
                        <span></span>
                        
                    </div>

                    
                    <div className='box-input'>

                        <input className='input-register-card' id='input-passwd' name='password' minLength={6} required type='password' />
                        <label className='label-register-card' htmlFor='input-passwd' >Senha</label>
                        <span></span>

                    </div>

                    <button className='register-button' type='submit'>Criar conta</button>

                </form>

            </div>

            <img alt='woman' src={interfaceImg}></img>


        </section>
        </div>
    )

}


export default RegistrySection;