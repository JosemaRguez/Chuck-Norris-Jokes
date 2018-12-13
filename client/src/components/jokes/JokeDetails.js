import React from 'react'
import { connect } from 'react-redux'

const JokeDetails = (props) => {
    const { joke } = props

    if (joke) {
        return(<div className="container section joke-details">
            <div className="card z-depth-1">
                <div className="card-content">
                    <p>{joke.value}</p>
                </div>
            </div>
        </div>
        )
    }
    else{
        return (
            <div className="container center">
                <p>Loading joke...</p>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    console.log(id)
    const jokes = state.jokes.jokeList
    console.log({jokes})
    const joke = jokes ? jokes[id] : null
    console.log(jokes)
    return {
        joke: joke
    }
}
export default connect(mapStateToProps)(JokeDetails)