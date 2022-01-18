import React from 'react';


function ListItem(props){

    return(

        <li className='list-group-item d-flex justify-content-between align-items-center'>

            <h2 className='titulo-item'>{props.item.text}</h2>

            <div className='d-flex align-items-center'>

                <input className="form-check-input mx-3 my-0 " disabled={props.item.done} defaultChecked={props.item.done}  type="checkbox" onClick={()=>{ props.onDone(props.item) }}></input>

                <button className='btn btn-sm btn-outline-danger'  onClick={()=> props.onItemDeleted(item)}>
                    <i className='bx bx-trash'></i>
                </button>

            </div>

        </li>

    );

};

export default ListItem;
