import React from 'react';
import '../styles/style_RegistrySection.css'

function RegistrySection(props){


    return(

        <section className='section-register'>

            <div className='register-card'>

                <div className='box-input'>

                    <label className='label-card-register'>Nome</label>
                    <input className='input-card-register'/>

                </div>

                
                <div className='box-input'>

                    <label className='label-card-register'>Email</label>
                    <input className='input-card-register'/>

                </div>

                
                <div className='box-input'>

                    <label className='label-card-register'>Senha</label>
                    <input className='input-card-register'/>

                </div>

            </div>

        </section>

    )

}


export default RegistrySection;