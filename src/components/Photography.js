import React from 'react'
import { photos } from '../data/photos'

const Photography = (props) => {

    const projectIndex = props.projectIndex
    
    return (
        <div>

            {/* Mobile */}
            <div className='photography-container hidedesktop'>
                {photos.map((item, index) => (
                    <p key={`project_${index}`}>{item.title}</p>
                ))}
            </div>
            {/* Desktop */}
            <div className='photo-container-lg hidemobile'>
                {projectIndex !== undefined &&
                    <img alt={`photoproject_${projectIndex}_img`} src={photos[projectIndex].url}></img>
                }
            </div>

        </div>
    )
}

export default Photography