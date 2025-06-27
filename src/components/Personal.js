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
                    <div className='video-wrapper'>
                        <iframe src={projects[projectIndex].url} title={projects[projectIndex].title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div className='video-overlay'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}

export default Personal