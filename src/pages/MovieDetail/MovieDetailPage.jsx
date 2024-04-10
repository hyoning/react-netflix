import React from 'react'
import { Alert } from 'bootstrap';
import { useParams } from 'react-router-dom'
import {useMovieDetailQuery} from '../../hook/useMovieDetail'
import MovieDetailInfo from './component/MovieDetailInfo/MovieDetailInfo';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';

const MovieDetailPage = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useMovieDetailQuery({ id });

  if(isLoading){
    return <LoadingSpinner/>
    }
  if(isError){
      return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
    <div>
        <MovieDetailInfo movie={movie} id={id}/>
    </div>
  )
}

export default MovieDetailPage