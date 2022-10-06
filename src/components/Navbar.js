import React from 'react'
import cx from 'classnames';


import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';

function Navbar() {
    return (
        <header className='bg-green-800 text-grey'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink to="/"

                        className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-white text-2xl font-bold cursive tracking-widest text-white"
                    >Shobha Joshi
                    </NavLink>
                    <NavLink to="/post"
                        className={({ isActive }) =>

                            cx('inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-800', {
                                'bg-red-600': isActive
                            })
                        }
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project"
                        className={({ isActive }) =>

                            cx('inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-800', {
                                'bg-red-600': isActive
                            })
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>

                            cx('inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-800', {
                                'bg-red-600': isActive
                            })
                        }
                    >
                        About Me
                    </NavLink>
                </nav>
                <div className='inline-flex py-3 px-3 my-6'>
                    <SocialIcon url="https://linkedin.com/in/shobha-joshi-a3583014" className="mr-4" target="_blank" fgColor='#fff' style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}

export default Navbar