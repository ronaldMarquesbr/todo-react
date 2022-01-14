import React, { useEffect, useState } from 'react'
import './styles/Todo.css'
import Menu from './components/Menu'
import Hero from './components/Hero'
import Description from './components/Description'
import SectionFeedback from './components/SectionFeedback'
import TodoForm from './components/TodoForm'
import Modal from './components/Modal'
import Item from './components/Item'
import List from './components/List'

import 'bootstrap/dist/css/bootstrap.min.css';

const SAVED_ITEMS = 'savedItems';

function Todo(){

    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(()=>{

        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if(savedItems){
            setItems(savedItems);
        }

    },[]);

    useEffect(()=>{

        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));

    }, [items]);
   
    function onAddItem(text){

        let it = new Item(text);

        setItems([...items, it]);
        onHideModal()

    };

    function onItemDeleted(item){

        let filteredItems = items.filter(it => it.id !== item.id);

        setItems(filteredItems);

    };

    function onDone(item){
        let updatedItems = items.map(it => {

            if(it.id === item.id){
                it.done = !it.done;
            };

            return it;

        });

        setItems(updatedItems);

    };

    function onHideModal(e){
            setShowModal(false);
    }

   
    return(

        <div className='container'>
            
            <Menu titulo="To Do" items_nav={['Contatos', 'Sobre', 'Login',]} ></Menu>

            <Hero></Hero>

            <Description></Description>

            <SectionFeedback></SectionFeedback>

            <h1 className='display-1 text-center'>Tarefas</h1>

            
            <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>

            <div className='d-flex justify-content-center my-3'>

                <div className='btn-group'>
                    <button onClick={() => { setShowModal(true)}} className='btn btn-outline-primary btn-lg'>Nova tarefa</button>
                    <button className='btn btn-primary btn-lg'>+</button>
                </div>

            </div>

            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

        </div>
        

    );
};


export default Todo;