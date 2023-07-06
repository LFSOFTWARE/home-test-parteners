import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #283D58;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1920px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`


export const CardWrapper = styled.div`
display: flex;
flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const SearchBox = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;

@media (max-width: 425px) {
    flex-direction: column;
  }
`