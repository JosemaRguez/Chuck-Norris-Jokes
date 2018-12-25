export const saveScrollPos = (scrollPos) => {
    return (dispatch) => {
            dispatch({type: 'SAVE_SCROLL', scrollPos})
    }
}