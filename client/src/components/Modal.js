import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/style_modal.css'

function Modal(props){

    const state = useSelector((state) => {return state} )
    const dispatch = useDispatch();

    let modal = document.getElementById('modal');
    let closeIcon = document.getElementById('close-icon');

    useEffect(() => {
        if(state === 'show_login' || state === 'show_confirmation'){
            modal.classList.remove('hide');
        } else if(state === 'hide'){
            modal.classList.add('hide');
        }
    })

    function showModal(event){
        if( event.target === modal || event.target === closeIcon ){
            dispatch({type: 'hide'});
        }
    }

    return(

        <div id='modal' className='Modal hide' onClick={showModal}>

            <div className='cardModal'>

                <i className='bx bx-x close-icon' id='close-icon'></i>
                {props.children}

            </div>

        </div>

    )

}

export default Modal