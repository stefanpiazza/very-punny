const initialState = null;

export default (state = initialState, action) => {
    switch(action.type) {
        case 'USER_LOGGED_IN':
            return action.payload
            break;

        case 'USER_LOGGED_OUT':
            return null
            break;

        default:
            return state;
    }
}
