import SearchBar from '../components/SearchBar/SearchBar';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('App', () => {
  it('should have input with placeholder Search...', () => {
    render(<SearchBar onSubmit={() => {}} />);
    expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
  });
});
