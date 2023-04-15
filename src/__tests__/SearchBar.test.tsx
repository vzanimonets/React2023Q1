import SearchBar from '../components/SearchBar/SearchBar';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('App', () => {
  it('should have input with placeholder Search...', () => {
    render(
      <Provider store={store}>
        <SearchBar onSubmit={() => {}} />
      </Provider>
    );

    expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
  });
});
