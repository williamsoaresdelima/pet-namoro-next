import React from 'react'

import { HeaderStyle } from './style';
import SearchBar from '../components/SearchBar/SearchBar'
import ToolBar from '../components/ToolBar/ToolBar';
import Link from 'next/link';

function Header() {
  function returnValue(value: string) {
  };
  return (
    <>
      <div className='header-container'>
        <div className="header-content">
          <Link href="/">
            <h1>Namoro-Pet</h1>
          </Link>
          <SearchBar/>
          <div className="tool-bar">
              <ToolBar/>
          </div>
        </div>
      </div>
      <div className='top-header-container'>
        <div className="header-content">
          <Link href="/">
            <h1>Namoro-Pet</h1>
          </Link>
          <SearchBar/>
        </div>
      </div>
      <div className='buttom-header-container'>
        <div className="header-content header-mobile">
          <ToolBar isMobile={true}/>
        </div>
      </div>
      <style jsx>{HeaderStyle}</style>
    </>
  )
}

export default Header
