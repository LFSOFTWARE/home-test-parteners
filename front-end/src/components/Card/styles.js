import styled from 'styled-components';

export const Container = styled.div`
  background-color: #142436;
  width: 15%;
  max-width: 284px;
  min-width: 284px;
  margin: 20px;
  padding: 20px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  justify-content: space-between;
  
  h1{
    color: white;
  }
  h3{
    color: white;
    font-weight: 500;
  }
  &:hover{
    cursor: pointer;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }
`;

export const Icon = styled.img`
  width: 20px;
  margin-right: 1.5rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;;
`;

export const BoxInformations = styled.div`
width: 100%;

`
