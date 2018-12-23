const jokeList = {}


const jokeReducer = (state = jokeList, action) => {
    switch (action.type) {
        case 'ADD_JOKE': var category = action.joke.body.category
            if (category === null) { category = "none" }
            state[action.joke.body.id] = { value: action.joke.body.value, category: category }
            return state
        case 'ADD_JOKE_ERROR': console.log('add joke error', action.err)
            break
        default:
            return state
    }
}

export default jokeReducer