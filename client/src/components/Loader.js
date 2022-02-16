import React from 'react';
import '../styles/style_loader.css'

function Loader(props){

    return(

        <div className='loader'>

            <h1>ToDo</h1>
            {/* <div></div> */}
            <svg width="300" height="200">
                <polygon points="100 10 40"/>
            </svg>

        </div>

    );

}

export default Loader;