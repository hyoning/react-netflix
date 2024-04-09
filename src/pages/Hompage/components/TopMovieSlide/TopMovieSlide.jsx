import React from 'react'
import { useTopMoviesQuery } from '../../../../hook/useTopMovies';
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import {responsive} from '../../../../constants/responsive';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner'

const TopMovieSlide = () => {
    const {data, isLoading, isError, error} = useTopMoviesQuery();
    if(isLoading){
        return  <LoadingSpinner />
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