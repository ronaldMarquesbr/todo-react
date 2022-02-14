import React from 'react';
import api from '../services/api';

function List(props){

    function submitTask(event){

        event.preventDefault();

        let form = event.target;



    }

    // app.post('/', express.urlencoded({extended: true}), (req, res) => {

    //     const title = req.body.title
    //     const desc = req.body.desc
    
    //     User.updateOne({name: "Ronald Pinto Marques"}, { $addToSet: { tasks: {title, desc} } });
    
    // })

    function addAnimation(icon){

        let inClassList = false;

        let desc = icon.parentNode.parentNode.querySelector('.desc-task');

        let animClass = 'showDesc';

        for(let value of desc.classList){

            if(value == animClass){

                inClassList = true

            } 

        }

        if(inClassList){

            desc.classList.remove(animClass);
            desc.style.maxHeight = 0

        } else {

            let textDesc = desc.querySelector('p');
            desc.style.maxHeight = (parseInt((window.getComputedStyle( textDesc ).height).slice(0 , -2)) + 150).toString() + 'px';

            desc.classList.add(animClass);

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

                        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,

                        </p>
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

                        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,</p>
                        <button>Excluir</button>

                </div>

            </div>
        
        </div>

    );

};

export default List;
