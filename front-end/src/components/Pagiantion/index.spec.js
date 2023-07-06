import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { UserContext } from '../../contexts/userContext';
import Pagination from '.';


jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
}));

jest.mock('notistack', () => ({
  enqueueSnackbar: jest.fn(),
}));


describe('Pagination', () => {
  const nextPageMock = jest.fn();
  const previousPageMock = jest.fn();

  const userContextValue = {
    page: 1,
    nextPage: nextPageMock,
    previousPage: previousPageMock,
    users: [{}],
    query: null,
  };

  beforeEach(() => {
   
  });

  test('renders page number correctly', () => {
    render(
      <UserContext.Provider value={userContextValue}>
        <Pagination />
      </UserContext.Provider>
    );
    expect(screen.getByText(userContextValue.page)).toBeInTheDocument();
  });

  test('calls nextPage when Next button is clicked', () => {
    render(
      <UserContext.Provider value={userContextValue}>
        <Pagination />
      </UserContext.Provider>
    );
    fireEvent.click(screen.getByTitle('Next'));
    expect(nextPageMock).toHaveBeenCalled();
  });

  test('calls previousPage when Previous button is clicked', () => {
    render(
      <UserContext.Provider value={userContextValue}>
        <Pagination />
      </UserContext.Provider>
    );
    fireEvent.click(screen.getByTitle('Previous'));
    expect(previousPageMock).toHaveBeenCalled();
  });
  
});
