import React from 'react'
import { projects } from '../data/projects'

const Personal = (props) => {

    const projectIndex = props.projectIndex

    return (
        <div>

            {/* Mobile */}
            <div className='personal-container hidedesktop'>
                {projects.map((item, index) => (
                    <p key={`project_${index}`}>{item.title}</p>
                ))}
            </div>
            {/* Desktop */}
            <div className='personal-container-lg hidemobile'>
                {projectIndex !== undefined &&
                    <iframe src={projects[projectIndex].url} title={projects[projectIndex].title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                }
            </div>

        </div>
    )
}

export default Personal