import React from 'react';

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import List from '../components/List/List';
import { v4 as uuidv4 } from 'uuid';
import pic12 from '../assets/images/12.jpg';

describe('List', () => {
  it('renders a list of items', async () => {
    const items = [
      {
        id: uuidv4(),
        firstName: 'Title-1',
        lastName: 'Text',
        image: `${pic12}`,
        age: 10,
      },
      {
        id: uuidv4(),
        firstName: 'Title-2',
        lastName: 'Text',
        image: `${pic12}`,
        age: 10,
      },
      {
        id: uuidv4(),
        firstName: 'Title-3',
        lastName: 'Text',
        image: `${pic12}`,
        age: 10,
      },
    ];

    render(<List data={items} isLoading={false} />);

    expect(await screen.getByText('Title-1 Text,10')).toBeInTheDocument();
    expect(await screen.getByText('Title-2 Text,10')).toBeInTheDocument();
    expect(await screen.getByText('Title-3 Text,10')).toBeInTheDocument();
  });
});
