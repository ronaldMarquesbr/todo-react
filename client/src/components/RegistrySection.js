import React from 'react';
import interfaceImg from '../imgs/interface.png'
import '../styles/style_RegistrySection.css'

function RegistrySection(props){

    function activeInput(event){

        let input = event.target;
        let label = input.parentNode.childNodes[1];

        if(input.value !== ''){
            label.classList.add('active-input')
        } else {
            label.classList.remove('active-input')
        }

    }

    function addClassLabel(event){

        let label = event.target.parentNode.childNodes[1];
        label.classList.add('active-input');

    }

    return(

        <div className='container-registry-section'>
        <section className='section-register'>

            <div>

                <h1 className='text-register-card'>Cadastre-se para obter acesso<br/> a nossa plataforma</h1>

                <form className='register-form'>


                    <div className='box-input'>

                        <input className='input-register-card' id='input-nome' required onFocus={addClassLabel} onBlur={activeInput} />
                        <label className='label-register-card' for='input-nome' >Nome</label>

                    </div>

                    
                    <div className='box-input'>

                        <input className='input-register-card' id='input-email' type='email' required onFocus={addClassLabel} onBlur={activeInput} />
                        <label className='label-register-card'for='input-email' >Email</label>
                        
                    </div>

                    
                    <div className='box-input'>

                        <input className='input-register-card' id='input-passwd' required onFocus={addClassLabel} onBlur={activeInput} type='password' />
                        <label className='label-register-card'for='input-passwd' >Senha</label>

                    </div>

                    <button className='register-button' onDrop={() => {console.log('a')}} >Criar conta</button>

                </form>

            </div>

            <img alt='woman' src={interfaceImg}></img>


        </section>
        </div>
    )

}


export default RegistrySection;