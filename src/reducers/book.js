const bookReducer = (state = 'none', action) => {
    switch (action.type) {
        case 'throne':
            return state = 'Throne_of_glass';
        case 'harry':
            return state = 'Harry_Potter';
        case 'twilight':
            return state = 'Twilight';
        case 'hunger':
            return state = 'The_Hunger_Games';
    
        default:
            return state;
    }
}

export default bookReducer;