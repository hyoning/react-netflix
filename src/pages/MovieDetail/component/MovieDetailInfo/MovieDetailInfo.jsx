import React from 'react'

const MovieDetailInfo = ({movie, id}) => {

  return (
    <div>
      <div>{movie?.title}</div>
      <div>{movie?.overview}</div>

    </div>
  )
}

export default MovieDetailInfo