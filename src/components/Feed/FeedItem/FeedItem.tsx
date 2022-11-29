import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import styled from 'styled-components'
import IFeedItem from './IFeedItem'

function FeedItem({ imageURL, title } : IFeedItem) {
  return (
    <FeedContainer>
      <div className='img-container'>
        <GatsbyImage image={{ ...imageURL, layout: "fullWidth" }} alt={title} />
      </div>
      <div className='title-container'>
        <span/>
        <h1>{title}</h1>
      </div>
    </FeedContainer>
  )
}

const FeedContainer = styled.div`
height: 80%;
  .img-container {
    height: 100%;
    padding: 8px;
    object-fit: cover;

    > div {
      min-height: 160px;
      width: 100%;
      height: inherit;
      
      > img {
        min-height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 4px;
      }
    }
  }

  .title-container {
    position: relative;

    span {
      position: absolute;
      content: '';
      width: 14px;
      height: 6px;
      background-color: var(--W5);
      top: 6px;
      left: 8px;
    }

    h1 {
      color: var(--W11);
      text-transform: capitalize;
      margin-left: 24px;
    }
  }
`;


export default FeedItem
