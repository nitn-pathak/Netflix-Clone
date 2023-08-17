import React from 'react'
import { Link } from 'react-router-dom'
import  netflixlogo from './images/netflixlogo.png'
import  search from './images/search.jpg'

const Header = () => {
    return (
      
        <div className='text-white '>

            
              {/* Navbar */}
            <nav className='flex flex-row items-center justify-between bg-black px-10  '>
            
                <div className='flex flex-row  items-center gap-10 ' >

                <img className=' h-20 w-32 '   src={netflixlogo} alt="" />

                 <Link to='/'> HOME </Link>
                 <Link to='tvshows'> TVSHOWS </Link>
                 <Link to='movies'> MOVIES</Link>
                    <Link to='new&popular'> NEW & POPULER </Link>

                  
                </div>
                
                  <div className='' >

                      <img src={ search} className=' h-7 w-7' alt="" />


                    </div>

                 
                
            </nav>


        </div>
        
  )
}

export default Header