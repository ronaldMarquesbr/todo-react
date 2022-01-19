import React from 'react';
import interfaceImg from '../imgs/interface.png'
import '../styles/style_RegistrySection.css'

function RegistrySection(props){

    function activeInput(event){

        event.target.classList.add('active-input');
    
    }


    return(

        <div className='container-registry-section'>
        <section className='section-register'>

            <div className='register-card'>

                <h1>Cadastro</h1>

                <div className='box-input'>

                    <input className='input-register-card' required />
                    <label className='label-register-card'>Nome</label>

                </div>

                
                <div className='box-input'>

                    <input className='input-register-card' type='email' required onClick={activeInput} />
                    <label className='label-register-card'>Email</label>
                    
                </div>

                
                <div className='box-input'>

                    <input className='input-register-card' required type='password' />
                    <label className='label-register-card'>Senha</label>

                </div>

                <button className='register-button'>Criar conta</button>

            </div>

            <img alt='woman' src={interfaceImg}></img>

        </section>
        </div>
    )

}


export default RegistrySection;