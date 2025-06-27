import React from 'react'
import { works } from '../data/works'

const Work = (props) => {

    const projectIndex = props.projectIndex

    return (
        <div>

            {/* Mobile */}
            <div className='personal-container hidedesktop'>
                {works.map((item, index) => (
                    <p key={`project_${index}`}>{item.title}</p>
                ))}
            </div>
            {/* Desktop */}
            <div className='photo-container-lg hidemobile'>
                {projectIndex !== undefined &&
                    <img alt={`workproject${projectIndex}_img`} src={works[projectIndex].url}></img>
                }
            </div>

        </div>
    )
}

export default Work