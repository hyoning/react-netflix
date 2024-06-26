import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopMovieSlide from './components/TopMovieSlide/TopMovieSlide'
import UpComingMovieSlide from './components/UpComingMovieSlide/UpComingMovieSlide'

const Homepage = () => {
  return (
    <div>
      <Banner/>
      <PopularMovieSlide/>
      <TopMovieSlide/>
      <UpComingMovieSlide/>
    </div>
  )
}

export default Homepage