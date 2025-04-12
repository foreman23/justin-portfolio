import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <p>Justin Zhao</p>
            </div>

            <div className='navbar-icons hidedesktop'>
                <img alt='email' className='navbar-email-icon' src='./icons/envelope.png'></img>
                <img alt='instagram' className='navbar-ig-icon' src='./icons/instagram.png'></img>
            </div>

        </div>
    )
}

export default Navbar