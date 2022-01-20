const modalReducer = (state = '', action) => {

    switch (action.type) {
        case 'show_login':
            return state = 'show_login'
    
        case 'show_confirmation':
            return state = 'show_confirmation';

        case 'hide':
            return state = 'hide';

        default:
            return state;
    }

}

export default modalReducer