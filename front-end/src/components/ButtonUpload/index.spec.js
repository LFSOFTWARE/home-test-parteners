import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonUpload from '.';

jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
}));

jest.mock('notistack', () => ({
  enqueueSnackbar: jest.fn(),
}));

jest.mock('../../hooks/useUser', () => ({
  useUser: () => ({
    setFile: jest.fn()
  }),
}));



describe('ButtonUpload', () => {

  test('Should render input and Button', () => {
    render( <ButtonUpload />);

    const fileInput = screen.getByRole('button', { name: 'Upload CSV' });
    expect(fileInput).toBeInTheDocument();

  });
 
})