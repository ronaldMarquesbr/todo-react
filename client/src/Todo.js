import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import modalReducer from './reducers/modalReducer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//---COMPONENTS     
import Menu from './components/Menu';
import Home from './components/Home';

//---STYLE---
import './styles/Todo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(modalReducer);

function Todo(props){

    return(

        <Provider store={store}>

            <Router>

                <div className='Todo'>

                    <Menu titulo="To Do" items_nav={['Contatos', 'Sobre', 'Login',]}></Menu>

                    <Routes>

                        <Route path="/" element={<Home/>} />

                    </Routes>

                </div>

            </Router>

        </Provider>

    )

}

export default Todo;