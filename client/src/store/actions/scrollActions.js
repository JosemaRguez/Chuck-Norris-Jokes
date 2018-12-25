export const saveScrollPos = (scrollPos) => {
    return (dispatch) => {
            dispatch({type: 'SAVE_SCROLL', scrollPos}).catch((err) => {
                dispatch({ type: 'SAVE_SCROLL_ERROR', err })
            })
    }
}