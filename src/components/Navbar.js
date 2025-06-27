import React from 'react'

const Navbar = ({ category, setCategory }) => {
    return (
        <div className='navbar-container'>
            <div>
                <p className={`justin-title ${category === 'slides' ? 'justin-selected' : ''}`} onClick={() => setCategory('slides')}>Justin Zhao</p>
            </div>

            <div className='navbar-icons hidedesktop'>
                <a href='mailto:justinzhao1999@gmail.com'><img alt='email' className='navbar-email-icon' src='./icons/envelope.png'></img></a>
                <a href='https://www.instagram.com/justinzzhao/'><img alt='instagram' className='navbar-ig-icon' src='./icons/instagram.png'></img></a>
            </div>

        </div>
    )
}

export default Navbar