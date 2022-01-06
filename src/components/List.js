import React from 'react';
// import ListItem from './ListItem'


function List(props){

    return(

        // <ul className='list-group  lista-tarefas pb-5'>
        
        //     {props.items.map(item => <ListItem  key={item.id} item={item} onDone={props.onDone} onItemDeleted={props.onItemDeleted} ></ListItem>)}

            
        // </ul>

        <div className='list'>
            {props.items.map((item, index) => {

            return(

                <div key={item.id} id="checklist">
                    <input  id={index} type="checkbox" onClick={()=>{props.onDone(item)}}></input>
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