import React from 'react'
import { usePopularMoviesQuery } from "../../../../hook/usePopularMovies";

const Banner = () => {
    const {data} = usePopularMoviesQuery();
    console.log(data);
  return (
    <div>
       
    </div>
  )
}

export default Banner