import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'
import IAvatar from "./IAvatar"

let link = '/signup'

function Avatar({size = '24px', src}: IAvatar) {
  const { status } = useSession();
  React.useEffect(() => {
    console.log(status)
    if (status === "authenticated" ) {
      link = '/profile'
    }
  }, [status])
  return (
    <>
    <Link href={link} >
      <div className='img-container'>
        <img src={src} alt="foto de perfil"/>
      </div>
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
    </Link>
    </>
  )
}

export default Avatar