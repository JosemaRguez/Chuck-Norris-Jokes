import React from 'react'
import { Link } from 'react-router-dom'
import PageLinks from './PageLinks'
import '../../styles/style.css'

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to='/' className='brand-logo'>Chuck'sJokes</Link>
                <PageLinks />
            </div>
        </nav>
    )
}

export default Navbar