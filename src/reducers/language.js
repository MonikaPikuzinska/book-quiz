const langReducer = (state = 'en', action) => {
    switch (action.type) {
        case 'en':
            return state = 'en';
        case 'pl':
            return state = 'pl';
    
        default:
            return state;
    }
}

export default langReducer;