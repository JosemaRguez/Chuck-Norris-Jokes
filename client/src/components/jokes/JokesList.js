import React from 'react'

const JokeList = ({ jokes }) => {

    return (
        <div className="jokes-list section">
            {jokes && jokes.map(joke => {
                return (
                    <div className="card z-depth-1" key={joke.id}>
                        <div className="card-content grey-text text-darken-3 hoverable">
                            <p>{joke.value}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default JokeList