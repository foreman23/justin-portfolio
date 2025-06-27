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
                        <p className='about-line-1'>Born in <span className='accent-text'>江门台山</span>，based in <span className='accent-text'>Portland, OR</span></p>
                        <p className='about-line-2'>Assistant filmer+editor at <span className='accent-text'>Wieden+Kennedy</span></p>
                        <p className='about-line-3'>Available for <a href='mailto:justinzhao1999@gmail.com' className='accent-text goofy-hover'>freelance projects</a></p>
                    </div>
                    <img alt='headshot' id='about-headshot' className='headshot-hover' src='/headshot.webp'></img>
                </div>
            </div>

        </div>
    )
}

export default About