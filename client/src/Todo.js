import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//---COMPONENTS---     
import Home from './components/Home';
import App from './components/App';

//---REDUCERS---
import listReducer from './reducers/listReducer';
import loginReducer from './reducers/loginReducer';
import userReducer from './reducers/userReducer';

//---STYLE---
import './styles/Todo.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const allReducers = combineReducers({ login: loginReducer, user: userReducer, list: listReducer });
const store = createStore( allReducers, applyMiddleware(thunk) );


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