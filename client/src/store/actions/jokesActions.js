export const addJoke = () => {
    return (dispatch, getState) => {
        fetch("/getjoke")
        .then(res => res.json())
        .then(joke => dispatch({type: 'ADD_JOKE', joke}))
        .catch((err) => {
            dispatch({type: 'ADD_JOKE_ERROR', err})
        })
    }
}