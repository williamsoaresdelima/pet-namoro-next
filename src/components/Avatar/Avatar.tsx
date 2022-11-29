import React from 'react'

import IAvatar from "./IAvatar"

function Avatar({size = '24px', src}: IAvatar) {
  
  return (
    <>
      <div className='img-container'>
        <img src={src} alt="foto de perfil"/>
      <style jsx>{`
        .img-container {
            width: auto;
            height: ${size};
        }
        
        .img-container > img {
          width: ${size};
          height: ${size};
          border-radius: 50%;
          cursor: pointer;
        }
          
        @media (max-width: 460px) {
          .img-container > img {
            width: min-content;
          }
        }
      `}</style>
      </div>
    </>
  )
}

export default Avatar