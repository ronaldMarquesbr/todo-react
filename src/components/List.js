import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, changeDone } from '../actions/listAction'


function List(props){

    const items = useSelector(state => state);
    const dispatch = useDispatch();

    return(

        <div className='list'>

            {items.map((item, index) => {

            return(

                <div key={item.id} id="checklist">
                    {/* onClick={()=>{props.onDone(item)}} */}
                    <input  id={index} type="checkbox" disabled={item.done} defaultChecked={ item.done } onClick={()=> dispatch(changeDone( item.id ) )}></input>
                    <label htmlFor={index}>{item.text}</label>
                    <button className='btn btn-sm btn-outline-danger botao-apagar' onClick={ ()=> dispatch( deleteItem( item.id ) )}>
                    {/* onClick={()=> dispatch(deleteItem(item.id))} */}
                        <i className='bx bx-trash'></i>
                    </button>

                </div>
            )

        })}
        
        </div>

    );

};

export default List;
