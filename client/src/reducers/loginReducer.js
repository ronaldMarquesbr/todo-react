const loginReducer = ( state = 'OFFLINE', action ) => {

    switch (action.type) {

        case 'LOGIN':
            return  'ONLINE'
    
        case 'LOGOUT':
            return 'OFFLINE'

        default:
            return state;

    }

}

export default loginReducer;