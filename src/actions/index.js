export const userLogIn = (user) => {
    return {
        type: 'USER_LOGGED_IN',
        payload: user
    }
}

export const userLogOut = (user) => {
    return {
        type: 'USER_LOGGED_OUT',
        payload: user
    }
}
