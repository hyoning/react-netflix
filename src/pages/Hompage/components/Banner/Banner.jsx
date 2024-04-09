import { Alert } from 'bootstrap';
import React from 'react'
import { usePopularMoviesQuery } from '../../../../hook/usePopularMovies';
import './Banner.style.css'
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner'

const Banner = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery();
    if(isLoading){
      return <LoadingSpinner />
    }
    if(isError){
      return <Alert variant='danger'>{error.message}</Alert>
    }
  return (
    // eslint-disable-next-line
    <div className="banner" style={{backgroundImage:"url(" + `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].poster_path}` +")"}}>
       <div className="text-white banner-text-area">
          <h1>{data?.results[0].title}</h1>
          <p>{data?.results[0].overview}</p>
        </div>
    </div>
  )
}

export default Banner