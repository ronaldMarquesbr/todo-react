import api from '../services/api';

export function requestList(){

    return (dispatch) => {

        api.get('/user/userdata').then( res => {
            dispatch(loadList(res.data.tasks))
        })
        
    }

}

export function loadList(data){
    return {type: 'LOAD_LIST', payload: data}
}

export function loadUsername(){
    return {type: 'LOAD_USERNAME'};
}
