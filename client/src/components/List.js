import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestList } from '../actions/appActions';

function List(props){

    const items = useSelector( state => state.list );
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(requestList());

    }, [])


    function addAnimation(icon){

        let inClassList = false;

        let desc = icon.parentNode.parentNode.querySelector('.desc-task');

        let animClass = 'showDesc';

        for(let value of desc.classList){

            if(value === animClass){ inClassList = true } 

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

            {items.map( (item, index) =>

                <div key={index}>

                    <div className="header-task">
                            
                        <input type="checkbox"></input>
                        <label>{item.title}</label>
                        <i className='bx bxs-chevron-down' onClick={(event) => addAnimation(event.target)}></i>

                    </div>

                    <div className='desc-task'>

                            <p>{item.desc}</p>
                            <button>Excluir</button>

                    </div>

                </div>

            )}
        
        </div>

    );

};

export default List;
