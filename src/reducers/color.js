const colorReducer = (state = 'green', action) => {
    switch (action.type) {
        case 'green':
            return state = 'green';
        case 'indigo':
            return state = 'indigo';
        case 'gray':
            return state = 'gray';
        case 'red':
            return state = 'red';
    
        default:
            return state;
    }
}

export default colorReducer;