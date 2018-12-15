import React from 'react'
import { connect } from 'react-redux'
import { saveJoke } from '../../store/actions/jokesActions'

const JokeDetails = (props) => {
    const { joke } = props
    saveJoke(props.match.params.id, joke)

    if (joke) {
        return (
            <div className="container section joke-details">
                <div className="card z-depth-1">
                    <div className="card-content">
                        <p>{joke.value}</p>
                        <p className="grey-text right">Category: {joke.category}</p>
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
    const jokes = state.jokes
    const joke = jokes ? jokes[id]: null
    return {
        joke: joke
    }
}


export default connect(mapStateToProps)(JokeDetails)