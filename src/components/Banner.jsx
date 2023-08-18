import React from 'react'
import netflix from './images/netflix.jpg'
import info from '../components/images/info.png'
import play from '../components/images/play.png'
import './Banner.css'

const Banner = ({upcomig}) => {
   
  let upcomingurl = `https://image.tmdb.org/t/p/original/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg`;  
  
 
     

  let data;
  let title;
  let description;
  let relesedate;

    for (let i = 0; i < upcomig.length; i++){
        
      data = upcomig[0].backdrop_path;
      title = upcomig[0].original_title;
      description = upcomig[0].overview;
      relesedate = upcomig[0].release_date;  

      }

  let url = `https://image.tmdb.org/t/p/${data}`;

  let Movie_title =`${title}`; 
  let Movie_description = `${description}`;
  let Movie_relesedate  =`${relesedate}`; 
 
 

    return (
            <div className=' flex flex-row bg '>

             
          {/* <div className=' bg-black w-[100%]  flex flex-row justify-center items-center  text-white ' >
           
          <div className='bg-black w-[500px] h-[300px] flex flex-col justify-center '>
            
            <h1 className='text-5xl font-bold' > Transformer Rise of Beast </h1>
            
            <div>
            <button className='bg-blue-300 text-2xl'> Play </button>
             <button className='bg-red-300 text-2xl '> My List + </button>
              </div>
            
              <p className='text-xl ' >
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. <br /> Provident repellat inventore quidem maxi
              </p>

              </div>
            
          </div>  
                     */}
            
        
        {/* Banner */}
{/* 
        style={{ backgroundImage:`url( ${`https://image.tmdb.org/t/p/w500/${data}`} )` }} */}
        
        <div className=' bg-black opacity-90   banner flex flex-row justify-start h-[600px] w-[100%]  bg-top  bg-cover  bg-no-repeat'  style={{ backgroundImage:`url( ${`https://image.tmdb.org/t/p/original/${data}`} )` }}  >

          
          <div className=' text-white  flex flex-col flex-wrap justify-center items-start h-[80vh] w-[500px] p-10  ' >
            
            <div className=' h-[100vh] flex flex-col flex-wrap justify-start gap-6 ' >


              <h1 className='text-6xl font-bold' > {Movie_title} </h1>

              <h2 className='text-xl font-bold' >Trending in movies | Released- {Movie_relesedate} </h2>

              
              <p className='text-base flex-wrap  ' > { Movie_description}</p>

              <div className=' flex flex-row gap-4  ' >
                <button className=' bg-slate-50 text-black h-10 w-24 gap-1 text-xl flex justify-center items-center rounded-sm'> <img src={play} className='h-7' alt="" />  Play</button>
                <button className=' bg-slate-600 text-white h-10 w-32 gap-1 font-bold text-lg flex justify-center items-center rounded-sm'> <img src={info} className='h-7' alt="" />   More Info</button>
               </div>
               

            </div>
          
          </div>



        </div>


        </div>
        
  )
}

export default Banner  