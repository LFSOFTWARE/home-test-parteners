
import { useContext } from 'react';
import { Card } from '../../components/Card';
import { SearchBar } from '../../components/SearchBar';
import { CardWrapper, Container, Content, SearchBox } from './styles';
import { UserContext } from '../../contexts/userContext';



export function Home() {
  const { users } = useContext(UserContext)
  return (
    <Container>
      <Content>
        <SearchBox>
          <SearchBar />
        </SearchBox>
        <CardWrapper>
          {users.map((user) => (
              <Card key={user.id} user={user} />
            ))}
        </CardWrapper>
      </Content>
    </Container>
  );
}
