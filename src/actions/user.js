const userLogIn = (user) => {
    return {
        type: 'USER_LOGGED_IN',
        payload: user
    }
}

const userLogOut = (user) => {
    return {
        type: 'USER_LOGGED_OUT',
        payload: user
    }
}

export {
    userLogIn,
    userLogOut
}
