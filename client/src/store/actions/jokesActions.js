export const addJoke = () => {
    return (dispatch) => {
        fetch("/getjoke")
            .then(res => res.json())
            .then(joke => dispatch({ type: 'ADD_JOKE', joke }))
            .catch((err) => {
                dispatch({ type: 'ADD_JOKE_ERROR', err })
            })
    }
}

export const saveJoke = (id, joke) => {
    fetch("/savejoke", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id, value: joke.value, category: joke.category, clicks: 1 })
    })
}
