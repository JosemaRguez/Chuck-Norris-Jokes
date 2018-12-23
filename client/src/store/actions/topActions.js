export const getTop = (num) => {
    return (dispatch) => {
        fetch("/gettop")
            .then(res => res.json())
            .then(topJokes => dispatch({ type: 'GET_TOP', topJokes, numTop: num}))
            .catch((err) => {
                dispatch({ type: 'TOP_JOKE_ERROR', err })
            })
    }
}
