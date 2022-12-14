import React from 'react'

export default function MovieBox({ list }) {
  return (
    <div className='movie-box'>
      <div className="overlay">
              <img className='img-card' src={`https://image.tmdb.org/t/p/original/${list && list.poster_path}`} alt={`${list && list.title}'s Poster`} />
              {/* initial state is undefined, so when list is available after loading from api then display */}
      </div>
    </div>
  )
}
