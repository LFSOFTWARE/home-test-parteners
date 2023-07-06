import { render, fireEvent, screen } from '@testing-library/react';
import { UserContext } from '../../contexts/userContext';
import { SearchBar } from '.';

jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
}));

jest.mock('notistack', () => ({
  enqueueSnackbar: jest.fn(),
}));

describe('SearchBar', () => {
  const setQueryMock = jest.fn();

  
  test('calls setQuery with the correct value when text is entered', () => {
    render(
      <UserContext.Provider value={{ setQuery: setQueryMock }}>
        <SearchBar />
      </UserContext.Provider>
    );
    const input = screen.getByPlaceholderText('Enter your search terms');

    fireEvent.change(input, { target: { value: 'test query' }});

    expect(setQueryMock).toHaveBeenCalledWith('test query');
  });
 
});
