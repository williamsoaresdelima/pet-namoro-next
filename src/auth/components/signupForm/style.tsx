import css from "styled-jsx/css";

export const styles = css`
  .container {
    margin: 80px auto 0 auto;
    width: 448px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    border-radius: 8px;
    margin-top: 80px;
    background: var(--W3); 

    -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  }
  


  .container h1 {
    font-size: 32px;
    color: var(--W11)
  }

  .row {
    display: flex;
    flex: 1;
    flex-direction: row;
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  .links a {
      color: var(--W9);
      cursor: pointer;
  }

  .links a:hover {
    color: var(--W11);
    text-decoration: underline;
  }

  div {
    margin-top: 12px; 
  }

  .long-row {
    display: flex;
    justify-content: center;
    align-itens: center;
    flex-direction: row;
    gap: 12px;
    margin-bottom: 12px;
  }
  
  button {
    border: none;
    border-radius: 6px;
    color: var(--W3);
    background-color: green;
    padding: 8px 24px;
    font-size: 18px;
  }

  button:disabled {
    background-color: lightgray;
  }
  
  @media (max-width: 1300px) {
    .container {
      width: 85%;
    }
  }
  
  @media (max-width: 800px) {
    .container {
      width: 90%;
    }
  }

  .title {
    font-size: 32px;
    text-align: center;
    color: var(--W11);
  }

  @media (max-width: 500px) {
    .container {
      border-radius: 0px;
    }
    .long-row {
      gap: 0px;
      margin-bottom: 0px;
      flex-direction: column;
    }
  }
  @media (max-width: 460px) {
    .container {
      margin-top: 40px;
    }
  }
`;
