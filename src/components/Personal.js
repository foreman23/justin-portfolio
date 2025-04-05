import React from 'react'

const Personal = () => {

    const projects = [
        {
            'title': 'reel',
        },
        {
            'title': 'video title',
        },
        {
            'title': 'video title',
        },
        {
            'title': 'video title',
        },
        {
            'title': 'video title',
        },
        {
            'title': 'video title',
        },
        {
            'title': 'video title',
        },
        {
            'title': 'video title',
        },
        {
            'title': 'video title',
        },
        {
            'title': 'video title',
        },
        {
            'title': 'video title',
        },
    ]

    return (
        <div className='personal-container'>
            {projects.map((item, index) => (
                <p key={`project_${index}`}>{item.title}</p>
            ))}
        </div>
    )
}

export default Personal