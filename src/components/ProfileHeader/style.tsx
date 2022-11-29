import css from "styled-jsx/css";

export const Styles = css`
  .container {
    margin-top: 74px;
    display: flex;
    padding: 16px;
    gap: 16px;
    background-color: var(--W3);
    border-radius: 8px;
    color: var(--W11);

    -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  }

  .img-container img {
    max-width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }

  .content-container div:first-child {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    .img-container img {
      max-width: 120px;
      height: 120px;
    }

    .content-container div:nth-child(2) {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 460px) {
    .container {
      border-radius: 0;
      flex-direction: column;
    }

    .img-container {
      object-fit: cover;
      width: 100%;
    }

    .img-container img {
      min-width: 100%;
      height: auto;
      border-radius: 6px;
    }

    .content-container {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  
  @media (max-width: 600px) {
    .divider {
      display: none;
    }
  }

  .title {
    font-size: 14px;
    font-weight: bolder;
  }
  
  .breed {
    font-size: 12px;
    color: var(--W8);
    margin-top: 4px;
  }

  .name {
    font-size: 18px;
    font-weight: 600;
  }
  
  .subname {
    font-size: 12px;
    color: var(--W8);
  }
  
  .description {
    font-size: 14px;
    font-weight: 400;
  }

  .mobile-description {
    font-size: 14px;
    font-weight: 400;
    display: none;
  }

  @media (max-width: 460px) {
    .description {
      display: none;
    }
    .mobile-description {
      display: block;
    }
  }
`;
