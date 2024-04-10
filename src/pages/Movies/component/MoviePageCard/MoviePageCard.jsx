import React from 'react'
import { Badge } from 'react-bootstrap'
import './MoviePageCard.style.css'

import { useMovieGenreQuery } from '../../../../hook/useMovieGenre'
import { useNavigate } from 'react-router-dom';
import MovieTag from '../../../../common/MovieTag/MovieTag';


const MoviePageCard = ({movie}) => {
    const {data:genreData} = useMovieGenreQuery();
    const navigate = useNavigate();
    const showGenre = (genreIdList) => {
        if(!genreData) return []
        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id ===id)
            return genreObj.name;
        })
        return genreNameList
    }
    const movieDetailPage = (id) => {
        navigate(`/movies/${id}`)
    }

  return (
    // eslint-disable-next-line
    <div className="movie-detail-card" onClick={() => movieDetailPage(movie?.id)} style={{backgroundImage:"url(" + `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ")"}}>
        <div className="overlay">
            <div className="movie-card-title">
                <h1>{movie.title}</h1>
                <h4>{movie?.release_date.substr(0, 4)}</h4>
                <div className="badge-wrap">
                {showGenre(movie.genre_ids).map((id, index) => 
                    <Badge bg ="danger" key={index}>{id}</Badge>
                )}
                </div>
                <div className="movie-card-sub">
                 {movie?.overview}
                </div>
            </div>    
            <MovieTag movie={movie}/>
        </div>
    </div>
  )
}

export default MoviePageCard