import React from 'react';

function List(props){

    return(

        <ul className='list-group'>

            {props.items.map(item =>    <li className='list-group-item d-flex justify-content-between align-items-center' key={item.id}>
                                            {item.text}
                                            <div className='d-flex align-items-center'>
                                            <input class="form-check-input mx-3 my-0 " type="checkbox"></input>
                                            <button className='btn btn-sm btn-outline-danger' onClick={()=> props.onItemDeleted(item) }><i class='bx bx-trash'></i></button>
                                            </div>
                                        </li>)}

        </ul>

    );

};

export default List;