
import { BoxInformations, Container, Icon, InfoWrapper } from './styles';


export function Card({user}) {
  return (
    <Container>
      <h1>{user.name}</h1>
      <BoxInformations>
        <InfoWrapper>
          <Icon src='../../adress.png' alt='' />
          <h3>{user.city}, {user.country}</h3>
        </InfoWrapper>
        <InfoWrapper>
          <Icon src='../../sports.png' alt='' />
          <h3>{user.favorite_sport}</h3>
        </InfoWrapper>
      </BoxInformations>
    </Container>
  );
}
