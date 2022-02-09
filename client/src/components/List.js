import React from 'react';

function List(props){

    function addAnimation(icon){

        let inClassList = false;

        let desc = icon.parentNode.parentNode.querySelector('.desc-task');
        let descParent = desc.parentNode;
        
        let animClass = 'showDesc';
        let marginDesc = 'margin-desc'

        for(let value of desc.classList){

            if(value == animClass){

                inClassList = true

            } 

        }

        if(inClassList){

            desc.classList.remove(animClass);
            descParent.classList.remove(marginDesc);


        } else {

            desc.classList.add(animClass);
            descParent.classList.add(marginDesc);

        }

    }

    return(

        <div className='list'>
            
            <div>

                <div id="list-item">
                        
                    <input type="checkbox"></input>
                    <label>Teste</label>
                    <i className='bx bxs-chevron-down' onClick={(event) => addAnimation(event.target)}></i>

                </div>

                <div className='desc-task'>

                        <h4>Descrição:</h4>
                        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI</p>
                        <button>Excluir</button>

                </div>

            </div>

            <div>

                <div id="list-item">
                        
                    <input type="checkbox"></input>
                    <label>Teste</label>
                    <i className='bx bxs-chevron-down' onClick={(event) => addAnimation(event.target)}></i>

                </div>

                <div className='desc-task'>

                        <h4>Descrição:</h4>
                        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,</p>
                        <button>Excluir</button>

                </div>

            </div>

            <div>

                <div id="list-item">
                        
                    <input type="checkbox"></input>
                    <label>Teste</label>
                    <i className='bx bxs-chevron-down' onClick={(event) => addAnimation(event.target)}></i>

                </div>

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
