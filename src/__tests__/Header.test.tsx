import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';
import React from 'react';

describe('Header test', () => {
  test('Should show title for the page About', () => {
    render(<Header pageTitle="About" />);
    expect(screen.getByText(/About/i)).toBeDefined();
  });
  test('Should show title for the main page', () => {
    render(<Header pageTitle="Main page" />);
    expect(screen.getByText('Main page')).toBeDefined();
  });
});
