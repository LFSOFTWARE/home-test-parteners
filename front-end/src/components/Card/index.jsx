
import { BoxInformations, Container, Icon, InfoWrapper } from './styles';


export function Card() {
  return (
    <Container>
      <h1>John Doe</h1>
      <BoxInformations>
        <InfoWrapper>
          <Icon src='../../adress.png' alt='' />
          <h3>São Paulo, Brasil</h3>
        </InfoWrapper>
        <InfoWrapper>
          <Icon src='../../sports.png' alt='' />
          <h3>Soccer</h3>
        </InfoWrapper>
      </BoxInformations>
    </Container>
  );
}
