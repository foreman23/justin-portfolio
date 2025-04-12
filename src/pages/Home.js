import React, { useState } from 'react'
import Personal from '../components/Personal'
import About from '../components/About'
import Photography from '../components/Photography'

const Home = () => {

    const [category, setCategory] = useState('personal')

    const changeCategory = (category) => {
        setCategory(category)
    }

    //     {/* Desktops */}
    //     <div className='category-container-lg'>
    //     <p onClick={() => changeCategory('personal')}>personal</p>
    //     <p onClick={() => changeCategory('work')}>work</p>
    //     <p onClick={() => changeCategory('photography')}>photography</p>
    //     <p onClick={() => changeCategory('about')}>about</p>
    // </div>

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
                        <p onClick={() => changeCategory('personal')}>personal</p>
                        <p onClick={() => changeCategory('work')}>work</p>
                        <p onClick={() => changeCategory('photography')}>photography</p>
                        <p onClick={() => changeCategory('about')}>about</p>
                        <div style={{ position: 'absolute', bottom: '0', top: 'auto', gap: '10px' }} className='navbar-icons'>
                            <img alt='email' className='navbar-email-icon' src='./icons/envelope.png'></img>
                            <img alt='instagram' className='navbar-ig-icon' src='./icons/instagram.png'></img>
                        </div>
                    </div>

                    <div>
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
                </div>

            </div>

        </div>
    )
}

export default Home