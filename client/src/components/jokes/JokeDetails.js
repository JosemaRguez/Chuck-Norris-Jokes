import React from 'react'

const JokeDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section joke-details">
            <div className="card z-depth-1">
                <div className="card-content">
                    <span className="card-title">Joke title - {id}</span>
                    <p>THIS IS A JOKE</p>
                </div>
            </div>
        </div>
    )
}


export default JokeDetails