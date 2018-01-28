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

const addPun = (pun) => {
    return {
        type: 'ADDED_PUN',
        payload: pun
    }
}

const removePun = (pun) => {
    return {
        type: 'REMOVED_PUN',
        payload: pun
    }
}

export {
    userLogIn,
    userLogOut,
    addPun,
    removePun
}
