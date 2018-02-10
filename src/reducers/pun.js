const initialState = {

};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SELECTED_PUN':
            return action.payload
            break;

        default:
            return state;
    }
}
