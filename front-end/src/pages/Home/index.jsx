
import { Card } from '../../components/Card';
import { SearchBar } from '../../components/SearchBar';
import { CardWrapper, Container, Content, SearchBox } from './styles';

import ButtonUpload from '../../components/ButtonUpload';
import { useUser } from '../../hooks/useUser';
import Pagination from '../../components/Pagiantion';


export function Home() {
  const { users } = useUser()

  return (
    <Container>
      <Content>
        <SearchBox>
          <SearchBar />
          <ButtonUpload />
        </SearchBox>
        <CardWrapper>
          {users.map((user) => (
              <Card key={user.id} user={user} />
            ))}
        </CardWrapper>
        <Pagination />
      </Content>
    </Container>
  );
}
