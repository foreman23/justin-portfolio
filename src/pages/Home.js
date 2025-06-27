import React, { useState } from 'react'
import Personal from '../components/Personal'
import About from '../components/About'
import Photography from '../components/Photography'
import { projects } from '../data/projects'
import { photos } from '../data/photos'
import { works } from '../data/works'
import Work from '../components/Work'
import Slides from '../components/Slides'

const Home = ({ category, setCategory }) => {

    const [currProject, setCurrProject] = useState(0);
    const [currWorkProject, setCurrWorkProject] = useState(0);
    const [currPhotoProject, setCurrPhotoProject] = useState(0);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);

    const changeCategory = (newCategory) => {
        if (category !== newCategory && (category === 'personal' || category === 'work' || category === 'photography')) {
            setIsAnimatingOut(true);
            setTimeout(() => {
                setCategory(newCategory);
                setIsAnimatingOut(false);
            }, 200);
        } else {
            setCategory(newCategory);
        }
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
                        <p className={`justin-title ${category === 'slides' ? 'justin-selected' : ''}`} onClick={() => setCategory('slides')}>Justin Zhao</p>
                        <p className={`category-title dropdown-title ${category === 'personal' ? 'category-selected' : ''}`} onClick={() => changeCategory('personal')}>personal</p>
                        {category === 'personal' &&
                            <ul className={`personal-list${isAnimatingOut ? ' fade-out' : ''}`}>
                                {projects.map((item, index) => (
                                    <li className={currProject === index ? 'project-selected' : 'project-unselected'} onClick={() => selectPersonalProject(index)} style={{ listStyle: 'none' }} key={`project_${index}`}>{item.title}</li>
                                ))}
                            </ul>
                        }
                        <p className={`category-title dropdown-title ${category === 'work' ? 'category-selected' : ''}`} onClick={() => changeCategory('work')}>work</p>
                        {category === 'work' &&
                            <ul className={`personal-list${isAnimatingOut ? ' fade-out' : ''}`}>
                                {works.map((item, index) => (
                                    <li className={currWorkProject === index ? 'project-selected' : 'project-unselected'} onClick={() => selectWorkProject(index)} style={{ listStyle: 'none' }} key={`project_${index}`}>{item.title}</li>
                                ))}
                            </ul>
                        }
                        <p className={`category-title dropdown-title ${category === 'photography' ? 'category-selected' : ''}`} onClick={() => changeCategory('photography')}>photography</p>
                        {category === 'photography' &&
                            <ul className={`personal-list${isAnimatingOut ? ' fade-out' : ''}`}>
                                {photos.map((item, index) => (
                                    <li className={currPhotoProject === index ? 'project-selected' : 'project-unselected'} onClick={() => selectPhotoProject(index)} style={{ listStyle: 'none' }} key={`project_${index}`}>{item.title}</li>
                                ))}
                            </ul>
                        }
                        <p className={`category-title ${category === 'about' ? 'category-selected' : ''}`} onClick={() => changeCategory('about')}>about</p>
                        <div className='navbar-icons-lg'>
                            <a href='mailto:justinzhao1999@gmail.com'><img alt='email' className='navbar-email-icon' src='./icons/envelope.png'></img></a>
                            <a href='https://www.instagram.com/justinzzhao/'><img alt='instagram' className='navbar-ig-icon' src='./icons/instagram.png'></img></a>
                        </div>
                    </div>

                    <div>
                        {category === 'slides' &&
                            <Slides projectIndex={2}></Slides>
                        }
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