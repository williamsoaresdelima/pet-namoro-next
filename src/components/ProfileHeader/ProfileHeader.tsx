import React from 'react';

import IProfileHeader from './IProfileHeader';
import { Styles } from './style'

function ProfileHeader({ image, title, name, breed, description, ocupation } : IProfileHeader) {
  return (
    <> 
      <div className='container'>
        <div className="img-container">
          <img
            src={image}
            alt="Perfil"
          />
        </div>
        <div className="content-container">
          <div>
            <span className='title'>{title}</span>
            <span className='breed'>{breed}</span>
          </div>
          <div>
            <span className='name'>{name}</span>
            <span className='divider'> • </span>
            <span className='subname'>{ocupation}</span>
          </div>
            <span className='description'>
             {description}
            </span>
        </div>
        <span className='mobile-description'>
          {description}
        </span>
      </div>
      <style jsx>
        {Styles}
      </style>
    </>
  )
}

export default ProfileHeader