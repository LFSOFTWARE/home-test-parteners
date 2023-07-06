
import { useContext } from 'react';
import { Container, Input, SearchIcon } from './styles';
import { UserContext } from '../../contexts/userContext';


export function SearchBar() {

  const { setQuery } = useContext(UserContext)

  return (
    <Container>
      <Input placeholder='Enter your search terms' onChange={(e => setQuery(e.target.value))} />
      <SearchIcon src='./search-white.png' alt='search' />
    </Container>
  );
}
