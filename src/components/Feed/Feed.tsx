import React from 'react'
import FeedItem from './FeedItem/FeedItem'
import Link from 'next/link'

import IFeed from "./IFeed"
import { Container } from "./style"

function Feed({ data } : { data : IFeed[] }) {

  const array = Object.keys(data);
  const result = array.map((key: any) => {
    return data[key];
  });
  
  return (
    <div className='container'>
      {result.map((item, index) => {
        if (item.feedImageURL !== null) {
          return (
            <Link href={item.feedLink} key={index} >
              <FeedItem imageURL={item.feedImageURL} title={item.feedTitle} />
            </Link>
          )
        } 
      })
      }
      <style jsx>{Container}</style>
    </div>
  )
}

export default Feed