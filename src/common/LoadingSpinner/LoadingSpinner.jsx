import React from 'react';
import { Spinner } from 'react-bootstrap';
import './LoadingSpinner.style.css';

const LoadingSpinner = () => {
  return (
    <div className='spinner-area'>
      <Spinner animation='border' variant='primary' />
    </div>
  );
};

export default LoadingSpinner;