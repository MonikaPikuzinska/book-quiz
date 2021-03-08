const bookReducer = (state = 'none', action) => {
    switch (action.type) {
        case 'throne':
            return state = 'Throne of glass';
        case 'harry':
            return state = 'Harry Potter';
        case 'twilight':
            return state = 'Twilight';
        case 'hunger':
            return state = 'The Hunger Games';
    
        default:
            return state;
    }
}

export default bookReducer;