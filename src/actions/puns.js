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
    addPun,
    removePun
}
