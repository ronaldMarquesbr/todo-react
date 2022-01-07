import React from 'react';


function List(props){

    return(

        <div className='list'>
            {props.items.map((item, index) => {

            return(

                <div key={item.id} id="checklist">
                    <input  id={index} type="checkbox" disabled={item.done} defaultChecked={item.done} onClick={()=>{props.onDone(item)}}></input>
                    <label htmlFor={index}>{item.text}</label>
                    <button className='btn btn-sm btn-outline-danger botao-apagar'  onClick={()=> props.onItemDeleted(item)}>
                        <i className='bx bx-trash'></i>
                    </button>
                </div>
            )
        })}
        
        </div>

    );

};

export default List;