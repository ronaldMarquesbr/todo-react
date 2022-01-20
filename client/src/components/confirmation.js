import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/style_confirmation.css'

function Confirmation(props){

    const state = useSelector((state) => {return state} );
    const dispatch = useDispatch();

    

    useEffect(()=>{

        let confirmation = document.getElementById('confirmation');

        if(state === 'show_confirmation'){
            confirmation.classList.remove('hide');
        } else {
            confirmation.classList.add('hide');
        }
    })

    return(

        <div className='content-confirmation-card hide' id='confirmation'>

            <i className='bx bxs-user-check user-check'></i>
            <h2 className='text-confirmation'>Usuário cadastrado com sucesso!</h2>
            <button type="button" onClick={() => {dispatch({type:'hide'})}} className="button-return">Voltar</button>

        </div>

    );

}

export default Confirmation;