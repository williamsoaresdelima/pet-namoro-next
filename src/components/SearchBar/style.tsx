import css from "styled-jsx/css";

export const SearchInput = css`
  .search-input {    
    padding: 8px 16px 8px 28px;
    border: none;
    border-radius: 6px;
    background-color: var(--W3);
    color: var(--W9);
  }

    
  .search-input::placeholder {
    color: var(--W6);
  }

  .search-input:focus {
    outline: none;
    -webkit-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
    box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
  }

  .search-container {
    position: relative;
  }
    
  .img-svg {
    position: absolute;
    top: 8px;
    left: 6px;
    cursor: pointer;
  }

  .search-result {
    position: relative;
  }
`;