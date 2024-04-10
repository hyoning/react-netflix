import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieDetailInfo.style.css'
import { useMovieInfoQuery } from '../../../../hook/useMovieInfo'
import MovieTag from '../../../../common/MovieTag/MovieTag'

const MovieDetailInfo = ({movie, id}) => {
  const {data: video} = useMovieInfoQuery({id});
  console.log(video)
  
  return (
    <div className="movie-detail-info">
        <div className='poster-banner'>
          {movie?.poster_path === null ? (
                <img
                  src={`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`}
                  className="poster-empty" alt="poster-empty"
                />
      
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                className="poster-image"
                alt="poster"
              /> 
            )}
        </div> 
        <div className="detail-cont-wrap">
          <div className="detail-bedge">
              {movie?.genres.map((item, index) => 
                  <Badge bg="danger" key={index}>{item.name}</Badge>
              )}
          </div>
          <div className="detail-title">{movie?.title}</div>
          <div className="detail-subtitle">{movie?.tagline}</div>
          <MovieTag movie={movie}/>
          <div className="detail-cont">{movie?.overview}</div>
        </div>
    </div>
  )
}

export default MovieDetailInfo