import jokeReducer from './jokeReducer'
import scrollReducer from './scrollReducer'
import topJokesReducer from './topJokesReducer'
import categoriesReducer from './categoriesReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    scrollLastSize: scrollReducer,
    categories: categoriesReducer,
    jokes: jokeReducer,
    topJokes: topJokesReducer
})

export default rootReducer