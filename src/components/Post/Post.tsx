import React from 'react'

import Avatar from '../Avatar/Avatar'
import IPost from './IPost'
import * as S from './style'

function Post({data} : {data : IPost}) {
  // const image = data.image.childImageSharp.gatsbyImageData;
  const date = new Date(data.date).toLocaleDateString('pt-BR').replaceAll('/', '-')

  return (
    <S.PostContainer>
      <S.ImgContainer>
        <img
          // src={{ ...image }}
          alt={data.title}
        />
      </S.ImgContainer>
      <S.Content>
        <S.ContentHeader>
          <Avatar src={data.authorImage} size={'36px'}/>
          <h1>
            {data.postAuthor}
          </h1>
          <S.Date>
            {date}
          </S.Date>
        </S.ContentHeader>
        <S.ContentBody>
          <div dangerouslySetInnerHTML={{__html: data.html}}>
          </div>
        </S.ContentBody>
      </S.Content>
    </S.PostContainer>
  )
}

export default Post