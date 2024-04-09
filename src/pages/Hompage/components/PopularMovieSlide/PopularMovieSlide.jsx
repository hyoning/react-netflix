import React from 'react'
import { usePopularMoviesQuery } from '../../../../hook/usePopularMovies';
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import {responsive} from '../../../../constants/responsive';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner'

const PopularMovieSlide = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery();
    if(isLoading){
        return <LoadingSpinner />
        }
    if(isError){
        return <Alert variant='danger'>{error.message}</Alert>
    }
    return (
        <div className="popular-movies">
            <MovieSlider title="Popular Movies" movies={data.results} responsive={responsive}/>
        </div>
    )
}

export default PopularMovieSlide