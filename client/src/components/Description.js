import React, { useEffect, useState } from 'react';
import '../styles/style_description.css'
import successImg from '../imgs/success.png'
import todo_illustrationImg from '../imgs/todo-illustration.png'
import sleepingImg from '../imgs/sleeping.png'
import api from '../services/api';



function Description(){

    const [user, setUser] = useState('');

    useEffect(()=>{

        api.get('/user/users').then((response)=> {
            setUser(response.data)
            console.log(response.data)
        })

    },[])

    return(

        <div className='container-description'>
        <div className='description'>

            <div className='card-desc'>

                <img src={successImg} alt='success'></img>
                <div className='text-desc'>
                    <h1 className='titulo-desc'>Atinja sua auto <br/> <span className='text-color'>performance</span></h1>
                </div>
                

            </div>

            <div className='card-desc'>

                <img src={todo_illustrationImg} alt='todo-illustration'></img>
                <div className='text-desc'>
                    <h1 className='titulo-desc'>Gerencie suas <br/><span className='text-color'>tarefas</span></h1>
                </div>
                
            </div>

            <div className='card-desc'>

                <img src={sleepingImg} alt='sleeping'></img>
                <div className='text-desc'>
                    <h1 className='titulo-desc'>Evite a<br/><span className='text-color'>procrastinação</span></h1>
                </div>
                
            </div>

            <div className='card-desc'>

                {user}

            </div>

        </div>
        </div>

    );

}

export default Description;