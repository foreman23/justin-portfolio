import React, { useState } from 'react'
import Personal from '../components/Personal'
import About from '../components/About'
import Photography from '../components/Photography'
import { projects } from '../data/projects'
import { photos } from '../data/photos'
import { works } from '../data/works'
import Work from '../components/Work'

const Home = () => {

    const [category, setCategory] = useState('personal');
    const [currProject, setCurrProject] = useState(0);
    const [currWorkProject, setCurrWorkProject] = useState(0);
    const [currPhotoProject, setCurrPhotoProject] = useState(0);

    const changeCategory = (category) => {
        setCategory(category)
    }

    const selectPersonalProject = (index) => {
        setCurrProject(index)
    }

    const selectWorkProject = (index) => {
        setCurrWorkProject(index)
    }

    const selectPhotoProject = (index) => {
        setCurrPhotoProject(index)
    }


    return (
        <div>

            {/* Mobile devices */}
            <div className='hidedesktop'>
                <div className='category-container'>
                    <p onClick={() => changeCategory('personal')}>personal</p>
                    <p className='category-divider'>|</p>
                    <p onClick={() => changeCategory('work')}>work</p>
                    <p className='category-divider'>|</p>
                    <p onClick={() => changeCategory('photography')}>photography</p>
                    <p className='category-divider'>|</p>
                    <p onClick={() => changeCategory('about')}>about</p>
                </div>

                {category === 'personal' &&
                    <Personal></Personal>
                }
                {category === 'about' &&
                    <About></About>
                }
                {category === 'photography' &&
                    <Photography></Photography>
                }
            </div>

            {/* Desktop devices */}
            <div className='hidemobile'>

                <div style={{ display: 'flex' }}>
                    <div className='category-container-lg'>
                        <p className={`category-title dropdown-title ${category === 'personal' ? 'category-selected' : ''}`} onClick={() => changeCategory('personal')}>personal</p>
                        {category === 'personal' &&
                            <ul className='personal-list'>
                                {projects.map((item, index) => (
                                    <li className={currProject === index ? 'project-selected' : 'project-unselected'} onClick={() => selectPersonalProject(index)} style={{ listStyle: 'none' }} key={`project_${index}`}>{item.title}</li>
                                ))}
                            </ul>
                        }
                        <p className={`category-title dropdown-title ${category === 'work' ? 'category-selected' : ''}`} onClick={() => changeCategory('work')}>work</p>
                        {category === 'work' &&
                            <ul className='personal-list'>
                                {works.map((item, index) => (
                                    <li className={currWorkProject === index ? 'project-selected' : 'project-unselected'} onClick={() => selectWorkProject(index)} style={{ listStyle: 'none' }} key={`project_${index}`}>{item.title}</li>
                                ))}
                            </ul>
                        }
                        <p className={`category-title dropdown-title ${category === 'photography' ? 'category-selected' : ''}`} onClick={() => changeCategory('photography')}>photography</p>
                        {category === 'photography' &&
                            <ul className='personal-list'>
                                {photos.map((item, index) => (
                                    <li className={currPhotoProject === index ? 'project-selected' : 'project-unselected'} onClick={() => selectPhotoProject(index)} style={{ listStyle: 'none' }} key={`project_${index}`}>{item.title}</li>
                                ))}
                            </ul>
                        }
                        <p className={`category-title ${category === 'about' ? 'category-selected' : ''}`} onClick={() => changeCategory('about')}>about</p>
                        <div className='navbar-icons-lg'>
                            <img alt='email' className='navbar-email-icon' src='./icons/envelope.png'></img>
                            <img alt='instagram' className='navbar-ig-icon' src='./icons/instagram.png'></img>
                        </div>
                    </div>

                    <div>
                        {category === 'personal' &&
                            <Personal projectIndex={currProject}></Personal>
                        }
                        {category === 'work' &&
                            <Work projectIndex={currWorkProject}></Work>
                        }
                        {category === 'about' &&
                            <About></About>
                        }
                        {category === 'photography' &&
                            <Photography projectIndex={currPhotoProject}></Photography>
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home