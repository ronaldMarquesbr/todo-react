import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import modalReducer from './reducers/modalReducer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//---COMPONENTS     
import Home from './components/Home';
import App from './components/App';

//---STYLE---
import './styles/Todo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(modalReducer);

function Todo(props){

    return(

        <Provider store={store}>

            <Router>

                <div className='Todo'>

                    <Routes>

                        <Route path="/" element={<Home/>} />
                        <Route path="/app" element={<App/>} />

                    </Routes>

                </div>

            </Router>

        </Provider>

    )

}

export default Todo;