import React from 'react'
import { useUpComingMoviesQuery } from '../../../../hook/useUpComingMovie';
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import {responsive} from '../../../../constants/responsive';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner'

const UpComingMovieSlide = () => {
    const {data, isLoading, isError, error} = useUpComingMoviesQuery();
    if(isLoading){
        return <LoadingSpinner />
        }
    if(isError){
        return <Alert variant='danger'>{error.message}</Alert>
    }
    return (
        <div className="upcoming-movies">
            <MovieSlider title="UpComing Movies" movies={data.results} responsive={responsive}/>
        </div>
    )
}

export default UpComingMovieSlide