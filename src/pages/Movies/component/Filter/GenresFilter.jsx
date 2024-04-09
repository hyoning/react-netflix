import React from 'react'
import { Form } from 'react-bootstrap';
import { useMovieGenreQuery } from '../../../../hook/useMoveGenre';

const GenresFilter = ({ onGenreChange }) => {
  const { data: genres, isLoading, isError } = useMovieGenreQuery();

  if (isLoading) return <div>Loading genres...</div>;
  if (isError) return <div>Error loading genres.</div>;

  return (
    <Form.Select aria-label="genre" onChange={e => onGenreChange(e.target.value)}>
      <option value="">Genre</option>
      {genres.map(genre => (
        <option key={genre.id} value={genre.id}>{genre.name}</option>
      ))}
     </Form.Select>
  );
}

export default GenresFilter