import React from 'react'
import { Link } from 'react-router-dom'
import PageLinks from './PageLinks'


const Navbar = () => {
    return (
        <nav className="nav-wrapper" style={{ width: '1550px', height: '63px'}}>
            <div className="container">
                <Link to='/' className='brand-logo'>Chuck'sJokes</Link>
                <PageLinks />
            </div>
        </nav>
    )
}

export default Navbar