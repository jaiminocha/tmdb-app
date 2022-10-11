import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function CarouselBox({ list }) {
  return (
    <div>
      <Carousel className='cara-box'>
      {
        list.map((movie)=>{
          return (
            <div key={`${movie && movie.key}`}>
              <img src={`https://image.tmdb.org/t/p/original/${ movie && movie.backdrop_path }`} alt={`${ movie && movie.title }'s Poster`} />
              {/* <p className='legend'>{ movie && movie.title }</p> */}
              <p className="legend">{ movie && movie.overview }</p>
            </div>
          )
        })
      }
      </Carousel>
    </div>
  )
}
