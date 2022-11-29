import styled from "styled-components";


interface props {
  active: boolean
}

export const PageNumber = styled.span<props>`
  border-radius: 100%;
  font-size: 18px;
  padding: 8px 12px;
  margin: 8px;
  font-weight: 700;
  background-color: ${props => props.active ? 'lightblue' : 'trasparent'};

  :hover {
    background-color: ${props => props.active ? 'lightblue' : 'lightgray'};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;