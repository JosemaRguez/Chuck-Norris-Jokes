const initState = {
    jokeList: [{id: 1, value: "This is a joke"},
    {id: 2, value: "This is a joke"},
    {id: 3, value: "This is a joke"},
    {id: 4, value: "This is a joke"},
    {id: 5, value: "This is a joke"},
    {id: 6, value: "This is a joke"},
]}

const jokeReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_JOKE': 
        state.jokeList.push({id: action.joke.body.id, value: action.joke.body.value})
        return state
        case 'ADD_JOKE_ERROR': console.log('add joke error', action.err)
        break
        default: 
        return state
    }
}

export default jokeReducer