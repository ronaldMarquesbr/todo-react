var React = require('react');

// ---COMPONENTS--- 
// import TodoForm from '../client/src/components/TodoForm'
// import List from '../client/src/components/List'

function App(props){

    return(

        <div className='container'>

            <h1>Olá, {props.user}.</h1>

            {/* <TodoForm></TodoForm>

            <List></List> */}

        </div>

    );

};

module.exports = App