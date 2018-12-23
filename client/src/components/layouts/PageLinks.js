import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/style.css'

const PageLinks = () => {
    return (
        <ul className="right">
            <li className="navbar-link"><NavLink to='/'>Random Jokes</NavLink></li>
            <li className="navbar-link"><NavLink to='/topjokes/5'>Top Jokes</NavLink></li>
        </ul>
    )
}

export default PageLinks