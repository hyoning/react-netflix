import React from 'react'
import './MovieRecommendCard.style.css'

const MovieRecommendCard = ({item}) => {
  console.log(item);
  return (
    <div className="" style={{
      backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${item?.backdrop_path})`,
    }}>
      <h4>{item?.title}</h4>

    </div>
  )
}

export default MovieRecommendCard