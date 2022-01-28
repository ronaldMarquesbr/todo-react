import React from 'react';

function List(props){

    return(

        <div className='list'>
            
            <div id="checklist">
                     
                <input type="checkbox"></input>
                <label>Teste</label>
                <button className='btn btn-sm btn-outline-danger botao-apagar'>
                    <i className='bx bx-trash'></i>
                </button>

            </div>
        
        </div>

    );

};

export default List;
