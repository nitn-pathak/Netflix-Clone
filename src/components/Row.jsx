import React from 'react'
import av from './images/av.jpg'
import './Row.css'

const Row = ({upcomig, title }) => {
  
         let upcomingurl = `https://image.tmdb.org/t/p/original/`; 

    return (
      

           <div className='bg-black'>
          
            {/* Row */}
             <div className='p-2  '>
             
        
        
          <h2 className='ml-10 p-2 font-bold  text-white text-2xl'>  {title}   </h2>
          
                
            
                {/* card */}            
          <div className=' content-div  z-10 h-[290px] items-center flex flex-row  gap-10 px-10   overflow-x-scroll overflow-y-hidden  '  >
                    
                        { 
                    
                        upcomig.map((card,i) => ( 

                           <img src={ upcomingurl+`${upcomig[i].poster_path}`} key={i} className='h-60 w-46 card' alt="" />
                             
                         ))
                        
                           
    
                     }  
                    
              </div>                  


            </div>

            </div>
        
  )
}

export default Row
