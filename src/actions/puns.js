const addPun = (pun) => {
    return {
        type: 'ADDED_PUN',
        payload: pun
    }
}

const addPuns = (puns) => {
    return {
        type: 'ADDED_PUNS',
        payload: puns
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
    addPuns,
    removePun
}
