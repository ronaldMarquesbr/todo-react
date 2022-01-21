import React, {useEffect, useState} from 'react';
import interfaceImg from '../imgs/interface.png'
import { useDispatch } from 'react-redux';
import api from '../services/api';

import '../styles/style_RegistrySection.css'

function RegistrySection(props){

    const dispatch = useDispatch();

    const [user, setUser] = useState('');

    useEffect(()=>{

        api.get('/user/users').then((response)=> {
            setUser(response.data)
        })

    },[]);

    function addClassLabel(event){

        let label = event.target.parentNode.childNodes[1];
        label.classList.add('active-input');

    }


    function activeInput(event){

        let input = event.target;
        let label = input.parentNode.childNodes[1];

        if(input.value !== ''){
            label.classList.add('active-input')
        } else {
            label.classList.remove('active-input')
        }

    }

    // let inputs = document.querySelectorAll('input');

    // inputs.forEach( input => {
    //     input.addEventListener('focus', addClassLabel);
    //     input.addEventListener('blur', activeInput);
    // });


    // VALIDAÇÃO FORMULÁRIO

    const fields = document.querySelectorAll("[required]");

    function validateEmail(event){
        var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (event.target.value.toString().match(validRegex)) {
            console.log('email valido')
          return true;
        } else {
          console.log("Invalid email address!");
          return false;
        }

    }

    function validateField(field){

        

        function verifyErrors() {
    
            let foundError = false;
        
            for( let error in field.validity ) {

                if( field.validity[error] && !field.validity.valid ) {
                    
                    foundError = error;
        
                } 
        
            }
        
            return foundError;
        
        }

        function customMessage(typeError) {

            const messages = {

                text: {

                    valueMissing: "Preencha este campo"

                },
                email:{

                    tooShort: "O email deve conter no mínimo 10 caracteres",
                    valueMissing: "Preencha este campo"

                },
                password:{

                    valueMissing: "Preencha este campo",
                    tooShort: "A senha deve conter no mínimo 6 caracteres"

                }

            }
        
            return messages[field.type][typeError];

        }

        function setCustomMessage(message) {

            const spanError = field.parentNode.querySelector("span");
            
            if(message){

                spanError.innerHTML = message;

            } 
            
            else {

                spanError.innerHTML = "";

            }

        }

        return function(){

            const error = verifyErrors();

            if(error) {
                const message = customMessage(error);
                setCustomMessage(message);
            } else {
                setCustomMessage();
            }

        };
    }


    function customValidate(event) {

        const field = event.target; 
        
        const validation = validateField(field);

        validation();
        
    }

    for( let field of fields ) {

        field.addEventListener("invalid", event => {
            event.preventDefault();
            customValidate(event);
        });

        field.addEventListener("blur", event => {
            activeInput(event);
            customValidate(event);
        });

        field.addEventListener("focus", event => {
            addClassLabel(event);
        });

        if(field.type == 'email'){
            field.addEventListener('blur', validateEmail);
        }

    }
    
    document.addEventListener('DOMContentLoaded', ()=>{
        document.querySelector('.register-form').addEventListener('submit', event =>{
            console.log('enviar o formulario');
            event.preventDefault();
        })
    })
    

    return(

        <div className='container-registry-section' id='registro'>
        <section className='section-register'>

            <div>

                <h1 className='text-register-card'>Cadastre-se para obter acesso<br/> a nossa plataforma</h1>

                <form className='register-form' method='POST' action='/user/register' onSubmit={() => {dispatch({type: 'show_confirmation'})}}>


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

                        <input className='input-register-card' id='input-passwd' name='password' minLength={5} required type='password' />
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