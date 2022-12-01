import css from "styled-jsx/css";

export const Styles = css`
  .post-container {
    display: flex;
    background-color: var(--W3);
    margin-top: 74px;
    border-radius: 4px;
    color: var(--W11);
    
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  }
  
  .img-container {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--W11);
    border-radius: 4px 0 0 4px;
  }

  .img-container img {
    border-radius: 4px 0 0 4px;
    max-height: 500px;
    width: 100%;
    object-fit: cover;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 12px;
    flex: 1;
    overflow-x: auto;
    max-height: 500px;
  }
  
  .content-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    position: relative;
  }
    
  .content-header h1 {
    font-size: 18px;
  }
  
  .date {
    position: absolute;
    right: 0;
    font-size: 14px;
    color: var(--W8);
  }

  .content-body {
    font-weight: 400;
  }
  
  .content-body div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .content-body h1 {
    font-size: 20px;
  }

  @media (max-width: 800px) {
    .post-container {
      flex-direction: column;
    }

    .content {
      max-height: initial;
     }
     
    .img-container {
      border-radius: 4px 4px 0 0;
    }

    .img-container img  {
      border-radius: 4px 4px 0 0;
    }
  }
`;