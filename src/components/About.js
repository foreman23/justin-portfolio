import React from 'react'

const About = () => {
    return (
        <div>

            {/* Mobile */}
            <div className='about-container hidedesktop'>
                <p>Born in 江门台山，based in Portland, OR</p>
                <p>Assistant filmer+editor at Wieden+Kennedy</p>
                <p>Available for freelance projects</p>
                <img alt='headshot' src='/headshot.webp'></img>
            </div>

            {/* Desktop */}
            <div className='about-container-lg hidemobile'>
                <div className='about-subcontainer-lg'>
                    <div className='about-text'>
                        <p>Born in 江门台山，based in Portland, OR</p>
                        <p>Assistant filmer+editor at Wieden+Kennedy</p>
                        <p>Available for freelance projects</p>
                    </div>
                    <img alt='headshot' id='about-headshot' src='/headshot.webp'></img>
                </div>
            </div>

        </div>
    )
}

export default About