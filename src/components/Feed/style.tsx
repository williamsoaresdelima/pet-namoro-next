import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 12px;
  margin-top: 24px;
  padding: 8px;
  background-color: var(--W3);
  border-radius: 8px;
  color: var(--W11);

  -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);


  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 460px) {
    border-radius: 0;
    grid-template-columns: 1fr;
  }
`;