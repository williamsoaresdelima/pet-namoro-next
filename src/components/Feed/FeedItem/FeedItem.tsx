import React from 'react'
import Image from 'next/image'

import IFeedItem from './IFeedItem'

function FeedItem({ imageURL, title } : IFeedItem) {
  return (
    <div className='container'>
      <div className='img-container'>
        <Image src={imageURL} alt={title} width="300" height="200"
          style={{
            width: "calc(100% - 16px)",
            height: "100%",
            objectFit: "cover",
            aspectRatio: "1",
            borderRadius: "4px",
          }}
        />
      </div>
      <div className='title-container'>
        <span/>
        <h1>{title}</h1>
      </div>
      <style jsx>{`
        .container {
          height: 80%;
        }

        .img-container {
          width: 100%;
          height: 100%;
          padding: 8px;
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
