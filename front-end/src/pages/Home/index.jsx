
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
          {[
            {
              "id": 1,
              "name": "a",
              "city": "New York",
              "country": "bahia",
              "favorite_sport": "skate",
              "createdAt": "2023-07-05T18:59:27.000Z",
              "updatedAt": "2023-07-05T18:59:27.000Z"
            },
            {
              "id": 2,
              "name": "Luiz F",
              "city": "S�o Paulo",
              "country": "Brasil",
              "favorite_sport": "Futb",
              "createdAt": "2023-07-05T18:59:27.000Z",
              "updatedAt": "2023-07-05T18:59:27.000Z"
            },
            {
              "id": 3,
              "name": "John Doe",
              "city": "New York",
              "country": "USA",
              "favorite_sport": "Basketball",
              "createdAt": "2023-07-05T19:00:07.000Z",
              "updatedAt": "2023-07-05T19:00:07.000Z"
            },
            {
              "id": 4,
              "name": "Luiz F",
              "city": "S�o Paulo",
              "country": "Brasil",
              "favorite_sport": "Futb",
              "createdAt": "2023-07-05T19:00:07.000Z",
              "updatedAt": "2023-07-05T19:00:07.000Z"
            },
            {
              "id": 5,
              "name": "John Doe",
              "city": "New York",
              "country": "USA",
              "favorite_sport": "Basketball",
              "createdAt": "2023-07-05T19:00:08.000Z",
              "updatedAt": "2023-07-05T19:00:08.000Z"
            },
            {
              "id": 6,
              "name": "Luiz F",
              "city": "S�o Paulo",
              "country": "Brasil",
              "favorite_sport": "Futb",
              "createdAt": "2023-07-05T19:00:08.000Z",
              "updatedAt": "2023-07-05T19:00:08.000Z"
            },
            {
              "id": 7,
              "name": "John Doe",
              "city": "New York",
              "country": "USA",
              "favorite_sport": "Basketball",
              "createdAt": "2023-07-05T19:00:09.000Z",
              "updatedAt": "2023-07-05T19:00:09.000Z"
            },
            {
              "id": 8,
              "name": "Luiz F",
              "city": "S�o Paulo",
              "country": "Brasil",
              "favorite_sport": "Futb",
              "createdAt": "2023-07-05T19:00:09.000Z",
              "updatedAt": "2023-07-05T19:00:09.000Z"
            },
            {
              "id": 9,
              "name": "John Doe",
              "city": "New York",
              "country": "USA",
              "favorite_sport": "Basketball",
              "createdAt": "2023-07-05T19:00:10.000Z",
              "updatedAt": "2023-07-05T19:00:10.000Z"
            },
            {
              "id": 10,
              "name": "Luiz F",
              "city": "S�o Paulo",
              "country": "Brasil",
              "favorite_sport": "Futb",
              "createdAt": "2023-07-05T19:00:10.000Z",
              "updatedAt": "2023-07-05T19:00:10.000Z"
            },
            {
              "id": 11,
              "name": "John Doe",
              "city": "New York",
              "country": "USA",
              "favorite_sport": "Basketball",
              "createdAt": "2023-07-05T19:00:27.000Z",
              "updatedAt": "2023-07-05T19:00:27.000Z"
            },
            {
              "id": 12,
              "name": "Luiz F",
              "city": "S�o Paulo",
              "country": "Brasil",
              "favorite_sport": "Futb",
              "createdAt": "2023-07-05T19:00:27.000Z",
              "updatedAt": "2023-07-05T19:00:27.000Z"
            },
            {
              "id": 13,
              "name": "Luiz F",
              "city": "S�o Paulo",
              "country": "Brasil",
              "favorite_sport": "Futb",
              "createdAt": "2023-07-05T19:00:27.000Z",
              "updatedAt": "2023-07-05T19:00:27.000Z"
            },
            {
              "id": 14,
              "name": "Luiz F",
              "city": "S�o Paulo",
              "country": "Brasil",
              "favorite_sport": "Futb",
              "createdAt": "2023-07-05T19:00:27.000Z",
              "updatedAt": "2023-07-05T19:00:27.000Z"
            },
            {
              "id": 15,
              "name": "Luiz F",
              "city": "S�o Paulo",
              "country": "Brasil",
              "favorite_sport": "Futb",
              "createdAt": "2023-07-05T19:00:27.000Z",
              "updatedAt": "2023-07-05T19:00:27.000Z"
            }].map((user) => (
              <Card key={user.id} user={user} />
            ))}
        </CardWrapper>
      </Content>
    </Container>
  );
}
