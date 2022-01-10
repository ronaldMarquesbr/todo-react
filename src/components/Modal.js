import React from 'react';

function Modal(props){

    function hideModal(event){
        let target = event.target;
        if(target.id === 'modal'){
            props.onHideModal()
        }
    }

    return(

        <div id='modal' onClick={hideModal} className={props.show ? 'Modal' : 'Modal hide'}>

            <div className='cardModal'>

                <h2>Nova Tarefa</h2>
                {props.children}

            </div>

        </div>

    )

}

export default Modal