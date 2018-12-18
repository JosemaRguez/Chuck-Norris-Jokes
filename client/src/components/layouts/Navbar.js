import React from 'react'
import { Link } from 'react-router-dom'
import PageLinks from './PageLinks'
import LogoImage from '../../images/logo.png'

const Navbar = () => {
    return (
        <nav className="nav-wrapper #00695c teal darken-3" style={{maxWidth:'100%', height: '63px'}}>
            <div className="container">
                <img style={{width: '70px', height:'65px', paddingRight:'5px'}} alt='png' src={LogoImage} />
                <Link to='/' className='brand-logo'>Chuck's Jokes</Link>
                <PageLinks />
            </div>
        </nav>
    )
}

export default Navbar