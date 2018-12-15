export const getTop = () => {
    return (dispatch) => {
        fetch("/gettop")
            .then(res => res.json())
            .then(topJokes => dispatch({ type: 'GET_TOP', topJokes }))
            .catch((err) => {
                dispatch({ type: 'TOP_JOKE_ERROR', err })
            })
    }
}
