const initialState = {

};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SELECTED_PUN':
            return Object.assign({}, ...state, action.payload)
            break;

        default:
            return state;
    }
}
