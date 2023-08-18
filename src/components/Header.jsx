import React from 'react'
import { Link } from 'react-router-dom'
import  netflixlogo from './images/netflixlogo.png'
import  search from './images/search.jpg'

const Header = () => {
    return (
      
      <div className='text-white   '>

            
              {/* Navbar */}
            <nav className='flex flex-row items-center justify-between px-2 bg-black w-[100%] '>
            
                <div className='flex flex-row  items-center  gap-10  ' >

                <img className='h-14 w-28  '   src={netflixlogo} alt="" />

                   <div className='hidden lg:block  ' >
                   <Link className=' mr-5' to='/'> HOME </Link>
                  <Link className=' mr-5' to='tvshows'> TVSHOWS </Link>
                  <Link className=' mr-5' to='movies'> MOVIES</Link>
                  <Link className=' mr-5' to='new&popular'> NEW & POPULER </Link>
                 </div>

                  
                </div>
                
                  <div className='flex gap-2'>

                      <img src={ search} className=' h-5 w-5' alt="" />
                        {/* <img src={ search} className=' h-7 w-7' alt="" />
                      <img src={ search} className=' h-7 w-7' alt="" />
  */}

                    </div>

                 
                
            </nav>


        </div>
        
  )
}

export default Header