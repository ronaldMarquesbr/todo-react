import React from 'react';

function Menu(props){

    return(

        <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
            <div className='navbar-brand d-sm-block logo-navbar'>
                {props.titulo}
            </div>

            <button className="navbar-toggler align-self-end" type="button" data-bs-toggle="collapse" data-bs-target="#myNav">
                <span className="navbar-toggler-icon"></span>
            </button>

            
            <div id="myNav" className="collapse navbar-collapse">

                <ul className="navbar-nav text-center">

                    <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#price" className="nav-link">Preços</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link">Sobre</a></li>
                    <li className="nav-item"><button className="btn btn-primary">Contate-nos</button></li>
                    

                </ul>

            </div>

        </nav>

    );

};

export default Menu