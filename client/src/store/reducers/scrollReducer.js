const scrollReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SAVE_SCROLL': 
            return action.scrollPos
        case 'SAVE_SCROLL_ERROR': console.log('Error saving scroll position', action.err)
            break
        default:
            return state
    }
}

export default scrollReducer