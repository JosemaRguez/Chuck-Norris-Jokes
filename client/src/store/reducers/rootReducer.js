import jokeReducer from './jokeReducer'
import topJokesReducer from './topJokesReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    jokes: jokeReducer,
    topJokes: topJokesReducer
})

export default rootReducer