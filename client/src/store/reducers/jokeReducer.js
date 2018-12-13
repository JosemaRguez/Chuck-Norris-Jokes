const initState = {
    jokeList: [
    {id: 1, value: "This is a joke"},
    {id: 2, value: "You are a bitch"},
    {id: 3, value: "Oh yes you are"},
    {id: 4, value: "Dummy data here"},
    {id: 5, value: "Yes it is dummy data"},
    {id: 6, value: "Datafonoooooooooo"},
    {id: 7, value: "This is a joke"},
    {id: 8, value: "This is a joke"},
    {id: 9, value: "This is a joke"},
]}

const jokeReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_JOKE': state.jokeList.push({id: action.joke.body.id, value: action.joke.body.value})
        return state
        case 'ADD_JOKE_ERROR': console.log('add joke error', action.err)
        break
        default: 
        return state
    }
}

export default jokeReducer