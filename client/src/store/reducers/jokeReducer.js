const jokeList = {
    'fdsfadsfds': { value: "This is a joke", category: "explicit" },
    'ffdfaddfsfds': { value: "You are a bitch", category: "sport" },
    'fd3dfadsfds': { value: "Oh yes you are", category: "songs" },
    'fd5adsfds': { value: "Dummy data here", category: "null" },
    'fdsfadsfd32s': { value: "Yes it is dummy data", category: "movies" },
    'adsfjkdsj': { value: "Datafonoooooooooo", category: "null" }
}
const jokeReducer = (state = jokeList, action) => {
    switch (action.type) {
        case 'ADD_JOKE': var category = action.joke.body.category
            if (category === null) { category = "none" }
            state[action.joke.body.id] = { value: action.joke.body.value, category: category }
            return state
        case 'ADD_JOKE_ERROR': console.log('add joke error', action.err)
            break
        case 'GET_CATEGORIES': state.categories = ["--Category--", ...action.categories]
            return state.categories
        default:
            return state
    }
}

export default jokeReducer