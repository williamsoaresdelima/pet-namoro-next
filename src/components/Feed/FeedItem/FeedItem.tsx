import React from 'react'
import css from 'styled-jsx/css';

import IFeedItem from './IFeedItem'

function FeedItem({ imageURL, title } : IFeedItem) {
  return (
    <div className='container'>
      <div className='img-container'>
        <img src={imageURL} alt={title} />
      </div>
      <div className='title-container'>
        <span/>
        <h1>{title}</h1>
      </div>
      <style jsx>{`
        .container {
          height: 80%;
        }

        .container .img-container {
          height: 100%;
          padding: 8px;
          object-fit: cover;
        }

        .img-container div {
          min-height: 160px;
          width: 100%;
          height: inherit;
        }

        .img-container div img {
            min-height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 4px;
        }
        
        .title-container {
          position: relative;
        }

        .title-container span {
          position: absolute;
          content: '';
          width: 14px;
          height: 6px;
          background-color: var(--W5);
          top: 6px;
          left: 8px;
        }
      
        .title-container h1 {
          color: var(--W11);
          text-transform: capitalize;
          margin-left: 24px;
        }
      `}</style>
    </div>
  )
}

export default FeedItem
