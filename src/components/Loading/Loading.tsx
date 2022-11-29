import React from 'react';
import { Spinner } from './style';

function LoadingSpinner() {
  return (
    <>
      <div className='spinner-container'>
        <div className='spinner'>
        </div>
      </div>
      <style jsx>
        {Spinner}
      </style>
    </>
  )
}

export default LoadingSpinner;