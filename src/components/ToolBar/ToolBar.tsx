import Link from 'next/link'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdLogin, MdLogout } from 'react-icons/md'
import { BsHouse } from 'react-icons/bs'
import { signOut, useSession } from 'next-auth/react'

import Avatar from '../Avatar/Avatar'
import IToolBar from './IToolBar'
import { ToolContainer } from './style'

function ToolBar({isMobile = false}: IToolBar) {
  const { status } = useSession();
  return (
    <>
      <div className='tool-container'>
        {!isMobile ? (
          <>
            <AiOutlineHeart size="16px"/>
            <Link href='/'>
              <div className="svg">
                <BsHouse size="16px"/>
              </div>
            </Link>
            {status === "authenticated"
              ? <Link href={"/signup"}>
                  <MdLogout size="16px" onClick={() => signOut()}/>
                </Link>
              : <Link href={"/api/auth/signin"}>
                  <MdLogin size="16px"/>
                </Link>
            }
            <Avatar
              src="https://s2.glbimg.com/qsj9O4LxSvKZop_4IaKlAr-4yvk=/e.glbimg.com/og/ed/f/original/2022/01/07/border-collie-pesquisa.jpeg"
            />
          </>
        ) : (
          <>
            <AiOutlineHeart size="30px"/>
            <Link href='/'>
              <div className="svg">
                <BsHouse size="30px"/>
              </div>
            </Link>
            {status === "authenticated"
              ? <Link href={"/signup"}>
                  <MdLogout size="30px" onClick={() => signOut()}/>
                </Link>
              : <Link href={"/api/auth/signin"}>
                  <MdLogin size="30px"/>
                </Link>
            }
            <Avatar
              src="https://s2.glbimg.com/qsj9O4LxSvKZop_4IaKlAr-4yvk=/e.glbimg.com/og/ed/f/original/2022/01/07/border-collie-pesquisa.jpeg"
              size="30px"
            />
          </>
        )}
      </div>
      <style jsx>
        {ToolContainer}
      </style>
    </>
  )
}


export default ToolBar
