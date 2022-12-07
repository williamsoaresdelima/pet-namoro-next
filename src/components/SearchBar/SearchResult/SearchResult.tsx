import React from 'react'

import ISearchResults from './ISearchResult'
import { styles } from "./style"

function SearchResult({ results, onClickResult }: ISearchResults) {
  return (
    <div className="search-results">
      {results.map((result) => (
        <div className="result-item" key={result.link}>
          <a
            href={result.link}
            onClick={(event) => {
              event.preventDefault();
              onClickResult(result);
            }}
          >
            {result.title}
          </a>
        </div>
      ))}
      <style jsx>{styles}</style>
    </div>
  );
};

export default SearchResult;
