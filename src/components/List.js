import React from 'react';
import ListItem from './ListItem'


function List(props){
   
    return(

        <ul className='list-group  lista-tarefas pb-5'>
        
            {props.items.map(item => <ListItem  key={item.id} item={item} onDone={props.onDone} onItemDeleted={props.onItemDeleted} ></ListItem> )}

        </ul>

    );

};

export default List;