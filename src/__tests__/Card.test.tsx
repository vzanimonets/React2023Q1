import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from '../components/Card/Card';

describe('Item test', () => {
  test('Should show title', () => {
    const item = {
      firstName: 'firstName',
      lastName: 'lastName',
      age: 23,
      id: '1',
      image: 'image.jpg',
    };
    render(<Card {...item} />);
    expect(screen.getByText(/firstName lastName,23/i)).toBeDefined();
  });
});
