import React from 'react'
import { Link } from 'react-router-dom'
import PageLinks from './PageLinks'
import LogoImage from '../../logo.png'

const Navbar = () => {
    return (
        <nav className="nav-wrapper #00695c teal darken-3">
            <div className="container">
                <img style={{width: '70px', height:'60px', paddingRight:'5px'}} alt='png' src={LogoImage} />
                <Link to='/' className='brand-logo'>Chuck's Jokes</Link>
                <PageLinks />
            </div>
        </nav>
    )
}

export default Navbar