import React from 'react'
import { Dropdown } from 'react-bootstrap';

const PopularFilter = ({ onSortChange }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Sort
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => onSortChange('desc')}>High to Low</Dropdown.Item>
        <Dropdown.Item onClick={() => onSortChange('asc')}>Low to High</Dropdown.Item>
      </Dropdown.Menu>  
    </Dropdown>
  )
}

export default PopularFilter