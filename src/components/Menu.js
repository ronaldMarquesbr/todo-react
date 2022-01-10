import React from 'react';

function Menu(props){

    return(

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

                                return(<li key={index} className='nav-item mx-1 item-login'><a href={`#${item}`} className='nav-link'>{item}</a></li>);

                            } else {

                                return(<li key={index} className='nav-item mx-1'><a href={`#${item}`} className='nav-link'>{item}</a></li>);
                            }
                        }
                                                
                    )}     

                </ul>

            </div>

        </nav>

    );

};

export default Menu