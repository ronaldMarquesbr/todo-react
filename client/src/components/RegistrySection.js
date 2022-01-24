import React, {useEffect, useState} from 'react';
import interfaceImg from '../imgs/interface.png'
import { useDispatch } from 'react-redux';
import api from '../services/api';

import '../styles/style_RegistrySection.css'

function RegistrySection(props){

    const dispatch = useDispatch();

    const [user, setUser] = useState('');

    // useEffect(()=>{

    //     api.get('/user/users').then((response)=> {
    //         setUser(response.data);
    //     })

    // },[]);

    // useEffect(()=>{
    //     console.log(user)
    // },[user]);

    function addClassLabel(event){

        let label = event.target.parentNode.childNodes[1];
        label.classList.add('active-input');

    }


    function activeInput(event){

        let input = event.target;
        let label = input.parentNode.childNodes[1];

        if(input.value !== ''){
            label.classList.add('active-input');
        } else {
            label.classList.remove('active-input')
        }

    }

    // VALIDAÇÃO FORMULÁRIO

 

    function validateField(field, emails){        

        let valid = false; 

        function verifyErrors() {
    
            let foundError = false;

        
            for( let error in field.validity ) {
                if( field.validity[error] && !field.validity.valid ) {   
                    foundError = error;
                } 
            }

            if(field.type === 'email'){
                if(!validateEmail(field) && field.value !== ''){
                    foundError = 'typeMismatch';
                } else if(repeatedEmail(field)) {
                    foundError = 'repeatedEmail';
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
                    valueMissing: "Preencha este campo",
                    typeMismatch: "Digite o email no formato 'nome@exemplo.com'.",
                    repeatedEmail: "Email existente."

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
            const label = field.parentNode.querySelector("label");
            
            if(message){

                spanError.innerHTML = message;
                label.classList.add('label-invalid');
                field.classList.add('input-invalid');

            } 
            
            else {

                valid = true;
                spanError.innerHTML = "";
                label.classList.remove('label-invalid');
                field.classList.remove('input-invalid');

            }

        }

        
        function validateEmail(field){
            var validRegex = /^\w+([.-]?\w)*@\w+([.]+\w+)+$/;

            if (field.value.toString().match(validRegex)) {
                return true;
            }
        }

        function repeatedEmail(field){
            
            for(let email of emails){
                if(field.value === email){
                    return true;
                } 
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

            return valid;

        };
    }

    
        
    function customValidate(input){

        const field = input; 

        let emails = [];
        
        api.get('/user/users').then((response)=> {

            emails = response.data;

            const validation = validateField(field, emails);

            let valid = validation();
            console.log(`retorno: ${valid}`)
            return valid;

        });
    }

    
    document.addEventListener('DOMContentLoaded', event => {

        const fields = document.querySelectorAll("[required]");
        
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
        
        document.querySelector('.register-form').addEventListener('submit', eve =>{
            
            let inputs = document.querySelectorAll('[required]');

            for(let input of inputs){

                let valid = customValidate(input);
                console.log(`valido: ${valid}`);
         
                if(!valid){
                    eve.preventDefault();
                } else {
                    console.log('valido')
                }

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