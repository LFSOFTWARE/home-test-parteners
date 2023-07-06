
import { Container, Input, SearchIcon } from './styles';


export function SearchBar() {
  return (
    <Container>
      <Input placeholder='Enter your search terms' />
      <SearchIcon src='./search-white.png' alt='search'/>
    </Container>
  );
}
