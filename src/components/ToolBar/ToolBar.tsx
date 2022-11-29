import Link from 'next/link'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsHouse } from 'react-icons/bs'
import Avatar from '../Avatar/Avatar'

import IToolBar from './IToolBar'
import { ToolContainer } from './style'

function ToolBar({callBackFunction, isMobile = false}: IToolBar) {
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
