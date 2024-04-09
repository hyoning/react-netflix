import React from 'react'
import { useTopMoviesQuery } from '../../../../hook/useTopMovies';
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import {responsive} from '../../../../constants/responsive';

const TopMovieSlide = () => {
    const {data, isLoading, isError, error} = useTopMoviesQuery();
    if(isLoading){
        return <h1>Loading...</h1>
        }
    if(isError){
        return <Alert variant='danger'>{error.message}</Alert>
    }
    return (
        <div className="top-movies">
            <MovieSlider title="Top Rated Movies" movies={data.results} responsive={responsive}/>
        </div>
    )
}

export default TopMovieSlide