import css from "styled-jsx/css";

export const ContactContainer = css`
  .container {
    margin: 40px auto 0 auto;
    width: 1240px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .container div:nth-child(2) {
    gap: 8px;
  }

  .row {
    display: flex;
    flex: 1;
    flex-direction: row;
  }

  .row:not(:first-child){
    margin-top: 16px;
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
  
  @media (max-width: 460px) {
    .container {
      margin-bottom: 70px;
    }

    .row:nth-child(2) + div:first-child {
      margin-right: 0;
    }

    .row {
      flex-direction: column;
    }

    .row + div:nth-child(2) {
      margin-left: 0;
      margin-top: 16px;
    }
  }

  .title {
    font-size: 32px;
    text-align: center;
    color: var(--W11);
  }
`;
