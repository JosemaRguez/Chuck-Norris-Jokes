const jokeList = {
        'fdsfadsfds': {value: "This is a joke"},
        'ffdfaddfsfds': {value: "You are a bitch"},
        'fd3dfadsfds': {value: "Oh yes you are"},
        'fd5adsfds': {value: "Dummy data here"},
        'fdsfadsfd32s': {value: "Yes it is dummy data"},
        'adsfjkdsj': {value: "Datafonoooooooooo"},
        'djflkda': {value: "This is a joke"},
        'fkdjf1': {value: "This is a joke"},
        'fjdlks495': {value: "This is a joke"}
    }

const jokeReducer = (state = jokeList, action) => {
    switch (action.type) {
        case 'ADD_JOKE': state[action.joke.body.id] = {value: action.joke.body.value}
            return state
        case 'ADD_JOKE_ERROR': console.log('add joke error', action.err)
            break
        default:
            return state
    }
}

export default jokeReducer