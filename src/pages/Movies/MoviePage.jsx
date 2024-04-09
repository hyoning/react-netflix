import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { useSearchMovieQuery } from '../../hook/useSearchMovie'
import { Alert } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'
import MoviePageCard from './component/MoviePageCard/MoviePageCard';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './MoviePage.style.css'
import GenresFilter from './component/Filter/GenresFilter';
import PopularFilter from './component/Filter/PopularFilter';
//경로 2가지 
//nav바에서 클릭해서 온 경우 => popularMovie 보여주기
//keyword 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌

//page state 만들기
//페이지네이션 클릭할때마다 page바꾸기
//page 값이 바뀔때 마다 userSearchMovie page까지 넣어서 fetch

const MoviePage = () => {
  // eslint-disable-next-line
  const [query, setQuery] = useSearchParams();
  const keyword = query.get('q');
  const pageTitle = keyword ? "Search" : "Movie";
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [sortOrder, setSortOrder] = useState("");
  const [genresFilter, setGenresFilter] = useState("");
  const {data, isLoading, isError, error} = useSearchMovieQuery({keyword, page});
  
  const handlePageClick = ({selected}) => {
    setPage(selected + 1)
  }
  // 정렬 옵션 변경 핸들러
  const handleSortChange = (order) => {
    setSortOrder(order);
  };
  //장르 옵션 변경 핸들러
  const handleGenreChange = (genreId) => {
    setGenresFilter(genreId);
  };

  // 필터링된 영화 데이터를 준비합니다.
  let filteredMovies = data?.results || [];
  if (genresFilter) {
    filteredMovies = filteredMovies.filter(movie => movie.genre_ids.includes(parseInt(genresFilter)));
  }
  // 정렬 적용
  if (sortOrder) {
    filteredMovies.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.vote_average - b.vote_average;
      } else {
        return b.vote_average - a.vote_average;
      }
    });
  }
 // 장르 필터 변경 시 페이지를 1로 리셋
  useEffect(() => {
    setPage(1);
  }, [genresFilter]);
  useEffect(() => {
    // URL의 쿼리 파라미터가 변경될 때 장르 필터를 초기화
    setGenresFilter("");
  }, [keyword]); 

  if(isLoading){
    return <h1>Loading...</h1>
    }
  if(isError){
      return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
    <div className="movie-page-wrap">
        <div className="movie-page-title">{pageTitle}
          {keyword ? <p className="movie-search-keyword">({keyword})</p> : ''}
        </div>
        <div className="filter-wrap">
          <div className="filter-total">전체 : {filteredMovies.length}</div>
          <div className="filter-box">
              <PopularFilter onSortChange={handleSortChange}/>
              <GenresFilter onGenreChange={handleGenreChange}/>
          </div>
        </div>
        <div className="movie-page-list">
            <Row>
              {filteredMovies.map((movie, index) => (
                <Col key={index} lg={6} xs={12}>
                  <MoviePageCard movie={movie}/>
                </Col>
              ))}
            </Row>
            <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={Math.ceil(filteredMovies.length / 10)}// 전체 페이지
                forcePage={page - 1}
                previousLabel="<"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
        </div>
    </div>
  )
}

export default MoviePage