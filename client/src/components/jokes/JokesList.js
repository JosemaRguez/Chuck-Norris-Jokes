import React from 'react'
import { Link } from 'react-router-dom'

const JokeList = ({ jokes, category }) => {
    console.log(category)

    return (
        <div className="jokes-list section">
            {jokes && Object.keys(jokes).map(joke => {
                if (jokes[joke].category === category) {
                    return (
                        <Link to={"/joke/" + joke} key={joke}>
                            <div className="card z-depth-1" >
                                <div className="card-content grey-text text-darken-3 hoverable">
                                    <p className="black-text">{jokes[joke].value}</p>
                                    <p className="grey-text right">Category: {jokes[joke].category}</p>
                                </div>
                            </div>
                        </Link>
                    )
                }
                else if (category === '--Select--') {
                    return (
                        <Link to={"/joke/" + joke} key={joke}>
                            <div className="card z-depth-1" >
                                <div className="card-content grey-text text-darken-3 hoverable">
                                    <p className="black-text">{jokes[joke].value}</p>
                                    <p className="grey-text right">Category: {jokes[joke].category}</p>
                                </div>
                            </div>
                        </Link>
                    )
                }
                else {
                    return
                }
            }
            )}
        </div>
    )
}

export default JokeList