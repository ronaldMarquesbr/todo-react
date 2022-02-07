import React from 'react';

function List(props){

    

    return(

        <div className='list'>
            
            <div id="checklist">
                     
                <input type="checkbox"></input>
                <label>Teste</label>
                <i className='bx bxs-chevron-down'></i>

            </div>

            <div id="checklist">
                     
                <input type="checkbox"></input>
                <label>Teste</label>
                <i className='bx bxs-chevron-down'></i>
                
                <div className='desc-task'>

                    <h4>Descrição:</h4>
                    <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,</p>
                    <button>Excluir</button>

                </div>

            </div>
        
        </div>

    );

};

export default List;
