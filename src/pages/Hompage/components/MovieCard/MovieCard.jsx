import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css'
import imdb from '../../../../assets/images/imdb.png'
import { ReactComponent as LikeIcon } from "../../../../assets/images/like.svg";

const MovieCard = ({movie}) => {
  return (
    // eslint-disable-next-line
    <div className="movie-card" style={{backgroundImage:"url(" + `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ")"}}>
        <div className="overlay">
            <div className="movie-card-title">
                <h1>{movie.title}</h1>
                <div className="badge-wrap">
                {movie.genre_ids.map((id, index) => 
                    <Badge bg ="danger" key={index}>{id}</Badge>
                )}
                </div>
            </div>    
            <div className="movie-card-adult">
                <div className="movie-adult">
                    {movie.adult ? <span className="adult_19">19</span> : <span className="adult_all bd-success">ALL</span>}
                </div>
                <div className="movie-card-content">
                    <div className="movie-vote"><img src={imdb} alt="imdb" />{movie.vote_average}</div>
                    <div className="movie-popular"><LikeIcon/>{movie.popularity}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard