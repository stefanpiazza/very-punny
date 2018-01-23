const initialState = [{

}];

export default (state = initialState, action) => {
    switch(action.type) {
        case 'USER_LOGGED_IN':
            return action.payload;
            break;

        case 'USER_LOGGED_OUT':
            return action.payload;
            break;

        default:
            return state;
    }
}
