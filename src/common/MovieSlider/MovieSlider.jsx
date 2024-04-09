import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './MovieSlider.style.css'

const MovieSlider = ({title, movies, responsive}) => {
  return (
    <div className='movieSlider-wrap'>
        <h3>{title}</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="movie-slider p-1"
                containerClass='carousel-container'
                responsive={responsive}
                >
                {movies.map((movie, index) => 
                    (<MovieCard movie={movie} key={index} />
                ))}
            </Carousel>
    </div>
  )
}

export default MovieSlider