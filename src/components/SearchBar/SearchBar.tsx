import React from 'react'
import { MdSearch } from 'react-icons/md'

import ISearchBar from './ISearchBar'
import { SearchInput } from './style'

function SearchBar({callBackFunction}: ISearchBar) {
  return (
    <>
      <div className='search-container'>
        <div className='img-svg'>
          <MdSearch/>
        </div>
        <input
          className='search-input'
          type="text"
          placeholder="Pesquisar"
          onChange={
            (event: React.FormEvent<HTMLInputElement>) => callBackFunction(event.currentTarget.value)
          }
          />
      </div>
      <style jsx>
        {SearchInput}
      </style>
    </>
  )
}


export default SearchBar
