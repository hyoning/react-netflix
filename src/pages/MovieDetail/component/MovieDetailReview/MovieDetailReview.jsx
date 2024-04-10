import React from 'react'
import {useMovieReviewQuery} from '../../../../hook/useMovieReview'
import {Alert} from 'react-bootstrap';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner'
import MovieReviewCard from '../MovieReviewCard/MovieReviewCard';
import './MovieDetailReview.style.css'
const MovieDetailReview = ({id}) => {
    const {data:review, isLoading, isError, error} = useMovieReviewQuery({id});
    if (isLoading) {
        return <LoadingSpinner />;
      }
      if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>;
      }
  return (
    <div className="detail-review-wrap">
        <h3 className="review-title">Review</h3>
        <ul className="review-list">
            {review?.map((item, index) => (
                <li key={index}>
                    <MovieReviewCard item={item}/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MovieDetailReview