import api from '../services/api';

function validateLogin(form){

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
  
    api.post('/user/login', toSend ).then( res => {
        form.querySelector('.span-error').innerHTML = ``;
    }).catch( err => {
        form.querySelector('.span-error').innerHTML = `<i class='bx bxs-error-circle'></i>${err}`;
    })

}

export default validateLogin;
