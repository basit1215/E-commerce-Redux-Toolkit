// // import React from 'react'
// // import {  useSelector } from 'react-redux';


// // const Navbar = () => {



// //   return (
// //   <>
// //   <h1>Navbar</h1>
// //   <p>cart {selector.length}</p>
// //   </>

// //   )
// // }

// // export default Navbar


// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux';

// const Navbar = () => {

//     const selector = useSelector(state => state.Cart.cardsitem);

//     return (

//         <div className='fixed top-0 left-0 w-full bg-black text-white p-4 z-50'>
//             <div className='flex flex-wrap justify-center gap-6 items-center'>
          
//                     <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-xl sm:text-lg md:text-base lg:text-sm' to="">Home</Link>
//                     <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-xl sm:text-lg md:text-base lg:text-sm' to="about">About</Link>
//                     <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-xl sm:text-lg md:text-base lg:text-sm' to="contact">Contact</Link>
//                     <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-xl sm:text-lg md:text-base lg:text-sm' to="service">Service</Link>
                
//                     <button className="bg-blue-600 text-white py-2  px-4  rounded-lg  transition-transform transform hover:scale-105 hover:bg-blue-500 shadow-lg  font-bold text-xl sm:text-lg md:text-base lg:text-sm">
//                         Cart {selector.length}
//                     </button>
                
//             </div>
//         </div>

//     )
// }

// export default Navbar












import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const selector = useSelector(state => state.Cart.cardsitem);

    return (
        <div className='fixed top-0 left-0 w-full bg-black text-white p-4 z-50'>
            <div className='flex justify-between items-center'>
                {/* Left Section - Links */}
                <div className='flex justify-center gap-6 flex-grow'>
                    <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-xl sm:text-lg md:text-base lg:text-sm' to="">
                        Home
                    </Link>
                    <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-xl sm:text-lg md:text-base lg:text-sm' to="about">
                        About
                    </Link>
                    <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-xl sm:text-lg md:text-base lg:text-sm' to="contact">
                        Contact
                    </Link>
                    <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-xl sm:text-lg md:text-base lg:text-sm' to="service">
                        Service
                    </Link>
                </div>
                
                {/* Right Section - Cart Button */}
                <button className="bg-white mr-4 text-black py-2 px-4 rounded-lg transition-transform transform hover:scale-105 shadow-lg font-bold text-xl sm:text-lg md:text-base lg:text-sm">
                    Cart {selector.length}
                </button>
            </div>
        </div>
    )
}

export default Navbar;
