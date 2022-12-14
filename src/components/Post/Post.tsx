import React from 'react'

import Avatar from '../Avatar/Avatar'
import IPost from './IPost'
import { Styles } from './style'

function Post({data} : {data : IPost}) {
  const date = new Date(data.date).toLocaleDateString('pt-BR').replaceAll('/', '-')

  return (
    <div className='post-container'>
      <div className='img-container'>
        <img
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className='content'>
        <div className='content-header'>
          <Avatar src={data.authorImage} size={'36px'}/>
          <h1>
            {data.postAuthor}
          </h1>
          <span className='date'>
            {date}
          </span>
        </div>
        <div className='content-body'>
          <div dangerouslySetInnerHTML={{__html: data.html}}>
          </div>
        </div>
      </div>
      <style jsx>{Styles}</style>
    </div>
  )
}

export default Post