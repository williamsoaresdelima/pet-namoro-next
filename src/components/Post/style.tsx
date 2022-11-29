import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  background-color: var(--W3);
  margin-top: 74px;
  border-radius: 4px;
  color: var(--W11);

  -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--W11);
  border-radius: 4px 0 0 4px;

  > img {
    border-radius: 4px 0 0 4px;
    width: 100%;
  }
  
  @media (max-width: 800px) {
    border-radius: 4px 4px 0 0;

    > img {
      border-radius: 4px 4px 0 0;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  flex: 1;
  overflow-x: auto;
  max-height: 500px;

  @media (max-width: 800px) {
    max-height: initial;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  position: relative;

  > h1 {
    font-size: 18px;
  }
`;

export const Date = styled.div`
  position: absolute;
  right: 0;
  font-size: 14px;
  color: var(--W8);
`;

export const ContentBody = styled.div`
  font-weight: 400;
  
  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;

    > h1 {
      font-size: 20px;
    }
  }
`;