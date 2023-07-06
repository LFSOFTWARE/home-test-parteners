import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('Card', () => {
  const mockUser = {
    name: 'John Doe',
    city: 'New York',
    country: 'USA',
    favorite_sport: 'Soccer',
  };

  beforeEach(() => {
    
  });

  test('renders user name correctly', () => {
    render(<Card user={mockUser} />);
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
  });

  test('renders user location correctly', () => {
    render(<Card user={mockUser} />);
    expect(screen.getByText(`${mockUser.city}, ${mockUser.country}`)).toBeInTheDocument();
  });

  test('renders user favorite sport correctly', () => {
    render(<Card user={mockUser} />);
    expect(screen.getByText(mockUser.favorite_sport)).toBeInTheDocument();
  });

  test('renders the correct number of icons', () => {
    render(<Card user={mockUser} />);
    const icons = screen.getAllByRole('img');
    expect(icons).toHaveLength(2);
  });
});
