import React from 'react';
import '../styles/style_menu.css'

function Menu(props){

    return(

        <div className='container-nav'>
        <nav className='navbar navbar-light navbar-expand-sm justify-content-between'>
            <div className='navbar-brand d-sm-block logo-navbar'>
                {props.titulo}
            </div>

            <button className="navbar-toggler align-self-end" type="button" data-bs-toggle="collapse" data-bs-target="#myNav">
                <span className="navbar-toggler-icon"></span>
            </button>

            
            <div id="myNav" className="collapse navbar-collapse">

                <ul className="navbar-nav text-center">

                    {props.items_nav.map( (item , index) => {
                     
                            if(item === 'Login'){

                                return(<li key={index} className='nav-item mx-1 item-login'><a onClick={() => {props.setShowModal(true)}} className='nav-link'>{item}</a></li>);

                            } else {

                                return(<li key={index} className='nav-item mx-1'><a href={`#${item}`} className='nav-link'>{item}</a></li>);
                            }
                        }
                                                
                    )}     

                </ul>

            </div>

        </nav>
        </div>

    );

};

export default Menu