import React from 'react'
import Banner from './Banner'
import Row from './Row'
import axois from "axios";
import { useEffect,useState } from 'react';




const Home = () => {

    let api_key = "1d989f5051a5b637eb9394e8bb0b169d"; 
    let upcoming = "upcoming";
    let populr = "popular";
    let nowplaying = "now_playing";
    let tv = "tv";
        
  
    //  let card = [
        
    //      {
    //      i: "https://lumiere-a.akamaihd.net/v1/images/image_174b2bb6.jpeg?region=0%2C0%2C1400%2C2100"
    //      },
    //          {
    //      i: "https://m.media-amazon.com/images/I/81F5PF9oHhL._SY550_.jpg"
    //      }
    //      , {
    //          i:"https://rukminim2.flixcart.com/image/850/1000/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=90"
    //      }, {
    //          i:"https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5"
    //      }, {
    //          i:"https://www.tallengestore.com/cdn/shop/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_66c87e56-24a2-4135-b709-a6b98a7f7bce_large.jpg?v=1577693664"
    //      }, {
    //          i:"https://images.indianexpress.com/2021/01/master.jpg"
    //      }
    //      , {
    //          i:"https://www.tallengestore.com/cdn/shop/products/Pathan-ShahRukhKhan-BollywoodHindiMoviePoster_7604af0e-9691-4b4d-83b5-5ac53eb3c8e1.jpg?v=1675251729"
             
    //      }, {
    //          i:"https://www.tallengestore.com/cdn/shop/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7.jpg?v=1582781089"
    //      }
    //      , {
    //          i:"https://i5.walmartimages.com/asr/deaf2e49-0946-4bae-996a-befc2d602ba1.13a380cc3fd906e3d918e67b593e138a.jpeg"
    //      },
    //      {
    //          i:"https://themarketingbirds.com/wp-content/uploads/2021/04/Lemony-Snickets-Series-of-Unfortunate-Events.jpg"
    //      }
    //         ,{
    //          i:"https://i.etsystatic.com/18242346/r/il/fd61f8/2933715225/il_570xN.2933715225_a913.jpg"
    //        },
    //        {
    //          i:"https://i0.wp.com/batman-news.com/wp-content/uploads/2023/04/The-Flash-Movie-Poster-International-01.jpeg?fit=1382%2C2048&quality=80&strip=info&ssl=1"

    //         }



     
    //  ];

    
    let[upcomig,Setupcomming] = useState([]);
    let[popular,Setpopular] = useState([]);  
    let[nowplayingMovie, SetnowplayingMovie] = useState([]);
    let[tvshows, Settvshows] = useState([]);
    
    
    useEffect(() => { 
       
            let fetchUpcoming = async () => { 
             let { data:{results} } = await axois.get(`https://api.themoviedb.org/3/movie/${upcoming}?api_key=${api_key}`);
            //   console.log(results);
              Setupcomming(results);         
               }  
        
         let fetchPopular = async () => { 
             let { data:{results} } = await axois.get(`https://api.themoviedb.org/3/movie/${populr}?api_key=${api_key}`);
            //   console.log(results);
              Setpopular(results);         
               }  
        
          let fetchnowplaying = async () => { 
             let { data:{results} } = await axois.get(`https://api.themoviedb.org/3/movie/${nowplaying}?api_key=${api_key}`);
             //   console.log(results);
              SetnowplayingMovie(results);         
               }  
        
          let fetchTvshows = async () => { 
             let { data:{results} } = await axois.get(`https://api.themoviedb.org/3/${tv}/popular?api_key=1d989f5051a5b637eb9394e8bb0b169d`);
             //   console.log(results);
              Settvshows(results);         
               }  
        
        
        
        
        fetchUpcoming()
        fetchPopular()
        fetchnowplaying()
        fetchTvshows()
        
        },[])
      
    

    return (
        
        <div>
                
             <Banner upcomig={upcomig} /> 
                       
             
             <Row title={"Upcoming Movies"} upcomig={upcomig} />
              <Row title={"Popular"} upcomig={popular} />
              <Row title={"Now Playing"}   upcomig={nowplayingMovie} />
              <Row title={"Tv Shows"}   upcomig={tvshows} />
             
            
        </div>
 
    )
}

export default Home

   

