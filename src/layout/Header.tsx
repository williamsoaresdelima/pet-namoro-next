import React from 'react'

import { HeaderStyle } from './style';
import SearchBar from '../components/SearchBar/SearchBar'
import ToolBar from '../components/ToolBar/ToolBar';

function Header() {
  function returnValue(value: string) {
  };
  return (
    <>
      <div className='header-container'>
        <div className="header-content">
          <h1>Namoro-Pet</h1>
          <SearchBar/>
          <div className="tool-bar">
              <ToolBar callBackFunction={returnValue}/>
          </div>
        </div>
      </div>
      <div className='top-header-container'>
        <div className="header-content">
          <h1>Namoro-Pet</h1>
          <SearchBar/>
        </div>
      </div>
      <div className='buttom-header-container'>
        <div className="header-content header-mobile">
          <ToolBar callBackFunction={returnValue} isMobile={true}/>
        </div>
      </div>
      <style jsx>{HeaderStyle}</style>
    </>
  )
}

export default Header
