import React from 'react';

import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import List from '../components/List/List';
import { v4 as uuidv4 } from 'uuid';
import pic12 from '../assets/images/12.jpg';

describe('List', () => {
  it('renders a list of items', () => {
    const items = [
      { id: uuidv4(), title: 'Title', text: 'Text', image: `${pic12}` },
      { id: uuidv4(), title: 'Title-1', text: 'Text', image: `${pic12}` },
      { id: uuidv4(), title: 'Title-2', text: 'Text', image: `${pic12}` },
    ];

    render(<List data={items} />);

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Title-1')).toBeInTheDocument();
    expect(screen.getByText('Title-2')).toBeInTheDocument();
  });
});
