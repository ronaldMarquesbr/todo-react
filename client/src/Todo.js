import React, { useEffect, useState } from 'react'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import listReducer from './reducers/listReducer';

// --- COMPONENTS ---
import './styles/Todo.css'
import Menu from './components/Menu'
import Hero from './components/Hero'
import Description from './components/Description'
import SectionFeedback from './components/SectionFeedback'
// import TodoForm from './components/TodoForm'
import Modal from './components/Modal'
import CardRegister from './components/registerCard';
// import List from './components/List'

// --- BOOTSTRAP ---
import 'bootstrap/dist/css/bootstrap.min.css';

const SAVED_ITEMS = 'savedItems';


function persistState(state){

    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));

}


function loadState(){

    const actualState = localStorage.getItem(SAVED_ITEMS);
    if(actualState){
        return JSON.parse(actualState);
    } else {
        return [];
    }

}



const store = createStore(listReducer, loadState());

store.subscribe(() => {
    persistState(store.getState());
})


function Todo(){

    const [aluno, setAluno] = useState({});
    const [showModal, setShowModal] = useState(false);

    function onHideModal(e){
            setShowModal(false);
    }

    useEffect(()=>{

        fetch('/api').then( res => res.json() ).then( data => setAluno(data))
  
    }, [])

    return(

        <div className='container'>
            <Provider store={store}>
                <Menu titulo="To Do" items_nav={['Contatos', 'Sobre', 'Login',]} setShowModal={setShowModal}></Menu>

                <Modal show={showModal} onHideModal={onHideModal} >
                    <CardRegister></CardRegister>
                </Modal> 


                <Hero></Hero>

                <Description></Description>

                <SectionFeedback></SectionFeedback>

            
                {/* <h1 className='display-1 text-center'>Tarefas</h1>

                <div className='d-flex justify-content-center my-3'>

                    <div className='btn-group'>
                        <button onClick={() => { setShowModal(true)}} className='btn btn-outline-primary btn-lg'>Nova tarefa</button>
                        <button className='btn btn-primary btn-lg'>+</button>
                    </div>

                </div>

                <List></List>

                <Modal show={showModal} onHideModal={onHideModal} titulo={"Nova Tarefa"}>
                    <TodoForm onHideModal={onHideModal}></TodoForm>
                </Modal> */}
            </Provider>

        </div>
        

    );
};


export default Todo;