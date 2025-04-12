import React from 'react'

const Photography = () => {

    const projects = [
        {
            'title': 'Photo project name',
        },
        {
            'title': 'Photo project name',
        },
        {
            'title': 'Photo project name',
        }
    ]

    return (
        <div className='photography-container'>
            {projects.map((item, index) => (
                <p key={`project_${index}`}>{item.title}</p>
            ))}
        </div>
    )
}

export default Photography