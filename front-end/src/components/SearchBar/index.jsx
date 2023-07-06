
import { Container, Input, SearchIcon } from './styles';
import { useUser } from '../../hooks/useUser';


export function SearchBar() {

  const { setQuery } = useUser()

  return (
    <Container>
      <Input placeholder='Enter your search terms' onChange={(e => setQuery(e.target.value))} />
      <SearchIcon src='./search-white.png' alt='search' />
    </Container>
  );
}
