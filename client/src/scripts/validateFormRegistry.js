import api from '../services/api';

function validateEmail(field){
    var validRegex = /^\w+([.-]?\w)*@\w+([.]+\w+)+$/;

    if (field.value.toString().match(validRegex)) {
        return true;
    }
}

async function repeatedEmail(field){

    let emails = [];

    await api.get('/user/users').then((response)=> {
        emails = response.data;
    });

    for(let email of emails){
        if(field.value == email.toString()){
            return true;
        } 
    }

    return false;
   
}

function validateField(field){        

    let valid = false; 

    async function verifyErrors() {

        let foundError = false;
    
        for( let error in field.validity ) {
            if( field.validity[error] && !field.validity.valid ) {   
                foundError = error;
            } 
        }

        if(field.type === 'email'){

            let isRepeated = false;
            
            await repeatedEmail(field).then( res => isRepeated = res );

            if(!validateEmail(field) && field.value !== ''){
                foundError = 'typeMismatch';
            } else if (isRepeated){
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


    return async function(){

        let error = ''

        await verifyErrors().then( res => error = res);

        if(error) {
            const message = customMessage(error);
            setCustomMessage(message);
        } else {
            setCustomMessage();
        }

        return valid;

    };

}


    
async function customValidate(input, type){

    const field = input; 
    let validation = validateField(field);
    let valid = false;
    
    await validation().then(res => valid = res);

    return valid

}

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

export default customValidate;
export {addClassLabel, activeInput};
