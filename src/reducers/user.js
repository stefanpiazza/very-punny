const initialState = {
    "isLoggedIn": false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'USER_LOGGED_IN':
            return Object.assign({}, state, { "isLoggedIn": true })
            break;

        case 'USER_LOGGED_OUT':
            return Object.assign({}, state, { "isLoggedIn": false })
            break;

        default:
            return state;
    }
}
