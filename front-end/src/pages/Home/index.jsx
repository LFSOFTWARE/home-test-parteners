
import { Card } from '../../components/Card';
import { SearchBar } from '../../components/SearchBar';
import { CardWrapper, Container, Content, SearchBox } from './styles';



export function Home() {
  return (
    <Container>
      <Content>
        <SearchBox>
          <SearchBar />
        </SearchBox>
        <CardWrapper>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
            <Card />
          ))}
        </CardWrapper>
      </Content>
    </Container>
  );
}
