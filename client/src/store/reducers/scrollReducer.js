const scrollReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SAVE_SCROLL': 
            return action.scrollPos
        default:
            return state
    }
}

export default scrollReducer