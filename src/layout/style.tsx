import css from "styled-jsx/css";

export const LayoutContainer = css`
  .layout {
    margin: 50px auto 0 auto;
    width: 1240px;
  }

  @media (max-width: 1300px) {
    .layout {
      width: 85%;
    }
  }
  
  @media (max-width: 800px) {
    .layout {
      width: 90%;
    }
  }
  
  @media (max-width: 460px) {
    .layout  {
      width: 100%;
    }
  }
`;

export const HeaderStyle = css`
  .top-header-container {
    display: none;
    width: 100%;
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;

    background-color: var(--W2);

    -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  }
    
  .top-header-container .header-content {
    margin: 0 auto;
    width: 1240px;
    display: flex;
    padding: 9px 0;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }

  @media (max-width: 1300px) {
    .top-header-container .header-content {
      width: 85%;
    }
  }

  @media (max-width: 800px) {
    .top-header-container .header-content {
      width: 90%;
    }
  }

  @media (max-width: 460px) {
    .top-header-container{
      display: block;
    }
  }

  .buttom-header-container {
    display: none;
    width: 100%;
    position: fixed;
    height: 50px;
    z-index: 10000;

    background-color: var(--W2);
    
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  }
    
  .buttom-header-container + .header-content {
    margin: 0 auto;
    display: flex;
    padding: 9px 0;
    justify-content: space-between;
    align-items: center;
  }

  .header-content {
    display: flex;
    justify-content: center;
    width: 70%;
    margin: 0 auto;  
  }

  
  @media (max-width: 460px) {
    .buttom-header-container {
      top: initial;
      bottom: 0;
      display: flex;
      justify-content: center;
    }

    .header-content > div {
      display: contents;
    }
  }

  .header-container {
    width: 100%;
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    
    background-color: var(--W2);
    
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  }

  .header-container .header-content{
    margin: 0 auto;
    z-index: 1000;
    width: 1240px;
    display: flex;
    padding: 9px 0;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }

  @media (max-width: 1300px) {
    .header-container .header-content{
      width: 85%;
    }
  }
  
  @media (max-width: 800px) {
    .header-container .header-content {
      width: 90%;
    }
  }
  
  @media (max-width: 460px) {
    .header-container .header-content {
      display: none;
    }
  }
`;
