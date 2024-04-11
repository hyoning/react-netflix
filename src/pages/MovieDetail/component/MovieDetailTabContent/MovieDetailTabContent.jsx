import React from 'react'
import './MovieDetailTabContent.style.css'
import {useMovieReviewQuery} from '../../../../hook/useMovieReview'
import {useMovieRecommendQuery} from '../../../../hook/useMovieRecommend'
import MovieDetailReview from '../MovieDetailReview/MovieDetailReview'
import MovieDetailRelated from '../MovieDetailRecommend/MovieDetailRecommend'

const MovieDetailTabContent = ({id}) => {

    const {data:review} = useMovieReviewQuery({id});
    const {data:recommend} = useMovieRecommendQuery({id});

  return (
    <div className="movie-detail-tab-wrap">
        <div className="">
            <button>Review ({review?.length})</button>
            <button>Related Movies ({recommend?.length})</button>
        </div>
             <MovieDetailReview review={review}/>
             <MovieDetailRelated recommend={recommend}/>
    </div>
  )
}

export default MovieDetailTabContent