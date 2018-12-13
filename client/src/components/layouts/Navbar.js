import React from 'react'
import { Link } from 'react-router-dom'
import PageLinks from './PageLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper #00695c teal darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>Chuck's Jokes</Link>
                <PageLinks />
            </div>
        </nav>
    )
}

export default Navbar