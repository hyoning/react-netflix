import React from 'react'
import { Alert } from 'bootstrap';
import { useParams } from 'react-router-dom'
import {useMovieDetailQuery} from '../../hook/useMovieDetail'
import MovieDetailInfo from './component/MovieDetailInfo/MovieDetailInfo';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import './MovieDetailPage.style.css'
const MovieDetailPage = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useMovieDetailQuery({ id });
  console.log(movie);

  if(isLoading){
    return <LoadingSpinner/>
    }
  if(isError){
      return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
    <div> 
       {/* // eslint-disable-next-line */}
        <div className="movieDetailBg" style={{
  backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.backdrop_path})`,
}}>
        </div>
        <MovieDetailInfo movie={movie} id={id}/>
    </div>
  )
}

export default MovieDetailPage