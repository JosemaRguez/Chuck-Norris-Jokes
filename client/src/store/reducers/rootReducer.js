import jokeReducer from './jokeReducer'
import topJokesReducer from './topJokesReducer'
// import categoriesReducer from './categoriesReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    // categories: categoriesReducer,
    filterApplied: jokeReducer,
    jokes: jokeReducer,
    topJokes: topJokesReducer
})

export default rootReducer