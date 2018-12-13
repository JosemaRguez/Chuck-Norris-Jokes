import React from 'react'
import { Link } from 'react-router-dom'

const JokeList = ({ jokes }) => {
    
    return (
        
        <div className="jokes-list section">
            {jokes && jokes.map(joke => {
                return (
                    <Link to={"/joke/" + joke.id} key={joke.id}>
                        <div className="card z-depth-1" >
                            <div className="card-content grey-text text-darken-3 hoverable">
                                <p>{joke.value}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default JokeList