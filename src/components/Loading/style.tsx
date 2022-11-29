import css from "styled-jsx/css";

export const Spinner = css`
  .spinner-container {
    position: fixed;
    top: 0;
    z-index: 2000;
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);

    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  } 
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3;
    border-top: 10px solid #383636;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`;