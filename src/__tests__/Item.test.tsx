import { render, screen } from '@testing-library/react';
import Item from '../components/Item/Item';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

describe('Item test', () => {
  test('Should show title', () => {
    const item = {
      id: uuidv4(),
      title: 'Item title',
      text: 'Item description',
      image: 'https://unsplash.it/800/600?image=82',
    };
    render(<Item {...item} />);
    expect(screen.getByText(/Item title/i)).toBeDefined();
    expect(screen.getByText(/Item description/i)).toBeDefined();
  });
});
