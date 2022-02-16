import api from '../services/api';


export function requestList(){

    return (dispatch) => {

        api.get('/user/userdata').then( res => {
            dispatch( loadList(res.data.tasks) );
        })
        
    }

}

export function requestUsername(){

    return (dispatch) => {

        api.get('/user/userdata').then( res => {
            dispatch( loadUsername(res.data.name) );
        })
        
    }

}

export function loadList(data){
    return { type: 'LOAD_LIST', payload: data }
}

export function loadUsername(username){
    return { type: 'LOAD_USERNAME', payload: username };
}
