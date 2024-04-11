import React from 'react'
import './MovieDetailTabContent.style.css'
import {useMovieReviewQuery} from '../../../../hook/useMovieReview'
import {useMovieRecommendQuery} from '../../../../hook/useMovieRecommend'
import { useState } from 'react'
import MovieDetailReview from '../MovieDetailReview/MovieDetailReview'
import MovieDetailRelated from '../MovieDetailRecommend/MovieDetailRecommend'

const MovieDetailTabContent = ({id}) => {
    const {data:review} = useMovieReviewQuery({id});
    const {data:recommend} = useMovieRecommendQuery({id});
    const [reviewBtn, setReviewBtn ] = useState();
    const [recommendBtn, setRecommendBtn] = useState();

  return (
    <div className="movie-detail-tab-wrap">
        <div className="">
            <button onClick={() => setReviewBtn(!reviewBtn)}>Review</button>
            <button onClick={() => setRecommendBtn(!recommendBtn)}>Related Movies</button>
        </div>
        <MovieDetailReview review={review}/>
        <MovieDetailRelated recommend={recommend}/>
    </div>
  )
}

export default MovieDetailTabContent