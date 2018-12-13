import React from 'react'
import { NavLink } from 'react-router-dom'


const PageLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Random Jokes</NavLink></li>
            <li><NavLink to='/'>Top Jokes</NavLink></li>
        </ul>
    )
}

export default PageLinks