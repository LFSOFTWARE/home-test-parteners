import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% 0 3% 0;
  position: relative;
`;



export const Input = styled.input`
  width: 100%;
  height: 58px;
  background-color: #142436;
  border: none;
  border-radius: 25px;
  color: white;
  padding-left: 20px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`

export const SearchIcon = styled.img`
width: 25px;
height: 25px;
position: absolute;
right: 30px;
`