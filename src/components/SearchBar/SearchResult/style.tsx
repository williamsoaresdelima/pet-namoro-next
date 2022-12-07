import css from "styled-jsx/css";

export const styles = css`
  .search-results {
    position: absolute;
    background-color: var(--W3);
    width: 100%;
    top: -1px;
    border-radius: 0 0 4px 4px;

    -webkit-box-shadow: 0px 10px 8px 2px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 10px 8px 2px rgba(0,0,0,0.2);
    box-shadow: 0px 10px 8px 2px rgba(0,0,0,0.2);
  }

  .result-item {
    padding: 8px;
  }

  .result-item:hover {
    background-color: var(--W5);
  }

  .result-item a {
    color: var(--W9v);

  }
`;
