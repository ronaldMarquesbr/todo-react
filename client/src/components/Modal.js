import React from 'react';
import '../styles/style_modal.css'

function Modal(props){

    function hideModal(event){
        let target = event.target;
        if(target.id === 'modal' || target.id === 'close-icon'){
            props.onHideModal()
        }
    }

    return(

        <div id='modal' onClick={hideModal} className={props.show ? 'Modal' : 'Modal hide'}>

            
            <div className='cardModal'>

                <i className='bx bx-x close-icon' onClick={hideModal} id='close-icon'></i>
                {props.children}

            </div>

        </div>

    )

}

export default Modal