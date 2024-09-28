import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const selector = useSelector(state => state.Cart.cardsitem);

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <div className='fixed top-0 left-0 w-full bg-black text-white p-4 z-50'>
            <div className='flex flex-wrap justify-between items-center'>
                
                <div className='hidden md:flex justify-center gap-6 flex-grow'>
                    <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-lg' to="">
                        Home
                    </Link>
                    <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-lg' to="about">
                        About
                    </Link>
                    <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-lg' to="contact">
                        Contact
                    </Link>
                    <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-lg' to="service">
                        Service
                    </Link>
                </div>

                
                <button 
                    className="md:hidden bg-white text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105 shadow-lg font-bold"
                    onClick={toggleMenu}
                >
                    {isOpen ? (
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
                        <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                    </svg>
                    ) : (
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className=" text-black octicon octicon-three-bars Button-visual">
                            <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
                        </svg>
                    )}
                </button>

                
                <button className="bg-white text-black py-2 px-4 rounded-lg transition-transform transform hover:scale-105 shadow-lg font-bold text-lg">
                    Cart {selector.length}
                </button>
            </div>

            {isOpen && (
                <div className='md:hidden flex flex-col mt-2'>
                    <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-lg' to="">
                        Home
                    </Link>
                    <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-lg' to="about">
                        About
                    </Link>
                    <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-lg' to="contact">
                        Contact
                    </Link>
                    <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-lg' to="service">
                        Service
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Navbar;