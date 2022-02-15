const listReducer = (state = [], action) => {

    switch (action.type) {

        case 'LOAD_LIST':
            
            return action.payload;
    
        default:

            return state;

    }

}

export default listReducer;