import api from '../services/api';

function validateLogin(form){

    var xhr = new XMLHttpRequest();
    
    xhr.open('POST', '/user/login');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = event =>{

        form.querySelector('.span-error').innerHTML = event.target.response;

    }

    let fieldsLogin = form.querySelectorAll('[required]');

    let content = '';

    for(let i = 0; i < fieldsLogin.length; i++){

        if( i ===  ( fieldsLogin.length - 1 ) ) {
            content += `${fieldsLogin[i].name}=${fieldsLogin[i].value}`;
        } else {
            content += `${fieldsLogin[i].name}=${fieldsLogin[i].value}&`
        }

    }

    let toSend = [];
    
    for(let value of content){
        
        if(value === '@'){
            toSend.push('%40')
        } else {
            toSend.push(value);
        }

    }

    toSend = toSend.join('');

    xhr.send(toSend);

}

export default validateLogin;
