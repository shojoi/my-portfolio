import React from 'react'
import cx from 'classnames';


import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header className='bg-red-700 text-grey'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink to="/"

                        className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-white text-2xl font-bold cursive tracking-widest text-white"
                    >Shobha Joshi
                    </NavLink>
                    <NavLink to="/post"
                        className={({ isActive }) =>

                            cx('inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800', {
                                'bg-red-900': isActive
                            })
                        }
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project"
                        className={({ isActive }) =>

                            cx('inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800', {
                                'bg-red-900': isActive
                            })
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>

                            cx('inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800', {
                                'bg-red-900': isActive
                            })
                        }
                    >
                        About Me
                    </NavLink>
                </nav>
                <div>

                </div>
            </div>
        </header>
    )
}

export default Navbar