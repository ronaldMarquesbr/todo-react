import React from 'react'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import listReducer from './reducers/listReducer';
import modalReducer from './reducers/modalReducer';

// --- COMPONENTS ---
import './styles/Todo.css';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Description from './components/Description';
import SectionFeedback from './components/SectionFeedback';
// import TodoForm from './components/TodoForm';
import Modal from './components/Modal';

import LoginCard from './components/loginCard';
import Confirmation from './components/confirmation';
import RegistrySection from './components/RegistrySection';
// import List from './components/List';

// --- BOOTSTRAP ---
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(modalReducer);

function Todo(){

    return(

        <div className='container'>
            <Provider store={store}>
                <Menu titulo="To Do" items_nav={['Contatos', 'Sobre', 'Login',]}></Menu>

                <Modal >
                    <Confirmation></Confirmation>
                    <LoginCard></LoginCard>
                </Modal> 


                <Hero></Hero>

                <Description></Description>

                <SectionFeedback></SectionFeedback>

                <RegistrySection></RegistrySection>
            
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