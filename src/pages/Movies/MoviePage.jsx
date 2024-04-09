import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { useSearchMovieQuery } from '../../hook/useSearchMovie'
import { Alert } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'
import MovieCard from '../../common/MovieCard/MovieCard';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './MoviePage.style.css'
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
  const [page, setPage] = useState(1);

  const {data, isLoading, isError, error} = useSearchMovieQuery({keyword, page});
  const handlePageClick = ({selected}) => {
    setPage(selected + 1)

  }
    if(isLoading){
      return <h1>Loading...</h1>
      }
    if(isError){
        return <Alert variant='danger'>{error.message}</Alert>
    }
  return (
    <div className='movie-page-wrap'>
        <div>filter</div>
        <div className='movie-page-list'>
            <Row>
              {data.results.map((movie, index) => (
                <Col key={index} lg={3} xs={6}>
                  <MovieCard movie={movie}/>
                </Col>
              ))}
            </Row>
            <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={data?.total_pages} // 전체 페이지
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