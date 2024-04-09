import React from 'react'
import { Form } from 'react-bootstrap';

const PopularFilter = ({ onSortChange }) => {
  return (
    <Form.Select aria-label="Popular" onChange={(e) => onSortChange(e.target.value)}>
      <option>Sort</option>
      <option value="desc">High to Low</option>
      <option value="asc">Low to High</option>
    </Form.Select>
  )
}

export default PopularFilter