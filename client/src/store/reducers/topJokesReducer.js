const topJokes = []


const topJokesReducter = (state = topJokes, action) => {
    switch (action.type) {
        case 'GET_TOP': var newTopJokes = Object.values(JSON.parse(action.topJokes)).sort(function(a,b){ return b.clicks-a.clicks})
        //Get first N elements of the top
        state.topJokes = newTopJokes.slice(0, action.numTop)
        return state.topJokes
        case 'TOP_JOKE_ERROR': console.log('Error getting top jokes', action.err)
        break
        default:
            return state
    }
}

export default topJokesReducter