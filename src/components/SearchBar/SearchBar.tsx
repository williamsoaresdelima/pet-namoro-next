import router from 'next/router';
import React from 'react'
import { MdSearch } from 'react-icons/md'
import { useSearchPosts } from '../../cms/hooks/useSearchPosts';
import SearchResult from './SearchResult/SearchResult';

import { SearchInput } from './style'

function SearchBar( ) {
  const [searchInput, setSearchInput] = React.useState("");
  const { posts, searchPosts, loading } = useSearchPosts();

  React.useEffect(() => {
    if (searchInput.length > 0) {
      searchPosts({
        variables: {
          searchInput,
        },
      });
    }
  }, [searchInput, searchPosts]);

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
          value={searchInput}
          onChange={
            (event: React.FormEvent<HTMLInputElement>) => setSearchInput(event.currentTarget.value)
          }
        />
        {!loading && searchInput.length > 0 && (
          <div className='search-result'>
            <SearchResult
              results={posts.map(({ slug, title }) => ({
                link: `/posts/${slug}`,
                title,
              }))}
              onClickResult={(result) => {
                router.push(result.link);
                setSearchInput("");
              }}
            />
          </div>
        )}
      </div>
      <style jsx>
        {SearchInput}
      </style>
    </>
  )
};

export default SearchBar;
