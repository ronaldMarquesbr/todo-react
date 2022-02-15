const Joi = require('@hapi/joi');

function customError( errors ){

    errors.forEach(err=>{  

        switch(err.code){
            
            case "string.empty":
            err.message='Insira o e-mail.'
            break
   
            case "string.max":
            err.message='Este dado deve ter no máximo 50 caracteres'
            break

            case "string.min":
            err.message='Este dado deve ter no mínimo 6 caracteres'
            break

           }
         })

       return errors

}


const registerValidate = (data) => {

    const schema = Joi.object({
        name:Joi.string().required().min(6).max(50),
        email:Joi.string().required().min(6).max(50),
        password:Joi.string().required().min(6).max(50)
    })

    return schema.validate(data)

}

const loginValidate = (data) => {

    const schema = Joi.object({
        email:Joi.string().required().min(5).max(50).messages({

            "string.empty": `Preencha este campo`,
            "string.min": `Este campo deve ter no mínimo {#limit} caracteres.`,
            "string.max": `Este campo deve ter no máximo {#limit} caracteres.`,
            "any.required": `Este campo é obrigatório`

        }),
        password:Joi.string().required().min(6).max(80).messages({

            "string.empty": `Preencha este campo`,
            "string.min": `Este campo deve ter no mínimo {#limit} caracteres.`,
            "string.max": `Este campo deve ter no máximo {#limit} caracteres.`,
            "any.required": `Este campo é obrigatório`

        })
    })

    return schema.validate(data)

}

module.exports.loginValidate = loginValidate;
module.exports.registerValidate = registerValidate;