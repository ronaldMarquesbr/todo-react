import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/style_menu.css'

function Menu(props){

    const state = useSelector((state) => {return state} )
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(state)
    }, [state])

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

                                return(<li key={index} className='nav-item mx-1 item-login'><a onClick={() => {dispatch({type:'show_login'})}} className='nav-link'>{item}</a></li>);

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