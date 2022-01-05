import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Item from './Item'
import List from './List'
import './Todo.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo(){

    const [items, setItems] = useState([]);

   
    function onAddItem(text){

        let it = new Item(text);
        console.log(it)

        setItems([...items, it]);

    }

    function onItemDeleted(item){

        let filteredItems = items.filter(it => it.id != item.id);

        setItems(filteredItems);

    }

   
    return(

        <div className='container'>
            <h1>Todo</h1>

            <TodoForm onAddItem={onAddItem}></TodoForm>

            <List onItemDeleted={onItemDeleted} items={items}></List>

        </div>
        

    );
};





export default Todo