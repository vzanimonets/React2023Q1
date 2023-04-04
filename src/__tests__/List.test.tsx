import React from 'react';

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import List from '../components/List/List';
import { v4 as uuidv4 } from 'uuid';
import pic12 from '../assets/images/12.jpg';

describe('List', () => {
  it('renders a list of items', () => {
    const items = [
      {
        id: uuidv4(),
        title: 'Title',
        description: 'Text',
        image: `${pic12}`,
        delivery: 'No',
        status: 'Temporarily Out Of Stock',
      },
      {
        id: uuidv4(),
        title: 'Title-1',
        description: 'Text',
        image: `${pic12}`,
        delivery: 'No',
        status: 'Temporarily Out Of Stock',
      },
      {
        id: uuidv4(),
        title: 'Title-2',
        description: 'Text',
        image: `${pic12}`,
        delivery: 'Yes',
        status: 'In stock',
      },
    ];

    render(<List data={items} />);

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Title-1')).toBeInTheDocument();
    expect(screen.getByText('Title-2')).toBeInTheDocument();

    expect(screen.getByText('In stock')).toBeInTheDocument();
    expect(screen.getByText('Yes')).toBeInTheDocument();
  });
});
