import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css'
import { useMovieGenreQuery } from '../../hook/useMovieGenre'
import { useNavigate } from 'react-router-dom';
import MovieTag from '../MovieTag/MovieTag';

const MovieCard = ({movie}) => {
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
    <div className="movie-card" onClick={() => movieDetailPage(movie?.id)} style={{backgroundImage:"url(" + `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ")"}}>
        <div className="overlay">
            <div className="movie-card-title">
                <h1>{movie.title}</h1>
                <div className="badge-wrap">
                {showGenre(movie.genre_ids).map((id, index) => 
                    <Badge bg ="danger" key={index}>{id}</Badge>
                )}
                </div>
            </div>    
            <MovieTag movie={movie}/>
        </div>
    </div>
  )
}

export default MovieCard