import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { useMovieGenreQuery } from '../../../../hook/useMoveGenre';

const GenresFilter = ({ onGenreChange }) => {
  const { data: genres, isLoading, isError } = useMovieGenreQuery();

  if (isLoading) return <div>Loading genres...</div>;
  if (isError) return <div>Error loading genres.</div>;

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Genre
      </Dropdown.Toggle>
      <Dropdown.Menu>
       {genres.map(genre => (
          <Dropdown.Item onClick={() => onGenreChange(genre.id)}>{genre.name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>  
    </Dropdown>
  );
}

export default GenresFilter