import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 2%;
  width: 300px;
  background-color: #142436;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  border-radius: 20px;
  height: 50px;
`;


export const Circle = styled.div`
  background-color: rgba(40, 61, 88, 1);
  width: 30px;
  height: 30px;
  border-radius: 20px;
  display: flex;
  justify-content: center;

  p{
    color: white;
    font-size: 19px;
  }
`

export const Button = styled.div`
  color: white;
  font-size: 20px;
  height: 50px;
  width: 50px;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    background-color: rgba(40, 61, 88, 0.2);
    cursor: pointer;
  }
`
