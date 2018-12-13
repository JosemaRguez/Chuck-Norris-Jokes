import React from 'react'
import { connect } from 'react-redux'

const JokeDetails = (props) => {
    const { joke } = props
    console.log(props)
    if (joke) {
        return (
            <div className="container section joke-details">
                <div className="card z-depth-1">
                    <div className="card-content">
                        <p>{joke.value}</p>
                    </div>
                </div>
                <button className="btn waves-effect #80cbc4 teal lighten-3" onClick={() => props.history.goBack()} type="submit" name="action">Back
                </button>
            </div>


        )
    }
    else {
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
    const joke = jokes ? jokes[id] : null
    return {
        joke: joke
    }
}
export default connect(mapStateToProps)(JokeDetails)