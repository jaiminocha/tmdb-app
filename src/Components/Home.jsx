import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import CarouselBox from './CarouselBox.jsx';
import MovieBox from './MovieBox.jsx';

function Home() {

  // const link = 'https://api.themoviedb.org/3/movie/top_rated?api_key=ebb7d2b40b72d161f0904b080391f67d&language=en-US&page=1';
  const [list, setList] = useState([]);
  useEffect(()=>{
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=ebb7d2b40b72d161f0904b080391f67d&language=en-US&page=1`)
      .then(({data})=>{
        // console.log(data.results);
        setList(data.results);
      })
      .catch((error)=>{
        console.log(error);
      })
  }, [])



  return (
    <div className='home-div'>
        <div>
          
          <CarouselBox list={ list } />
             
        </div>
        <div className="container-div">
          <div className="grid-div">
            {
              list && list.map((movie) => {
                return (
                  <MovieBox key={ movie.id } list={ movie } /> 
                )
              })
            }
          </div>
        </div>
              
    </div>
  )
}

export default Home;
