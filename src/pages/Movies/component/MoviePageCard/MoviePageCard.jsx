import React from 'react'
import { Badge } from 'react-bootstrap'
import './MoviePageCard.style.css'
import imdb from '../../../../assets/images/imdb.png'
import { ReactComponent as LikeIcon } from "../../../../assets/images/like.svg";
import { useMovieGenreQuery } from '../../../../hook/useMoveGenre'


const MoviePageCard = ({movie}) => {
    const {data:genreData} = useMovieGenreQuery();
    const showGenre = (genreIdList) => {
        if(!genreData) return []
        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id ===id)
            return genreObj.name;
        })
        return genreNameList
    }

  return (
    // eslint-disable-next-line
    <div className="movie-detail-card" style={{backgroundImage:"url(" + `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ")"}}>
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
            <div className="movie-card-info-wrap">
                    <div className="movie-adult">
                            {movie.adult ? <span className="adult_19">19</span> : <span className="adult_all bd-success">ALL</span>}
                    </div>       
                    <div className="movie-vote"><img src={imdb} alt="imdb" />{movie.vote_average}</div>
                    <div className="movie-popular"><LikeIcon/>{movie.popularity}</div>
         
            </div>
        </div>
    </div>
  )
}

export default MoviePageCard